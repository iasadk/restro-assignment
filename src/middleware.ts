import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
})

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - /admin (Payload Admin)
         * - /api (Payload APIs)
         * - /_next (Next.js internals)
         * - /static / public files
         */
        '/((?!admin|api|_next|static|favicon.ico).*)',
    ],
}
