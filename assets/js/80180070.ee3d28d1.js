"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(a,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},s="Template for Decision Records",c={unversionedId:"reference/decisions/template",id:"reference/decisions/template",title:"Template for Decision Records",description:"Prologue",source:"@site/docs/reference/decisions/000-template.md",sourceDirName:"reference/decisions",slug:"/reference/decisions/template",permalink:"/ground/reference/decisions/template",draft:!1,editUrl:"https://github.com/caipre/ground/edit/main/website/docs/reference/decisions/000-template.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"sidebar",previous:{title:"Releasing",permalink:"/ground/guides/releasing"},next:{title:"Write Decision Records",permalink:"/ground/reference/decisions/write-decision-records"}},a={},l=[{value:"Prologue",id:"prologue",level:2},{value:"Discussion",id:"discussion",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"template-for-decision-records"},"Template for Decision Records"),(0,o.kt)("h2",{id:"prologue"},"Prologue"),(0,o.kt)("p",null,"Briefly summarize the issue and the decision that was made.\nWrite the title in the imperative."),(0,o.kt)("h2",{id:"discussion"},"Discussion"),(0,o.kt)("p",null,"Explain the context for the decision and identify the desired outcome.\nBriefly describe the approaches that were considered and the rationale\nfor why this solution was chosen. Identify known risks and accepted\ntradeoffs."),(0,o.kt)("h2",{id:"decision"},"Decision"),(0,o.kt)("p",null,"If necessary, provide a more detailed explanation of the solution.\nLink to reference documentation and designs relevant to the solution."),(0,o.kt)("h2",{id:"consequences"},"Consequences"),(0,o.kt)("p",null,"Describe the immediate impact of the decision, and return later to\nreflect on the long-term result. Describe what went well, what was\nchanged over time, what was learned, and what went poorly (unintended\nconsequences)."))}u.isMDXComponent=!0}}]);