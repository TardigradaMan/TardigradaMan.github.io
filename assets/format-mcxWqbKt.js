import{a as U,ab as M,w as C,o as B,g as D,b as q,j as p,l as a,v as O,ac as $,a0 as j,c as F,ad as I}from"./index-Ct3WWCju.js";import{n as N,o as _,p as W,v as K}from"./use-router-link-CPeilArx.js";function re(e,o,t){let l;function r(){l!==void 0&&(M.remove(l),l=void 0)}return U(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){l={condition:()=>t.value===!0,handler:o},M.add(l)}}}const ne={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},se=["beforeShow","show","beforeHide","hide"];function ue({showing:e,canShow:o,hideOnRouteChange:t,handleShow:l,handleHide:r,processOnMount:m}){const n=D(),{props:s,emit:u,proxy:L}=n;let d;function R(i){e.value===!0?g(i):S(i)}function S(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||o!==void 0&&o(i)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!0),d=i,q(()=>{d===i&&(d=void 0)})),(s.modelValue===null||f===!1)&&V(i)}function V(i){e.value!==!0&&(e.value=!0,u("beforeShow",i),l!==void 0?l(i):u("show",i))}function g(i){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!1),d=i,q(()=>{d===i&&(d=void 0)})),(s.modelValue===null||f===!1)&&H(i)}function H(i){e.value!==!1&&(e.value=!1,u("beforeHide",i),r!==void 0?r(i):u("hide",i))}function P(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):i===!0!==e.value&&(i===!0?V:H)(d)}C(()=>s.modelValue,P),t!==void 0&&N(n)===!0&&C(()=>L.$route.fullPath,()=>{t.value===!0&&e.value===!0&&g()}),m===!0&&B(()=>{P(s.modelValue)});const x={show:S,hide:g,toggle:R};return Object.assign(L,x),x}const G=[null,document,document.body,document.scrollingElement,document.documentElement];function de(e,o){let t=_(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return G.includes(t)?window:t}function J(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Q(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let h;function ae(){if(h!==void 0)return h;const e=document.createElement("p"),o=document.createElement("div");W(e,{width:"100%",height:"200px"}),W(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return t===l&&(l=o.clientWidth),o.remove(),h=t-l,h}function Z(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let v=0,b,T,w,E=!1,k,A,z,c=null;function ee(e){oe(e)&&O(e)}function oe(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=$(e),t=e.shiftKey&&!e.deltaX,l=!t&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=t||l?e.deltaY:e.deltaX;for(let m=0;m<o.length;m++){const n=o[m];if(Z(n,l))return l?r<0&&n.scrollTop===0?!0:r>0&&n.scrollTop+n.clientHeight===n.scrollHeight:r<0&&n.scrollLeft===0?!0:r>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function X(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function y(e){E!==!0&&(E=!0,requestAnimationFrame(()=>{E=!1;const{height:o}=e.target,{clientHeight:t,scrollTop:l}=document.scrollingElement;(w===void 0||o!==window.innerHeight)&&(w=t-o,document.scrollingElement.scrollTop=l),l>w&&(document.scrollingElement.scrollTop-=Math.ceil((l-w)/8))}))}function Y(e){const o=document.body,t=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:r}=window.getComputedStyle(o);b=Q(window),T=J(window),k=o.style.left,A=o.style.top,z=window.location.href,o.style.left=`-${b}px`,o.style.top=`-${T}px`,r!=="hidden"&&(r==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",y,a.passiveCapture),window.visualViewport.addEventListener("scroll",y,a.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",X,a.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",ee,a.notPassive),e==="remove"&&(p.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",y,a.passiveCapture),window.visualViewport.removeEventListener("scroll",y,a.passiveCapture)):window.removeEventListener("scroll",X,a.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=k,o.style.top=A,window.location.href===z&&window.scrollTo(b,T),w=void 0)}function te(e){let o="add";if(e===!0){if(v++,c!==null){clearTimeout(c),c=null;return}if(v>1)return}else{if(v===0||(v--,v>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){c!==null&&clearTimeout(c),c=setTimeout(()=>{Y(o),c=null},100);return}}Y(o)}function ce(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,te(o))}}}function fe(){let e=null;const o=D();function t(){e!==null&&(clearTimeout(e),e=null)}return j(t),U(t),{removeTimeout:t,registerTimeout(l,r){t(),K(o)===!1&&(e=setTimeout(l,r))}}}const pe={dark:{type:Boolean,default:null}};function me(e,o){return F(()=>e.dark===null?o.dark.isActive:e.dark)}function ve(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),I.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function we(e,o,t){return t<=o?o:Math.min(t,Math.max(o,e))}function he(e,o,t){if(t<=o)return o;const l=t-o+1;let r=o+(e-o)%l;return r<o&&(r=l+r),r===0?0:r}export{pe as a,se as b,ve as c,me as d,fe as e,ue as f,re as g,we as h,ce as i,de as j,J as k,Q as l,ae as m,he as n,ne as u};