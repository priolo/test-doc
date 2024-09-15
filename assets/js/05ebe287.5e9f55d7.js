"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[521],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||y[d]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const o={title:"Why",sidebar_label:"Why",sidebar_position:1},s=void 0,i={unversionedId:"why",id:"why",title:"Why",description:"Yet another React library! Don't you programmers have anything better to do?",source:"@site/docs/1-why.md",sourceDirName:".",slug:"/why",permalink:"/jon-doc/docs/why",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Why",sidebar_label:"Why",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quick start",permalink:"/jon-doc/docs/quick-start"}},l={},u=[{value:"It is minimalist",id:"it-is-minimalist",level:2},{value:"Syntax stolen from VUEX",id:"syntax-stolen-from-vuex",level:2}],c={toc:u},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Yet another React library! Don't you programmers have anything better to do?")),(0,a.yg)("p",null,"We need to ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Separation_of_concerns"},"separate the concerns"),"!\nIn react you usually use the ",(0,a.yg)("a",{parentName:"p",href:"https://refactoring.guru/design-patterns/state"},"STATE PATTERN"),(0,a.yg)("br",{parentName:"p"}),"\n","There are many tools to do this:  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://redux-toolkit.js.org/"},"redux-toolkit")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.pmnd.rs/zustand/getting-started/introduction"},"zustand")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://hookstate.js.org/"},"hookstate")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://recoiljs.org/"},"recoil"))),(0,a.yg)("p",null,"and they are fantastic libraries with their pros and cons."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"And why should I use your ",(0,a.yg)("inlineCode",{parentName:"p"},"Jon"),"?")),(0,a.yg)("p",null,"You may not use it, I just made it available.",(0,a.yg)("br",{parentName:"p"}),"\n","However, there are at least two reasons, in my opinion, for choosing it:  "),(0,a.yg)("h2",{id:"it-is-minimalist"},"It is minimalist"),(0,a.yg)("p",null,"You can put the code directly into your project: it's just a ",(0,a.yg)("inlineCode",{parentName:"p"},"jon_juice.js")," file",(0,a.yg)("br",{parentName:"p"}),"\n","and everything will work perfectly (except the ",(0,a.yg)("inlineCode",{parentName:"p"},"watcher")," ...whatever)",(0,a.yg)("br",{parentName:"p"}),"\n","without using any dependencies in ",(0,a.yg)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="jon_juice.js"',title:'"jon_juice.js"'},'import { useEffect, useState, useSyncExternalStore, version } from \'react\'\n\n// HOOK to use the STORE \nfunction useStore18(store) {\n    return useSyncExternalStore(store._subscribe, () => store.state)\n}\nfunction useStore17(store) {\n    const [state, setState] = useState(store.state)\n    useEffect(() => store._subscribe(setState), [store])\n    return state\n}\nexport const useStore = version.slice(0,2)=="17" ? useStore17 : useStore18\n\nexport function createStore(setup, name) {\n\n    let store = {\n        // the current state of the store\n        state: setup.state,\n        // the listeners that are watching the store\n        _listeners: new Set(),\n        // add listener to the store\n        _subscribe: (listener) => {\n            store._listeners.add(listener)\n            return () => store._listeners.delete(listener)\n        },\n    }\n\n    // GETTERS\n    if (setup.getters) {\n        store = Object.keys(setup.getters).reduce((acc, key) => {\n            acc[key] = (payload) => setup.getters[key](payload, store)\n            return acc\n        }, store)\n    }\n\n    // ACTIONS\n    if (setup.actions) {\n        store = Object.keys(setup.actions).reduce((acc, key) => {\n            acc[key] = async (payload) => await setup.actions[key](payload, store)\n            return acc\n        }, store)\n    }\n\n    // MUTATORS\n    if (setup.mutators) {\n        store = Object.keys(setup.mutators).reduce((acc, key) => {\n            acc[key] = payload => {\n                const stub = setup.mutators[key](payload, store)\n                // if the "mutator" returns "undefined" then I do nothing\n                if (stub === undefined) return\n                // to optimize check if there is any change\n                if (Object.keys(stub).every(key => stub[key] === store.state[key])) return\n                store.state = { ...store.state, ...stub }\n                store._listeners.forEach(listener => listener(store.state))\n            }\n            return acc\n        }, store)\n    }\n\n    return store\n}\n')),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://codesandbox.io/s/2-jon-juice-jri7kj"},"codesandbox")),(0,a.yg)("h2",{id:"syntax-stolen-from-vuex"},"Syntax stolen from VUEX"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Jon")," owes a lot to ",(0,a.yg)("a",{parentName:"p",href:"https://vuex.vuejs.org/"},"Vuex"),(0,a.yg)("br",{parentName:"p"}),"\n","in my opinion, one of the best frameworks for STORE management:",(0,a.yg)("br",{parentName:"p"}),"\n","it has a syntax that is easy to use and clear.",(0,a.yg)("br",{parentName:"p"}),"\n","... and for this ",(0,a.yg)("inlineCode",{parentName:"p"},"Jon")," will be grateful to ",(0,a.yg)("inlineCode",{parentName:"p"},"VUEX")," forever!"))}y.isMDXComponent=!0}}]);