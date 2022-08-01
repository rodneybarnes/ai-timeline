var Oe=Object.defineProperty,Ae=Object.defineProperties;var Le=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable;var fe=(r,e,t)=>e in r?Oe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,he=(r,e)=>{for(var t in e||(e={}))Fe.call(e,t)&&fe(r,t,e[t]);if(ue)for(var t of ue(e))Qe.call(e,t)&&fe(r,t,e[t]);return r},de=(r,e)=>Ae(r,Le(e));var le=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var me=(r,e,t)=>(le(r,e,"read from private field"),t?t.call(r):e.get(r)),L=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},_e=(r,e,t,n)=>(le(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t);var j=(r,e,t)=>(le(r,e,"access private method"),t);import{L as He,S as Y,i as R,s as J,e as y,t as S,c as b,a as w,h as N,d as g,g as I,J as v,j as z,b as E,M as Se,N as x,O,K as A,P as se,Q as ie,R as X,T as Ne,U as pe,w as F,x as Q,y as H,q as k,o as $,B as M,k as C,m as U,n as Ve,p as Be,V as Ce,W as Me,v as Ye,X as Re}from"../chunks/vendor-7ae66676.js";import{c as W}from"../chunks/singletons-d1fb5791.js";import{H as Je}from"../chunks/Header-00d38458.js";const We=async r=>await(await r("https://opensheet.elk.sh/14ULsYVKSuyxj06Ng09lUK18LCkwei_GiwZf5zjixWeQ/_od1_")).json(),je=()=>{const r=He("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},ze={subscribe(r){return je().page.subscribe(r)}};W.disable_scroll_handling;const ge=W.goto;W.invalidate;W.prefetch;W.prefetch_routes;W.before_navigate;W.after_navigate;function ve(r,e,t){const n=r.slice();return n[5]=e[t],n}function ye(r){let e,t=r[5]+"",n,a;return{c(){e=y("option"),n=S(t),this.h()},l(l){e=b(l,"OPTION",{});var i=w(e);n=N(i,t),i.forEach(g),this.h()},h(){e.__value=a=r[5],e.value=e.__value},m(l,i){I(l,e,i),v(e,n)},p(l,i){i&2&&t!==(t=l[5]+"")&&z(n,t),i&2&&a!==(a=l[5])&&(e.__value=a,e.value=e.__value)},d(l){l&&g(e)}}}function Ke(r){let e,t,n,a=r[1].name+"",l,i,o,s=r[1].values,c=[];for(let h=0;h<s.length;h+=1)c[h]=ye(ve(r,s,h));return{c(){e=y("select"),t=y("option"),n=S("Filter by "),l=S(a);for(let h=0;h<c.length;h+=1)c[h].c();this.h()},l(h){e=b(h,"SELECT",{class:!0});var f=w(e);t=b(f,"OPTION",{});var d=w(t);n=N(d,"Filter by "),l=N(d,a),d.forEach(g);for(let m=0;m<c.length;m+=1)c[m].l(f);f.forEach(g),this.h()},h(){t.__value="",t.value=t.__value,E(e,"class","mr-3"),r[0]===void 0&&Se(()=>r[3].call(e))},m(h,f){I(h,e,f),v(e,t),v(t,n),v(t,l);for(let d=0;d<c.length;d+=1)c[d].m(e,null);x(e,r[0]),i||(o=[O(e,"change",r[3]),O(e,"change",r[2])],i=!0)},p(h,[f]){if(f&2&&a!==(a=h[1].name+"")&&z(l,a),f&2){s=h[1].values;let d;for(d=0;d<s.length;d+=1){const m=ve(h,s,d);c[d]?c[d].p(m,f):(c[d]=ye(m),c[d].c(),c[d].m(e,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=s.length}f&3&&x(e,h[0])},i:A,o:A,d(h){h&&g(e),se(c,h),i=!1,ie(o)}}}function Ge(r,e,t){let{filter:n={name:"",values:[]}}=e,{selectedValue:a}=e;const l=X(),i=()=>l("filterUpdated",{filterName:n.name,selectedValue:a});function o(){a=Ne(this),t(0,a),t(1,n)}return r.$$set=s=>{"filter"in s&&t(1,n=s.filter),"selectedValue"in s&&t(0,a=s.selectedValue)},[a,n,i,o]}class Ze extends Y{constructor(e){super();R(this,e,Ge,Ke,J,{filter:1,selectedValue:0})}}function qe(r){let e,t,n;return{c(){e=y("input"),this.h()},l(a){e=b(a,"INPUT",{type:!0,class:!0,placeholder:!0}),this.h()},h(){E(e,"type","search"),E(e,"class","mr-3"),E(e,"placeholder","Search")},m(a,l){I(a,e,l),pe(e,r[0]),t||(n=[O(e,"input",r[2]),O(e,"keyup",r[1])],t=!0)},p(a,[l]){l&1&&pe(e,a[0])},i:A,o:A,d(a){a&&g(e),t=!1,ie(n)}}}function Xe(r,e,t){let{searchValue:n=""}=e;const a=X(),l=o=>{(o.key==="Enter"||o.key==="Backspace"&&!n)&&a("searchSubmitted",{searchValue:n})};function i(){n=this.value,t(0,n)}return r.$$set=o=>{"searchValue"in o&&t(0,n=o.searchValue)},[n,l,i]}class xe extends Y{constructor(e){super();R(this,e,Xe,qe,J,{searchValue:0})}}function et(r){let e,t,n,a,l,i,o;return{c(){e=y("select"),t=y("option"),n=S("Ascending"),a=y("option"),l=S("Descending"),this.h()},l(s){e=b(s,"SELECT",{class:!0});var c=w(e);t=b(c,"OPTION",{});var h=w(t);n=N(h,"Ascending"),h.forEach(g),a=b(c,"OPTION",{});var f=w(a);l=N(f,"Descending"),f.forEach(g),c.forEach(g),this.h()},h(){t.__value="asc",t.value=t.__value,a.__value="desc",a.value=a.__value,E(e,"class","mx-3"),r[0]===void 0&&Se(()=>r[2].call(e))},m(s,c){I(s,e,c),v(e,t),v(t,n),v(e,a),v(a,l),x(e,r[0]),i||(o=[O(e,"change",r[2]),O(e,"change",r[1])],i=!0)},p(s,[c]){c&1&&x(e,s[0])},i:A,o:A,d(s){s&&g(e),i=!1,ie(o)}}}function tt(r,e,t){let{orderBy:n="asc"}=e;const a=X(),l=()=>a("orderUpdated",{orderBy:n});function i(){n=Ne(this),t(0,n)}return r.$$set=o=>{"orderBy"in o&&t(0,n=o.orderBy)},[n,l,i]}class rt extends Y{constructor(e){super();R(this,e,tt,et,J,{orderBy:0})}}function be(r,e,t){const n=r.slice();return n[8]=e[t],n}function we(r){var a;let e,t;function n(...l){return r[5](r[8],...l)}return e=new Ze({props:{filter:r[8],selectedValue:((a=r[1].find(n))==null?void 0:a.value)||""}}),e.$on("filterUpdated",r[6]),{c(){F(e.$$.fragment)},l(l){Q(e.$$.fragment,l)},m(l,i){H(e,l,i),t=!0},p(l,i){var s;r=l;const o={};i&1&&(o.filter=r[8]),i&3&&(o.selectedValue=((s=r[1].find(n))==null?void 0:s.value)||""),e.$set(o)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){$(e.$$.fragment,l),t=!1},d(l){M(e,l)}}}function nt(r){var D,p;let e,t,n,a,l,i,o,s,c,h,f,d=r[0],m=[];for(let u=0;u<d.length;u+=1)m[u]=we(be(r,d,u));const V=u=>$(m[u],1,1,()=>{m[u]=null});return n=new xe({props:{searchValue:((D=r[1].find(Ee))==null?void 0:D.value)||""}}),n.$on("searchSubmitted",r[3]),s=new rt({props:{orderBy:(p=r[1].find(Te))==null?void 0:p.value}}),s.$on("orderUpdated",r[4]),{c(){e=y("div");for(let u=0;u<m.length;u+=1)m[u].c();t=C(),F(n.$$.fragment),a=C(),l=y("button"),i=S("Clear"),o=C(),F(s.$$.fragment),this.h()},l(u){e=b(u,"DIV",{class:!0});var _=w(e);for(let B=0;B<m.length;B+=1)m[B].l(_);t=U(_),Q(n.$$.fragment,_),a=U(_),l=b(_,"BUTTON",{class:!0});var P=w(l);i=N(P,"Clear"),P.forEach(g),o=U(_),Q(s.$$.fragment,_),_.forEach(g),this.h()},h(){E(l,"class","bg-white px-5"),E(e,"class","flex flex-col md:flex-row justify-center mb-10 p-5 w-full")},m(u,_){I(u,e,_);for(let P=0;P<m.length;P+=1)m[P].m(e,null);v(e,t),H(n,e,null),v(e,a),v(e,l),v(l,i),v(e,o),H(s,e,null),c=!0,h||(f=O(l,"click",r[2]),h=!0)},p(u,[_]){var K,G;if(_&3){d=u[0];let T;for(T=0;T<d.length;T+=1){const ce=be(u,d,T);m[T]?(m[T].p(ce,_),k(m[T],1)):(m[T]=we(ce),m[T].c(),k(m[T],1),m[T].m(e,t))}for(Ve(),T=d.length;T<m.length;T+=1)V(T);Be()}const P={};_&2&&(P.searchValue=((K=u[1].find(Ee))==null?void 0:K.value)||""),n.$set(P);const B={};_&2&&(B.orderBy=(G=u[1].find(Te))==null?void 0:G.value),s.$set(B)},i(u){if(!c){for(let _=0;_<d.length;_+=1)k(m[_]);k(n.$$.fragment,u),k(s.$$.fragment,u),c=!0}},o(u){m=m.filter(Boolean);for(let _=0;_<m.length;_+=1)$(m[_]);$(n.$$.fragment,u),$(s.$$.fragment,u),c=!1},d(u){u&&g(e),se(m,u),M(n),M(s),h=!1,f()}}}const Ee=r=>r.key==="search",Te=r=>r.key==="orderBy";function at(r,e,t){let{filters:n=[]}=e,{filterParams:a=[]}=e;const l=X(),i=()=>l("clearParams"),o=({detail:{searchValue:f}})=>l("filterUpdated",{filterName:"search",selectedValue:f}),s=({detail:{orderBy:f}})=>l("filterUpdated",{filterName:"orderBy",selectedValue:f}),c=(f,d)=>d.key===f.name;function h(f){Ce.call(this,r,f)}return r.$$set=f=>{"filters"in f&&t(0,n=f.filters),"filterParams"in f&&t(1,a=f.filterParams)},[n,a,i,o,s,c,h]}class lt extends Y{constructor(e){super();R(this,e,at,nt,J,{filters:0,filterParams:1})}}function ke(r){let e,t,n,a,l=r[0].theme+"",i;return{c(){e=y("div"),t=y("div"),n=C(),a=y("p"),i=S(l),this.h()},l(o){e=b(o,"DIV",{class:!0});var s=w(e);t=b(s,"DIV",{class:!0}),w(t).forEach(g),s.forEach(g),n=U(o),a=b(o,"P",{class:!0});var c=w(a);i=N(c,l),c.forEach(g),this.h()},h(){E(t,"class","flex-grow border-t border-gray-400 mt-7"),E(e,"class","flex"),E(a,"class","italic")},m(o,s){I(o,e,s),v(e,t),I(o,n,s),I(o,a,s),v(a,i)},p(o,s){s&1&&l!==(l=o[0].theme+"")&&z(i,l)},d(o){o&&g(e),o&&g(n),o&&g(a)}}}function st(r){let e,t,n,a,l,i,o=r[0].headline+"",s,c,h,f=r[0].text+"",d,m,V,D,p=r[0].theme&&ke(r);return{c(){e=y("div"),t=y("p"),n=S(r[1]),a=C(),l=y("h3"),i=y("button"),s=S(o),c=C(),h=y("p"),d=S(f),m=C(),p&&p.c(),this.h()},l(u){e=b(u,"DIV",{class:!0});var _=w(e);t=b(_,"P",{class:!0});var P=w(t);n=N(P,r[1]),P.forEach(g),a=U(_),l=b(_,"H3",{id:!0,class:!0});var B=w(l);i=b(B,"BUTTON",{class:!0});var K=w(i);s=N(K,o),K.forEach(g),B.forEach(g),c=U(_),h=b(_,"P",{});var G=w(h);d=N(G,f),G.forEach(g),m=U(_),p&&p.l(_),_.forEach(g),this.h()},h(){E(t,"class","mb-2 text-sm"),E(i,"class","text-left hover:text-sky-500"),E(l,"id",r[3]),E(l,"class","mb-3 text-xl"),E(e,"class","p-10 sm:mb-2 xl:-mt-4 text-white border-2 border-neutral-700 xl:min-w-[35%] xl:max-w-[35%] "+r[2]+" bg-neutral-800")},m(u,_){I(u,e,_),v(e,t),v(t,n),v(e,a),v(e,l),v(l,i),v(i,s),v(e,c),v(e,h),v(h,d),v(e,m),p&&p.m(e,null),V||(D=O(i,"click",Me(r[4])),V=!0)},p(u,[_]){_&2&&z(n,u[1]),_&1&&o!==(o=u[0].headline+"")&&z(s,o),_&1&&f!==(f=u[0].text+"")&&z(d,f),u[0].theme?p?p.p(u,_):(p=ke(u),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},i:A,o:A,d(u){u&&g(e),p&&p.d(),V=!1,D()}}}function it(r,e,t){let n,a,{entry:l={month:0,year:0,headline:"",text:"",theme:"",type:"",endYear:0}}=e,{index:i=0}=e;const o={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},s=i%2===0?"lg:ml-[38%]":"lg:mr-[38%]",c=l.headline.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/g,"-"),h=X(),f=()=>h("idSelected",{id:c});return r.$$set=d=>{"entry"in d&&t(0,l=d.entry),"index"in d&&t(5,i=d.index)},r.$$.update=()=>{r.$$.dirty&1&&t(6,n=o[l.month]?o[l.month]+", ":""),r.$$.dirty&65&&t(1,a=`${l.day} ${n} ${l.year}`)},[l,a,s,c,f,i,n]}class ot extends Y{constructor(e){super();R(this,e,it,st,J,{entry:0,index:5})}}function Pe(r,e,t){const n=r.slice();return n[4]=e[t],n[6]=t,n}function $e(r){let e,t;return e=new ot({props:{entry:r[4],index:r[6]}}),e.$on("idSelected",r[2]),{c(){F(e.$$.fragment)},l(n){Q(e.$$.fragment,n)},m(n,a){H(e,n,a),t=!0},p(n,a){const l={};a&1&&(l.entry=n[4]),e.$set(l)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){$(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}function ct(r){let e,t,n=r[0],a=[];for(let i=0;i<n.length;i+=1)a[i]=$e(Pe(r,n,i));const l=i=>$(a[i],1,1,()=>{a[i]=null});return{c(){e=y("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=b(i,"DIV",{class:!0});var o=w(e);for(let s=0;s<a.length;s+=1)a[s].l(o);o.forEach(g),this.h()},h(){E(e,"class","flex flex-col items-center flex-grow px-5")},m(i,o){I(i,e,o);for(let s=0;s<a.length;s+=1)a[s].m(e,null);t=!0},p(i,[o]){if(o&1){n=i[0];let s;for(s=0;s<n.length;s+=1){const c=Pe(i,n,s);a[s]?(a[s].p(c,o),k(a[s],1)):(a[s]=$e(c),a[s].c(),k(a[s],1),a[s].m(e,null))}for(Ve(),s=n.length;s<a.length;s+=1)l(s);Be()}},i(i){if(!t){for(let o=0;o<n.length;o+=1)k(a[o]);t=!0}},o(i){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)$(a[o]);t=!1},d(i){i&&g(e),se(a,i)}}}function ut(r,e,t){let{entries:n=[]}=e,{selectedEntryId:a}=e;const l=()=>{if(a){const o=document.getElementById(a);o&&o.scrollIntoView({behavior:"smooth"})}};Ye(()=>{l()});function i(o){Ce.call(this,r,o)}return r.$$set=o=>{"entries"in o&&t(0,n=o.entries),"selectedEntryId"in o&&t(1,a=o.selectedEntryId)},[n,a,i]}class ft extends Y{constructor(e){super();R(this,e,ut,ct,J,{entries:0,selectedEntryId:1})}}class Ie{constructor(e,t){this.name=e,this.values=t}}var ee,dt,te,mt,re,_t,ne,pt,ae,gt,q;class ht{constructor(e){L(this,ee);L(this,te);L(this,re);L(this,ne);L(this,ae);L(this,q,void 0);_e(this,q,(t,n)=>n.sort((a,l)=>t==="asc"?new Date(a.year,a.month,a.day).getTime()-new Date(l.year,l.month,l.day).getTime():new Date(l.year,l.month,l.day).getTime()-new Date(a.year,a.month,a.day).getTime())),this.data=e.map(j(this,ee,dt))}get eras(){return this.data.filter(e=>e.type==="era")}get themes(){return[...new Set(this.data.filter(e=>e.theme!==void 0).map(e=>e.theme.split(",").map(t=>t.trim())).flat().filter(e=>e!=="").map(e=>`${e.charAt(0).toUpperCase()}${e.slice(1).toLowerCase()}`))]}get entries(){return this.data.filter(e=>e.type===void 0||e.type==="")}filterEntries(e){var a;let t=[...this.entries];t=j(this,te,mt).call(this,e,t);const n=(a=e.find(l=>l.key==="orderBy"))==null?void 0:a.value;return n&&me(this,q).call(this,n,t),t}}ee=new WeakSet,dt=function(e){return de(he({},e),{day:e.Day&&Number(e.Day),month:e.Month&&Number(e.Month),year:Number(e.Year),headline:e.Headline,text:e.Text||"",theme:e.Group,type:e.Type,endYear:Number(e["End Year"])})},te=new WeakSet,mt=function(e,t){return e.forEach(n=>{switch(n.key){case"era":t=j(this,re,_t).call(this,n.value,t);break;case"theme":t=j(this,ne,pt).call(this,n.value,t);break;case"search":t=j(this,ae,gt).call(this,n.value,t);break}}),t},re=new WeakSet,_t=function(e,t){if(!e)return t;const n=this.eras.find(a=>a.headline===e);if(!n)throw new Error(`Invalid era passed to filter: ${e}`);return t.filter(a=>Number(a.year)>=Number(n.year)&&Number(a.year)<=Number(n.endYear))},ne=new WeakSet,pt=function(e,t){return e?t.filter(n=>n.theme===e):t},ae=new WeakSet,gt=function(e,t){return e?t.filter(n=>{var a,l;return((a=n.headline)==null?void 0:a.toLowerCase().includes(e.toLowerCase()))||((l=n.text)==null?void 0:l.toLowerCase().includes(e.toLowerCase()))}):t},q=new WeakMap;var vt=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},yt=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},bt=(r,e,t)=>(vt(r,e,"access private method"),t),oe,Ue;const De=class{};let Z=De;oe=new WeakSet;Ue=function([r,e]){return{key:r,value:e}};yt(Z,oe);Z.getQueryParams=r=>r.map(bt(De,oe,Ue));Z.getQueryParam=(r,e)=>{var t;return(t=e.find(([n])=>n===r))==null?void 0:t[1]};function wt(r){let e,t,n,a,l,i,o;return t=new Je({props:{link:"/about",linkText:"About"}}),a=new lt({props:{filters:r[6],filterParams:r[0]}}),a.$on("filterUpdated",r[3]),a.$on("clearParams",r[4]),i=new ft({props:{entries:r[1],selectedEntryId:r[2]}}),i.$on("idSelected",r[5]),{c(){e=y("div"),F(t.$$.fragment),n=C(),F(a.$$.fragment),l=C(),F(i.$$.fragment),this.h()},l(s){e=b(s,"DIV",{class:!0});var c=w(e);Q(t.$$.fragment,c),n=U(c),Q(a.$$.fragment,c),l=U(c),Q(i.$$.fragment,c),c.forEach(g),this.h()},h(){E(e,"class","flex flex-col items-center min-h-screen bg-zinc-900")},m(s,c){I(s,e,c),H(t,e,null),v(e,n),H(a,e,null),v(e,l),H(i,e,null),o=!0},p(s,[c]){const h={};c&1&&(h.filterParams=s[0]),a.$set(h);const f={};c&2&&(f.entries=s[1]),c&4&&(f.selectedEntryId=s[2]),i.$set(f)},i(s){o||(k(t.$$.fragment,s),k(a.$$.fragment,s),k(i.$$.fragment,s),o=!0)},o(s){$(t.$$.fragment,s),$(a.$$.fragment,s),$(i.$$.fragment,s),o=!1},d(s){s&&g(e),M(t),M(a),M(i)}}}const It=!1;async function St({fetch:r}){return{props:{rawTimelineData:await We(r)}}}function Et(r,e,t){let n;Re(r,ze,p=>t(8,n=p));let{rawTimelineData:a}=e;const l=new ht(a),i=()=>Z.getQueryParams(Array.from(n.url.searchParams.entries())),o=({detail:{filterName:p,selectedValue:u}})=>{n.url.searchParams.set(p,u),ge(n.url.href),t(0,m=i()),t(1,V=l.filterEntries(m))},s=()=>{Array.from(n.url.searchParams.keys()).forEach(p=>n.url.searchParams.delete(p)),ge(n.url.href),t(0,m=[]),t(1,V=[...l.entries])},c=({detail:{id:p}})=>{n.url.searchParams.set("id",p),t(2,D=p),window.location.href=n.url.href},h=new Ie("era",l.eras.map(p=>p.headline)),f=new Ie("theme",l.themes),d=[h,f];let m=i(),V=l.filterEntries(m),D=Z.getQueryParam("id",Array.from(n.url.searchParams.entries()));return r.$$set=p=>{"rawTimelineData"in p&&t(7,a=p.rawTimelineData)},[m,V,D,o,s,c,d,a]}class Nt extends Y{constructor(e){super();R(this,e,Et,wt,J,{rawTimelineData:7})}}export{Nt as default,St as load,It as prerender};