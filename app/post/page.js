'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { setAnimation } from '@/utils'
import IconArrowRight from '@/components/icon-arrow-right'

import posts from '@/data/post.json'

export default function Post() {
  useEffect(() => {
    setAnimation(document.querySelectorAll('.page_post-item'))
  }, [])

  return (
    <main className='relative px-6'>
      <div className='mx-auto max-w-7xl py-20 border-b border-slate-100 dark:border-slate-900'>
        <h1 className='text-4xl md:text-5xl font-extrabold mb-6'>部落格</h1>
        <p className='text-lg text-slate-400'>
          我关注
          <span className='font-bold text-klein-600 dark:text-cyan-600' key={1}>
            {' 前端开发 '}
          </span>
          、
          <span className='font-bold text-klein-600 dark:text-cyan-600' key={2}>
            {' UI '}
          </span>
          和
          <span className='font-bold text-klein-600 dark:text-cyan-600' key={3}>
            {' AI '}
          </span>
          等领域，我的分享也大多与此有关。
        </p>
      </div>

      <div className='mx-auto max-w-7xl grid gap-10 grid-cols-1 py-20'>
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
                  className='block transition duration-300 mb-2 text-2xl font-extrabold hover:text-slate-400 dark:hover:text-slate-400'
                >
                  <span>{post.title}</span>
                  {/* <IconRight className='ml-2 transition duration-300' /> */}
                </Link>

                <div className='flex gap-2 flex-wrap text-sm md:text-base text-klein-600 dark:text-cyan-600 mb-6'>
                  {post.keywords.map(keyword => {
                    return <span key={keyword}>#{keyword}</span>
                  })}
                </div>

                <p className='text-sm md:text-base text-slate-400 mb-4'>{post.abstract}</p>

                {/* <Link href={post.link} target='_blank' className='text-klein-600 dark:text-cyan-600 flex items-center'>
                  <span> 阅读全文 </span>
                  <IconArrowRight className='ml-1' />
                </Link> */}
              </div>
            </div>
          )
        })}
        <div className='page_post-item my-20 flex'>
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
