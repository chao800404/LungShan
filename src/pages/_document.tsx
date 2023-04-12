import { Html, Head, Main, NextScript } from 'next/document'
import { MouseFollower } from '@/components/mouse'

export default function Document() {
  return (
    <Html lang="zh-Hant-TW">
      <Head />
      <body className="relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
