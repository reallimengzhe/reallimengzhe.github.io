import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { IconRight, IconMore, IconExpand } from '@arco-design/web-react/icon'

import ProjectViewer from '@/components/project-viewer'
import { setAnimation } from '@/utils'

const projects = require('@/data/project.json')
const posts = require('@/data/post.json')

export default function Home() {
  useEffect(() => {
    setAnimation(document.querySelectorAll('.home-module'))
  }, [])
  const ProjectViewerRef = useRef(null)

  function onViewProject(project) {
    ProjectViewerRef.current.show(project)
  }

  return (
    <main className="home relative px-4 text-sm">
      <div
        className="home-module home-project content-bg mx-auto mb-8 max-w-7xl rounded-xl border backdrop-blur-sm"
        style={{ marginTop: '-32px' }}
      >
        <div className="home-project-title flex border-b px-4 py-4">
          <span>我的项目</span>

          <Link href="/project" className="text-secondary ml-auto flex items-center">
            <span className="text-xs"> 查看更多 </span>
            <IconRight className="ml-1" />
          </Link>
        </div>
        <div className="grid gap-4 px-4 py-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter(item => item.show)
            .slice(0, 6)
            .map(project => {
              return (
                <div
                  className="home-project-item rounded-md border px-4 py-4 transition duration-300 hover:-translate-y-1 hover:shadow"
                  key={project.name}
                  onClick={() => onViewProject(project)}
                >
                  <h5 className="mb-2">
                    <span>{project.name}</span>
                    <IconExpand className="ml-2 transition-opacity duration-300" />
                  </h5>
                  <p className="text-secondary mb-4"> {project.type} </p>
                  {/* <p className="mb-4"> {project.orgination} </p> */}
                  <div className="flex">
                    {project.techStack.map((tech, index) => {
                      return (
                        <div
                          className="home-project-item-tech flex h-8 w-8 items-center justify-center rounded-full"
                          style={{
                            marginLeft: index == 0 ? '-4px' : '-8px',
                            zIndex: 10 - index,
                          }}
                          key={tech}
                        >
                          <img src={'/icon/' + tech + '.svg'} className="h-7/12 w-7/12" />
                        </div>
                      )
                    })}

                    <div
                      className="home-project-item-tech flex h-8 w-8 items-center justify-center rounded-full"
                      style={{ marginLeft: '-8px' }}
                    >
                      <IconMore />
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>

      <div className="mx-auto max-w-7xl md:grid md:grid-cols-3 md:gap-8">
        <div className="mb-8 md:mb-0">
          <div className="home-module home-university content-bg mb-8 rounded-xl border">
            <div className="home-university-title flex border-b px-4 py-4">我的背景</div>

            <div className="px-4 py-4">
              <div className="mb-4 flex">
                <Link
                  href="https://www.zzuli.edu.cn/"
                  target="_blank"
                  className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border"
                >
                  <img src="/icon/zuli.svg" className="h-full w-full" />
                </Link>
                <div className="ml-4 flex-1 border-b pb-6 pt-1">
                  <p className="pb-2">郑州轻工业大学</p>
                  <p>视觉传达 · 本科</p>
                </div>
              </div>

              <div className="flex">
                <Link
                  href="https://www.londonmet.ac.uk/"
                  target="_blank"
                  className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border"
                >
                  <img src="/icon/lmu.svg" className="h-full w-full" />
                </Link>
                <div className="ml-4 flex-1 py-1">
                  <p className="pb-2">伦敦城市大学</p>
                  <p>工商管理 · 硕士研究生</p>
                </div>
              </div>
            </div>
          </div>

          <div className="home-module home-community content-bg rounded-xl border">
            <div className="home-community-title flex border-b px-4 py-4">在社区中找到我</div>

            <div className="flex px-4 py-4">
              <Link
                href="https://www.jianshu.com/u/6c204631fb1c"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"
                key="jianshu"
              >
                <img src="/icon/jianshu.svg" className="h-full w-full" />
              </Link>
              <Link
                href="https://juejin.cn/user/3984285869810887/posts"
                target="_blank"
                className="ml-4 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"
                key="juejin"
              >
                <img src="/icon/juejin.svg" className="h-full w-full" />
              </Link>
            </div>
          </div>
        </div>

        <div className="home-module home-post content-bg h-fit rounded-xl border md:col-span-2">
          <div className="home-community-title flex border-b px-4 py-4">
            <span> 最新动态 </span>
            <Link href="/post" className="text-secondary ml-auto flex items-center">
              <span className="text-xs"> 查看更多 </span>
              <IconRight className="ml-1" />
            </Link>
          </div>

          <div className="home-post-content p-4">
            {posts.slice(0, 5).map((post, index) => {
              return (
                <div className={`flex ${index < posts.length - 1 && 'mb-4'}`} key={post.title}>
                  <img src={'/avatar.png'} className="h-10 w-10 rounded-full" />
                  <Link
                    href={post.link}
                    target="_blank"
                    className="home-post-item ml-4 block flex-1 rounded-md border p-4 transition duration-300 hover:-translate-y-1 hover:shadow"
                  >
                    <div className={`mb-2`}>
                      <span>发布了文章： {post.title}</span>
                      <IconRight className="ml-2 transition-opacity duration-300" />
                    </div>
                    <p className="text-secondary"> {post.time} </p>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <ProjectViewer ref={ProjectViewerRef} />
    </main>
  )
}
