"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[692],{5680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>u});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=p(a),g=n,u=y["".concat(c,".").concat(g)]||y[g]||m[g]||l;return a?r.createElement(u,i(i({ref:t},s),{},{components:a})):r.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[y]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5335:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(8168),n=(a(6540),a(5680));const l={id:"watcher",title:"Watcher",sidebar_label:"Watcher",sidebar_position:3},i=void 0,o={unversionedId:"references/watcher",id:"references/watcher",title:"Watcher",description:"It allows you to observe a STORE.",source:"@site/docs/10-references/3-watcher.md",sourceDirName:"10-references",slug:"/references/watcher",permalink:"/jon-doc/docs/references/watcher",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"watcher",title:"Watcher",sidebar_label:"Watcher",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Store",permalink:"/jon-doc/docs/references/store"},next:{title:"Tips",permalink:"/jon-doc/docs/tips"}},c={},p=[{value:"addWatch",id:"addwatch",level:2},{value:"removeWatch",id:"removewatch",level:2},{value:"Watcher",id:"watcher",level:2},{value:"WatchMsg",id:"watchmsg",level:2}],s={toc:p},y="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(y,(0,r.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"It allows you to observe a STORE.",(0,n.yg)("br",{parentName:"p"}),"\n","You can intercept when the STORE performs an ",(0,n.yg)("inlineCode",{parentName:"p"},"action")," or a ",(0,n.yg)("inlineCode",{parentName:"p"},"mutator"),". "),(0,n.yg)("h2",{id:"addwatch"},"addWatch"),(0,n.yg)("p",null,"Inserts a WATCHER into JON"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"addWatch( watcher:Watcher )\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#watcher"},"watcher"),"  ")),(0,n.yg)("h2",{id:"removewatch"},"removeWatch"),(0,n.yg)("p",null,"Removes a listener from JON",(0,n.yg)("br",{parentName:"p"}),"\n","if ",(0,n.yg)("inlineCode",{parentName:"p"},"actionName")," is ",(0,n.yg)("inlineCode",{parentName:"p"},"null")," delete all listener of STORE",(0,n.yg)("br",{parentName:"p"}),"\n","if ",(0,n.yg)("inlineCode",{parentName:"p"},"callback")," is ",(0,n.yg)("inlineCode",{parentName:"p"},"null")," delete all listener of ",(0,n.yg)("inlineCode",{parentName:"p"},"actionName"),"  "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"removeWatch( watcher:Watcher )\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#watcher"},"watcher"),"  ")),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"watcher"},"Watcher"),(0,n.yg)("p",null,"Identifies a ",(0,n.yg)("inlineCode",{parentName:"p"},"callback")," called when a specific STORE ",(0,n.yg)("inlineCode",{parentName:"p"},"action/mutator")," is executed  "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"interface Watcher {\n    store: Store,\n    actionName: string,\n    callback: WatchCallback,\n}\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"store",(0,n.yg)("br",{parentName:"li"}),"STORE instance to be observed"),(0,n.yg)("li",{parentName:"ul"},"actionName",(0,n.yg)("br",{parentName:"li"}),"name of the 'action' or 'mutator' to be observed"),(0,n.yg)("li",{parentName:"ul"},"callback",(0,n.yg)("br",{parentName:"li"}),"Function executed when 'action' or 'mutator' are called\n",(0,n.yg)("inlineCode",{parentName:"li"},"(msg: WatchMsg) => void"))),(0,n.yg)("h2",{id:"watchmsg"},"WatchMsg"),(0,n.yg)("p",null,"Data of an event that occurred in a STORE. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"interface WatchMsg {\n    type: EVENTS_TYPES,\n    store: Store,\n    key: string,\n    payload: any,\n    result: any,\n    subcall: boolean\n}\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"type"),(0,n.yg)("br",{parentName:"li"}),"Type of event, may be: ",(0,n.yg)("inlineCode",{parentName:"li"},"mutator"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"action")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"store"),(0,n.yg)("br",{parentName:"li"}),"STORE instance that generated this event"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"key"),(0,n.yg)("br",{parentName:"li"}),"Name of the ",(0,n.yg)("inlineCode",{parentName:"li"},"action")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"mutator")," that generated this event"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"payload"),(0,n.yg)("br",{parentName:"li"}),"Parameters sent to the ",(0,n.yg)("inlineCode",{parentName:"li"},"action")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"mutator")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"result"),(0,n.yg)("br",{parentName:"li"}),"Value returned by ",(0,n.yg)("inlineCode",{parentName:"li"},"action")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"subcall"),(0,n.yg)("br",{parentName:"li"}),(0,n.yg)("inlineCode",{parentName:"li"},"true")," if it is a call from another ",(0,n.yg)("inlineCode",{parentName:"li"},"action"))))}m.isMDXComponent=!0}}]);