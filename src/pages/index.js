import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
// import * as THREE from 'three'
// import FOG from 'vanta/dist/vanta.fog.min'

import ProjectViewer from '@/components/project-viewer'
import { setAnimation } from '@/utils'

import IconArrowDown from '@/components/icon-arrow-down'
import IconArrowRight from '@/components/icon-arrow-right'
import IconMore from '@/components/icon-more'

const projects = require('@/data/project.json')
const posts = require('@/data/post.json')

export default function Home() {
  // let vanta = null

  // const vantaRef = useRef(null)

  useEffect(() => {
    setAnimation(document.querySelectorAll('.home-module'))

    // vanta = FOG({
    //   el: vantaRef.current,
    //   THREE: THREE, // use a custom THREE when initializing
    //   highlightColor: 0x4affff,
    //   lowlightColor: 0x002fa7,
    //   baseColor: 0xffffff,
    //   midtoneColor: 0xffffff,
    //   // mouseControls: true,
    //   // touchControls: true,
    //   // gyroControls: false,
    //   // minHeight: 200.0,
    //   // minWidth: 200.0,
    //   speed: 3.0,
    //   // zoom: 0.7,
    // })

    onHtmlClassChange()

    const observer = new MutationObserver(onHtmlClassChange)

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
  }, [])
  const ProjectViewerRef = useRef(null)

  function onViewProject(project) {
    ProjectViewerRef.current.show(project)
  }

  function onHtmlClassChange() {
    // if (!vanta) return
    // const value = document.documentElement.classList.contains('dark')
    // vanta.setOptions({
    //   highlightColor: value ? 0x002fa7 : 0x4affff,
    //   lowlightColor: value ? 0x4affff : 0x002fa7,
    //   baseColor: value ? 0x0 : 0xffffff,
    //   midtoneColor: value ? 0x0 : 0xffffff,
    // })
  }

  return (
    <>
      <header className='home-header relative overflow-hidden px-4 pb-32 pt-40 md:pb-32 md:pt-32 mx-auto bg-bottom border-b border-slate-200 dark:border-slate-800'>
        {/* <div ref={vantaRef} className='absolute bottom-0 left-0 right-0 top-0'></div> */}

        <h1 className='text-center font-extrabold md:text-6xl'>有朋自远方来，不亦乐乎。 🎈</h1>
        {/* <img src="/avatar.png" className="relative z-10 mx-auto mb-4 h-20 w-20 rounded-full" draggable={false} /> */}

        <p className='text-center text-lg mx-auto mb-20 text-slate-400 max-w-5xl leading-8'>
          你好！我是李孟哲，欢迎访问我的主页。作为一名前端开发工程师，我专注于构建 <span className='font-bold text-klein-700'>界面友好</span> 和{' '}
          <span className='font-bold text-klein-700'>用户体验友好</span> 的前端应用程序。技术很重要，使用技术的人更重要。
        </p>

        <button
          className='mx-auto mb-20 bg-cyan-600 hover:bg-cyan-200 text-black dark:text-white font-semibold h-12 rounded-lg w-40 flex items-center justify-center dark:bg-klein-500 dark:highlight-white/20 dark:hover:bg-klein-400'
          onClick={() => {
            document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className='mr-2'>开始了解</span>
          <IconArrowDown />
        </button>
      </header>

      <main className='home relative max-w-7xl mx-auto'>
        <h2 className='font-bold text-4xl mb-10 text-center pt-32 home-module' id='main-content'>
          💎
        </h2>
        <h2 className='font-bold text-4xl mb-20 text-center home-module'>我曾构建过多个大型项目，这对我来说游刃有余。</h2>

        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 home-module'>
          {projects
            .filter(item => item.show)
            .slice(0, 3)
            .map(project => {
              return (
                <div
                  key={project.name}
                  className='flex flex-col items-start rounded-xl border border-slate-200 dark:border-slate-800 p-7 transition-all hover:-translate-y-1 hover:shadow'
                  onClick={() => onViewProject(project)}
                >
                  <img src={project.logo} className='h-10 mb-16' />

                  <h5 className='text-xl font-bold mb-2'>{project.name}</h5>

                  <div className='flex gap-2 flex-wrap mb-4 text-klein-600 dark:text-cyan-700'>
                    {project.keywords.map(keyword => {
                      return <span key={keyword}>#{keyword}</span>
                    })}
                  </div>

                  <p className='text-slate-400 mb-4'>{project.intro}</p>

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
                </div>
              )
            })}
        </div>

        <Link
          href='/projects'
          className='flex items-center justify-center mb-20 mx-auto w-32 hover:bg-slate-100 hover:dark:bg-slate-800 py-2 rounded-lg transition-colors home-module'
        >
          <span> 查看更多 </span>
          <IconArrowRight className='ml-1' />
        </Link>

        <h2 className='font-bold text-4xl mb-10 home-module'>📢</h2>
        <h2 className='font-bold text-4xl mb-20 home-module'>知识不应该被垄断，分享也是学习的一部分。</h2>

        <div className='home-post-content grid gap-8 mb-20'>
          {posts.slice(0, 5).map(post => {
            return (
              <div className='flex home-module' key={post.title}>
                <img src={'/avatar.png'} className='h-16 w-16 rounded-full mr-8 mt-2' />
                <div className='home-post-item block flex-1 rounded-xl border border-slate-200 dark:border-slate-800 p-4 transition-all hover:-translate-y-1 hover:shadow'>
                  <Link href={post.link} target='_blank' className={`block text-2xl font-bold mb-4`}>
                    <span>{post.title}</span>
                  </Link>

                  <div className='flex gap-4 flex-wrap mb-8 text-klein-600 dark:text-cyan-700'>
                    {post.keywords.map(keyword => {
                      return <span key={keyword}>#{keyword}</span>
                    })}
                  </div>

                  {/* <p className='text-slate-400'> {post.time} </p> */}

                  <p className='text-slate-400 mb-4'>{post.abstract}</p>

                  <Link href={post.link} target='_blank' className='text-klein-600 dark:text-cyan-700 flex items-center'>
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
          className='flex items-center justify-center mb-20 mx-auto w-32 hover:bg-slate-100 hover:dark:bg-slate-800 py-2 rounded-lg transition-colors home-module'
        >
          <span> 查看更多 </span>
          <IconArrowRight className='ml-1' />
        </Link>

        {/* <div className='px-4 py-4'>
          <div className='mb-4 flex'>
            <Link
              href='https://www.zzuli.edu.cn/'
              target='_blank'
              className='flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border'
            >
              <img src='/icon/zuli.svg' className='h-full w-full' />
            </Link>
            <div className='ml-4 flex-1 border-b pb-6 pt-1'>
              <p className='pb-2'>郑州轻工业大学</p>
              <p>视觉传达 · 本科</p>
            </div>
          </div>

          <div className='flex'>
            <Link
              href='https://www.londonmet.ac.uk/'
              target='_blank'
              className='flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border'
            >
              <img src='/icon/lmu.svg' className='h-full w-full' />
            </Link>
            <div className='ml-4 flex-1 py-1'>
              <p className='pb-2'>伦敦城市大学</p>
              <p>工商管理 · 硕士研究生</p>
            </div>
          </div>
        </div> */}
      </main>

      <ProjectViewer ref={ProjectViewerRef} />
    </>
  )
}
