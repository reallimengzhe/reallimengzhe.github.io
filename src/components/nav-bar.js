import Link from 'next/link'
import { useRouter } from 'next/router'
// import { useEffect } from 'react'

import ThemeSwitcher from './theme-switcher'

export default function NavBar() {
  const { pathname } = useRouter()

  return (
    <div className="nav_bar fixed left-0 right-0 top-0 z-50 h-16 w-full border-b px-4 backdrop-blur">
      <div className="nav_bar-main mx-auto flex h-full max-w-7xl items-center">
        <Link href="/" className="nav_bar-logo flex h-7 w-auto items-center rounded-full text-xs">
          <span>首页</span>
        </Link>

        <Link href="/project" className={`nav_bar-item ml-auto rounded-full px-4 py-1 text-xs ${pathname === '/project' ? 'is-active' : ''}`}>
          <span>项目</span>
        </Link>
        <Link href="/post" className={`nav_bar-item ml-4 rounded-full px-4 py-1 text-xs ${pathname === '/post' ? 'is-active' : ''}`}>
          <span>文章</span>
        </Link>

        <ThemeSwitcher />
      </div>
    </div>
  )
}
