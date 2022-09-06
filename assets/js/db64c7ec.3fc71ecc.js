"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[434],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2758:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={},c="Write Project Documents",s={unversionedId:"reference/decisions/write-project-documents",id:"reference/decisions/write-project-documents",title:"Write Project Documents",description:"Prologue",source:"@site/docs/reference/decisions/007-write-project-documents.md",sourceDirName:"reference/decisions",slug:"/reference/decisions/write-project-documents",permalink:"/ground/reference/decisions/write-project-documents",draft:!1,editUrl:"https://github.com/caipre/ground/edit/main/website/docs/reference/decisions/007-write-project-documents.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"sidebar",previous:{title:"Use unified logging system",permalink:"/ground/reference/decisions/use-unified-logging-system"},next:{title:"Template for Project Documents",permalink:"/ground/reference/projects/template"}},a={},l=[{value:"Prologue",id:"prologue",level:2},{value:"Discussion",id:"discussion",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"write-project-documents"},"Write Project Documents"),(0,o.kt)("h2",{id:"prologue"},"Prologue"),(0,o.kt)("p",null,"Write Project Documents to describe larger product, design, and\nengineering work."),(0,o.kt)("h2",{id:"discussion"},"Discussion"),(0,o.kt)("p",null,"Following the ",(0,o.kt)("a",{parentName:"p",href:"https://linear.app/docs/linear-method"},"Linear method"),",\nwe should prioritize working on projects:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Projects define larger pieces of work that have a clear outcome or\ncompletion date, such as launching a new feature."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://linear.app/docs/projects"},"https://linear.app/docs/projects"))),(0,o.kt)("p",null,"Project Documents are the product and design parallel of Decision\nRecords, which tend to be engineering focused. Decision Records\nare written after a decision has been made and tend to be immutable;\nProject Documents are written in advance of the work they describe and\nare living documents until the project is completed or cancelled."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Write a project document to describe larger initiatives (",(0,o.kt)("a",{parentName:"li",href:"/reference/projects/template"},"template"),")"),(0,o.kt)("li",{parentName:"ul"},"Crosslink the project document with the corresponding Linear project")),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"Nothing to report."))}p.isMDXComponent=!0}}]);