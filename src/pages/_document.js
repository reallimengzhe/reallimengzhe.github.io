import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='zh-CN'>
      <Head />

      <body className='bg-white dark:bg-slate-950 text-base'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
