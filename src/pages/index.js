import Link from 'next/link'
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
    <>
      <header className='home-header relative overflow-hidden px-6 py-32 md:py-48 bg-bottom border-b border-slate-200 dark:border-slate-800'>
        {/* <div ref={vantaRef} className='absolute bottom-0 left-0 right-0 top-0'></div> */}

        <h1 className='text-center font-extrabold text-4xl md:text-6xl mb-12'>有朋自远方来，不亦乐乎。 🎈</h1>

        <p className='text-center text-lg mx-auto mb-20 text-slate-600 max-w-5xl leading-8'>
          你好！我是李孟哲，欢迎访问我的主页。作为一名前端开发工程师，我专注于构建{' '}
          <span className='font-bold text-klein-600 dark:text-cyan-600'>界面友好</span> 和{' '}
          <span className='font-bold text-klein-600 dark:text-cyan-600'>用户体验友好</span> 的前端应用程序。技术很重要，使用技术的人更重要。
        </p>

        <div className='flex justify-center items-center gap-6'>
          <button
            className='bg-klein-600 hover:bg-klein-400 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white dark:text-black transition-colors font-bold text-sm rounded-lg flex items-center px-6 py-3'
            onClick={() => {
              document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className='mr-2'>详细了解</span>
            <IconArrowDown />
          </button>

          <Link
            href='/resume'
            className='bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 text-black dark:text-white transition-colors font-bold text-sm rounded-lg flex items-center px-6 py-3'
          >
            <span className='mr-2'>与我联系</span>
            <IconArrowRight />
          </Link>
        </div>
      </header>
      <div className='px-6'>
        <main className='home relative max-w-7xl py-32 mx-auto' id='main-content'>
          <h2 className='font-bold text-3xl md:text-5xl mb-10 text-center home-module'>💎</h2>
          <h2 className='font-bold text-2xl md:text-4xl mb-20 text-center home-module'>我曾构建过多个大型项目，这对我来说游刃有余。</h2>

          <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 home-module'>
            {projects
              .filter(item => item.show)
              .slice(0, 3)
              .map(project => {
                return (
                  <Link
                    key={project.name}
                    className='flex flex-col items-start rounded-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-klein-600/5 dark:hover:shadow-cyan-600/5'
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
                  </Link>
                )
              })}
          </div>

          <Link
            href='/projects'
            className='flex items-center justify-center gap-1 mx-auto w-fit px-6 h-12 hover:bg-slate-50 hover:dark:bg-slate-900 rounded-lg transition-colors home-module mb-20'
          >
            <span> 查看更多 </span>
            <IconArrowRight />
          </Link>

          <h2 className='font-bold text-3xl md:text-5xl mb-10 home-module'>📢</h2>
          <h2 className='font-bold text-2xl md:text-4xl mb-20 home-module'>知识不应该被垄断，分享也是学习的一部分。</h2>

          <div className='home-post-content grid gap-8 mb-16'>
            {posts.slice(0, 5).map(post => {
              return (
                <div className='flex home-module' key={post.title}>
                  <img src={'/avatar.png'} className='h-12 w-12 md:h-16 md:w-16 rounded-full mr-6 md:mr-8 mt-2' />

                  <div className='flex-1 rounded-xl border border-slate-200 dark:border-slate-800 p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-klein-600/5 dark:hover:shadow-cyan-600/5'>
                    <Link href={post.link} target='_blank' className={`block text-xl md:text-2xl font-bold mb-4`}>
                      <span>{post.title}</span>
                    </Link>

                    <div className='flex gap-2 flex-wrap text-sm md:text-base text-klein-600 dark:text-cyan-600 mb-6'>
                      {post.keywords.map(keyword => {
                        return <span key={keyword}>#{keyword}</span>
                      })}
                    </div>

                    {/* <p className='text-slate-400'> {post.time} </p> */}

                    <p className='text-sm md:text-base text-slate-400 mb-4'>{post.abstract}</p>

                    <Link href={post.link} target='_blank' className='text-sm md:text-base text-klein-600 dark:text-cyan-600 flex items-center'>
                      <span> 阅读全文 </span>
                      <IconArrowRight className='ml-1' />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <Link
            href='/post'
            className='flex items-center justify-center gap-1 mx-auto w-fit px-6 h-12 hover:bg-slate-50 hover:dark:bg-slate-900 rounded-lg transition-colors home-module'
          >
            <span> 查看更多 </span>
            <IconArrowRight />
          </Link>
        </main>
      </div>
    </>
  )
}
