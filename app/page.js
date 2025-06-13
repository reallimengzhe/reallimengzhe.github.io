'use client'

import IconArrowRight from '@/components/icon-arrow-right'
import IconMore from '@/components/icon-more'
import AbilityExamples from '@/components/ability'
import ProjectCarousel from '@/components/project-carousel'

import projects from '@/data/project.json'
import posts from '@/data/post.json'

export default function Page() {
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
            A Front-End Development Engineer Who Dedicated to Building User-Friendly Interfaces. 🏂
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

      <ProjectCarousel />

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
          <h2 className='font-bold text-2xl md:text-3xl border-x p-2 bg'>我曾负责过多个大型项目的前端开发，这对我来说游刃有余。</h2>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 border-x bg-slate-100 dark:bg-slate-900'>
            {projects
              .filter(item => item.show)
              .map((project, index) => {
                return (
                  <a
                    key={project.name}
                    className={`bg flex flex-col items-start rounded-xl border p-6 md:p-8 transition-all hover:shadow-xl hover:shadow-klein-600/5 dark:hover:shadow-cyan-600/5 ${
                      index == 0 ? 'md:col-span-2' : ''
                    }`}
                    href={'/projects/' + project.id}
                  >
                    <img src={project.logo[0]} className='h-10 block dark:hidden' />
                    <img src={project.logo[1]} className='h-10 hidden dark:block' />

                    <h5 className='text-xl font-bold mb-2 pt-8 md:pt-16'>{project.name}</h5>

                    <div className='flex gap-2 flex-wrap text-sm md:text-base text-klein-600 dark:text-cyan-600 mb-4'>
                      {project.keywords.map(keyword => (
                        <span key={keyword}>#{keyword}</span>
                      ))}
                    </div>

                    <p className='text-sm md:text-base text-slate-400 mb-4'>{project.intro}</p>

                    <div className='flex items-center mt-auto'>
                      {project.techStack.map((tech, index) => (
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
                      ))}

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

      {/* <div className='border-b flex' id='main-content'>
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
      </div> */}

      <AbilityExamples />

      {/* <LiveFeed /> */}

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
          <h2 className='font-bold text-2xl md:text-3xl border-x p-2 bg'>工作之外，我还喜欢写作和分享。</h2>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='space-y-2 border-x p-2 bg-slate-100 dark:bg-slate-900'>
            {posts.slice(0, 5).map(post => (
              <div className='flex gap-2' key={post.title}>
                <img src={'/avatar.png'} className='h-12 w-12 md:h-16 md:w-16 rounded-xl border dark:hidden' />
                <img src={'/avatar-dark.png'} className='h-12 w-12 md:h-16 md:w-16 rounded-xl border hidden dark:block' />

                <div className='bg flex-1 rounded-xl border p-4 md:p-6 transition-all hover:shadow-xl hover:shadow-klein-600/5 dark:hover:shadow-cyan-600/5'>
                  <a href={post.link} target='_blank' className={`block text-xl md:text-2xl font-bold mb-4`}>
                    {post.title}
                  </a>

                  <div className='flex gap-2 flex-wrap text-sm md:text-base text-klein-600 dark:text-cyan-600 mb-6'>
                    {post.keywords.map(keyword => {
                      return <span key={keyword}>#{keyword}</span>
                    })}
                  </div>

                  <p className='text-sm md:text-base text-slate-400 mb-4'>{post.abstract}</p>

                  <a href={post.link} target='_blank' className='text-sm md:text-base text-klein-600 dark:text-cyan-600 flex items-center'>
                    <span> 阅读全文 </span>
                    <IconArrowRight className='ml-1' />
                  </a>
                </div>
              </div>
            ))}
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
