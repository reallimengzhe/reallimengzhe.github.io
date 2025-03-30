"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[275],{7275:function(e,s,i){i.r(s),i.d(s,{default:function(){return f}});var r=i(3119),t=i(9493),o=i(1957),n=i(6241),a=i(3999),l=i(5265),c=i(6617);let p={server:{primary:"#0033cc",secondary:"#3366ff",emissive:"#66ccff",opacity:.5},router:{primary:"#008899",secondary:"#00ddff",emissive:"#00ffff",opacity:.5},firewall:{primary:"#334455",secondary:"#667788",emissive:"#99bbdd",opacity:.5},switch:{primary:"#10b981",secondary:"#34d399",emissive:"#6ee7b7",opacity:.5},loadBalancer:{primary:"#7c3aed",secondary:"#8b5cf6",emissive:"#a78bfa",opacity:.5}};function m(e){let{position:s}=e;return(0,r.jsxs)("group",{position:s,children:[(0,r.jsxs)("mesh",{position:[0,0,0],children:[(0,r.jsx)("boxGeometry",{args:[1.2,2,.8]}),(0,r.jsx)("meshPhongMaterial",{color:p.server.primary,emissive:p.server.emissive,emissiveIntensity:.5,opacity:p.server.opacity,transparent:!0})]}),(0,r.jsxs)("mesh",{position:[0,0,0],children:[(0,r.jsx)("boxGeometry",{args:[1.3,2.2,1]}),(0,r.jsx)("meshPhongMaterial",{color:p.server.secondary,emissive:p.server.emissive,emissiveIntensity:.3,opacity:.8*p.server.opacity,transparent:!0})]}),(0,r.jsxs)("mesh",{position:[0,-1.2,0],children:[(0,r.jsx)("boxGeometry",{args:[1.2,.2,.8]}),(0,r.jsx)("meshPhongMaterial",{color:p.server.primary,emissive:p.server.emissive,emissiveIntensity:.8})]})]})}function y(e){let{position:s}=e;return(0,r.jsxs)("group",{position:s,children:[(0,r.jsxs)("mesh",{position:[0,0,0],children:[(0,r.jsx)("boxGeometry",{args:[3.2,2,.8]}),(0,r.jsx)("meshPhongMaterial",{color:p.switch.primary,emissive:p.switch.emissive,emissiveIntensity:.5,opacity:p.switch.opacity,transparent:!0})]}),(0,r.jsxs)("mesh",{position:[0,0,0],children:[(0,r.jsx)("boxGeometry",{args:[3.5,2.2,1]}),(0,r.jsx)("meshPhongMaterial",{color:p.switch.secondary,emissive:p.switch.emissive,emissiveIntensity:.3,opacity:.8*p.switch.opacity,transparent:!0})]}),(0,r.jsxs)("mesh",{position:[0,-1.2,0],children:[(0,r.jsx)("boxGeometry",{args:[3.2,.2,.8]}),(0,r.jsx)("meshPhongMaterial",{color:p.switch.primary,emissive:p.switch.emissive,emissiveIntensity:.8})]})]})}function h(e){let{position:s}=e;return(0,r.jsxs)("group",{position:s,children:[(0,r.jsxs)("mesh",{position:[0,.6,0],children:[(0,r.jsx)("boxGeometry",{args:[10.2,3,.8]}),(0,r.jsx)("meshPhongMaterial",{color:p.loadBalancer.primary,emissive:p.loadBalancer.emissive,emissiveIntensity:.5,opacity:p.loadBalancer.opacity,transparent:!0})]}),(0,r.jsxs)("mesh",{position:[0,.6,0],children:[(0,r.jsx)("boxGeometry",{args:[10.5,3.2,1]}),(0,r.jsx)("meshPhongMaterial",{color:p.loadBalancer.secondary,emissive:p.loadBalancer.emissive,emissiveIntensity:.3,opacity:.8*p.loadBalancer.opacity,transparent:!0})]}),(0,r.jsxs)("mesh",{position:[0,-1.2,0],children:[(0,r.jsx)("boxGeometry",{args:[10.2,.2,.8]}),(0,r.jsx)("meshPhongMaterial",{color:p.loadBalancer.primary,emissive:p.loadBalancer.emissive,emissiveIntensity:.8})]})]})}let x=(0,t.forwardRef)((e,s)=>{let{position:i,messageType:t}=e,o=(()=>{switch(t){case"error":return{primary:"#dc2626",secondary:"#ef4444",emissive:"#f87171"};case"warning":return{primary:"#fbbf24",secondary:"#fcd34d",emissive:"#fde68a"};case"success":return{primary:"#006644",secondary:"#00cc88",emissive:"#00ffaa"};case"info":return{primary:"#334455",secondary:"#667788",emissive:"#99bbdd"};default:return p.firewall}})(),n=o.primary;return(0,r.jsxs)("group",{position:i,children:[(0,r.jsxs)("mesh",{castShadow:!0,receiveShadow:!0,children:[(0,r.jsx)("boxGeometry",{args:[3.4,2,1]}),(0,r.jsx)("meshPhongMaterial",{color:n,emissive:o.emissive,emissiveIntensity:.6,opacity:p.firewall.opacity,transparent:!0})]}),(0,r.jsxs)("mesh",{castShadow:!0,receiveShadow:!0,children:[(0,r.jsx)("boxGeometry",{args:[3.6,2.2,1.2]}),(0,r.jsx)("meshPhongMaterial",{color:o.secondary,emissive:o.emissive,emissiveIntensity:.4,opacity:.8*p.firewall.opacity,transparent:!0})]}),(0,r.jsxs)("mesh",{position:[0,-1.2,0],children:[(0,r.jsx)("boxGeometry",{args:[3.4,.2,1]}),(0,r.jsx)("meshPhongMaterial",{color:p.firewall.primary,emissive:p.firewall.emissive,emissiveIntensity:.8})]})]})});function d(e){let{position:s}=e;return(0,r.jsxs)("group",{position:s,children:[(0,r.jsxs)("mesh",{children:[(0,r.jsx)("boxGeometry",{args:[1.3,1,1.3]}),(0,r.jsx)("meshPhongMaterial",{color:p.router.primary,emissive:p.router.emissive,emissiveIntensity:.6,opacity:p.router.opacity,transparent:!0})]}),(0,r.jsxs)("mesh",{children:[(0,r.jsx)("boxGeometry",{args:[1.5,1.3,1.5]}),(0,r.jsx)("meshPhongMaterial",{color:p.router.secondary,emissive:p.router.emissive,emissiveIntensity:.4,opacity:.8*p.router.opacity,transparent:!0})]}),(0,r.jsxs)("mesh",{position:[0,-1.2,0],children:[(0,r.jsx)("boxGeometry",{args:[1.3,.2,1.3]}),(0,r.jsx)("meshPhongMaterial",{color:p.router.primary,emissive:p.router.emissive,emissiveIntensity:.8})]})]})}function v(e){let{position:s}=e;return(0,r.jsx)("group",{position:s,children:(0,r.jsxs)("mesh",{children:[(0,r.jsx)("boxGeometry",{args:[3,3,1]}),(0,r.jsx)("meshBasicMaterial",{color:"#FFFFFF",opacity:.2,transparent:!0})]})})}function u(e){let{start:s,end:i}=e,n=(0,t.useRef)([0,1,2].map(()=>(0,t.useRef)(null))),a=(0,t.useMemo)(()=>{let e=new o.Vector3(...s),r=new o.Vector3(...i),t=Math.abs(r.z-e.z)>Math.abs(r.x-e.x),n=[e];return t?n.push(new o.Vector3(e.x,e.y,r.z)):n.push(new o.Vector3(r.x,e.y,e.z)),n.push(r),new o.CatmullRomCurve3(n,!1,"centripetal",0)},[s,i]);return(0,l.F)(e=>{let{clock:s}=e;n.current.forEach((e,i)=>{if(e.current){let r=(.3*s.getElapsedTime()+.33*i)%1,t=a.getPoint(r);e.current.position.copy(t)}})}),(0,r.jsxs)("group",{children:[(0,r.jsxs)("mesh",{children:[(0,r.jsx)("tubeGeometry",{args:[a,50,.02,8,!1]}),(0,r.jsx)("meshBasicMaterial",{color:"#FFFFFF",opacity:"0.2",transparent:!0})]}),n.current.map((e,s)=>(0,r.jsxs)("mesh",{ref:n.current[s],children:[(0,r.jsx)("sphereGeometry",{args:[.05]}),(0,r.jsx)("meshBasicMaterial",{color:"#4AFFFF"})]},s))]})}function j(e){let{messageType:s}=e,i=(0,t.useRef)([null,null,null]),c=[{type:"external",position:[-6,0,-60]},{type:"external",position:[0,0,-60]},{type:"external",position:[6,0,-60]},{type:"router",position:[-6,0,-12]},{type:"router",position:[0,0,-12]},{type:"router",position:[6,0,-12]},{type:"firewall",position:[-6,0,-8]},{type:"firewall",position:[0,0,-8]},{type:"firewall",position:[6,0,-8]},{type:"loadBalancer",position:[0,0,0]},{type:"switch",position:[-3,0,4]},{type:"switch",position:[3,0,4]},{type:"server",position:[-6,0,9]},{type:"server",position:[-2,0,9]},{type:"server",position:[2,0,9]},{type:"server",position:[6,0,9]},{type:"server",position:[-6,0,11]},{type:"server",position:[-2,0,11]},{type:"server",position:[2,0,11]},{type:"server",position:[6,0,11]},{type:"server",position:[-6,0,13]},{type:"server",position:[-2,0,13]},{type:"server",position:[2,0,13]},{type:"server",position:[6,0,13]},{type:"server",position:[-6,0,15]},{type:"server",position:[-2,0,15]},{type:"server",position:[2,0,15]},{type:"server",position:[6,0,15]}],p={external:v,server:m,router:d,firewall:x,switch:y,loadBalancer:h},{camera:j}=(0,l.D)(),f=(0,t.useMemo)(()=>new o.Vector3(0,0,0),[]);return(0,t.useEffect)(()=>{j&&j.lookAt(f)},[j,f]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("lineSegments",{position:[-4,.6,12],children:[(0,r.jsx)("edgesGeometry",{args:[new o.BoxGeometry(7.2,4.2,8.2)]}),(0,r.jsx)("lineBasicMaterial",{color:"#4AFFFF",opacity:.8,transparent:!0})]}),(0,r.jsxs)("lineSegments",{position:[4,.6,12],children:[(0,r.jsx)("edgesGeometry",{args:[new o.BoxGeometry(7.2,4.2,8.2)]}),(0,r.jsx)("lineBasicMaterial",{color:"#4AFFFF",opacity:.8,transparent:!0})]}),(0,r.jsxs)("lineSegments",{position:[0,.6,2],children:[(0,r.jsx)("edgesGeometry",{args:[new o.BoxGeometry(12,4.2,8)]}),(0,r.jsx)("lineBasicMaterial",{color:"#4AFFFF",opacity:.8,transparent:!0})]}),(0,r.jsxs)("lineSegments",{position:[0,.6,-10],children:[(0,r.jsx)("edgesGeometry",{args:[new o.BoxGeometry(15,4.2,10)]}),(0,r.jsx)("lineBasicMaterial",{color:"#4AFFFF",opacity:.8,transparent:!0})]}),(0,r.jsxs)("group",{children:[c.map((e,t)=>{let o=p[e.type];if("firewall"===e.type){let n=t-6;return(0,r.jsx)(o,{ref:e=>i.current[n]=e,position:e.position,emissiveIntensity:2.5,messageType:s,index:n},t)}return(0,r.jsx)(o,{position:e.position,emissiveIntensity:2.5,messageType:s},t)}),[[0,3],[1,4],[2,5],[3,6],[4,7],[5,8],[3,7],[4,6],[4,8],[5,7],[6,9],[7,9],[8,9],[9,10],[9,11],[10,12],[10,13],[11,14],[11,15],[10,16],[10,17],[11,18],[11,19],[10,20],[10,21],[11,22],[11,23],[10,24],[10,25],[11,26],[11,27],[10,11]].map((e,i)=>{let[t,o]=e;return(0,r.jsx)(u,{start:c[t].position,end:c[o].position,messageType:s,startIdx:t,endIdx:o},i)})]}),(0,r.jsx)(n.z,{enableZoom:!1,enablePan:!1,enableRotate:!0,target:f}),(0,r.jsx)(a.c,{makeDefault:!0,position:[30,30,20],fov:24,up:[0,1,0]})]})}function f(e){let{messageType:s="info",className:i}=e;return(0,r.jsxs)("div",{className:"relative overflow-hidden ".concat(i),children:[(0,r.jsx)("div",{className:"absolute w-full h-full opacity-40 dark:opacity-5",style:{backgroundImage:"linear-gradient(120deg, color(display-p3 0.831 0.87 1), color(display-p3 0.975 0.866 0.904))"}}),(0,r.jsx)(c.Xz,{shadows:"soft",dpr:window.devicePixelRatio,gl:{antialias:!0,alpha:!0,shadowMap:{type:o.PCFSoftShadowMap}},children:(0,r.jsx)(t.Suspense,{fallback:null,children:(0,r.jsx)(j,{messageType:s})})})]})}}}]);