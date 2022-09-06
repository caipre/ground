"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(a,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,c(c({ref:t},d),{},{components:n})):r.createElement(m,c({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={id:"template"},c="Template for Decision Records",s={unversionedId:"reference/decisions/template",id:"reference/decisions/template",title:"Template for Decision Records",description:"Prologue",source:"@site/docs/reference/decisions/000-decision-record-template.md",sourceDirName:"reference/decisions",slug:"/reference/decisions/template",permalink:"/ground/reference/decisions/template",draft:!1,editUrl:"https://github.com/caipre/ground/edit/main/website/docs/reference/decisions/000-decision-record-template.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"template"},sidebar:"sidebar",previous:{title:"Testing Strategy",permalink:"/ground/reference/strategy/testing"},next:{title:"Write Decision Records",permalink:"/ground/reference/decisions/write-decision-records"}},a={},l=[{value:"Prologue",id:"prologue",level:2},{value:"Discussion",id:"discussion",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"template-for-decision-records"},"Template for Decision Records"),(0,i.kt)("h2",{id:"prologue"},"Prologue"),(0,i.kt)("p",null,"Briefly summarize the issue and the decision that was made.\nWrite the title in the imperative."),(0,i.kt)("h2",{id:"discussion"},"Discussion"),(0,i.kt)("p",null,"Explain the context for the decision and identify the desired outcome.\nBriefly describe the approaches that were considered and the rationale\nfor why this solution was chosen. Identify known risks and accepted\ntradeoffs."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"If necessary, provide a more detailed explanation of the solution.\nLink to reference documentation and designs relevant to the solution."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("p",null,"Describe the immediate impact of the decision, and return later to\nreflect on the long-term result. Describe what went well, what was\nchanged over time, what was learned, and what went poorly (unintended\nconsequences)."))}u.isMDXComponent=!0}}]);