import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='zh-CN'>
      <Head />

      <body className='bg-white dark:bg-slate-950 text-base text-slate-800 dark:text-slate-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
