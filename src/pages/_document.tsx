import { Html, Head, Main, NextScript } from 'next/document'
import { MouseFollower } from '@/components/mouse'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative cursor-none">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
