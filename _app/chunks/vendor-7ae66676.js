function h(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(T)}function F(t){return typeof t=="function"}function H(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function W(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return h;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t,n,e){t.$$.on_destroy.push(G(n,e))}function lt(t,n,e,i){if(t){const r=z(t,n,e,i);return t[0](r)}}function z(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(n.dirty.length,r.length);for(let u=0;u<o;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,l){if(r){const o=z(n,e,i,l);t.p(o,r)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:Q(1,r,x=>n[e[x]].claim_order,s))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],o=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);u>=c;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);l.reverse(),o.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<o.length;c++){for(;s<l.length&&o[c].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(o[c],a)}}function U(t,n){if(v){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function _t(t,n,e){v&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function mt(){return C(" ")}function pt(){return C("")}function bt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function gt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){Z(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const c=e(u);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function tt(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const u=r.attributes[o];e[u.name]||l.push(u.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(n))}function xt(t,n,e){return tt(t,n,e,X)}function nt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function $t(t){return nt(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n){t.value=n==null?"":n}function vt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function wt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function St(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function et(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}let b;function p(t){b=t}function g(){if(!b)throw new Error("Function called outside component initialization");return b}function jt(t){g().$$.on_mount.push(t)}function Ct(t){g().$$.after_update.push(t)}function Nt(){const t=g();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const l=et(n,e,{cancelable:i});return r.slice().forEach(o=>{o.call(t,l)}),!l.defaultPrevented}return!0}}function At(t,n){return g().$$.context.set(t,n),n}function Mt(t){return g().$$.context.get(t)}function qt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const m=[],q=[],E=[],P=[],D=Promise.resolve();let S=!1;function L(){S||(S=!0,D.then(O))}function Pt(){return L(),D}function j(t){E.push(t)}const w=new Set;let $=0;function O(){const t=b;do{for(;$<m.length;){const n=m[$];$++,p(n),it(n.$$)}for(p(null),m.length=0,$=0;q.length;)q.pop()();for(let n=0;n<E.length;n+=1){const e=E[n];w.has(e)||(w.add(e),e())}E.length=0}while(m.length);for(;P.length;)P.pop()();S=!1,w.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const k=new Set;let d;function Tt(){d={r:0,c:[],p:d}}function zt(){d.r||y(d.c),d=d.p}function rt(t,n){t&&t.i&&(k.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if(k.has(t))return;k.add(t),d.c.push(()=>{k.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Dt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=n[l];if(u){for(const c in o)c in u||(i[c]=1);for(const c in u)r[c]||(e[c]=u[c],r[c]=1);t[l]=u}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Lt(t){return typeof t=="object"&&t!==null?t:{}}function Ot(t){t&&t.c()}function It(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,on_mount:l,on_destroy:o,after_update:u}=t.$$;r&&r.m(n,e),i||j(()=>{const c=l.map(T).filter(F);o?o.push(...c):y(c),t.$$.on_mount=[]}),u.forEach(j)}function ot(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(m.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,r,l,o,u=[-1]){const c=b;p(t);const s=t.$$={fragment:null,ctx:null,props:l,update:h,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,x,...N)=>{const A=N.length?N[0]:x;return s.ctx&&r(s.ctx[f],s.ctx[f]=A)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](A),a&&ut(t,f)),x}):[],s.update(),a=!0,y(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){J();const f=Y(n.target);s.fragment&&s.fragment.l(f),f.forEach(V)}else s.fragment&&s.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),O()}p(c)}class Ht{$destroy(){ot(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const _=[];function Wt(t,n=h){let e;const i=new Set;function r(u){if(H(t,u)&&(t=u,e)){const c=!_.length;for(const s of i)s[1](),_.push(s,t);if(c){for(let s=0;s<_.length;s+=2)_[s][0](_[s+1]);_.length=0}}}function l(u){r(u(t))}function o(u,c=h){const s=[u,c];return i.add(s),i.size===1&&(e=n(r)||h),u(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:r,update:l,subscribe:o}}export{Lt as A,ot as B,I as C,Wt as D,Pt as E,lt as F,at as G,dt as H,ft as I,U as J,h as K,Mt as L,j as M,wt as N,bt as O,ht as P,y as Q,Nt as R,Ht as S,St as T,kt as U,qt as V,yt as W,st as X,Y as a,gt as b,xt as c,V as d,X as e,vt as f,_t as g,nt as h,Ft as i,Et as j,mt as k,pt as l,$t as m,Tt as n,Bt as o,zt as p,rt as q,At as r,H as s,C as t,Ct as u,jt as v,Ot as w,It as x,ct as y,Dt as z};