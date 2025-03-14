import { useRouter } from 'next/router'
// import { useEffect } from 'react'

import ThemeSwitcher from './theme-switcher'

export default function NavBar() {
  const { pathname } = useRouter()

  return (
    <nav className='nav_bar sticky top-0 z-50 w-full border-b backdrop-blur bg-white/50 dark:bg-slate-950/70 flex h-16 flex items-center px-3 md:px-6 gap-4'>
      <a href='/' className='nav_bar-logo flex h-7 w-auto items-center rounded-full text-xs text-black bg-cyan-600' style={{ padding: '0 11px' }}>
        <span>首页</span>
      </a>

      <a
        href='/projects'
        className={`ml-auto text-sm hover:text-klein-600 hover:dark:text-cyan-600 ${
          pathname === '/projects' ? 'font-bold' : ''
        }`}
      >
        项目
      </a>
      <a
        href='/post'
        className={`text-sm hover:text-klein-600 hover:dark:text-cyan-600 ${
          pathname === '/post' ? 'font-bold' : ''
        }`}
      >
        部落格
      </a>
      <a
        href='/resume'
        className={`text-sm hover:text-klein-600 hover:dark:text-cyan-600 ${
          pathname === '/resume' ? 'font-bold' : ''
        }`}
      >
        简历
      </a>

      <ThemeSwitcher />
    </nav>
  )
}
