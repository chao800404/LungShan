import { MouseFollower } from '@/components/mouse'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Noto_Sans_HK } from 'next/font/google'

const notoSans = Noto_Sans_HK({
  subsets: ['latin'],
  variable: '--font-notoSans',
  weight: ['100', '300', '400', '500', '700', '900'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${notoSans.variable} font-sans`}>
      <MouseFollower />
      <Component {...pageProps} />
    </main>
  )
}
