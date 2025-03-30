import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

export default function GlobeChart({ className }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = document.createElement('canvas')
    canvas.style = 'width: 100%; height: 100%;'

    const devicePixelRatio = window.devicePixelRatio || 2

    const updateCanvasSize = () => {
      canvas.width = canvasRef.current.clientWidth * devicePixelRatio
      canvas.height = canvasRef.current.clientHeight * devicePixelRatio
    }

    updateCanvasSize()
    canvasRef.current.appendChild(canvas)

    let phi = 0

    // 检查当前主题
    let isDarkMode = document.documentElement.classList.contains('dark')

    // 创建地球组件
    const createGlobeInstance = () =>
      createGlobe(canvas, {
        devicePixelRatio: devicePixelRatio,
        width: canvas.width,
        height: canvas.height,
        phi: 0,
        theta: 0,
        dark: isDarkMode ? 1 : 0,
        diffuse: isDarkMode ? 1.2 : 2.8,
        scale: 1,
        mapSamples: 16000,
        mapBrightness: isDarkMode ? 6 : 4,
        baseColor: isDarkMode ? [0.3, 0.3, 0.3] : [1, 1, 1],
        markerColor: [0.023529411764705882, 0.7137254901960784, 0.8313725490196079],
        glowColor: isDarkMode ? [0.1, 0.1, 0.1] : [1, 1, 1],
        offset: [0, 0],
        markers: [
          { location: [39.9042, 116.4074], size: 0.08 }, // 北京
          { location: [35.6762, 139.6503], size: 0.08 }, // 东京
          { location: [40.7128, -74.006], size: 0.08 }, // 纽约
          { location: [51.5074, -0.1278], size: 0.08 }, // 伦敦
          { location: [48.8566, 2.3522], size: 0.08 }, // 巴黎
          { location: [55.7558, 37.6173], size: 0.08 }, // 莫斯科
          { location: [22.3193, 114.1694], size: 0.08 }, // 香港
          { location: [1.3521, 103.8198], size: 0.08 }, // 新加坡
          { location: [-33.8688, 151.2093], size: 0.08 }, // 悉尼
          { location: [-23.5505, -46.6333], size: 0.08 }, // 圣保罗
          { location: [28.6139, 77.209], size: 0.08 }, // 新德里
          { location: [19.076, 72.8777], size: 0.08 }, // 孟买
        ],
        opacity: 0.8,
        onRender: state => {
          state.phi = phi
          phi += 0.005
        },
      })

    let globe = createGlobeInstance()

    // 监听容器尺寸变化
    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize()
      globe.destroy()
      globe = createGlobeInstance()
    })

    resizeObserver.observe(canvasRef.current)

    // 监听主题变化
    const themeObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          isDarkMode = document.documentElement.classList.contains('dark')
          globe.destroy()
          globe = createGlobeInstance()
        }
      })
    })

    themeObserver.observe(document.documentElement, { attributes: true })

    // 清理函数
    return () => {
      resizeObserver.disconnect()
      themeObserver.disconnect()
      globe.destroy()
      canvas.remove()
    }
  }, [])

  return <div ref={canvasRef} className={className} />
}
