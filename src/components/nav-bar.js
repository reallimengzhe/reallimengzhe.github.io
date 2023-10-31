import Link from 'next/link'
import { useRouter } from 'next/router'
// import { useEffect } from 'react'

import ThemeSwitcher from './theme-switcher'

export default function NavBar() {
  const { pathname } = useRouter()

  return (
    <nav className='nav_bar sticky top-0 z-50 w-full border-b border-slate-100 dark:border-slate-900 px-6 backdrop-blur bg-white/70 dark:bg-slate-950/70'>
      <main className='max-w-7xl h-16 mx-auto flex items-center gap-4'>
        <Link
          href='/'
          className='nav_bar-logo flex h-7 w-auto items-center rounded-full text-xs text-black bg-cyan-600'
          style={{ padding: '0 11px' }}
        >
          <span>首页</span>
        </Link>

        <Link
          href='/projects'
          className={`ml-auto rounded-md px-2 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-900 ${pathname === '/projects' ? 'font-bold' : ''}`}
        >
          项目
        </Link>
        <Link
          href='/post'
          className={`rounded-md px-2 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-900 ${pathname === '/post' ? 'font-bold' : ''}`}
        >
          部落格
        </Link>
        <Link
          href='/resume'
          className={`rounded-md px-2 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-900 mr-2 ${pathname === '/resume' ? 'font-bold' : ''}`}
        >
          简历
        </Link>

        <ThemeSwitcher />
      </main>
    </nav>
  )
}
