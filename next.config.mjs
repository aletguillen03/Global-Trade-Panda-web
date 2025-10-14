/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },

  async headers() {
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
