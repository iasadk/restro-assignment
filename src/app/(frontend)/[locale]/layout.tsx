import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import './global.css';
import { Header } from '@/components/custom/header';
import { Footer } from '@/components/custom/footer';
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const prms = await params;
  let messages
  try {
    messages = (await import(`../../../../messages/${prms.locale}.json`)).default
  } catch {
    notFound()
  }

  return (
    <html lang={prms.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
