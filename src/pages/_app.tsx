import 'swiper/css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { Noto_Sans_HK } from 'next/font/google'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'

const DynamicHeader = dynamic(
  () => import('@/components/mouse/MouseFollower'),
  {
    loading: () => null,
    ssr: false,
  }
)

const notoSans = Noto_Sans_HK({
  subsets: ['latin'],
  variable: '--font-notoSans',
  weight: ['100', '300', '400', '500', '700', '900'],
  preload: true,
})

export default function App({ Component, pageProps }: AppProps) {
  const screenLg = useMediaQuery({
    query: '(max-width: 1024px)',
  })

  return (
    // <main className={`${notoSans.variable} font-sans`}>
    //   <MouseFollower />
    //   <Component {...pageProps} />
    // </main>
    <>
      {!screenLg && <DynamicHeader />}
      <Component {...pageProps} />
    </>
  )
}
