import { IconCode, IconShake, IconEmail } from '@arco-design/web-react/icon'
import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'
import FOG from 'vanta/dist/vanta.fog.min'

export default function LayoutHeader() {
  let vanta = null

  const vantaRef = useRef(null)

  useEffect(() => {
    // if (!vanta) {
    vanta = FOG({
      el: vantaRef.current,
      THREE: THREE, // use a custom THREE when initializing
      highlightColor: 0x4affff,
      lowlightColor: 0x002fa7,
      baseColor: 0xffffff,
      midtoneColor: 0xffffff,
      // mouseControls: true,
      // touchControls: true,
      // gyroControls: false,
      // minHeight: 200.0,
      // minWidth: 200.0,
      speed: 3.0,
      // zoom: 0.7,
    })
    // }

    onHtmlClassChange()

    const observer = new MutationObserver(onHtmlClassChange)

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    // return () => {
    //   if (vanta) vanta.destroy()
    // }
  }, [])

  function onHtmlClassChange() {
    if (!vanta) return

    const value = document.documentElement.classList.contains('dark')

    vanta.setOptions({
      highlightColor: value ? 0x002fa7 : 0x4affff,
      lowlightColor: value ? 0x4affff : 0x002fa7,
      baseColor: value ? 0x0 : 0xffffff,
      midtoneColor: value ? 0x0 : 0xffffff,
    })
  }

  return (
    <header className="layout_header relative overflow-hidden px-4 pb-32 pt-40 md:pb-72 md:pt-80">
      <div ref={vantaRef} className="absolute bottom-0 left-0 right-0 top-0"></div>

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
