(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[539],{1210:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,u=o(n(7294)),i=n(6273),l=n(2725),c=n(3462),s=n(1018),f=n(7190),d=n(1210),p=n(8684),v={};function y(e,t,n,r){if(e&&i.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var o=r&&void 0!==r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var g=u.default.forwardRef(function(e,t){var n,o,g=e.href,h=e.as,b=e.children,_=e.prefetch,E=e.passHref,m=e.replace,w=e.shallow,C=e.scroll,O=e.locale,S=e.onClick,R=e.onMouseEnter,T=e.onTouchStart,L=e.legacyBehavior,x=void 0===L?!0!==Boolean(!1):L,M=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,x&&("string"==typeof n||"number"==typeof n)&&(n=u.default.createElement("a",null,n));var k=!1!==_,P=u.default.useContext(c.RouterContext),j=u.default.useContext(s.AppRouterContext);j&&(P=j);var V=u.default.useMemo(function(){var e=r(i.resolveHref(P,g,!0),2),t=e[0],n=e[1];return{href:t,as:h?i.resolveHref(P,h):n||t}},[P,g,h]),I=V.href,D=V.as,N=u.default.useRef(I),A=u.default.useRef(D);x&&(o=u.default.Children.only(n));var U=x?o&&"object"==typeof o&&o.ref:t,F=r(f.useIntersection({rootMargin:"200px"}),3),Z=F[0],W=F[1],B=F[2],q=u.default.useCallback(function(e){(A.current!==D||N.current!==I)&&(B(),A.current=D,N.current=I),Z(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[D,U,I,B,Z]);u.default.useEffect(function(){var e=W&&k&&i.isLocalURL(I),t=void 0!==O?O:P&&P.locale,n=v[I+"%"+D+(t?"%"+t:"")];e&&!n&&y(P,I,D,{locale:t})},[D,I,W,O,k,P]);var H={ref:q,onClick:function(e){x||"function"!=typeof S||S(e),x&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,c,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&i.isLocalURL(n)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:l}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};s?u.default.startTransition(v):v()}}(e,P,I,D,m,w,C,O,Boolean(j),k)},onMouseEnter:function(e){x||"function"!=typeof R||R(e),x&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!k&&j)&&i.isLocalURL(I)&&y(P,I,D,{priority:!0})},onTouchStart:function(e){x||"function"!=typeof T||T(e),x&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!k&&j)&&i.isLocalURL(I)&&y(P,I,D,{priority:!0})}};if(!x||E||"a"===o.type&&!("href"in o.props)){var K=void 0!==O?O:P&&P.locale,G=P&&P.isLocaleDomain&&d.getDomainLocale(D,K,P.locales,P.domainLocales);H.href=G||p.addBasePath(l.addLocale(D,K,P&&P.defaultLocale))}return x?u.default.cloneElement(o,H):u.default.createElement("a",Object.assign({},M,H),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!u,s=r(o.useState(!1),2),f=s[0],d=s[1],p=r(o.useState(null),2),v=p[0],y=p[1];return o.useEffect(function(){if(u){if(!c&&!f&&v&&v.tagName){var e,r,o,s,p,y,g;return r=function(e){return e&&d(e)},p=(s=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=i.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),i.set(n,t),t}(o={root:null==t?void 0:t.current,rootMargin:n})).id,y=s.observer,(g=s.elements).set(v,r),y.observe(v),function(){if(g.delete(v),y.unobserve(v),0===g.size){y.disconnect(),i.delete(p);var e=l.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&l.splice(e,1)}}}}else if(!f){var h=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(h)}}},[v,c,n,t,f]),[y,f,o.useCallback(function(){d(!1)},[])]};var o=n(7294),a=n(9311),u="function"==typeof IntersectionObserver,i=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var u=r.default.createContext(null);t.GlobalLayoutRouterContext=u;var i=r.default.createContext(null);t.TemplateContext=i},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},3250:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r=n(7294),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useState,u=r.useEffect,i=r.useLayoutEffect,l=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}function s(e,t){return t()}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?s:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),o=r[0].inst,s=r[1];return i(function(){o.value=n,o.getSnapshot=t,c(o)&&s({inst:o})},[e,n,t]),u(function(){return c(o)&&s({inst:o}),e(function(){c(o)&&s({inst:o})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:f},1688:function(e,t,n){"use strict";e.exports=n(3250)},7568:function(e,t,n){"use strict";function r(e,t,n,r,o,a,u){try{var i=e[a](u),l=i.value}catch(c){n(c);return}i.done?t(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(o,a){var u=e.apply(t,n);function i(e){r(u,o,a,i,l,"next",e)}function l(e){r(u,o,a,i,l,"throw",e)}i(void 0)})}}n.d(t,{Z:function(){return o}})},9734:function(e,t,n){"use strict";n.d(t,{ZP:function(){return ea}});var r,o=n(7294),a=n(1688);let u=new WeakMap,i={},l=()=>{},c=l(),s=Object,f=e=>e===c,d=e=>"function"==typeof e,p=(e,t)=>({...e,...t}),v="undefined",y=typeof window!=v,g=typeof document!=v,h=()=>y&&typeof window.requestAnimationFrame!=v,b=(e,t)=>{let n=u.get(e);return[()=>e.get(t)||i,r=>{let o=e.get(t);n[5](t,p(o,r),o||i)},n[6]]},_=new WeakMap,E=0,m=e=>{let t=typeof e,n=e&&e.constructor,r=n==Date,o,a;if(s(e)!==e||r||n==RegExp)o=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(o=_.get(e))return o;if(o=++E+"~",_.set(e,o),n==Array){for(a=0,o="@";a<e.length;a++)o+=m(e[a])+",";_.set(e,o)}if(n==s){o="#";let u=s.keys(e).sort();for(;!f(a=u.pop());)f(e[a])||(o+=a+":"+m(e[a])+",");_.set(e,o)}}return o},w=!0,[C,O]=y&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[l,l],S=()=>{let e=g&&document.visibilityState;return f(e)||"hidden"!==e},R=e=>(g&&document.addEventListener("visibilitychange",e),C("focus",e),()=>{g&&document.removeEventListener("visibilitychange",e),O("focus",e)}),T=e=>{let t=()=>{w=!0,e()},n=()=>{w=!1};return C("online",t),C("offline",n),()=>{O("online",t),O("offline",n)}},L={initFocus:R,initReconnect:T},x=!o.useId,M=!y||"Deno"in window,k=e=>h()?window.requestAnimationFrame(e):setTimeout(e,1),P=M?o.useEffect:o.useLayoutEffect,j="undefined"!=typeof navigator&&navigator.connection,V=!M&&j&&(["slow-2g","2g"].includes(j.effectiveType)||j.saveData),I=e=>{if(d(e))try{e=e()}catch(t){e=""}let n=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?m(e):"",n]},D=0,N=()=>++D;var A={__proto__:null,FOCUS_EVENT:0,RECONNECT_EVENT:1,MUTATE_EVENT:2};async function U(...e){let[t,n,r,o]=e,a=p({populateCache:!0,throwOnError:!0},"boolean"==typeof o?{revalidate:o}:o||{}),i=a.populateCache,l=a.rollbackOnError,s=a.optimisticData,v=!1!==a.revalidate,y=e=>"function"==typeof l?l(e):!1!==l,g=a.throwOnError;if(d(n)){let h=[],_=t.keys();for(let E=_.next();!E.done;E=_.next()){let m=E.value;!m.startsWith("$inf$")&&n(t.get(m)._k)&&h.push(m)}return Promise.all(h.map(w))}return w(n);async function w(n){let[o]=I(n);if(!o)return;let[a,l]=b(t,o),[p,h,_]=u.get(t),E=p[o],m=()=>v&&(delete _[o],E&&E[0])?E[0](2).then(()=>a().data):a().data;if(e.length<3)return m();let w=r,C,O=N();h[o]=[O,0];let S=!f(s),R=a(),T=R.data,L=R._c,x=f(L)?T:L;if(S&&(s=d(s)?s(x):s,l({data:s,_c:x})),d(w))try{w=w(x)}catch(M){C=M}if(w&&d(w.then)){if(w=await w.catch(e=>{C=e}),O!==h[o][0]){if(C)throw C;return w}C&&S&&y(C)&&(i=!0,w=x,l({data:w,_c:c}))}i&&!C&&(d(i)&&(w=i(w,x)),l({data:w,_c:c})),h[o][1]=N();let k=await m();if(l({_c:c}),C){if(g)throw C;return}return i?k:w}}let F=(e,t)=>{for(let n in e)e[n][0]&&e[n][0](t)},Z=(e,t)=>{if(!u.has(e)){let n=p(L,t),r={},o=U.bind(c,e),a=l,i={},s=(e,t)=>{let n=i[e]||[];return i[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},f=(t,n,r)=>{e.set(t,n);let o=i[t];if(o)for(let a=o.length;a--;)o[a](r,n)},d=()=>{if(!u.has(e)&&(u.set(e,[r,{},{},{},o,f,s]),!M)){let t=n.initFocus(setTimeout.bind(c,F.bind(c,r,0))),i=n.initReconnect(setTimeout.bind(c,F.bind(c,r,1)));a=()=>{t&&t(),i&&i(),u.delete(e)}}};return d(),[e,o,d,a]}return[e,u.get(e)[4]]},W=(e,t,n,r,o)=>{let a=n.errorRetryCount,u=o.retryCount,i=~~((Math.random()+.5)*(1<<(u<8?u:8)))*n.errorRetryInterval;(f(a)||!(u>a))&&setTimeout(r,i,o)},B=(e,t)=>m(e)==m(t),[q,H]=Z(new Map),K=p({onLoadingSlow:l,onSuccess:l,onError:l,onErrorRetry:W,onDiscarded:l,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:V?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:V?5e3:3e3,compare:B,isPaused:()=>!1,cache:q,mutate:H,fallback:{}},{isOnline:()=>w,isVisible:S}),G=(e,t)=>{let n=p(e,t);if(t){let{use:r,fallback:o}=e,{use:a,fallback:u}=t;r&&a&&(n.use=r.concat(a)),o&&u&&(n.fallback=p(o,u))}return n},J=(0,o.createContext)({}),$=e=>{let{value:t}=e,n=(0,o.useContext)(J),r=d(t),a=(0,o.useMemo)(()=>r?t(n):t,[r,n,t]),u=(0,o.useMemo)(()=>r?a:G(n,a),[r,n,a]),i=a&&a.provider,[l]=(0,o.useState)(()=>i?Z(i(u.cache||q),a):c);return l&&(u.cache=l[0],u.mutate=l[1]),P(()=>{if(l)return l[2]&&l[2](),l[3]},[]),(0,o.createElement)(J.Provider,p(e,{value:u}))},z=y&&window.__SWR_DEVTOOLS_USE__,Q=z?window.__SWR_DEVTOOLS_USE__:[],X=e=>d(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],Y=()=>p(K,(0,o.useContext)(J)),ee=e=>(t,n,r)=>e(t,n&&((...e)=>{let r=I(t)[0],[,,,o]=u.get(q),a=o[r];return a?(delete o[r],a):n(...e)}),r),et=Q.concat(ee),en=(e,t,n)=>{let r=t[e]||(t[e]=[]);return r.push(n),()=>{let e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}};z&&(window.__SWR_DEVTOOLS_REACT__=o);let er={dedupe:!0},eo=(e,t,n)=>{let{cache:r,compare:i,suspense:l,fallbackData:s,revalidateOnMount:v,refreshInterval:y,refreshWhenHidden:g,refreshWhenOffline:h,keepPreviousData:_}=n,[E,m,w]=u.get(r),[C,O]=I(e),S=(0,o.useRef)(!1),R=(0,o.useRef)(!1),T=(0,o.useRef)(C),L=(0,o.useRef)(t),j=(0,o.useRef)(n),V=()=>j.current,D=()=>V().isVisible()&&V().isOnline(),[F,Z,W]=b(r,C),B=(0,o.useRef)({}).current,q=f(s)?n.fallback[C]:s,H=(e,t)=>{let n=!0;for(let r in B){let o=r;i(t[o],e[o])||"data"===o&&f(e[o])&&i(t[o],Y)||(n=!1)}return n},K=(0,o.useMemo)(()=>{let e=!!C&&!!t&&(f(v)?!V().isPaused()&&!l:v),n=()=>{let t=F(),n=p(t);return(delete n._k,e)?{isValidating:!0,isLoading:!0,...n}:n},r=n();return()=>{let e=n();return H(e,r)?r:r=e}},[r,C]),G=(0,a.useSyncExternalStore)((0,o.useCallback)(e=>W(C,(t,n)=>{H(t,n)||e()}),[r,C]),K,K),J=!S.current,$=G.data,z=f($)?q:$,Q=G.error,X=(0,o.useRef)(z),Y=_?f($)?X.current:$:z,ee=J&&!f(v)?v:!V().isPaused()&&(l?!f(z)&&n.revalidateIfStale:f(z)||n.revalidateIfStale),et=!!(C&&t&&J&&ee),eo=f(G.isValidating)?et:G.isValidating,ea=f(G.isLoading)?et:G.isLoading,eu=(0,o.useCallback)(async e=>{let t=L.current;if(!C||!t||R.current||V().isPaused())return!1;let r,o,a=!0,u=e||{},l=!w[C]||!u.dedupe,s=()=>x?!R.current&&C===T.current&&S.current:C===T.current,p={isValidating:!1,isLoading:!1},v=()=>{Z(p)},y=()=>{let e=w[C];e&&e[1]===o&&delete w[C]},g={isValidating:!0};f(F().data)&&(g.isLoading=!0);try{if(l&&(Z(g),n.loadingTimeout&&f(F().data)&&setTimeout(()=>{a&&s()&&V().onLoadingSlow(C,n)},n.loadingTimeout),w[C]=[t(O),N()]),[r,o]=w[C],r=await r,l&&setTimeout(y,n.dedupingInterval),!w[C]||w[C][1]!==o)return l&&s()&&V().onDiscarded(C),!1;p.error=c;let h=m[C];if(!f(h)&&(o<=h[0]||o<=h[1]||0===h[1]))return v(),l&&s()&&V().onDiscarded(C),!1;let b=F().data;p.data=i(b,r)?b:r,l&&s()&&V().onSuccess(r,C,n)}catch(M){y();let _=V(),{shouldRetryOnError:E}=_;!_.isPaused()&&(p.error=M,l&&s()&&(_.onError(M,C,_),(!0===E||d(E)&&E(M))&&D()&&_.onErrorRetry(M,C,_,eu,{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return a=!1,v(),!0},[C,r]),ei=(0,o.useCallback)((...e)=>U(r,T.current,...e),[]);if(P(()=>{L.current=t,j.current=n,f($)||(X.current=$)}),P(()=>{if(!C)return;let e=eu.bind(c,er),t=0,n=n=>{if(n==A.FOCUS_EVENT){let r=Date.now();V().revalidateOnFocus&&r>t&&D()&&(t=r+V().focusThrottleInterval,e())}else if(n==A.RECONNECT_EVENT)V().revalidateOnReconnect&&D()&&e();else if(n==A.MUTATE_EVENT)return eu()},r=en(C,E,n);return R.current=!1,T.current=C,S.current=!0,Z({_k:O}),ee&&(f(z)||M?e():k(e)),()=>{R.current=!0,r()}},[C]),P(()=>{let e;function t(){let t=d(y)?y(z):y;t&&-1!==e&&(e=setTimeout(n,t))}function n(){!F().error&&(g||V().isVisible())&&(h||V().isOnline())?eu(er).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[y,g,h,C]),(0,o.useDebugValue)(Y),l&&f(z)&&C){if(!x&&M)throw Error("Fallback data is required when using suspense in SSR.");throw L.current=t,j.current=n,R.current=!1,f(Q)?eu(er):Q}return{mutate:ei,get data(){return B.data=!0,Y},get error(){return B.error=!0,Q},get isValidating(){return B.isValidating=!0,eo},get isLoading(){return B.isLoading=!0,ea}}};s.defineProperty($,"defaultValue",{value:K});var ea=function(...e){let t=Y(),[n,r,o]=X(e),a=G(t,o),u=eo,{use:i}=a,l=(i||[]).concat(et);for(let c=l.length;c--;)u=l[c](u);return u(n,r||a.fetcher||null,a)}}}]);