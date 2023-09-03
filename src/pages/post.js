import { useEffect } from 'react'
import Link from 'next/link'
import { IconRight, IconClockCircle } from '@arco-design/web-react/icon'
import { setAnimation } from '@/utils'

const posts = require('@/data/post.json')

export default function Post() {
  useEffect(() => {
    setAnimation(document.querySelectorAll('.page_post-item'))
  }, [])
  return (
    <main className="page_post relative px-4">
      <div
        className="page_post-main mx-auto grid max-w-7xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ marginTop: '-32px' }}
      >
        {posts.map(post => {
          return (
            <div className="page_post-item" key={post.title}>
              <Link
                href={post.link}
                target="_blank"
                key={post.title}
                className="content-bg block rounded-xl border p-4 transition duration-300 hover:-translate-y-1 hover:shadow"
              >
                <img src={post.illustration} className="mb-4 aspect-3/2 w-full rounded-md object-cover" />
                <h5 className="mb-2">
                  <span>{post.title}</span>
                  <IconRight className="ml-2 transition duration-300" />
                </h5>
                <p className="text-secondary"> {post.time} </p>
              </Link>
            </div>
          )
        })}
        <div className="page_post-item content-bg flex flex-col items-center justify-center rounded-xl border p-4" key="wait">
          <IconClockCircle className="mb-4 text-4xl" />
          <h5 className="mb-2"> 更多文章 </h5>
          <p className="text-secondary"> 敬请期待 </p>
        </div>
      </div>
    </main>
  )
}
