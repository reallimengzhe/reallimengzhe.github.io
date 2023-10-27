import '@/styles/globals.css'

import '@arco-design/web-react/dist/css/arco.css'

import Head from 'next/head'
import NavBar from '@/components/nav-bar'
import LayoutFooter from '@/components/layout-footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>李孟哲的主页</title>
        <meta name='keywords' content='李孟哲, li mengzhe, limengzhe, 前端开发, Web develop' />
        <meta name='description' content='李孟哲的个人博客' />
        <meta name='robots' content='index, follow' />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <LayoutFooter />
    </>
  )
}
