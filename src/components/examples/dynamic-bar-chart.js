import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

export default function DynamicBarChart({ className }) {
  const chartRef = useRef(null)

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current)
    const data = [950, 920, 880, 850, 900, 900, 900]
    const labels = ['Japan', 'France', 'Russia', 'UK', 'USA', 'India', 'Korea']

    chart.setOption({
      grid: { top: 0, right: 0, bottom: 0, left: 54 },
      xAxis: { show: false },
      yAxis: {
        type: 'category',
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: 'rgb(148, 163, 184)',
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono'",
        },
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        data: labels,
        max: 4,
      },
      series: {
        realtimeSort: true,
        type: 'bar',
        data: data,
        label: {
          show: true,
          position: 'inside',
          valueAnimation: true,
          color: '#fff',
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono'",
          formatter: ({ value }) => Number(value).toLocaleString(),
        },
        itemStyle: {
          color: '#fb923c',
          borderRadius: [0, 8, 8, 0],
        },
        barMaxWidth: 24,
      },
      animationDuration: 0,
      animationDurationUpdate: 3000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',
    })

    const updateData = () => {
      data.forEach((val, i) => {
        data[i] = Math.random() > 0.9 ? val + Math.round(Math.random() * 2000) : val + Math.round(Math.random() * 200)
      })
      chart.setOption({ series: { data } })
    }

    const interval = setInterval(updateData, 3000)
    const handleResize = () => chart.resize()
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
      chart.dispose()
    }
  }, [])

  return (
    <div className={className}>
      <h3 className='font-bold truncate'>实时网络攻击来源 TOP 5</h3>
      <p className='text-sm text-slate-400 pt-0.5 truncate'>TOP 5 Regions of Real-time Network Attacks.</p>
      <div ref={chartRef} className='w-full h-[calc(100%-3rem)] mt-2' />
    </div>
  )
}
