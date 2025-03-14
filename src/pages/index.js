import { useEffect, useState, useRef } from 'react'

import { setAnimation } from '@/utils'

import IconArrowRight from '@/components/icon-arrow-right'
import IconMore from '@/components/icon-more'

const projects = require('@/data/project.json')
const posts = require('@/data/post.json')

const fontMono = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"

export default function Home() {
  const chartRefs = {
    line: useRef(null),
    bar: useRef(null),
    dynamicBar: useRef(null),
    globe: useRef(null),
  }

  useEffect(() => {
    // 动态导入 echarts 和 echarts-gl
    Promise.all([import('echarts'), import('echarts-gl')]).then(([echarts]) => {
      setAnimation(document.querySelectorAll('.home-module'))

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
    <div className='transparent-bg'>
      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='pt-24 bg border-x p-2 font-mono text-sm text-slate-300'>font-bold text-4xl md:text-6xl</div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <h1 className='font-bold text-4xl md:text-6xl p-2 bg border-x'>
            Li Mengzhe, A Front-End Development Engineer Who Dedicated to Building User-Friendly Interfaces. 🏂
          </h1>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='pt-12 bg border-x p-2 font-mono text-sm text-slate-300'>
            font-bold text-lg text-slate-600 text-klein-600 dark:text-cyan-600
          </div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <p className='text-lg text-slate-600 border-x p-2 bg'>
            👋 有朋自远方来，不亦乐乎。你好，欢迎访问我的个人主页。 作为一名前端开发工程师，我专注于构建{' '}
            <span className='font-bold text-klein-600 dark:text-cyan-600'>界面友好</span> 和{' '}
            <span className='font-bold text-klein-600 dark:text-cyan-600'>用户体验友好</span> 的前端应用。
          </p>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='pt-12 bg border-x p-2 font-mono text-sm text-slate-300'></div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex' id='main-content'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='bg border-x p-2 flex gap-4'>
            <button
              className='bg-klein-600 hover:bg-klein-400 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white dark:text-black transition-colors font-bold text-sm rounded-full flex items-center px-6 py-3'
              onClick={() => {
                document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              详 细 了 解
            </button>

            <a
              href='/resume'
              className='bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 text-black dark:text-white transition-colors font-bold text-sm rounded-full flex items-center px-6 py-3'
            >
              与 我 联 系
            </a>
          </div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='bg-slate-100 dark:bg-slate-900 border-x p-2'>
            <div style={{ height: '540px' }} className='border bg rounded-xl overflow-hidden'>
              <div
                className='grid grid-cols-4 gap-12'
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'top left',
                  transform: 'rotateX(45deg) rotateZ(-45deg) translateX(-50%) scale(1.3)',
                }}
              >
                <div className='border-r space-y-12' style={{ animation: 'scroll 60s linear infinite alternate' }}>
                  <img src='/project/1/1.jpg' className='border-y' />
                  <img src='/project/1/2.jpg' className='border-y' />
                  <img src='/project/1/3.jpg' className='border-y' />
                  <img src='/project/1/4.jpg' className='border-y' />
                  <img src='/project/1/5.jpg' className='border-y' />
                  <img src='/project/1/6.jpg' className='border-y' />
                  <img src='/project/2/1.png' className='border-y' />
                  <img src='/project/2/2.png' className='border-y' />
                  <img src='/project/2/3.png' className='border-y' />
                  <img src='/project/2/4.png' className='border-y' />
                </div>
                <div className='border-x space-y-6' style={{ animation: 'scroll-reverse 60s linear infinite alternate' }}>
                  <img src='/project/2/5.png' className='border-y' />
                  <img src='/project/3/1.png' className='border-y' />
                  <img src='/project/3/2.png' className='border-y' />
                  <img src='/project/3/3.png' className='border-y' />
                  <img src='/project/3/4.png' className='border-y' />
                  <img src='/project/3/5.png' className='border-y' />
                  <img src='/project/4/1.png' className='border-y' />
                  <img src='/project/4/2.png' className='border-y' />
                  <img src='/project/4/3.png' className='border-y' />
                  <img src='/project/5/1.png' className='border-y' />
                </div>
                <div className='border-x space-y-6' style={{ animation: 'scroll 60s linear infinite alternate' }}>
                  <img src='/project/5/2.png' className='border-y' />
                  <img src='/project/5/3.png' className='border-y' />
                  <img src='/project/6/1.png' className='border-y' />
                  <img src='/project/6/2.png' className='border-y' />
                  <img src='/project/6/3.png' className='border-y' />
                  <img src='/project/6/4.png' className='border-y' />
                  <img src='/project/6/5.png' className='border-y' />
                  <img src='/project/6/6.png' className='border-y' />
                  <img src='/project/1/1.jpg' className='border-y' />
                  <img src='/project/1/2.jpg' className='border-y' />
                </div>
                <div className='border-x space-y-6' style={{ animation: 'scroll-reverse 60s linear infinite alternate' }}>
                  <img src='/project/1/3.jpg' className='border-y' />
                  <img src='/project/8/0.png' className='border-y' />
                  <img src='/project/8/1.png' className='border-y' />
                  <img src='/project/8/2.png' className='border-y' />
                  <img src='/project/8/3.png' className='border-y' />
                  <img src='/project/9/1.png' className='border-y' />
                  <img src='/project/9/2.png' className='border-y' />
                  <img src='/project/10/1.png' className='border-y' />
                  <img src='/project/10/2.png' className='border-y' />
                  <img src='/project/10/3.png' className='border-y' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

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
          <h2 className='font-bold text-2xl md:text-3xl border-x p-2 bg'>我曾负责开发过多个大型项目，这对我来说游刃有余。</h2>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='grid gap-2 sm:grid-cols-1 md:grid-cols-2 p-2 border-x bg-slate-100 dark:bg-slate-900'>
            {projects
              .filter(item => item.show)
              .slice(0, 4)
              .map(project => {
                return (
                  <a
                    key={project.name}
                    className='bg flex flex-col items-start rounded-xl border p-6 md:p-8 transition-all hover:shadow-xl hover:shadow-klein-600/5 dark:hover:shadow-cyan-600/5'
                    href={'/projects/' + project.id}
                  >
                    <img src={project.logo[0]} className='h-10 mb-16 block dark:hidden' />
                    <img src={project.logo[1]} className='h-10 mb-16 hidden dark:block' />

                    <h5 className='text-xl font-bold mb-2'>{project.name}</h5>

                    <div className='flex gap-2 flex-wrap text-sm md:text-base text-klein-600 dark:text-cyan-600 mb-4'>
                      {project.keywords.map(keyword => {
                        return <span key={keyword}>#{keyword}</span>
                      })}
                    </div>

                    <p className='text-sm md:text-base text-slate-400 mb-4'>{project.intro}</p>

                    <div className='flex items-center mt-auto'>
                      {project.techStack.map((tech, index) => {
                        return (
                          <div
                            key={tech}
                            className='flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-950'
                            style={{
                              marginLeft: index == 0 ? '-4px' : '-8px',
                              zIndex: 10 - index,
                            }}
                          >
                            <img src={'/icon/' + tech + '.svg'} className='h-7/12 w-7/12' />
                          </div>
                        )
                      })}

                      <div
                        className='flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-950'
                        style={{ marginLeft: '-8px' }}
                      >
                        <IconMore />
                      </div>
                    </div>
                  </a>
                )
              })}
          </div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex' id='main-content'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='bg border-x p-2 flex gap-4'>
            <a
              href='/projects'
              className='bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 text-black dark:text-white transition-colors font-bold text-sm rounded-full flex items-center px-6 py-3 justify-center'
            >
              查 看 更 多
              <IconArrowRight className='ml-2' />
            </a>
          </div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

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
          <h2 className='font-bold text-2xl md:text-3xl border-x p-2 bg'>知识不应该被垄断，分享也是学习的一部分。</h2>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='space-y-2 border-x p-2 bg-slate-100 dark:bg-slate-900'>
            {posts.slice(0, 5).map(post => {
              return (
                <div className='flex gap-2' key={post.title}>
                  <img src={'/avatar.png'} className='h-12 w-12 md:h-16 md:w-16 rounded-xl border' />

                  <div className='bg flex-1 rounded-xl border p-6 transition-all hover:shadow-xl hover:shadow-klein-600/5 dark:hover:shadow-cyan-600/5'>
                    <a href={post.link} target='_blank' className={`block text-xl md:text-2xl font-bold mb-4`}>
                      {post.title}
                    </a>

                    <div className='flex gap-2 flex-wrap text-sm md:text-base text-klein-600 dark:text-cyan-600 mb-6'>
                      {post.keywords.map(keyword => {
                        return <span key={keyword}>#{keyword}</span>
                      })}
                    </div>

                    {/* <p className='text-slate-400'> {post.time} </p> */}

                    <p className='text-sm md:text-base text-slate-400 mb-4'>{post.abstract}</p>

                    <a href={post.link} target='_blank' className='text-sm md:text-base text-klein-600 dark:text-cyan-600 flex items-center'>
                      <span> 阅读全文 </span>
                      <IconArrowRight className='ml-1' />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='flex' id='main-content'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='bg border-x p-2 flex gap-4'>
            <a
              href='/post'
              className='bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 text-black dark:text-white transition-colors font-bold text-sm rounded-full flex items-center px-6 py-3 justify-center'
            >
              查 看 更 多
              <IconArrowRight className='ml-2' />
            </a>
          </div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>
    </div>
  )
}
