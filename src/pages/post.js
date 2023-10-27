import { useEffect } from 'react'
import Link from 'next/link'
import { setAnimation } from '@/utils'
import IconArrowRight from '@/components/icon-arrow-right'

const posts = require('@/data/post.json')

export default function Post() {
  useEffect(() => {
    setAnimation(document.querySelectorAll('.page_post-item'))
  }, [])

  return (
    <main className='relative px-4 py-8'>
      <div className='mx-auto max-w-7xl pb-10 mb-12 border-b border-slate-200 dark:border-slate-800'>
        <h1 className='text-5xl font-extrabold'>部落格</h1>
        <p className='text-lg text-slate-400'>
          我关注
          <span className='font-bold text-klein-600 dark:text-cyan-700' key={1}>
            前端开发
          </span>
          、
          <span className='font-bold text-klein-600 dark:text-cyan-700' key={2}>
            {' '}
            UI{' '}
          </span>
          和
          <span className='font-bold text-klein-600 dark:text-cyan-700' key={3}>
            {' '}
            AI{' '}
          </span>
          等领域，所以我的分享大多与此有关。
        </p>
      </div>

      <div className='mx-auto grid max-w-7xl gap-10 grid-cols-1'>
        {posts.map(post => {
          return (
            <div className='page_post-item flex gap-10 flex-col md:flex-row md:gap-20 lg:gap-40' key={post.title}>
              {/* <img src={post.illustration} className="mb-4 aspect-3/2 w-full rounded-md object-cover" /> */}
              <p className='text-slate-400 text-lg font-extrabold py-1'> {post.time} </p>

              <div>
                <Link
                  href={post.link}
                  target='_blank'
                  key={post.title}
                  className='block transition duration-300 mb-2 text-2xl font-extrabold hover:text-slate-500'
                >
                  <span>{post.title}</span>
                  {/* <IconRight className='ml-2 transition duration-300' /> */}
                </Link>

                <div className='flex gap-4 flex-wrap mb-8 text-klein-600 dark:text-cyan-700'>
                  {post.keywords.map(keyword => {
                    return <span key={keyword}>#{keyword}</span>
                  })}
                </div>

                <p className='text-slate-400 mb-4'>{post.abstract}</p>

                {/* <Link href={post.link} target='_blank' className='text-klein-600 dark:text-cyan-700 flex items-center'>
                  <span> 阅读全文 </span>
                  <IconArrowRight className='ml-1' />
                </Link> */}
              </div>
            </div>
          )
        })}
        <div className='page_post-item mt-20 flex'>
          <Link
            href='https://juejin.cn/user/3984285869810887/posts'
            target='_blank'
            className='ml-auto text-2xl font-extrabold text-slate-400 hover:text-slate-600 flex items-center'
          >
            <span> 查看全部 </span>
            <IconArrowRight className='ml-1' />
          </Link>
        </div>
      </div>
    </main>
  )
}
