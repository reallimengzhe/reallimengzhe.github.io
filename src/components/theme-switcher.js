import { IconSunFill, IconMoonFill } from '@arco-design/web-react/icon'
import { useEffect, useState } from 'react'

export default function NavBar() {
  const isBrowser = typeof window === 'object'
  const [isDark, setDark] = useState(false)

  useEffect(() => {
    setTheme(localStorage.theme)
  }, [])

  function setTheme(value) {
    if (value === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setDark(false)
    }
  }

  return (
    <div
      className={`theme_switcher relative ml-8 h-6 w-10 rounded-full`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <div
        className={`theme_switcher-plug absolute top-1 flex h-4 w-4 items-center justify-center rounded-full text-xs ${
          isDark ? 'left-5' : 'left-1'
        }`}
      >
        {isDark ? (
          <IconMoonFill strokeWidth={1} theme="filled" />
        ) : (
          <IconSunFill strokeWidth={1} />
        )}
      </div>
    </div>
  )
}
