import projects from '@/data/project.json'
import ResumePrintButton from '@/components/resume-print-button'

export default function PageResume() {
  return (
    <main className='relative px-6'>
      <div className='mx-auto max-w-7xl py-20 border-b mb-20'>
        <h1 className='text-4xl md:text-5xl font-extrabold mb-6'>简历</h1>

        <p className='text-lg text-gray-500'>
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
          等，欢迎随时与我联系。
        </p>
      </div>

      <div className='max-w-4xl mx-auto px-16 py-24 border mb-20 bg-white dark:opacity-60 hidden lg:block'>
        <div id='the_resume-main' className='grid gap-6 text-sm text-black'>
          <section className='grid gap-2'>
            <h2 className='text-center text-2xl font-bold'>李孟哲</h2>

            <p className='text-center'>
              <a href='tel:+8615538077068'>155 3807 7068</a> & <a href='mailto:li.mengzhe@outlook.com'>li.mengzhe@outlook.com</a>
            </p>

            <p className='text-center'>&lt;高级前端开发工程师 /&gt;</p>
          </section>

          <h3 className='text-xl font-bold border-b-2 pb-2'>基本信息</h3>

          <table className='mb-2'>
            <tbody>
              <tr>
                <td className='py-1 text-gray-500'>年龄</td>
                <td className='py-1 pl-2'>30 岁</td>
                <td className='py-1 text-gray-500'>最高学历</td>
                <td className='py-1 pl-2'>全日制硕士研究生</td>
              </tr>
              <tr>
                <td className='py-1 text-gray-500'>开发经验</td>
                <td className='py-1 pl-2'>5 年</td>
                <td className='py-1 text-gray-500'>期望薪资</td>
                <td className='py-1 pl-2'>税前 20-24K</td>
              </tr>
              <tr>
                <td className='py-1 text-gray-500'>个人主页</td>
                <td className='py-1 pl-2' rowspan='1'>
                  https://reallimengzhe.github.io/
                </td>
                <td className='py-1 text-gray-500'>个人博客</td>
                <td className='py-1 pl-2'>https://juejin.cn/user/3984285869810887/posts</td>
              </tr>
            </tbody>
          </table>

          <h3 className='text-xl font-bold border-b-2 pb-2'>专业技能</h3>

          <section className='grid gap-2'>
            <h4 className='font-bold'>前端核心技术</h4>

            <ul className='pl-4 list-disc space-y-1'>
              <li>熟练使用 HTML5 语义化标签和 CSS3 新增 Flex、Grid 等特性进行响应式设计布局。</li>
              <li>熟练使用 JavaScript ES6+ 特性编写高质量、高性能的代码。</li>
              <li>深入理解浏览器渲染原理和 JS 引擎运行原理，能够分析和解决复杂的性能问题。</li>
            </ul>
          </section>
          <section className='grid gap-2'>
            <h4 className='font-bold'>框架与工程化</h4>
            <ul className='pl-4 list-disc space-y-1'>
              <li>
                理解 <b>Vue</b> 的响应式原理、组件通信机制和渲染流程，设计和实现过多个基于 Vue 的大型复杂应用。
              </li>
              <li>
                熟悉 <b>React</b> 技术栈，理解虚拟 DOM 和 Fiber 架构，有实际项目开发经验，能够在多框架环境中灵活切换。
              </li>
              <li>
                具备 <b>UI 设计</b>能力和<b>用户体验</b>意识，熟练使用 Figma、Photoshop 等工具，目标是实现用户体验极佳的用户界面。
              </li>
              <li>
                熟练使用 <b>Git</b> 进行版本控制和团队协作。
              </li>
              <li>
                具备<b>跨端</b>开发能力，能够开发原生微信小程序，开发 Electron 桌面端应用，开发 Uni-App App 和小程序。
              </li>
              <li>
                具备<b>全栈</b>开发能力，熟练使用 Node.js 开发服务端应用。
              </li>
            </ul>
          </section>

          <h3 className='text-xl font-bold border-b-2 pb-2'>时间线</h3>

          <section className='grid gap-2'>
            <h4 className='font-bold'>上海喜树信息科技有限公司 · 研发部 · 前端组组长</h4>

            <i className='text-gray-500'>2023 年 8 月 - 2025 年 1 月</i>

            <ul className='pl-4 list-disc space-y-1'>
              <li>
                <b>架构升级：</b>主导公司核心产品进行从 Vue 2 到 Vue 3 的技术升级，设计了渐进式迁移方案。
              </li>
              <li>
                <b>产品设计：</b>设计并实现安全检测报告、流程化的检测模型、数据可视化监控大屏，以及基于 WebSocket 的实时告警推送业务。
              </li>
              <li>
                <b>项目管理：</b>参与福建广电、江苏国网等客户定制化项目的管理工作。
              </li>
              <li>
                <b>团队建设：</b>管理 4 人前端团队，制定技术规范和最佳实践，建立 Code Review 和技术分享机制。
              </li>
              <li>
                <b>性能优化：</b>梳理并优化代码结构，实现首屏加载提速 60%，打包体积减少 46%，打包时间减少 52.7%。
              </li>
              <li>
                <b>个人荣誉：</b>入职未满半年即获得公司主动加薪奖励。
              </li>
            </ul>
          </section>

          <section className='grid gap-2'>
            <h4 className='font-bold'>伦敦城市大学 · 全日制硕士研究生 </h4>

            <i className='text-gray-500'>2022 年 3 月 - 2023 年 6 月</i>

            <ul className='pl-4 list-disc space-y-1'>
              <li>主修工商管理，获得硕士学位。</li>
              <li>平均成绩 Good，创新管理等课程获得 Very Good。</li>
            </ul>
          </section>

          <section className='grid gap-2'>
            <h4 className='font-bold'>上海商汤智能科技有限公司 · 智慧城市与商业事业群 · 高级前端开发工程师</h4>

            <i className='text-gray-500'>2020 年 10 月 - 2022 年 2 月</i>

            <ul className='pl-4 list-disc space-y-1'>
              <li>
                <b>核心项目：</b>参与核心项目 <b>AI 定义相机</b>产品线的开发，负责前端架构设计和开发，该产品在全球 30+ 城市的智慧安防项目中落地应用。
              </li>
              <li>
                <b>实时通信：</b>实现基于 WebSocket 的实时推送业务，保证了复杂业务场景下的数据实时性。
              </li>
              <li>
                <b>项目重构：</b>针对 1.0 版本进行重构，重构后减少内存占用 500MB+，页面响应时间提升 70%。
              </li>
              <li>
                <b>技术方案：</b>主导设计多个关键业务模块技术方案，包括基于 Canvas
                的目标区域绘制功能、多摄像头联动控制等，显著提升了产品的技术竞争力。
              </li>
              <li>
                <b>个人荣誉：</b>荣获公司2021 年<b>年度最佳解决方案</b>奖，方案被应用于公司多个核心产品。
              </li>
            </ul>
          </section>

          <section className='grid gap-2'>
            <h4 className='font-bold'>上海树维信息科技有限公司 · 平台产品研发部 · 前端组组长</h4>

            <i className='text-gray-500'>2018 年 10 月 - 2020 年 10 月</i>

            <ul className='pl-4 list-disc space-y-1'>
              <li>
                <b>技术革新：</b>负责搭建公司首款基于 Vue 的前端开发架构，并成功上线公司首款 Vue 产品。
              </li>
              <li>
                <b>技术升级：</b>带领其他技术团队从 jQuery 升级到 Vue 技术栈，重构超过 10 万行代码。
              </li>
              <li>
                <b>数据可视化：</b>基于 ECharts 设计实现校园数据监控大屏，创新性地应用 CSS transform
                实现全尺寸屏幕自适应方案，解决了多分辨率显示问题。
              </li>
              <li>
                <b>组件库建设：</b>参与设计和开发公司私有组件库，包含 30+ 高复用性业务组件，统一了产品设计语言。
              </li>
              <li>
                <b>团队建设：</b>从零组建 3 人前端团队，建立技术培训体系和文档规范。
              </li>
              <li>
                <b>个人荣誉：</b>工作热情和产出得到同事和上级领导的一致认可，荣获公司 2019 年<b>年度优秀员工</b>。
              </li>
            </ul>
          </section>

          <section className='grid gap-2'>
            <h4 className='font-bold'>郑州轻工业大学 · 本科</h4>

            <i className='text-gray-500'>2013 年 9 月 - 2017 年 7 月</i>

            <ul className='pl-4 list-disc space-y-1'>
              <li>
                {' '}
                主修<b>视觉传达设计</b>专业，获得学士学位。
              </li>
              <li>
                <b>版面编排设计</b>、<b>网页设计与制作</b>等课程均获得 90+ 成绩。获得计算机二级证书。
              </li>
            </ul>
          </section>

          <h3 className='text-xl font-bold border-b-2 pb-2'>项目经验</h3>

          {projects
            .filter(item => item.show)
            .map(project => {
              return (
                <section key={project.name} className='grid gap-2'>
                  <div className='flex'>
                    <h4 className='font-bold'>{project.name}</h4>
                    <p className='text-gray-500'>（{project.company?.join('、')}）</p>
                  </div>

                  <p className='text-gray-500'>项目简介</p>

                  <p className=''>{project.intro}</p>

                  <p className='text-gray-500'>技术架构</p>

                  <div className='flex gap-2' style={{ textTransform: 'capitalize' }}>
                    {project.techStack.join(' + ')} + ···
                  </div>

                  <p className='text-gray-500'>职责与成果</p>

                  <ul className='pl-4 list-disc space-y-1'>
                    {project.duty.map(duty => {
                      return <li key={duty}>{duty}</li>
                    })}
                  </ul>
                </section>
              )
            })}
        </div>
      </div>

      <ResumePrintButton />

      <div className='block lg:hidden text-center mb-20'>
        <p className='text-5xl mb-10'>💻</p>
        <p>简历以 A4 尺寸进行排版，请在宽度 1024px 以上的环境下进行查看，以便获得最佳显示效果。</p>
      </div>
    </main>
  )
}
