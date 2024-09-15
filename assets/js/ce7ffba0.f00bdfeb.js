"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[467],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var i=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",I={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),v=n,d=p["".concat(s,".").concat(v)]||p[v]||I[v]||a;return r?i.createElement(d,o(o({ref:t},u),{},{components:r})):i.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}v.displayName="MDXCreateElement"},6890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>I,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=r(8168),n=(r(6540),r(5680));const a={id:"store",title:"Store",sidebar_label:"Store",sidebar_position:4},o=void 0,l={unversionedId:"store",id:"store",title:"Store",description:"CREATE STORE",source:"@site/docs/4-store.md",sourceDirName:".",slug:"/store",permalink:"/jon-doc/docs/store",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"store",title:"Store",sidebar_label:"Store",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Store Setup",permalink:"/jon-doc/docs/store-setup"},next:{title:"Examples",permalink:"/jon-doc/docs/examples"}},s={},c=[{value:"CREATE STORE",id:"create-store",level:2},{value:"REACT-COMPONENTS",id:"react-components",level:2}],u={toc:c},p="wrapper";function I(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,i.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"create-store"},"CREATE STORE"),(0,n.yg)("p",null,"Use the STORE-SETUP as a TEMPLATE to create a STORE instance\nand export the STORE instance"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="stores/myStore.js"',title:'"stores/myStore.js"'},'import { createStore } from "@priolo/jon"\n\nconst mySetup = { \n    // this will be cloned during the creation of the STORE\n    state: {\n        value: ""\n    },\n    getters: {\n        getUppercase: (_, {state}) => state.value.toUpperCase()\n    },\n    mutator: {\n        setValue: value => ({value})\n    }\n }\n\nconst store = createStore(mySetup)\nexport default store\n')),(0,n.yg)("h2",{id:"react-components"},"REACT-COMPONENTS"),(0,n.yg)("p",null,"In the VIEW, calling ",(0,n.yg)("inlineCode",{parentName:"p"},"useStore"),",",(0,n.yg)("br",{parentName:"p"}),"\n","the COMPONENT (VIEW) listens for changes to the STATE.",(0,n.yg)("br",{parentName:"p"}),"\n","So when the STATE is changed, the COMPONENTS using that STORE are also updated."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.jsx"',title:'"App.jsx"'},'import { useStore } from "@priolo/jon"\nimport myStore from "stores/myStore"\n\nexport default function App() {\n\n    const state = useStore(myStore)\n    const { setValue, getUppercase } = myStore\n\n    return (<div>\n        <h1>{state.value}</h1><h2>{getUppercase()}</h2>\n        <input \n            value={state.value} \n            onChange={(e)=>setValue(e.target.value)} \n        />\n    </div>)\n}\n')),(0,n.yg)("p",null,"So the mechanism is simple:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The store maintains the state  "),(0,n.yg)("li",{parentName:"ul"},"If it is modified it ONLY updates the React components that have registered  ")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"schema 1",src:r(1903).A,width:"348",height:"224"})))}I.isMDXComponent=!0},1903:(e,t,r)=>{r.d(t,{A:()=>i});const i="data:image/png;base64,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"}}]);