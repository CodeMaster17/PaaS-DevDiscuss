(()=>{var e={};e.id=6187,e.ids=[6187],e.modules={11185:e=>{"use strict";e.exports=require("mongoose")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},10467:e=>{"use strict";e.exports=require("next/dist/compiled/@vercel/og/index.node.js")},41790:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page-experimental.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},57147:e=>{"use strict";e.exports=require("fs")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},67792:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>u,routeModule:()=>m,tree:()=>d});var r=s(73137),i=s(54647),a=s(4183),o=s.n(a),n=s(71775),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let c=r.AppPageRouteModule,d=["",{children:["(root)",{children:["community",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,68508)),"/Users/harshityadav/Desktop/Code/dev-queue/app/(root)/community/page.tsx"]}]},{loading:[()=>Promise.resolve().then(s.bind(s,85899)),"/Users/harshityadav/Desktop/Code/dev-queue/app/(root)/community/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,6630)),"/Users/harshityadav/Desktop/Code/dev-queue/app/(root)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,83932)),"/Users/harshityadav/Desktop/Code/dev-queue/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/harshityadav/Desktop/Code/dev-queue/app/(root)/community/page.tsx"],p="/(root)/community/page",x={require:s,loadChunk:()=>Promise.resolve()},m=new c({definition:{kind:i.x.APP_PAGE,page:"/(root)/community/page",pathname:"/community",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},35303:()=>{},85899:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(48144),i=s(12105);s(53830);let __WEBPACK_DEFAULT_EXPORT__=()=>(0,r.jsxs)("section",{children:[r.jsx("h1",{className:"h1-bold text-dark100_light900",children:"All Users"}),(0,r.jsxs)("div",{className:"mb-12 mt-11 flex flex-wrap gap-5",children:[r.jsx(i.O,{className:"h-14 flex-1"}),r.jsx(i.O,{className:"h-14 w-28"})]}),r.jsx("div",{className:"flex flex-wrap gap-4",children:[1,2,3,4,5,6,7,8,9,10].map(e=>r.jsx(i.O,{className:"h-60 w-full rounded-2xl sm:w-[260px]"},e))})]})},68508:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f,metadata:()=>g});var r=s(48144),i=s(98976),a=s(75042),o=s.n(a),n=s(44602),l=s.n(n),c=s(40729),d=s(70753);let UserCard=async({user:e})=>{let t=await (0,i.getTopInteractedTags)({userId:e._id});return r.jsx(l(),{href:`/profile/${e.clerkId}`,className:"shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]",children:(0,r.jsxs)("article",{className:"background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8",children:[r.jsx(o(),{src:e.picture,alt:"user profile picture",width:100,height:100,className:"rounded-full"}),(0,r.jsxs)("div",{className:"mt-4 text-center",children:[r.jsx("h3",{className:"h3-bold text-dark200_light900 line-clamp-1",children:e.name}),(0,r.jsxs)("p",{className:"body-regular text-dark500_light500 mt-2",children:["@",e.username]})]}),r.jsx("div",{className:"mt-5",children:t.length>0?r.jsx("div",{className:"flex items-center gap-2",children:t.map(e=>r.jsx(d.Z,{_id:e._id,name:e.name},e._id))}):r.jsx(c.C,{children:"No tags yet"})})]})})};var u=s(76303),p=s(11156),x=s(70259),m=s(23228),h=s(60954);let g={title:"Community | Dev Overflow"},Page=async({searchParams:e})=>{let t=await (0,h.getAllUsers)({searchQuery:e.q,filter:e.filter,page:e.page?+e.page:1});return(0,r.jsxs)(r.Fragment,{children:[r.jsx("h1",{className:"h1-bold text-dark100_light900",children:"All Users"}),(0,r.jsxs)("div",{className:"mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center",children:[r.jsx(x.ZP,{route:"/community",iconPosition:"left",imgSrc:"/assets/icons/search.svg",placeholder:"Search for amazing minds",otherClasses:"flex-1"}),r.jsx(u.ZP,{filters:m.Uy,otherClasses:"min-h-[56px] sm:min-w-[170px]"})]}),r.jsx("section",{className:"mt-12 flex flex-wrap gap-4",children:t.users.length>0?t.users.map(e=>r.jsx(UserCard,{user:e},e._id)):(0,r.jsxs)("div",{className:"paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center",children:[r.jsx("p",{children:"No users yet"}),r.jsx(l(),{href:"/sign-up",className:"mt-2 font-bold text-accent-blue",children:"Join to be the first!"})]})}),r.jsx("div",{className:"mt-10",children:r.jsx(p.ZP,{pageNumber:e?.page?+e.page:1,isNext:t.isNext})})]})},f=Page}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[9922,9859,9510,1209,6466,3640,70,416,4944,9614,5984,954,7505,7843,610,6556,8874],()=>__webpack_exec__(67792));module.exports=s})();