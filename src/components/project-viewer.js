import { useState, forwardRef, useImperativeHandle } from 'react'
import { Modal, Carousel } from '@arco-design/web-react'

export default forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState({ img: [] })

  useImperativeHandle(ref, () => ({
    show: project => {
      setCurrentProject(project)
      setVisible(true)
    },
  }))

  return (
    <Modal
      visible={visible}
      footer={null}
      simple={false}
      unmountOnExit={true}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      className="project_viewer w-4/5 max-w-screen-lg overflow-hidden rounded-xl"
    >
      <div className="overflow-hidden md:flex" style={{ height: '50vh' }}>
        <div className="h-2/5 w-full md:h-full md:w-2/3">
          <Carousel className="h-full w-full bg-black" moveSpeed={300} autoFocus={false}>
            {currentProject.img.map((src, index) => (
              <div key={index}>
                <img src={src} className="h-full w-full object-cover" draggable={false} />
              </div>
            ))}
          </Carousel>
        </div>
        <aside className="content-bg h-3/5 w-full overflow-y-auto rounded-xl p-4 md:h-full md:w-1/3 md:p-8">
          <h3 className="mb-4 text-lg font-bold">{currentProject.name}</h3>
          <h5 className="text-secondary mb-2">项目简介</h5>
          <p className="mb-4 text-justify">{currentProject.intro}</p>
          {currentProject.duty && (
            <>
              <h5 className="text-secondary mb-2">我的职责</h5>
              <p className="mb-4 text-justify">{currentProject.duty}</p>
            </>
          )}
          {currentProject.gains && (
            <>
              <h5 className="text-secondary mb-2">项目成果</h5>
              <p className="text-justify">{currentProject.gains}</p>
            </>
          )}
        </aside>
      </div>
    </Modal>
  )
})
