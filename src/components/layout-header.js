import { IconCode, IconShake, IconEmail } from '@arco-design/web-react/icon'
import { useEffect, useState } from 'react'

export default function LayoutHeader() {
  const [isDark, setDark] = useState(false)

  useEffect(onHtmlClassChange, [])

  useEffect(() => {
    const observer = new MutationObserver(onHtmlClassChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
  }, [])

  function onHtmlClassChange() {
    const value = document.documentElement.classList.contains('dark')
    setDark(value)
  }

  return (
    <header className="layout_header relative overflow-hidden px-4 pb-32 pt-40 md:pb-48 md:pt-56">
      <div className="layout_header-background-1 absolute bottom-0 top-0">
        <div className="flex">
          {[
            0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'red', opacity: opacity * 0.2 }}></div>
          })}
        </div>

        <div className="flex">
          {[
            0, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2,
            0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'red', opacity: opacity * 0.2 }}></div>
          })}
        </div>
        <div className="flex">
          {[
            0, 0, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2,
            0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'red', opacity: opacity * 0.2 }}></div>
          })}
        </div>
        <div className="flex">
          {[
            0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'red', opacity: opacity * 0.2 }}></div>
          })}
        </div>
        <div className="flex">
          {[
            0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'red', opacity: opacity * 0.2 }}></div>
          })}
        </div>
        <div className="flex">
          {[
            0, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2,
            0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'red', opacity: opacity * 0.2 }}></div>
          })}
        </div>
      </div>
      <div className="layout_header-background-2 absolute bottom-0 top-0 left-0 right-0 m-auto">
        <div className="flex">
          {[
            0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'yellow', opacity: opacity * 0.2 }}></div>
          })}
        </div>

        <div className="flex">
          {[
            0, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2,
            0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'yellow', opacity: opacity * 0.2 }}></div>
          })}
        </div>
        <div className="flex">
          {[
            0, 0, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2,
            0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'yellow', opacity: opacity * 0.2 }}></div>
          })}
        </div>
        <div className="flex">
          {[
            0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'yellow', opacity: opacity * 0.2 }}></div>
          })}
        </div>
        <div className="flex">
          {[
            0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'yellow', opacity: opacity * 0.2 }}></div>
          })}
        </div>
        <div className="flex">
          {[
            0, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2,
            0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'yellow', opacity: opacity * 0.2 }}></div>
          })}
        </div>
      </div>
      <div className="layout_header-background-3 absolute bottom-0 top-0">
        <div className="flex">
          {[
            0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'blue', opacity: opacity * 0.2 }}></div>
          })}
        </div>

        <div className="flex">
          {[
            0, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2,
            0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'blue', opacity: opacity * 0.2 }}></div>
          })}
        </div>
        <div className="flex">
          {[
            0, 0, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2,
            0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'blue', opacity: opacity * 0.2 }}></div>
          })}
        </div>
        <div className="flex">
          {[
            0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'blue', opacity: opacity * 0.2 }}></div>
          })}
        </div>
        <div className="flex">
          {[
            0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'blue', opacity: opacity * 0.2 }}></div>
          })}
        </div>
        <div className="flex">
          {[
            0, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.4, 0.3, 0.2,
            0.1,
          ].map(opacity => {
            return <div className="h-24 w-12" style={{ background: 'blue', opacity: opacity * 0.2 }}></div>
          })}
        </div>
      </div>

      <img src="/avatar.png" className="relative z-10 mx-auto mb-4 h-20 w-20 rounded-full" draggable={false} />

      <h5 className="relative z-10 text-center text-lg leading-8">李孟哲</h5>
      <div className="relative z-10 text-center leading-8 md:flex md:items-center md:justify-center">
        <div className="mb-2 md:mb-0 md:mr-8">
          <IconCode className="mr-2" />
          <span>前端开发工程师</span>
        </div>
        <div className="mb-2 md:mb-0 md:mr-8">
          <IconShake className="mr-2" />
          <a href="tel:+8615538077068">155 3807 7068</a>
        </div>
        <div>
          <IconEmail className="mr-2" />
          <a href="mailto:li.mengzhe@outlook.com">li.mengzhe@outlook.com</a>
        </div>
      </div>
    </header>
  )
}
