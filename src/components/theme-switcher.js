import { useEffect, useState } from 'react'
import IconSun from './icon-sun'
import IconTransfer from './icon-transfer'
import IconMoon from './icon-moon'

export default function NavBar() {
  // const isBrowser = typeof window === 'object'
  const [plugPosition, setPlugPosition] = useState('left-1')

  const themeMap = {
    light: 'left-1',
    auto: 'left-6',
    dark: 'left-11',
  }

  useEffect(() => {
    onChangeTheme(Object.keys(themeMap).includes(localStorage.theme) ? localStorage.theme : 'auto')
  }, [])

  function onChangeTheme(value) {
    setPlugPosition(themeMap[value])

    switch (value) {
      case 'light':
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
        break

      case 'auto':
        const isDark = window.matchMedia('(prefers-color-scheme: dark)')
        changeTheme(isDark)
        isDark.onchange = changeTheme

        localStorage.theme = 'auto'
        break

      case 'dark':
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
        break
    }
  }

  function changeTheme(e) {
    if (e.matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <button className={`theme_switcher flex items-center relative h-auto w-auto p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs`}>
      <div className={`theme_switcher-plug absolute top-1 h-5 w-5 rounded-full bg-white dark:bg-slate-950 transition-all ${plugPosition}`}></div>
      <div className={`flex h-5 w-5 items-center justify-center`} onClick={() => onChangeTheme('light')} title='浅色'>
        <IconSun className='relative z-10' />
      </div>
      <div className={`flex h-5 w-5 items-center justify-center`} onClick={() => onChangeTheme('auto')} title='跟随系统'>
        <IconTransfer className='relative z-10' />
      </div>
      <div className={`flex h-5 w-5 items-center justify-center`} onClick={() => onChangeTheme('dark')} title='深色'>
        <IconMoon className='relative z-10' />
      </div>
    </button>
  )
}
