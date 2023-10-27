import Link from 'next/link'
import { useRouter } from 'next/router'
// import { useEffect } from 'react'

import ThemeSwitcher from './theme-switcher'

export default function NavBar() {
  const { pathname } = useRouter()

  return (
    <div className='nav_bar sticky left-0 right-0 top-0 z-50 h-20 w-full border-b border-slate-200 dark:border-slate-800 px-4 backdrop-blur bg-white/70 dark:bg-slate-950/70 '>
      <div className='nav_bar-main mx-auto flex h-full max-w-7xl items-center'>
        <Link href='/' className='nav_bar-logo flex h-7 w-auto items-center rounded-full text-xs'>
          <span>首页</span>
        </Link>

        <Link
          href='/project'
          className={`nav_bar-item ml-auto rounded-md px-4 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 ${
            pathname === '/project' ? 'font-bold' : ''
          }`}
        >
          项目
        </Link>
        <Link
          href='/post'
          className={`nav_bar-item ml-4 rounded-md px-4 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 ${
            pathname === '/post' ? 'font-bold' : ''
          }`}
        >
          部落格
        </Link>

        <ThemeSwitcher />
      </div>
    </div>
  )
}
