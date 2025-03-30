import { ArrowRightIcon, BookmarkIcon, ChevronRightIcon, HeartIcon, TruckIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef } from 'react'

export default function ShoppingStats({ className }) {
  const chartRef = useRef(null)

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current)
    const baseData = [150, 230, 224, 218, 135, 147, 260]
    let data = baseData

    chart.setOption({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
        textStyle: { color: '#94a3b8' },
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: data[0], name: '电子产品', itemStyle: { color: '#06b6d4' } },
            { value: data[1], name: '服装', itemStyle: { color: '#8b5cf6' } },
            { value: data[2], name: '食品', itemStyle: { color: '#22c55e' } },
            { value: data[3], name: '图书', itemStyle: { color: '#eab308' } },
          ],
        },
      ],
    })

    const updateData = () => {
      data = data.map(v => v + Math.random() * 20 - 10)
      chart.setOption({
        series: [
          {
            data: [
              { value: data[0], name: '电子产品' },
              { value: data[1], name: '服装' },
              { value: data[2], name: '食品' },
              { value: data[3], name: '图书' },
            ],
          },
        ],
      })
    }

    const timer = setInterval(updateData, 3000)
    const handleResize = () => chart.resize()
    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(timer)
      window.removeEventListener('resize', handleResize)
      chart.dispose()
    }
  }, [])

  return (
    <div className={`flex flex-col ${className}`}>
      <div className='relative h-[330px] overflow-hidden'>
        <img
          src='https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80'
          className='rounded-lg w-full h-full object-cover'
        />

        <button className='absolute bottom-2 right-2 bg-gray-100 dark:bg-gray-800  rounded p-1'>
          <BookmarkIcon className='w-4 h-4' />
        </button>
      </div>

      <div className='flex-1 overflow-hidden'>
        <p className='pt-3 text-sm text-slate-500'>Footwear</p>
        <div className='text-2xl font-bold pt-2'>¥899.99</div>
        <p className='pt-1 font-bold text-justify'>Nike AIR FORCE 1 HJ4899</p>
        <p className='pt-1 border-b pb-3 text-slate-500 text-sm'>Love at the first sight for enthusiasts seeking a fresh and whimsical style.</p>

        <p className='text-xs text-slate-300 pt-3'>Color</p>

        <div className='pt-2 grid grid-cols-4 gap-2'>
          <button className='rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs'>Pastel</button>
          <button className='rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs'>Bright</button>
          <button className='rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs'>Purple</button>
        </div>

        <p className='text-xs text-slate-300 pt-3'>Size</p>

        <div className='pt-2 grid grid-cols-4 gap-2 pb-2'>
          <button className='rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs'>5.5</button>
          <button className='rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs'>6</button>
          <button className='rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs'>6.5</button>
          <button className='rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs'>7</button>
          <button className='rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs'>7.5</button>
          <button className='rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs'>8</button>
          <button className='rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs'>8.5</button>
          <button className='rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs'>9</button>
          <button className='rounded bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs'>9.5</button>
        </div>
      </div>

      <div className='pt-2 flex gap-2'>
        <button className='rounded bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm'>Add to cart</button>
        <button className='rounded py-2 text-sm flex-1 bg-purple-400 hover:bg-purple-500 active:bg-purple-600 text-white transition-colors'>Buy Now</button>
      </div>
    </div>
  )
}
