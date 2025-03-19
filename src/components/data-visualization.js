'use client'

import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'
import * as echarts from 'echarts'

const fontMono = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"

export default function DataVisualization() {
  const chartRefs = {
    line: useRef(null),
    bar: useRef(null),
    dynamicBar: useRef(null),
    globe: useRef(null),
  }

  useEffect(() => {
    // 初始化图表
    const charts = {}
    Object.entries(chartRefs).forEach(([key, ref]) => {
      if (!ref.current) return

      if (key === 'globe') {
        const canvas = document.createElement('canvas')

        const devicePixelRatio = window.devicePixelRatio || 2

        canvas.style = 'width: 100%; height: 100%;'

        canvas.width = ref.current.clientWidth * devicePixelRatio
        canvas.height = ref.current.clientHeight * devicePixelRatio
        ref.current.appendChild(canvas)

        let phi = 0

        // 检查当前主题
        let isDarkMode = document.documentElement.classList.contains('dark')

        // 创建地球组件
        const createGlobeInstance = () =>
          createGlobe(canvas, {
            devicePixelRatio: window.devicePixelRatio || devicePixelRatio,
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
              phi += 0.01
            },
          })

        let globe = createGlobeInstance()

        // 监听主题变化
        const observer = new MutationObserver(mutations => {
          mutations.forEach(mutation => {
            if (mutation.attributeName === 'class') {
              isDarkMode = document.documentElement.classList.contains('dark')
              globe.destroy()
              globe = createGlobeInstance()
            }
          })
        })

        observer.observe(document.documentElement, { attributes: true })

        // 清理函数
        return () => {
          observer.disconnect()
          globe.destroy()
          canvas.remove()
        }
      } else {
        charts[key] = echarts.init(ref.current)

        switch (key) {
          case 'line':
            charts[key].setOption({
              grid: { top: 10, right: 0, bottom: 10, left: 0 },
              xAxis: { show: false, type: 'category', data: ['1', '2', '3', '4', '5', '6', '7', '8'] },
              yAxis: { show: false, type: 'value' },
              series: [
                {
                  data: [80, 95, 70, 90, 80, 98, 92, 188],
                  type: 'line',
                  smooth: true,
                  symbolSize: 8,
                  lineStyle: { width: 3 },
                  itemStyle: { color: '#06b6d4' },
                },
              ],
            })
            break

          case 'bar':
            charts[key].setOption({
              grid: { top: 10, right: 0, bottom: 32, left: 0 },
              xAxis: {
                type: 'category',
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { color: 'rgb(148, 163, 184)', fontFamily: fontMono },
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              },
              yAxis: {
                type: 'value',
                show: false,
              },
              series: {
                type: 'bar',
                itemStyle: { color: '#06b6d4' },
                barMaxWidth: 36,
                data: [65, 50, 55, 95, 60, 80, 65, 95, 115, 180, 145, 95],
              },

              itemStyle: { borderRadius: [8, 8, 0, 0] },
            })
            break

          case 'dynamicBar':
            const data = [950, 920, 880, 850, 900, 900, 900]

            charts[key].setOption({
              grid: { top: 0, right: 72, bottom: 0, left: 72 },
              xAxis: {
                show: false,
                label: { show: false },
                splitLine: { show: false },
              },
              yAxis: {
                type: 'category',
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: { color: 'rgb(148, 163, 184)', fontFamily: fontMono },
                inverse: true,
                animationDuration: 300,
                animationDurationUpdate: 300,
                data: ['Japan', 'France', 'Russia', 'UK', 'USA', 'India', 'Korea'],
                max: 4,
              },
              series: {
                realtimeSort: true,
                type: 'bar',
                data: data,
                label: {
                  show: true,
                  position: 'right',
                  valueAnimation: true,
                  fontFamily: fontMono,
                  formatter: ({ value }) => Number(value).toLocaleString(),
                },
                itemStyle: {
                  color: '#06b6d4',
                  borderRadius: [0, 8, 8, 0],
                },
              },

              animationDuration: 0,
              animationDurationUpdate: 3000,
              animationEasing: 'linear',
              animationEasingUpdate: 'linear',
            })

            const run = () => {
              for (var i = 0; i < data.length; ++i) {
                if (Math.random() > 0.9) {
                  data[i] += Math.round(Math.random() * 2000)
                } else {
                  data[i] += Math.round(Math.random() * 200)
                }
              }
              charts[key].setOption({
                series: { type: 'bar', data },
              })
            }

            let timeoutId = setTimeout(() => {
              run()
            }, 0)

            let intervalId = setInterval(() => {
              run()
            }, 3000)

            return () => {
              clearTimeout(timeoutId)
              clearInterval(intervalId)
            }
        }
      }
    })

    // 添加窗口大小变化监听
    const handleResize = () => {
      Object.values(charts).forEach(chart => {
        chart?.resize()
      })
    }

    window.addEventListener('resize', handleResize)

    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize)
      Object.values(charts).forEach(chart => chart?.dispose())
    }
  }, [])

  return (
    <>
      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='pt-24 bg border-x p-2 font-mono text-sm text-slate-300'>font-bold text-2xl md:text-3xl border-x p-2</div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <h2 className='font-bold text-2xl md:text-3xl border-x p-2 bg'>我拥有丰富的数据可视化经验。迅速实现各种形式的数据展示。</h2>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='p-2 bg-slate-100 dark:bg-slate-900 border-x space-y-2'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
              <div key='1' className='h-80 bg rounded-xl border p-6'>
                <h3>数据资产总量</h3>
                <p className='text-2xl font-bold pt-1'>925,271.89 TB</p>
                <p className='text-sm text-slate-400 pt-0.5'>较去年增长 20.1%</p>
                <div ref={chartRefs.line} className='h-48' />
              </div>
              <div key='2' className='h-80 bg rounded-xl border p-6 lg:col-span-2'>
                <h3>月资产概览</h3>
                <p className='text-2xl font-bold pt-1'>Total 882.18 TB</p>
                <p className='text-sm text-slate-400 pt-0.5'>本年度数据资产总量合计 882.18 TB，平均每月 73.515 TB。</p>
                <div ref={chartRefs.bar} className='h-48' />
              </div>
              <div key='3' className='h-96 bg rounded-xl border p-6 lg:col-span-2'>
                <h3 className='font-bold'>全球实时网络攻击来源 TOP 5</h3>
                <p className='text-sm text-slate-400 pt-0.5'>TOP 5 Regions of Real-time Network Attacks.</p>
                <div ref={chartRefs.dynamicBar} className='h-64 mt-6' />
              </div>
              <div key='5' ref={chartRefs.globe} className='h-96 bg rounded-xl border overflow-hidden' />
            </div>
          </div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>
    </>
  )
}
