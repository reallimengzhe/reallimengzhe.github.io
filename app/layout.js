import './globals.css'

import NavBar from '@/components/nav-bar'
import LayoutFooter from '@/components/layout-footer'

export const metadata = {
  title: '李孟哲',
  description: 'Personal website of Li Mengzhe, a frontend engineer',
  keywords: '李孟哲, li, mengzhe, li mengzhe, limengzhe',
}

export default function RootLayout({ children }) {
  return (
    <html lang='zh-CN'>
      <head></head>
      <body className='bg-white dark:bg-slate-950 text-base text-slate-800 dark:text-slate-100'>
        <NavBar />
        {children}
        <LayoutFooter />
      </body>
    </html>
  )
}
