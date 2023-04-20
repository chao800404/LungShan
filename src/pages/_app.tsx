import 'swiper/css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { Noto_Sans_HK } from 'next/font/google'
import Router, { useRouter } from 'next/router'
import ReactGA from 'react-ga'
import { useEffect } from 'react'

const notoSans = Noto_Sans_HK({
  subsets: ['latin'],
  variable: '--font-notoSans',
  weight: ['100', '300', '400', '500', '700', '900'],
  preload: true,
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ReactGA.initialize('G-1WDJ70DSYK')
      ReactGA.send({ hitType: 'pageview', page: '/my-path' })
      ReactGA.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    // <main className={`${notoSans.variable} font-sans`}>
    //   <MouseFollower />
    //   <Component {...pageProps} />
    // </main>
    <>
      <Component {...pageProps} />
    </>
  )
}
