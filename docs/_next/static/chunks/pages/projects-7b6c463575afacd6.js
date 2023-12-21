(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{5039:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return s(3996)}])},4291:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var n=s(5893);function r(e){let{fill:t="currentColor",width:s="1em",height:r="1em",className:o="",style:c={}}=e;return(0,n.jsx)("svg",{width:s,height:r,viewBox:"0 0 24 24",fill:t,xmlns:"http://www.w3.org/2000/svg",className:o,style:c,children:(0,n.jsx)("path",{d:"M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"})})}},3996:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var n=s(5893),r=s(1664),o=s.n(r),c=s(7294),a=s(4291),i=s(5579);let p=s(6306);function l(){return(0,c.useEffect)(()=>{(0,i.X)(document.querySelectorAll(".page_project-item"))},[]),(0,n.jsxs)("main",{className:"page_project px-6",children:[(0,n.jsxs)("div",{className:"mx-auto max-w-7xl py-20 border-b border-slate-100 dark:border-slate-900",children:[(0,n.jsx)("h1",{className:"text-4xl md:text-5xl font-extrabold mb-6",children:"项目"}),(0,n.jsx)("p",{className:"text-lg text-slate-400",children:"我曾独立负责过多个大型项目，从立项到交付，完成了多个从 0 到 1 的实现。这是我职业生涯的宝贵经验，使我受益良多。"})]}),(0,n.jsx)("div",{className:"mx-auto max-w-7xl grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20",children:p.filter(e=>e.show).map(e=>(0,n.jsx)("div",{className:"page_project-item",children:(0,n.jsxs)(o(),{className:"flex flex-col items-start rounded-xl border border-slate-100 dark:border-slate-900 p-7 transition-all hover:-translate-y-1 h-full hover:shadow-xl hover:shadow-klein-600/5 dark:hover:shadow-cyan-600/5",href:"/projects/"+e.id,children:[(0,n.jsx)("img",{src:e.logo[0],className:"h-10 mb-16 block dark:hidden"}),(0,n.jsx)("img",{src:e.logo[1],className:"h-10 mb-16 hidden dark:block"}),(0,n.jsx)("h5",{className:"text-xl font-bold mb-2",children:e.name}),(0,n.jsx)("div",{className:"flex gap-2 flex-wrap text-sm md:text-base text-klein-600 dark:text-cyan-600 mb-4",children:e.keywords.map(e=>(0,n.jsxs)("span",{children:["#",e]},e))}),(0,n.jsx)("p",{className:"text-sm md:text-base text-slate-400 mb-4",children:e.intro}),(0,n.jsxs)("div",{className:"flex items-center mt-auto",children:[e.techStack.map((e,t)=>(0,n.jsx)("div",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-950",style:{marginLeft:0==t?"-4px":"-8px",zIndex:10-t},children:(0,n.jsx)("img",{src:"/icon/"+e+".svg",className:"h-7/12 w-7/12"})},e)),(0,n.jsx)("div",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-950",style:{marginLeft:"-8px"},children:(0,n.jsx)(a.Z,{})})]})]},e.name)},e.name))})]})}},5579:function(e,t,s){"use strict";function n(e){let t="fade_in_bottom",s=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&!e.target.classList.contains(t)&&e.target.classList.add(t)})});e.forEach(e=>{s.observe(e)})}s.d(t,{X:function(){return n}})},6306:function(e){"use strict";e.exports=JSON.parse('[{"show":true,"id":"see-api-sec","name":"上交所 APISEC 安全平台","logo":["/icon/sse.png","/icon/sse-white.png"],"keywords":["数据安全","数据资产","后台管理"],"techStack":["vite","vue","element","echarts","axios","pinia","sass"],"intro":"由于数据安全的重要性，上交所 APISEC 安全平台提供了对系统内部 API 进行全方位监测统计分析的功能，将疑似被攻击的以及暴露了敏感数据的 API 通过表格、图表等形式展示给用户，以便用户及时了解系统安全状况，从而进行及时的修复。该平台是数据资产安全防护的重要手段。","duty":["主导从 Webpack + Vue2 到 Vite + Vue3 的前端架构升级工作。","封装图表组件，使 Echarts 图表组件实现自适应，解决了调整窗口尺寸时布局错乱的问题。","封装虚拟选择器组件，提高了团队开发效率，解决了数据量过大时页面的卡顿问题。","通过 keepalive 实现页面缓存功能。"],"img":["/project/10/1.png","/project/8/2.png","/project/8/3.png","/project/8/0.png"]},{"show":true,"id":"sph-wms","name":"上海医药控股全国仓库管理系统","logo":["/icon/sph.png","/icon/sph.png"],"keywords":["仓库管理","后台管理"],"techStack":["vite","vue","element","axios","pinia","sass"],"intro":"该系统用于管理上海医药在全国各地的仓储业务。集成了仓间仓位管理、入库管理、出库管理和物流管理等十余个模块，为上海医药提供了高效的仓库管理解决方案。","duty":["搭建基于 Vue 3 的前端配套开发架构。","设计并实现了基于服务端的权限管理系统，允许管理员对不同仓库下、角色下的用户分配不同的菜单和功能。","封装十余款通用组件，提高了前端开发效率。","参与制定接口规范，从业务角度结合用户体验对操作流程进行梳理和优化。"],"img":["/project/8/1.png","/project/8/2.png","/project/8/3.png","/project/8/0.png"]},{"show":true,"id":"nwpu-data-assets-serve","name":"西北工业大学数据资产服务平台","logo":["/icon/nwpu.png","/icon/nwpu.png"],"keywords":["数据资产","监控大屏"],"techStack":["webpack","vue","element","echarts","axios","sass"],"intro":"数据资产是一个企业或组织的在数字时代的重要资产。西北工业大学数据资产服务平台会对西工大数据资产进行清晰、全面的梳理、归档和展示。通过图表和动态监控大屏，为学校提供全方位的数据监测和分析系统。","duty":["搭建基于 Vue 2 的前端配套开发架构。","负责整个项目的前端开发工作，包括页面绘制、组件封装和数据联调等。","跟进项目部署进度，积极响应关注现场反馈，保证产品稳定运行。"],"img":["/project/1/6.jpg","/project/1/2.jpg","/project/1/3.jpg","/project/1/4.jpg","/project/1/5.jpg"]},{"show":false,"id":"nwpu-data-assets-admin","name":"西北工业大学数据资产管理平台","logo":["/icon/nwpu.png","/icon/nwpu.png"],"keywords":["数据资产","后台管理","高校"],"techStack":["webpack","vue","element","echarts","axios","sass"],"intro":"该项目主要用于高校数据资产的维护。管理平台用于数据管理，可以对数据进行增删改查等一系列操作，但拥有严格的权限控制。","duty":["负责整个项目的前端开发工作，包括页面绘制、组件封装和数据联调等。跟进项目部署进度，关注现场反馈，并及时响应以保证产品稳定运行。"],"img":["/project/1/6.jpg","/project/1/2.jpg","/project/1/3.jpg","/project/1/4.jpg","/project/1/5.jpg"]},{"show":true,"id":"nwpu-portal","name":"西北工业大学翱翔门户","logo":["/icon/nwpu.png","/icon/nwpu.png"],"keywords":["校园门户","Web","App"],"techStack":["webpack","vue","uni-app","electron","element","axios","sass"],"intro":"翱翔门户是西北工业大学校园综合门户，为全校师生提供教学、科研、办公、学习和生活等各种相关服务，如考试安排、奖学金申请、教室预约、成绩查询等服务。","duty":["搭建基于 Vue 2 的前端配套开发架构。","搭建业务组件库。","基于 Electron 实现桌面端应用，提供校园新闻、日程安排等服务。"],"img":["/project/2/1.png","/project/2/2.png","/project/2/3.png","/project/2/4.png","/project/2/5.png"]},{"show":true,"id":"sensetime-ai","name":"商汤科技 AI 定义相机","logo":["/icon/sensetime.png","/icon/sensetime-white.png"],"keywords":["人脸识别","监控视频","实时推送","安防"],"techStack":["webpack","vue","typescript","element","axios","sass"],"intro":"该项目用于相机视频画面实时预览和实时推送功能。通过该 Web 可以对指定的实体进行实时跟踪，并将识别结果进行实时推送。","duty":["实现基于 OCX 的在线低延迟视频预览功能。","实现基于 Websocket 的实时推送功能。","基于 Canvas 实现目标区域绘制功能。"],"img":["/project/3/1.png","/project/3/2.png","/project/3/3.png","/project/3/4.png","/project/3/5.png"]},{"show":false,"id":"elite-robot","name":"艾利特机器人官网及官网后台","logo":["/icon/sensetime.png","/icon/sensetime-white.png"],"keywords":["官网","SSR"],"techStack":["webpack","nuxt","vant","axios","sass"],"intro":"该项目为苏州艾利特机器人有限公司官方网站，主要功能包括产品详情展示与对比，资料获取和视频教程等。项目采用响应式布局，确保在不同设备上的都具备友好的表现和可用性。并采用了 SSR 渲染技术，用于 SEO。","duty":["负责该项目的所有前端开发工作，包括绘制页面、接口集成以及性能、用户体验优化。优化用户体验，通过响应式布局和交互设计，确保系统在不同设备上的良好表现和可用性。"],"img":["/project/6/1.png","/project/6/2.png","/project/6/3.png","/project/6/4.png","/project/6/5.png","/project/6/6.png"]},{"show":false,"id":"zero-icon","name":"Zero Icon 开源图标库","logo":["/icon/sensetime.png","/icon/sensetime-white.png"],"keywords":["组件库"],"techStack":["vue","svg"],"intro":"Zero Icon 是一款面向设计师和开发人员的免费、开源可商用的图标库。不过由于开源社区的不断壮大，国内外诞生了许多优秀图标库，所以已停止维护。预览地址：https://reallimengzhe.github.io/zero-icon/","duty":["根据官方统计，停止维护前累计安装一千余次（由于个人精力有限和开源生态的不断丰富，该项目已不再维护）。","该项目由本人独立开发。主要工作包括图标的设计制作，组件的开发以及官网的维护等。"],"img":["/project/4/1.png","/project/4/2.png","/project/4/3.png"]}]')}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5039)}),_N_E=e.O()}]);