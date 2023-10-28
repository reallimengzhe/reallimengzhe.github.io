import Link from 'next/link'
import { useRouter } from 'next/router'

import IconArrowBack from '@/components/icon-arrow-back'
import IconMore from '@/components/icon-more'

export default function Project() {
  const router = useRouter()
  const { id } = router.query

  const projects = require('@/data/project.json')

  const project = projects.find(item => item.id === id)

  return (
    project && (
      <main className='px-6 py-10'>
        <div className='mx-auto max-w-7xl pb-10 mb-10 border-b border-slate-200 dark:border-slate-800'>
          <Link
            href='javascript:history.back(-1)'
            className='flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors mb-10 w-fit'
          >
            <IconArrowBack />
            <span>返回</span>
          </Link>

          <div className='flex gap-2 flex-wrap mb-4 text-klein-600 dark:text-cyan-600'>
            {project.keywords.map(keyword => {
              return <span key={keyword}>#{keyword}</span>
            })}
          </div>

          <h1 className='text-5xl font-extrabold mb-8'>{project.name}</h1>

          <p className='text-lg text-slate-400'>{project.intro}</p>
        </div>

        <div className='mx-auto max-w-7xl'>
          <h5 className='text-slate-400 text-lg mb-4'>页面截图</h5>

          <img src={project.img[0]} className='border border-slate-200 dark:border-slate-800 w-full rounded-xl mb-8'></img>

          <h5 className='text-slate-400 text-lg mb-4'>职责或成果</h5>

          <ul className='grid gap-2 mb-8'>
            {project.duty.map(duty => {
              return <li key={duty}>{duty}</li>
            })}
          </ul>

          <h5 className='text-slate-400 text-lg mb-4'>技术架构</h5>

          <div className='flex items-center mt-auto'>
            {project.techStack.map((tech, index) => {
              return (
                <div
                  key={tech}
                  className='flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-950'
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
              className='flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-950'
              style={{ marginLeft: '-8px' }}
            >
              <IconMore />
            </div>
          </div>
        </div>
      </main>
    )
  )
}
