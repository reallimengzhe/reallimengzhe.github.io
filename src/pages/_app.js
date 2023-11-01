import '@/styles/globals.css'

import Head from 'next/head'
import NavBar from '@/components/nav-bar'
import LayoutFooter from '@/components/layout-footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>李孟哲</title>
        <meta name='keywords' content='李孟哲, li, mengzhe, li mengzhe, limengzhe' />
        <meta
          name='description'
          content='你好！我是李孟哲，欢迎来到我的个人主页。作为一名前端开发工程师，我专注于构建界面友好和用户体验友好的所有前端应用程序。'
        />
        <meta name='robots' content='index, follow' />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <LayoutFooter />
    </>
  )
}
