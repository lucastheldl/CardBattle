function DT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var v0={exports:{}},Hu={},_0={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),bT=Symbol.for("react.portal"),MT=Symbol.for("react.fragment"),LT=Symbol.for("react.strict_mode"),VT=Symbol.for("react.profiler"),$T=Symbol.for("react.provider"),jT=Symbol.for("react.context"),FT=Symbol.for("react.forward_ref"),UT=Symbol.for("react.suspense"),zT=Symbol.for("react.memo"),BT=Symbol.for("react.lazy"),lg=Symbol.iterator;function WT(t){return t===null||typeof t!="object"?null:(t=lg&&t[lg]||t["@@iterator"],typeof t=="function"?t:null)}var w0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E0=Object.assign,I0={};function Is(t,e,n){this.props=t,this.context=e,this.refs=I0,this.updater=n||w0}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function T0(){}T0.prototype=Is.prototype;function Ff(t,e,n){this.props=t,this.context=e,this.refs=I0,this.updater=n||w0}var Uf=Ff.prototype=new T0;Uf.constructor=Ff;E0(Uf,Is.prototype);Uf.isPureReactComponent=!0;var ug=Array.isArray,S0=Object.prototype.hasOwnProperty,zf={current:null},C0={key:!0,ref:!0,__self:!0,__source:!0};function A0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)S0.call(e,r)&&!C0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:pa,type:t,key:s,ref:o,props:i,_owner:zf.current}}function HT(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function GT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cg=/\/+/g;function Jc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GT(""+t.key):e.toString(36)}function yl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pa:case bT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Jc(o,0):r,ug(i)?(n="",t!=null&&(n=t.replace(cg,"$&/")+"/"),yl(i,e,n,"",function(u){return u})):i!=null&&(Bf(i)&&(i=HT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ug(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Jc(s,a);o+=yl(s,e,n,l,i)}else if(l=WT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Jc(s,a++),o+=yl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function za(t,e,n){if(t==null)return t;var r=[],i=0;return yl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function qT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},vl={transition:null},QT={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:vl,ReactCurrentOwner:zf};Y.Children={map:za,forEach:function(t,e,n){za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return za(t,function(){e++}),e},toArray:function(t){return za(t,function(e){return e})||[]},only:function(t){if(!Bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Is;Y.Fragment=MT;Y.Profiler=VT;Y.PureComponent=Ff;Y.StrictMode=LT;Y.Suspense=UT;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QT;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=E0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)S0.call(e,l)&&!C0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:pa,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:jT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$T,_context:t},t.Consumer=t};Y.createElement=A0;Y.createFactory=function(t){var e=A0.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:FT,render:t}};Y.isValidElement=Bf;Y.lazy=function(t){return{$$typeof:BT,_payload:{_status:-1,_result:t},_init:qT}};Y.memo=function(t,e){return{$$typeof:zT,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=vl.transition;vl.transition={};try{t()}finally{vl.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return ut.current.useCallback(t,e)};Y.useContext=function(t){return ut.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};Y.useEffect=function(t,e){return ut.current.useEffect(t,e)};Y.useId=function(){return ut.current.useId()};Y.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return ut.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};Y.useRef=function(t){return ut.current.useRef(t)};Y.useState=function(t){return ut.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return ut.current.useTransition()};Y.version="18.2.0";_0.exports=Y;var w=_0.exports;const Ue=jf(w),YT=DT({__proto__:null,default:Ue},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KT=w,XT=Symbol.for("react.element"),JT=Symbol.for("react.fragment"),ZT=Object.prototype.hasOwnProperty,eS=KT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tS={key:!0,ref:!0,__self:!0,__source:!0};function k0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ZT.call(e,r)&&!tS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:XT,type:t,key:s,ref:o,props:i,_owner:eS.current}}Hu.Fragment=JT;Hu.jsx=k0;Hu.jsxs=k0;v0.exports=Hu;var p=v0.exports,td={},x0={exports:{}},At={},R0={exports:{}},P0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,j){var $=P.length;P.push(j);e:for(;0<$;){var he=$-1>>>1,ye=P[he];if(0<i(ye,j))P[he]=j,P[$]=ye,$=he;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],$=P.pop();if($!==j){P[0]=$;e:for(var he=0,ye=P.length,_n=ye>>>1;he<_n;){var vt=2*(he+1)-1,Bn=P[vt],_t=vt+1,Rt=P[_t];if(0>i(Bn,$))_t<ye&&0>i(Rt,Bn)?(P[he]=Rt,P[_t]=$,he=_t):(P[he]=Bn,P[vt]=$,he=vt);else if(_t<ye&&0>i(Rt,$))P[he]=Rt,P[_t]=$,he=_t;else break e}}return j}function i(P,j){var $=P.sortIndex-j.sortIndex;return $!==0?$:P.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,v=!1,_=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=P)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function E(P){if(_=!1,y(P),!v)if(n(l)!==null)v=!0,vn(T);else{var j=n(u);j!==null&&G(E,j.startTime-P)}}function T(P,j){v=!1,_&&(_=!1,m(O),O=-1),g=!0;var $=d;try{for(y(j),h=n(l);h!==null&&(!(h.expirationTime>j)||P&&!ee());){var he=h.callback;if(typeof he=="function"){h.callback=null,d=h.priorityLevel;var ye=he(h.expirationTime<=j);j=t.unstable_now(),typeof ye=="function"?h.callback=ye:h===n(l)&&r(l),y(j)}else r(l);h=n(l)}if(h!==null)var _n=!0;else{var vt=n(u);vt!==null&&G(E,vt.startTime-j),_n=!1}return _n}finally{h=null,d=$,g=!1}}var A=!1,C=null,O=-1,H=5,R=-1;function ee(){return!(t.unstable_now()-R<H)}function yt(){if(C!==null){var P=t.unstable_now();R=P;var j=!0;try{j=C(!0,P)}finally{j?xt():(A=!1,C=null)}}else A=!1}var xt;if(typeof f=="function")xt=function(){f(yt)};else if(typeof MessageChannel<"u"){var yn=new MessageChannel,js=yn.port2;yn.port1.onmessage=yt,xt=function(){js.postMessage(null)}}else xt=function(){I(yt,0)};function vn(P){C=P,A||(A=!0,xt())}function G(P,j){O=I(function(){P(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,vn(T))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var $=d;d=j;try{return P()}finally{d=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var $=d;d=P;try{return j()}finally{d=$}},t.unstable_scheduleCallback=function(P,j,$){var he=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?he+$:he):$=he,P){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=$+ye,P={id:c++,callback:j,priorityLevel:P,startTime:$,expirationTime:ye,sortIndex:-1},$>he?(P.sortIndex=$,e(u,P),n(l)===null&&P===n(u)&&(_?(m(O),O=-1):_=!0,G(E,$-he))):(P.sortIndex=ye,e(l,P),v||g||(v=!0,vn(T))),P},t.unstable_shouldYield=ee,t.unstable_wrapCallback=function(P){var j=d;return function(){var $=d;d=j;try{return P.apply(this,arguments)}finally{d=$}}}})(P0);R0.exports=P0;var nS=R0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0=w,St=nS;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O0=new Set,Po={};function fi(t,e){ts(t,e),ts(t+"Capture",e)}function ts(t,e){for(Po[t]=e,t=0;t<e.length;t++)O0.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nd=Object.prototype.hasOwnProperty,rS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hg={},dg={};function iS(t){return nd.call(dg,t)?!0:nd.call(hg,t)?!1:rS.test(t)?dg[t]=!0:(hg[t]=!0,!1)}function sS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oS(t,e,n,r){if(e===null||typeof e>"u"||sS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function Hf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wf,Hf);We[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wf,Hf);We[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wf,Hf);We[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gf(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oS(e,n,i,r)&&(n=null),r||i===null?iS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=N0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),qf=Symbol.for("react.strict_mode"),rd=Symbol.for("react.profiler"),D0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),sd=Symbol.for("react.suspense_list"),Yf=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),M0=Symbol.for("react.offscreen"),fg=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=fg&&t[fg]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,Zc;function Js(t){if(Zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zc=e&&e[1]||""}return`
`+Zc+t}var eh=!1;function th(t,e){if(!t||eh)return"";eh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{eh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function aS(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=th(t.type,!1),t;case 11:return t=th(t.type.render,!1),t;case 1:return t=th(t.type,!0),t;default:return""}}function od(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pi:return"Fragment";case Ri:return"Portal";case rd:return"Profiler";case qf:return"StrictMode";case id:return"Suspense";case sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case b0:return(t.displayName||"Context")+".Consumer";case D0:return(t._context.displayName||"Context")+".Provider";case Qf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yf:return e=t.displayName||null,e!==null?e:od(t.type)||"Memo";case Qn:e=t._payload,t=t._init;try{return od(t(e))}catch{}}return null}function lS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return od(e);case 8:return e===qf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function L0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uS(t){var e=L0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wa(t){t._valueTracker||(t._valueTracker=uS(t))}function V0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=L0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ad(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $0(t,e){e=e.checked,e!=null&&Gf(t,"checked",e,!1)}function ld(t,e){$0(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&ud(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ud(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function Wi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Zs(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function j0(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function F0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?F0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ha,U0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function No(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cS=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){cS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function z0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function B0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=z0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hS=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dd(t,e){if(e){if(hS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function fd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pd=null;function Kf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var md=null,Hi=null,Gi=null;function vg(t){if(t=ya(t)){if(typeof md!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Ku(e),md(t.stateNode,t.type,e))}}function W0(t){Hi?Gi?Gi.push(t):Gi=[t]:Hi=t}function H0(){if(Hi){var t=Hi,e=Gi;if(Gi=Hi=null,vg(t),e)for(t=0;t<e.length;t++)vg(e[t])}}function G0(t,e){return t(e)}function q0(){}var nh=!1;function Q0(t,e,n){if(nh)return t(e,n);nh=!0;try{return G0(t,e,n)}finally{nh=!1,(Hi!==null||Gi!==null)&&(q0(),H0())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var gd=!1;if(On)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){gd=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{gd=!1}function dS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var fo=!1,Bl=null,Wl=!1,yd=null,fS={onError:function(t){fo=!0,Bl=t}};function pS(t,e,n,r,i,s,o,a,l){fo=!1,Bl=null,dS.apply(fS,arguments)}function mS(t,e,n,r,i,s,o,a,l){if(pS.apply(this,arguments),fo){if(fo){var u=Bl;fo=!1,Bl=null}else throw Error(x(198));Wl||(Wl=!0,yd=u)}}function pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Y0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _g(t){if(pi(t)!==t)throw Error(x(188))}function gS(t){var e=t.alternate;if(!e){if(e=pi(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _g(i),t;if(s===r)return _g(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function K0(t){return t=gS(t),t!==null?X0(t):null}function X0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=X0(t);if(e!==null)return e;t=t.sibling}return null}var J0=St.unstable_scheduleCallback,wg=St.unstable_cancelCallback,yS=St.unstable_shouldYield,vS=St.unstable_requestPaint,we=St.unstable_now,_S=St.unstable_getCurrentPriorityLevel,Xf=St.unstable_ImmediatePriority,Z0=St.unstable_UserBlockingPriority,Hl=St.unstable_NormalPriority,wS=St.unstable_LowPriority,e_=St.unstable_IdlePriority,Gu=null,ln=null;function ES(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Gu,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:SS,IS=Math.log,TS=Math.LN2;function SS(t){return t>>>=0,t===0?32:31-(IS(t)/TS|0)|0}var Ga=64,qa=4194304;function eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=eo(a):(s&=o,s!==0&&(r=eo(s)))}else o=n&~i,o!==0?r=eo(o):s!==0&&(r=eo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wt(e),i=1<<n,r|=t[n],e&=~i;return r}function CS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=CS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function t_(){var t=Ga;return Ga<<=1,!(Ga&4194240)&&(Ga=64),t}function rh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wt(e),t[e]=n}function kS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function n_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var r_,Zf,i_,s_,o_,_d=!1,Qa=[],or=null,ar=null,lr=null,Do=new Map,bo=new Map,Kn=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eg(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ya(e),e!==null&&Zf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function RS(t,e,n,r,i){switch(e){case"focusin":return or=zs(or,t,e,n,r,i),!0;case"dragenter":return ar=zs(ar,t,e,n,r,i),!0;case"mouseover":return lr=zs(lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Do.set(s,zs(Do.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,bo.set(s,zs(bo.get(s)||null,t,e,n,r,i)),!0}return!1}function a_(t){var e=$r(t.target);if(e!==null){var n=pi(e);if(n!==null){if(e=n.tag,e===13){if(e=Y0(n),e!==null){t.blockedOn=e,o_(t.priority,function(){i_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pd=r,n.target.dispatchEvent(r),pd=null}else return e=ya(n),e!==null&&Zf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ig(t,e,n){_l(t)&&n.delete(e)}function PS(){_d=!1,or!==null&&_l(or)&&(or=null),ar!==null&&_l(ar)&&(ar=null),lr!==null&&_l(lr)&&(lr=null),Do.forEach(Ig),bo.forEach(Ig)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,_d||(_d=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,PS)))}function Mo(t){function e(i){return Bs(i,t)}if(0<Qa.length){Bs(Qa[0],t);for(var n=1;n<Qa.length;n++){var r=Qa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&Bs(or,t),ar!==null&&Bs(ar,t),lr!==null&&Bs(lr,t),Do.forEach(e),bo.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)a_(n),n.blockedOn===null&&Kn.shift()}var qi=Fn.ReactCurrentBatchConfig,ql=!0;function NS(t,e,n,r){var i=ne,s=qi.transition;qi.transition=null;try{ne=1,ep(t,e,n,r)}finally{ne=i,qi.transition=s}}function OS(t,e,n,r){var i=ne,s=qi.transition;qi.transition=null;try{ne=4,ep(t,e,n,r)}finally{ne=i,qi.transition=s}}function ep(t,e,n,r){if(ql){var i=wd(t,e,n,r);if(i===null)fh(t,e,r,Ql,n),Eg(t,r);else if(RS(i,t,e,n,r))r.stopPropagation();else if(Eg(t,r),e&4&&-1<xS.indexOf(t)){for(;i!==null;){var s=ya(i);if(s!==null&&r_(s),s=wd(t,e,n,r),s===null&&fh(t,e,r,Ql,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fh(t,e,r,null,n)}}var Ql=null;function wd(t,e,n,r){if(Ql=null,t=Kf(r),t=$r(t),t!==null)if(e=pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Y0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function l_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_S()){case Xf:return 1;case Z0:return 4;case Hl:case wS:return 16;case e_:return 536870912;default:return 16}default:return 16}}var nr=null,tp=null,wl=null;function u_(){if(wl)return wl;var t,e=tp,n=e.length,r,i="value"in nr?nr.value:nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wl=i.slice(t,1<r?1-r:void 0)}function El(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ya(){return!0}function Tg(){return!1}function kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ya:Tg,this.isPropagationStopped=Tg,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),e}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},np=kt(Ts),ga=me({},Ts,{view:0,detail:0}),DS=kt(ga),ih,sh,Ws,qu=me({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(ih=t.screenX-Ws.screenX,sh=t.screenY-Ws.screenY):sh=ih=0,Ws=t),ih)},movementY:function(t){return"movementY"in t?t.movementY:sh}}),Sg=kt(qu),bS=me({},qu,{dataTransfer:0}),MS=kt(bS),LS=me({},ga,{relatedTarget:0}),oh=kt(LS),VS=me({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),$S=kt(VS),jS=me({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FS=kt(jS),US=me({},Ts,{data:0}),Cg=kt(US),zS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WS[t])?!!e[t]:!1}function rp(){return HS}var GS=me({},ga,{key:function(t){if(t.key){var e=zS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rp,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qS=kt(GS),QS=me({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ag=kt(QS),YS=me({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rp}),KS=kt(YS),XS=me({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),JS=kt(XS),ZS=me({},qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eC=kt(ZS),tC=[9,13,27,32],ip=On&&"CompositionEvent"in window,po=null;On&&"documentMode"in document&&(po=document.documentMode);var nC=On&&"TextEvent"in window&&!po,c_=On&&(!ip||po&&8<po&&11>=po),kg=String.fromCharCode(32),xg=!1;function h_(t,e){switch(t){case"keyup":return tC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ni=!1;function rC(t,e){switch(t){case"compositionend":return d_(e);case"keypress":return e.which!==32?null:(xg=!0,kg);case"textInput":return t=e.data,t===kg&&xg?null:t;default:return null}}function iC(t,e){if(Ni)return t==="compositionend"||!ip&&h_(t,e)?(t=u_(),wl=tp=nr=null,Ni=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c_&&e.locale!=="ko"?null:e.data;default:return null}}var sC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sC[t.type]:e==="textarea"}function f_(t,e,n,r){W0(r),e=Yl(e,"onChange"),0<e.length&&(n=new np("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var mo=null,Lo=null;function oC(t){S_(t,0)}function Qu(t){var e=bi(t);if(V0(e))return t}function aC(t,e){if(t==="change")return e}var p_=!1;if(On){var ah;if(On){var lh="oninput"in document;if(!lh){var Pg=document.createElement("div");Pg.setAttribute("oninput","return;"),lh=typeof Pg.oninput=="function"}ah=lh}else ah=!1;p_=ah&&(!document.documentMode||9<document.documentMode)}function Ng(){mo&&(mo.detachEvent("onpropertychange",m_),Lo=mo=null)}function m_(t){if(t.propertyName==="value"&&Qu(Lo)){var e=[];f_(e,Lo,t,Kf(t)),Q0(oC,e)}}function lC(t,e,n){t==="focusin"?(Ng(),mo=e,Lo=n,mo.attachEvent("onpropertychange",m_)):t==="focusout"&&Ng()}function uC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qu(Lo)}function cC(t,e){if(t==="click")return Qu(e)}function hC(t,e){if(t==="input"||t==="change")return Qu(e)}function dC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:dC;function Vo(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nd.call(e,i)||!Qt(t[i],e[i]))return!1}return!0}function Og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dg(t,e){var n=Og(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Og(n)}}function g_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?g_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function y_(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fC(t){var e=y_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&g_(n.ownerDocument.documentElement,n)){if(r!==null&&sp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Dg(n,s);var o=Dg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pC=On&&"documentMode"in document&&11>=document.documentMode,Oi=null,Ed=null,go=null,Id=!1;function bg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Id||Oi==null||Oi!==zl(r)||(r=Oi,"selectionStart"in r&&sp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),go&&Vo(go,r)||(go=r,r=Yl(Ed,"onSelect"),0<r.length&&(e=new np("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Oi)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Di={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},uh={},v_={};On&&(v_=document.createElement("div").style,"AnimationEvent"in window||(delete Di.animationend.animation,delete Di.animationiteration.animation,delete Di.animationstart.animation),"TransitionEvent"in window||delete Di.transitionend.transition);function Yu(t){if(uh[t])return uh[t];if(!Di[t])return t;var e=Di[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in v_)return uh[t]=e[n];return t}var __=Yu("animationend"),w_=Yu("animationiteration"),E_=Yu("animationstart"),I_=Yu("transitionend"),T_=new Map,Mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){T_.set(t,e),fi(e,[t])}for(var ch=0;ch<Mg.length;ch++){var hh=Mg[ch],mC=hh.toLowerCase(),gC=hh[0].toUpperCase()+hh.slice(1);xr(mC,"on"+gC)}xr(__,"onAnimationEnd");xr(w_,"onAnimationIteration");xr(E_,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(I_,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yC=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Lg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mS(r,e,void 0,t),t.currentTarget=null}function S_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Lg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Lg(i,a,u),s=l}}}if(Wl)throw t=yd,Wl=!1,yd=null,t}function se(t,e){var n=e[kd];n===void 0&&(n=e[kd]=new Set);var r=t+"__bubble";n.has(r)||(C_(e,t,2,!1),n.add(r))}function dh(t,e,n){var r=0;e&&(r|=4),C_(n,t,r,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function $o(t){if(!t[Xa]){t[Xa]=!0,O0.forEach(function(n){n!=="selectionchange"&&(yC.has(n)||dh(n,!1,t),dh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,dh("selectionchange",!1,e))}}function C_(t,e,n,r){switch(l_(e)){case 1:var i=NS;break;case 4:i=OS;break;default:i=ep}n=i.bind(null,e,n,t),i=void 0,!gd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=$r(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Q0(function(){var u=s,c=Kf(n),h=[];e:{var d=T_.get(t);if(d!==void 0){var g=np,v=t;switch(t){case"keypress":if(El(n)===0)break e;case"keydown":case"keyup":g=qS;break;case"focusin":v="focus",g=oh;break;case"focusout":v="blur",g=oh;break;case"beforeblur":case"afterblur":g=oh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Sg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=MS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=KS;break;case __:case w_:case E_:g=$S;break;case I_:g=JS;break;case"scroll":g=DS;break;case"wheel":g=eC;break;case"copy":case"cut":case"paste":g=FS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ag}var _=(e&4)!==0,I=!_&&t==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,y;f!==null;){y=f;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,m!==null&&(E=Oo(f,m),E!=null&&_.push(jo(f,E,y)))),I)break;f=f.return}0<_.length&&(d=new g(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==pd&&(v=n.relatedTarget||n.fromElement)&&($r(v)||v[Dn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?$r(v):null,v!==null&&(I=pi(v),v!==I||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(_=Sg,E="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Ag,E="onPointerLeave",m="onPointerEnter",f="pointer"),I=g==null?d:bi(g),y=v==null?d:bi(v),d=new _(E,f+"leave",g,n,c),d.target=I,d.relatedTarget=y,E=null,$r(c)===u&&(_=new _(m,f+"enter",v,n,c),_.target=y,_.relatedTarget=I,E=_),I=E,g&&v)t:{for(_=g,m=v,f=0,y=_;y;y=Ii(y))f++;for(y=0,E=m;E;E=Ii(E))y++;for(;0<f-y;)_=Ii(_),f--;for(;0<y-f;)m=Ii(m),y--;for(;f--;){if(_===m||m!==null&&_===m.alternate)break t;_=Ii(_),m=Ii(m)}_=null}else _=null;g!==null&&Vg(h,d,g,_,!1),v!==null&&I!==null&&Vg(h,I,v,_,!0)}}e:{if(d=u?bi(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var T=aC;else if(Rg(d))if(p_)T=hC;else{T=uC;var A=lC}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=cC);if(T&&(T=T(t,u))){f_(h,T,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&ud(d,"number",d.value)}switch(A=u?bi(u):window,t){case"focusin":(Rg(A)||A.contentEditable==="true")&&(Oi=A,Ed=u,go=null);break;case"focusout":go=Ed=Oi=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,bg(h,n,c);break;case"selectionchange":if(pC)break;case"keydown":case"keyup":bg(h,n,c)}var C;if(ip)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ni?h_(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(c_&&n.locale!=="ko"&&(Ni||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ni&&(C=u_()):(nr=c,tp="value"in nr?nr.value:nr.textContent,Ni=!0)),A=Yl(u,O),0<A.length&&(O=new Cg(O,t,null,n,c),h.push({event:O,listeners:A}),C?O.data=C:(C=d_(n),C!==null&&(O.data=C)))),(C=nC?rC(t,n):iC(t,n))&&(u=Yl(u,"onBeforeInput"),0<u.length&&(c=new Cg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=C))}S_(h,e)})}function jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Oo(t,n),s!=null&&r.unshift(jo(t,s,i)),s=Oo(t,e),s!=null&&r.push(jo(t,s,i))),t=t.return}return r}function Ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Oo(n,s),l!=null&&o.unshift(jo(n,l,a))):i||(l=Oo(n,s),l!=null&&o.push(jo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vC=/\r\n?/g,_C=/\u0000|\uFFFD/g;function $g(t){return(typeof t=="string"?t:""+t).replace(vC,`
`).replace(_C,"")}function Ja(t,e,n){if(e=$g(e),$g(t)!==e&&n)throw Error(x(425))}function Kl(){}var Td=null,Sd=null;function Cd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ad=typeof setTimeout=="function"?setTimeout:void 0,wC=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,EC=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(t){return jg.resolve(null).then(t).catch(IC)}:Ad;function IC(t){setTimeout(function(){throw t})}function ph(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mo(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),rn="__reactFiber$"+Ss,Fo="__reactProps$"+Ss,Dn="__reactContainer$"+Ss,kd="__reactEvents$"+Ss,TC="__reactListeners$"+Ss,SC="__reactHandles$"+Ss;function $r(t){var e=t[rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fg(t);t!==null;){if(n=t[rn])return n;t=Fg(t)}return e}t=n,n=t.parentNode}return null}function ya(t){return t=t[rn]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Ku(t){return t[Fo]||null}var xd=[],Mi=-1;function Rr(t){return{current:t}}function ue(t){0>Mi||(t.current=xd[Mi],xd[Mi]=null,Mi--)}function ie(t,e){Mi++,xd[Mi]=t.current,t.current=e}var Tr={},nt=Rr(Tr),pt=Rr(!1),Xr=Tr;function ns(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function Xl(){ue(pt),ue(nt)}function Ug(t,e,n){if(nt.current!==Tr)throw Error(x(168));ie(nt,e),ie(pt,n)}function A_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,lS(t)||"Unknown",i));return me({},n,r)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,Xr=nt.current,ie(nt,t),ie(pt,pt.current),!0}function zg(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=A_(t,e,Xr),r.__reactInternalMemoizedMergedChildContext=t,ue(pt),ue(nt),ie(nt,t)):ue(pt),ie(pt,n)}var Tn=null,Xu=!1,mh=!1;function k_(t){Tn===null?Tn=[t]:Tn.push(t)}function CC(t){Xu=!0,k_(t)}function Pr(){if(!mh&&Tn!==null){mh=!0;var t=0,e=ne;try{var n=Tn;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tn=null,Xu=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(t+1)),J0(Xf,Pr),i}finally{ne=e,mh=!1}}return null}var Li=[],Vi=0,Zl=null,eu=0,Nt=[],Ot=0,Jr=null,Sn=1,Cn="";function Mr(t,e){Li[Vi++]=eu,Li[Vi++]=Zl,Zl=t,eu=e}function x_(t,e,n){Nt[Ot++]=Sn,Nt[Ot++]=Cn,Nt[Ot++]=Jr,Jr=t;var r=Sn;t=Cn;var i=32-Wt(r)-1;r&=~(1<<i),n+=1;var s=32-Wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sn=1<<32-Wt(e)+i|n<<i|r,Cn=s+t}else Sn=1<<s|n<<i|r,Cn=t}function op(t){t.return!==null&&(Mr(t,1),x_(t,1,0))}function ap(t){for(;t===Zl;)Zl=Li[--Vi],Li[Vi]=null,eu=Li[--Vi],Li[Vi]=null;for(;t===Jr;)Jr=Nt[--Ot],Nt[Ot]=null,Cn=Nt[--Ot],Nt[Ot]=null,Sn=Nt[--Ot],Nt[Ot]=null}var Tt=null,Et=null,de=!1,Bt=null;function R_(t,e){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,Et=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Sn,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,Et=null,!0):!1;default:return!1}}function Rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pd(t){if(de){var e=Et;if(e){var n=e;if(!Bg(t,e)){if(Rd(t))throw Error(x(418));e=ur(n.nextSibling);var r=Tt;e&&Bg(t,e)?R_(r,n):(t.flags=t.flags&-4097|2,de=!1,Tt=t)}}else{if(Rd(t))throw Error(x(418));t.flags=t.flags&-4097|2,de=!1,Tt=t}}}function Wg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function Za(t){if(t!==Tt)return!1;if(!de)return Wg(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cd(t.type,t.memoizedProps)),e&&(e=Et)){if(Rd(t))throw P_(),Error(x(418));for(;e;)R_(t,e),e=ur(e.nextSibling)}if(Wg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=Tt?ur(t.stateNode.nextSibling):null;return!0}function P_(){for(var t=Et;t;)t=ur(t.nextSibling)}function rs(){Et=Tt=null,de=!1}function lp(t){Bt===null?Bt=[t]:Bt.push(t)}var AC=Fn.ReactCurrentBatchConfig;function Ut(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var tu=Rr(null),nu=null,$i=null,up=null;function cp(){up=$i=nu=null}function hp(t){var e=tu.current;ue(tu),t._currentValue=e}function Nd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qi(t,e){nu=t,up=$i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(up!==t)if(t={context:t,memoizedValue:e,next:null},$i===null){if(nu===null)throw Error(x(308));$i=t,nu.dependencies={lanes:0,firstContext:t}}else $i=$i.next=t;return e}var jr=null;function dp(t){jr===null?jr=[t]:jr.push(t)}function N_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,dp(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yn=!1;function fp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,dp(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function Il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jf(t,n)}}function Hg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,r){var i=t.updateQueue;Yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(g,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(g,h,d):v,d==null)break e;h=me({},h,d);break e;case 2:Yn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ei|=o,t.lanes=o,t.memoizedState=h}}function Gg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var D_=new N0.Component().refs;function Od(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ju={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=dr(t),s=Rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(Ht(e,t,i,r),Il(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=dr(t),s=Rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(Ht(e,t,i,r),Il(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=dr(t),i=Rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=cr(t,i,r),e!==null&&(Ht(e,t,r,n),Il(e,t,r))}};function qg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,r)||!Vo(i,s):!0}function b_(t,e,n){var r=!1,i=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=mt(e)?Xr:nt.current,r=e.contextTypes,s=(r=r!=null)?ns(t,i):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ju,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ju.enqueueReplaceState(e,e.state,null)}function Dd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=D_,fp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=mt(e)?Xr:nt.current,i.context=ns(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Od(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ju.enqueueReplaceState(i,i.state,null),ru(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===D_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yg(t){var e=t._init;return e(t._payload)}function M_(t){function e(m,f){if(t){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=fr(m,f),m.index=0,m.sibling=null,m}function s(m,f,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,y,E){return f===null||f.tag!==6?(f=Ih(y,m.mode,E),f.return=m,f):(f=i(f,y),f.return=m,f)}function l(m,f,y,E){var T=y.type;return T===Pi?c(m,f,y.props.children,E,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qn&&Yg(T)===f.type)?(E=i(f,y.props),E.ref=Hs(m,f,y),E.return=m,E):(E=xl(y.type,y.key,y.props,null,m.mode,E),E.ref=Hs(m,f,y),E.return=m,E)}function u(m,f,y,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Th(y,m.mode,E),f.return=m,f):(f=i(f,y.children||[]),f.return=m,f)}function c(m,f,y,E,T){return f===null||f.tag!==7?(f=qr(y,m.mode,E,T),f.return=m,f):(f=i(f,y),f.return=m,f)}function h(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ih(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ba:return y=xl(f.type,f.key,f.props,null,m.mode,y),y.ref=Hs(m,null,f),y.return=m,y;case Ri:return f=Th(f,m.mode,y),f.return=m,f;case Qn:var E=f._init;return h(m,E(f._payload),y)}if(Zs(f)||Fs(f))return f=qr(f,m.mode,y,null),f.return=m,f;el(m,f)}return null}function d(m,f,y,E){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(m,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ba:return y.key===T?l(m,f,y,E):null;case Ri:return y.key===T?u(m,f,y,E):null;case Qn:return T=y._init,d(m,f,T(y._payload),E)}if(Zs(y)||Fs(y))return T!==null?null:c(m,f,y,E,null);el(m,y)}return null}function g(m,f,y,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(y)||null,a(f,m,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ba:return m=m.get(E.key===null?y:E.key)||null,l(f,m,E,T);case Ri:return m=m.get(E.key===null?y:E.key)||null,u(f,m,E,T);case Qn:var A=E._init;return g(m,f,y,A(E._payload),T)}if(Zs(E)||Fs(E))return m=m.get(y)||null,c(f,m,E,T,null);el(f,E)}return null}function v(m,f,y,E){for(var T=null,A=null,C=f,O=f=0,H=null;C!==null&&O<y.length;O++){C.index>O?(H=C,C=null):H=C.sibling;var R=d(m,C,y[O],E);if(R===null){C===null&&(C=H);break}t&&C&&R.alternate===null&&e(m,C),f=s(R,f,O),A===null?T=R:A.sibling=R,A=R,C=H}if(O===y.length)return n(m,C),de&&Mr(m,O),T;if(C===null){for(;O<y.length;O++)C=h(m,y[O],E),C!==null&&(f=s(C,f,O),A===null?T=C:A.sibling=C,A=C);return de&&Mr(m,O),T}for(C=r(m,C);O<y.length;O++)H=g(C,m,O,y[O],E),H!==null&&(t&&H.alternate!==null&&C.delete(H.key===null?O:H.key),f=s(H,f,O),A===null?T=H:A.sibling=H,A=H);return t&&C.forEach(function(ee){return e(m,ee)}),de&&Mr(m,O),T}function _(m,f,y,E){var T=Fs(y);if(typeof T!="function")throw Error(x(150));if(y=T.call(y),y==null)throw Error(x(151));for(var A=T=null,C=f,O=f=0,H=null,R=y.next();C!==null&&!R.done;O++,R=y.next()){C.index>O?(H=C,C=null):H=C.sibling;var ee=d(m,C,R.value,E);if(ee===null){C===null&&(C=H);break}t&&C&&ee.alternate===null&&e(m,C),f=s(ee,f,O),A===null?T=ee:A.sibling=ee,A=ee,C=H}if(R.done)return n(m,C),de&&Mr(m,O),T;if(C===null){for(;!R.done;O++,R=y.next())R=h(m,R.value,E),R!==null&&(f=s(R,f,O),A===null?T=R:A.sibling=R,A=R);return de&&Mr(m,O),T}for(C=r(m,C);!R.done;O++,R=y.next())R=g(C,m,O,R.value,E),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?O:R.key),f=s(R,f,O),A===null?T=R:A.sibling=R,A=R);return t&&C.forEach(function(yt){return e(m,yt)}),de&&Mr(m,O),T}function I(m,f,y,E){if(typeof y=="object"&&y!==null&&y.type===Pi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ba:e:{for(var T=y.key,A=f;A!==null;){if(A.key===T){if(T=y.type,T===Pi){if(A.tag===7){n(m,A.sibling),f=i(A,y.props.children),f.return=m,m=f;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qn&&Yg(T)===A.type){n(m,A.sibling),f=i(A,y.props),f.ref=Hs(m,A,y),f.return=m,m=f;break e}n(m,A);break}else e(m,A);A=A.sibling}y.type===Pi?(f=qr(y.props.children,m.mode,E,y.key),f.return=m,m=f):(E=xl(y.type,y.key,y.props,null,m.mode,E),E.ref=Hs(m,f,y),E.return=m,m=E)}return o(m);case Ri:e:{for(A=y.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(m,f.sibling),f=i(f,y.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Th(y,m.mode,E),f.return=m,m=f}return o(m);case Qn:return A=y._init,I(m,f,A(y._payload),E)}if(Zs(y))return v(m,f,y,E);if(Fs(y))return _(m,f,y,E);el(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,y),f.return=m,m=f):(n(m,f),f=Ih(y,m.mode,E),f.return=m,m=f),o(m)):n(m,f)}return I}var is=M_(!0),L_=M_(!1),va={},un=Rr(va),Uo=Rr(va),zo=Rr(va);function Fr(t){if(t===va)throw Error(x(174));return t}function pp(t,e){switch(ie(zo,e),ie(Uo,t),ie(un,va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hd(e,t)}ue(un),ie(un,e)}function ss(){ue(un),ue(Uo),ue(zo)}function V_(t){Fr(zo.current);var e=Fr(un.current),n=hd(e,t.type);e!==n&&(ie(Uo,t),ie(un,n))}function mp(t){Uo.current===t&&(ue(un),ue(Uo))}var fe=Rr(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gh=[];function gp(){for(var t=0;t<gh.length;t++)gh[t]._workInProgressVersionPrimary=null;gh.length=0}var Tl=Fn.ReactCurrentDispatcher,yh=Fn.ReactCurrentBatchConfig,Zr=0,pe=null,ke=null,Ne=null,su=!1,yo=!1,Bo=0,kC=0;function He(){throw Error(x(321))}function yp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function vp(t,e,n,r,i,s){if(Zr=s,pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tl.current=t===null||t.memoizedState===null?NC:OC,t=n(r,i),yo){s=0;do{if(yo=!1,Bo=0,25<=s)throw Error(x(301));s+=1,Ne=ke=null,e.updateQueue=null,Tl.current=DC,t=n(r,i)}while(yo)}if(Tl.current=ou,e=ke!==null&&ke.next!==null,Zr=0,Ne=ke=pe=null,su=!1,e)throw Error(x(300));return t}function _p(){var t=Bo!==0;return Bo=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?pe.memoizedState=Ne=t:Ne=Ne.next=t,Ne}function Vt(){if(ke===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Ne===null?pe.memoizedState:Ne.next;if(e!==null)Ne=e,ke=t;else{if(t===null)throw Error(x(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ne===null?pe.memoizedState=Ne=t:Ne=Ne.next=t}return Ne}function Wo(t,e){return typeof e=="function"?e(t):e}function vh(t){var e=Vt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Zr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,pe.lanes|=c,ei|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Qt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,pe.lanes|=s,ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _h(t){var e=Vt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qt(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $_(){}function j_(t,e){var n=pe,r=Vt(),i=e(),s=!Qt(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,wp(z_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Ho(9,U_.bind(null,n,r,i,e),void 0,null),be===null)throw Error(x(349));Zr&30||F_(n,e,i)}return i}function F_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function U_(t,e,n,r){e.value=n,e.getSnapshot=r,B_(e)&&W_(t)}function z_(t,e,n){return n(function(){B_(e)&&W_(t)})}function B_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function W_(t){var e=bn(t,1);e!==null&&Ht(e,t,1,-1)}function Kg(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},e.queue=t,t=t.dispatch=PC.bind(null,pe,t),[e.memoizedState,t]}function Ho(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function H_(){return Vt().memoizedState}function Sl(t,e,n,r){var i=tn();pe.flags|=t,i.memoizedState=Ho(1|e,n,void 0,r===void 0?null:r)}function Zu(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&yp(r,o.deps)){i.memoizedState=Ho(e,n,s,r);return}}pe.flags|=t,i.memoizedState=Ho(1|e,n,s,r)}function Xg(t,e){return Sl(8390656,8,t,e)}function wp(t,e){return Zu(2048,8,t,e)}function G_(t,e){return Zu(4,2,t,e)}function q_(t,e){return Zu(4,4,t,e)}function Q_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Y_(t,e,n){return n=n!=null?n.concat([t]):null,Zu(4,4,Q_.bind(null,e,t),n)}function Ep(){}function K_(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function X_(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function J_(t,e,n){return Zr&21?(Qt(n,e)||(n=t_(),pe.lanes|=n,ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function xC(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=yh.transition;yh.transition={};try{t(!1),e()}finally{ne=n,yh.transition=r}}function Z_(){return Vt().memoizedState}function RC(t,e,n){var r=dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ew(t))tw(e,n);else if(n=N_(t,e,n,r),n!==null){var i=at();Ht(n,t,r,i),nw(n,e,r)}}function PC(t,e,n){var r=dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ew(t))tw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Qt(a,o)){var l=e.interleaved;l===null?(i.next=i,dp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=N_(t,e,i,r),n!==null&&(i=at(),Ht(n,t,r,i),nw(n,e,r))}}function ew(t){var e=t.alternate;return t===pe||e!==null&&e===pe}function tw(t,e){yo=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jf(t,n)}}var ou={readContext:Lt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},NC={readContext:Lt,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:Xg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4194308,4,Q_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sl(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=RC.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:Kg,useDebugValue:Ep,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=Kg(!1),e=t[0];return t=xC.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=pe,i=tn();if(de){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),be===null)throw Error(x(349));Zr&30||F_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xg(z_.bind(null,r,s,t),[t]),r.flags|=2048,Ho(9,U_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=tn(),e=be.identifierPrefix;if(de){var n=Cn,r=Sn;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OC={readContext:Lt,useCallback:K_,useContext:Lt,useEffect:wp,useImperativeHandle:Y_,useInsertionEffect:G_,useLayoutEffect:q_,useMemo:X_,useReducer:vh,useRef:H_,useState:function(){return vh(Wo)},useDebugValue:Ep,useDeferredValue:function(t){var e=Vt();return J_(e,ke.memoizedState,t)},useTransition:function(){var t=vh(Wo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:$_,useSyncExternalStore:j_,useId:Z_,unstable_isNewReconciler:!1},DC={readContext:Lt,useCallback:K_,useContext:Lt,useEffect:wp,useImperativeHandle:Y_,useInsertionEffect:G_,useLayoutEffect:q_,useMemo:X_,useReducer:_h,useRef:H_,useState:function(){return _h(Wo)},useDebugValue:Ep,useDeferredValue:function(t){var e=Vt();return ke===null?e.memoizedState=t:J_(e,ke.memoizedState,t)},useTransition:function(){var t=_h(Wo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:$_,useSyncExternalStore:j_,useId:Z_,unstable_isNewReconciler:!1};function os(t,e){try{var n="",r=e;do n+=aS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bC=typeof WeakMap=="function"?WeakMap:Map;function rw(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lu||(lu=!0,Wd=r),bd(t,e)},n}function iw(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bd(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new bC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=QC.bind(null,t,e,n),e.then(t,t))}function Zg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ey(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var MC=Fn.ReactCurrentOwner,ft=!1;function st(t,e,n,r){e.child=t===null?L_(e,null,n,r):is(e,t.child,n,r)}function ty(t,e,n,r,i){n=n.render;var s=e.ref;return Qi(e,i),r=vp(t,e,n,r,s,i),n=_p(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(de&&n&&op(e),e.flags|=1,st(t,e,r,i),e.child)}function ny(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sw(t,e,s,r,i)):(t=xl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function sw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Vo(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return Md(t,e,n,r,i)}function ow(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Fi,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(Fi,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(Fi,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(Fi,wt),wt|=r;return st(t,e,i,n),e.child}function aw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Md(t,e,n,r,i){var s=mt(n)?Xr:nt.current;return s=ns(e,s),Qi(e,i),n=vp(t,e,n,r,s,i),r=_p(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(de&&r&&op(e),e.flags|=1,st(t,e,n,i),e.child)}function ry(t,e,n,r,i){if(mt(n)){var s=!0;Jl(e)}else s=!1;if(Qi(e,i),e.stateNode===null)Cl(t,e),b_(e,n,r),Dd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=mt(n)?Xr:nt.current,u=ns(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Qg(e,o,r,u),Yn=!1;var d=e.memoizedState;o.state=d,ru(e,r,o,i),l=e.memoizedState,a!==r||d!==l||pt.current||Yn?(typeof c=="function"&&(Od(e,n,c,r),l=e.memoizedState),(a=Yn||qg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,O_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ut(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Lt(l):(l=mt(n)?Xr:nt.current,l=ns(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Qg(e,o,r,l),Yn=!1,d=e.memoizedState,o.state=d,ru(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||pt.current||Yn?(typeof g=="function"&&(Od(e,n,g,r),v=e.memoizedState),(u=Yn||qg(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Ld(t,e,n,r,s,i)}function Ld(t,e,n,r,i,s){aw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zg(e,n,!1),Mn(t,e,s);r=e.stateNode,MC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=is(e,t.child,null,s),e.child=is(e,null,a,s)):st(t,e,a,s),e.memoizedState=r.state,i&&zg(e,n,!0),e.child}function lw(t){var e=t.stateNode;e.pendingContext?Ug(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ug(t,e.context,!1),pp(t,e.containerInfo)}function iy(t,e,n,r,i){return rs(),lp(i),e.flags|=256,st(t,e,n,r),e.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function $d(t){return{baseLanes:t,cachePool:null,transitions:null}}function uw(t,e,n){var r=e.pendingProps,i=fe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(fe,i&1),t===null)return Pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nc(o,r,0,null),t=qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$d(n),e.memoizedState=Vd,t):Ip(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return LC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=fr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$d(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vd,r}return s=t.child,t=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ip(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,n,r){return r!==null&&lp(r),is(e,t.child,null,n),t=Ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wh(Error(x(422))),tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nc({mode:"visible",children:r.children},i,0,null),s=qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&is(e,t.child,null,o),e.child.memoizedState=$d(o),e.memoizedState=Vd,s);if(!(e.mode&1))return tl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=wh(s,r,void 0),tl(t,e,o,r)}if(a=(o&t.childLanes)!==0,ft||a){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),Ht(r,t,i,-1))}return xp(),r=wh(Error(x(421))),tl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=YC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=ur(i.nextSibling),Tt=e,de=!0,Bt=null,t!==null&&(Nt[Ot++]=Sn,Nt[Ot++]=Cn,Nt[Ot++]=Jr,Sn=t.id,Cn=t.overflow,Jr=e),e=Ip(e,r.children),e.flags|=4096,e)}function sy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nd(t.return,e,n)}function Eh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function cw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sy(t,n,e);else if(t.tag===19)sy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Eh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Eh(e,!0,n,null,s);break;case"together":Eh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VC(t,e,n){switch(e.tag){case 3:lw(e),rs();break;case 5:V_(e);break;case 1:mt(e.type)&&Jl(e);break;case 4:pp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(tu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(fe,fe.current&1),e.flags|=128,null):n&e.child.childLanes?uw(t,e,n):(ie(fe,fe.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);ie(fe,fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return cw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(fe,fe.current),r)break;return null;case 22:case 23:return e.lanes=0,ow(t,e,n)}return Mn(t,e,n)}var hw,jd,dw,fw;hw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jd=function(){};dw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fr(un.current);var s=null;switch(n){case"input":i=ad(t,i),r=ad(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=cd(t,i),r=cd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Kl)}dd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Po.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Po.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Gs(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $C(t,e,n){var r=e.pendingProps;switch(ap(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return mt(e.type)&&Xl(),Ge(e),null;case 3:return r=e.stateNode,ss(),ue(pt),ue(nt),gp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bt!==null&&(qd(Bt),Bt=null))),jd(t,e),Ge(e),null;case 5:mp(e);var i=Fr(zo.current);if(n=e.type,t!==null&&e.stateNode!=null)dw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Ge(e),null}if(t=Fr(un.current),Za(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rn]=e,r[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<to.length;i++)se(to[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":pg(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":gg(r,s),se("invalid",r)}dd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ja(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ja(r.textContent,a,t),i=["children",""+a]):Po.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":Wa(r),mg(r,s,!0);break;case"textarea":Wa(r),yg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Kl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=F0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rn]=e,t[Fo]=r,hw(t,e,!1,!1),e.stateNode=t;e:{switch(o=fd(n,r),n){case"dialog":se("cancel",t),se("close",t),i=r;break;case"iframe":case"object":case"embed":se("load",t),i=r;break;case"video":case"audio":for(i=0;i<to.length;i++)se(to[i],t);i=r;break;case"source":se("error",t),i=r;break;case"img":case"image":case"link":se("error",t),se("load",t),i=r;break;case"details":se("toggle",t),i=r;break;case"input":pg(t,r),i=ad(t,r),se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),se("invalid",t);break;case"textarea":gg(t,r),i=cd(t,r),se("invalid",t);break;default:i=r}dd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?B0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&U0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&No(t,l):typeof l=="number"&&No(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Po.hasOwnProperty(s)?l!=null&&s==="onScroll"&&se("scroll",t):l!=null&&Gf(t,s,l,o))}switch(n){case"input":Wa(t),mg(t,r,!1);break;case"textarea":Wa(t),yg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Wi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Wi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)fw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Fr(zo.current),Fr(un.current),Za(e)){if(r=e.stateNode,n=e.memoizedProps,r[rn]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:Ja(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rn]=e,e.stateNode=r}return Ge(e),null;case 13:if(ue(fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&Et!==null&&e.mode&1&&!(e.flags&128))P_(),rs(),e.flags|=98560,s=!1;else if(s=Za(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[rn]=e}else rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else Bt!==null&&(qd(Bt),Bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||fe.current&1?xe===0&&(xe=3):xp())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return ss(),jd(t,e),t===null&&$o(e.stateNode.containerInfo),Ge(e),null;case 10:return hp(e.type._context),Ge(e),null;case 17:return mt(e.type)&&Xl(),Ge(e),null;case 19:if(ue(fe),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Gs(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,Gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>as&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return Ge(e),null}else 2*we()-s.renderingStartTime>as&&n!==1073741824&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=fe.current,ie(fe,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return kp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function jC(t,e){switch(ap(e),e.tag){case 1:return mt(e.type)&&Xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ss(),ue(pt),ue(nt),gp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mp(e),null;case 13:if(ue(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(fe),null;case 4:return ss(),null;case 10:return hp(e.type._context),null;case 22:case 23:return kp(),null;case 24:return null;default:return null}}var nl=!1,Ke=!1,FC=typeof WeakSet=="function"?WeakSet:Set,b=null;function ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function Fd(t,e,n){try{n()}catch(r){ve(t,e,r)}}var oy=!1;function UC(t,e){if(Td=ql,t=y_(),sp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sd={focusedElem:t,selectionRange:n},ql=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,I=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ut(e.type,_),I);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(E){ve(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return v=oy,oy=!1,v}function vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Fd(e,n,s)}i=i.next}while(i!==r)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ud(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pw(t){var e=t.alternate;e!==null&&(t.alternate=null,pw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[rn],delete e[Fo],delete e[kd],delete e[TC],delete e[SC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mw(t){return t.tag===5||t.tag===3||t.tag===4}function ay(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kl));else if(r!==4&&(t=t.child,t!==null))for(zd(t,e,n),t=t.sibling;t!==null;)zd(t,e,n),t=t.sibling}function Bd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bd(t,e,n),t=t.sibling;t!==null;)Bd(t,e,n),t=t.sibling}var $e=null,zt=!1;function Hn(t,e,n){for(n=n.child;n!==null;)gw(t,e,n),n=n.sibling}function gw(t,e,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Gu,n)}catch{}switch(n.tag){case 5:Ke||ji(n,e);case 6:var r=$e,i=zt;$e=null,Hn(t,e,n),$e=r,zt=i,$e!==null&&(zt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(zt?(t=$e,n=n.stateNode,t.nodeType===8?ph(t.parentNode,n):t.nodeType===1&&ph(t,n),Mo(t)):ph($e,n.stateNode));break;case 4:r=$e,i=zt,$e=n.stateNode.containerInfo,zt=!0,Hn(t,e,n),$e=r,zt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fd(n,e,o),i=i.next}while(i!==r)}Hn(t,e,n);break;case 1:if(!Ke&&(ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,e,a)}Hn(t,e,n);break;case 21:Hn(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,Hn(t,e,n),Ke=r):Hn(t,e,n);break;default:Hn(t,e,n)}}function ly(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new FC),e.forEach(function(r){var i=KC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$e=a.stateNode,zt=!1;break e;case 3:$e=a.stateNode.containerInfo,zt=!0;break e;case 4:$e=a.stateNode.containerInfo,zt=!0;break e}a=a.return}if($e===null)throw Error(x(160));gw(s,o,i),$e=null,zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yw(e,t),e=e.sibling}function yw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),en(t),r&4){try{vo(3,t,t.return),ec(3,t)}catch(_){ve(t,t.return,_)}try{vo(5,t,t.return)}catch(_){ve(t,t.return,_)}}break;case 1:Ft(e,t),en(t),r&512&&n!==null&&ji(n,n.return);break;case 5:if(Ft(e,t),en(t),r&512&&n!==null&&ji(n,n.return),t.flags&32){var i=t.stateNode;try{No(i,"")}catch(_){ve(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$0(i,s),fd(a,o);var u=fd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?B0(i,h):c==="dangerouslySetInnerHTML"?U0(i,h):c==="children"?No(i,h):Gf(i,c,h,u)}switch(a){case"input":ld(i,s);break;case"textarea":j0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Wi(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Wi(i,!!s.multiple,s.defaultValue,!0):Wi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fo]=s}catch(_){ve(t,t.return,_)}}break;case 6:if(Ft(e,t),en(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ve(t,t.return,_)}}break;case 3:if(Ft(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(_){ve(t,t.return,_)}break;case 4:Ft(e,t),en(t);break;case 13:Ft(e,t),en(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cp=we())),r&4&&ly(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(u=Ke)||c,Ft(e,t),Ke=u):Ft(e,t),en(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(b=t,c=t.child;c!==null;){for(h=b=c;b!==null;){switch(d=b,g=d.child,d.tag){case 0:case 11:case 14:case 15:vo(4,d,d.return);break;case 1:ji(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){ve(r,n,_)}}break;case 5:ji(d,d.return);break;case 22:if(d.memoizedState!==null){cy(h);continue}}g!==null?(g.return=d,b=g):cy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=z0("display",o))}catch(_){ve(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){ve(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ft(e,t),en(t),r&4&&ly(t);break;case 21:break;default:Ft(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mw(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(No(i,""),r.flags&=-33);var s=ay(t);Bd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ay(t);zd(t,a,o);break;default:throw Error(x(161))}}catch(l){ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zC(t,e,n){b=t,vw(t)}function vw(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||nl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ke;a=nl;var u=Ke;if(nl=o,(Ke=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?hy(i):l!==null?(l.return=o,b=l):hy(i);for(;s!==null;)b=s,vw(s),s=s.sibling;b=i,nl=a,Ke=u}uy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):uy(t)}}function uy(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ke||ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Mo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Ke||e.flags&512&&Ud(e)}catch(d){ve(e,e.return,d)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function cy(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function hy(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(l){ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ve(e,i,l)}}var s=e.return;try{Ud(e)}catch(l){ve(e,s,l)}break;case 5:var o=e.return;try{Ud(e)}catch(l){ve(e,o,l)}}}catch(l){ve(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var BC=Math.ceil,au=Fn.ReactCurrentDispatcher,Tp=Fn.ReactCurrentOwner,Mt=Fn.ReactCurrentBatchConfig,J=0,be=null,Ce=null,ze=0,wt=0,Fi=Rr(0),xe=0,Go=null,ei=0,tc=0,Sp=0,_o=null,ht=null,Cp=0,as=1/0,En=null,lu=!1,Wd=null,hr=null,rl=!1,rr=null,uu=0,wo=0,Hd=null,Al=-1,kl=0;function at(){return J&6?we():Al!==-1?Al:Al=we()}function dr(t){return t.mode&1?J&2&&ze!==0?ze&-ze:AC.transition!==null?(kl===0&&(kl=t_()),kl):(t=ne,t!==0||(t=window.event,t=t===void 0?16:l_(t.type)),t):1}function Ht(t,e,n,r){if(50<wo)throw wo=0,Hd=null,Error(x(185));ma(t,n,r),(!(J&2)||t!==be)&&(t===be&&(!(J&2)&&(tc|=n),xe===4&&Xn(t,ze)),gt(t,r),n===1&&J===0&&!(e.mode&1)&&(as=we()+500,Xu&&Pr()))}function gt(t,e){var n=t.callbackNode;AS(t,e);var r=Gl(t,t===be?ze:0);if(r===0)n!==null&&wg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wg(n),e===1)t.tag===0?CC(dy.bind(null,t)):k_(dy.bind(null,t)),EC(function(){!(J&6)&&Pr()}),n=null;else{switch(n_(r)){case 1:n=Xf;break;case 4:n=Z0;break;case 16:n=Hl;break;case 536870912:n=e_;break;default:n=Hl}n=Aw(n,_w.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _w(t,e){if(Al=-1,kl=0,J&6)throw Error(x(327));var n=t.callbackNode;if(Yi()&&t.callbackNode!==n)return null;var r=Gl(t,t===be?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cu(t,r);else{e=r;var i=J;J|=2;var s=Ew();(be!==t||ze!==e)&&(En=null,as=we()+500,Gr(t,e));do try{GC();break}catch(a){ww(t,a)}while(1);cp(),au.current=s,J=i,Ce!==null?e=0:(be=null,ze=0,e=xe)}if(e!==0){if(e===2&&(i=vd(t),i!==0&&(r=i,e=Gd(t,i))),e===1)throw n=Go,Gr(t,0),Xn(t,r),gt(t,we()),n;if(e===6)Xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!WC(i)&&(e=cu(t,r),e===2&&(s=vd(t),s!==0&&(r=s,e=Gd(t,s))),e===1))throw n=Go,Gr(t,0),Xn(t,r),gt(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Lr(t,ht,En);break;case 3:if(Xn(t,r),(r&130023424)===r&&(e=Cp+500-we(),10<e)){if(Gl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ad(Lr.bind(null,t,ht,En),e);break}Lr(t,ht,En);break;case 4:if(Xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*BC(r/1960))-r,10<r){t.timeoutHandle=Ad(Lr.bind(null,t,ht,En),r);break}Lr(t,ht,En);break;case 5:Lr(t,ht,En);break;default:throw Error(x(329))}}}return gt(t,we()),t.callbackNode===n?_w.bind(null,t):null}function Gd(t,e){var n=_o;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=cu(t,e),t!==2&&(e=ht,ht=n,e!==null&&qd(e)),t}function qd(t){ht===null?ht=t:ht.push.apply(ht,t)}function WC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~Sp,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wt(e),r=1<<n;t[n]=-1,e&=~r}}function dy(t){if(J&6)throw Error(x(327));Yi();var e=Gl(t,0);if(!(e&1))return gt(t,we()),null;var n=cu(t,e);if(t.tag!==0&&n===2){var r=vd(t);r!==0&&(e=r,n=Gd(t,r))}if(n===1)throw n=Go,Gr(t,0),Xn(t,e),gt(t,we()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,ht,En),gt(t,we()),null}function Ap(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(as=we()+500,Xu&&Pr())}}function ti(t){rr!==null&&rr.tag===0&&!(J&6)&&Yi();var e=J;J|=1;var n=Mt.transition,r=ne;try{if(Mt.transition=null,ne=1,t)return t()}finally{ne=r,Mt.transition=n,J=e,!(J&6)&&Pr()}}function kp(){wt=Fi.current,ue(Fi)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wC(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(ap(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xl();break;case 3:ss(),ue(pt),ue(nt),gp();break;case 5:mp(r);break;case 4:ss();break;case 13:ue(fe);break;case 19:ue(fe);break;case 10:hp(r.type._context);break;case 22:case 23:kp()}n=n.return}if(be=t,Ce=t=fr(t.current,null),ze=wt=e,xe=0,Go=null,Sp=tc=ei=0,ht=_o=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}jr=null}return t}function ww(t,e){do{var n=Ce;try{if(cp(),Tl.current=ou,su){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}su=!1}if(Zr=0,Ne=ke=pe=null,yo=!1,Bo=0,Tp.current=null,n===null||n.return===null){xe=1,Go=e,Ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Zg(o);if(g!==null){g.flags&=-257,ey(g,o,a,s,e),g.mode&1&&Jg(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Jg(s,u,e),xp();break e}l=Error(x(426))}}else if(de&&a.mode&1){var I=Zg(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),ey(I,o,a,s,e),lp(os(l,a));break e}}s=l=os(l,a),xe!==4&&(xe=2),_o===null?_o=[s]:_o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=rw(s,l,e);Hg(s,m);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(hr===null||!hr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=iw(s,a,e);Hg(s,E);break e}}s=s.return}while(s!==null)}Tw(n)}catch(T){e=T,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function Ew(){var t=au.current;return au.current=ou,t===null?ou:t}function xp(){(xe===0||xe===3||xe===2)&&(xe=4),be===null||!(ei&268435455)&&!(tc&268435455)||Xn(be,ze)}function cu(t,e){var n=J;J|=2;var r=Ew();(be!==t||ze!==e)&&(En=null,Gr(t,e));do try{HC();break}catch(i){ww(t,i)}while(1);if(cp(),J=n,au.current=r,Ce!==null)throw Error(x(261));return be=null,ze=0,xe}function HC(){for(;Ce!==null;)Iw(Ce)}function GC(){for(;Ce!==null&&!yS();)Iw(Ce)}function Iw(t){var e=Cw(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?Tw(t):Ce=e,Tp.current=null}function Tw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jC(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Ce=null;return}}else if(n=$C(n,e,wt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);xe===0&&(xe=5)}function Lr(t,e,n){var r=ne,i=Mt.transition;try{Mt.transition=null,ne=1,qC(t,e,n,r)}finally{Mt.transition=i,ne=r}return null}function qC(t,e,n,r){do Yi();while(rr!==null);if(J&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kS(t,s),t===be&&(Ce=be=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,Aw(Hl,function(){return Yi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=ne;ne=1;var a=J;J|=4,Tp.current=null,UC(t,n),yw(n,t),fC(Sd),ql=!!Td,Sd=Td=null,t.current=n,zC(n),vS(),J=a,ne=o,Mt.transition=s}else t.current=n;if(rl&&(rl=!1,rr=t,uu=i),s=t.pendingLanes,s===0&&(hr=null),ES(n.stateNode),gt(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lu)throw lu=!1,t=Wd,Wd=null,t;return uu&1&&t.tag!==0&&Yi(),s=t.pendingLanes,s&1?t===Hd?wo++:(wo=0,Hd=t):wo=0,Pr(),null}function Yi(){if(rr!==null){var t=n_(uu),e=Mt.transition,n=ne;try{if(Mt.transition=null,ne=16>t?16:t,rr===null)var r=!1;else{if(t=rr,rr=null,uu=0,J&6)throw Error(x(331));var i=J;for(J|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:vo(8,c,s)}var h=c.child;if(h!==null)h.return=c,b=h;else for(;b!==null;){c=b;var d=c.sibling,g=c.return;if(pw(c),c===u){b=null;break}if(d!==null){d.return=g,b=d;break}b=g}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var I=_.sibling;_.sibling=null,_=I}while(_!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,b=m;break e}b=s.return}}var f=t.current;for(b=f;b!==null;){o=b;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,b=y;else e:for(o=f;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ec(9,a)}}catch(T){ve(a,a.return,T)}if(a===o){b=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,b=E;break e}b=a.return}}if(J=i,Pr(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Gu,t)}catch{}r=!0}return r}finally{ne=n,Mt.transition=e}}return!1}function fy(t,e,n){e=os(n,e),e=rw(t,e,1),t=cr(t,e,1),e=at(),t!==null&&(ma(t,1,e),gt(t,e))}function ve(t,e,n){if(t.tag===3)fy(t,t,n);else for(;e!==null;){if(e.tag===3){fy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=os(n,t),t=iw(e,t,1),e=cr(e,t,1),t=at(),e!==null&&(ma(e,1,t),gt(e,t));break}}e=e.return}}function QC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(ze&n)===n&&(xe===4||xe===3&&(ze&130023424)===ze&&500>we()-Cp?Gr(t,0):Sp|=n),gt(t,e)}function Sw(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=at();t=bn(t,e),t!==null&&(ma(t,e,n),gt(t,n))}function YC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sw(t,n)}function KC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Sw(t,n)}var Cw;Cw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,VC(t,e,n);ft=!!(t.flags&131072)}else ft=!1,de&&e.flags&1048576&&x_(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Cl(t,e),t=e.pendingProps;var i=ns(e,nt.current);Qi(e,n),i=vp(null,e,r,t,i,n);var s=_p();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,Jl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fp(e),i.updater=Ju,e.stateNode=i,i._reactInternals=e,Dd(e,r,t,n),e=Ld(null,e,r,!0,s,n)):(e.tag=0,de&&s&&op(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Cl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JC(r),t=Ut(r,t),i){case 0:e=Md(null,e,r,t,n);break e;case 1:e=ry(null,e,r,t,n);break e;case 11:e=ty(null,e,r,t,n);break e;case 14:e=ny(null,e,r,Ut(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Md(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),ry(t,e,r,i,n);case 3:e:{if(lw(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,O_(t,e),ru(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=os(Error(x(423)),e),e=iy(t,e,r,n,i);break e}else if(r!==i){i=os(Error(x(424)),e),e=iy(t,e,r,n,i);break e}else for(Et=ur(e.stateNode.containerInfo.firstChild),Tt=e,de=!0,Bt=null,n=L_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rs(),r===i){e=Mn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return V_(e),t===null&&Pd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cd(r,i)?o=null:s!==null&&Cd(r,s)&&(e.flags|=32),aw(t,e),st(t,e,o,n),e.child;case 6:return t===null&&Pd(e),null;case 13:return uw(t,e,n);case 4:return pp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=is(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),ty(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ie(tu,r._currentValue),r._currentValue=o,s!==null)if(Qt(s.value,o)){if(s.children===i.children&&!pt.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Rn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qi(e,n),i=Lt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),ny(t,e,r,i,n);case 15:return sw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Cl(t,e),e.tag=1,mt(r)?(t=!0,Jl(e)):t=!1,Qi(e,n),b_(e,r,i),Dd(e,r,i,n),Ld(null,e,r,!0,t,n);case 19:return cw(t,e,n);case 22:return ow(t,e,n)}throw Error(x(156,e.tag))};function Aw(t,e){return J0(t,e)}function XC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(t,e,n,r){return new XC(t,e,n,r)}function Rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JC(t){if(typeof t=="function")return Rp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qf)return 11;if(t===Yf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Pi:return qr(n.children,i,s,e);case qf:o=8,i|=8;break;case rd:return t=bt(12,n,e,i|2),t.elementType=rd,t.lanes=s,t;case id:return t=bt(13,n,e,i),t.elementType=id,t.lanes=s,t;case sd:return t=bt(19,n,e,i),t.elementType=sd,t.lanes=s,t;case M0:return nc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D0:o=10;break e;case b0:o=9;break e;case Qf:o=11;break e;case Yf:o=14;break e;case Qn:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qr(t,e,n,r){return t=bt(7,t,r,e),t.lanes=n,t}function nc(t,e,n,r){return t=bt(22,t,r,e),t.elementType=M0,t.lanes=n,t.stateNode={isHidden:!1},t}function Ih(t,e,n){return t=bt(6,t,null,e),t.lanes=n,t}function Th(t,e,n){return e=bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rh(0),this.expirationTimes=rh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pp(t,e,n,r,i,s,o,a,l){return t=new ZC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fp(s),t}function eA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function kw(t){if(!t)return Tr;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(mt(n))return A_(t,n,e)}return e}function xw(t,e,n,r,i,s,o,a,l){return t=Pp(n,r,!0,t,i,s,o,a,l),t.context=kw(null),n=t.current,r=at(),i=dr(n),s=Rn(r,i),s.callback=e??null,cr(n,s,i),t.current.lanes=i,ma(t,i,r),gt(t,r),t}function rc(t,e,n,r){var i=e.current,s=at(),o=dr(i);return n=kw(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(i,e,o),t!==null&&(Ht(t,i,o,s),Il(t,i,o)),o}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function py(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Np(t,e){py(t,e),(t=t.alternate)&&py(t,e)}function tA(){return null}var Rw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Op(t){this._internalRoot=t}ic.prototype.render=Op.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));rc(t,e,null,null)};ic.prototype.unmount=Op.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ti(function(){rc(null,t,null,null)}),e[Dn]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=s_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&a_(t)}};function Dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function my(){}function nA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=hu(o);s.call(u)}}var o=xw(e,r,t,0,null,!1,!1,"",my);return t._reactRootContainer=o,t[Dn]=o.current,$o(t.nodeType===8?t.parentNode:t),ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=hu(l);a.call(u)}}var l=Pp(t,0,!1,null,null,!1,!1,"",my);return t._reactRootContainer=l,t[Dn]=l.current,$o(t.nodeType===8?t.parentNode:t),ti(function(){rc(e,l,n,r)}),l}function oc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=hu(o);a.call(l)}}rc(e,o,t,i)}else o=nA(n,e,t,i,r);return hu(o)}r_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eo(e.pendingLanes);n!==0&&(Jf(e,n|1),gt(e,we()),!(J&6)&&(as=we()+500,Pr()))}break;case 13:ti(function(){var r=bn(t,1);if(r!==null){var i=at();Ht(r,t,1,i)}}),Np(t,1)}};Zf=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=at();Ht(e,t,134217728,n)}Np(t,134217728)}};i_=function(t){if(t.tag===13){var e=dr(t),n=bn(t,e);if(n!==null){var r=at();Ht(n,t,e,r)}Np(t,e)}};s_=function(){return ne};o_=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};md=function(t,e,n){switch(e){case"input":if(ld(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ku(r);if(!i)throw Error(x(90));V0(r),ld(r,i)}}}break;case"textarea":j0(t,n);break;case"select":e=n.value,e!=null&&Wi(t,!!n.multiple,e,!1)}};G0=Ap;q0=ti;var rA={usingClientEntryPoint:!1,Events:[ya,bi,Ku,W0,H0,Ap]},qs={findFiberByHostInstance:$r,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iA={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=K0(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||tA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Gu=il.inject(iA),ln=il}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rA;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dp(e))throw Error(x(200));return eA(t,e,null,n)};At.createRoot=function(t,e){if(!Dp(t))throw Error(x(299));var n=!1,r="",i=Rw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pp(t,1,!1,null,null,n,!1,r,i),t[Dn]=e.current,$o(t.nodeType===8?t.parentNode:t),new Op(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=K0(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return ti(t)};At.hydrate=function(t,e,n){if(!sc(e))throw Error(x(200));return oc(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!Dp(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Rw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xw(e,null,t,1,n??null,i,!1,s,o),t[Dn]=e.current,$o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ic(e)};At.render=function(t,e,n){if(!sc(e))throw Error(x(200));return oc(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!sc(t))throw Error(x(40));return t._reactRootContainer?(ti(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};At.unstable_batchedUpdates=Ap;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sc(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return oc(t,e,n,!1,r)};At.version="18.2.0-next-9e3b772b8-20220608";function Pw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pw)}catch(t){console.error(t)}}Pw(),x0.exports=At;var sA=x0.exports,gy=sA;td.createRoot=gy.createRoot,td.hydrateRoot=gy.hydrateRoot;var De=function(){return De=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},De.apply(this,arguments)};function bp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function qo(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function oA(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var aA=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,lA=oA(function(t){return aA.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),uA=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var c=o[u];if(!l(c))return!1;var h=e[c],d=n[c];if(s=r?r.call(i,h,d,c):void 0,s===!1||s===void 0&&h!==d)return!1}return!0};const cA=jf(uA);var oe="-ms-",Eo="-moz-",te="-webkit-",Nw="comm",ac="rule",Mp="decl",hA="@import",Ow="@keyframes",dA="@layer",fA=Math.abs,Lp=String.fromCharCode,Qd=Object.assign;function pA(t,e){return Oe(t,0)^45?(((e<<2^Oe(t,0))<<2^Oe(t,1))<<2^Oe(t,2))<<2^Oe(t,3):0}function Dw(t){return t.trim()}function In(t,e){return(t=e.exec(t))?t[0]:t}function q(t,e,n){return t.replace(e,n)}function Rl(t,e){return t.indexOf(e)}function Oe(t,e){return t.charCodeAt(e)|0}function ls(t,e,n){return t.slice(e,n)}function nn(t){return t.length}function bw(t){return t.length}function no(t,e){return e.push(t),t}function mA(t,e){return t.map(e).join("")}function yy(t,e){return t.filter(function(n){return!In(n,e)})}var lc=1,us=1,Mw=0,$t=0,Se=0,Cs="";function uc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:lc,column:us,length:o,return:"",siblings:a}}function qn(t,e){return Qd(uc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ti(t){for(;t.root;)t=qn(t.root,{children:[t]});no(t,t.siblings)}function gA(){return Se}function yA(){return Se=$t>0?Oe(Cs,--$t):0,us--,Se===10&&(us=1,lc--),Se}function Gt(){return Se=$t<Mw?Oe(Cs,$t++):0,us++,Se===10&&(us=1,lc++),Se}function Qr(){return Oe(Cs,$t)}function Pl(){return $t}function cc(t,e){return ls(Cs,t,e)}function Yd(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vA(t){return lc=us=1,Mw=nn(Cs=t),$t=0,[]}function _A(t){return Cs="",t}function Sh(t){return Dw(cc($t-1,Kd(t===91?t+2:t===40?t+1:t)))}function wA(t){for(;(Se=Qr())&&Se<33;)Gt();return Yd(t)>2||Yd(Se)>3?"":" "}function EA(t,e){for(;--e&&Gt()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return cc(t,Pl()+(e<6&&Qr()==32&&Gt()==32))}function Kd(t){for(;Gt();)switch(Se){case t:return $t;case 34:case 39:t!==34&&t!==39&&Kd(Se);break;case 40:t===41&&Kd(t);break;case 92:Gt();break}return $t}function IA(t,e){for(;Gt()&&t+Se!==47+10;)if(t+Se===42+42&&Qr()===47)break;return"/*"+cc(e,$t-1)+"*"+Lp(t===47?t:Gt())}function TA(t){for(;!Yd(Qr());)Gt();return cc(t,$t)}function SA(t){return _A(Nl("",null,null,null,[""],t=vA(t),0,[0],t))}function Nl(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,g=0,v=0,_=1,I=1,m=1,f=0,y="",E=i,T=s,A=r,C=y;I;)switch(v=f,f=Gt()){case 40:if(v!=108&&Oe(C,h-1)==58){Rl(C+=q(Sh(f),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:C+=Sh(f);break;case 9:case 10:case 13:case 32:C+=wA(v);break;case 92:C+=EA(Pl()-1,7);continue;case 47:switch(Qr()){case 42:case 47:no(CA(IA(Gt(),Pl()),e,n,l),l);break;default:C+="/"}break;case 123*_:a[u++]=nn(C)*m;case 125*_:case 59:case 0:switch(f){case 0:case 125:I=0;case 59+c:m==-1&&(C=q(C,/\f/g,"")),g>0&&nn(C)-h&&no(g>32?_y(C+";",r,n,h-1,l):_y(q(C," ","")+";",r,n,h-2,l),l);break;case 59:C+=";";default:if(no(A=vy(C,e,n,u,c,i,a,y,E=[],T=[],h,s),s),f===123)if(c===0)Nl(C,e,A,A,E,s,h,a,T);else switch(d===99&&Oe(C,3)===110?100:d){case 100:case 108:case 109:case 115:Nl(t,A,A,r&&no(vy(t,A,A,0,0,i,a,y,i,E=[],h,T),T),i,T,h,a,r?E:T);break;default:Nl(C,A,A,A,[""],T,0,a,T)}}u=c=g=0,_=m=1,y=C="",h=o;break;case 58:h=1+nn(C),g=v;default:if(_<1){if(f==123)--_;else if(f==125&&_++==0&&yA()==125)continue}switch(C+=Lp(f),f*_){case 38:m=c>0?1:(C+="\f",-1);break;case 44:a[u++]=(nn(C)-1)*m,m=1;break;case 64:Qr()===45&&(C+=Sh(Gt())),d=Qr(),c=h=nn(y=C+=TA(Pl())),f++;break;case 45:v===45&&nn(C)==2&&(_=0)}}return s}function vy(t,e,n,r,i,s,o,a,l,u,c,h){for(var d=i-1,g=i===0?s:[""],v=bw(g),_=0,I=0,m=0;_<r;++_)for(var f=0,y=ls(t,d+1,d=fA(I=o[_])),E=t;f<v;++f)(E=Dw(I>0?g[f]+" "+y:q(y,/&\f/g,g[f])))&&(l[m++]=E);return uc(t,e,n,i===0?ac:a,l,u,c,h)}function CA(t,e,n,r){return uc(t,e,n,Nw,Lp(gA()),ls(t,2,-2),0,r)}function _y(t,e,n,r,i){return uc(t,e,n,Mp,ls(t,0,r),ls(t,r+1,-1),r,i)}function Lw(t,e,n){switch(pA(t,e)){case 5103:return te+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+t+t;case 4789:return Eo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return te+t+Eo+t+oe+t+t;case 5936:switch(Oe(t,e+11)){case 114:return te+t+oe+q(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return te+t+oe+q(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return te+t+oe+q(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return te+t+oe+t+t;case 6165:return te+t+oe+"flex-"+t+t;case 5187:return te+t+q(t,/(\w+).+(:[^]+)/,te+"box-$1$2"+oe+"flex-$1$2")+t;case 5443:return te+t+oe+"flex-item-"+q(t,/flex-|-self/g,"")+(In(t,/flex-|baseline/)?"":oe+"grid-row-"+q(t,/flex-|-self/g,""))+t;case 4675:return te+t+oe+"flex-line-pack"+q(t,/align-content|flex-|-self/g,"")+t;case 5548:return te+t+oe+q(t,"shrink","negative")+t;case 5292:return te+t+oe+q(t,"basis","preferred-size")+t;case 6060:return te+"box-"+q(t,"-grow","")+te+t+oe+q(t,"grow","positive")+t;case 4554:return te+q(t,/([^-])(transform)/g,"$1"+te+"$2")+t;case 6187:return q(q(q(t,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),t,"")+t;case 5495:case 3959:return q(t,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return q(q(t,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+t+t;case 4200:if(!In(t,/flex-|baseline/))return oe+"grid-column-align"+ls(t,e)+t;break;case 2592:case 3360:return oe+q(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,In(r.props,/grid-\w+-end/)})?~Rl(t+(n=n[e].value),"span")?t:oe+q(t,"-start","")+t+oe+"grid-row-span:"+(~Rl(n,"span")?In(n,/\d+/):+In(n,/\d+/)-+In(t,/\d+/))+";":oe+q(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return In(r.props,/grid-\w+-start/)})?t:oe+q(q(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return q(t,/(.+)-inline(.+)/,te+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nn(t)-1-e>6)switch(Oe(t,e+1)){case 109:if(Oe(t,e+4)!==45)break;case 102:return q(t,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+Eo+(Oe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Rl(t,"stretch")?Lw(q(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return q(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return oe+i+":"+s+u+(o?oe+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(Oe(t,e+6)===121)return q(t,":",":"+te)+t;break;case 6444:switch(Oe(t,Oe(t,14)===45?18:11)){case 120:return q(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+te+(Oe(t,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+oe+"$2box$3")+t;case 100:return q(t,":",":"+oe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return q(t,"scroll-","scroll-snap-")+t}return t}function du(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function AA(t,e,n,r){switch(t.type){case dA:if(t.children.length)break;case hA:case Mp:return t.return=t.return||t.value;case Nw:return"";case Ow:return t.return=t.value+"{"+du(t.children,r)+"}";case ac:if(!nn(t.value=t.props.join(",")))return""}return nn(n=du(t.children,r))?t.return=t.value+"{"+n+"}":""}function kA(t){var e=bw(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function xA(t){return function(e){e.root||(e=e.return)&&t(e)}}function RA(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Mp:t.return=Lw(t.value,t.length,n);return;case Ow:return du([qn(t,{value:q(t.value,"@","@"+te)})],r);case ac:if(t.length)return mA(n=t.props,function(i){switch(In(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ti(qn(t,{props:[q(i,/:(read-\w+)/,":"+Eo+"$1")]})),Ti(qn(t,{props:[i]})),Qd(t,{props:yy(n,r)});break;case"::placeholder":Ti(qn(t,{props:[q(i,/:(plac\w+)/,":"+te+"input-$1")]})),Ti(qn(t,{props:[q(i,/:(plac\w+)/,":"+Eo+"$1")]})),Ti(qn(t,{props:[q(i,/:(plac\w+)/,oe+"input-$1")]})),Ti(qn(t,{props:[i]})),Qd(t,{props:yy(n,r)});break}return""})}}var PA={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Vp=typeof window<"u"&&"HTMLElement"in window,NA=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),OA={},hc=Object.freeze([]),hs=Object.freeze({});function Vw(t,e,n){return n===void 0&&(n=hs),t.theme!==n.theme&&t.theme||e||n.theme}var $w=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),DA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bA=/(^-|-$)/g;function wy(t){return t.replace(DA,"-").replace(bA,"")}var MA=/(a)(d)/gi,Ey=function(t){return String.fromCharCode(t+(t>25?39:97))};function Xd(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Ey(e%52)+n;return(Ey(e%52)+n).replace(MA,"$1-$2")}var Ch,Ui=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},jw=function(t){return Ui(5381,t)};function Fw(t){return Xd(jw(t)>>>0)}function LA(t){return t.displayName||t.name||"Component"}function Ah(t){return typeof t=="string"&&!0}var Uw=typeof Symbol=="function"&&Symbol.for,zw=Uw?Symbol.for("react.memo"):60115,VA=Uw?Symbol.for("react.forward_ref"):60112,$A={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},FA=((Ch={})[VA]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ch[zw]=Bw,Ch);function Iy(t){return("type"in(e=t)&&e.type.$$typeof)===zw?Bw:"$$typeof"in t?FA[t.$$typeof]:$A;var e}var UA=Object.defineProperty,zA=Object.getOwnPropertyNames,Ty=Object.getOwnPropertySymbols,BA=Object.getOwnPropertyDescriptor,WA=Object.getPrototypeOf,Sy=Object.prototype;function Ww(t,e,n){if(typeof e!="string"){if(Sy){var r=WA(e);r&&r!==Sy&&Ww(t,r,n)}var i=zA(e);Ty&&(i=i.concat(Ty(e)));for(var s=Iy(t),o=Iy(e),a=0;a<i.length;++a){var l=i[a];if(!(l in jA||n&&n[l]||o&&l in o||s&&l in s)){var u=BA(e,l);try{UA(t,l,u)}catch{}}}}return t}function ni(t){return typeof t=="function"}function $p(t){return typeof t=="object"&&"styledComponentId"in t}function Ur(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Jd(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Qo(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Zd(t,e,n){if(n===void 0&&(n=!1),!n&&!Qo(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Zd(t[r],e[r]);else if(Qo(e))for(var r in e)t[r]=Zd(t[r],e[r]);return t}function jp(t,e){Object.defineProperty(t,"toString",{value:e})}function ri(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var HA=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw ri(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Ol=new Map,fu=new Map,kh=1,sl=function(t){if(Ol.has(t))return Ol.get(t);for(;fu.has(kh);)kh++;var e=kh++;return Ol.set(t,e),fu.set(e,t),e},GA=function(t,e){Ol.set(t,e),fu.set(e,t)},qA="style[".concat(cs,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),QA=new RegExp("^".concat(cs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),YA=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},KA=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(QA);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(GA(c,u),YA(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function XA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Hw=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(cs,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(cs,"active"),r.setAttribute("data-styled-version","6.0.8");var o=XA();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},JA=function(){function t(e){this.element=Hw(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw ri(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),ZA=function(){function t(e){this.element=Hw(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),ek=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Cy=Vp,tk={isServer:!Vp,useCSSOMInjection:!NA},pu=function(){function t(e,n,r){e===void 0&&(e=hs),n===void 0&&(n={});var i=this;this.options=De(De({},tk),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Vp&&Cy&&(Cy=!1,function(s){for(var o=document.querySelectorAll(qA),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(cs)!=="active"&&(KA(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),jp(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var d=function(m){return fu.get(m)}(h);if(d===void 0)return"continue";var g=s.names.get(d),v=o.getGroup(h);if(g===void 0||v.length===0)return"continue";var _="".concat(cs,".g").concat(h,'[id="').concat(d,'"]'),I="";g!==void 0&&g.forEach(function(m){m.length>0&&(I+="".concat(m,","))}),l+="".concat(v).concat(_,'{content:"').concat(I,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return sl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(De(De({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new ek(i):r?new JA(i):new ZA(i)}(this.options),new HA(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(sl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(sl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(sl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),nk=/&/g,rk=/^\s*\/\/.*$/gm;function Gw(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Gw(n.children,e)),n})}function qw(t){var e,n,r,i=t===void 0?hs:t,s=i.options,o=s===void 0?hs:s,a=i.plugins,l=a===void 0?hc:a,u=function(d,g,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===ac&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(nk,n).replace(r,u))}),o.prefix&&c.push(RA),c.push(AA);var h=function(d,g,v,_){g===void 0&&(g=""),v===void 0&&(v=""),_===void 0&&(_="&"),e=_,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var I=d.replace(rk,""),m=SA(v||g?"".concat(v," ").concat(g," { ").concat(I," }"):I);o.namespace&&(m=Gw(m,o.namespace));var f=[];return du(m,kA(c.concat(xA(function(y){return f.push(y)})))),f};return h.hash=l.length?l.reduce(function(d,g){return g.name||ri(15),Ui(d,g.name)},5381).toString():"",h}var ik=new pu,ef=qw(),Fp=Ue.createContext({shouldForwardProp:void 0,styleSheet:ik,stylis:ef});Fp.Consumer;var sk=Ue.createContext(void 0);function mu(){return w.useContext(Fp)}function ok(t){var e=w.useState(t.stylisPlugins),n=e[0],r=e[1],i=mu().styleSheet,s=w.useMemo(function(){var l=i;return t.sheet?l=t.sheet:t.target&&(l=l.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[t.disableCSSOMInjection,t.sheet,t.target,i]),o=w.useMemo(function(){return qw({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:n})},[t.enableVendorPrefixes,t.namespace,n]);w.useEffect(function(){cA(n,t.stylisPlugins)||r(t.stylisPlugins)},[t.stylisPlugins]);var a=w.useMemo(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:s,stylis:o}},[t.shouldForwardProp,s,o]);return Ue.createElement(Fp.Provider,{value:a},Ue.createElement(sk.Provider,{value:o},t.children))}var ak=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ef);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,jp(this,function(){throw ri(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ef),this.name+e.hash},t}(),lk=function(t){return t>="A"&&t<="Z"};function Ay(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;lk(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Qw=function(t){return t==null||t===!1||t===""},Yw=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Qw(s)&&(Array.isArray(s)&&s.isCss||ni(s)?r.push("".concat(Ay(i),":"),s,";"):Qo(s)?r.push.apply(r,qo(qo(["".concat(i," {")],Yw(s),!1),["}"],!1)):r.push("".concat(Ay(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in PA||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function pr(t,e,n,r){if(Qw(t))return[];if($p(t))return[".".concat(t.styledComponentId)];if(ni(t)){if(!ni(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return pr(i,e,n,r)}var s;return t instanceof ak?n?(t.inject(n,r),[t.getName(r)]):[t]:Qo(t)?Yw(t):Array.isArray(t)?Array.prototype.concat.apply(hc,t.map(function(o){return pr(o,e,n,r)})):[t.toString()]}function Kw(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ni(n)&&!$p(n))return!1}return!0}var uk=jw("6.0.8"),ck=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Kw(e),this.componentId=n,this.baseHash=Ui(uk,n),this.baseStyle=r,pu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ur(i,this.staticRulesId);else{var s=Jd(pr(this.rules,e,n,r)),o=Xd(Ui(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Ur(i,o),this.staticRulesId=o}else{for(var l=Ui(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var d=Jd(pr(h,e,n,r));l=Ui(l,d+c),u+=d}}if(u){var g=Xd(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Ur(i,g)}}return i},t}(),Yo=Ue.createContext(void 0);Yo.Consumer;function hk(t){var e=Ue.useContext(Yo),n=w.useMemo(function(){return function(r,i){if(!r)throw ri(14);if(ni(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw ri(8);return i?De(De({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?Ue.createElement(Yo.Provider,{value:n},t.children):null}var xh={};function dk(t,e,n){var r=$p(t),i=t,s=!Ah(t),o=e.attrs,a=o===void 0?hc:o,l=e.componentId,u=l===void 0?function(y,E){var T=typeof y!="string"?"sc":wy(y);xh[T]=(xh[T]||0)+1;var A="".concat(T,"-").concat(Fw("6.0.8"+T+xh[T]));return E?"".concat(E,"-").concat(A):A}(e.displayName,e.parentComponentId):l,c=e.displayName;c===void 0&&function(y){return Ah(y)?"styled.".concat(y):"Styled(".concat(LA(y),")")}(t);var h=e.displayName&&e.componentId?"".concat(wy(e.displayName),"-").concat(e.componentId):e.componentId||u,d=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var _=e.shouldForwardProp;g=function(y,E){return v(y,E)&&_(y,E)}}else g=v}var I=new ck(n,h,r?i.componentStyle:void 0);function m(y,E){return function(T,A,C){var O=T.attrs,H=T.componentStyle,R=T.defaultProps,ee=T.foldedComponentIds,yt=T.styledComponentId,xt=T.target,yn=Ue.useContext(Yo),js=mu(),vn=T.shouldForwardProp||js.shouldForwardProp,G=function(_n,vt,Bn){for(var _t,Rt=De(De({},vt),{className:void 0,theme:Bn}),Xc=0;Xc<_n.length;Xc+=1){var Ua=ni(_t=_n[Xc])?_t(Rt):_t;for(var Wn in Ua)Rt[Wn]=Wn==="className"?Ur(Rt[Wn],Ua[Wn]):Wn==="style"?De(De({},Rt[Wn]),Ua[Wn]):Ua[Wn]}return vt.className&&(Rt.className=Ur(Rt.className,vt.className)),Rt}(O,A,Vw(A,yn,R)||hs),P=G.as||xt,j={};for(var $ in G)G[$]===void 0||$[0]==="$"||$==="as"||$==="theme"||($==="forwardedAs"?j.as=G.forwardedAs:vn&&!vn($,P)||(j[$]=G[$]));var he=function(_n,vt){var Bn=mu(),_t=_n.generateAndInjectStyles(vt,Bn.styleSheet,Bn.stylis);return _t}(H,G),ye=Ur(ee,yt);return he&&(ye+=" "+he),G.className&&(ye+=" "+G.className),j[Ah(P)&&!$w.has(P)?"class":"className"]=ye,j.ref=C,w.createElement(P,j)}(f,y,E)}var f=Ue.forwardRef(m);return f.attrs=d,f.componentStyle=I,f.shouldForwardProp=g,f.foldedComponentIds=r?Ur(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=h,f.target=r?i.target:t,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(E){for(var T=[],A=1;A<arguments.length;A++)T[A-1]=arguments[A];for(var C=0,O=T;C<O.length;C++)Zd(E,O[C],!0);return E}({},i.defaultProps,y):y}}),jp(f,function(){return".".concat(f.styledComponentId)}),s&&Ww(f,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function ky(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var xy=function(t){return Object.assign(t,{isCss:!0})};function Pn(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ni(t)||Qo(t)){var r=t;return xy(pr(ky(hc,qo([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?pr(i):xy(pr(ky(i,e)))}function tf(t,e,n){if(n===void 0&&(n=hs),!e)throw ri(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Pn.apply(void 0,qo([i],s,!1)))};return r.attrs=function(i){return tf(t,e,De(De({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return tf(t,e,De(De({},n),i))},r}var Xw=function(t){return tf(dk,t)},V=Xw;$w.forEach(function(t){V[t]=Xw(t)});var fk=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=Kw(e),pu.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Jd(pr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&pu.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function pk(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Pn.apply(void 0,qo([t],e,!1)),i="sc-global-".concat(Fw(JSON.stringify(r))),s=new fk(r,i),o=function(l){var u=mu(),c=Ue.useContext(Yo),h=Ue.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,c,u.stylis),Ue.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,h,d){if(s.isStatic)s.renderStyles(l,OA,c,d);else{var g=De(De({},u),{theme:Vw(u,h,o.defaultProps)});s.renderStyles(l,g,c,d)}}return Ue.memo(o)}const mk={white:"#fff","gray-100":"#E1E1E6","gray-300":"#C4C4CC","gray-400":"#8D8D99","gray-500":"#7C7C8A","gray-600":"#323238","gray-700":"#05292C","gray-800":"#052659","gray-900":"#021024","green-300":"#00B37E","green-500":"#00875F","green-700":"#015F43","red-300":"#EE4540","red-500":"#801336","red-700":"#510A32","gold-500":"#FFD700"},gk=pk`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:Overpass,sans-serif;
    

    :focus{
      outline:0;
      box-shadow: 0 0 0 2px ${t=>t.theme["red-300"]}
  }

  h1,h2{
    text-align:center;
    color:${t=>t.theme["red-300"]}
  }
  body{
    background-color: ${t=>t.theme["gray-900"]};
    
  }

  }`,ii=V.button`
  padding: 1rem;
  background-color: ${t=>t.dark?t.theme["gray-900"]:t.theme["red-500"]};
  border: none;
  border-radius: 6px;
  box-sizing: border-box;

  font-weight: bold;
  text-align: center;
  font-size: ${t=>t.fontSize?`${t.fontSize}rem`:"0.8rem"};
  text-decoration: none;
  color: ${t=>t.theme["gray-100"]};
  border: 1px solid
    ${t=>t.dark?t.theme["red-500"]:"transparent"};

  &:hover {
    transition: 0.2s background-color;
    background-color: ${t=>t.theme["red-300"]};
    border: 1px solid ${t=>t.theme["gray-800"]};
    cursor: pointer;
  }
`;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ko.apply(this,arguments)}var ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ir||(ir={}));const Ry="popstate";function yk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return nf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gu(i)}return _k(e,n,null,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Up(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vk(){return Math.random().toString(36).substr(2,8)}function Py(t,e){return{usr:t.state,key:t.key,idx:e}}function nf(t,e,n,r){return n===void 0&&(n=null),Ko({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?As(e):e,{state:n,key:e&&e.key||r||vk()})}function gu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function As(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function _k(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ir.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ko({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=ir.Pop;let I=c(),m=I==null?null:I-u;u=I,l&&l({action:a,location:_.location,delta:m})}function d(I,m){a=ir.Push;let f=nf(_.location,I,m);n&&n(f,I),u=c()+1;let y=Py(f,u),E=_.createHref(f);try{o.pushState(y,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function g(I,m){a=ir.Replace;let f=nf(_.location,I,m);n&&n(f,I),u=c();let y=Py(f,u),E=_.createHref(f);o.replaceState(y,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function v(I){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof I=="string"?I:gu(I);return Ee(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let _={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ry,h),l=I,()=>{i.removeEventListener(Ry,h),l=null}},createHref(I){return e(i,I)},createURL:v,encodeLocation(I){let m=v(I);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:g,go(I){return o.go(I)}};return _}var Ny;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ny||(Ny={}));function wk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?As(e):e,i=zp(r.pathname||"/",n);if(i==null)return null;let s=Jw(t);Ek(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Pk(s[a],Dk(i));return o}function Jw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=mr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ee(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Jw(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:xk(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Zw(s.path))i(s,o,l)}),e}function Zw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Zw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Ek(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Rk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ik=/^:\w+$/,Tk=3,Sk=2,Ck=1,Ak=10,kk=-2,Oy=t=>t==="*";function xk(t,e){let n=t.split("/"),r=n.length;return n.some(Oy)&&(r+=kk),e&&(r+=Sk),n.filter(i=>!Oy(i)).reduce((i,s)=>i+(Ik.test(s)?Tk:s===""?Ck:Ak),r)}function Rk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Pk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Nk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:mr([i,c.pathname]),pathnameBase:Vk(mr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=mr([i,c.pathnameBase]))}return s}function Nk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ok(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=bk(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Ok(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Up(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Dk(t){try{return decodeURI(t)}catch(e){return Up(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function bk(t,e){try{return decodeURIComponent(t)}catch(n){return Up(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function zp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Mk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?As(t):t;return{pathname:n?n.startsWith("/")?n:Lk(n,e):e,search:$k(r),hash:jk(i)}}function Lk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Wp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=As(t):(i=Ko({},t),Ee(!i.pathname||!i.pathname.includes("?"),Rh("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),Rh("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),Rh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=Mk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const mr=t=>t.join("/").replace(/\/\/+/g,"/"),Vk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$k=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Fk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const e1=["post","put","patch","delete"];new Set(e1);const Uk=["get",...e1];new Set(Uk);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yu(){return yu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yu.apply(this,arguments)}const Hp=w.createContext(null),t1=w.createContext(null),mi=w.createContext(null),dc=w.createContext(null),Un=w.createContext({outlet:null,matches:[],isDataRoute:!1}),n1=w.createContext(null);function zk(t,e){let{relative:n}=e===void 0?{}:e;ks()||Ee(!1);let{basename:r,navigator:i}=w.useContext(mi),{hash:s,pathname:o,search:a}=Gp(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:mr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ks(){return w.useContext(dc)!=null}function xs(){return ks()||Ee(!1),w.useContext(dc).location}function r1(t){w.useContext(mi).static||w.useLayoutEffect(t)}function fc(){let{isDataRoute:t}=w.useContext(Un);return t?nx():Bk()}function Bk(){ks()||Ee(!1);let t=w.useContext(Hp),{basename:e,navigator:n}=w.useContext(mi),{matches:r}=w.useContext(Un),{pathname:i}=xs(),s=JSON.stringify(Bp(r).map(l=>l.pathnameBase)),o=w.useRef(!1);return r1(()=>{o.current=!0}),w.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Wp(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:mr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function Wk(){let{matches:t}=w.useContext(Un),e=t[t.length-1];return e?e.params:{}}function Gp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=w.useContext(Un),{pathname:i}=xs(),s=JSON.stringify(Bp(r).map(o=>o.pathnameBase));return w.useMemo(()=>Wp(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Hk(t,e){return Gk(t,e)}function Gk(t,e,n){ks()||Ee(!1);let{navigator:r}=w.useContext(mi),{matches:i}=w.useContext(Un),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=xs(),u;if(e){var c;let _=typeof e=="string"?As(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Ee(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",g=wk(t,{pathname:d}),v=Xk(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:mr([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:mr([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?w.createElement(dc.Provider,{value:{location:yu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ir.Pop}},v):v}function qk(){let t=tx(),e=Fk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,s)}const Qk=w.createElement(qk,null);class Yk extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w.createElement(Un.Provider,{value:this.props.routeContext},w.createElement(n1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Kk(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(Hp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Un.Provider,{value:e},r)}function Xk(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ee(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Qk);let d=e.concat(s.slice(0,u+1)),g=()=>{let v;return c?v=h:l.route.Component?v=w.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,w.createElement(Kk,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?w.createElement(Yk,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):g()},null)}var i1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(i1||{}),vu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(vu||{});function Jk(t){let e=w.useContext(Hp);return e||Ee(!1),e}function Zk(t){let e=w.useContext(t1);return e||Ee(!1),e}function ex(t){let e=w.useContext(Un);return e||Ee(!1),e}function s1(t){let e=ex(),n=e.matches[e.matches.length-1];return n.route.id||Ee(!1),n.route.id}function tx(){var t;let e=w.useContext(n1),n=Zk(vu.UseRouteError),r=s1(vu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function nx(){let{router:t}=Jk(i1.UseNavigateStable),e=s1(vu.UseNavigateStable),n=w.useRef(!1);return r1(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,yu({fromRouteId:e},s)))},[t,e])}function Qs(t){let{to:e,replace:n,state:r,relative:i}=t;ks()||Ee(!1);let{matches:s}=w.useContext(Un),{pathname:o}=xs(),a=fc(),l=Wp(e,Bp(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return w.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function wn(t){Ee(!1)}function rx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ir.Pop,navigator:s,static:o=!1}=t;ks()&&Ee(!1);let a=e.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=As(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:g="default"}=r,v=w.useMemo(()=>{let _=zp(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:g},navigationType:i}},[a,u,c,h,d,g,i]);return v==null?null:w.createElement(mi.Provider,{value:l},w.createElement(dc.Provider,{children:n,value:v}))}function ix(t){let{children:e,location:n}=t;return Hk(rf(e),n)}new Promise(()=>{});function rf(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,rf(r.props.children,s));return}r.type!==wn&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=rf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _u(){return _u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_u.apply(this,arguments)}function o1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function sx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ox(t,e){return t.button===0&&(!e||e==="_self")&&!sx(t)}const ax=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],lx=["aria-current","caseSensitive","className","end","style","to","children"],ux="startTransition",Dy=YT[ux];function cx(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=yk({window:i,v5Compat:!0}));let o=s.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=w.useCallback(h=>{u&&Dy?Dy(()=>l(h)):l(h)},[l,u]);return w.useLayoutEffect(()=>o.listen(c),[o,c]),w.createElement(rx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const hx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fx=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=o1(e,ax),{basename:d}=w.useContext(mi),g,v=!1;if(typeof u=="string"&&dx.test(u)&&(g=u,hx))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=zp(y.pathname,d);y.origin===f.origin&&E!=null?u=E+y.search+y.hash:v=!0}catch{}let _=zk(u,{relative:i}),I=px(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||I(f)}return w.createElement("a",_u({},h,{href:g||_,onClick:v||s?r:m,ref:n,target:l}))}),Pt=w.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=o1(e,lx),h=Gp(l,{relative:c.relative}),d=xs(),g=w.useContext(t1),{navigator:v}=w.useContext(mi),_=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,I=d.pathname,m=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(I=I.toLowerCase(),m=m?m.toLowerCase():null,_=_.toLowerCase());let f=I===_||!o&&I.startsWith(_)&&I.charAt(_.length)==="/",y=m!=null&&(m===_||!o&&m.startsWith(_)&&m.charAt(_.length)==="/"),E=f?r:void 0,T;typeof s=="function"?T=s({isActive:f,isPending:y}):T=[s,f?"active":null,y?"pending":null].filter(Boolean).join(" ");let A=typeof a=="function"?a({isActive:f,isPending:y}):a;return w.createElement(fx,_u({},c,{"aria-current":E,className:T,ref:n,style:A,to:l}),typeof u=="function"?u({isActive:f,isPending:y}):u)});var by;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(by||(by={}));var My;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(My||(My={}));function px(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=fc(),l=xs(),u=Gp(t,{relative:o});return w.useCallback(c=>{if(ox(c,n)){c.preventDefault();let h=r!==void 0?r:gu(l)===gu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const mx=V.nav`
  display: flex;
  justify-content: space-between;

  padding: 1rem;

  font-size: 1.5rem;
  font-weight: bold;

  border-bottom: 2px solid ${t=>t.theme["red-500"]};
  margin-bottom: 2rem;

  .logo {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      width: 30px;
      height: 30px;
      border-radius: 5px;

      transform: translateX(-8px) rotate(45deg);

      background-color: ${t=>t.theme["red-300"]};
      z-index: -1;
      transition: all 0.2s;
    }
    &:hover {
      &::before {
        transform: translateX(110px) rotate(315deg);
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;

    list-style: none;
  }

  a,
  button {
    display: flex;
    gap: 10px;
    align-items: center;
    text-decoration: none;
    color: ${t=>t.theme["red-500"]};
    background: none;
    border: none;

    font-weight: bold;
    font-size: 1.5rem;

    padding: 1rem;
    border-radius: 6px;

    span {
      color: ${t=>t.theme["red-300"]};
    }
    &:hover {
      transition: 0.2s all;
      color: ${t=>t.theme["red-300"]};
      cursor: pointer;
      span {
        color: ${t=>t.theme["red-500"]};
      }
    }
  }
`;var gx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const yx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Zt=(t,e)=>{const n=w.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:a,...l},u)=>w.createElement("svg",{ref:u,...gx,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${yx(t)}`,...l},[...e.map(([c,h])=>w.createElement(c,h)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${t}`,n},vx=Zt("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]),_x=Zt("Cross",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]),wx=Zt("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]),Ex=Zt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),Ix=Zt("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]),Tx=Zt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),Sx=Zt("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),Cx=Zt("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),a1=Zt("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]),l1=Zt("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]),Ax=Zt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},c1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(u1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new xx;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rx=function(t){const e=u1(t);return c1.encodeByteArray(e,!0)},wu=function(t){return Rx(t).replace(/\./g,"")},h1=function(t){try{return c1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=()=>Px().__FIREBASE_DEFAULTS__,Ox=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Dx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&h1(t[1]);return e&&JSON.parse(e)},qp=()=>{try{return Nx()||Ox()||Dx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},d1=t=>{var e,n;return(n=(e=qp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bx=t=>{const e=d1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},f1=()=>{var t;return(t=qp())===null||t===void 0?void 0:t.config},p1=t=>{var e;return(e=qp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wu(JSON.stringify(n)),wu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function $x(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fx(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ux(){try{return typeof indexedDB=="object"}catch{return!1}}function zx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bx,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_a.prototype.create)}}class _a{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Wx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new zn(i,a,r)}}function Wx(t,e){return t.replace(Hx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Hx=/\{\$([^}]+)}/g;function Gx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Eu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ly(s)&&Ly(o)){if(!Eu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ly(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ro(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qx(t,e){const n=new Qx(t,e);return n.subscribe.bind(n)}class Qx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ph),i.error===void 0&&(i.error=Ph),i.complete===void 0&&(i.complete=Ph);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ph(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return t&&t._delegate?t._delegate:t}class si{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jx(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xx(t){return t===Vr?void 0:t}function Jx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const eR={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},tR=K.INFO,nR={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},rR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qp{constructor(e){this.name=e,this._logLevel=tR,this._logHandler=rR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const iR=(t,e)=>e.some(n=>t instanceof n);let Vy,$y;function sR(){return Vy||(Vy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oR(){return $y||($y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m1=new WeakMap,sf=new WeakMap,g1=new WeakMap,Nh=new WeakMap,Yp=new WeakMap;function aR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&m1.set(n,t)}).catch(()=>{}),Yp.set(e,t),e}function lR(t){if(sf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sf.set(t,e)}let of={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||g1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uR(t){of=t(of)}function cR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oh(this),e,...n);return g1.set(r,e.sort?e.sort():[e]),gr(r)}:oR().includes(t)?function(...e){return t.apply(Oh(this),e),gr(m1.get(this))}:function(...e){return gr(t.apply(Oh(this),e))}}function hR(t){return typeof t=="function"?cR(t):(t instanceof IDBTransaction&&lR(t),iR(t,sR())?new Proxy(t,of):t)}function gr(t){if(t instanceof IDBRequest)return aR(t);if(Nh.has(t))return Nh.get(t);const e=hR(t);return e!==t&&(Nh.set(t,e),Yp.set(e,t)),e}const Oh=t=>Yp.get(t);function dR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=gr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gr(o.result),l.oldVersion,l.newVersion,gr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const fR=["get","getKey","getAll","getAllKeys","count"],pR=["put","add","delete","clear"],Dh=new Map;function jy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dh.get(e))return Dh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=pR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Dh.set(e,s),s}uR(t=>({...t,get:(e,n,r)=>jy(e,n)||t.get(e,n,r),has:(e,n)=>!!jy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const af="@firebase/app",Fy="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Qp("@firebase/app"),yR="@firebase/app-compat",vR="@firebase/analytics-compat",_R="@firebase/analytics",wR="@firebase/app-check-compat",ER="@firebase/app-check",IR="@firebase/auth",TR="@firebase/auth-compat",SR="@firebase/database",CR="@firebase/database-compat",AR="@firebase/functions",kR="@firebase/functions-compat",xR="@firebase/installations",RR="@firebase/installations-compat",PR="@firebase/messaging",NR="@firebase/messaging-compat",OR="@firebase/performance",DR="@firebase/performance-compat",bR="@firebase/remote-config",MR="@firebase/remote-config-compat",LR="@firebase/storage",VR="@firebase/storage-compat",$R="@firebase/firestore",jR="@firebase/firestore-compat",FR="firebase",UR="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="[DEFAULT]",zR={[af]:"fire-core",[yR]:"fire-core-compat",[_R]:"fire-analytics",[vR]:"fire-analytics-compat",[ER]:"fire-app-check",[wR]:"fire-app-check-compat",[IR]:"fire-auth",[TR]:"fire-auth-compat",[SR]:"fire-rtdb",[CR]:"fire-rtdb-compat",[AR]:"fire-fn",[kR]:"fire-fn-compat",[xR]:"fire-iid",[RR]:"fire-iid-compat",[PR]:"fire-fcm",[NR]:"fire-fcm-compat",[OR]:"fire-perf",[DR]:"fire-perf-compat",[bR]:"fire-rc",[MR]:"fire-rc-compat",[LR]:"fire-gcs",[VR]:"fire-gcs-compat",[$R]:"fire-fst",[jR]:"fire-fst-compat","fire-js":"fire-js",[FR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new Map,uf=new Map;function BR(t,e){try{t.container.addComponent(e)}catch(n){oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(uf.has(e))return oi.debug(`There were multiple attempts to register component ${e}.`),!1;uf.set(e,t);for(const n of Iu.values())BR(n,t);return!0}function Kp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yr=new _a("app","Firebase",WR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=UR;function y1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yr.create("bad-app-name",{appName:String(i)});if(n||(n=f1()),!n)throw yr.create("no-options");const s=Iu.get(i);if(s){if(Eu(n,s.options)&&Eu(r,s.config))return s;throw yr.create("duplicate-app",{appName:i})}const o=new Zx(i);for(const l of uf.values())o.addComponent(l);const a=new HR(n,r,o);return Iu.set(i,a),a}function v1(t=lf){const e=Iu.get(t);if(!e&&t===lf&&f1())return y1();if(!e)throw yr.create("no-app",{appName:t});return e}function vr(t,e,n){var r;let i=(r=zR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),oi.warn(a.join(" "));return}ds(new si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR="firebase-heartbeat-database",qR=1,Xo="firebase-heartbeat-store";let bh=null;function _1(){return bh||(bh=dR(GR,qR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xo)}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),bh}async function QR(t){try{return await(await _1()).transaction(Xo).objectStore(Xo).get(w1(t))}catch(e){if(e instanceof zn)oi.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});oi.warn(n.message)}}}async function Uy(t,e){try{const r=(await _1()).transaction(Xo,"readwrite");await r.objectStore(Xo).put(e,w1(t)),await r.done}catch(n){if(n instanceof zn)oi.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});oi.warn(r.message)}}}function w1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=1024,KR=30*24*60*60*1e3;class XR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=KR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zy(),{heartbeatsToSend:n,unsentEntries:r}=JR(this._heartbeatsCache.heartbeats),i=wu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function zy(){return new Date().toISOString().substring(0,10)}function JR(t,e=YR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),By(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),By(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ux()?zx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await QR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Uy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function By(t){return wu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){ds(new si("platform-logger",e=>new mR(e),"PRIVATE")),ds(new si("heartbeat",e=>new XR(e),"PRIVATE")),vr(af,Fy,t),vr(af,Fy,"esm2017"),vr("fire-js","")}eP("");function Wy(t){return t!==void 0&&t.enterprise!==void 0}class tP{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function E1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nP=E1,I1=new _a("auth","Firebase",E1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new Qp("@firebase/auth");function rP(t,...e){Tu.logLevel<=K.WARN&&Tu.warn(`Auth (${Rs}): ${t}`,...e)}function Dl(t,...e){Tu.logLevel<=K.ERROR&&Tu.error(`Auth (${Rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw Xp(t,...e)}function cn(t,...e){return Xp(t,...e)}function iP(t,e,n){const r=Object.assign(Object.assign({},nP()),{[e]:n});return new _a("auth","Firebase",r).create(e,{appName:t.name})}function Xp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return I1.create(t,...e)}function F(t,e,...n){if(!t)throw Xp(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dl(e),new Error(e)}function Ln(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sP(){return Hy()==="http:"||Hy()==="https:"}function Hy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sP()||$x()||"connection"in navigator)?navigator.onLine:!0}function aP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=Vx()||jx()}get(){return oP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=new Ea(3e4,6e4);function gi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yi(t,e,n,r,i={}){return S1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=wa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),T1.fetch()(C1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function S1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lP),e);try{const i=new cP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ol(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ol(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ol(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ol(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw iP(t,c,u);Yt(t,c)}}catch(i){if(i instanceof zn)throw i;Yt(t,"network-request-failed",{message:String(i)})}}async function Ia(t,e,n,r,i={}){const s=await yi(t,e,n,r,i);return"mfaPendingCredential"in s&&Yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function C1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Jp(t.config,i):`${t.config.apiScheme}://${i}`}class cP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),uP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ol(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cn(t,e,r);return i.customData._tokenResponse=n,i}async function hP(t,e){return yi(t,"GET","/v2/recaptchaConfig",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP(t,e){return yi(t,"POST","/v1/accounts:delete",e)}async function fP(t,e){return yi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pP(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=Zp(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Io(Mh(i.auth_time)),issuedAtTime:Io(Mh(i.iat)),expirationTime:Io(Mh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mh(t){return Number(t)*1e3}function Zp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dl("JWT malformed, contained fewer than 3 sections"),null;try{const i=h1(n);return i?JSON.parse(i):(Dl("Failed to decode base64 JWT payload"),null)}catch(i){return Dl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mP(t){const e=Zp(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&gP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Io(this.lastLoginAt),this.creationTime=Io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Jo(t,fP(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?wP(s.providerUserInfo):[],a=_P(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new A1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function vP(t){const e=Me(t);await Su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _P(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wP(t){return t.map(e=>{var{providerId:n}=e,r=bp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e){const n=await S1(t,{},async()=>{const r=wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=C1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",T1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await EP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Zo;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zo,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=bp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new A1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Jo(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pP(this,e)}reload(){return vP(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Su(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jo(this,dP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:T,providerData:A,stsTokenManager:C}=n;F(y&&C,e,"internal-error");const O=Zo.fromJSON(this.name,C);F(typeof y=="string",e,"internal-error"),Gn(h,e.name),Gn(d,e.name),F(typeof E=="boolean",e,"internal-error"),F(typeof T=="boolean",e,"internal-error"),Gn(g,e.name),Gn(v,e.name),Gn(_,e.name),Gn(I,e.name),Gn(m,e.name),Gn(f,e.name);const H=new Yr({uid:y,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:T,photoURL:v,phoneNumber:g,tenantId:_,stsTokenManager:O,createdAt:m,lastLoginAt:f});return A&&Array.isArray(A)&&(H.providerData=A.map(R=>Object.assign({},R))),I&&(H._redirectEventId=I),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new Zo;i.updateFromServerResponse(n);const s=new Yr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Su(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=new Map;function kn(t){Ln(t instanceof Function,"Expected a class definition");let e=Gy.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}k1.type="NONE";const qy=k1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bl(this.userKey,i.apiKey,s),this.fullPersistenceKey=bl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ki(kn(qy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||kn(qy);const o=bl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Yr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ki(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ki(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(P1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(x1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O1(e))return"Blackberry";if(D1(e))return"Webos";if(em(e))return"Safari";if((e.includes("chrome/")||R1(e))&&!e.includes("edge/"))return"Chrome";if(N1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function x1(t=rt()){return/firefox\//i.test(t)}function em(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function R1(t=rt()){return/crios\//i.test(t)}function P1(t=rt()){return/iemobile/i.test(t)}function N1(t=rt()){return/android/i.test(t)}function O1(t=rt()){return/blackberry/i.test(t)}function D1(t=rt()){return/webos/i.test(t)}function pc(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IP(t=rt()){var e;return pc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TP(){return Fx()&&document.documentMode===10}function b1(t=rt()){return pc(t)||N1(t)||D1(t)||O1(t)||/windows phone/i.test(t)||P1(t)}function SP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t,e=[]){let n;switch(t){case"Browser":n=Qy(rt());break;case"Worker":n=`${Qy(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e={}){return yi(t,"GET","/v2/passwordPolicy",gi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=6;class xP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yy(this),this.idTokenSubscription=new Yy(this),this.beforeStateQueue=new CP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=I1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ki.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Su(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Me(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AP(this),n=new xP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _a("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Ki.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=M1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vi(t){return Me(t)}class Yy{constructor(e){this.auth=e,this.observer=null,this.addObserver=qx(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function L1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",PP().appendChild(r)})}function NP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const OP="https://www.google.com/recaptcha/enterprise.js?render=",DP="recaptcha-enterprise",bP="NO_RECAPTCHA";class MP{constructor(e){this.type=DP,this.auth=vi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{hP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new tP(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Wy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(bP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Wy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}L1(OP+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Cu(t,e,n,r=!1){const i=new MP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t,e){const n=Kp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Eu(s,e??{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function VP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $P(t,e,n){const r=vi(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=V1(e),{host:o,port:a}=jP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||FP()}function V1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jP(t){const e=V1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ky(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ky(o)}}}function Ky(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function UP(t,e){return yi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(t,e){return Ia(t,"POST","/v1/accounts:signInWithPassword",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,e){return Ia(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}async function BP(t,e){return Ia(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends tm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ea(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ea(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Cu(e,r,"signInWithPassword");return Lh(e,i)}else return Lh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Cu(e,r,"signInWithPassword");return Lh(e,s)}else return Promise.reject(i)});case"emailLink":return zP(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return UP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return BP(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t,e){return Ia(t,"POST","/v1/accounts:signInWithIdp",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP="http://localhost";class ai extends tm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=bp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xi(e,n)}buildRequest(){const e={requestUri:WP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GP(t){const e=ro(io(t)).link,n=e?ro(io(e)).deep_link_id:null,r=ro(io(t)).deep_link_id;return(r?ro(io(r)).link:null)||r||n||e||t}class nm{constructor(e){var n,r,i,s,o,a;const l=ro(io(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=HP((i=l.mode)!==null&&i!==void 0?i:null);F(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=GP(e);try{return new nm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.providerId=Ps.PROVIDER_ID}static credential(e,n){return ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=nm.parseLink(n);return F(r,"argument-error"),ea._fromEmailAndCode(e,r.code,r.tenantId)}}Ps.PROVIDER_ID="password";Ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends $1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Ta{constructor(){super("facebook.com")}static credential(e){return ai._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ai._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Ta{constructor(){super("github.com")}static credential(e){return ai._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Ta{constructor(){super("twitter.com")}static credential(e,n){return ai._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vh(t,e){return Ia(t,"POST","/v1/accounts:signUp",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yr._fromIdTokenResponse(e,r,i),o=Xy(r);return new li({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xy(r);return new li({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends zn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Au.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Au(e,n,r,i)}}function j1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Au._fromErrorAndOperation(t,s,e,r):s})}async function qP(t,e,n=!1){const r=await Jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Jo(t,j1(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=Zp(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),li._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(t,e,n=!1){const r="signIn",i=await j1(t,r,e),s=await li._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function YP(t,e){return F1(vi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(t){const e=vi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function KP(t,e,n){var r;const i=vi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Cu(i,s,"signUpPassword");o=Vh(i,u)}else o=Vh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Cu(i,s,"signUpPassword");return Vh(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&U1(t),u}),l=await li._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function XP(t,e,n){return YP(Me(t),Ps.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&U1(t),r})}function JP(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function ZP(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function e2(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function t2(t){return Me(t).signOut()}const ku="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ku,"1"),this.storage.removeItem(ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(){const t=rt();return em(t)||pc(t)}const r2=1e3,i2=10;class B1 extends z1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=n2()&&SP(),this.fallbackToPolling=b1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,i2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},r2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}B1.type="LOCAL";const s2=B1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1 extends z1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}W1.type="SESSION";const H1=W1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new mc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await o2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=rm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function l2(t){hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function u2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function c2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function h2(){return G1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="firebaseLocalStorageDb",d2=1,xu="firebaseLocalStorage",Q1="fbase_key";class Sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gc(t,e){return t.transaction([xu],e?"readwrite":"readonly").objectStore(xu)}function f2(){const t=indexedDB.deleteDatabase(q1);return new Sa(t).toPromise()}function hf(){const t=indexedDB.open(q1,d2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xu,{keyPath:Q1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xu)?e(r):(r.close(),await f2(),e(await hf()))})})}async function Jy(t,e,n){const r=gc(t,!0).put({[Q1]:e,value:n});return new Sa(r).toPromise()}async function p2(t,e){const n=gc(t,!1).get(e),r=await new Sa(n).toPromise();return r===void 0?null:r.value}function Zy(t,e){const n=gc(t,!0).delete(e);return new Sa(n).toPromise()}const m2=800,g2=3;class Y1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>g2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return G1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mc._getInstance(h2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await u2(),!this.activeServiceWorker)return;this.sender=new a2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||c2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hf();return await Jy(e,ku,"1"),await Zy(e,ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>p2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=gc(i,!1).getAll();return new Sa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),m2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y1.type="LOCAL";const y2=Y1;new Ea(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(t,e){return e?kn(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im extends tm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _2(t){return F1(t.auth,new im(t),t.bypassAuthState)}function w2(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),QP(n,new im(t),t.bypassAuthState)}async function E2(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),qP(n,new im(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _2;case"linkViaPopup":case"linkViaRedirect":return E2;case"reauthViaPopup":case"reauthViaRedirect":return w2;default:Yt(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=new Ea(2e3,1e4);class zi extends K1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=rm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I2.get())};e()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2="pendingRedirect",Ml=new Map;class S2 extends K1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ml.get(this.auth._key());if(!e){try{const r=await C2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ml.set(this.auth._key(),e)}return this.bypassAuthState||Ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function C2(t,e){const n=x2(e),r=k2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function A2(t,e){Ml.set(t._key(),e)}function k2(t){return kn(t._redirectPersistence)}function x2(t){return bl(T2,t.config.apiKey,t.name)}async function R2(t,e,n=!1){const r=vi(t),i=v2(r,e),o=await new S2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=10*60*1e3;class N2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!O2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!X1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=P2&&this.cachedEventUids.clear(),this.cachedEventUids.has(ev(e))}saveEventToCache(e){this.cachedEventUids.add(ev(e)),this.lastProcessedEventTime=Date.now()}}function ev(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function X1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function O2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return X1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D2(t,e={}){return yi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,M2=/^https?/;async function L2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await D2(t);for(const n of e)try{if(V2(n))return}catch{}Yt(t,"unauthorized-domain")}function V2(t){const e=cf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!M2.test(n))return!1;if(b2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=new Ea(3e4,6e4);function tv(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function j2(t){return new Promise((e,n)=>{var r,i,s;function o(){tv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tv(),n(cn(t,"network-request-failed"))},timeout:$2.get()})}if(!((i=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hn().gapi)===null||s===void 0)&&s.load)o();else{const a=NP("iframefcb");return hn()[a]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},L1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ll=null,e})}let Ll=null;function F2(t){return Ll=Ll||j2(t),Ll}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2=new Ea(5e3,15e3),z2="__/auth/iframe",B2="emulator/auth/iframe",W2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},H2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G2(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jp(e,B2):`https://${t.config.authDomain}/${z2}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},i=H2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wa(r).slice(1)}`}async function q2(t){const e=await F2(t),n=hn().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:G2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:W2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),a=hn().setTimeout(()=>{s(o)},U2.get());function l(){hn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y2=500,K2=600,X2="_blank",J2="http://localhost";class nv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Z2(t,e,n,r=Y2,i=K2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Q2),{width:r.toString(),height:i.toString(),top:s,left:o}),u=rt().toLowerCase();n&&(a=R1(u)?X2:n),x1(u)&&(e=e||J2,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(IP(u)&&a!=="_self")return eN(e||"",a),new nv(null);const h=window.open(e||"",a,c);F(h,t,"popup-blocked");try{h.focus()}catch{}return new nv(h)}function eN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN="__/auth/handler",nN="emulator/auth/handler",rN=encodeURIComponent("fac");async function rv(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:i};if(e instanceof $1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ta){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${rN}=${encodeURIComponent(l)}`:"";return`${iN(t)}?${wa(a).slice(1)}${u}`}function iN({config:t}){return t.emulator?Jp(t,nN):`https://${t.authDomain}/${tN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="webStorageSupport";class sN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=H1,this._completeRedirectFn=R2,this._overrideRedirectResult=A2}async _openPopup(e,n,r,i){var s;Ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await rv(e,n,r,cf(),i);return Z2(e,o,rm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await rv(e,n,r,cf(),i);return l2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await q2(e),r=new N2(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($h,{type:$h},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$h];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return b1()||em()||pc()}}const oN=sN;var iv="@firebase/auth",sv="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uN(t){ds(new si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:M1(t)},u=new RP(r,i,s,l);return VP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ds(new si("auth-internal",e=>{const n=vi(e.getProvider("auth").getImmediate());return(r=>new aN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vr(iv,sv,lN(t)),vr(iv,sv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=5*60,hN=p1("authIdTokenMaxAge")||cN;let ov=null;const dN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hN)return;const i=n==null?void 0:n.token;ov!==i&&(ov=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sm(t=v1()){const e=Kp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LP(t,{popupRedirectResolver:oN,persistence:[y2,s2,H1]}),r=p1("authTokenSyncURL");if(r){const s=dN(r);ZP(n,s,()=>s(n.currentUser)),JP(n,o=>s(o))}const i=d1("auth");return i&&$P(n,`http://${i}`),n}uN("Browser");var fN="firebase",pN="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr(fN,pN,"app");var mN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,om=om||{},z=mN||self;function yc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ca(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gN(t){return Object.prototype.hasOwnProperty.call(t,jh)&&t[jh]||(t[jh]=++yN)}var jh="closure_uid_"+(1e9*Math.random()>>>0),yN=0;function vN(t,e,n){return t.call.apply(t.bind,arguments)}function _N(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=vN:Ze=_N,Ze.apply(null,arguments)}function al(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ve(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Nr(){this.s=this.s,this.o=this.o}var wN=0;Nr.prototype.s=!1;Nr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),wN!=0)&&gN(this)};Nr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const J1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function am(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function av(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(yc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var EN=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",()=>{},e),z.removeEventListener("test",()=>{},e)}catch{}return t}();function ta(t){return/^[\s\xa0]*$/.test(t)}function vc(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function sn(t){return vc().indexOf(t)!=-1}function lm(t){return lm[" "](t),t}lm[" "]=function(){};function IN(t,e){var n=pO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var TN=sn("Opera"),fs=sn("Trident")||sn("MSIE"),Z1=sn("Edge"),df=Z1||fs,eE=sn("Gecko")&&!(vc().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge"))&&!(sn("Trident")||sn("MSIE"))&&!sn("Edge"),SN=vc().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge");function tE(){var t=z.document;return t?t.documentMode:void 0}var ff;e:{var Fh="",Uh=function(){var t=vc();if(eE)return/rv:([^\);]+)(\)|;)/.exec(t);if(Z1)return/Edge\/([\d\.]+)/.exec(t);if(fs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SN)return/WebKit\/(\S+)/.exec(t);if(TN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Uh&&(Fh=Uh?Uh[1]:""),fs){var zh=tE();if(zh!=null&&zh>parseFloat(Fh)){ff=String(zh);break e}}ff=Fh}var pf;if(z.document&&fs){var lv=tE();pf=lv||parseInt(ff,10)||void 0}else pf=void 0;var CN=pf;function na(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(eE){e:{try{lm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:AN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&na.$.h.call(this)}}Ve(na,et);var AN={2:"touch",3:"pen",4:"mouse"};na.prototype.h=function(){na.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Aa="closure_listenable_"+(1e6*Math.random()|0),kN=0;function xN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++kN,this.fa=this.ia=!1}function _c(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function um(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function RN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nE(t){const e={};for(const n in t)e[n]=t[n];return e}const uv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<uv.length;s++)n=uv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wc(t){this.src=t,this.g={},this.h=0}wc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new xN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function mf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=J1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(_c(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function gf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var cm="closure_lm_"+(1e6*Math.random()|0),Bh={};function iE(t,e,n,r,i){if(r&&r.once)return oE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)iE(t,e[s],n,r,i);return null}return n=fm(n),t&&t[Aa]?t.O(e,n,Ca(r)?!!r.capture:!!r,i):sE(t,e,n,!1,r,i)}function sE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ca(i)?!!i.capture:!!i,a=dm(t);if(a||(t[cm]=a=new wc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=PN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)EN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(lE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PN(){function t(n){return e.call(t.src,t.listener,n)}const e=NN;return t}function oE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)oE(t,e[s],n,r,i);return null}return n=fm(n),t&&t[Aa]?t.P(e,n,Ca(r)?!!r.capture:!!r,i):sE(t,e,n,!0,r,i)}function aE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)aE(t,e[s],n,r,i);else r=Ca(r)?!!r.capture:!!r,n=fm(n),t&&t[Aa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gf(s,n,r,i),-1<n&&(_c(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=dm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gf(e,n,r,i)),(n=-1<t?e[t]:null)&&hm(n))}function hm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Aa])mf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(lE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=dm(e))?(mf(n,t),n.h==0&&(n.src=null,e[cm]=null)):_c(t)}}}function lE(t){return t in Bh?Bh[t]:Bh[t]="on"+t}function NN(t,e){if(t.fa)t=!0;else{e=new na(e,this);var n=t.listener,r=t.la||t.src;t.ia&&hm(t),t=n.call(r,e)}return t}function dm(t){return t=t[cm],t instanceof wc?t:null}var Wh="__closure_events_fn_"+(1e9*Math.random()>>>0);function fm(t){return typeof t=="function"?t:(t[Wh]||(t[Wh]=function(e){return t.handleEvent(e)}),t[Wh])}function Le(){Nr.call(this),this.i=new wc(this),this.S=this,this.J=null}Ve(Le,Nr);Le.prototype[Aa]=!0;Le.prototype.removeEventListener=function(t,e,n,r){aE(this,t,e,n,r)};function Be(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var i=e;e=new et(r,t),rE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ll(o,r,!0,e)&&i}if(o=e.g=t,i=ll(o,r,!0,e)&&i,i=ll(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ll(o,r,!1,e)&&i}Le.prototype.N=function(){if(Le.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)_c(n[r]);delete t.g[e],t.h--}}this.J=null};Le.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Le.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ll(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&mf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var pm=z.JSON.stringify;class ON{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function DN(){var t=mm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bN{constructor(){this.h=this.g=null}add(e,n){const r=uE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var uE=new ON(()=>new MN,t=>t.reset());class MN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function VN(t){z.setTimeout(()=>{throw t},0)}let ra,ia=!1,mm=new bN,cE=()=>{const t=z.Promise.resolve(void 0);ra=()=>{t.then($N)}};var $N=()=>{for(var t;t=DN();){try{t.h.call(t.g)}catch(n){VN(n)}var e=uE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ia=!1};function Ec(t,e){Le.call(this),this.h=t||1,this.g=e||z,this.j=Ze(this.qb,this),this.l=Date.now()}Ve(Ec,Le);N=Ec.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Be(this,"tick"),this.ga&&(gm(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Ec.$.N.call(this),gm(this),delete this.g};function ym(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function hE(t){t.g=ym(()=>{t.g=null,t.i&&(t.i=!1,hE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jN extends Nr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hE(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sa(t){Nr.call(this),this.h=t,this.g={}}Ve(sa,Nr);var cv=[];function dE(t,e,n,r){Array.isArray(n)||(n&&(cv[0]=n.toString()),n=cv);for(var i=0;i<n.length;i++){var s=iE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function fE(t){um(t.g,function(e,n){this.g.hasOwnProperty(n)&&hm(e)},t),t.g={}}sa.prototype.N=function(){sa.$.N.call(this),fE(this)};sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ic(){this.g=!0}Ic.prototype.Ea=function(){this.g=!1};function FN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function UN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Bi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BN(t,n)+(r?" "+r:"")})}function zN(t,e){t.info(function(){return"TIMEOUT: "+e})}Ic.prototype.info=function(){};function BN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pm(n)}catch{return e}}var _i={},hv=null;function Tc(){return hv=hv||new Le}_i.Ta="serverreachability";function pE(t){et.call(this,_i.Ta,t)}Ve(pE,et);function oa(t){const e=Tc();Be(e,new pE(e))}_i.STAT_EVENT="statevent";function mE(t,e){et.call(this,_i.STAT_EVENT,t),this.stat=e}Ve(mE,et);function ot(t){const e=Tc();Be(e,new mE(e,t))}_i.Ua="timingevent";function gE(t,e){et.call(this,_i.Ua,t),this.size=e}Ve(gE,et);function ka(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Sc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},yE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function vm(){}vm.prototype.h=null;function dv(t){return t.h||(t.h=t.i())}function vE(){}var xa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function _m(){et.call(this,"d")}Ve(_m,et);function wm(){et.call(this,"c")}Ve(wm,et);var yf;function Cc(){}Ve(Cc,vm);Cc.prototype.g=function(){return new XMLHttpRequest};Cc.prototype.i=function(){return{}};yf=new Cc;function Ra(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new sa(this),this.P=WN,t=df?125:void 0,this.V=new Ec(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _E}function _E(){this.i=null,this.g="",this.h=!1}var WN=45e3,vf={},Ru={};N=Ra.prototype;N.setTimeout=function(t){this.P=t};function _f(t,e,n){t.L=1,t.v=kc(Vn(e)),t.s=n,t.S=!0,wE(t,null)}function wE(t,e){t.G=Date.now(),Pa(t),t.A=Vn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),xE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new _E,t.g=YE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new jN(Ze(t.Pa,t,t.g),t.O)),dE(t.U,t.g,"readystatechange",t.nb),e=t.I?nE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),oa(),FN(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&on(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const c=on(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||df||this.g&&(this.h.h||this.g.ja()||gv(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?oa(3):oa(2)),Ac(this);var n=this.g.da();this.ca=n;t:if(EE(this)){var r=gv(this.g);t="";var i=r.length,s=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zr(this),To(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,UN(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ta(a)){var u=a;break t}}u=null}if(n=u)Bi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wf(this,n);else{this.i=!1,this.o=3,ot(12),zr(this),To(this);break e}}this.S?(IE(this,c,o),df&&this.i&&c==3&&(dE(this.U,this.V,"tick",this.mb),this.V.start())):(Bi(this.j,this.m,o,null),wf(this,o)),c==4&&zr(this),this.i&&!this.J&&(c==4?HE(this.l,this):(this.i=!1,Pa(this)))}else hO(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),zr(this),To(this)}}}catch{}finally{}};function EE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function IE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=HN(t,n),i==Ru){e==4&&(t.o=4,ot(14),r=!1),Bi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==vf){t.o=4,ot(15),Bi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Bi(t.j,t.m,i,null),wf(t,i);EE(t)&&i!=Ru&&i!=vf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Am(e),e.M=!0,ot(11))):(Bi(t.j,t.m,n,"[Invalid Chunked Response]"),zr(t),To(t))}N.mb=function(){if(this.g){var t=on(this.g),e=this.g.ja();this.C<e.length&&(Ac(this),IE(this,t,e),this.i&&t!=4&&Pa(this))}};function HN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ru:(n=Number(e.substring(n,r)),isNaN(n)?vf:(r+=1,r+n>e.length?Ru:(e=e.slice(r,r+n),t.C=r+n,e)))}N.cancel=function(){this.J=!0,zr(this)};function Pa(t){t.Y=Date.now()+t.P,TE(t,t.P)}function TE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ka(Ze(t.lb,t),e)}function Ac(t){t.B&&(z.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(zN(this.j,this.A),this.L!=2&&(oa(),ot(17)),zr(this),this.o=2,To(this)):TE(this,this.Y-t)};function To(t){t.l.H==0||t.J||HE(t.l,t)}function zr(t){Ac(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,gm(t.V),fE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function wf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ef(n.i,t))){if(!t.K&&Ef(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ou(n),Nc(n);else break e;Cm(n),ot(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ka(Ze(n.ib,n),6e3));if(1>=NE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Br(n,11)}else if((t.K||n.g==t)&&Ou(n),!ta(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Em(s,s.h),s.h=null))}if(r.F){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ae(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=QE(r,r.J?r.pa:null,r.Y),o.K){OE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ac(a),Pa(a)),r.g=o}else BE(r);0<n.j.length&&Oc(n)}else u[0]!="stop"&&u[0]!="close"||Br(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Br(n,7):Sm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}oa(4)}catch{}}function GN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function qN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(yc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function SE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=qN(t),r=GN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var CE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function QN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Kr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Kr){this.h=t.h,Pu(this,t.j),this.s=t.s,this.g=t.g,Nu(this,t.m),this.l=t.l;var e=t.i,n=new aa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),fv(this,n),this.o=t.o}else t&&(e=String(t).match(CE))?(this.h=!1,Pu(this,e[1]||"",!0),this.s=so(e[2]||""),this.g=so(e[3]||"",!0),Nu(this,e[4]),this.l=so(e[5]||"",!0),fv(this,e[6]||"",!0),this.o=so(e[7]||"")):(this.h=!1,this.i=new aa(null,this.h))}Kr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(oo(e,pv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(oo(e,pv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(oo(n,n.charAt(0)=="/"?XN:KN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",oo(n,ZN)),t.join("")};function Vn(t){return new Kr(t)}function Pu(t,e,n){t.j=n?so(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Nu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fv(t,e,n){e instanceof aa?(t.i=e,eO(t.i,t.h)):(n||(e=oo(e,JN)),t.i=new aa(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function kc(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function so(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function oo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,YN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function YN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pv=/[#\/\?@]/g,KN=/[#\?:]/g,XN=/[#\?]/g,JN=/[#\?@]/g,ZN=/#/g;function aa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Or(t){t.g||(t.g=new Map,t.h=0,t.i&&QN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=aa.prototype;N.add=function(t,e){Or(this),this.i=null,t=Ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function AE(t,e){Or(t),e=Ns(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function kE(t,e){return Or(t),e=Ns(t,e),t.g.has(e)}N.forEach=function(t,e){Or(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};N.ta=function(){Or(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};N.Z=function(t){Or(this);let e=[];if(typeof t=="string")kE(this,t)&&(e=e.concat(this.g.get(Ns(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Or(this),this.i=null,t=Ns(this,t),kE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function xE(t,e,n){AE(t,e),0<n.length&&(t.i=null,t.g.set(Ns(t,e),am(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eO(t,e){e&&!t.j&&(Or(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(AE(this,r),xE(this,i,n))},t)),t.j=e}var tO=class{constructor(t,e){this.g=t,this.map=e}};function RE(t){this.l=t||nO,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nO=10;function PE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function NE(t){return t.h?1:t.g?t.g.size:0}function Ef(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Em(t,e){t.g?t.g.add(e):t.h=e}function OE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}RE.prototype.cancel=function(){if(this.i=DE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function DE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return am(t.i)}var rO=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function iO(){this.g=new rO}function sO(t,e,n){const r=n||"";try{SE(t,function(i,s){let o=i;Ca(i)&&(o=pm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function oO(t,e){const n=new Ic;if(z.Image){const r=new Image;r.onload=al(ul,n,r,"TestLoadImage: loaded",!0,e),r.onerror=al(ul,n,r,"TestLoadImage: error",!1,e),r.onabort=al(ul,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=al(ul,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ul(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function xc(t){this.l=t.ec||null,this.j=t.ob||!1}Ve(xc,vm);xc.prototype.g=function(){return new Rc(this.l,this.j)};xc.prototype.i=function(t){return function(){return t}}({});function Rc(t,e){Le.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Im,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ve(Rc,Le);var Im=0;N=Rc.prototype;N.open=function(t,e){if(this.readyState!=Im)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,la(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Na(this)),this.readyState=Im};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,la(this)),this.g&&(this.readyState=3,la(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function bE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Na(this):la(this),this.readyState==3&&bE(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Na(this))};N.Ya=function(t){this.g&&(this.response=t,Na(this))};N.ka=function(){this.g&&Na(this)};function Na(t){t.readyState=4,t.l=null,t.j=null,t.A=null,la(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function la(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Rc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var aO=z.JSON.parse;function _e(t){Le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ME,this.L=this.M=!1}Ve(_e,Le);var ME="",lO=/^https?$/i,uO=["POST","PUT"];N=_e.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():yf.g(),this.C=this.u?dv(this.u):dv(yf),this.g.onreadystatechange=Ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){mv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=z.FormData&&t instanceof z.FormData,!(0<=J1(uO,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{$E(this),0<this.B&&((this.L=cO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.ua,this)):this.A=ym(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){mv(this,s)}};function cO(t){return fs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof om<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function mv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,LE(t),Pc(t)}function LE(t){t.F||(t.F=!0,Be(t,"complete"),Be(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),Pc(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pc(this,!0)),_e.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?VE(this):this.kb())};N.kb=function(){VE(this)};function VE(t){if(t.h&&typeof om<"u"&&(!t.C[1]||on(t)!=4||t.da()!=2)){if(t.v&&on(t)==4)ym(t.La,0,t);else if(Be(t,"readystatechange"),on(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(CE)[1]||null;!i&&z.self&&z.self.location&&(i=z.self.location.protocol.slice(0,-1)),r=!lO.test(i?i.toLowerCase():"")}n=r}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var s=2<on(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",LE(t)}}finally{Pc(t)}}}}function Pc(t,e){if(t.g){$E(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=r}catch{}}}function $E(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function on(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),aO(e)}};function gv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ME:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function hO(t){const e={};t=(t.g&&2<=on(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ta(t[r]))continue;var n=LN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}RN(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jE(t){let e="";return um(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Tm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function FE(t){this.Ga=0,this.j=[],this.l=new Ic,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ys("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ys("baseRetryDelayMs",5e3,t),this.hb=Ys("retryDelaySeedMs",1e4,t),this.eb=Ys("forwardChannelMaxRetries",2,t),this.xa=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new RE(t&&t.concurrentRequestLimit),this.Ja=new iO,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=FE.prototype;N.ra=8;N.H=1;function Sm(t){if(UE(t),t.H==3){var e=t.W++,n=Vn(t.I);if(ae(n,"SID",t.K),ae(n,"RID",e),ae(n,"TYPE","terminate"),Oa(t,n),e=new Ra(t,t.l,e),e.L=2,e.v=kc(Vn(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=YE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Pa(e)}qE(t)}function Nc(t){t.g&&(Am(t),t.g.cancel(),t.g=null)}function UE(t){Nc(t),t.u&&(z.clearTimeout(t.u),t.u=null),Ou(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Oc(t){if(!PE(t.i)&&!t.m){t.m=!0;var e=t.Na;ra||cE(),ia||(ra(),ia=!0),mm.add(e,t),t.C=0}}function dO(t,e){return NE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ka(Ze(t.Na,t,e),GE(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ra(this,this.l,t);let s=this.s;if(this.U&&(s?(s=nE(s),rE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zE(this,i,e),n=Vn(this.I),ae(n,"RID",t),ae(n,"CVER",22),this.F&&ae(n,"X-HTTP-Session-Id",this.F),Oa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(jE(s)))+"&"+e:this.o&&Tm(n,this.o,s)),Em(this.i,i),this.bb&&ae(n,"TYPE","init"),this.P?(ae(n,"$req",e),ae(n,"SID","null"),i.aa=!0,_f(i,n,null)):_f(i,n,e),this.H=2}}else this.H==3&&(t?yv(this,t):this.j.length==0||PE(this.i)||yv(this))};function yv(t,e){var n;e?n=e.m:n=t.W++;const r=Vn(t.I);ae(r,"SID",t.K),ae(r,"RID",n),ae(r,"AID",t.V),Oa(t,r),t.o&&t.s&&Tm(r,t.o,t.s),n=new Ra(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=zE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Em(t.i,n),_f(n,r,e)}function Oa(t,e){t.na&&um(t.na,function(n,r){ae(e,r,n)}),t.h&&SE({},function(n,r){ae(e,r,n)})}function zE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ze(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{sO(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function BE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ra||cE(),ia||(ra(),ia=!0),mm.add(e,t),t.A=0}}function Cm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ka(Ze(t.Ma,t),GE(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,WE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ka(Ze(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ot(10),Nc(this),WE(this))};function Am(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function WE(t){t.g=new Ra(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Vn(t.wa);ae(e,"RID","rpc"),ae(e,"SID",t.K),ae(e,"AID",t.V),ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ae(e,"TO",t.qa),ae(e,"TYPE","xmlhttp"),Oa(t,e),t.o&&t.s&&Tm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=kc(Vn(e)),n.s=null,n.S=!0,wE(n,t)}N.ib=function(){this.v!=null&&(this.v=null,Nc(this),Cm(this),ot(19))};function Ou(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function HE(t,e){var n=null;if(t.g==e){Ou(t),Am(t),t.g=null;var r=2}else if(Ef(t.i,e))n=e.F,OE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Tc(),Be(r,new gE(r,n)),Oc(t)}else BE(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&dO(t,e)||r==2&&Cm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Br(t,5);break;case 4:Br(t,10);break;case 3:Br(t,6);break;default:Br(t,2)}}}function GE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Br(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ze(t.pb,t);n||(n=new Kr("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Pu(n,"https"),kc(n)),oO(n.toString(),r)}else ot(2);t.H=0,t.h&&t.h.za(e),qE(t),UE(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ot(2)):(this.l.info("Failed to ping google.com"),ot(1))};function qE(t){if(t.H=0,t.ma=[],t.h){const e=DE(t.i);(e.length!=0||t.j.length!=0)&&(av(t.ma,e),av(t.ma,t.j),t.i.i.length=0,am(t.j),t.j.length=0),t.h.ya()}}function QE(t,e,n){var r=n instanceof Kr?Vn(n):new Kr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Nu(r,r.m);else{var i=z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Kr(null);r&&Pu(s,r),e&&(s.g=e),i&&Nu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ae(r,n,e),ae(r,"VER",t.ra),Oa(t,r),r}function YE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new _e(new xc({ob:!0})):new _e(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function KE(){}N=KE.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function Du(){if(fs&&!(10<=Number(CN)))throw Error("Environmental error: no available transport.")}Du.prototype.g=function(t,e){return new Ct(t,e)};function Ct(t,e){Le.call(this),this.g=new FE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ta(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ta(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Os(this)}Ve(Ct,Le);Ct.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=QE(t,null,t.Y),Oc(t)};Ct.prototype.close=function(){Sm(this.g)};Ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=pm(t),t=n);e.j.push(new tO(e.fb++,t)),e.H==3&&Oc(e)};Ct.prototype.N=function(){this.g.h=null,delete this.j,Sm(this.g),delete this.g,Ct.$.N.call(this)};function XE(t){_m.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ve(XE,_m);function JE(){wm.call(this),this.status=1}Ve(JE,wm);function Os(t){this.g=t}Ve(Os,KE);Os.prototype.Ba=function(){Be(this.g,"a")};Os.prototype.Aa=function(t){Be(this.g,new XE(t))};Os.prototype.za=function(t){Be(this.g,new JE)};Os.prototype.ya=function(){Be(this.g,"b")};function fO(){this.blockSize=-1}function Kt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ve(Kt,fO);Kt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Kt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Hh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Hh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Hh(this,r),i=0;break}}this.h=i,this.i+=e};Kt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function re(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var pO={};function km(t){return-128<=t&&128>t?IN(t,function(e){return new re([e|0],0>e?-1:0)}):new re([t|0],0>t?-1:0)}function an(t){if(isNaN(t)||!isFinite(t))return Ji;if(0>t)return Fe(an(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=If;return new re(e,0)}function ZE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Fe(ZE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=an(Math.pow(e,8)),r=Ji,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=an(Math.pow(e,s)),r=r.R(s).add(an(o))):(r=r.R(n),r=r.add(an(o)))}return r}var If=4294967296,Ji=km(0),Tf=km(1),vv=km(16777216);N=re.prototype;N.ea=function(){if(Dt(this))return-Fe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:If+r)*e,e*=If}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(xn(this))return"0";if(Dt(this))return"-"+Fe(this).toString(t);for(var e=an(Math.pow(t,6)),n=this,r="";;){var i=Mu(n,e).g;n=bu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,xn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function xn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Dt(t){return t.h==-1}N.X=function(t){return t=bu(this,t),Dt(t)?-1:xn(t)?0:1};function Fe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new re(n,~t.h).add(Tf)}N.abs=function(){return Dt(this)?Fe(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new re(n,n[n.length-1]&-2147483648?-1:0)};function bu(t,e){return t.add(Fe(e))}N.R=function(t){if(xn(this)||xn(t))return Ji;if(Dt(this))return Dt(t)?Fe(this).R(Fe(t)):Fe(Fe(this).R(t));if(Dt(t))return Fe(this.R(Fe(t)));if(0>this.X(vv)&&0>t.X(vv))return an(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,cl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,cl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,cl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,cl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new re(n,0)};function cl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ks(t,e){this.g=t,this.h=e}function Mu(t,e){if(xn(e))throw Error("division by zero");if(xn(t))return new Ks(Ji,Ji);if(Dt(t))return e=Mu(Fe(t),e),new Ks(Fe(e.g),Fe(e.h));if(Dt(e))return e=Mu(t,Fe(e)),new Ks(Fe(e.g),e.h);if(30<t.g.length){if(Dt(t)||Dt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Tf,r=e;0>=r.X(t);)n=_v(n),r=_v(r);var i=Si(n,1),s=Si(r,1);for(r=Si(r,2),n=Si(n,2);!xn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Si(r,1),n=Si(n,1)}return e=bu(t,i.R(e)),new Ks(i,e)}for(i=Ji;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=an(n),o=s.R(e);Dt(o)||0<o.X(t);)n-=r,s=an(n),o=s.R(e);xn(s)&&(s=Tf),i=i.add(s),t=bu(t,o)}return new Ks(i,t)}N.gb=function(t){return Mu(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new re(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new re(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new re(n,this.h^t.h)};function _v(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new re(n,t.h)}function Si(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new re(i,t.h)}Du.prototype.createWebChannel=Du.prototype.g;Ct.prototype.send=Ct.prototype.u;Ct.prototype.open=Ct.prototype.m;Ct.prototype.close=Ct.prototype.close;Sc.NO_ERROR=0;Sc.TIMEOUT=8;Sc.HTTP_ERROR=6;yE.COMPLETE="complete";vE.EventType=xa;xa.OPEN="a";xa.CLOSE="b";xa.ERROR="c";xa.MESSAGE="d";Le.prototype.listen=Le.prototype.O;_e.prototype.listenOnce=_e.prototype.P;_e.prototype.getLastError=_e.prototype.Sa;_e.prototype.getLastErrorCode=_e.prototype.Ia;_e.prototype.getStatus=_e.prototype.da;_e.prototype.getResponseJson=_e.prototype.Wa;_e.prototype.getResponseText=_e.prototype.ja;_e.prototype.send=_e.prototype.ha;_e.prototype.setWithCredentials=_e.prototype.Oa;Kt.prototype.digest=Kt.prototype.l;Kt.prototype.reset=Kt.prototype.reset;Kt.prototype.update=Kt.prototype.j;re.prototype.add=re.prototype.add;re.prototype.multiply=re.prototype.R;re.prototype.modulo=re.prototype.gb;re.prototype.compare=re.prototype.X;re.prototype.toNumber=re.prototype.ea;re.prototype.toString=re.prototype.toString;re.prototype.getBits=re.prototype.D;re.fromNumber=an;re.fromString=ZE;var mO=function(){return new Du},gO=function(){return Tc()},Gh=Sc,yO=yE,vO=_i,wv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},hl=vE,_O=_e,wO=Kt,Zi=re;const Ev="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Qp("@firebase/firestore");function Xs(){return ui.logLevel}function M(t,...e){if(ui.logLevel<=K.DEBUG){const n=e.map(xm);ui.debug(`Firestore (${Ds}): ${t}`,...n)}}function $n(t,...e){if(ui.logLevel<=K.ERROR){const n=e.map(xm);ui.error(`Firestore (${Ds}): ${t}`,...n)}}function ps(t,...e){if(ui.logLevel<=K.WARN){const n=e.map(xm);ui.warn(`Firestore (${Ds}): ${t}`,...n)}}function xm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function ce(t,e){t||U()}function W(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class IO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TO{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Nn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new eI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Ye(e)}}class SO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class CO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new SO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new AO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=xO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function ms(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Re(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new Re(0,0))}static max(){return new B(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ua.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ua?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends ua{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const RO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends ua{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return RO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(le.fromString(e))}static fromName(e){return new L(le.fromString(e).popFirst(5))}static empty(){return new L(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new le(e.slice()))}}function PO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new Sr(i,L.empty(),e)}function NO(t){return new Sr(t.readTime,t.key,-1)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(B.min(),L.empty(),-1)}static max(){return new Sr(B.max(),L.empty(),-1)}}function OO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==DO)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ba(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Rm.ae=-1;function Dc(t){return t==null}function Lu(t){return t===0&&1/t==-1/0}function MO(t){return typeof t=="number"&&Number.isInteger(t)&&!Lu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dl(this.root,e,this.comparator,!1)}getReverseIterator(){return new dl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dl(this.root,e,this.comparator,!0)}}class dl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tv(this.data.getIterator())}getIteratorFrom(e){return new Tv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class Tv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new It([])}unionWith(e){let n=new tt(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new rI("Invalid base64 string: "+s):s}}(e);return new it(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const LO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(ce(!!t),typeof t=="string"){let e=0;const n=LO.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ci(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nm(t){const e=t.mapValue.fields.__previous_value__;return Pm(e)?Nm(e):e}function ca(t){const e=Cr(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ha{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ha("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ha&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pm(t)?4:$O(t)?9007199254740991:10:U()}function pn(t,e){if(t===e)return!0;const n=hi(t);if(n!==hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ca(t).isEqual(ca(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Cr(i.timestampValue),a=Cr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ci(i.bytesValue).isEqual(ci(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Te(i.geoPointValue.latitude)===Te(s.geoPointValue.latitude)&&Te(i.geoPointValue.longitude)===Te(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Te(i.integerValue)===Te(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Te(i.doubleValue),a=Te(s.doubleValue);return o===a?Lu(o)===Lu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Iv(o)!==Iv(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!pn(o[l],a[l])))return!1;return!0}(t,e);default:return U()}}function da(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=hi(t),r=hi(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Te(s.integerValue||s.doubleValue),l=Te(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Sv(t.timestampValue,e.timestampValue);case 4:return Sv(ca(t),ca(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ci(s),l=ci(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Z(a[u],l[u]);if(c!==0)return c}return Z(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Z(Te(s.latitude),Te(o.latitude));return a!==0?a:Z(Te(s.longitude),Te(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=gs(a[u],l[u]);if(c)return c}return Z(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===fl.mapValue&&o===fl.mapValue)return 0;if(s===fl.mapValue)return 1;if(o===fl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=Z(l[h],c[h]);if(d!==0)return d;const g=gs(a[l[h]],u[c[h]]);if(g!==0)return g}return Z(l.length,c.length)}(t.mapValue,e.mapValue);default:throw U()}}function Sv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=Cr(t),r=Cr(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function ys(t){return Sf(t)}function Sf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ci(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return L.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Sf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Sf(n.fields[o])}`;return i+"}"}(t.mapValue):U()}function Cv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cf(t){return!!t&&"integerValue"in t}function Om(t){return!!t&&"arrayValue"in t}function Av(t){return!!t&&"nullValue"in t}function kv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vl(t){return!!t&&"mapValue"in t}function So(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=So(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=So(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $O(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=So(n)}setAll(e){let n=Je.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=So(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Vl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Vl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){wi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(So(this.value))}}function iI(t){const e=[];return wi(t.fields,(n,r)=>{const i=new Je([n]);if(Vl(r)){const s=iI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new It(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Xe(e,0,B.min(),B.min(),B.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Xe(e,1,n,B.min(),r,i,0)}static newNoDocument(e,n){return new Xe(e,2,n,B.min(),B.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,B.min(),B.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){this.position=e,this.inclusive=n}}function xv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=gs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n="asc"){this.field=e,this.dir=n}}function jO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{}class Ae extends sI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new UO(e,n,r):n==="array-contains"?new WO(e,r):n==="in"?new HO(e,r):n==="not-in"?new GO(e,r):n==="array-contains-any"?new qO(e,r):new Ae(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zO(e,r):new BO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gs(n,this.value)):n!==null&&hi(this.value)===hi(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Xt extends sI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Xt(e,n)}matches(e){return oI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function oI(t){return t.op==="and"}function aI(t){return FO(t)&&oI(t)}function FO(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function Af(t){if(t instanceof Ae)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(aI(t))return t.filters.map(e=>Af(e)).join(",");{const e=t.filters.map(n=>Af(n)).join(",");return`${t.op}(${e})`}}function lI(t,e){return t instanceof Ae?function(r,i){return i instanceof Ae&&r.op===i.op&&r.field.isEqual(i.field)&&pn(r.value,i.value)}(t,e):t instanceof Xt?function(r,i){return i instanceof Xt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&lI(o,i.filters[a]),!0):!1}(t,e):void U()}function uI(t){return t instanceof Ae?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof Xt?function(n){return n.op.toString()+" {"+n.getFilters().map(uI).join(" ,")+"}"}(t):"Filter"}class UO extends Ae{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class zO extends Ae{constructor(e,n){super(e,"in",n),this.keys=cI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BO extends Ae{constructor(e,n){super(e,"not-in",n),this.keys=cI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class WO extends Ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Om(n)&&da(n.arrayValue,this.value)}}class HO extends Ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&da(this.value.arrayValue,n)}}class GO extends Ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!da(this.value.arrayValue,n)}}class qO extends Ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Om(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>da(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Pv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new QO(t,e,n,r,i,s,o)}function Dm(t){const e=W(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Af(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Dc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.he=n}return e.he}function bm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rv(t.startAt,e.startAt)&&Rv(t.endAt,e.endAt)}function kf(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function YO(t,e,n,r,i,s,o,a){return new Ma(t,e,n,r,i,s,o,a)}function Mm(t){return new Ma(t)}function Nv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Lm(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function dI(t){return t.collectionGroup!==null}function Ao(t){const e=W(t);if(e.Pe===null){e.Pe=[];const n=Lm(e),r=hI(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Co(n)),e.Pe.push(new Co(Je.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Co(Je.keyField(),s))}}}return e.Pe}function dn(t){const e=W(t);return e.Ie||(e.Ie=KO(e,Ao(t))),e.Ie}function KO(t,e){if(t.limitType==="F")return Pv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Co(i.field,s)});const n=t.endAt?new Vu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vu(t.startAt.position,t.startAt.inclusive):null;return Pv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xf(t,e){e.getFirstInequalityField(),Lm(t);const n=t.filters.concat([e]);return new Ma(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Rf(t,e,n){return new Ma(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bc(t,e){return bm(dn(t),dn(e))&&t.limitType===e.limitType}function fI(t){return`${Dm(dn(t))}|lt:${t.limitType}`}function Ai(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>uI(i)).join(", ")}]`),Dc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ys(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ys(i)).join(",")),`Target(${r})`}(dn(t))}; limitType=${t.limitType})`}function Mc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):L.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ao(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=xv(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ao(r),i)||r.endAt&&!function(o,a,l){const u=xv(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ao(r),i))}(t,e)}function XO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pI(t){return(e,n)=>{let r=!1;for(const i of Ao(t)){const s=JO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function JO(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?gs(l,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return nI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=new ge(L.comparator);function jn(){return ZO}const mI=new ge(L.comparator);function ao(...t){let e=mI;for(const n of t)e=e.insert(n.key,n);return e}function gI(t){let e=mI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return ko()}function yI(){return ko()}function ko(){return new bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const eD=new ge(L.comparator),tD=new tt(L.comparator);function Q(...t){let e=tD;for(const n of t)e=e.add(n);return e}const nD=new tt(Z);function rD(){return nD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lu(e)?"-0":e}}function _I(t){return{integerValue:""+t}}function iD(t,e){return MO(e)?_I(e):vI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this._=void 0}}function sD(t,e,n){return t instanceof $u?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Pm(s)&&(s=Nm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof vs?EI(t,e):t instanceof fa?II(t,e):function(i,s){const o=wI(i,s),a=Ov(o)+Ov(i.Te);return Cf(o)&&Cf(i.Te)?_I(a):vI(i.serializer,a)}(t,e)}function oD(t,e,n){return t instanceof vs?EI(t,e):t instanceof fa?II(t,e):n}function wI(t,e){return t instanceof ju?function(r){return Cf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class $u extends Lc{}class vs extends Lc{constructor(e){super(),this.elements=e}}function EI(t,e){const n=TI(e);for(const r of t.elements)n.some(i=>pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class fa extends Lc{constructor(e){super(),this.elements=e}}function II(t,e){let n=TI(e);for(const r of t.elements)n=n.filter(i=>!pn(i,r));return{arrayValue:{values:n}}}class ju extends Lc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Ov(t){return Te(t.integerValue||t.doubleValue)}function TI(t){return Om(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n){this.field=e,this.transform=n}}function lD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof vs&&i instanceof vs||r instanceof fa&&i instanceof fa?ms(r.elements,i.elements,pn):r instanceof ju&&i instanceof ju?pn(r.Te,i.Te):r instanceof $u&&i instanceof $u}(t.transform,e.transform)}class uD{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $l(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vc{}function SI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new AI(t.key,qt.none()):new La(t.key,t.data,qt.none());{const n=t.data,r=dt.empty();let i=new tt(Je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Dr(t.key,r,new It(i.toArray()),qt.none())}}function cD(t,e,n){t instanceof La?function(i,s,o){const a=i.value.clone(),l=bv(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(i,s,o){if(!$l(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=bv(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(CI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function xo(t,e,n,r){return t instanceof La?function(s,o,a,l){if(!$l(s.precondition,o))return a;const u=s.value.clone(),c=Mv(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(s,o,a,l){if(!$l(s.precondition,o))return a;const u=Mv(s.fieldTransforms,l,o),c=o.data;return c.setAll(CI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return $l(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function hD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=wI(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function Dv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ms(r,i,(s,o)=>lD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class La extends Vc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dr extends Vc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function CI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function bv(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,oD(o,a,n[i]))}return r}function Mv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,sD(s,o,e))}return r}class AI extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dD extends Vc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&cD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=SI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>Dv(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>Dv(n,r))}}class Vm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return eD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Vm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,X;function gD(t){switch(t){default:return U();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function kI(t){if(t===void 0)return $n("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ie.OK:return S.OK;case Ie.CANCELLED:return S.CANCELLED;case Ie.UNKNOWN:return S.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return S.INTERNAL;case Ie.UNAVAILABLE:return S.UNAVAILABLE;case Ie.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ie.NOT_FOUND:return S.NOT_FOUND;case Ie.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ie.ABORTED:return S.ABORTED;case Ie.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ie.DATA_LOSS:return S.DATA_LOSS;default:return U()}}(X=Ie||(Ie={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=new Zi([4294967295,4294967295],0);function Lv(t){const e=yD().encode(t),n=new wO;return n.update(e),new Uint8Array(n.digest())}function Vv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zi([n,r],0),new Zi([i,s],0)]}class $m{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new lo(`Invalid padding: ${n}`);if(r<0)throw new lo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new lo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new lo(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Zi.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(Zi.fromNumber(r)));return i.compare(vD)===1&&(i=new Zi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Lv(e),[r,i]=Vv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new $m(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Lv(e),[r,i]=Vv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Va.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $c(B.min(),i,new ge(Z),jn(),Q())}}class Va{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Va(r,n,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class xI{constructor(e,n){this.targetId=e,this.ye=n}}class RI{constructor(e,n,r=it.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class $v{constructor(){this.we=0,this.Se=Fv(),this.be=it.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=Q(),n=Q(),r=Q();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new Va(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Fv()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class _D{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=jn(),this.Ue=jv(),this.We=new ge(Z)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(kf(s))if(r===0){const o=new L(s.path);this.je(n,o,Xe.newNoDocument(o,B.min()))}else ce(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ci(r).toUint8Array()}catch(l){if(l instanceof rI)return ps("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new $m(o,i,s)}catch(l){return ps(l instanceof lo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&kf(a.target)){const l=new L(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,Xe.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=Q();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new $c(e,n,this.We,this.$e,r);return this.$e=jn(),this.Ue=jv(),this.We=new ge(Z),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new $v,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new tt(Z),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new $v),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function jv(){return new ge(L.comparator)}function Fv(){return new ge(L.comparator)}const wD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ED=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ID=(()=>({and:"AND",or:"OR"}))();class TD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pf(t,e){return t.useProto3Json||Dc(e)?e:{value:e}}function Fu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function PI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SD(t,e){return Fu(t,e.toTimestamp())}function fn(t){return ce(!!t),B.fromTimestamp(function(n){const r=Cr(n);return new Re(r.seconds,r.nanos)}(t))}function jm(t,e){return function(r){return new le(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function NI(t){const e=le.fromString(t);return ce(MI(e)),e}function Nf(t,e){return jm(t.databaseId,e.path)}function qh(t,e){const n=NI(e);if(n.get(1)!==t.databaseId.projectId)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(OI(n))}function Of(t,e){return jm(t.databaseId,e)}function CD(t){const e=NI(t);return e.length===4?le.emptyPath():OI(e)}function Df(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function OI(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Uv(t,e,n){return{name:Nf(t,e),fields:n.value.mapValue.fields}}function AD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ce(c===void 0||typeof c=="string"),it.fromBase64String(c||"")):(ce(c===void 0||c instanceof Uint8Array),it.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?S.UNKNOWN:kI(u.code);return new D(c,u.message||"")}(o);n=new RI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qh(t,r.document.name),s=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):B.min(),a=new dt({mapValue:{fields:r.document.fields}}),l=Xe.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new jl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qh(t,r.document),s=r.readTime?fn(r.readTime):B.min(),o=Xe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new jl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qh(t,r.document),s=r.removedTargetIds||[];n=new jl([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new mD(i,s),a=r.targetId;n=new xI(a,o)}}return n}function kD(t,e){let n;if(e instanceof La)n={update:Uv(t,e.key,e.value)};else if(e instanceof AI)n={delete:Nf(t,e.key)};else if(e instanceof Dr)n={update:Uv(t,e.key,e.data),updateMask:LD(e.fieldMask)};else{if(!(e instanceof dD))return U();n={verify:Nf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof $u)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof vs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ju)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:SD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function xD(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?fn(i.updateTime):fn(s);return o.isEqual(B.min())&&(o=fn(s)),new uD(o,i.transformResults||[])}(n,e))):[]}function RD(t,e){return{documents:[Of(t,e.path)]}}function PD(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Of(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Of(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return bI(Xt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:ki(h.field),direction:DD(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Pf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function ND(t){let e=CD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=DI(h);return d instanceof Xt&&aI(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Co(xi(v.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Dc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,g=h.values||[];return new Vu(g,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,g=h.values||[];return new Vu(g,d)}(n.endAt)),YO(e,i,o,s,a,"F",l,u)}function OD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function DI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xi(n.unaryFilter.field);return Ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=xi(n.unaryFilter.field);return Ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xi(n.unaryFilter.field);return Ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xi(n.unaryFilter.field);return Ae.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(n){return Ae.create(xi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xt.create(n.compositeFilter.filters.map(r=>DI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(t):U()}function DD(t){return wD[t]}function bD(t){return ED[t]}function MD(t){return ID[t]}function ki(t){return{fieldPath:t.canonicalString()}}function xi(t){return Je.fromServerFormat(t.fieldPath)}function bI(t){return t instanceof Ae?function(n){if(n.op==="=="){if(kv(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NAN"}};if(Av(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kv(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NAN"}};if(Av(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ki(n.field),op:bD(n.op),value:n.value}}}(t):t instanceof Xt?function(n){const r=n.getFilters().map(i=>bI(i));return r.length===1?r[0]:{compositeFilter:{op:MD(n.op),filters:r}}}(t):U()}function LD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function MI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n,r,i,s=B.min(),o=B.min(),a=it.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e){this.ht=e}}function $D(t){const e=ND({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(){this.an=new FD}addToCollectionParentIndex(e,n){return this.an.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Sr.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class FD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new tt(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new tt(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new _s(0)}static Ln(){return new _s(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(){this.changes=new bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&xo(r.mutation,i,It.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Q()){const i=Wr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ao();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=jn();const o=ko(),a=function(){return ko()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Dr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),xo(c.mutation,u,c.mutation.getFieldMask(),Re.now())):o.set(u.key,It.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new zD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ko();let i=new ge((o,a)=>o-a),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||It.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=yI();c.forEach(d=>{if(!s.has(d)){const g=SI(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return L.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(Wr());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Q())).next(c=>({batchId:a,changes:gI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=ao();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ao();return this.indexManager.getCollectionParents(e,s).next(a=>k.forEach(a,l=>{const u=function(h,d){return new Ma(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Xe.newInvalidDocument(c)))});let a=ao();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&xo(c.mutation,u,It.empty(),Re.now()),Mc(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return k.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:fn(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:$D(i.bundledQuery),readTime:fn(i.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.overlays=new ge(L.comparator),this.Pr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=Wr(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ge((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Wr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Wr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pD(n,r));let s=this.Pr.get(n);s===void 0&&(s=Q(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.Ir=new tt(Pe.dr),this.Tr=new tt(Pe.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Pe(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new L(new le([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new L(new le([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=Q();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return L.comparator(e.key,n.key)||Z(e.yr,n.yr)}static Er(e,n){return Z(e.yr,n.yr)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new tt(Pe.dr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new fD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new Pe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(Z);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new L(s),0);let a=new tt(Z);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.yr)),!0)},o),k.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return k.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Pe(n,0),i=this.Sr.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e){this.Fr=e,this.docs=function(){return new ge(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xe.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=jn();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||OO(NO(c),r)<=0||(i.has(c.key)||Mc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}Mr(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QD(this)}getSize(e){return k.resolve(this.size)}}class QD extends UD{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e){this.persistence=e,this.Or=new bs(n=>Dm(n),bm),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Fm,this.targetCount=0,this.Lr=_s.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),k.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new _s(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Qn(n),k.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n){this.kr={},this.overlays={},this.qr=new Rm(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new YD(this),this.indexManager=new jD,this.remoteDocumentCache=function(i){return new qD(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new VD(n),this.Ur=new WD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new GD(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const i=new XD(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return k.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class XD extends bO{constructor(e){super(),this.currentSequenceNumber=e}}class Um{constructor(e){this.persistence=e,this.jr=new Fm,this.Hr=null}static Jr(e){return new Um(e)}get Yr(){if(this.Hr)return this.Hr;throw U()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),k.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Yr,r=>{const i=L.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return k.or([()=>k.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=Q(),i=Q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new JD;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(Xs()<=K.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Ai(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),k.resolve()):(Xs()<=K.DEBUG&&M("QueryEngine","Query:",Ai(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(Xs()<=K.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Ai(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dn(n))):k.resolve())}Hi(e,n){if(Nv(n))return k.resolve(null);let r=dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rf(n,null,"F"),r=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Q(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(e,Rf(n,null,"F")):this.ts(e,u,n,l)}))})))}Ji(e,n,r,i){return Nv(n)||i.isEqual(B.min())?k.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?k.resolve(null):(Xs()<=K.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ai(n)),this.ts(e,o,n,PO(i,-1)).next(a=>a))})}Xi(e,n){let r=new tt(pI(e));return n.forEach((i,s)=>{Mc(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return Xs()<=K.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Ai(n)),this.ji.getDocumentsMatchingQuery(e,n,Sr.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new ge(Z),this.ss=new bs(s=>Dm(s),bm),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BD(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function tb(t,e,n,r){return new eb(t,e,n,r)}async function LI(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function nb(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let g=k.resolve();return d.forEach(v=>{g=g.next(()=>c.getEntry(l,v)).next(_=>{const I=u.docVersions.get(v);ce(I!==null),_.version.compareTo(I)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function VI(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function rb(t,e){const n=W(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(it.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(_,I,m){return _.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,g,c)&&a.push(n.Kr.updateTargetData(s,g))});let l=jn(),u=Q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(ib(s,o,e.documentUpdates).next(c=>{l=c.ls,u=c.hs})),!r.isEqual(B.min())){const c=n.Kr.getLastRemoteSnapshotVersion(s).next(h=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.rs=i,s))}function ib(t,e,n){let r=Q(),i=Q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=jn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ls:o,hs:i}})}function sb(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ob(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function bf(t,e,n){const r=W(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ba(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function zv(t,e,n){const r=W(t);let i=B.min(),s=Q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=W(l),d=h.ss.get(c);return d!==void 0?k.resolve(h.rs.get(d)):h.Kr.getTargetData(u,c)}(r,o,dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:Q())).next(a=>(ab(r,XO(e),a),{documents:a,Ps:s})))}function ab(t,e,n){let r=t.os.get(e)||B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.os.set(e,r)}class Bv{constructor(){this.activeTargetIds=rD()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lb{constructor(){this.ro=new Bv,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new Bv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl=null;function Qh(){return pl===null?pl=function(){return 268435456+Math.round(2147483648*Math.random())}():pl++,"0x"+pl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="WebChannelConnection";class db extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=Qh(),l=this.Do(n,r);M("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,i).then(c=>(M("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ps("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ds}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=cb[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Qh();return new Promise((o,a)=>{const l=new _O;l.setWithCredentials(!0),l.listenOnce(yO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Gh.NO_ERROR:const c=l.getResponseJson();M(qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Gh.TIMEOUT:M(qe,`RPC '${e}' ${s} timed out`),a(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case Gh.HTTP_ERROR:const h=l.getStatus();if(M(qe,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(I){const m=I.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(m)>=0?m:S.UNKNOWN}(g.status);a(new D(v,g.message))}else a(new D(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(S.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{M(qe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);M(qe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Mo(e,n,r){const i=Qh(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mO(),a=gO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");M(qe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,g=!1;const v=new hb({ho:I=>{g?M(qe,`Not sending because RPC '${e}' stream ${i} is closed:`,I):(d||(M(qe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),M(qe,`RPC '${e}' stream ${i} sending:`,I),h.send(I))},Po:()=>h.close()}),_=(I,m,f)=>{I.listen(m,y=>{try{f(y)}catch(E){setTimeout(()=>{throw E},0)}})};return _(h,hl.EventType.OPEN,()=>{g||M(qe,`RPC '${e}' stream ${i} transport opened.`)}),_(h,hl.EventType.CLOSE,()=>{g||(g=!0,M(qe,`RPC '${e}' stream ${i} transport closed`),v.mo())}),_(h,hl.EventType.ERROR,I=>{g||(g=!0,ps(qe,`RPC '${e}' stream ${i} transport errored:`,I),v.mo(new D(S.UNAVAILABLE,"The operation could not be completed")))}),_(h,hl.EventType.MESSAGE,I=>{var m;if(!g){const f=I.data[0];ce(!!f);const y=f,E=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(E){M(qe,`RPC '${e}' stream ${i} received error:`,E);const T=E.status;let A=function(H){const R=Ie[H];if(R!==void 0)return kI(R)}(T),C=E.message;A===void 0&&(A=S.INTERNAL,C="Unknown error status: "+T+" with message "+E.message),g=!0,v.mo(new D(A,C)),h.close()}else M(qe,`RPC '${e}' stream ${i} received:`,f),v.fo(f)}}),_(a,vO.STAT_EVENT,I=>{I.stat===wv.PROXY?M(qe,`RPC '${e}' stream ${i} detected buffering proxy`):I.stat===wv.NOPROXY&&M(qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Vo()},0),v}}function Yh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t){return new TD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new $I(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===S.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new D(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fb extends jI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=AD(this.serializer,e),r=function(s){if(!("targetChange"in s))return B.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?fn(o.readTime):B.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=Df(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=kf(l)?{documents:RD(s,l)}:{query:PD(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=PI(s,o.resumeToken);const u=Pf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(B.min())>0){a.readTime=Fu(s,o.snapshotVersion.toTimestamp());const u=Pf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=OD(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=Df(this.serializer),n.removeTarget=e,this.n_(n)}}class pb extends jI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=xD(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.T_(r,n)}return ce(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Df(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kD(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(S.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(S.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class gb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?($n(n),this.p_=!1):M("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{Ei(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=W(l);u.F_.add(4),await $a(u),u.O_.set("Unknown"),u.F_.delete(4),await Fc(u)}(this))})}),this.O_=new gb(r,i)}}async function Fc(t){if(Ei(t))for(const e of t.M_)await e(!0)}async function $a(t){for(const e of t.M_)await e(!1)}function FI(t,e){const n=W(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Hm(n)?Wm(n):Ms(n).Yo()&&Bm(n,e))}function UI(t,e){const n=W(t),r=Ms(n);n.v_.delete(e),r.Yo()&&zI(n,e),n.v_.size===0&&(r.Yo()?r.e_():Ei(n)&&n.O_.set("Unknown"))}function Bm(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ms(t).l_(e)}function zI(t,e){t.N_.Le(e),Ms(t).h_(e)}function Wm(t){t.N_=new _D({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Ms(t).start(),t.O_.y_()}function Hm(t){return Ei(t)&&!Ms(t).Jo()&&t.v_.size>0}function Ei(t){return W(t).F_.size===0}function BI(t){t.N_=void 0}async function vb(t){t.v_.forEach((e,n)=>{Bm(t,e)})}async function _b(t,e){BI(t),Hm(t)?(t.O_.b_(e),Wm(t)):t.O_.set("Unknown")}async function wb(t,e,n){if(t.O_.set("Online"),e instanceof RI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uu(t,r)}else if(e instanceof jl?t.N_.Ge(e):e instanceof xI?t.N_.Xe(e):t.N_.He(e),!n.isEqual(B.min()))try{const r=await VI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.v_.get(u);c&&s.v_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.v_.get(l);if(!c)return;s.v_.set(l,c.withResumeToken(it.EMPTY_BYTE_STRING,c.snapshotVersion)),zI(s,l);const h=new sr(c.target,l,u,c.sequenceNumber);Bm(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Uu(t,r)}}async function Uu(t,e,n){if(!ba(e))throw e;t.F_.add(1),await $a(t),t.O_.set("Offline"),n||(n=()=>VI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Fc(t)})}function WI(t,e){return e().catch(n=>Uu(t,n,e))}async function Uc(t){const e=W(t),n=Ar(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;Eb(e);)try{const i=await sb(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,Ib(e,i)}catch(i){await Uu(e,i)}HI(e)&&GI(e)}function Eb(t){return Ei(t)&&t.C_.length<10}function Ib(t,e){t.C_.push(e);const n=Ar(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function HI(t){return Ei(t)&&!Ar(t).Jo()&&t.C_.length>0}function GI(t){Ar(t).start()}async function Tb(t){Ar(t).A_()}async function Sb(t){const e=Ar(t);for(const n of t.C_)e.d_(n.mutations)}async function Cb(t,e,n){const r=t.C_.shift(),i=Vm.from(r,e,n);await WI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Uc(t)}async function Ab(t,e){e&&Ar(t).I_&&await async function(r,i){if(function(o){return gD(o)&&o!==S.ABORTED}(i.code)){const s=r.C_.shift();Ar(r).Xo(),await WI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Uc(r)}}(t,e),HI(t)&&GI(t)}async function Hv(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Ei(n);n.F_.add(3),await $a(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Fc(n)}async function kb(t,e){const n=W(t);e?(n.F_.delete(2),await Fc(n)):e||(n.F_.add(2),await $a(n),n.O_.set("Unknown"))}function Ms(t){return t.B_||(t.B_=function(n,r,i){const s=W(n);return s.V_(),new fb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:vb.bind(null,t),Eo:_b.bind(null,t),c_:wb.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Hm(t)?Wm(t):t.O_.set("Unknown")):(await t.B_.stop(),BI(t))})),t.B_}function Ar(t){return t.L_||(t.L_=function(n,r,i){const s=W(n);return s.V_(),new pb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:Tb.bind(null,t),Eo:Ab.bind(null,t),E_:Sb.bind(null,t),T_:Cb.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Uc(t)):(await t.L_.stop(),t.C_.length>0&&(M("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Gm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qm(t,e){if($n("AsyncQueue",`${e}: ${t}`),ba(t))return new D(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=ao(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(){this.k_=new ge(L.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):U():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ws{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ws(e,n,es.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.Q_=void 0,this.listeners=[]}}class Rb{constructor(){this.queries=new bs(e=>fI(e),bc),this.onlineState="Unknown",this.K_=new Set}}async function qI(t,e){const n=W(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new xb),i)try{s.Q_=await n.onListen(r)}catch(o){const a=qm(o,`Initialization of query '${Ai(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&Qm(n)}async function QI(t,e){const n=W(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Pb(t,e){const n=W(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&Qm(n)}function Nb(t,e,n){const r=W(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Qm(t){t.K_.forEach(e=>{e.next()})}class YI{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.key=e}}class XI{constructor(e){this.key=e}}class Ob{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Q(),this.mutatedKeys=Q(),this.ua=pI(e),this.ca=new es(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Gv,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Mc(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let I=!1;d&&g?d.data.isEqual(g.data)?v!==_&&(r.track({type:3,doc:g}),I=!0):this.Ia(d,g)||(r.track({type:2,doc:g}),I=!0,(l&&this.ua(g,l)>0||u&&this.ua(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),I=!0):d&&!g&&(r.track({type:1,doc:d}),I=!0,(l||u)&&(a=!0)),I&&(g?(o=o.add(g),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((u,c)=>function(d,g){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return v(d)-v(g)}(u.type,c.type)||this.ua(u.doc,c.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,s.length!==0||l?{snapshot:new ws(this.query,e.ca,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Gv,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=Q(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new XI(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new KI(r))}),n}Ra(e){this.oa=e.Ps,this.aa=Q();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return ws.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class Db{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bb{constructor(e){this.key=e,this.ma=!1}}class Mb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new bs(a=>fI(a),bc),this.pa=new Map,this.ya=new Set,this.wa=new ge(L.comparator),this.Sa=new Map,this.ba=new Fm,this.Da={},this.Ca=new Map,this.va=_s.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function Lb(t,e){const n=Gb(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await ob(n.localStore,dn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Vb(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&FI(n.remoteStore,o)}return i}async function Vb(t,e,n,r,i){t.Ma=(h,d,g)=>async function(_,I,m,f){let y=I.view.ha(m);y.es&&(y=await zv(_.localStore,I.query,!1).then(({documents:A})=>I.view.ha(A,y)));const E=f&&f.targetChanges.get(I.targetId),T=I.view.applyChanges(y,_.isPrimaryClient,E);return Qv(_,I.targetId,T.Ea),T.snapshot}(t,h,d,g);const s=await zv(t.localStore,e,!0),o=new Ob(e,s.Ps),a=o.ha(s.documents),l=Va.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Qv(t,n,u.Ea);const c=new Db(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function $b(t,e){const n=W(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!bc(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await bf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),UI(n.remoteStore,r.targetId),Mf(n,r.targetId)}).catch(Da)):(Mf(n,r.targetId),await bf(n.localStore,r.targetId,!0))}async function jb(t,e,n){const r=qb(t);try{const i=await function(o,a){const l=W(o),u=Re.now(),c=a.reduce((g,v)=>g.add(v.key),Q());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let v=jn(),_=Q();return l._s.getEntries(g,c).next(I=>{v=I,v.forEach((m,f)=>{f.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,v)).next(I=>{h=I;const m=[];for(const f of a){const y=hD(f,h.get(f.key).overlayedDocument);y!=null&&m.push(new Dr(f.key,y,iI(y.value.mapValue),qt.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,m,a)}).next(I=>{d=I;const m=I.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(g,I.batchId,m)})}).then(()=>({batchId:d.batchId,changes:gI(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new ge(Z)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await ja(r,i.changes),await Uc(r.remoteStore)}catch(i){const s=qm(i,"Failed to persist write");n.reject(s)}}async function JI(t,e){const n=W(t);try{const r=await rb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?ce(o.ma):i.removedDocuments.size>0&&(ce(o.ma),o.ma=!1))}),await ja(n,r,e)}catch(r){await Da(r)}}function qv(t,e,n){const r=W(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=W(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.U_(a)&&(u=!0)}),u&&Qm(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Fb(t,e,n){const r=W(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new ge(L.comparator);o=o.insert(s,Xe.newNoDocument(s,B.min()));const a=Q().add(s),l=new $c(B.min(),new Map,new ge(Z),o,a);await JI(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),Ym(r)}else await bf(r.localStore,e,!1).then(()=>Mf(r,e,n)).catch(Da)}async function Ub(t,e){const n=W(t),r=e.batch.batchId;try{const i=await nb(n.localStore,e);eT(n,r,null),ZI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ja(n,i)}catch(i){await Da(i)}}async function zb(t,e,n){const r=W(t);try{const i=await function(o,a){const l=W(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ce(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);eT(r,e,n),ZI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ja(r,i)}catch(i){await Da(i)}}function ZI(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function eT(t,e,n){const r=W(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Mf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||tT(t,r)})}function tT(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(UI(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Ym(t))}function Qv(t,e,n){for(const r of n)r instanceof KI?(t.ba.addReference(r.key,e),Bb(t,r)):r instanceof XI?(M("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||tT(t,r.key)):U()}function Bb(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(M("SyncEngine","New document in limbo: "+n),t.ya.add(r),Ym(t))}function Ym(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new L(le.fromString(e)),r=t.va.next();t.Sa.set(r,new bb(n)),t.wa=t.wa.insert(n,r),FI(t.remoteStore,new sr(dn(Mm(n.path)),r,"TargetPurposeLimboResolution",Rm.ae))}}async function ja(t,e,n){const r=W(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=zm.$i(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,u){const c=W(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(u,d=>k.forEach(d.Qi,g=>c.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>k.forEach(d.Ki,g=>c.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!ba(h))throw h;M("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const g=c.rs.get(d),v=g.snapshotVersion,_=g.withLastLimboFreeSnapshotVersion(v);c.rs=c.rs.insert(d,_)}}}(r.localStore,s))}async function Wb(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await LI(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new D(S.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ja(n,r.cs)}}function Hb(t,e){const n=W(t),r=n.Sa.get(e);if(r&&r.ma)return Q().add(r.key);{let i=Q();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function Gb(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fb.bind(null,e),e.fa.c_=Pb.bind(null,e.eventManager),e.fa.xa=Nb.bind(null,e.eventManager),e}function qb(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ub.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zb.bind(null,e),e}class Yv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=jc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return tb(this.persistence,new ZD,e.initialUser,this.serializer)}createPersistence(e){return new KD(Um.Jr,this.serializer)}createSharedClientState(e){return new lb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Qb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wb.bind(null,this.syncEngine),await kb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Rb}()}createDatastore(e){const n=jc(e.databaseInfo.databaseId),r=function(s){return new db(s)}(e.databaseInfo);return function(s,o,a,l){return new mb(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new yb(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>qv(this.syncEngine,n,0),function(){return Wv.C()?new Wv:new ub}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new Mb(i,s,o,a,l,u);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=W(n);M("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await $a(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=tI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kh(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await LI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Xb(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Hv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Hv(e.remoteStore,s)),t._onlineComponents=e}function Kb(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Xb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Kb(n))throw n;ps("Error using user provided cache. Falling back to memory cache: "+n),await Kh(t,new Yv)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Kh(t,new Yv);return t._offlineComponents}async function rT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Kv(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Kv(t,new Qb))),t._onlineComponents}function Jb(t){return rT(t).then(e=>e.syncEngine)}async function iT(t){const e=await rT(t),n=e.eventManager;return n.onListen=Lb.bind(null,e.syncEngine),n.onUnlisten=$b.bind(null,e.syncEngine),n}function Zb(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new nT({next:d=>{o.enqueueAndForget(()=>QI(s,h));const g=d.docs.has(a);!g&&d.fromCache?u.reject(new D(S.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&l&&l.source==="server"?u.reject(new D(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new YI(Mm(a.path),c,{includeMetadataChanges:!0,Z_:!0});return qI(s,h)}(await iT(t),t.asyncQueue,e,n,r)),r.promise}function eM(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new nT({next:d=>{o.enqueueAndForget(()=>QI(s,h)),d.fromCache&&l.source==="server"?u.reject(new D(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new YI(a,c,{includeMetadataChanges:!0,Z_:!0});return qI(s,h)}(await iT(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t,e,n){if(!n)throw new D(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tM(t,e,n,r){if(e===!0&&r===!0)throw new D(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jv(t){if(!L.isDocumentKey(t))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zv(t){if(L.isDocumentKey(t))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zc(t);throw new D(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new e0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new e0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EO;switch(r.type){case"firstParty":return new CO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xv.get(n);r&&(M("ComponentProvider","Removing Datastore"),Xv.delete(n),r.terminate())}(this),Promise.resolve()}}function nM(t,e,n,r={}){var i;const s=(t=mn(t,Bc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ye.MOCK_USER;else{a=Lx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ye(u)}t._authCredentials=new IO(new eI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ls(this.firestore,e,this._query)}}class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class _r extends Ls{constructor(e,n,r){super(e,n,Mm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new L(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function Km(t,e,...n){if(t=Me(t),oT("collection","path",e),t instanceof Bc){const r=le.fromString(e,...n);return Zv(r),new _r(t,null,r)}{if(!(t instanceof lt||t instanceof _r))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return Zv(r),new _r(t.firestore,null,r)}}function kr(t,e,...n){if(t=Me(t),arguments.length===1&&(e=tI.V()),oT("doc","path",e),t instanceof Bc){const r=le.fromString(e,...n);return Jv(r),new lt(t,null,new L(r))}{if(!(t instanceof lt||t instanceof _r))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return Jv(r),new lt(t.firestore,t instanceof _r?t.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new $I(this,"async_queue_retry"),this.ou=()=>{const n=Yh();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Yh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Yh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new Nn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!ba(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw $n("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=Gm.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&U()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class Vs extends Bc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new rM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aT(this),this._firestoreClient.terminate()}}function iM(t,e){const n=typeof t=="object"?t:v1(),r=typeof t=="string"?t:e||"(default)",i=Kp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=bx("firestore");s&&nM(i,...s)}return i}function Xm(t){return t._firestoreClient||aT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function aT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new VO(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,sT(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Yb(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Es(it.fromBase64String(e))}catch(n){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Es(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM=/^__.*__$/;class oM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new La(e,this.data,n,this.fieldTransforms)}}class lT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Gc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Gc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return zu(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(uT(this.Tu)&&sM.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class aM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jc(e)}wu(e,n,r,i=!1){return new Gc({Tu:e,methodName:n,yu:r,path:Je.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qc(t){const e=t._freezeSettings(),n=jc(t._databaseId);return new aM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cT(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);Zm("Data must be an object, but it was:",o,r);const a=hT(r,o);let l,u;if(s.merge)l=new It(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Lf(e,h,n);if(!o.contains(d))throw new D(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);fT(c,d)||c.push(d)}l=new It(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new oM(new dt(a),l,u)}class Qc extends Hc{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qc}}function lM(t,e,n){return new Gc({Tu:3,yu:e.settings.yu,methodName:t._methodName,Ru:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class uM extends Hc{constructor(e,n){super(e),this.Su=n}_toFieldTransform(e){const n=lM(this,e,!0),r=this.Su.map(s=>$s(s,n)),i=new vs(r);return new aD(e.path,i)}isEqual(e){return this===e}}function cM(t,e,n,r){const i=t.wu(1,e,n);Zm("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();wi(r,(l,u)=>{const c=eg(e,l,n);u=Me(u);const h=i.mu(c);if(u instanceof Qc)s.push(c);else{const d=$s(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new It(s);return new lT(o,a,i.fieldTransforms)}function hM(t,e,n,r,i,s){const o=t.wu(1,e,n),a=[Lf(e,r,n)],l=[i];if(s.length%2!=0)throw new D(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Lf(e,s[d])),l.push(s[d+1]);const u=[],c=dt.empty();for(let d=a.length-1;d>=0;--d)if(!fT(u,a[d])){const g=a[d];let v=l[d];v=Me(v);const _=o.mu(g);if(v instanceof Qc)u.push(g);else{const I=$s(v,_);I!=null&&(u.push(g),c.set(g,I))}}const h=new It(u);return new lT(c,h,o.fieldTransforms)}function dM(t,e,n,r=!1){return $s(n,t.wu(r?4:3,e))}function $s(t,e){if(dT(t=Me(t)))return Zm("Unsupported field value:",e,t),hT(t,e);if(t instanceof Hc)return function(r,i){if(!uT(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=$s(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:Fu(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fu(i.serializer,s)}}if(r instanceof Jm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Es)return{bytesValue:PI(i.serializer,r._byteString)};if(r instanceof lt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:jm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${zc(r)}`)}(t,e)}function hT(t,e){const n={};return nI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wi(t,(r,i)=>{const s=$s(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Jm||t instanceof Es||t instanceof lt||t instanceof Hc)}function Zm(t,e,n){if(!dT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=zc(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Lf(t,e,n){if((e=Me(e))instanceof Wc)return e._internalPath;if(typeof e=="string")return eg(t,e);throw zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const fM=new RegExp("[~\\*/\\[\\]]");function eg(t,e,n){if(e.search(fM)>=0)throw zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wc(...e.split("."))._internalPath}catch{throw zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(S.INVALID_ARGUMENT,a+t+l)}function fT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pM extends pT{data(){return super.data()}}function tg(t,e){return typeof e=="string"?eg(t,e):e instanceof Wc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ng{}class gM extends ng{}function yM(t,e,...n){let r=[];e instanceof ng&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof rg).length,a=s.filter(l=>l instanceof Yc).length;if(o>1||o>0&&a>0)throw new D(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Yc extends gM{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yc(e,n,r)}_apply(e){const n=this._parse(e);return mT(e._query,n),new Ls(e.firestore,e.converter,xf(e._query,n))}_parse(e){const n=qc(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new D(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){n0(h,c);const g=[];for(const v of h)g.push(t0(l,s,v));d={arrayValue:{values:g}}}else d=t0(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||n0(h,c),d=dM(a,o,h,c==="in"||c==="not-in");return Ae.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function vM(t,e,n){const r=e,i=tg("where",t);return Yc._create(i,r,n)}class rg extends ng{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new rg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)mT(o,l),o=xf(o,l)}(e._query,n),new Ls(e.firestore,e.converter,xf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function t0(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new D(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dI(e)&&n.indexOf("/")!==-1)throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(le.fromString(n));if(!L.isDocumentKey(r))throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cv(t,new L(r))}if(n instanceof lt)return Cv(t,n._key);throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zc(n)}.`)}function n0(t,e){if(!Array.isArray(t)||t.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mT(t,e){if(e.isInequality()){const r=Lm(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new D(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=hI(t);s!==null&&_M(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function _M(t,e,n){if(!n.isEqual(e))throw new D(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class wM{convertValue(e,n="none"){switch(hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Jm(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Nm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ca(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);ce(MI(r));const i=new ha(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||$n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yT extends pT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(tg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fl extends yT{data(e={}){return super.data(e)}}class EM{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new uo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fl(this._firestore,this._userDataWriter,r.key,r,new uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Fl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new uo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Fl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new uo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:IM(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function IM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){t=mn(t,lt);const e=mn(t.firestore,Vs);return Zb(Xm(e),t._key).then(n=>SM(e,t,n))}class vT extends wM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function _T(t){t=mn(t,Ls);const e=mn(t.firestore,Vs),n=Xm(e),r=new vT(e);return mM(t._query),eM(n,t._query).then(i=>new EM(e,r,t,i))}function ig(t,e,n){t=mn(t,lt);const r=mn(t.firestore,Vs),i=gT(t.converter,e,n);return og(r,[cT(qc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qt.none())])}function sg(t,e,n,...r){t=mn(t,lt);const i=mn(t.firestore,Vs),s=qc(i);let o;return o=typeof(e=Me(e))=="string"||e instanceof Wc?hM(s,"updateDoc",t._key,e,n,r):cM(s,"updateDoc",t._key,e),og(i,[o.toMutation(t._key,qt.exists(!0))])}function TM(t,e){const n=mn(t.firestore,Vs),r=kr(t),i=gT(t.converter,e);return og(n,[cT(qc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function og(t,e){return function(r,i){const s=new Nn;return r.asyncQueue.enqueueAndForget(async()=>jb(await Jb(r),i,s)),s.promise}(Xm(t),e)}function SM(t,e,n){const r=n.docs.get(e._key),i=new vT(t);return new yT(t,i,e._key,r,new uo(n.hasPendingWrites,n.fromCache),e.converter)}function wT(...t){return new uM("arrayUnion",t)}(function(e,n=!0){(function(i){Ds=i})(Rs),ds(new si("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Vs(new TO(r.getProvider("auth-internal")),new kO(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ha(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),vr(Ev,"4.2.0",e),vr(Ev,"4.2.0","esm2017")})();const CM="AIzaSyBcrTODfHf1RN1yqQIJo6jnju5Vqqn_Et0",AM="cardbattle-c619e.firebaseapp.com",kM="cardbattle-c619e",xM="cardbattle-c619e.appspot.com",RM="280124788432",PM="1:280124788432:web:e778c082988431127d98d5",NM={apiKey:CM,authDomain:AM,projectId:kM,storageBucket:xM,messagingSenderId:RM,appId:PM},Kc=y1(NM),gn=iM(Kc),OM=V.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: ${t=>t.theme["gray-900"]};

  img {
    animation: rotation 2s linear infinite;
  }
  p {
    font-weight: bold;
    color: ${t=>t.theme["red-500"]};
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,DM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAADGCAMAAADR9FNCAAAAQlBMVEUAAACScoBqFz+EUGiQbXyBSmNeAy////+aW3djBzV6OlhpFj78+fru4ufq3ePQsb67j6KfYX3x5ur48/XMq7nCmaseLQQxAAAABnRSTlMAGoBBIUgsbwU/AAABgUlEQVR42u3dW04CQRBG4Qaxeq4gCvvfqhoMCmd8pKei51vBSfq1On+52AxjrKIfh035ttnGmrbXlqdY21OWkK+UTWTw+UDbyGBbyi5y2JUhchjKGLf67jRP9cHe9qeujxtjiVvdvjay7+LGXclLbegFJY1DmMKSrjbW/VLSv9bGXvvlkmNt7rhccqjNHZZL5trcvFwy1eam5ZK6AkssscQSS64sIUvIErKELCFLyBKyhCwhS8gSsoQsIUvIErKELCFLyBKyhCwhS8gSsoQsIUvIErKELCFLyBKyhCyhf1fyVpublkv2tbk5+/VynovuPFfueS7/E/2GiDjXhs7xU9pfMxH98fD4n0TTfDj2cV+ShSWWWGKJJVeWkCVkCVlClpAlZAlZQpaQJWQJWUKWkCVkCVlClpAlZAlZQpaQJWQJWUKWkCVkCVlClpAlZAlZQpaQJWQJ/eWSPpIoY+QwJlqpyLPckWfNJNHCS57Vm1KeY23P6daRPuyGMdYxDrtLwjs0AKf1kQFEawAAAABJRU5ErkJggg==";function bM(){return p.jsxs(OM,{children:[p.jsx("img",{src:DM,width:35,height:50}),p.jsx("p",{children:"Carregando..."})]})}const r0=sm(Kc),jt=w.createContext({});function MM({children:t}){const[e,n]=w.useState(null),[r,i]=w.useState(null),[s,o]=w.useState(!0);w.useEffect(()=>{const c=new Date(Date.now()+864e5).toUTCString(),h=e2(r0,d=>{d?(n(d),document.cookie=`userID=${d.uid}; expires=${c}; path=/`):(n(null),document.cookie=`userID=; expires=${c}; path=/;`),o(!1)});return()=>h()},[]),w.useEffect(()=>{async function l(){if(e&&!r){const u=kr(gn,"users",e.uid),c=await di(u);c.exists();const h=c.data();i(h)}}l()},[e]);function a(){i(null),t2(r0)}return p.jsx(jt.Provider,{value:{user:e,logOut:a,userFileRef:r},children:s?p.jsx(bM,{}):t})}function LM(){const{user:t,logOut:e}=w.useContext(jt),{userFileRef:n}=w.useContext(jt);return p.jsxs(mx,{children:[p.jsxs(Pt,{to:"/CardBattle/",className:"logo",children:["Card",p.jsx("span",{children:"Battle"})]}),p.jsxs("ul",{children:[n&&n.role==="ADMIN"?p.jsx("li",{children:p.jsxs(Pt,{to:"/CardBattle/createCard",children:[p.jsx(Sx,{width:22}),"Criar"]})}):p.jsx(p.Fragment,{}),p.jsx("li",{children:p.jsxs(Pt,{to:"/CardBattle/battles",children:[p.jsx(l1,{width:22}),"Batalhas"]})}),p.jsx("li",{children:p.jsxs(Pt,{to:"/CardBattle/deck",children:[p.jsx(wx,{width:22}),"Deck"]})}),t?p.jsxs(p.Fragment,{children:[p.jsx("li",{children:p.jsxs(Pt,{to:"/CardBattle/shop",children:[p.jsx(a1,{width:22}),"Loja"]})}),p.jsx("li",{children:p.jsxs("button",{onClick:e,children:[p.jsx(Tx,{width:22}),"Sair"]})})]}):p.jsxs(p.Fragment,{children:[p.jsx("li",{children:p.jsxs(Pt,{to:"/CardBattle/auth/login",children:[p.jsx(Ix,{width:22}),"Entrar"]})}),p.jsx("li",{children:p.jsxs(Pt,{to:"/CardBattle/auth/register",children:[p.jsx(vx,{width:22}),"Cadastrar"]})})]})]})]})}const VM=V.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;

  width: 100%;
  max-width: 1120px;

  margin: 0 auto;

  .avaliableCards,
  .deck {
    display: flex;

    gap: 0.5rem;

    padding: 1rem;

    border-radius: 6px;
  }
  .avaliableCards {
    flex-wrap: wrap;
    margin-bottom: 10rem;
    min-height: 300px;
    max-width: 950px;
    background-color: ${t=>t.theme["red-500"]};
  }
  .deck {
    position: fixed;
    justify-content: center;
    bottom: -15rem;

    border: 2px solid ${t=>t.theme["gray-900"]};
    background-color: ${t=>t.theme["red-300"]};
    min-height: 300px;
    width: 550px;

    transition: bottom 0.2s linear;

    &:hover {
      bottom: 0.5rem;
    }
  }
`,$M=V.button`
  display: flex;
  flex-direction: column;

  align-items: center;
  max-width: 180px;

  height: 270px;

  background-color: ${t=>t.theme["gray-900"]};
  border: ${t=>{switch(t.rarity){case"COMMON":return`2px solid ${t.theme["red-500"]}`;case"RARE":return`2px inset ${t.theme["gold-500"]}`;case"LEGENDARY":return`2px solid ${t.theme["red-500"]}`}}};
  ${t=>t.rarity==="LEGENDARY"&&`
    animation: rgbAnimation 5s ease-in-out infinite;
  `}

  border-radius: 6px;
  padding: 0.5rem;

  cursor: pointer;

  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }

  @keyframes rgbAnimation {
    0% {
      border-color: red;
    }
    33% {
      border-color: green;
    }
    66% {
      border-color: blue;
    }
    100% {
      border-color: red;
    }
  }
`,jM=V.div`
  width: 100%;
  height: 150px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`,FM=V.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  padding: 0.5rem;

  box-sizing: border-box;

  strong {
    color: ${t=>t.theme["red-500"]};
    line-break: auto;
    text-align: center;
  }
`,UM=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${t=>t.theme["gray-100"]};
  }
`,zM=V.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;

  margin-top: auto;

  .stat-container {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: ${t=>t.theme["red-500"]};
      font-size: 0.8rem;
      font-weight: bold;
    }
    svg {
      color: ${t=>t.theme["red-500"]};
    }
  }
`,Fa=w.createContext({});function BM({children:t}){const[e,n]=w.useState("deck"),[r,i]=w.useState(!1),s=w.useCallback(a=>{n(a)},[]);function o(a){i(a)}return p.jsx(Fa.Provider,{value:{gameStage:e,attacked:r,changeGameStage:s,changeAttacked:o},children:t})}function WM(){const[t,e]=w.useState([]);return w.useEffect(()=>{async function n(){const r=Km(gn,"cards"),s=(await _T(r)).docs.map(o=>{const a=o.data();return{id:o.id,...a}});e(s)}n()},[]),{cards:t}}function HM(){const{user:t}=w.useContext(jt),[e,n]=w.useState(!0),[r,i]=w.useState([]),s=w.useCallback(async()=>{n(!0);try{if(!t)return;const a=kr(gn,"users",t.uid),l=await di(a);if(l.exists()){const c=l.data().ownedCards||[];console.log(c);const h=Km(gn,"cards");if(c.length<0){i([]),console.log("No ids");return}const d=yM(h,vM("__name__","in",c)),v=(await _T(d)).docs.map(_=>{const I=_.data();return{id:_.id,...I}});i(v)}else i([])}catch(a){console.error("Error fetching owned cards:",a)}finally{n(!1)}},[t]);return w.useEffect(()=>{s()},[t,s]),{ownedCards:r,loading:e,reFetchOwnedCards:()=>{s()}}}const br=w.createContext({});function GM({children:t}){const[e,n]=w.useState([]),[r,i]=w.useState([]),[s,o]=w.useState([]),[a,l]=w.useState(null),{user:u}=w.useContext(jt),{cards:c}=WM(),{ownedCards:h,reFetchOwnedCards:d}=HM();w.useEffect(()=>{u&&I()},[u]),w.useEffect(()=>{i(c)},[c]),w.useEffect(()=>{o(h),console.log("A lista de cartas possuídas foi atualizada:",h)},[h]);function g(m){n(f=>[...f,m])}function v(m){n(e.filter(f=>f.id!==m))}const _=w.useCallback(m=>{l(m)},[]);function I(){d()}return p.jsx(br.Provider,{value:{cardsInDeck:e,OwnCards:s,avaliableCards:r,selectedCard:a,addCardToDeck:g,removeCardFromDeck:v,changeSelectedCard:_,updateOwnedCards:I},children:t})}function wr(t){const{cardsInDeck:e,addCardToDeck:n,removeCardFromDeck:r,changeSelectedCard:i}=w.useContext(br),{gameStage:s,changeGameStage:o,changeAttacked:a}=w.useContext(Fa);function l(){switch(s){case"deck":u();break;case"selecting":c();break;case"display":return}}function u(){if(e&&e.find(h=>h.id===t.id)){r(t.id);return}e.length>=3||n(t)}function c(){i(t),o("battle"),a(!1)}return p.jsxs($M,{onClick:l,rarity:t.rarity,children:[p.jsx(jM,{children:p.jsx("img",{src:t.img,loading:"lazy"})}),p.jsx(FM,{children:p.jsx("strong",{children:t.name})}),p.jsx(UM,{children:t.moves&&t.moves.map(h=>p.jsxs("p",{children:["✨",h.name," | DMG:",h.damage]},h.name))}),p.jsxs(zM,{children:[p.jsxs("div",{className:"stat-container",children:[p.jsx(l1,{size:15}),p.jsx("p",{children:`: ${t.atk} |`})]}),p.jsxs("div",{className:"stat-container",children:[p.jsx(_x,{size:15}),p.jsx("p",{children:`: ${t.hp} |`})]}),p.jsxs("div",{className:"stat-container",children:[p.jsx(Cx,{size:15}),p.jsx("p",{children:`: ${t.def}`})]})]})]})}function qM(){const{cardsInDeck:t,changeSelectedCard:e,OwnCards:n}=w.useContext(br),{changeGameStage:r}=w.useContext(Fa);return w.useEffect(()=>{r("deck"),e(null)},[r]),p.jsxs(VM,{children:[p.jsx("h1",{children:"Montar Deck"}),p.jsx("section",{className:"avaliableCards",children:n.map(i=>w.createElement(wr,{...i,key:i.id}))}),p.jsx("section",{className:"deck",children:t&&t.map((i,s)=>w.createElement(wr,{...i,key:`${i.id}-${s}`}))})]})}const QM=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;

  width: 100%;
  height: 200px;
  max-width: 200px;

  border: 1px solid ${t=>t.theme["red-500"]};

  border-radius: 6px;
  padding: 0.5rem;

  overflow: hidden;

  img {
    width: 130%;
    position: absolute;
    object-fit: cover;
    top: 50%;
    z-index: -1;

    transform: translateY(-50%);
  }

  strong {
    color: ${t=>t.theme["red-300"]};
    text-shadow: 1px 2px 2px black;
  }

  a {
    padding: 1rem;
    background-color: ${t=>t.theme["red-500"]};
    border: none;
    border-radius: 6px;
    box-sizing: border-box;

    width: 100%;

    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: ${t=>t.theme["gray-100"]};
    border: 1px solid transparent;

    &:hover {
      transition: 0.2s background-color;
      background-color: ${t=>t.theme["red-300"]};
      border: 1px solid ${t=>t.theme["gray-800"]};
      cursor: pointer;
    }
  }
`;function YM({id:t,characterImage:e}){const{cardsInDeck:n}=w.useContext(br),{user:r}=w.useContext(jt);return p.jsxs(QM,{children:[p.jsx("img",{src:e}),p.jsxs("strong",{children:["Batalha ",t]}),n.length>0?p.jsx(Pt,{to:`/CardBattle/battles/${t}`,children:"Lutar"}):p.jsx(p.Fragment,{children:r?p.jsx(Pt,{to:"/CardBattle/deck/",children:"Montar Deck"}):p.jsx(Pt,{to:"/CardBattle/auth/register",children:"Registre-se para lutar"})})]})}const KM=V.main`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`,XM="/CardBattle/assets/c74e901922011b4516d02e7cff8cb45d-f1b7294c.jpg",Xh="/CardBattle/assets/cba62536cf97f1a7441832d5b8bce18b-4f380cb5.jpg",Jh="/CardBattle/assets/Booster_null-32652edd.jpg",JM="/CardBattle/assets/Booster_1-98b02b9a.jpg",ZM="/CardBattle/assets/Booster_2-9741b03b.jpg",eL=[{id:"0",name:"Chaotic Uprise",img:ZM,cards:["bLtzbgFzK4LE1mXYEwo8","Xr3ayKlhwYMAT0iNVCfF","jwkquj6nHyaffJYeC3Wd","txiPmKzNKQ0LHRQYPzRE"],cost:500},{id:"1",name:"Dimentional Strike",img:JM,cards:["FtMkaOY83uFVI3RrtsQg","Xr3ayKlhwYMAT0iNVCfF","dIYtIWOVHHbqPWjaXHwB"],cost:500},{id:"3",name:"",img:Jh,cards:[""],cost:0},{id:"4",name:"",img:Jh,cards:[""],cost:0},{id:"5",name:"",img:Jh,cards:[""],cost:0}],ET=[{id:"1",name:"Dragão da luz",img:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/ddel9ww-fd553123-8f21-4c16-bc53-b27e961819e5.jpg/v1/fill/w_870,h_918,q_70,strp/eraldic_dragon_of_light_by_tellarheaven_ddel9ww-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MCIsInBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGRlbDl3dy1mZDU1MzEyMy04ZjIxLTRjMTYtYmM1My1iMjdlOTYxODE5ZTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.JOLnxeRO6rAf3fsijI3HHiLm1BO5bILWqSXwYpB4W7k",characterImg:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/dhcvrty-24d545a1-eb00-4308-82c4-98e9c72e5016.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGhjdnJ0eS0yNGQ1NDVhMS1lYjAwLTQzMDgtODJjNC05OGU5YzcyZTUwMTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hFAle4t2gQSOUBzqzIDS99d6MLWXFj9c6UeVjuA-Ydo",scenarioImg:XM,hp:35,atk:15,def:10,reward:200},{id:"2",name:"Dragão do caos liberado",img:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/df385qv-9cbe3530-b733-47c4-a34e-55700af7f3df.jpg/v1/fill/w_933,h_856,q_70,strp/dragon_of_the_unleashed_chaos_by_tellarheaven_df385qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE3NSIsInBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGYzODVxdi05Y2JlMzUzMC1iNzMzLTQ3YzQtYTM0ZS01NTcwMGFmN2YzZGYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5EkOj-mD10zd3Xdhu7VRILQa5phAjAwDJgCdd01MJtU",characterImg:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/dhcvrxx-1cb71d2e-b218-4d6d-9143-e6aa30ca67b7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGhjdnJ4eC0xY2I3MWQyZS1iMjE4LTRkNmQtOTE0My1lNmFhMzBjYTY3YjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n1iCRfSHYl6RDKYiuVngJh_a1RtJpa5uNniynoAGu4A",scenarioImg:Xh,hp:50,atk:20,def:10,reward:500},{id:"3",name:"Caos Fuwen",img:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/dg7w1gv-2ecf8b9e-f1cf-4470-b0f7-cb9a8b35784b.jpg/v1/fill/w_838,h_954,q_70,strp/caos_form_fuwen_artwork_by_tellarheaven_dg7w1gv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1OCIsInBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGc3dzFndi0yZWNmOGI5ZS1mMWNmLTQ0NzAtYjBmNy1jYjlhOGIzNTc4NGIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jsFR5BQwTmJs0vB9FrHPMBW403Xrj0mP_MxnFDB8zb4",characterImg:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/dhcvrqu-554b3fd0-ae81-4539-adb4-1dfafa9a4d84.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGhjdnJxdS01NTRiM2ZkMC1hZTgxLTQ1MzktYWRiNC0xZGZhZmE5YTRkODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.F1Z2dBqt3q_YkclgoFn-pb-4EpiH0zQthVA3MvPjxLc",scenarioImg:Xh,hp:40,atk:15,def:8,reward:300},{id:"4",name:"Ultimate Dinasvora Mech",img:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/df1225z-d6ebc253-db11-47a2-8f54-3e7198c1ebe4.jpg/v1/fill/w_1020,h_783,q_70,strp/dinasvora_meach_0_ultimate_eruption_rex_by_tellarheaven_df1225z-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTgzIiwicGF0aCI6IlwvZlwvNGI2YWQ1YjEtY2RmYi00NmRhLTg0MWYtOWIzNmNiNWU0NDNlXC9kZjEyMjV6LWQ2ZWJjMjUzLWRiMTEtNDdhMi04ZjU0LTNlNzE5OGMxZWJlNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CqGtJn-GgZVHIcti7riCuftmL8o47ayK92Kzh2RJDFE",characterImg:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/dhcvrrr-d85cbd5c-a563-4ae6-9f82-683efba317bc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGhjdnJyci1kODVjYmQ1Yy1hNTYzLTRhZTYtOWY4Mi02ODNlZmJhMzE3YmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YMh3jEf-z5iQsO_2YACzJtZX8C0IHq_0i39wSc-JkpY",scenarioImg:Xh,hp:45,atk:15,def:9,reward:700}];function tL(){return p.jsxs(KM,{children:[p.jsx("h1",{children:"Battle"}),p.jsx("section",{children:ET.map(t=>p.jsx(YM,{id:t.id,characterImage:t.img},`${t.id}-battle`))})]})}const nL=V.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1120px;
  min-height: 500px;

  margin: 0 auto 3rem;

  padding: 1rem;
  h1 {
    font-size: 2.5rem;
    text-align: left;
  }
  img {
    @media (max-width: 900px) {
      display: none;
    }
  }
`,rL=V.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  h1 {
    color: ${t=>t.theme["red-500"]};
  }
  P {
    font-size: 1.5rem;
    text-align: justify;
    color: ${t=>t.theme["red-300"]};
  }
`,iL="/CardBattle/assets/HeroImage-a59f04a1.png";function sL(){const{user:t}=w.useContext(jt),e=fc();function n(r){e(`/CardBattle/${r}`)}return p.jsxs(nL,{children:[p.jsxs(rL,{children:[p.jsx("h1",{children:"Cartas de batalha!"}),p.jsx("p",{children:"“Card Battle e um jogo onde você deverá coletar as cartas mais poderosas e enfrentar inimigos perigosos para se tornar imbativel. Colecione, batalhe, compre e divirta-se.”"}),p.jsx(ii,{fontSize:1,onClick:()=>n(t?"shop":"auth/register"),children:t?"Comprar cartas":"Cadastre-se"})]}),p.jsx("img",{src:iL,width:600})]})}const oL=V.section`
  position: relative;

  width: 100%;

  border-top: 2px solid ${t=>t.theme["red-500"]};

  overflow: hidden;
  h1 {
    font-size: 2rem;
    text-shadow: 1px 2px 1px ${t=>t.theme["gray-800"]};
  }
`,aL=V.div`
  position: absolute;
  top: 0;
  height: 2000px;
  width: 100%;
  z-index: -1;
  img {
    object-fit: cover;
    //transform: translateY(68%);
    width: 100%;
    height: 100%;
  }
`,lL=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1120px;

  padding: 3.5rem;

  margin: 0 auto;
`,uL=V.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  width: 700px;

  padding: 1rem;
  //background-color: ${t=>t.theme["red-500"]};
  border-radius: 6px;
`,Zh=V.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,ed=V.button`
  padding: 1rem;
  background-color: ${t=>t.theme["red-500"]};
  border: none;
  border-radius: 6px;
  box-sizing: border-box;

  width: 100%;

  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: ${t=>t.theme["gray-100"]};
  border: 1px solid transparent;

  &:disabled {
    background-color: ${t=>t.theme["gray-800"]};
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    transition: 0.2s background-color;
    background-color: ${t=>t.theme["red-300"]};
    border: 1px solid ${t=>t.theme["gray-800"]};
    cursor: pointer;
  }
`,cL="/CardBattle/assets/Damian-21b513b8.jpg";var hL=4,dL=.001,fL=1e-7,pL=10,co=11,ml=1/(co-1),mL=typeof Float32Array=="function";function IT(t,e){return 1-3*e+3*t}function TT(t,e){return 3*e-6*t}function ST(t){return 3*t}function Bu(t,e,n){return((IT(e,n)*t+TT(e,n))*t+ST(e))*t}function CT(t,e,n){return 3*IT(e,n)*t*t+2*TT(e,n)*t+ST(e)}function gL(t,e,n,r,i){var s,o,a=0;do o=e+(n-e)/2,s=Bu(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>fL&&++a<pL);return o}function yL(t,e,n,r){for(var i=0;i<hL;++i){var s=CT(e,n,r);if(s===0)return e;var o=Bu(e,n,r)-t;e-=o/s}return e}function vL(t){return t}var _L=function(e,n,r,i){if(!(0<=e&&e<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===n&&r===i)return vL;for(var s=mL?new Float32Array(co):new Array(co),o=0;o<co;++o)s[o]=Bu(o*ml,e,r);function a(l){for(var u=0,c=1,h=co-1;c!==h&&s[c]<=l;++c)u+=ml;--c;var d=(l-s[c])/(s[c+1]-s[c]),g=u+d*ml,v=CT(g,e,r);return v>=dL?yL(l,g,e,r):v===0?g:gL(l,u,u+ml,e,r)}return function(u){return u===0?0:u===1?1:Bu(a(u),n,i)}};const i0=jf(_L);var ag=function(e){this.startX=e.startX,this.startY=e.startY,this.endX=e.endX,this.endY=e.endY,this.totalX=this.endX-this.startX,this.totalY=this.endY-this.startY,this.startMultiplierX=e.startMultiplierX||1,this.endMultiplierX=e.endMultiplierX||1,this.startMultiplierY=e.startMultiplierY||1,this.endMultiplierY=e.endMultiplierY||1};function Er(){return Er=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Er.apply(this,arguments)}var Wu;(function(t){t.speed="speed",t.translateX="translateX",t.translateY="translateY",t.rotate="rotate",t.rotateX="rotateX",t.rotateY="rotateY",t.rotateZ="rotateZ",t.scale="scale",t.scaleX="scaleX",t.scaleY="scaleY",t.scaleZ="scaleZ",t.opacity="opacity"})(Wu||(Wu={}));var Hr;(function(t){t.px="px",t["%"]="%",t.vh="vh",t.vw="vw"})(Hr||(Hr={}));var Ro;(function(t){t.deg="deg",t.turn="turn",t.rad="rad"})(Ro||(Ro={}));var Vf;(function(t){t[""]=""})(Vf||(Vf={}));var Jt;(function(t){t.vertical="vertical",t.horizontal="horizontal"})(Jt||(Jt={}));var s0;(function(t){t.ease="ease",t.easeIn="easeIn",t.easeOut="easeOut",t.easeInOut="easeInOut",t.easeInQuad="easeInQuad",t.easeInCubic="easeInCubic",t.easeInQuart="easeInQuart",t.easeInQuint="easeInQuint",t.easeInSine="easeInSine",t.easeInExpo="easeInExpo",t.easeInCirc="easeInCirc",t.easeOutQuad="easeOutQuad",t.easeOutCubic="easeOutCubic",t.easeOutQuart="easeOutQuart",t.easeOutQuint="easeOutQuint",t.easeOutSine="easeOutSine",t.easeOutExpo="easeOutExpo",t.easeOutCirc="easeOutCirc",t.easeInOutQuad="easeInOutQuad",t.easeInOutCubic="easeInOutCubic",t.easeInOutQuart="easeInOutQuart",t.easeInOutQuint="easeInOutQuint",t.easeInOutSine="easeInOutSine",t.easeInOutExpo="easeInOutExpo",t.easeInOutCirc="easeInOutCirc",t.easeInBack="easeInBack",t.easeOutBack="easeOutBack",t.easeInOutBack="easeInOutBack"})(s0||(s0={}));var o0=0;function wL(){return++o0,o0}var EL=function(){function t(n){var r=n.el.getBoundingClientRect();if(n.view.scrollContainer){var i=n.view.scrollContainer.getBoundingClientRect();r=Er({},r,{top:r.top-i.top,right:r.right-i.left,bottom:r.bottom-i.top,left:r.left-i.left})}this.height=n.el.offsetHeight,this.width=n.el.offsetWidth,this.left=r.left,this.right=r.right,this.top=r.top,this.bottom=r.bottom,n.rootMargin&&this._setRectWithRootMargin(n.rootMargin)}var e=t.prototype;return e._setRectWithRootMargin=function(r){var i=r.top+r.bottom,s=r.left+r.right;this.top-=r.top,this.right+=r.right,this.bottom+=r.bottom,this.left-=r.left,this.height+=i,this.width+=s},t}(),IL=[Vf[""],Hr.px,Hr["%"],Hr.vh,Hr.vw,Ro.deg,Ro.turn,Ro.rad];function gl(t,e){e===void 0&&(e=Hr["%"]);var n={value:0,unit:e};if(typeof t>"u")return n;var r=typeof t=="number"||typeof t=="string";if(!r)throw new Error("Invalid value provided. Must provide a value as a string or number");t=String(t),n.value=parseFloat(t),n.unit=t.match(/[\d.\-+]*\s*(.*)/)[1]||e;var i=IL.includes(n.unit);if(!i)throw new Error("Invalid unit provided.");return n}var a0={ease:[.25,.1,.25,1],easeIn:[.42,0,1,1],easeOut:[0,0,.58,1],easeInOut:[.42,0,.58,1],easeInQuad:[.55,.085,.68,.53],easeInCubic:[.55,.055,.675,.19],easeInQuart:[.895,.03,.685,.22],easeInQuint:[.755,.05,.855,.06],easeInSine:[.47,0,.745,.715],easeInExpo:[.95,.05,.795,.035],easeInCirc:[.6,.04,.98,.335],easeOutQuad:[.25,.46,.45,.94],easeOutCubic:[.215,.61,.355,1],easeOutQuart:[.165,.84,.44,1],easeOutQuint:[.23,1,.32,1],easeOutSine:[.39,.575,.565,1],easeOutExpo:[.19,1,.22,1],easeOutCirc:[.075,.82,.165,1],easeInOutQuad:[.455,.03,.515,.955],easeInOutCubic:[.645,.045,.355,1],easeInOutQuart:[.77,0,.175,1],easeInOutQuint:[.86,0,.07,1],easeInOutSine:[.445,.05,.55,.95],easeInOutExpo:[1,0,0,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};function AT(t){if(Array.isArray(t))return i0(t[0],t[1],t[2],t[3]);if(typeof t=="string"&&typeof a0[t]<"u"){var e=a0[t];return i0(e[0],e[1],e[2],e[3])}}var TL=Object.values(Wu),SL={speed:"px",translateX:"%",translateY:"%",rotate:"deg",rotateX:"deg",rotateY:"deg",rotateZ:"deg",scale:"",scaleX:"",scaleY:"",scaleZ:"",opacity:""};function l0(t,e){var n={};return TL.forEach(function(r){var i=SL[r];if(typeof(t==null?void 0:t[r])=="number"){var s=t==null?void 0:t[r],o=(s||0)*10+"px",a=(s||0)*-10+"px",l=gl(o),u=gl(a),c={start:l.value,end:u.value,unit:l.unit};e===Jt.vertical&&(n.translateY=c),e===Jt.horizontal&&(n.translateX=c)}if(Array.isArray(t==null?void 0:t[r])){var h=t==null?void 0:t[r];if(typeof h[0]<"u"&&typeof h[1]<"u"){var d=gl(h==null?void 0:h[0],i),g=gl(h==null?void 0:h[1],i),v=AT(h==null?void 0:h[2]);if(n[r]={start:d.value,end:g.value,unit:d.unit,easing:v},d.unit!==g.unit)throw new Error("Must provide matching units for the min and max offset values of each axis.")}}}),n}function u0(t,e,n,r){var i=n-t,s=i/e;return r&&(s=r(s)),s}function CL(t,e,n){var r=n>=t&&n<=e;return r}function AL(t,e,n,r,i){return(n-e)*(t-r)/(i-r)+e}function kT(t,e){var n=AL(typeof t.easing=="function"?t.easing(e):e,(t==null?void 0:t.start)||0,(t==null?void 0:t.end)||0,0,1);return{value:n,unit:t==null?void 0:t.unit}}var kL=Object.values(Wu).filter(function(t){return t!=="opacity"});function xL(t,e){var n=Object.keys(e),r=n.includes("opacity"),i="transform"+(r?",opacity":"");t.style.willChange=i}function RL(t,e,n){if(n){var r=NL(t,e),i=PL(t,e);n.style.transform=r,n.style.opacity=i}}function PL(t,e){var n=t.opacity&&kT(t.opacity,e);if(typeof n>"u"||typeof n.value>"u"||typeof n.unit>"u")return"";var r=""+n.value;return r}function NL(t,e){var n=kL.reduce(function(r,i){var s=t[i]&&kT(t[i],e);if(typeof s>"u"||typeof s.value>"u"||typeof s.unit>"u")return r;var o=i+"("+s.value+s.unit+")";return r+o},"");return n}function Ul(t){var e=t.el;e&&(e.style.transform="",e.style.opacity="")}function OL(t,e,n,r){var i=t.top-e.height,s=t.left-e.width,o=t.bottom,a=t.right;s+=n.x,a+=n.x,i+=n.y,o+=n.y,r&&(n.y+t.top<e.height&&(i=0),n.x+t.left<e.width&&(s=0),o>e.scrollHeight-e.height&&(o=e.scrollHeight-e.height),a>e.scrollWidth-e.width&&(a=e.scrollWidth-e.width));var l=new ag({startX:s,startY:i,endX:a,endY:o});return l}function Ci(t,e,n){var r=e>t,i=(Math.abs(t)+Math.abs(e))*(r?-1:1),s=n+i,o=Math.max(n/s,1);return o}function c0(t,e){var n=t.start,r=t.end,i=t.unit;if(i==="%"){var s=e/100;n=n*s,r=r*s}if(i==="vw"){var o=n/100,a=r/100;n=window.innerWidth*o,r=window.innerWidth*a}if(i==="vh"){var l=n/100,u=r/100;n=window.innerHeight*l,r=window.innerHeight*u}return{start:n,end:r}}var h0={start:0,end:0,unit:""};function DL(t,e,n,r,i,s){var o=n.translateX||h0,a=n.translateY||h0,l=c0(o,t.width),u=l.start,c=l.end,h=c0(a,t.height),d=h.start,g=h.end,v=t.top-e.height,_=t.left-e.width,I=t.bottom,m=t.right,f=1,y=1;i===Jt.vertical&&(f=Ci(d,g,e.height+t.height),y=f);var E=1,T=1;if(i===Jt.horizontal&&(E=Ci(u,c,e.width+t.width),T=E),d<0&&(v=v+d*f),g>0&&(I=I+g*y),u<0&&(_=_+u*E),c>0&&(m=m+c*T),_+=r.x,m+=r.x,v+=r.y,I+=r.y,s){var A=r.y+t.top<e.height,C=r.x+t.left<e.width,O=r.y+t.bottom>e.scrollHeight-e.height,H=r.x+t.right>e.scrollWidth-e.height;if(A&&O&&(f=1,y=1,v=0,I=e.scrollHeight-e.height),C&&H&&(E=1,T=1,_=0,m=e.scrollWidth-e.width),!A&&O){v=t.top-e.height+r.y,I=e.scrollHeight-e.height;var R=I-v;f=Ci(d,g,R),y=1,d<0&&(v=v+d*f)}if(!C&&H){_=t.left-e.width+r.x,m=e.scrollWidth-e.width;var ee=m-_;E=Ci(u,c,ee),T=1,u<0&&(_=_+u*E)}if(A&&!O){v=0,I=t.bottom+r.y;var yt=I-v;f=1,y=Ci(d,g,yt),g>0&&(I=I+g*y)}if(C&&!H){_=0,m=t.right+r.x;var xt=m-_;E=1,T=Ci(u,c,xt),c>0&&(m=m+c*T)}}var yn=new ag({startX:_,startY:v,endX:m,endY:I,startMultiplierX:E,endMultiplierX:T,startMultiplierY:f,endMultiplierY:y});return yn}function bL(t,e){var n=Er({},t);return n.translateX&&(n.translateX=Er({},t.translateX,{start:n.translateX.start*e.startMultiplierX,end:n.translateX.end*e.endMultiplierX})),n.translateY&&(n.translateY=Er({},t.translateY,{start:n.translateY.start*e.startMultiplierY,end:n.translateY.end*e.endMultiplierY})),n}function ML(t,e,n){return t.rootMargin||t.targetElement||t.shouldDisableScalingTranslations?!1:!!(e.translateX&&n===Jt.horizontal||e.translateY&&n===Jt.vertical)}var d0=function(e,n,r){return Math.min(Math.max(e,n),r)},LL=function(){function t(n){this.el=n.el,this.props=n.props,this.scrollAxis=n.scrollAxis,this.disabledParallaxController=n.disabledParallaxController||!1,this.id=wL(),this.effects=l0(this.props,this.scrollAxis),this.isInView=null,this.progress=0,this._setElementEasing(n.props.easing),xL(n.el,this.effects)}var e=t.prototype;return e.updateProps=function(r){return this.props=Er({},this.props,r),this.effects=l0(r,this.scrollAxis),this._setElementEasing(r.easing),this},e.setCachedAttributes=function(r,i){Ul(this),this.rect=new EL({el:this.props.targetElement||this.el,rootMargin:this.props.rootMargin,view:r});var s=ML(this.props,this.effects,this.scrollAxis);return typeof this.props.startScroll=="number"&&typeof this.props.endScroll=="number"?(this.limits=new ag({startX:this.props.startScroll,startY:this.props.startScroll,endX:this.props.endScroll,endY:this.props.endScroll}),this._setElementStyles(),this):(s?(this.limits=DL(this.rect,r,this.effects,i,this.scrollAxis,this.props.shouldAlwaysCompleteAnimation),this.scaledEffects=bL(this.effects,this.limits)):this.limits=OL(this.rect,r,i,this.props.shouldAlwaysCompleteAnimation),this._setElementStyles(),this)},e._updateElementIsInView=function(r){var i=this.isInView===null;r!==this.isInView&&(r?this.props.onEnter&&this.props.onEnter(this):i||(this._setFinalProgress(),this._setElementStyles(),this.props.onExit&&this.props.onExit(this))),this.isInView=r},e._setFinalProgress=function(){var r=d0(Math.round(this.progress),0,1);this._updateElementProgress(r)},e._setElementStyles=function(){if(!(this.props.disabled||this.disabledParallaxController)){var r=this.scaledEffects||this.effects;RL(r,this.progress,this.el)}},e._updateElementProgress=function(r){this.progress=r,this.props.onProgressChange&&this.props.onProgressChange(this.progress),this.props.onChange&&this.props.onChange(this)},e._setElementEasing=function(r){this.easing=AT(r)},e.updateElementOptions=function(r){this.scrollAxis=r.scrollAxis,this.disabledParallaxController=r.disabledParallaxController||!1},e.updatePosition=function(r){if(!this.limits)return this;var i=this.scrollAxis===Jt.vertical,s=this.isInView===null,o=i?this.limits.startY:this.limits.startX,a=i?this.limits.endY:this.limits.endX,l=i?this.limits.totalY:this.limits.totalX,u=i?r.y:r.x,c=CL(o,a,u);if(this._updateElementIsInView(c),c){var h=u0(o,l,u,this.easing);this._updateElementProgress(h),this._setElementStyles()}else s&&(this.progress=d0(Math.round(u0(o,l,u,this.easing)),0,1),this._setElementStyles());return this},t}(),f0=function(){function t(n){this.scrollContainer=n.scrollContainer,this.width=n.width,this.height=n.height,this.scrollHeight=n.scrollHeight,this.scrollWidth=n.scrollWidth}var e=t.prototype;return e.hasChanged=function(r){return r.width!==this.width||r.height!==this.height||r.scrollWidth!==this.scrollWidth||r.scrollHeight!==this.scrollHeight},e.setSize=function(r){return this.width=r.width,this.height=r.height,this.scrollHeight=r.scrollHeight,this.scrollWidth=r.scrollWidth,this},t}(),VL=function(){function t(n,r){this.x=n,this.y=r,this.dx=0,this.dy=0}var e=t.prototype;return e.setScroll=function(r,i){return this.dx=r-this.x,this.dy=i-this.y,this.x=r,this.y=i,this},t}();function $L(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){return t=!0,!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}return t}var xT=function(){function t(n){var r=n.scrollAxis,i=r===void 0?Jt.vertical:r,s=n.scrollContainer,o=n.disabled,a=o===void 0?!1:o;this.disabled=a,this.scrollAxis=i,this.elements=[],this._hasScrollContainer=!!s,this.viewEl=s??window;var l=this._getScrollPosition(),u=l[0],c=l[1];this.scroll=new VL(u,c),this.view=new f0({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:this._hasScrollContainer?s:void 0}),this._ticking=!1,this._supportsPassive=$L(),this._bindAllMethods(),!this.disabled&&(this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize())}t.init=function(r){var i=typeof window<"u";if(!i)throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");return new t(r)};var e=t.prototype;return e._bindAllMethods=function(){var r=this;["_addListeners","_removeListeners","_getScrollPosition","_handleScroll","_handleUpdateCache","_updateAllElements","_updateElementPosition","_setViewSize","_addResizeObserver","_checkIfViewHasChanged","_getViewParams","getElements","createElement","removeElementById","resetElementStyles","updateElementPropsById","update","updateScrollContainer","destroy"].forEach(function(i){r[i]=r[i].bind(r)})},e._addListeners=function(r){r.addEventListener("scroll",this._handleScroll,this._supportsPassive?{passive:!0}:!1),window.addEventListener("resize",this._handleUpdateCache,!1),window.addEventListener("blur",this._handleUpdateCache,!1),window.addEventListener("focus",this._handleUpdateCache,!1),window.addEventListener("load",this._handleUpdateCache,!1)},e._removeListeners=function(r){var i;r.removeEventListener("scroll",this._handleScroll,!1),window.removeEventListener("resize",this._handleUpdateCache,!1),window.removeEventListener("blur",this._handleUpdateCache,!1),window.removeEventListener("focus",this._handleUpdateCache,!1),window.removeEventListener("load",this._handleUpdateCache,!1),(i=this._resizeObserver)==null||i.disconnect()},e._addResizeObserver=function(){var r=this;try{var i=this._hasScrollContainer?this.viewEl:document.documentElement;this._resizeObserver=new ResizeObserver(function(){return r.update()}),this._resizeObserver.observe(i)}catch{console.warn("Failed to create the resize observer in the ParallaxContoller")}},e._getScrollPosition=function(){var r=this._hasScrollContainer?this.viewEl.scrollLeft:window.pageXOffset,i=this._hasScrollContainer?this.viewEl.scrollTop:window.pageYOffset;return[r,i]},e._handleScroll=function(){var r=this._getScrollPosition(),i=r[0],s=r[1];this.scroll.setScroll(i,s),!this._ticking&&this.elements.length>0&&(this._ticking=!0,window.requestAnimationFrame(this._updateAllElements))},e._handleUpdateCache=function(){this._setViewSize(),this._updateAllElements({updateCache:!0})},e._updateAllElements=function(r){var i=this,s=r===void 0?{}:r,o=s.updateCache;this.elements&&this.elements.forEach(function(a){o&&a.setCachedAttributes(i.view,i.scroll),i._updateElementPosition(a)}),this._ticking=!1},e._updateElementPosition=function(r){r.props.disabled||this.disabled||r.updatePosition(this.scroll)},e._getViewParams=function(){if(this._hasScrollContainer){var r=this.viewEl.offsetWidth,i=this.viewEl.offsetHeight,s=this.viewEl.scrollHeight,o=this.viewEl.scrollWidth;return this.view.setSize({width:r,height:i,scrollHeight:s,scrollWidth:o})}var a=document.documentElement,l=window.innerWidth||a.clientWidth,u=window.innerHeight||a.clientHeight,c=a.scrollHeight,h=a.scrollWidth;return{width:l,height:u,scrollHeight:c,scrollWidth:h}},e._setViewSize=function(){return this.view.setSize(this._getViewParams())},e._checkIfViewHasChanged=function(){return this.view.hasChanged(this._getViewParams())},e.getElements=function(){return this.elements},e.createElement=function(r){var i=new LL(Er({},r,{scrollAxis:this.scrollAxis,disabledParallaxController:this.disabled}));return i.setCachedAttributes(this.view,this.scroll),this.elements=this.elements?[].concat(this.elements,[i]):[i],this._updateElementPosition(i),this._checkIfViewHasChanged()&&this.update(),i},e.removeElementById=function(r){this.elements&&(this.elements=this.elements.filter(function(i){return i.id!==r}))},e.updateElementPropsById=function(r,i){this.elements&&(this.elements=this.elements.map(function(s){return s.id===r?s.updateProps(i):s})),this.update()},e.resetElementStyles=function(r){Ul(r)},e.update=function(){var r=this._getScrollPosition(),i=r[0],s=r[1];this.scroll.setScroll(i,s),this._setViewSize(),this._updateAllElements({updateCache:!0})},e.updateScrollContainer=function(r){this._removeListeners(this.viewEl),this.viewEl=r,this._hasScrollContainer=!!r,this.view=new f0({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:r}),this._setViewSize(),this._addListeners(this.viewEl),this._updateAllElements({updateCache:!0})},e.disableParallaxController=function(){this.disabled=!0,this._removeListeners(this.viewEl),this.elements&&this.elements.forEach(function(r){return Ul(r)})},e.enableParallaxController=function(){var r=this;this.disabled=!1,this.elements&&this.elements.forEach(function(i){return i.updateElementOptions({disabledParallaxController:!1,scrollAxis:r.scrollAxis})}),this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize()},e.disableAllElements=function(){console.warn("deprecated: use disableParallaxController() instead"),this.elements&&(this.elements=this.elements.map(function(r){return r.updateProps({disabled:!0})})),this.update()},e.enableAllElements=function(){console.warn("deprecated: use enableParallaxController() instead"),this.elements&&(this.elements=this.elements.map(function(r){return r.updateProps({disabled:!1})})),this.update()},e.destroy=function(){this._removeListeners(this.viewEl),this.elements&&this.elements.forEach(function(r){return Ul(r)}),this.elements=void 0},t}();function jL(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,$f(t,e)}function $f(t,e){return $f=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},$f(t,e)}function FL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function UL(t){return Object.keys(t).forEach(function(e){return t[e]===void 0&&delete t[e]}),t}var zL=["disabled","easing","endScroll","onChange","onEnter","onExit","onProgressChange","opacity","rootMargin","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","shouldAlwaysCompleteAnimation","shouldDisableScalingTranslations","speed","startScroll","targetElement","translateX","translateY"];function BL(t){var e=t.disabled,n=t.easing,r=t.endScroll,i=t.onChange,s=t.onEnter,o=t.onExit,a=t.onProgressChange,l=t.opacity,u=t.rootMargin,c=t.rotate,h=t.rotateX,d=t.rotateY,g=t.rotateZ,v=t.scale,_=t.scaleX,I=t.scaleY,m=t.scaleZ,f=t.shouldAlwaysCompleteAnimation,y=t.shouldDisableScalingTranslations,E=t.speed,T=t.startScroll,A=t.targetElement,C=t.translateX,O=t.translateY,H=FL(t,zL),R=UL({disabled:e,easing:n,endScroll:r,onChange:i,onEnter:s,onExit:o,onProgressChange:a,opacity:l,rootMargin:u,rotate:c,rotateX:h,rotateY:d,rotateZ:g,scale:v,scaleX:_,scaleY:I,scaleZ:m,shouldAlwaysCompleteAnimation:f,shouldDisableScalingTranslations:y,speed:E,startScroll:T,targetElement:A,translateX:C,translateY:O});return{parallaxProps:R,rest:H}}function WL(t){w.useEffect(function(){var e=typeof window>"u",n=t instanceof xT;if(!e&&!t&&!n)throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.")},[t])}var RT=Ue.createContext(null);function HL(){var t=w.useContext(RT),e=typeof window>"u";if(e)return null;if(!t)throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");return t}function GL(t){var e=HL(),n=w.useRef(null),r=BL(t),i=r.parallaxProps;WL(e);var s=w.useState(),o=s[0],a=s[1];return w.useEffect(function(){var l;if(n.current instanceof HTMLElement){var u={el:n.current,props:i};l=e==null?void 0:e.createElement(u),a(l)}else throw new Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");return function(){l&&(e==null||e.removeElementById(l.id))}},[]),w.useEffect(function(){o&&(t.disabled&&(e==null||e.resetElementStyles(o)),e==null||e.updateElementPropsById(o.id,i))},[t.disabled,t.easing,t.endScroll,t.onChange,t.onEnter,t.onExit,t.onProgressChange,t.opacity,t.rootMargin,t.rotate,t.rotateX,t.rotateY,t.rotateZ,t.scale,t.scaleX,t.scaleY,t.scaleZ,t.shouldAlwaysCompleteAnimation,t.shouldDisableScalingTranslations,t.speed,t.startScroll,t.targetElement,t.translateX,t.translateY]),{ref:n,controller:e,element:o}}var qL=function(e){var n=typeof window>"u";return n?null:xT.init(e)},PT=function(t){jL(e,t);function e(r){var i;return i=t.call(this,r)||this,i.controller=qL({scrollAxis:r.scrollAxis,scrollContainer:r.scrollContainer,disabled:r.isDisabled}),i}var n=e.prototype;return n.componentDidUpdate=function(i){if(i.scrollContainer!==this.props.scrollContainer&&this.props.scrollContainer){var s;(s=this.controller)==null||s.updateScrollContainer(this.props.scrollContainer)}if(i.isDisabled!==this.props.isDisabled){if(this.props.isDisabled){var o;(o=this.controller)==null||o.disableParallaxController()}if(!this.props.isDisabled){var a;(a=this.controller)==null||a.enableParallaxController()}}},n.componentWillUnmount=function(){this.controller=this.controller.destroy()},n.render=function(){var i=this.props.children;return Ue.createElement(RT.Provider,{value:this.controller},i)},e}(w.Component);PT.defaultProps={scrollAxis:Jt.vertical};function QL(){const{OwnCards:t,updateOwnedCards:e,avaliableCards:n}=w.useContext(br),{user:r}=w.useContext(jt),i=GL({translateY:[-30,35]}),s=["Arthemia","Hallowen Hound","Captão Elister"],o=n.filter(l=>s.includes(l.name));async function a(l){if(!r)return;const u=kr(gn,"users",r.uid);(await di(u)).exists()?await sg(u,{ownedCards:wT(l.id)}):await ig(u,{ownedCards:[l.id]}),e()}return p.jsxs(oL,{children:[p.jsx(aL,{children:p.jsx("img",{src:cL,alt:"",ref:i.ref})}),p.jsxs(lL,{children:[p.jsx("h1",{children:"Compre sua primeira carta Grátis!"}),p.jsx(uL,{children:n?p.jsxs(p.Fragment,{children:[p.jsxs(Zh,{children:[p.jsx(wr,{...o[1]}),p.jsx(ed,{onClick:()=>a(o[1]),disabled:t.filter(l=>l.id===o[1].id).length>0||!r,children:t.filter(l=>l.id===o[1].id).length>0?p.jsx(p.Fragment,{children:"Possui"}):p.jsx(p.Fragment,{children:"Comprar"})})]}),p.jsxs(Zh,{children:[p.jsx(wr,{...o[2]}),p.jsx(ed,{onClick:()=>a(o[2]),disabled:t.filter(l=>l.id===o[2].id).length>0||!r,children:t.filter(l=>l.id===o[2].id).length>0?p.jsx(p.Fragment,{children:"Possui"}):p.jsx(p.Fragment,{children:"Comprar"})})]}),p.jsxs(Zh,{children:[p.jsx(wr,{...o[0]}),p.jsx(ed,{onClick:()=>a(o[0]),disabled:t.filter(l=>l.id===o[0].id).length>0||!r,children:t.filter(l=>l.id===o[0].id).length>0?p.jsx(p.Fragment,{children:"Possui"}):p.jsx(p.Fragment,{children:"Comprar"})})]})]}):p.jsx("p",{children:"Carregando..."})})]})]})}const YL=V.main``,KL=V.section`
  width: 100%;

  border-top: 2px solid ${t=>t.theme["red-500"]};
  h1 {
    font-size: 2rem;
    margin-top: 2rem;
  }
`,XL=V.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  width: 100%;
  max-width: 1120px;

  padding: 5rem 3.5rem;

  margin: 0 auto;

  img {
    width: 100px;
  }
`,JL="/CardBattle/assets/FireIcon-65e05762.svg",ZL="/CardBattle/assets/ReactIcon-0fcda9ea.svg",eV="/CardBattle/assets/TypeIcon-208c41c6.svg";function tV(){return p.jsxs(KL,{children:[p.jsx("h1",{children:"Powered by"}),p.jsxs(XL,{children:[p.jsx("img",{src:ZL,alt:"",title:"React"}),p.jsx("img",{src:JL,alt:"",title:"Firebase"}),p.jsx("img",{src:eV,alt:"",title:"Typescript"})]})]})}function nV(){const{changeGameStage:t}=w.useContext(Fa),{changeSelectedCard:e}=w.useContext(br);return w.useEffect(()=>{t("display"),e(null)},[t]),p.jsxs(YL,{children:[p.jsx(sL,{}),p.jsx(QL,{}),p.jsx(tV,{})]})}const rV=V.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-x: clip;

  width: 100%;
`,iV=V.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  z-index: -10;

  filter: blur(3px);
`,sV=V.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1300px;

  margin: 0 auto;

  .character {
    width: 600px;
    position: absolute;
    top: -100px;

    z-index: -1;
  }

  .enemy {
    width: 600px;
    position: absolute;
    top: -150px;

    z-index: -1;
  }
`,oV=V.div`
  display: flex;
  gap: 0.5rem;
  height: 300px;
  width: 550px;

  padding: 1rem;
  background-color: ${t=>t.theme["red-500"]};
  border-radius: 6px;

  transition: 1s all;

  ${t=>t.gamestate==="battle"&&Pn`
      transform: translateX(100%);
      opacity: 0;
    `}
`,p0=V.div`
  position: relative;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`,m0=V.div`
  width: 500px;
  height: 20px;

  position: absolute;
  top: 430px;
  left: 50px;

  border: 1px solid ${t=>t.theme["gray-900"]};
  border-radius: 6px;
  overflow: hidden;

  background-color: ${t=>t.theme["gray-900"]};
  p {
    font-weight: bold;
    color: ${t=>t.theme["gray-100"]};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .bar {
    display: flex;
    justify-content: center;

    width: ${t=>t.hpamount}%;
    height: 100%;
    background-color: ${t=>t.theme["red-500"]};
  }
`,aV=V.img`
  ${t=>t.hit<=0?Pn`
          animation: MoveUpDown 4s cubic-bezier(0.62, 0.67, 0.67, 1.05) infinite;
        `:Pn`
          animation: GetHit 0.2s cubic-bezier(0.62, 0.67, 0.67, 1.05) 1;
          filter: grayscale(100%);
        `}

  ${t=>t.enemyattack>0&&Pn`
      animation: EnemyAttack 0.5s cubic-bezier(0.65, 0.22, 0.37, 1.01) 1;
    `}

  width: 700px;
  position: absolute;
  top: -30;
  left: -70px;
  z-index: -1;

  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translate(2%, -5%);
    }
    50% {
      transform: translate(2%, -0%);
    }
  }
  @keyframes EnemyAttack {
    0% {
      transform: translate(0%, -5%);
    }
    50% {
      transform: translate(-30%, -30%);
    }
    70% {
      transform: translate(50%, -5%);
    }
    100% {
      transform: translate(0%, -5%);
    }
  }
`,lV=V.img`
  ${t=>t.hit<=0?Pn`
          //animation: MoveUpDown 4s cubic-bezier(0.62, 0.67, 0.67, 1.05) infinite;
        `:Pn`
          animation: GetHit 0.2s cubic-bezier(0.62, 0.67, 0.67, 1.05) 1;
          filter: grayscale(100%);
        `}
  ${t=>t.playerattack>0&&Pn`
      animation: Attack 0.5s cubic-bezier(0.65, 0.22, 0.37, 1.01) 1;
    `}
  @keyframes GetHit {
    0%,
    100% {
      transform: translate(-10%, -5%);
    }
    50% {
      transform: translate(10%, -5%);
    }
  }
  @keyframes Attack {
    0% {
      transform: translate(0%, -5%);
    }
    50% {
      transform: translate(30%, -30%);
    }
    70% {
      transform: translate(-50%, -5%);
    }
    100% {
      transform: translate(0%, -5%);
    }
  }
`,uV=V.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`,g0=V.button`
  position: relative;
  border: none;
  border-radius: 50px;
  padding: 1rem;

  color: ${t=>t.theme["gray-100"]};
  text-align: center;

  background-color: ${t=>t.theme["red-500"]};
  border: 1px solid transparent;
  box-sizing: border-box;

  transform: translatey(100px);
  overflow: hidden;
  .slider {
    background-color: ${t=>t.theme["gray-800"]};
    border-left: 1px solid
      ${t=>t.cooldown>0?t.theme["gray-900"]:t.theme["red-500"]};
    width: ${t=>t.cooldown}%;
    position: absolute;
    top: 0;
    right: 0%;
    height: 100%;
    z-index: -1;
  }
  &:disabled {
    border: 1px solid ${t=>t.theme["gray-800"]};
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    transition: 0.2s background-color;
    background-color: ${t=>t.theme["red-300"]};
    border: 1px solid ${t=>t.theme["gray-800"]};
    cursor: pointer;
  }
`;function cV(){const{id:t}=Wk(),{cardsInDeck:e,selectedCard:n,changeSelectedCard:r}=w.useContext(br),{gameStage:i,attacked:s,changeGameStage:o,changeAttacked:a}=w.useContext(Fa),{user:l,userFileRef:u}=w.useContext(jt),c=fc(),h=ET.find(G=>G.id===t),[d,g]=w.useState(h.hp),[v,_]=w.useState(0),[I,m]=w.useState([]),[f,y]=w.useState(""),[E,T]=w.useState(e),[A,C]=w.useState(0),[O,H]=w.useState(0),[R,ee]=w.useState(0),[yt,xt]=w.useState(0);async function yn(G){if(xt(1),await new Promise(P=>setTimeout(P,500)),C(1),d<=G){g(0),await new Promise($=>setTimeout($,500)),window.alert("*VITÓRIA!*"),window.alert(`Recompoensa recebida: ${h==null?void 0:h.reward}⁋`);const P=kr(gn,"users",l.uid);if((await di(P)).exists()&&u){const $=u.money+=h==null?void 0:h.reward;await sg(P,{money:$})}c("/CardBattle/battles/");return}g(P=>P-=G),a(!0),await new Promise(P=>setTimeout(P,3e3)),js(),vn()}async function js(){if(ee(1),await new Promise(G=>setTimeout(G,500)),H(1),v<=h.atk){_(0),await new Promise(G=>setTimeout(G,1e3)),T(E.filter(G=>G.id!==n.id));return}H(1),_(G=>G-=h.atk),a(!1)}function vn(){console.log(I),m(I.map(G=>({...G,cooldown:G.cooldown-1})))}return w.useEffect(()=>{E.length>0?(r(null),o("selecting")):(window.alert("Você foi derrotado!"),c("/CardBattle/battles/"))},[E,o,c,r]),w.useEffect(()=>{o("selecting")},[o]),w.useEffect(()=>{if(!n){y("");return}_(n.hp),y(n.characterImg),m(n.moves.map(G=>({...G,defauldCooldown:G.cooldown})))},[n]),p.jsxs(rV,{children:[p.jsx(iV,{src:h.scenarioImg,className:"bg"}),p.jsxs(sV,{children:[p.jsxs(p0,{children:[p.jsx(aV,{src:h.characterImg,onAnimationEnd:()=>{C(0),ee(0)},enemyattack:R,hit:A,className:"enemy"}),p.jsxs(m0,{hpamount:100*d/h.hp,children:[p.jsx("p",{children:h.name}),p.jsx("div",{className:"bar"})]})]}),p.jsxs(p0,{children:[p.jsx(lV,{src:f,onAnimationEnd:()=>{H(0),xt(0)},playerattack:yt,hit:O,className:"character"}),!s&&n&&p.jsxs(uV,{children:[p.jsxs(g0,{onClick:()=>{yn(n.atk)},cooldown:0,children:["Ataque básico",p.jsx("div",{className:"slider"})]}),I.map(G=>p.jsxs(g0,{onClick:()=>yn(G.damage),disabled:G.cooldown>0,cooldown:G.cooldown*100/G.defauldCooldown,children:[G.name,p.jsx("div",{className:"slider"})]},G.name))]}),n&&p.jsx(m0,{hpamount:100*v/n.hp,children:p.jsx("div",{className:"bar",children:p.jsx("p",{children:n.name})})}),p.jsx(oV,{gamestate:i,children:E&&E.map((G,P)=>w.createElement(wr,{...G,key:`${G.id}-${P}`}))})]})]})]})}const hV=V.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  h3 {
    color: ${t=>t.theme["red-500"]};
    padding-bottom: 2rem;
  }
`,NT=V.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 3rem 0;

  label {
    color: ${t=>t.theme["red-300"]};
    font-weight: bold;
  }
  p {
    margin: 1rem 0;
    color: ${t=>t.theme["red-500"]};
    a {
      color: ${t=>t.theme["red-300"]};
    }
  }
`,Qe=V.input`
  background-color: ${t=>t.theme["red-500"]};
  color: ${t=>t.theme["gray-900"]};
  font-weight: bold;

  border: none;
  border-radius: 6px;

  margin-bottom: 3rem;
  padding: 0.5rem;

  width: 20rem;
  &::placeholder {
    color: ${t=>t.theme["red-300"]};
  }
`,dV=sm(Kc);async function fV(t,e){let n=null,r=null;try{n=await KP(dV,t,e);const i=kr(gn,"users",n.user.uid);(await di(i)).exists()?console.log("user exists"):await ig(i,{money:300,role:"USER",ownedCards:[]})}catch(i){r=i}return{result:n,error:r}}const pV=sm(Kc);async function OT(t,e){let n=null,r=null;try{n=await XP(pV,t,e)}catch(i){r=i}return{result:n,error:r}}function mV(){const[t,e]=w.useState(""),[n,r]=w.useState(""),[i,s]=w.useState("");async function o(l){l.preventDefault();const{result:u,error:c}=await fV(t,n);if(c)return console.log(c);console.log(u)}async function a(){const{result:l,error:u}=await OT("recruter@gmail.com","1234567812");if(u)return console.log(u);console.log(l)}return p.jsxs(hV,{children:[p.jsx("h2",{children:"Cadastre-se"}),p.jsxs(NT,{onSubmit:o,children:[p.jsx("label",{children:"Username:"}),p.jsx(Qe,{type:"text",placeholder:"Escolha um nome de usuario"}),p.jsx("label",{htmlFor:"email",children:"Email:"}),p.jsx(Qe,{type:"email",placeholder:"email@email.com",onChange:l=>e(l.target.value),value:t,name:"email",required:!0}),p.jsx("label",{htmlFor:"password",children:"Senha:"}),p.jsx(Qe,{type:"password",placeholder:"Escolha uma senha",onChange:l=>r(l.target.value),value:n,name:"password",required:!0}),p.jsx("label",{htmlFor:"confirmPassword",children:"Confirmar senha:"}),p.jsx(Qe,{type:"password",placeholder:"Confirme sua senha",onChange:l=>s(l.target.value),value:i,name:"confirmPassword",required:!0}),p.jsx(ii,{type:"submit",children:"Cadastrar"}),p.jsxs("p",{children:["Já tem uma conta?"," ",p.jsx(Pt,{to:"/CardBattle/auth/login",children:"Entrar"})]}),p.jsx(ii,{type:"button",dark:!0,onClick:a,children:"Entrar como recrutador"})]})]})}const gV=V.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`,yV=V.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 3rem 0;

  label {
    color: ${t=>t.theme["red-300"]};
    font-weight: bold;
  }
  p {
    margin-top: 1rem;
    color: ${t=>t.theme["red-500"]};
    a {
      color: ${t=>t.theme["red-300"]};
    }
  }
`,y0=V.input`
  background-color: ${t=>t.theme["red-500"]};
  color: ${t=>t.theme["gray-900"]};
  font-weight: bold;

  border: none;
  border-radius: 6px;

  margin-bottom: 3rem;
  padding: 0.5rem;

  width: 20rem;
  &::placeholder {
    color: ${t=>t.theme["red-300"]};
  }
`;function vV(){const[t,e]=w.useState(""),[n,r]=w.useState("");async function i(s){s.preventDefault();const{result:o,error:a}=await OT(t,n);if(a)return console.log(a);console.log(o)}return p.jsxs(gV,{children:[p.jsx("h2",{children:"Entrar com uma conta"}),p.jsxs(yV,{onSubmit:i,children:[p.jsx("label",{htmlFor:"email",children:"Email:"}),p.jsx(y0,{type:"email",placeholder:"email@email.com",onChange:s=>e(s.target.value),value:t,name:"email",required:!0}),p.jsx("label",{htmlFor:"password",children:"Senha:"}),p.jsx(y0,{type:"password",placeholder:"Escolha uma senha",onChange:s=>r(s.target.value),value:n,name:"password",required:!0}),p.jsx(ii,{type:"submit",children:"Entrar"}),p.jsxs("p",{children:["Não tem uma conta?"," ",p.jsx(Pt,{to:"/CardBattle/auth/register",children:"Cadastre-se"})]})]})]})}const _V=V.main`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`,wV=V.div`
  h3 {
    color: ${t=>t.theme["red-500"]};
    padding-bottom: 2rem;
  }
`,EV=V.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
  min-width: 232px;

  .moveSlot {
    display: flex;
    flex-direction: column;
    width: 200px;
    color: ${t=>t.theme["red-500"]};
    padding: 1rem;
    border: 1px solid ${t=>t.theme["red-500"]};
    border-radius: 10px;
  }
`,IV=V.aside`
  min-width: 232px;
  padding: 1rem;
`,TV=V.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding-bottom: 2rem;
  padding: 1rem;
  width: 30%;
`,SV=V.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  input {
    margin: auto 0;
    height: 1rem;
    width: 1rem;
    accent-color: ${t=>t.theme["red-500"]};
  }
`,CV=V.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;function AV(){const[t,e]=w.useState(""),[n,r]=w.useState(),[i,s]=w.useState(),[o,a]=w.useState(),[l,u]=w.useState(""),[c,h]=w.useState(""),[d,g]=w.useState("COMMON"),[v,_]=w.useState([]),[I,m]=w.useState(""),[f,y]=w.useState(0),[E,T]=w.useState(0);function A(R){const ee=R.target.value;g(ee)}async function C(R){R.preventDefault();try{const ee={name:t,atk:n,def:i,hp:o,rarity:d,characterImg:c,img:l,moves:v};await TM(Km(gn,"cards"),ee),window.alert("Carta criada com sucesso!")}catch(ee){console.error(ee)}}function O(){const R={name:I,damage:f,cooldown:E};_(ee=>[...ee,R])}function H(R){_(ee=>ee.filter(yt=>yt.name!=R))}return p.jsxs(_V,{children:[p.jsx(IV,{children:p.jsx(wr,{atk:n||0,def:i||0,hp:o||0,name:t,img:l,rarity:d,characterImg:c,moves:v,id:""})}),p.jsxs(wV,{children:[p.jsx("h2",{children:"Criar uma carta"}),p.jsxs(NT,{onSubmit:C,children:[p.jsx("label",{children:"Nome da Carta:"}),p.jsx(Qe,{placeholder:"Battle ox",type:"text",onChange:R=>e(R.target.value),value:t,name:"name",required:!0}),p.jsx("label",{htmlFor:"imgUrl",children:"Imagen URL:"}),p.jsx(Qe,{type:"text",placeholder:"Insira uma URL",onChange:R=>u(R.target.value),value:l,name:"imgUrl",required:!0}),p.jsx("label",{htmlFor:"characterImgUrl",children:"Imagen do personagem URL:"}),p.jsx(Qe,{type:"text",placeholder:"Insira uma URL",onChange:R=>h(R.target.value),value:c,name:"characterImgUrl",required:!0}),p.jsx("label",{htmlFor:"atk",children:"Atk:"}),p.jsx(Qe,{type:"number",placeholder:"Digite um ataque",onChange:R=>r(Number(R.target.value)),value:n,name:"atk",required:!0}),p.jsx("label",{htmlFor:"def",children:"Def:"}),p.jsx(Qe,{type:"number",placeholder:"Digite uma defesa",onChange:R=>s(Number(R.target.value)),value:i,name:"def",required:!0}),p.jsx("label",{htmlFor:"def",children:"Hp:"}),p.jsx(Qe,{type:"number",placeholder:"Digite um HP",onChange:R=>a(Number(R.target.value)),value:o,name:"hp",required:!0}),p.jsx("h3",{children:"Raridade"}),p.jsxs(TV,{children:[p.jsxs(CV,{children:[p.jsx("label",{children:"Comun"}),p.jsx("label",{children:"Raro"}),p.jsx("label",{children:"Lendário"})]}),p.jsxs(SV,{children:[p.jsx(Qe,{type:"radio",onChange:R=>A(R),value:"COMMON",name:"rarity-1",checked:d==="COMMON"}),p.jsx(Qe,{type:"radio",onChange:R=>A(R),value:"RARE",name:"rarity-2",checked:d==="RARE"}),p.jsx(Qe,{type:"radio",onChange:R=>A(R),value:"LEGENDARY",name:"rarity-3",checked:d==="LEGENDARY"})]})]}),p.jsx("h3",{children:"Move"}),p.jsx("label",{children:"Name:"}),p.jsx(Qe,{type:"text",placeholder:"Insira nome",onChange:R=>m(R.target.value),value:I,name:"move-1-name",required:!0}),p.jsx("label",{children:"Damage:"}),p.jsx(Qe,{type:"number",placeholder:"Insira um dano",onChange:R=>y(Number(R.target.value)),value:f,name:"move-1-damage",required:!0}),p.jsx("label",{children:"Cooldown:"}),p.jsx(Qe,{type:"number",placeholder:"Insira um cooldown",onChange:R=>T(Number(R.target.value)),value:E,name:"move-1-cooldown",required:!0}),p.jsx(ii,{type:"button",onClick:O,children:"Add move"}),p.jsx(ii,{type:"submit",children:"Criar carta"})]})]}),p.jsx(EV,{children:v.map((R,ee)=>p.jsxs("div",{className:"moveSlot",children:[p.jsx("strong",{children:R.name}),p.jsxs("p",{children:["Damage:",R.damage]}),p.jsxs("p",{children:["cooldown:",R.cooldown]}),p.jsx("button",{onClick:()=>H(R.name),children:"Remove"})]},ee))})]})}const kV=V.button`
  max-width: 200px;
  border: none;
  background: none;

  img {
    width: 100%;
  }
  button {
  }
  &:hover {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    box-shadow: 0px 0px 15px ${t=>t.theme["red-500"]};
    transform: translateY(-10px);
  }
`;function xV({img:t,name:e,handleToggleModal:n}){return p.jsx(kV,{onClick:n,children:p.jsx("img",{src:t,title:e})})}const RV=V.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,PV=V.div`
  display: flex;
  gap: 2rem;

  width: 1120px;
  margin: 0 auto;
`,NV=V.div`
  display: ${t=>t.state?"block":"none"}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  //overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`,OV=V.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  background-color: ${t=>t.theme["gray-900"]};
  border: 1px solid ${t=>t.theme["red-500"]};

  margin: 5% auto; /* 15% from the top and centered */
  padding: 20px;
  border-radius: 20px;
  max-width: 500px;
  min-height: 300px;

  .boosterArea {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 10;
    img {
      animation: ${t=>t.state==="DISPLAYING"?"Disolve 2s linear forwards":"none"};
    }
  }
  .cardArea {
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translateX(-50%);
    display: ${t=>t.state==="DISPLAYING"?"flex":"none"};
    flex-direction: column;
    gap: 0.5rem;
  }
  @keyframes Disolve {
    0% {
    }
    10% {
      opacity: 1;
    }
    99% {
      transform: scale(1.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`,DV=V.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${t=>t.theme["red-500"]};
  button {
    background: none;
    border: none;

    svg {
      color: ${t=>t.theme["red-500"]};
    }

    &:hover {
      transition: 0.2s background-color;
      cursor: pointer;
      svg {
        color: ${t=>t.theme["red-300"]};
      }
    }
  }
`;function bV(){const[t,e]=w.useState(!1),[n,r]=w.useState(null),[i,s]=w.useState(null),[o,a]=w.useState("IDLE"),{updateOwnedCards:l}=w.useContext(br),{user:u,userFileRef:c}=w.useContext(jt);function h(v){e(_=>!_),s(v),a("IDLE")}async function d(v){if(!u||!c)return;if(c.money<v.cost)return window.alert("Pontos insuficientes!");const _=Math.floor(Math.random()*i.cards.length),I=kr(gn,"cards",v.cards[_]),m=await di(I),f=m.data(),y=m.id,E=kr(gn,"users",u.uid);if((await di(E)).exists()){const A=c.money-=v.cost;await sg(E,{ownedCards:wT(y),money:A})}else await ig(E,{ownedCards:[y]});l(),a("DISPLAYING"),r(f)}function g(){a("IDLE"),r(null)}return p.jsxs(RV,{children:[p.jsxs("h1",{children:[p.jsx(a1,{size:30})," Compre pacotes para receber uma carta aleátoria"]}),p.jsx(PV,{children:eL.map(v=>p.jsx(xV,{img:v.img,name:v.name,handleToggleModal:()=>h(v)},v.id))}),p.jsx(NV,{state:t,children:p.jsxs(OV,{state:o,children:[p.jsxs(DV,{children:[p.jsxs("h3",{children:["Pontos: ",c==null?void 0:c.money,"⁋"]}),p.jsx("button",{onClick:()=>h(null),title:"Fechar",children:p.jsx(Ax,{size:30})})]}),t&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"boosterArea",children:p.jsx("img",{src:i.img,width:180,height:350})}),p.jsx("div",{className:"cardArea",children:n&&p.jsx(p.Fragment,{children:p.jsx(wr,{...n})})}),p.jsx(ii,{onClick:o==="IDLE"?()=>d(i):g,children:o==="IDLE"?`Comprar: ${i.cost}⁋`:"Continuar"})]})]})})]})}function MV(){const{user:t}=w.useContext(jt),{userFileRef:e}=w.useContext(jt);return p.jsxs(ix,{children:[p.jsx(wn,{path:"/CardBattle/",element:p.jsx(nV,{})}),p.jsx(wn,{path:"/CardBattle/deck",element:t?p.jsx(qM,{}):p.jsx(Qs,{to:"/CardBattle/auth/register"})}),p.jsx(wn,{path:"/CardBattle/battles",element:p.jsx(tL,{})}),p.jsx(wn,{path:"/CardBattle/battles/:id",element:p.jsx(cV,{})}),p.jsx(wn,{path:"/CardBattle/auth/register",element:t?p.jsx(Qs,{to:"/CardBattle/"}):p.jsx(mV,{})}),p.jsx(wn,{path:"/CardBattle/auth/login",element:t?p.jsx(Qs,{to:"/CardBattle/"}):p.jsx(vV,{})}),p.jsx(wn,{path:"/CardBattle/shop",element:t?p.jsx(bV,{}):p.jsx(Qs,{to:"/CardBattle/"})}),p.jsx(wn,{path:"/CardBattle/createCard",element:e&&e.role==="ADMIN"?p.jsx(AV,{}):p.jsx(Qs,{to:"/CardBattle/"})})]})}const LV=V.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;

  font-size: 1.5rem;
  font-weight: bold;

  border-top: 2px solid ${t=>t.theme["red-500"]};
  margin-top: 2rem;

  ul {
    display: flex;
    gap: 1rem;

    list-style: none;
  }

  a {
    display: flex;
    gap: 10px;

    padding: 0.5rem;
    border-radius: 6px;
    text-decoration: none;
    color: ${t=>t.theme["red-500"]};

    &:hover {
      transition: 0.2s all;
      color: ${t=>t.theme["red-300"]};
    }
  }
  p {
    color: ${t=>t.theme["red-500"]};
  }
`;function VV(){return p.jsxs(LV,{children:[p.jsxs("a",{href:"http://www.linkedin.com/in/lucas-emanoel-figueiredo-da-silva",target:"blank",children:[p.jsx(Ex,{width:26}),"Linkedin"]}),p.jsx("p",{children:"© All illustrations and designs belong to TellarHeaven"})]})}function $V(){function t(e,n){return typeof n=="string"?lA(e):!0}return p.jsx(ok,{shouldForwardProp:t,children:p.jsxs(hk,{theme:mk,children:[p.jsx(gk,{}),p.jsx(MM,{children:p.jsx(GM,{children:p.jsx(BM,{children:p.jsx(PT,{children:p.jsxs(cx,{children:[p.jsx(LM,{}),p.jsx(MV,{}),p.jsx(VV,{})]})})})})})]})})}td.createRoot(document.getElementById("root")).render(p.jsx(Ue.StrictMode,{children:p.jsx($V,{})}));
