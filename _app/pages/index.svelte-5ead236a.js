var Ae=Object.defineProperty,Oe=Object.defineProperties;var Le=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable;var fe=(r,e,t)=>e in r?Ae(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,he=(r,e)=>{for(var t in e||(e={}))Fe.call(e,t)&&fe(r,t,e[t]);if(ue)for(var t of ue(e))Qe.call(e,t)&&fe(r,t,e[t]);return r},de=(r,e)=>Oe(r,Le(e));var le=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var me=(r,e,t)=>(le(r,e,"read from private field"),t?t.call(r):e.get(r)),M=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},_e=(r,e,t,n)=>(le(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t);var J=(r,e,t)=>(le(r,e,"access private method"),t);import{L as Me,S as L,i as F,s as Q,e as y,t as S,c as b,a as E,h as V,d as g,g as $,J as v,j as W,b as w,M as Se,N as X,O,K as N,P as se,Q as ie,R as q,T as Ve,U as pe,w as H,x as Y,y as x,q as k,o as I,B as R,k as U,m as D,n as Ne,p as Be,V as Ce,W as He,v as Ye,X as xe}from"../chunks/vendor-7ae66676.js";import{c as j}from"../chunks/singletons-d1fb5791.js";const Re=async r=>await(await r("https://opensheet.elk.sh/14ULsYVKSuyxj06Ng09lUK18LCkwei_GiwZf5zjixWeQ/_od1_")).json(),je=()=>{const r=Me("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},Je={subscribe(r){return je().page.subscribe(r)}};j.disable_scroll_handling;const ge=j.goto;j.invalidate;j.prefetch;j.prefetch_routes;j.before_navigate;j.after_navigate;function ve(r,e,t){const n=r.slice();return n[5]=e[t],n}function ye(r){let e,t=r[5]+"",n,a;return{c(){e=y("option"),n=S(t),this.h()},l(l){e=b(l,"OPTION",{});var i=E(e);n=V(i,t),i.forEach(g),this.h()},h(){e.__value=a=r[5],e.value=e.__value},m(l,i){$(l,e,i),v(e,n)},p(l,i){i&2&&t!==(t=l[5]+"")&&W(n,t),i&2&&a!==(a=l[5])&&(e.__value=a,e.value=e.__value)},d(l){l&&g(e)}}}function We(r){let e,t,n,a=r[1].name+"",l,i,o,s=r[1].values,c=[];for(let h=0;h<s.length;h+=1)c[h]=ye(ve(r,s,h));return{c(){e=y("select"),t=y("option"),n=S("Filter by "),l=S(a);for(let h=0;h<c.length;h+=1)c[h].c();this.h()},l(h){e=b(h,"SELECT",{class:!0});var f=E(e);t=b(f,"OPTION",{});var d=E(t);n=V(d,"Filter by "),l=V(d,a),d.forEach(g);for(let m=0;m<c.length;m+=1)c[m].l(f);f.forEach(g),this.h()},h(){t.__value="",t.value=t.__value,w(e,"class","mr-3"),r[0]===void 0&&Se(()=>r[3].call(e))},m(h,f){$(h,e,f),v(e,t),v(t,n),v(t,l);for(let d=0;d<c.length;d+=1)c[d].m(e,null);X(e,r[0]),i||(o=[O(e,"change",r[3]),O(e,"change",r[2])],i=!0)},p(h,[f]){if(f&2&&a!==(a=h[1].name+"")&&W(l,a),f&2){s=h[1].values;let d;for(d=0;d<s.length;d+=1){const m=ve(h,s,d);c[d]?c[d].p(m,f):(c[d]=ye(m),c[d].c(),c[d].m(e,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=s.length}f&3&&X(e,h[0])},i:N,o:N,d(h){h&&g(e),se(c,h),i=!1,ie(o)}}}function ze(r,e,t){let{filter:n={name:"",values:[]}}=e,{selectedValue:a}=e;const l=q(),i=()=>l("filterUpdated",{filterName:n.name,selectedValue:a});function o(){a=Ve(this),t(0,a),t(1,n)}return r.$$set=s=>{"filter"in s&&t(1,n=s.filter),"selectedValue"in s&&t(0,a=s.selectedValue)},[a,n,i,o]}class Ke extends L{constructor(e){super();F(this,e,ze,We,Q,{filter:1,selectedValue:0})}}function Ge(r){let e,t,n;return{c(){e=y("input"),this.h()},l(a){e=b(a,"INPUT",{type:!0,class:!0,placeholder:!0}),this.h()},h(){w(e,"type","search"),w(e,"class","mr-3"),w(e,"placeholder","Search")},m(a,l){$(a,e,l),pe(e,r[0]),t||(n=[O(e,"input",r[2]),O(e,"keyup",r[1])],t=!0)},p(a,[l]){l&1&&pe(e,a[0])},i:N,o:N,d(a){a&&g(e),t=!1,ie(n)}}}function Ze(r,e,t){let{searchValue:n=""}=e;const a=q(),l=o=>{(o.key==="Enter"||o.key==="Backspace"&&!n)&&a("searchSubmitted",{searchValue:n})};function i(){n=this.value,t(0,n)}return r.$$set=o=>{"searchValue"in o&&t(0,n=o.searchValue)},[n,l,i]}class qe extends L{constructor(e){super();F(this,e,Ze,Ge,Q,{searchValue:0})}}function Xe(r){let e,t,n,a,l,i,o;return{c(){e=y("select"),t=y("option"),n=S("Ascending"),a=y("option"),l=S("Descending"),this.h()},l(s){e=b(s,"SELECT",{class:!0});var c=E(e);t=b(c,"OPTION",{});var h=E(t);n=V(h,"Ascending"),h.forEach(g),a=b(c,"OPTION",{});var f=E(a);l=V(f,"Descending"),f.forEach(g),c.forEach(g),this.h()},h(){t.__value="asc",t.value=t.__value,a.__value="desc",a.value=a.__value,w(e,"class","mx-3"),r[0]===void 0&&Se(()=>r[2].call(e))},m(s,c){$(s,e,c),v(e,t),v(t,n),v(e,a),v(a,l),X(e,r[0]),i||(o=[O(e,"change",r[2]),O(e,"change",r[1])],i=!0)},p(s,[c]){c&1&&X(e,s[0])},i:N,o:N,d(s){s&&g(e),i=!1,ie(o)}}}function et(r,e,t){let{orderBy:n="asc"}=e;const a=q(),l=()=>a("orderUpdated",{orderBy:n});function i(){n=Ve(this),t(0,n)}return r.$$set=o=>{"orderBy"in o&&t(0,n=o.orderBy)},[n,l,i]}class tt extends L{constructor(e){super();F(this,e,et,Xe,Q,{orderBy:0})}}function be(r,e,t){const n=r.slice();return n[8]=e[t],n}function Ee(r){var a;let e,t;function n(...l){return r[5](r[8],...l)}return e=new Ke({props:{filter:r[8],selectedValue:((a=r[1].find(n))==null?void 0:a.value)||""}}),e.$on("filterUpdated",r[6]),{c(){H(e.$$.fragment)},l(l){Y(e.$$.fragment,l)},m(l,i){x(e,l,i),t=!0},p(l,i){var s;r=l;const o={};i&1&&(o.filter=r[8]),i&3&&(o.selectedValue=((s=r[1].find(n))==null?void 0:s.value)||""),e.$set(o)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){I(e.$$.fragment,l),t=!1},d(l){R(e,l)}}}function rt(r){var A,p;let e,t,n,a,l,i,o,s,c,h,f,d=r[0],m=[];for(let u=0;u<d.length;u+=1)m[u]=Ee(be(r,d,u));const B=u=>I(m[u],1,1,()=>{m[u]=null});return n=new qe({props:{searchValue:((A=r[1].find(we))==null?void 0:A.value)||""}}),n.$on("searchSubmitted",r[3]),s=new tt({props:{orderBy:(p=r[1].find(Te))==null?void 0:p.value}}),s.$on("orderUpdated",r[4]),{c(){e=y("div");for(let u=0;u<m.length;u+=1)m[u].c();t=U(),H(n.$$.fragment),a=U(),l=y("button"),i=S("Clear"),o=U(),H(s.$$.fragment),this.h()},l(u){e=b(u,"DIV",{class:!0});var _=E(e);for(let C=0;C<m.length;C+=1)m[C].l(_);t=D(_),Y(n.$$.fragment,_),a=D(_),l=b(_,"BUTTON",{class:!0});var P=E(l);i=V(P,"Clear"),P.forEach(g),o=D(_),Y(s.$$.fragment,_),_.forEach(g),this.h()},h(){w(l,"class","bg-white px-5"),w(e,"class","flex flex-col md:flex-row justify-center mb-10 p-5 bg-neutral-800 w-full")},m(u,_){$(u,e,_);for(let P=0;P<m.length;P+=1)m[P].m(e,null);v(e,t),x(n,e,null),v(e,a),v(e,l),v(l,i),v(e,o),x(s,e,null),c=!0,h||(f=O(l,"click",r[2]),h=!0)},p(u,[_]){var z,K;if(_&3){d=u[0];let T;for(T=0;T<d.length;T+=1){const ce=be(u,d,T);m[T]?(m[T].p(ce,_),k(m[T],1)):(m[T]=Ee(ce),m[T].c(),k(m[T],1),m[T].m(e,t))}for(Ne(),T=d.length;T<m.length;T+=1)B(T);Be()}const P={};_&2&&(P.searchValue=((z=u[1].find(we))==null?void 0:z.value)||""),n.$set(P);const C={};_&2&&(C.orderBy=(K=u[1].find(Te))==null?void 0:K.value),s.$set(C)},i(u){if(!c){for(let _=0;_<d.length;_+=1)k(m[_]);k(n.$$.fragment,u),k(s.$$.fragment,u),c=!0}},o(u){m=m.filter(Boolean);for(let _=0;_<m.length;_+=1)I(m[_]);I(n.$$.fragment,u),I(s.$$.fragment,u),c=!1},d(u){u&&g(e),se(m,u),R(n),R(s),h=!1,f()}}}const we=r=>r.key==="search",Te=r=>r.key==="orderBy";function nt(r,e,t){let{filters:n=[]}=e,{filterParams:a=[]}=e;const l=q(),i=()=>l("clearParams"),o=({detail:{searchValue:f}})=>l("filterUpdated",{filterName:"search",selectedValue:f}),s=({detail:{orderBy:f}})=>l("filterUpdated",{filterName:"orderBy",selectedValue:f}),c=(f,d)=>d.key===f.name;function h(f){Ce.call(this,r,f)}return r.$$set=f=>{"filters"in f&&t(0,n=f.filters),"filterParams"in f&&t(1,a=f.filterParams)},[n,a,i,o,s,c,h]}class at extends L{constructor(e){super();F(this,e,nt,rt,Q,{filters:0,filterParams:1})}}function lt(r){let e,t,n;return{c(){e=y("div"),t=y("h1"),n=S("Timeline of AI in Montreal"),this.h()},l(a){e=b(a,"DIV",{class:!0});var l=E(e);t=b(l,"H1",{class:!0});var i=E(t);n=V(i,"Timeline of AI in Montreal"),i.forEach(g),l.forEach(g),this.h()},h(){w(t,"class","font-mono text-4xl text-white"),w(e,"class","flex items-center justify-center h-80 min-h-[30%]")},m(a,l){$(a,e,l),v(e,t),v(t,n)},p:N,i:N,o:N,d(a){a&&g(e)}}}class st extends L{constructor(e){super();F(this,e,null,lt,Q,{})}}function ke(r){let e,t,n,a,l=r[0].theme+"",i;return{c(){e=y("div"),t=y("div"),n=U(),a=y("p"),i=S(l),this.h()},l(o){e=b(o,"DIV",{class:!0});var s=E(e);t=b(s,"DIV",{class:!0}),E(t).forEach(g),s.forEach(g),n=D(o),a=b(o,"P",{class:!0});var c=E(a);i=V(c,l),c.forEach(g),this.h()},h(){w(t,"class","flex-grow border-t border-gray-400 mt-7"),w(e,"class","flex"),w(a,"class","italic")},m(o,s){$(o,e,s),v(e,t),$(o,n,s),$(o,a,s),v(a,i)},p(o,s){s&1&&l!==(l=o[0].theme+"")&&W(i,l)},d(o){o&&g(e),o&&g(n),o&&g(a)}}}function it(r){let e,t,n,a,l,i,o=r[0].headline+"",s,c,h,f=r[0].text+"",d,m,B,A,p=r[0].theme&&ke(r);return{c(){e=y("div"),t=y("p"),n=S(r[1]),a=U(),l=y("h3"),i=y("button"),s=S(o),c=U(),h=y("p"),d=S(f),m=U(),p&&p.c(),this.h()},l(u){e=b(u,"DIV",{class:!0});var _=E(e);t=b(_,"P",{class:!0});var P=E(t);n=V(P,r[1]),P.forEach(g),a=D(_),l=b(_,"H3",{id:!0,class:!0});var C=E(l);i=b(C,"BUTTON",{class:!0});var z=E(i);s=V(z,o),z.forEach(g),C.forEach(g),c=D(_),h=b(_,"P",{});var K=E(h);d=V(K,f),K.forEach(g),m=D(_),p&&p.l(_),_.forEach(g),this.h()},h(){w(t,"class","mb-2 text-sm"),w(i,"class","text-left hover:text-sky-500"),w(l,"id",r[3]),w(l,"class","mb-3 text-xl"),w(e,"class","p-10 sm:mb-2 xl:-mt-4 text-white border-2 border-neutral-700 xl:min-w-[35%] xl:max-w-[35%] "+r[2]+" bg-neutral-800")},m(u,_){$(u,e,_),v(e,t),v(t,n),v(e,a),v(e,l),v(l,i),v(i,s),v(e,c),v(e,h),v(h,d),v(e,m),p&&p.m(e,null),B||(A=O(i,"click",He(r[4])),B=!0)},p(u,[_]){_&2&&W(n,u[1]),_&1&&o!==(o=u[0].headline+"")&&W(s,o),_&1&&f!==(f=u[0].text+"")&&W(d,f),u[0].theme?p?p.p(u,_):(p=ke(u),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},i:N,o:N,d(u){u&&g(e),p&&p.d(),B=!1,A()}}}function ot(r,e,t){let n,a,{entry:l={month:0,year:0,headline:"",text:"",theme:"",type:"",endYear:0}}=e,{index:i=0}=e;const o={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},s=i%2===0?"lg:ml-[38%]":"lg:mr-[38%]",c=l.headline.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/g,"-"),h=q(),f=()=>h("idSelected",{id:c});return r.$$set=d=>{"entry"in d&&t(0,l=d.entry),"index"in d&&t(5,i=d.index)},r.$$.update=()=>{r.$$.dirty&1&&t(6,n=o[l.month]?o[l.month]+", ":""),r.$$.dirty&65&&t(1,a=`${l.day} ${n} ${l.year}`)},[l,a,s,c,f,i,n]}class ct extends L{constructor(e){super();F(this,e,ot,it,Q,{entry:0,index:5})}}function Pe(r,e,t){const n=r.slice();return n[4]=e[t],n[6]=t,n}function $e(r){let e,t;return e=new ct({props:{entry:r[4],index:r[6]}}),e.$on("idSelected",r[2]),{c(){H(e.$$.fragment)},l(n){Y(e.$$.fragment,n)},m(n,a){x(e,n,a),t=!0},p(n,a){const l={};a&1&&(l.entry=n[4]),e.$set(l)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function ut(r){let e,t,n=r[0],a=[];for(let i=0;i<n.length;i+=1)a[i]=$e(Pe(r,n,i));const l=i=>I(a[i],1,1,()=>{a[i]=null});return{c(){e=y("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=b(i,"DIV",{class:!0});var o=E(e);for(let s=0;s<a.length;s+=1)a[s].l(o);o.forEach(g),this.h()},h(){w(e,"class","flex flex-col items-center flex-grow px-5")},m(i,o){$(i,e,o);for(let s=0;s<a.length;s+=1)a[s].m(e,null);t=!0},p(i,[o]){if(o&1){n=i[0];let s;for(s=0;s<n.length;s+=1){const c=Pe(i,n,s);a[s]?(a[s].p(c,o),k(a[s],1)):(a[s]=$e(c),a[s].c(),k(a[s],1),a[s].m(e,null))}for(Ne(),s=n.length;s<a.length;s+=1)l(s);Be()}},i(i){if(!t){for(let o=0;o<n.length;o+=1)k(a[o]);t=!0}},o(i){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)I(a[o]);t=!1},d(i){i&&g(e),se(a,i)}}}function ft(r,e,t){let{entries:n=[]}=e,{selectedEntryId:a}=e;const l=()=>{if(a){const o=document.getElementById(a);o&&o.scrollIntoView({behavior:"smooth"})}};Ye(()=>{l()});function i(o){Ce.call(this,r,o)}return r.$$set=o=>{"entries"in o&&t(0,n=o.entries),"selectedEntryId"in o&&t(1,a=o.selectedEntryId)},[n,a,i]}class ht extends L{constructor(e){super();F(this,e,ft,ut,Q,{entries:0,selectedEntryId:1})}}class Ie{constructor(e,t){this.name=e,this.values=t}}var ee,mt,te,_t,re,pt,ne,gt,ae,vt,Z;class dt{constructor(e){M(this,ee);M(this,te);M(this,re);M(this,ne);M(this,ae);M(this,Z,void 0);_e(this,Z,(t,n)=>n.sort((a,l)=>t==="asc"?new Date(a.year,a.month,a.day).getTime()-new Date(l.year,l.month,l.day).getTime():new Date(l.year,l.month,l.day).getTime()-new Date(a.year,a.month,a.day).getTime())),this.data=e.map(J(this,ee,mt))}get eras(){return this.data.filter(e=>e.type==="era")}get themes(){return[...new Set(this.data.filter(e=>e.theme!==void 0).map(e=>e.theme.split(",").map(t=>t.trim())).flat().filter(e=>e!=="").map(e=>`${e.charAt(0).toUpperCase()}${e.slice(1).toLowerCase()}`))]}get entries(){return this.data.filter(e=>e.type===void 0||e.type==="")}filterEntries(e){var a;let t=[...this.entries];t=J(this,te,_t).call(this,e,t);const n=(a=e.find(l=>l.key==="orderBy"))==null?void 0:a.value;return n&&me(this,Z).call(this,n,t),t}}ee=new WeakSet,mt=function(e){return de(he({},e),{day:e.Day&&Number(e.Day),month:e.Month&&Number(e.Month),year:Number(e.Year),headline:e.Headline,text:e.Text||"",theme:e.Group,type:e.Type,endYear:Number(e["End Year"])})},te=new WeakSet,_t=function(e,t){return e.forEach(n=>{switch(n.key){case"era":t=J(this,re,pt).call(this,n.value,t);break;case"theme":t=J(this,ne,gt).call(this,n.value,t);break;case"search":t=J(this,ae,vt).call(this,n.value,t);break}}),t},re=new WeakSet,pt=function(e,t){if(!e)return t;const n=this.eras.find(a=>a.headline===e);if(!n)throw new Error(`Invalid era passed to filter: ${e}`);return t.filter(a=>Number(a.year)>=Number(n.year)&&Number(a.year)<=Number(n.endYear))},ne=new WeakSet,gt=function(e,t){return e?t.filter(n=>n.theme===e):t},ae=new WeakSet,vt=function(e,t){return e?t.filter(n=>{var a,l;return((a=n.headline)==null?void 0:a.toLowerCase().includes(e.toLowerCase()))||((l=n.text)==null?void 0:l.toLowerCase().includes(e.toLowerCase()))}):t},Z=new WeakMap;var yt=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},bt=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Et=(r,e,t)=>(yt(r,e,"access private method"),t),oe,Ue;const De=class{};let G=De;oe=new WeakSet;Ue=function([r,e]){return{key:r,value:e}};bt(G,oe);G.getQueryParams=r=>r.map(Et(De,oe,Ue));G.getQueryParam=(r,e)=>{var t;return(t=e.find(([n])=>n===r))==null?void 0:t[1]};function wt(r){let e,t,n,a,l,i,o;return t=new st({}),a=new at({props:{filters:r[6],filterParams:r[0]}}),a.$on("filterUpdated",r[3]),a.$on("clearParams",r[4]),i=new ht({props:{entries:r[1],selectedEntryId:r[2]}}),i.$on("idSelected",r[5]),{c(){e=y("div"),H(t.$$.fragment),n=U(),H(a.$$.fragment),l=U(),H(i.$$.fragment),this.h()},l(s){e=b(s,"DIV",{class:!0});var c=E(e);Y(t.$$.fragment,c),n=D(c),Y(a.$$.fragment,c),l=D(c),Y(i.$$.fragment,c),c.forEach(g),this.h()},h(){w(e,"class","flex flex-col items-center min-h-screen bg-zinc-900")},m(s,c){$(s,e,c),x(t,e,null),v(e,n),x(a,e,null),v(e,l),x(i,e,null),o=!0},p(s,[c]){const h={};c&1&&(h.filterParams=s[0]),a.$set(h);const f={};c&2&&(f.entries=s[1]),c&4&&(f.selectedEntryId=s[2]),i.$set(f)},i(s){o||(k(t.$$.fragment,s),k(a.$$.fragment,s),k(i.$$.fragment,s),o=!0)},o(s){I(t.$$.fragment,s),I(a.$$.fragment,s),I(i.$$.fragment,s),o=!1},d(s){s&&g(e),R(t),R(a),R(i)}}}const It=!1;async function St({fetch:r}){return{props:{rawTimelineData:await Re(r)}}}function Tt(r,e,t){let n;xe(r,Je,p=>t(8,n=p));let{rawTimelineData:a}=e;const l=new dt(a),i=()=>G.getQueryParams(Array.from(n.url.searchParams.entries())),o=({detail:{filterName:p,selectedValue:u}})=>{n.url.searchParams.set(p,u),ge(n.url.href),t(0,m=i()),t(1,B=l.filterEntries(m))},s=()=>{Array.from(n.url.searchParams.keys()).forEach(p=>n.url.searchParams.delete(p)),ge(n.url.href),t(0,m=[]),t(1,B=[...l.entries])},c=({detail:{id:p}})=>{n.url.searchParams.set("id",p),t(2,A=p),window.location.href=n.url.href},h=new Ie("era",l.eras.map(p=>p.headline)),f=new Ie("theme",l.themes),d=[h,f];let m=i(),B=l.filterEntries(m),A=G.getQueryParam("id",Array.from(n.url.searchParams.entries()));return r.$$set=p=>{"rawTimelineData"in p&&t(7,a=p.rawTimelineData)},[m,B,A,o,s,c,d,a]}class Vt extends L{constructor(e){super();F(this,e,Tt,wt,Q,{rawTimelineData:7})}}export{Vt as default,St as load,It as prerender};