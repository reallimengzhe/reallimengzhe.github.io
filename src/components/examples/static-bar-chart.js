import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

export default function BarChart({ className }) {
  const chartRef = useRef(null)

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current)

    chart.setOption({
      grid: { top: 10, right: 0, bottom: 0, left: 0 },
      xAxis: {
        show: false,
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yAxis: {
        show: false,
        type: 'value',
      },
      series: {
        type: 'bar',
        barMaxWidth: 36,
        itemStyle: { color: '#06b6d4', borderRadius: [8, 8, 0, 0] },

        data: [65, 50, 55, 95, 60, 80, 65, 95, 115, 180, 145, 95],
      },
    })

    const handleResize = () => chart.resize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      chart.dispose()
    }
  }, [])

  return (
    <div className={className}>
      <h3 className='font-bold truncate'>Static Bar Chart</h3>
      <h2 className='font-bold truncate text-2xl'>+2,350</h2>
      <p className='text-sm text-slate-400 pt-0.5 truncate'>+180.1% from last month.</p>
      <div ref={chartRef} className='w-full h-[calc(100%-80px)]' />
    </div>
  )
}
