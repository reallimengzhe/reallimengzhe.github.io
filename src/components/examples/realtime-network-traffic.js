import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

export default function NetworkChart({ className }) {
  const chartRef = useRef(null)

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current)
    const times = Array.from({ length: 20 }, (_, i) => {
      const time = new Date(Date.now() - (19 - i) * 1000)
      return time.toLocaleTimeString('zh-CN')
    })

    const data = {
      upload: new Array(20).fill(0).map(() => Math.random() * 50 + 100),
      download: new Array(20).fill(0).map(() => Math.random() * 80 + 150),
    }

    chart.setOption({
      animationDuration: 0,
      grid: { top: 40, right: 0, bottom: 0, left: 0 },
      legend: {
        data: ['上行', '下行'],
        textStyle: { color: '#94a3b8' },
        top: 12,
        x: 'center',
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          return params.map(param => `${param.seriesName}: ${param.value.toFixed(2)} Mbps`).join('<br/>')
        },
      },
      xAxis: {
        show: false,
        type: 'category',
        data: times,
      },
      yAxis: {
        show: false,
        type: 'value',
        name: 'Mbps',
      },
      series: [
        {
          name: '上行',
          type: 'line',
          data: data.upload,
          smooth: true,
          symbol: 'none',
          lineStyle: { width: 2 },
          itemStyle: { color: '#06b6d4' },
          areaStyle: {
            opacity: 0.1,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#06b6d4' },
              { offset: 1, color: 'rgba(6, 182, 212, 0.1)' },
            ]),
          },
        },
        {
          name: '下行',
          type: 'line',
          data: data.download,
          smooth: true,
          symbol: 'none',
          lineStyle: { width: 2 },
          itemStyle: { color: '#8b5cf6' },
          areaStyle: {
            opacity: 0.1,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#8b5cf6' },
              { offset: 1, color: 'rgba(139, 92, 246, 0.1)' },
            ]),
          },
        },
      ],
    })

    const updateInterval = setInterval(() => {
      times.shift()
      times.push(new Date().toLocaleTimeString('zh-CN'))

      data.upload.shift()
      data.download.shift()
      data.upload.push(parseInt(Math.random() * 50 + 100))
      data.download.push(parseInt(Math.random() * 80 + 150))

      chart.setOption({
        xAxis: { data: times },
        series: [{ data: data.upload }, { data: data.download }],
      })
    }, 1000)

    const handleResize = () => chart.resize()
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(updateInterval)
      window.removeEventListener('resize', handleResize)
      chart.dispose()
    }
  }, [])

  return (
    <div className={className}>
      <h3 className='font-bold truncate'>实时网络流量</h3>
      <p className='text-sm text-slate-400 pt-0.5 truncate'>Real-time Network Traffic.</p>
      <div ref={chartRef} className='w-full h-[calc(100%-3rem)]' />
    </div>
  )
}
