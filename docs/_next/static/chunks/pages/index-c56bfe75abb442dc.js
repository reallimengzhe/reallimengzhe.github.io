(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9648:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1940)}])},7667:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var a=t(1527);function r(e){let{fill:s="currentColor",width:t="1em",height:r="1em",className:l="",style:i={}}=e;return(0,a.jsx)("svg",{width:t,height:r,viewBox:"0 0 24 24",fill:s,xmlns:"http://www.w3.org/2000/svg",className:l,style:i,children:(0,a.jsx)("path",{d:"M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"})})}},4240:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var a=t(1527);function r(e){let{fill:s="currentColor",width:t="1em",height:r="1em",className:l="",style:i={}}=e;return(0,a.jsx)("svg",{width:t,height:r,viewBox:"0 0 24 24",fill:s,xmlns:"http://www.w3.org/2000/svg",className:l,style:i,children:(0,a.jsx)("path",{d:"M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"})})}},1940:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return N}});var a=t(1527),r=t(7667),l=t(4240),i=t(959);let n="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";function o(){let e={line:(0,i.useRef)(null),bar:(0,i.useRef)(null),dynamicBar:(0,i.useRef)(null),globe:(0,i.useRef)(null)};return(0,i.useEffect)(()=>{Promise.all([Promise.all([t.e(216),t.e(921)]).then(t.bind(t,2921)),Promise.all([t.e(216),t.e(661)]).then(t.bind(t,7661))]).then(s=>{let[t]=s,a={};Object.entries(e).forEach(e=>{let[s,r]=e;if(r.current)switch(a[s]=t.init(r.current),s){case"line":a[s].setOption({grid:{top:10,right:0,bottom:10,left:0},xAxis:{show:!1,type:"category",data:["1","2","3","4","5","6","7","8"]},yAxis:{show:!1,type:"value"},series:[{data:[80,95,70,90,80,98,92,188],type:"line",smooth:!0,symbolSize:8,lineStyle:{width:3},itemStyle:{color:"#06b6d4"}}]});break;case"bar":a[s].setOption({grid:{top:10,right:0,bottom:32,left:0},xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"rgb(148, 163, 184)",fontFamily:n},data:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},yAxis:{type:"value",show:!1},series:{type:"bar",itemStyle:{color:"#06b6d4"},barMaxWidth:36,data:[65,50,55,95,60,80,65,95,115,180,145,95]},itemStyle:{borderRadius:[8,8,0,0]}});break;case"dynamicBar":let l=[950,920,880,850,900,900,900];a[s].setOption({grid:{top:0,right:72,bottom:0,left:72},xAxis:{show:!1,label:{show:!1},splitLine:{show:!1}},yAxis:{type:"category",axisTick:{show:!1},axisLine:{show:!1},axisLabel:{color:"rgb(148, 163, 184)",fontFamily:n},inverse:!0,animationDuration:300,animationDurationUpdate:300,data:["Japan","France","Russia","UK","USA","India","Korea"],max:4},series:{realtimeSort:!0,type:"bar",data:l,label:{show:!0,position:"right",valueAnimation:!0,fontFamily:n,formatter:e=>{let{value:s}=e;return Number(s).toLocaleString()}},itemStyle:{color:"#06b6d4",borderRadius:[0,8,8,0]}},animationDuration:0,animationDurationUpdate:3e3,animationEasing:"linear",animationEasingUpdate:"linear"});let i=()=>{for(var e=0;e<l.length;++e)Math.random()>.9?l[e]+=Math.round(2e3*Math.random()):l[e]+=Math.round(200*Math.random());a[s].setOption({series:{type:"bar",data:l}})},o=setTimeout(()=>{i()},0),c=setInterval(()=>{i()},3e3);return()=>{clearTimeout(o),clearInterval(c)};case"globe":a[s].setOption({backgroundColor:"transparent",globe:{environment:"/starfield.jpg",baseTexture:"/world.topo.bathy.200401.jpg",heightTexture:"/bathymetry_bw_composite_4k.jpg",displacementScale:.04,shading:"realistic",realisticMaterial:{roughness:.9,metalness:.8,glossiness:64},postEffect:{enable:!0,bloom:{enable:!0,bloomIntensity:.3}},light:{ambient:{intensity:.1},main:{intensity:5,shadow:!0}},viewControl:{autoRotate:!0,autoRotateSpeed:10,distance:250},layers:[{type:"blend",blendTo:"emission",texture:"/world.topo.bathy.200401.jpg",intensity:.4}]},series:[{type:"lines3D",coordinateSystem:"globe",effect:{show:!0,period:2,trailWidth:2,trailLength:.2,trailOpacity:1,trailColor:"#0ea5e9"},blendMode:"lighter",lineStyle:{width:1,color:"#0ea5e9",opacity:.1},data:Array(20).fill().map(()=>[[360*Math.random()-180,180*Math.random()-90],[360*Math.random()-180,180*Math.random()-90]])}]})}});let r=()=>{Object.values(a).forEach(e=>{null==e||e.resize()})};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r),Object.values(a).forEach(e=>null==e?void 0:e.dispose())}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"pt-24 bg border-x p-2 font-mono text-sm text-slate-300",children:"font-bold text-2xl md:text-3xl border-x p-2"})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("h2",{className:"font-bold text-2xl md:text-3xl border-x p-2 bg",children:"丰富的数据可视化经验。让数据流动起来，尽情感受数据之美。"})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"p-2 bg-slate-100 dark:bg-slate-900 border-x space-y-2",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-2",children:[(0,a.jsxs)("div",{className:"h-80 bg rounded-xl border p-6",children:[(0,a.jsx)("h3",{children:"数据资产总量"}),(0,a.jsx)("p",{className:"text-2xl font-bold pt-1",children:"925,271.89 TB"}),(0,a.jsx)("p",{className:"text-sm text-slate-400 pt-0.5",children:"较去年增长 20.1%"}),(0,a.jsx)("div",{ref:e.line,className:"h-48"})]},"1"),(0,a.jsxs)("div",{className:"h-80 bg rounded-xl border p-6 lg:col-span-2",children:[(0,a.jsx)("h3",{children:"月资产概览"}),(0,a.jsx)("p",{className:"text-2xl font-bold pt-1",children:"Total 882.18 TB"}),(0,a.jsx)("p",{className:"text-sm text-slate-400 pt-0.5",children:"本年度数据资产总量合计 882.18 TB，平均每月 73.515 TB。"}),(0,a.jsx)("div",{ref:e.bar,className:"h-48"})]},"2"),(0,a.jsxs)("div",{className:"h-96 bg rounded-xl border p-6 lg:col-span-2",children:[(0,a.jsx)("h3",{className:"font-bold",children:"实时网络攻击来源 TOP 5"}),(0,a.jsx)("p",{className:"text-sm text-slate-400 pt-0.5",children:"TOP 5 Regions of Real-time Network Attacks."}),(0,a.jsx)("div",{ref:e.dynamicBar,className:"h-64 mt-6"})]},"3"),(0,a.jsx)("div",{ref:e.globe,className:"h-96 bg rounded-xl border overflow-hidden bg-black"},"5")]})})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]})]})}function c(){return(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"bg-slate-100 dark:bg-slate-900 border-x p-2",children:(0,a.jsx)("div",{className:"border bg rounded-xl overflow-hidden aspect-[5/2]",children:(0,a.jsxs)("div",{className:"grid grid-cols-4 gap-12",style:{transformStyle:"preserve-3d",transformOrigin:"top left",transform:"rotateX(45deg) rotateZ(-45deg) translateX(-50%) scale(1.3)"},children:[(0,a.jsxs)("div",{className:"border-r space-y-12",style:{animation:"scroll 60s linear infinite alternate"},children:[(0,a.jsx)("img",{src:"/project/1/1.jpg",className:"border-y"}),(0,a.jsx)("img",{src:"/project/1/2.jpg",className:"border-y"}),(0,a.jsx)("img",{src:"/project/1/3.jpg",className:"border-y"}),(0,a.jsx)("img",{src:"/project/1/4.jpg",className:"border-y"}),(0,a.jsx)("img",{src:"/project/1/5.jpg",className:"border-y"}),(0,a.jsx)("img",{src:"/project/1/6.jpg",className:"border-y"}),(0,a.jsx)("img",{src:"/project/2/1.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/2/2.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/2/3.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/2/4.png",className:"border-y"})]}),(0,a.jsxs)("div",{className:"border-x space-y-6",style:{animation:"scroll-reverse 60s linear infinite alternate"},children:[(0,a.jsx)("img",{src:"/project/2/5.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/3/1.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/3/2.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/3/3.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/3/4.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/3/5.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/4/1.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/4/2.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/4/3.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/5/1.png",className:"border-y"})]}),(0,a.jsxs)("div",{className:"border-x space-y-6",style:{animation:"scroll 60s linear infinite alternate"},children:[(0,a.jsx)("img",{src:"/project/5/2.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/5/3.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/6/1.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/6/2.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/6/3.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/6/4.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/6/5.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/6/6.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/1/1.jpg",className:"border-y"}),(0,a.jsx)("img",{src:"/project/1/2.jpg",className:"border-y"})]}),(0,a.jsxs)("div",{className:"border-x space-y-6",style:{animation:"scroll-reverse 60s linear infinite alternate"},children:[(0,a.jsx)("img",{src:"/project/1/3.jpg",className:"border-y"}),(0,a.jsx)("img",{src:"/project/8/0.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/8/1.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/8/2.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/8/3.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/9/1.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/9/2.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/10/1.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/10/2.png",className:"border-y"}),(0,a.jsx)("img",{src:"/project/10/3.png",className:"border-y"})]})]})})})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]})]})}let d=i.forwardRef(function({title:e,titleId:s,...t},a){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":s},t),e?i.createElement("title",{id:s},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))}),m=i.forwardRef(function({title:e,titleId:s,...t},a){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":s},t),e?i.createElement("title",{id:s},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))}),x=i.forwardRef(function({title:e,titleId:s,...t},a){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":s},t),e?i.createElement("title",{id:s},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}),p=i.forwardRef(function({title:e,titleId:s,...t},a){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":s},t),e?i.createElement("title",{id:s},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))}),b=[{type:"info",title:"机器人状态",content:"所有机器人系统运行正常，核心温度保持稳定。"},{type:"warning",title:"安全警告",content:"检测到未经授权的生物机械接入尝试，已启动防御协议。"},{type:"error",title:"系统入侵",content:"主控室防火墙遭受攻击，请立即采取应对措施。"},{type:"success",title:"任务完成",content:"机械臂校准完成，精确度提升至 99.9%。"},{type:"info",title:"数据同步",content:"人工智能核心数据库更新完成，新增决策模型。"},{type:"warning",title:"能源预警",content:"机器人能源储备不足 30%，请及时充能。"},{type:"error",title:"紧急情况",content:"探测到敌对机器人部队，启动紧急防御模式。"},{type:"success",title:"升级完成",content:"武器系统升级成功，火力输出提升 50%。"}],g={info:"bg-slate-600",warning:"bg-amber-500",error:"bg-red-500",success:"bg-emerald-500"},j={info:d,warning:m,error:x,success:p};function h(){let[e,s]=(0,i.useState)([]);return(0,i.useEffect)(()=>{s([{id:Date.now(),time:new Date().toLocaleTimeString("zh-CN",{hour12:!1}),...b[Math.floor(Math.random()*b.length)]}]);let e=setInterval(()=>{s(e=>{let s={id:Date.now(),time:new Date().toLocaleTimeString("zh-CN",{hour12:!1}),...b[Math.floor(Math.random()*b.length)]},t=[s,...e].slice(0,8);return t})},3e3);return()=>clearInterval(e)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"pt-24 bg border-x p-2 font-mono text-sm text-slate-300",children:"font-bold text-2xl md:text-3xl border-x p-2"})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("h2",{className:"font-bold text-2xl md:text-3xl border-x p-2 bg",children:"丰富的实时推送经验。消息的价值多少在于你能不能第一时间获取它。"})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"p-2 bg-slate-100 dark:bg-slate-900 border-x",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-2",children:[(0,a.jsx)("div",{className:"lg:h-128 aspect-video lg:aspect-auto bg rounded-2xl overflow-hidden lg:col-span-2 bg-black flex items-center",children:(0,a.jsx)("video",{className:"w-full h-full object-cover",src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",loop:!0,muted:!0,playsInline:!0,autoPlay:!0})}),(0,a.jsx)("div",{className:"h-128 overflow-hidden space-y-2",children:e.map((e,s)=>{let t=j[e.type];return(0,a.jsxs)("div",{className:"bg flex gap-3 border rounded-2xl p-3 transition-all duration-500 ".concat(0===s?"animate-fade-in":"animate-slide-down"),children:[(0,a.jsx)("div",{className:"shrink-0 w-7 h-7 ".concat(g[e.type]," rounded-lg flex items-center justify-center"),children:(0,a.jsx)(t,{className:"w-5 h-5 text-white"})}),(0,a.jsxs)("div",{className:"flex-1 min-w-0 text-sm",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"font-medium",children:e.title}),(0,a.jsx)("span",{className:"ml-auto text-xs text-slate-400 font-mono",children:e.time})]}),(0,a.jsx)("p",{className:"text-sm text-slate-400 mt-0.5 truncate",children:e.content})]})]},e.id)})})]})})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]})]})}let w=t(6306),f=t(2083);function N(){return(0,a.jsxs)("div",{className:"transparent-bg",children:[(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"pt-24 bg border-x p-2 font-mono text-sm text-slate-300",children:"font-bold text-4xl md:text-6xl"})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("h1",{className:"font-bold text-4xl md:text-6xl p-2 bg border-x",children:"Li Mengzhe, A Front-End Development Engineer Who Dedicated to Building User-Friendly Interfaces. \uD83C\uDFC2"})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"pt-12 bg border-x p-2 font-mono text-sm text-slate-300",children:"font-bold text-lg text-slate-600 text-klein-600 dark:text-cyan-600"})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsxs)("p",{className:"text-lg text-slate-600 border-x p-2 bg",children:["\uD83D\uDC4B 有朋自远方来，不亦乐乎。你好，欢迎访问我的个人主页。 作为一名前端开发工程师，我专注于构建"," ",(0,a.jsx)("span",{className:"font-bold text-klein-600 dark:text-cyan-600",children:"界面友好"})," 和"," ",(0,a.jsx)("span",{className:"font-bold text-klein-600 dark:text-cyan-600",children:"用户体验友好"})," 的前端应用。"]})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"pt-12 bg border-x p-2 font-mono text-sm text-slate-300"})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",id:"main-content",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsxs)("div",{className:"bg border-x p-2 flex gap-4",children:[(0,a.jsx)("button",{className:"bg-klein-600 hover:bg-klein-400 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white dark:text-black transition-colors font-bold text-sm rounded-full flex items-center px-6 py-3",onClick:()=>{document.getElementById("main-content").scrollIntoView({behavior:"smooth"})},children:"详 细 了 解"}),(0,a.jsx)("a",{href:"/resume",className:"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 text-black dark:text-white transition-colors font-bold text-sm rounded-full flex items-center px-6 py-3",children:"与 我 联 系"})]})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsx)(c,{}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"pt-24 bg border-x p-2 font-mono text-sm text-slate-300",children:"font-bold text-2xl md:text-3xl border-x p-2"})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("h2",{className:"font-bold text-2xl md:text-3xl border-x p-2 bg",children:"我曾负责开发过多个大型项目，这对我来说游刃有余。"})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"grid gap-2 sm:grid-cols-1 md:grid-cols-2 p-2 border-x bg-slate-100 dark:bg-slate-900",children:w.filter(e=>e.show).slice(0,4).map(e=>(0,a.jsxs)("a",{className:"bg flex flex-col items-start rounded-xl border p-6 md:p-8 transition-all hover:shadow-xl hover:shadow-klein-600/5 dark:hover:shadow-cyan-600/5",href:"/projects/"+e.id,children:[(0,a.jsx)("img",{src:e.logo[0],className:"h-10 mb-16 block dark:hidden"}),(0,a.jsx)("img",{src:e.logo[1],className:"h-10 mb-16 hidden dark:block"}),(0,a.jsx)("h5",{className:"text-xl font-bold mb-2",children:e.name}),(0,a.jsx)("div",{className:"flex gap-2 flex-wrap text-sm md:text-base text-klein-600 dark:text-cyan-600 mb-4",children:e.keywords.map(e=>(0,a.jsxs)("span",{children:["#",e]},e))}),(0,a.jsx)("p",{className:"text-sm md:text-base text-slate-400 mb-4",children:e.intro}),(0,a.jsxs)("div",{className:"flex items-center mt-auto",children:[e.techStack.map((e,s)=>(0,a.jsx)("div",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-950",style:{marginLeft:0==s?"-4px":"-8px",zIndex:10-s},children:(0,a.jsx)("img",{src:"/icon/"+e+".svg",className:"h-7/12 w-7/12"})},e)),(0,a.jsx)("div",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-950",style:{marginLeft:"-8px"},children:(0,a.jsx)(l.Z,{})})]})]},e.name))})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",id:"main-content",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"bg border-x p-2 flex gap-4",children:(0,a.jsxs)("a",{href:"/projects",className:"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 text-black dark:text-white transition-colors font-bold text-sm rounded-full flex items-center px-6 py-3 justify-center",children:["查 看 更 多",(0,a.jsx)(r.Z,{className:"ml-2"})]})})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsx)(o,{}),(0,a.jsx)(h,{}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"pt-24 bg border-x p-2 font-mono text-sm text-slate-300",children:"font-bold text-2xl md:text-3xl border-x p-2"})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("h2",{className:"font-bold text-2xl md:text-3xl border-x p-2 bg",children:"知识不应该被垄断，分享也是学习的一部分。"})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"border-b flex",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"space-y-2 border-x p-2 bg-slate-100 dark:bg-slate-900",children:f.slice(0,5).map(e=>(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("img",{src:"/avatar.png",className:"h-12 w-12 md:h-16 md:w-16 rounded-xl border"}),(0,a.jsxs)("div",{className:"bg flex-1 rounded-xl border p-6 transition-all hover:shadow-xl hover:shadow-klein-600/5 dark:hover:shadow-cyan-600/5",children:[(0,a.jsx)("a",{href:e.link,target:"_blank",className:"block text-xl md:text-2xl font-bold mb-4",children:e.title}),(0,a.jsx)("div",{className:"flex gap-2 flex-wrap text-sm md:text-base text-klein-600 dark:text-cyan-600 mb-6",children:e.keywords.map(e=>(0,a.jsxs)("span",{children:["#",e]},e))}),(0,a.jsx)("p",{className:"text-sm md:text-base text-slate-400 mb-4",children:e.abstract}),(0,a.jsxs)("a",{href:e.link,target:"_blank",className:"text-sm md:text-base text-klein-600 dark:text-cyan-600 flex items-center",children:[(0,a.jsx)("span",{children:" 阅读全文 "}),(0,a.jsx)(r.Z,{className:"ml-1"})]})]})]},e.title))})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]}),(0,a.jsxs)("div",{className:"flex",id:"main-content",children:[(0,a.jsx)("div",{className:"w-0 md:w-16 bg"}),(0,a.jsx)("div",{className:"w-4/5 flex-1 border-x px-6 md:px-12",children:(0,a.jsx)("div",{className:"bg border-x p-2 flex gap-4",children:(0,a.jsxs)("a",{href:"/post",className:"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 text-black dark:text-white transition-colors font-bold text-sm rounded-full flex items-center px-6 py-3 justify-center",children:["查 看 更 多",(0,a.jsx)(r.Z,{className:"ml-2"})]})})}),(0,a.jsx)("div",{className:"w-0 md:w-16 bg"})]})]})}},2083:function(e){"use strict";e.exports=JSON.parse('[{"title":"理解 JS 的垃圾回收机制","time":"2023/04/15","link":"https://juejin.cn/post/7267434484505788468","abstract":"垃圾回收（Garbage Collection）是一种内存管理机制，用于检测和清理不再被程序使用的内存。垃圾回收器会在 JS 引擎内部周期性地运行。了解垃圾回收机制的工作原理有助于我们写出更加高效的 JS 代码，使 JS 引擎更好的帮助我们完成垃圾回收，避免我们开发的应用出现内存泄漏问题。","keywords":["前端开发","性能优化","垃圾回收","JavaScript","原理","浏览器"]},{"title":"关于前端性能优化的一些实践","time":"2023/04/15","link":"https://www.jianshu.com/p/5a037af524f9","keywords":["前端开发","性能优化","Webpack","Vite","用户体验"],"abstract":"前端性能优化在现代 Web 开发中至关重要。它不仅可以显著提高用户体验，还可以影响到网站的搜索引擎排名、用户留存率和转化率。我在性能优化过程中总结了一些相关实践分享给大家。"},{"title":"将数组转换为树结构有几种方法","time":"2022/07/05","link":"https://www.jianshu.com/p/36c5e4b49ac9","keywords":["前端开发","数据类型","Array","JavaScript","数据结构"],"abstract":"将数组转换为树形结构常用于处理层次结构化的数据，如组织架构、目录结构等。这种操作可以更直观的展示数据，提高数据的可读性、可维护性，并支持更多的交互和功能。这在许多应用中都是非常有用的数据结构。"},{"title":"Iconfont 又打不开了，试试这 12 个开源免费的图标库","time":"2022/07/02","link":"https://www.jianshu.com/p/1eb5ee7936ca","keywords":["UI","前端","开源","图标库","设计"],"abstract":"可以说，iconfont 是我用的最多的图标库，虽然好用，但宕机问题频发，不过不用担心，我们还有很多其他选择。在这篇文章中，我将和大家分享我收藏的 12 个优秀的图标库，以备不时之需。"},{"title":"手写实现深拷贝","time":"2022/06/30","link":"https://www.jianshu.com/p/bc75be6218d9","keywords":["前端开发","数据类型"],"abstract":"在 JavaScript 中，深拷贝是一种常用的技术，用于创建一个新的对象，该对象与原始对象具有相同的属性和值，但它们是相互独立的。在这篇文章中，我们将探讨如何使用 JavaScript 手写实现深拷贝。"},{"title":"什么是 Web 3，为什么每个人都在讨论它？【译】","time":"2022/06/19","link":"https://juejin.cn/post/7110978747720794125","keywords":["Web3","区块链","去中心化","互联网演进","数字未来趋势"],"abstract":"Web 3 —— 也被称为 “Web 3.0” —— 一个你最近可能经常听到的词儿。它仅仅代表互联网的下一次迭代，其促进分布式协议（去中心化）旨在减少像 Youtube，Netflix 和 Amazon 这种科技巨头的依赖。但它到底是什么，为什么每个人都在关注它？\xa0"},{"title":"是时候用 PNPM 取代 NPM 了","time":"2022/04/10","link":"https://www.jianshu.com/p/e02ffa9effe6","keywords":["前端开发","PNPM","包管理工具","开发体验","Yarn","NPM"],"abstract":"随着前端开发复杂性的增加，包管理工具变得至关重要。本文将探讨为什么选择 PNPM，它的快速安装速度、磁盘空间效率和与 npm 的兼容性，为前端项目提供了无缝的依赖管理体验。"},{"title":"为什么 jfif 格式会被校验为 image/jpeg？","time":"2021/11/19","link":"https://juejin.cn/post/7032128054571106340","keywords":["前端开发","JFIF 格式","图像文件","文件格式"],"abstract":"为什么 JFIF 格式的图像文件会“错误地”校验为 image/jpeg，是 BUG 还是本身如此？这是我在开发过程遇到的一个小坑，这里记录一下，深入了解一下文件格式和校验机制。"},{"title":"理解 JS 事件循环机制","time":"2021/04/06","link":"https://www.jianshu.com/p/9d0902c1e6b1","keywords":["前端开发","JavaScript","事件循环","异步编程","回调函数"],"abstract":"JavaScript 的事件循环机制是 Web 开发中关键的概念，它赋予了语言强大的异步编程能力。本文将深入剖析这一机制，帮助读者更好地理解 JavaScript 中的事件处理、回调函数和异步任务。掌握事件循环是成为一名优秀的前端开发者的必备技能。"}]')},6306:function(e){"use strict";e.exports=JSON.parse('[{"show":true,"id":"api-sec","name":"API 安全平台","company":["麦当劳中国","上海国际港务集团","江苏国网电力"],"logo":["/icon/mcdonalds.png","/icon/mcdonalds-white.png"],"keywords":["数据安全","数据资产","后台管理"],"techStack":["Vite","Vue","Element-Plus","ECharts","Axios","Pinia","Sass"],"intro":"数据安全在信息时代尤为重要，APISEC 安全平台可以为客户系统的 API 进行全方位监测扫描，然后进行统计分析，将暴露的敏感数据、发生的异常行为，以及 API 的漏洞通过表格、图表等形式展示给用户，以便用户及时了解系统安全状况，并及时进行阻断和修复。该平台是数据资产安全防护的重要手段。","duty":["主导从 Webpack + Vue 2 到 Vite + Vue 3 的前端架构升级工作。","封装图表组件，实现所有页面图表尺寸自适应。","封装虚拟选择器组件，提高了团队开发效率，解决了数据量过大时页面的卡顿问题。","实现基于 Websocket 的实时告警推送功能。"],"img":["/project/10/1.png","/project/8/2.png","/project/8/3.png","/project/8/0.png"]},{"show":true,"id":"sph-wms","name":"WMS 仓库管理系统","company":["上海医药控股"],"logo":["/icon/sph.png","/icon/sph.png"],"keywords":["仓库管理","后台管理"],"techStack":["Vite","Vue","Element-UI","Axios","Pinia","Sass"],"intro":"上海医药控股在全国各地建有百余个仓库，该系统用于在线管理上海医药在全国各地的仓储业务，集成了仓库、仓间、仓位管理、出入库管理、物流管理等十余个模块，为上海医药提供高效的一站式仓库管理解决方案。","duty":["搭建基于 Vue 3 的前端配套开发架构。","设计并实现了基于服务端的权限管理系统，允许管理员对不同仓库下、角色下的用户分配不同的权限。","封装十余款通用业务组件，提高前端开发效率。","参与制定接口规范，从业务角度结合用户体验对操作流程进行梳理和优化。"],"img":["/project/8/1.png","/project/8/2.png","/project/8/3.png","/project/8/0.png"]},{"show":true,"id":"nwpu-data-assets-serve","name":"数据资产服务平台","company":["西北工业大学","景德镇陶瓷学院","北京理工大学"],"logo":["/icon/nwpu.png","/icon/nwpu.png"],"keywords":["数据资产","监控大屏"],"techStack":["webpack","Vue","Element-UI","echarts","Axios","Sass"],"intro":"数据资产是一个企业或组织的在数字时代的重要资产。西北工业大学数据资产服务平台会对西工大数据资产进行清晰、全面的梳理、归档和展示。通过图表和动态监控大屏，为学校提供全方位的数据监测和分析系统。","duty":["搭建基于 Vue 2 的前端配套开发架构。","负责整个项目的前端开发工作，包括页面绘制、组件封装和数据联调等。","跟进项目部署进度，积极响应关注现场反馈，保证产品稳定运行。"],"img":["/project/1/6.jpg","/project/1/2.jpg","/project/1/3.jpg","/project/1/4.jpg","/project/1/5.jpg"]},{"show":false,"id":"nwpu-data-assets-admin","name":"数据资产管理平台","company":["西北工业大学"],"logo":["/icon/nwpu.png","/icon/nwpu.png"],"keywords":["数据资产","后台管理","高校"],"techStack":["webpack","Vue","Element-UI","echarts","Axios","Sass"],"intro":"该项目主要用于高校数据资产的维护。管理平台用于数据管理，可以对数据进行增删改查等一系列操作，但拥有严格的权限控制。","duty":["负责整个项目的前端开发工作，包括页面绘制、组件封装和数据联调等。跟进项目部署进度，关注现场反馈，并及时响应以保证产品稳定运行。"],"img":["/project/1/6.jpg","/project/1/2.jpg","/project/1/3.jpg","/project/1/4.jpg","/project/1/5.jpg"]},{"show":true,"id":"nwpu-portal","name":"西北工业大学翱翔门户","company":["西北工业大学"],"logo":["/icon/nwpu.png","/icon/nwpu.png"],"keywords":["校园门户","Web","App"],"techStack":["webpack","Vue","uni-app","electron","Element-UI","Axios","Sass"],"intro":"翱翔门户是西北工业大学校园综合门户，为全校师生提供教学、科研、办公、学习和生活等各种相关服务，如考试安排、奖学金申请、教室预约、成绩查询等服务。","duty":["搭建基于 Vue 2 的前端配套开发架构。","搭建业务组件库。","基于 Electron 实现桌面端应用，提供校园新闻、日程安排等服务。"],"img":["/project/2/1.png","/project/2/2.png","/project/2/3.png","/project/2/4.png","/project/2/5.png"]},{"show":true,"id":"sensetime-ai","name":"AI 定义相机","company":["商汤科技"],"logo":["/icon/sensetime.png","/icon/sensetime-white.png"],"keywords":["人脸识别","监控视频","实时推送","安防"],"techStack":["webpack","Vue","typescript","Element-UI","Axios","Sass"],"intro":"该项目用于相机视频画面实时预览和实时推送功能。通过该 Web 可以对指定的实体进行实时跟踪，并将识别结果进行实时推送。","duty":["实现基于 OCX 的在线低延迟视频预览功能。","实现基于 Websocket 的实时推送功能。","基于 Canvas 实现目标区域绘制功能。"],"img":["/project/3/1.png","/project/3/2.png","/project/3/3.png","/project/3/4.png","/project/3/5.png"]},{"show":false,"id":"elite-robot","name":"艾利特机器人官网及官网后台","company":["苏州艾利特机器人"],"logo":["/icon/sensetime.png","/icon/sensetime-white.png"],"keywords":["官网","SSR"],"techStack":["webpack","nuxt","vant","Axios","Sass"],"intro":"该项目为苏州艾利特机器人有限公司官方网站，主要功能包括产品详情展示与对比，资料获取和视频教程等。项目采用响应式布局，确保在不同设备上的都具备友好的表现和可用性。并采用了 SSR 渲染技术，用于 SEO。","duty":["负责该项目的所有前端开发工作，包括绘制页面、接口集成以及性能、用户体验优化。优化用户体验，通过响应式布局和交互设计，确保系统在不同设备上的良好表现和可用性。"],"img":["/project/6/1.png","/project/6/2.png","/project/6/3.png","/project/6/4.png","/project/6/5.png","/project/6/6.png"]},{"show":false,"id":"zero-icon","name":"Zero Icon 开源图标库","company":[],"logo":["/icon/sensetime.png","/icon/sensetime-white.png"],"keywords":["组件库"],"techStack":["Vue","svg"],"intro":"Zero Icon 是一款面向设计师和开发人员的免费、开源可商用的图标库。不过由于开源社区的不断壮大，国内外诞生了许多优秀图标库，所以已停止维护。预览地址：https://reallimengzhe.github.io/zero-icon/","duty":["根据官方统计，停止维护前累计安装一千余次（由于个人精力有限和开源生态的不断丰富，该项目已不再维护）。","该项目由本人独立开发。主要工作包括图标的设计制作，组件的开发以及官网的维护等。"],"img":["/project/4/1.png","/project/4/2.png","/project/4/3.png"]}]')}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9648)}),_N_E=e.O()}]);