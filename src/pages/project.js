import { useEffect, useRef } from 'react'
import { IconMore, IconExpand, IconClockCircle } from '@arco-design/web-react/icon'

import ProjectViewer from '@/components/project-viewer'
import { setAnimation } from '@/utils'

export default function Project() {
  useEffect(() => {
    setAnimation(document.querySelectorAll('.page_project-item'))
  }, [])
  const projects = require('@/data/project.json')

  const ProjectViewerRef = useRef(null)

  function onViewProject(project) {
    ProjectViewerRef.current.show(project)
  }

  return (
    <main className="page_project relative px-4">
      <div
        className="page_project-main mx-auto grid max-w-7xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{ marginTop: '-32px' }}
      >
        {projects
          .filter(item => item.show)
          .map(project => {
            return (
              <div className="page_project-item" key={project.name}>
                <div
                  className="content-bg rounded-xl border p-4 transition duration-300 hover:-translate-y-1 hover:shadow"
                  key={project.name}
                  onClick={() => onViewProject(project)}
                >
                  <img src={project.img[0]} className="mb-4 aspect-3/2 w-full rounded-md object-cover" />
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
                          className="page_project-item-tech flex h-8 w-8 items-center justify-center rounded-full"
                          style={{
                            marginLeft: index === 0 ? '-4px' : '-8px',
                            zIndex: 10 - index,
                          }}
                          key={tech}
                        >
                          <img src={'/icon/' + tech + '.svg'} className="h-7/12 w-7/12" />
                        </div>
                      )
                    })}

                    <div
                      className="page_project-item-tech flex h-8 w-8 items-center justify-center rounded-full"
                      style={{ marginLeft: '-8px' }}
                      key="more"
                    >
                      <IconMore />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        <div className="page_project-item content-bg flex flex-col items-center justify-center rounded-xl border p-4" key="wait">
          <IconClockCircle className="mb-4 text-4xl" />
          <h5 className="mb-2"> 更多项目 </h5>
          <p className="text-secondary"> 敬请期待 </p>
        </div>
      </div>

      <ProjectViewer ref={ProjectViewerRef} />
    </main>
  )
}
