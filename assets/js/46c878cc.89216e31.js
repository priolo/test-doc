"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(y,s(s({ref:t},l),{},{components:n})):r.createElement(y,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Why",sidebar_label:"Why",sidebar_position:2},s=void 0,i={unversionedId:"why",id:"why",title:"Why",description:"Yet another React library! Don't you programmers have anything better to do? Alcohol? Drugs?",source:"@site/docs/2-why.md",sourceDirName:".",slug:"/why",permalink:"/jon-doc/docs/why",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Why",sidebar_label:"Why",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/jon-doc/docs/quick-start"},next:{title:"Store Setup",permalink:"/jon-doc/docs/store-setup"}},u={},c=[{value:"It is minimalist",id:"it-is-minimalist",level:2},{value:"Syntax stolen from VUEX",id:"syntax-stolen-from-vuex",level:2}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Yet another React library! Don't you programmers have anything better to do? Alcohol? Drugs?")),(0,a.kt)("p",null,"React does NOT manage the LOGIC of a project but only the VIEW",(0,a.kt)("br",{parentName:"p"}),"\n","I have seen too many nightmare projects with code encrusted in components!",(0,a.kt)("br",{parentName:"p"}),"\n","We need to ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Separation_of_concerns"},"separate the concerns"),"!\nIn react you usually use the ",(0,a.kt)("a",{parentName:"p",href:"https://refactoring.guru/design-patterns/state"},"STATE PATTERN"),(0,a.kt)("br",{parentName:"p"}),"\n","There are many tools to do this:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/"},"redux-toolkit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.pmnd.rs/zustand/getting-started/introduction"},"zustand")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hookstate.js.org/"},"hookstate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://recoiljs.org/"},"recoil"))),(0,a.kt)("p",null,"and they are fantastic libraries with their pros and cons."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"And why should I use your ",(0,a.kt)("inlineCode",{parentName:"p"},"Jon"),"? Because you are handsome?")),(0,a.kt)("p",null,"And don't get irritated!!! ... you may not use it, I just made it available.",(0,a.kt)("br",{parentName:"p"}),"\n","However, there are at least two reasons, in my opinion, for choosing it:  "),(0,a.kt)("h2",{id:"it-is-minimalist"},"It is minimalist"),(0,a.kt)("p",null,"You can put the code directly into your project: it's just a ",(0,a.kt)("inlineCode",{parentName:"p"},"jon_juice.js")," file",(0,a.kt)("br",{parentName:"p"}),"\n","and everything will work perfectly (except the ",(0,a.kt)("inlineCode",{parentName:"p"},"watcher")," ...whatever)",(0,a.kt)("br",{parentName:"p"}),"\n","without using any dependencies in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="jon_juice.js"',title:'"jon_juice.js"'},'import { useEffect, useState, useSyncExternalStore, version } from \'react\'\n\n// HOOK to use the STORE \nfunction useStore18(store) {\n    return useSyncExternalStore(store._subscribe, () => store.state)\n}\nfunction useStore17(store) {\n    const [state, setState] = useState(store.state)\n    useEffect(() => {\n        const listener = (s) => setState(s)\n        const unsubscribe = store._subscribe(listener)\n        return unsubscribe\n    }, [store])\n    return state\n\n}\nexport const useStore = version.slice(0,2)==="17" ? useStore17 : useStore18\n\nexport function createStore(setup, name) {\n\n    let store = {\n\n        // the current state of the store\n        state: setup.state,\n\n        // the listeners that are watching the store\n        _listeners: new Set(),\n\n        // add listener to the store\n        _subscribe: (listener) => {\n            store._listeners.add(listener)\n            return () => store._listeners.delete(listener)\n        },\n    }\n\n    // GETTERS\n    if (setup.getters) {\n        store = Object.keys(setup.getters).reduce((acc, key) => {\n            acc[key] = (payload) => setup.getters[key](payload, store)\n            return acc\n        }, store)\n    }\n\n    // ACTIONS\n    if (setup.actions) {\n        store = Object.keys(setup.actions).reduce((acc, key) => {\n            acc[key] = async (payload) => await setup.actions[key](payload, store)\n            return acc\n        }, store)\n    }\n\n    // MUTATORS\n    if (setup.mutators) {\n        store = Object.keys(setup.mutators).reduce((acc, key) => {\n            acc[key] = payload => {\n                const stub = setup.mutators[key](payload, store)\n                // if the "mutator" returns "undefined" then I do nothing\n                if (stub === undefined) return\n                // to optimize check if there is any change\n                if (Object.keys(stub).every(key => stub[key] === store.state[key])) return\n                store.state = { ...store.state, ...stub }\n                store._listeners.forEach(listener => listener(store.state))\n            }\n            return acc\n        }, store)\n    }\n\n    return store\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/2-jon-juice-jri7kj"},"codesandbox")),(0,a.kt)("h2",{id:"syntax-stolen-from-vuex"},"Syntax stolen from VUEX"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Jon")," owes a lot to ",(0,a.kt)("a",{parentName:"p",href:"https://vuex.vuejs.org/"},"Vuex"),(0,a.kt)("br",{parentName:"p"}),"\n","in my opinion, one of the best frameworks for STORE management:",(0,a.kt)("br",{parentName:"p"}),"\n","it has a syntax that is easy to use and clear.",(0,a.kt)("br",{parentName:"p"}),"\n","... and for this ",(0,a.kt)("inlineCode",{parentName:"p"},"Jon")," will be grateful to ",(0,a.kt)("inlineCode",{parentName:"p"},"VUEX")," forever!"))}p.isMDXComponent=!0}}]);