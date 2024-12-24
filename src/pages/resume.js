import IconArrowDown from '@/components/icon-arrow-down'

import printJS from '@/utils/print.min.js'

const projects = require('@/data/project.json')

export default function PageResume() {
  function handleExport() {
    printJS({
      printable: 'the_resume-main',
      type: 'html',
      scanStyles: true,
      // maxWidth: '',
      targetStyles: ['*'],
      documentTitle: '前端开发工程师_李孟哲_15538077068',
      // ignoreElements: ['report_content-button'],
    })
  }

  return (
    <main className='relative px-6'>
      <div className='mx-auto max-w-7xl py-20 border-b border-slate-100 dark:border-slate-900 mb-20'>
        <h1 className='text-4xl md:text-5xl font-extrabold mb-6'>简历</h1>

        <p className='text-lg text-slate-400'>
          这里是我的完整简历，内容包括我的
          <span className='font-bold text-klein-600 dark:text-cyan-600' key={1}>
            {' 联系方式'}
          </span>
          、
          <span className='font-bold text-klein-600 dark:text-cyan-600' key={2}>
            {' 技能'}
          </span>
          、
          <span className='font-bold text-klein-600 dark:text-cyan-600' key={3}>
            {' 教育背景 '}
          </span>
          和
          <span className='font-bold text-klein-600 dark:text-cyan-600' key={4}>
            {' 职业生涯 '}
          </span>
          等。
        </p>
      </div>

      <div className='max-w-4xl mx-auto px-16 py-24 border border-slate-100 dark:border-slate-900 mb-20 bg-white dark:opacity-60 hidden lg:block'>
        <div id='the_resume-main' className='grid gap-6 text-sm text-black'>
          <section className='grid gap-2'>
            <h2 className='text-center text-2xl font-bold'>李孟哲</h2>

            <p className='flex gap-8 justify-center'>
              <a href='tel:+8615538077068'>155 3807 7068</a>
              <a href='mailto:li.mengzhe@outlook.com'>li.mengzhe@outlook.com</a>
            </p>

            <p className='text-center'>&lt;前端开发工程师 /&gt;</p>
          </section>

          <h3 className='text-xl font-bold border-b-2 pb-2 border-slate-100 dark:border-slate-900'>快速了解</h3>

          <table className='mb-2'>
            <tbody>
              <tr>
                <td className='py-1'>出生年月</td>
                <td className='py-1 font-bold pl-2'>1994 年 7 月</td>
                <td className='py-1'>性别</td>
                <td className='py-1 font-bold pl-2'>男</td>
              </tr>
              <tr>
                <td className='py-1'>最高学历</td>
                <td className='py-1 font-bold pl-2'>硕士研究生</td>
                <td className='py-1'>开发经验</td>
                <td className='py-1 font-bold pl-2'>5 年</td>
              </tr>
              <tr>
                <td className='py-1'>个人主页</td>
                <td className='py-1 font-bold pl-2'>https://reallimengzhe.github.io/</td>
                <td className='py-1'>个人博客</td>
                <td className='py-1 font-bold pl-2'>https://juejin.cn/user/3984285869810887/posts</td>
              </tr>
            </tbody>
          </table>

          <h3 className='text-xl font-bold border-b-2 pb-2 border-slate-100 dark:border-slate-900'>时间线</h3>

          <section className='grid gap-2'>
            <h4 className='font-bold dark:border-slate-900'>上海喜树信息科技有限公司 · 前端开发工程师 · 研发部</h4>

            <i className='text-slate-400'>2023 年 8 月 - 至今</i>

            <ul className='list-inside list-disc grid gap-1'>
              <li>负责公司所有产品的前端开发工作。</li>
              <li>主导从 Webpack + Vue 2 到 Vite + Vue 3 的前端架构升级工作。</li>
              <li>主导前端性能优化工作，使前端打包时间节省 52.7%，打包体积减少 46%。</li>
            </ul>
          </section>

          <section className='grid gap-2'>
            <h4 className='font-bold dark:border-slate-900'>伦敦城市大学 · 全日制硕士研究生 </h4>

            <i className='text-slate-400'>2022 年 3 月 - 2023 年 6 月</i>

            <ul className='list-inside list-disc grid gap-1'>
              <li>主修工商管理，获得硕士学位。</li>
              <li>平均成绩 Good，创新管理等课程获得 Very Good。</li>
            </ul>
          </section>

          <section className='grid gap-2'>
            <h4 className='font-bold dark:border-slate-900'>上海商汤智能科技有限公司 · 前端开发工程师 · 智慧城市与商业事业群</h4>

            <i className='text-slate-400'>2020 年 10 月 - 2022 年 2 月</i>

            <ul className='list-inside list-disc grid gap-1'>
              <li>负责 AI 定义相机 整个产品线的前端开发。</li>
              <li>实现基于 OCX 的视频实时预览功能。</li>
              <li>实现基于 Websocket 的即时推送功能。</li>
              <li>对旧项目进行性能优化，减少约 500MB 的前端内存空间占用。</li>
              <li>参与需求评审和技术讨论，提供前端解决方案，确保项目落地可行性和合理性。</li>
              <li className='font-bold'>荣获公司 2021 年年度最佳解决方案奖。</li>
            </ul>
          </section>

          <section className='grid gap-2'>
            <h4 className='font-bold dark:border-slate-900'>上海树维信息科技有限公司 · 前端开发工程师 · 平台产品研发部</h4>

            <i className='text-slate-400'>2019 年 5 月 - 2020 年 10 月</i>

            <ul className='list-inside list-disc grid gap-1'>
              <li>搭建基于 Vue 的前端开发架构，成功上线了公司第一款基于 Vue 的产品。</li>
              <li>基于 Echarts 实现数据监控大屏，并基于 transform 实现屏幕自适应。</li>
              <li>负责 校园门户 项目的前端重构，从 JQuery 升级到 Vue。</li>
              <li>负责公司组件库的开发和维护工作。 </li>
              <li>组建前端团队，负责前端工作安排、技术培训、业务培训以及文档编写等工作。</li>
              <li className='font-bold'>荣获公司 2019 年年度优秀员工。</li>
            </ul>
          </section>

          <section className='grid gap-2'>
            <h4 className='font-bold dark:border-slate-900'>郑州轻工业大学 · 本科</h4>

            <i className='text-slate-400'>2013 年 9 月 - 2017 年 7 月</i>

            <ul className='list-inside list-disc grid gap-1'>
              <li>主修视觉传达，获得艺术学学士学位。</li>
              <li>版面编排设计、网页设计等课程获得高分。</li>
              <li>获得计算机二级证书。</li>
            </ul>
          </section>

          <h3 className='text-xl font-bold border-b-2 pb-2 border-slate-100 dark:border-slate-900'>专业技能</h3>

          <section className='grid gap-2'>
            <h4 className='font-bold dark:border-slate-900'>前端基础</h4>

            <ul className='list-inside list-disc'>
              <li>熟练使用 Canvas、WebSocket 等 HTML5 新特性。</li>
              <li>熟练使用 Flex、Grid 等 CSS3 新特性。CSS 命名遵循 BEM 规范。</li>
              <li>熟练使用 async/await、Set、Map 等 JavaScript ES6+ 新特性，能够在项目中广泛且合理的运用。</li>
            </ul>
          </section>
          <section className='grid gap-2'>
            <h4 className='font-bold dark:border-slate-900'>框架与其它</h4>
            <ul className='list-inside list-disc'>
              <li>熟练开发基于 Vue 2.x、Vue 3.x 的应用并理解其原理。</li>
              <li>熟悉 React，有实际项目的开发经验。</li>
              <li>熟练使用 Webpack 和 Vite 等构建工具，有前端性能优化的具体实践。</li>
              <li>熟悉 Node.js 、Electron.js、uni-app 和微信小程序，可以独立开发服务端应用、桌面端应用、APP 和小程序。</li>
              <li>熟练使用 Git、Jira 等项目协同工具，保证团队协作效率。</li>
              <li>有 UI 设计相关知识和经验，具有审美基础，且能够熟练使用 Photoshop、Illustrator、Figma 等设计软件。 </li>
            </ul>
          </section>

          <h3 className='text-xl font-bold border-b-2 pb-2 border-slate-100 dark:border-slate-900'>项目经验</h3>

          {projects
            .filter(item => item.show)
            .map(project => {
              return (
                <section key={project.name} className='grid gap-2'>
                  <div className='flex'>
                    <h4 className='font-bold dark:border-slate-900'>{project.name}</h4>
                    <p className='text-slate-400'>（{project.company?.join('、')}）</p>
                  </div>

                  <p className='text-slate-400'>项目简介</p>

                  <p className=''>{project.intro}</p>

                  <p className='text-slate-400'>技术架构</p>

                  <div className='flex gap-2'>
                    {project.techStack.map(tech => {
                      return (
                        <div key={tech} className=''>
                          {tech}
                        </div>
                      )
                    })}
                  </div>

                  <p className='text-slate-400'>职责与成果</p>

                  <ul className='list-inside list-disc grid gap-1'>
                    {project.duty.map(duty => {
                      return <li key={duty}>{duty}</li>
                    })}
                  </ul>
                </section>
              )
            })}
        </div>
      </div>

      <button
        className='bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 text-black dark:text-white transition-colors text-sm rounded-lg items-center px-4 py-2 mx-auto mb-20 hidden lg:flex'
        onClick={handleExport}
      >
        <span className='mr-2'>下载 PDF</span>
        <IconArrowDown />
      </button>

      <div className='block lg:hidden text-center mb-20'>
        <p className='text-5xl mb-10'>💻</p>
        <p>简历以 A4 纸尺寸进行排版，请在宽度 1024px 以上的设备、浏览器上进行查看，以便获得最佳显示效果。</p>
      </div>
    </main>
  )
}
