'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { buildGoogleFormUrl, GOOGLE_FORM_PREFILL_MAP } from '@/lib/googleForm';

type PresetName = 'tiny' | 'compact' | 'cozy';

function heightsFor(preset: PresetName, vw: number) {
  const map: Record<PresetName, number[]> = {
    tiny:    [1050, 980, 920, 820, 760],   // <380, <480, <768, <1024, >=1024
    compact: [1150, 1080, 1020, 940, 880],
    cozy:    [1250, 1180, 1100, 1000, 960],
  };
  const [m380, m480, m768, m1024, desktop] = map[preset];
  if (vw < 380) return m380;
  if (vw < 480) return m480;
  if (vw < 768) return m768;
  if (vw < 1024) return m1024;
  return desktop;
}

function getForcedHeightFromQuery() {
  try {
    const q = new URLSearchParams(window.location.search);
    const h = q.get('formH');
    if (!h) return undefined;
    const n = Number(h);
    return Number.isFinite(n) && n > 400 ? n : undefined;
  } catch {
    return undefined;
  }
}

export function Contact() {
  const PRESET: PresetName = 'compact'; // cambiá a 'tiny' si querés aún más chico
  const base =
    process.env.NEXT_PUBLIC_GOOGLE_FORM_EMBED_SRC ??
    'https://docs.google.com/forms/d/e/1FAIpQLSdGtMiTkrdzTIrsgY5x_-bLtLtSkPXtYhsQp0DXpsJzLWXluQ/viewform?embedded=true';

  const [src, setSrc] = useState<string>('');
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [height, setHeight] = useState<number>(900);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // URL con prefill + UTMs
  useEffect(() => {
    setSrc(buildGoogleFormUrl(base, GOOGLE_FORM_PREFILL_MAP));
  }, [base]);

  // Altura fija con scroll interno (y override ?formH=)
  useEffect(() => {
    const update = () => {
      const forced = getForcedHeightFromQuery();
      if (forced) return setHeight(forced);
      const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
      setHeight(heightsFor(PRESET, vw));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [PRESET]);

  const fallbackHref = useMemo(() => {
    try {
      const url = new URL(base);
      url.searchParams.delete('embedded');
      return url.toString();
    } catch {
      return base;
    }
  }, [base]);

  return (
    <section id="contacto" className="w-full px-4 py-16 md:px-8 lg:px-12">
      {/* Limitar el ancho para que “se vea pequeño” */}
      <div className="mx-auto w-full max-w-xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">
          Contacto
        </h2>
        <p className="mt-2 text-zinc-600 text-sm text-center">
          Contanos qué necesitás importar y te respondemos con una cotización y los próximos pasos.
        </p>

        {/* Loader */}
        {!loaded && !failed && (
          <div
            aria-live="polite"
            aria-busy="true"
            className="mt-6 h-32 w-full animate-pulse rounded-md border border-zinc-200"
          />
        )}

        {/* Iframe con scroll interno */}
        {!failed && (
          <div className="mt-6">
            <iframe
              ref={iframeRef}
              title="Formulario de contacto"
              src={src || undefined}
              className="w-full rounded-md border border-zinc-200 bg-white"
              style={{ height: height * 0.75 }}   // ↓ 25% más bajo
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              scrolling="yes"
              onLoad={() => setLoaded(true)}
              onError={() => {
                setFailed(true);
                setLoaded(true);
              }}
            />
          </div>
        )}

        {/* Fallback */}
        {failed && (
          <div className="mt-6 rounded-md border border-amber-300 bg-amber-50 p-4">
            <p className="text-amber-900">
              No pudimos cargar el formulario embebido. Abrilo en una pestaña nueva:
            </p>
            <a
              className="mt-2 inline-block rounded-md border px-3 py-2 text-sm font-medium hover:bg-zinc-50"
              href={fallbackHref}
              target="_blank"
              rel="noopener"
            >
              Abrir formulario
            </a>
          </div>
        )}

        <p className="mt-6 text-xs text-zinc-500">
          Usamos tus datos sólo para responder tu consulta. No compartimos tu información con terceros.
        </p>
      </div>
    </section>
  );
}