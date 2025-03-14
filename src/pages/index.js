import { useEffect, useState, useRef } from 'react'

import { setAnimation } from '@/utils'

import IconArrowDown from '@/components/icon-arrow-down'
import IconArrowRight from '@/components/icon-arrow-right'
import IconMore from '@/components/icon-more'

const projects = require('@/data/project.json')
const posts = require('@/data/post.json')

export default function Home() {
  useEffect(() => {
    setAnimation(document.querySelectorAll('.home-module'))
  }, [])

  return (
    <div className='transparnet-gap'>
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
          <div className='grid gap-2 sm:grid-cols-1 md:grid-cols-2 p-2 border-x bg-slate-100'>
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
          <h2 className='font-bold text-2xl md:text-3xl border-x p-2 bg'>知识不应该被垄断，分享也是学习的一部分。</h2>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='space-y-2 border-x p-2 bg-slate-100'>
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

      <a
        href='/post'
        className='flex items-center justify-center gap-1 mx-auto w-fit px-6 h-12 hover:bg-slate-50 hover:dark:bg-slate-900 rounded-lg transition-colors home-module'
      >
        <span> 查看更多 </span>
        <IconArrowRight />
      </a>
    </div>
  )
}
