import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Oswald } from 'next/font/google'

const lora = Oswald({
  subsets: ['latin'],
  weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --lora-font: ${lora.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
