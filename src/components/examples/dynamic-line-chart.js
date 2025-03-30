import { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import CountUp from '../count-up'

// <StatusChart color='#f97316' gradient='rgba(249, 115, 22, 0.1)' />
// <StatusChart color='#eab308' gradient='rgba(234, 179, 8, 0.1)' />
// <StatusChart color='#22c55e' gradient='rgba(34, 197, 94, 0.1)' />

export default function DynamicLineChart({ color, gradient, className }) {
  const [metrics, setMetrics] = useState({
    totalRequests: 1000,
    activeUsers: 500,
    serverLoad: 45,
  })

  useEffect(() => {
    const updateMetrics = () => {
      setMetrics(prev => ({
        totalRequests: prev.totalRequests + Math.floor(Math.random() * 100),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 20),
        serverLoad: Math.min(90, Math.random() * 100),
      }))
    }

    const metricsInterval = setInterval(updateMetrics, 2000)
    return () => clearInterval(metricsInterval)
  }, [])

  const chartRef = useRef(null)

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current)
    const times = Array.from({ length: 20 }, (_, i) => {
      const time = new Date(Date.now() - (19 - i) * 1000)
      return time.toLocaleTimeString('zh-CN')
    })

    const data = new Array(20).fill(0).map(() => Math.random() * 50 + 50)

    chart.setOption({
      animationDuration: 0,
      grid: { top: 0, right: 0, bottom: 2, left: 0 },
      xAxis: { show: false, type: 'category', data: times },
      yAxis: { show: false, type: 'value' },
      series: {
        type: 'line',
        data: data,
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 2 },
        itemStyle: { color },
        areaStyle: {
          opacity: 0.1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color },
            { offset: 1, color: gradient },
          ]),
        },
      },
    })

    const updateInterval = setInterval(() => {
      times.shift()
      times.push(new Date().toLocaleTimeString('zh-CN'))
      data.shift()
      const last = data[data.length - 1]
      const ran = Math.random()
      const fin = ran >= 0.8 ? Math.max(0.1, ran) : 1 + ran
      data.push(Math.max(10, parseInt(last * fin)))

      chart.setOption({
        xAxis: { data: times },
        series: { data },
      })
    }, 1000)

    const handleResize = () => chart.resize()
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
      chart.dispose()
    }
  }, [color, gradient])

  return (
    <div className={`relative ${className}`}>
      <h3 className='font-bold truncate'>Dynamic Line Chart</h3>
      <p className='text-sm text-slate-400 pt-0.5 truncate'>Auto update latest data with animation.</p>
      <div ref={chartRef} className='h-[calc(100%-3rem)]' />
      <b className='absolute left-6 bottom-8 text-2xl font-mono'>
        <CountUp value={metrics.totalRequests * 0.1} />
      </b>
    </div>
  )
}
