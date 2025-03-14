import { useEffect, useRef } from 'react'

const fontMono = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"

export default function DataVisualization() {
  const chartRefs = {
    line: useRef(null),
    bar: useRef(null),
    dynamicBar: useRef(null),
    globe: useRef(null),
  }

  useEffect(() => {
    // 动态导入 echarts 和 echarts-gl
    Promise.all([import('echarts'), import('echarts-gl')]).then(([echarts]) => {
      // 初始化图表
      const charts = {}
      Object.entries(chartRefs).forEach(([key, ref]) => {
        if (!ref.current) return
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
            const colors = {
              Japan: '#ef4444',
              France: '#265392',
              Russia: '#3355ad',
              UK: '#c5444f',
              USA: '#486b9a',
              India: '#eba860',
              Korea: '#475685',
            }

            charts[key].setOption({
              grid: { top: 0, right: 72, bottom: 0, left: 72 },
              xAxis: {
                // max: 100,
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
                max: 4, // only the largest 5 bars will be displayed
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
                  // color: ({ name }) => colors[name],
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

            // 定时更新数据
            let intervalId = setInterval(() => {
              run()
            }, 3000)

            // 清理定时器
            return () => {
              clearTimeout(timeoutId)
              clearInterval(intervalId)
            }

          case 'globe':
            charts[key].setOption({
              backgroundColor: 'transparent',
              globe: {
                environment: '/starfield.jpg',
                baseTexture: '/world.topo.bathy.200401.jpg',
                heightTexture: '/bathymetry_bw_composite_4k.jpg',
                displacementScale: 0.04,
                shading: 'realistic',
                realisticMaterial: {
                  roughness: 0.9,
                  metalness: 0.8,
                  glossiness: 64,
                },
                postEffect: {
                  enable: true,
                  bloom: {
                    enable: true,
                    bloomIntensity: 0.3,
                  },
                },
                light: {
                  ambient: {
                    intensity: 0.1,
                  },
                  main: {
                    intensity: 5,
                    shadow: true,
                  },
                },
                viewControl: {
                  autoRotate: true,
                  autoRotateSpeed: 10,
                  distance: 250,
                },
                layers: [
                  {
                    type: 'blend',
                    blendTo: 'emission',
                    texture: '/world.topo.bathy.200401.jpg',
                    intensity: 0.4,
                  },
                ],
              },
              series: [
                {
                  type: 'lines3D',
                  coordinateSystem: 'globe',
                  effect: {
                    show: true,
                    period: 2,
                    trailWidth: 2,
                    trailLength: 0.2,
                    trailOpacity: 1,
                    trailColor: '#0ea5e9',
                  },
                  blendMode: 'lighter',
                  lineStyle: {
                    width: 1,
                    color: '#0ea5e9',
                    opacity: 0.1,
                  },
                  data: Array(20)
                    .fill()
                    .map(() => {
                      const lat1 = Math.random() * 180 - 90
                      const lng1 = Math.random() * 360 - 180
                      const lat2 = Math.random() * 180 - 90
                      const lng2 = Math.random() * 360 - 180
                      return [
                        [lng1, lat1],
                        [lng2, lat2],
                      ]
                    }),
                },
              ],
            })
            break
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
    })
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
          <h2 className='font-bold text-2xl md:text-3xl border-x p-2 bg'>丰富的数据可视化经验。让数据流动起来，尽情感受数据之美。</h2>
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
                <h3 className='font-bold'>实时网络攻击来源 TOP 5</h3>
                <p className='text-sm text-slate-400 pt-0.5'>TOP 5 Regions of Real-time Network Attacks.</p>
                <div ref={chartRefs.dynamicBar} className='h-64 mt-6' />
              </div>
              <div key='5' ref={chartRefs.globe} className='h-96 bg rounded-xl border overflow-hidden bg-black' />
            </div>
          </div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>
    </>
  )
}
