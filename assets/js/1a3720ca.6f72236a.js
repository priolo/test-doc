"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={slug:"usesyncexternalstore",title:"A good reason to use React18: useSyncExternalStore",authors:{name:"Priolo",title:"Jon maintainer",url:"https://github.com/priolo",image_url:"https://github.com/priolo.png"},tags:["React18","hook","useSyncExternalStore"]},s=void 0,l={permalink:"/jon-doc/blog/usesyncexternalstore",source:"@site/blog/2022-10-07-usesyncexternalstore.md",title:"A good reason to use React18: useSyncExternalStore",description:"Let's consider a simple ToDo",date:"2022-10-07T00:00:00.000Z",formattedDate:"October 7, 2022",tags:[{label:"React18",permalink:"/jon-doc/blog/tags/react-18"},{label:"hook",permalink:"/jon-doc/blog/tags/hook"},{label:"useSyncExternalStore",permalink:"/jon-doc/blog/tags/use-sync-external-store"}],readingTime:2.87,hasTruncateMarker:!1,authors:[{name:"Priolo",title:"Jon maintainer",url:"https://github.com/priolo",image_url:"https://github.com/priolo.png",imageURL:"https://github.com/priolo.png"}],frontMatter:{slug:"usesyncexternalstore",title:"A good reason to use React18: useSyncExternalStore",authors:{name:"Priolo",title:"Jon maintainer",url:"https://github.com/priolo",image_url:"https://github.com/priolo.png",imageURL:"https://github.com/priolo.png"},tags:["React18","hook","useSyncExternalStore"]}},i={authorsImageUrls:[void 0]},c=[{value:"Let&#39;s create a STORE",id:"lets-create-a-store",level:3},{value:"Enter the STATE",id:"enter-the-state",level:3},{value:"Enter the MUTATORS",id:"enter-the-mutators",level:3},{value:"Let&#39;s add the ACTIONS",id:"lets-add-the-actions",level:3},{value:"Let&#39;s update the VIEW",id:"lets-update-the-view",level:3},{value:"Jon",id:"jon",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's consider a simple ToDo",(0,a.kt)("br",{parentName:"p"}),"\n","This is what your colleague left you as a gift \ud83d\udca9 before going on holiday:  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/to-do-vanilla-wgdgfg?file=/src/index.js"},"codesandbox")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," there is a mess of functions within components passed between components that call other functions.",(0,a.kt)("br",{parentName:"p"}),"\n","And if it were a real project it would be MUCH MUCH worse",(0,a.kt)("br",{parentName:"p"}),"\n","because the COMPONENT TREE is ",(0,a.kt)("strong",{parentName:"p"},"deeper"),(0,a.kt)("br",{parentName:"p"}),"\n","and the nesting of COMPONENTs multiplies the complexity! "),(0,a.kt)("h3",{id:"lets-create-a-store"},"Let's create a STORE"),(0,a.kt)("p",null,"Let us try to extrapolate the LOGIC and STATUS from the COMPONENTs",(0,a.kt)("br",{parentName:"p"}),"\n","to put it into a STORE."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const myStore = {\n    \n    callbacks: new Set(),\n    subscribe: (callback) => {\n        myStore.callbacks.add(callback)\n        return () => myStore.callbacks.delete(callback)\n    },\n    getSnapshot: () => myStore.state,\n    changeState: (newState) => {\n        myStore.state = newState\n        myStore.callbacks.forEach( cb => cb() )\n    },\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/to-do-usesyncexternalstore-brcpe3?file=/src/store.js:23-336"},"codesandbox")),(0,a.kt)("p",null,"It is a generic implementation of a STORE using ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usesyncexternalstore"},"useSyncExternalStore"),"\nthe new React18 hook (but it can also be done with React17!).\ntherefore:   "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subscribe"),(0,a.kt)("br",{parentName:"li"}),"Stores a callback to be called when the STATE of the STORE is changed  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getSnapshot"),(0,a.kt)("br",{parentName:"li"}),"Returns the current STATE   "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"changeState"),(0,a.kt)("br",{parentName:"li"}),"It is convenient to exchange one STATE for another STATE.",(0,a.kt)("br",{parentName:"li"}),"Remember that a STATE is immutable!",(0,a.kt)("br",{parentName:"li"}),"And notify all registered ",(0,a.kt)("inlineCode",{parentName:"li"},"callbacks")," of the change ")),(0,a.kt)("h3",{id:"enter-the-state"},"Enter the STATE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const myStore = {\n    ...\n    state: {\n        todos: [\n            { desc : "init value" },\n        ],\n        todoInEdit: {\n            desc: ""\n        },\n    },\n    ...\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/to-do-usesyncexternalstore-brcpe3?file=/src/store.js:339-460"},"codesandbox")),(0,a.kt)("p",null,"It is a picture of what our VIEW, in this case the ToDo app, should look like.\nA STATE represents one and only one view of the VIEW."),(0,a.kt)("h3",{id:"enter-the-mutators"},"Enter the MUTATORS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const myStore = {\n    ...\n    setTodos: todos => myStore.changeState({\n        ...myStore.state,\n        todos\n    }),\n    setTodoInEditProp: prop => myStore.changeState({\n        ...myStore.state,\n        todoInEdit: { ...myStore.state.todoInEdit, ...prop }\n    }),\n    ...\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/to-do-usesyncexternalstore-brcpe3?file=/src/store.js:339-460"},"codesandbox")),(0,a.kt)("p",null,"They simply execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"changeState")," by passing it the modified STATE.\nConsequently, they will notify the changes to the COMPONENTS.\n(as said before)"),(0,a.kt)("h3",{id:"lets-add-the-actions"},"Let's add the ACTIONS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const myStore = {\n    ...\n    deleteTodo: (index) => {\n        const newTodos = myStore.state.todos.filter ((_,i)=>i!==index)\n        myStore.setTodos(newTodos)\n    },\n    addTodoInEdit: () => {\n        const newTodos = [...myStore.state.todos, myStore.state.todoInEdit]\n        myStore.setTodos(newTodos)\n        myStore.setTodoInEditProp({desc: ""}) \n    },\n    ...\n}\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/to-do-usesyncexternalstore-brcpe3?file=/src/store.js:483-773"},"codesandbox")),(0,a.kt)("h3",{id:"lets-update-the-view"},"Let's update the VIEW"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n    return (<div>\n        <List />\n        <Form />\n    </div>);\n}\n\nfunction List() {\n    const state = useSyncExternalStore(store.subscribe, store.getSnapshot)\n\n    return (\n        <ul>\n            {state.todos.map((td, index) => (<li>\n                {td.desc}\n                <button onClick={_=>store.deleteTodo(index)}>\n                    Delete\n                </button>\n            </li>))}\n        </ul>\n    )\n}\n\nfunction Form() {\n    const state = useSyncExternalStore(store.subscribe, store.getSnapshot)\n    const handleChange = e => store.setTodoInEditProp({desc:e.target.value})\n    const handleClickAdd = _ => store.addTodoInEdit()\n\n    return (<div>\n        <input\n            value={state.todoInEdit.desc}\n            onChange={handleChange}\n        />\n        <button onClick={handleClickAdd}>Add</button>\n    </div>)\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/to-do-usesyncexternalstore-brcpe3?file=/src/index.js:130-828"},"codesandbox")),(0,a.kt)("p",null,"The STORE is responsible for managing the LOGIC and the STATE",(0,a.kt)("br",{parentName:"p"}),"\n","the VIEW simply synchronises with the STORE  "),(0,a.kt)("p",null,"The COMPONENTS are more readable"),(0,a.kt)("p",null,"and can be moved without problems.\nFor example, ",(0,a.kt)("inlineCode",{parentName:"p"},"List")," can be put inside another component without changing anything",(0,a.kt)("br",{parentName:"p"}),"\n",'because it is no longer "dependent" on its PARENT',(0,a.kt)("br",{parentName:"p"}),"\n","In fact ",(0,a.kt)("inlineCode",{parentName:"p"},"List")," has no properties  "),(0,a.kt)("p",null,"this also makes unit-testing easier.  "),(0,a.kt)("p",null,"In short, if I have to change the behavior I have to look at the STOREs.",(0,a.kt)("br",{parentName:"p"}),"\n","If I have to change the display I will have to act on the COMPONENTS   "),(0,a.kt)("h2",{id:"jon"},"Jon"),(0,a.kt)("p",null,"There are many libraries in React (as usual) that allow STATE management.",(0,a.kt)("br",{parentName:"p"}),"\n","Of course I made one \ud83d\ude03",(0,a.kt)("br",{parentName:"p"}),"\n","In my opinion, compared to the others, it allows",(0,a.kt)("br",{parentName:"p"}),"\n","1) to see perfectly how it works under the hood. NO MAGIC",(0,a.kt)("br",{parentName:"p"}),"\n","2) is super light",(0,a.kt)("br",{parentName:"p"}),"\n","3) does only this, and nothing else  "),(0,a.kt)("p",null,"If you want, check it out ",(0,a.kt)("a",{parentName:"p",href:"https://priolo.github.io/jon-doc/"},"here")))}d.isMDXComponent=!0}}]);