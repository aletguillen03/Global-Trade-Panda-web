// lib/googleForm.ts
export const GOOGLE_FORM_PREFILL_MAP: Record<string, string> = {
    nombre: 'entry.2084964628',
    email: 'entry.453217908',
    empresa: 'entry.1848695033',
    telefono: 'entry.920871016',
    mensaje: 'entry.2009005919',
    otro: 'entry.1453460285',
    // Si luego agregás campos ocultos para UTMs/meta, poné sus IDs acá:
    // utm_source: 'entry.XXXXXXXXXX',
    // utm_medium: 'entry.XXXXXXXXXX',
    // utm_campaign: 'entry.XXXXXXXXXX',
    // ...
  };
  
  type StringMap = Record<string, string | undefined>;
  
  function parseQuery(search: string): StringMap {
    const out: StringMap = {};
    try {
      const usp = new URLSearchParams(search);
      usp.forEach((v, k) => v && (out[k] = v));
    } catch {}
    return out;
  }
  
  function extractUtmsAndMeta(): StringMap {
    if (typeof window === 'undefined') return {};
    const q = parseQuery(window.location.search);
    return {
      utm_source: q.utm_source,
      utm_medium: q.utm_medium,
      utm_campaign: q.utm_campaign,
      utm_content: q.utm_content,
      utm_term: q.utm_term,
      referrer: document.referrer || undefined,
      path: window.location.pathname || undefined,
    };
  }
  
  function toPrefillParams(values: StringMap, map: Record<string, string>) {
    const params = new URLSearchParams();
    Object.entries(values).forEach(([k, v]) => {
      if (!v) return;
      const entryId = map[k];
      if (!entryId) return;
      params.set(entryId, v);
    });
    return params;
  }
  
  export function buildGoogleFormUrl(
    base: string,
    prefillMap: Record<string, string>,
    extraValues: StringMap = {}
  ): string {
    if (!base) return '';
    let url: URL;
    try {
      url = new URL(base);
    } catch {
      return '';
    }
  
    url.searchParams.set('usp', 'pp_url');
    if (!url.searchParams.has('embedded')) url.searchParams.set('embedded', 'true');
  
    const allValues: StringMap = { ...extractUtmsAndMeta(), ...extraValues };
    const prefill = toPrefillParams(allValues, prefillMap);
    prefill.forEach((v, k) => url.searchParams.set(k, v));
  
    return url.toString();
  }