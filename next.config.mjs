/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },

  async headers() {
    const securityHeaders = [
      {
        key: 'Content-Security-Policy',
        value: `
          default-src 'self';
          frame-src
            https://docs.google.com
            https://docs.googleusercontent.com
            https://www.google.com
            https://accounts.google.com
            https://recaptcha.google.com
            https://www.recaptcha.net
            https://*.gstatic.com;
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com;
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          img-src 'self' data: https://*.google.com https://*.gstatic.com https://*.googleusercontent.com;
          connect-src 'self';
          base-uri 'self';
          form-action 'self' https://docs.google.com;
          frame-ancestors 'self';
        `.replace(/\s{2,}/g, ' ').trim(),
      },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ];

    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default nextConfig;