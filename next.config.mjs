/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },

  async headers() {
    const chatkitOrigins = (() => {
      const sources = new Set()
      const raw = process.env.NEXT_PUBLIC_CHATKIT_WIDGET_URL
      if (!raw) return sources

      try {
        const { origin } = new URL(raw)
        sources.add(origin)
      } catch (error) {
        console.warn('[csp] Invalid NEXT_PUBLIC_CHATKIT_WIDGET_URL', error)
      }

      return sources
    })()

    const toDirective = (name, values) => `${name} ${Array.from(values).join(' ')}`

    const defaultSrc = new Set(["'self'"])
    const frameSrc = new Set(["'self'"])
    const scriptSrc = new Set(["'self'", "'unsafe-inline'", "'unsafe-eval'"])
    const styleSrc = new Set([
      "'self'",
      "'unsafe-inline'",
      'https://fonts.googleapis.com',
    ])
    const fontSrc = new Set(["'self'", 'https://fonts.gstatic.com', 'data:'])
    const imgSrc = new Set(["'self'", 'data:', 'https:'])
    const connectSrc = new Set(["'self'", 'https:'])
    const baseUri = new Set(["'self'"])
    const formAction = new Set(["'self'"])
    const frameAncestors = new Set(["'self'"])

    chatkitOrigins.forEach((origin) => {
      frameSrc.add(origin)
      scriptSrc.add(origin)
      connectSrc.add(origin)
    })

    const directives = [
      toDirective('default-src', defaultSrc),
      toDirective('frame-src', frameSrc),
      toDirective('script-src', scriptSrc),
      toDirective('style-src', styleSrc),
      toDirective('font-src', fontSrc),
      toDirective('img-src', imgSrc),
      toDirective('connect-src', connectSrc),
      toDirective('base-uri', baseUri),
      toDirective('form-action', formAction),
      toDirective('frame-ancestors', frameAncestors),
    ]

    const securityHeaders = [
      {
        key: 'Content-Security-Policy',
        value: directives.join('; '),
      },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()',
      },
    ]

    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig
