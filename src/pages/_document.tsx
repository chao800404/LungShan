import { Html, Head, Main, NextScript } from 'next/document'
import GTMHead from '@/components/head/_GTMHead'

export default function Document() {
  return (
    <Html lang="zh-Hant-TW">
      <Head>
        <GTMHead />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NNXXHJ4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />

      <body className="relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
