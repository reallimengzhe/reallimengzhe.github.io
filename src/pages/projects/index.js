import Link from 'next/link'
import { useEffect, useRef } from 'react'

import IconMore from '@/components/icon-more'
import { setAnimation } from '@/utils'

const projects = require('@/data/project.json')

export default function Projects() {
  useEffect(() => {
    setAnimation(document.querySelectorAll('.page_project-item'))
  }, [])

  return (
    <main className='page_project px-6'>
      <div className='mx-auto max-w-7xl py-20 border-b border-slate-200 dark:border-slate-800'>
        <h1 className='text-5xl font-extrabold mb-6'>项目</h1>
        <p className='text-lg text-slate-400'>
          我曾独立负责过多个大型项目，从立项到交付，完成了多个从 0 到 1 的实现。这是我职业生涯的宝贵经验，使我受益良多。
        </p>
      </div>

      <div className='mx-auto max-w-7xl grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20'>
        {projects
          .filter(item => item.show)
          .map(project => {
            return (
              <div className='page_project-item' key={project.name}>
                <Link
                  key={project.name}
                  className='flex flex-col items-start rounded-xl border border-slate-200 dark:border-slate-800 p-7 transition-all hover:-translate-y-1 hover:shadow h-full'
                  href={'/projects/' + project.id}
                >
                <img src={project.logo[0]} className='h-10 mb-16 block dark:hidden' />
                <img src={project.logo[1]} className='h-10 mb-16 hidden dark:block' />

                  <h5 className='text-xl font-bold mb-2'>{project.name}</h5>

                  <div className='flex gap-2 flex-wrap mb-4 text-klein-600 dark:text-cyan-600'>
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
                </Link>
              </div>
            )
          })}
      </div>
    </main>
  )
}
