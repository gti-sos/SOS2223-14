function $(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(P)}function T(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function I(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t,n,e){t.$$.on_destroy.push(I(n,e))}function ut(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(n.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=n.dirty[l]|r[l];return u}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,u){if(r){const s=B(n,e,i,u);t.p(s,r)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function ht(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let w=!1;function G(){w=!0}function J(){w=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:K(1,r,x=>n[e[x]].claim_order,o))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const u=[],s=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);l>=c;l--)s.push(n[l]);l--}for(;l>=0;l--)s.push(n[l]);u.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<u.length&&s[c].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(s[c],a)}}function R(t,n){if(w){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){w&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function yt(){return N(" ")}function gt(){return N("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function W(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function bt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:W(t,i,n[i])}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,i,r=!1){Y(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Z(t,n,e,i){return L(t,r=>r.nodeName===n,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];e[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(n))}function $t(t,n,e){return Z(t,n,e,V)}function tt(t,n){return L(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function wt(t){return tt(t," ")}function Et(t,n){n=""+n,t.data!==n&&(t.data=n)}function vt(t,n){t.value=n??""}function kt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Nt(t,n){return new t(n)}let y;function p(t){y=t}function A(){if(!y)throw new Error("Function called outside component initialization");return y}function At(t){A().$$.on_mount.push(t)}function St(t){A().$$.after_update.push(t)}function jt(t,n){return A().$$.context.set(t,n),n}function Ct(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],O=[];let m=[];const M=[],D=Promise.resolve();let v=!1;function q(){v||(v=!0,D.then(z))}function Ot(){return q(),D}function k(t){m.push(t)}const E=new Set;let d=0;function z(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const n=h[d];d++,p(n),nt(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;O.length;)O.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];E.has(e)||(E.add(e),e())}m.length=0}while(h.length);for(;M.length;)M.pop()();v=!1,E.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}function et(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const b=new Set;let _;function Mt(){_={r:0,c:[],p:_}}function Pt(){_.r||g(_.c),_=_.p}function it(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Tt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Bt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],l=n[u];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[u]=l}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function Lt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(n,e),i||k(()=>{const s=t.$$.on_mount.map(P).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),u.forEach(k)}function ct(t,n){const e=t.$$;e.fragment!==null&&(et(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){t.$$.dirty[0]===-1&&(h.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function qt(t,n,e,i,r,u,s,l=[-1]){const c=y;p(t);const o=t.$$={fragment:null,ctx:[],props:u,update:$,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};s&&s(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,x,...S)=>{const j=S.length?S[0]:x;return o.ctx&&r(o.ctx[f],o.ctx[f]=j)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](j),a&&st(t,f)),x}):[],o.update(),a=!0,g(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){G();const f=X(n.target);o.fragment&&o.fragment.l(f),f.forEach(U)}else o.fragment&&o.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),J(),z()}p(c)}class zt{$destroy(){ct(this,1),this.$destroy=$}$on(n,e){if(!T(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{rt as A,ct as B,R as C,$ as D,ut as E,at as F,_t as G,ft as H,ot as I,ht as J,F as K,dt as L,Ct as M,bt as N,xt as O,Bt as P,jt as Q,pt as R,zt as S,vt as T,g as U,T as V,yt as a,mt as b,wt as c,Tt as d,gt as e,Pt as f,it as g,U as h,qt as i,St as j,V as k,$t as l,X as m,W as n,At as o,kt as p,N as q,tt as r,lt as s,Ot as t,Et as u,Mt as v,O as w,Nt as x,Lt as y,Dt as z};
