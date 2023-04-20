import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import ReactGA from 'react-ga'

export default function Document() {
  React.useEffect(() => {
    ReactGA.initialize(process.env.GA_TRACKING_ID as string)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <Html lang="zh-Hant-TW">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NNXXHJ4');
            `,
          }}
        ></script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NNXXHJ4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
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
