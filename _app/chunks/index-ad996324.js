var ge=Object.defineProperty;var j=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var K=(t,e,s)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,A=(t,e)=>{for(var s in e||(e={}))pe.call(e,s)&&K(t,s,e[s]);if(j)for(var s of j(e))we.call(e,s)&&K(t,s,e[s]);return t};import{S as W,i as X,s as Y,O as Z,C as w,e as Se,c as be,a as Ee,d as T,a4 as z,g as x,a5 as G,G as N,P as $,Q as ee,R as se,z as te,a6 as ve,q as C,o as D,a7 as Ce,a8 as k,a9 as ne,r as H,v as De,I as ke,ah as Ie,ai as Fe,af as ae,aj as Me,K as ie,w as Q,l as R,x as Oe,y as V,A as Ue,n as ye,B as J,p as Ae}from"./vendor-b0fbb6dc.js";import{c as I,u as He,f as le,d as L}from"./useActions-1e96d5fc.js";import{c as b,D as F,H as Te,b as Le}from"./Ripple-3d35217e.js";function qe(t){let e,s,o,i,f,g;const l=t[15].default,r=Z(l,t,t[14],null);let m=[{class:s=I(A({[t[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":t[2]==="dismissible","mdc-drawer--modal":t[2]==="modal","smui-drawer__absolute":t[2]==="modal"&&!t[3]},t[6]))},t[8]],_={};for(let n=0;n<m.length;n+=1)_=w(_,m[n]);return{c(){e=Se("aside"),r&&r.c(),this.h()},l(n){e=be(n,"ASIDE",{class:!0});var d=Ee(e);r&&r.l(d),d.forEach(T),this.h()},h(){z(e,_)},m(n,d){x(n,e,d),r&&r.m(e,null),t[16](e),i=!0,f||(g=[G(o=He.call(null,e,t[0])),G(t[7].call(null,e)),N(e,"keydown",t[17]),N(e,"transitionend",t[18])],f=!0)},p(n,[d]){r&&r.p&&(!i||d&16384)&&$(r,l,n,n[14],i?se(l,n[14],d,null):ee(n[14]),null),z(e,_=te(m,[(!i||d&78&&s!==(s=I(A({[n[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":n[2]==="dismissible","mdc-drawer--modal":n[2]==="modal","smui-drawer__absolute":n[2]==="modal"&&!n[3]},n[6]))))&&{class:s},d&256&&n[8]])),o&&ve(o.update)&&d&1&&o.update.call(null,n[0])},i(n){i||(C(r,n),i=!0)},o(n){D(r,n),i=!1},d(n){n&&T(e),r&&r.d(n),t[16](null),f=!1,Ce(g)}}}function Be(t,e,s){const o=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let i=k(e,o),{$$slots:f={},$$scope:g}=e;const{FocusTrap:l}=Me,r=le(ne());let{use:m=[]}=e,{class:_=""}=e,{variant:n=void 0}=e,{open:d=!1}=e,{fixed:S=!0}=e,h,u,c={},E=null,M,p=!1;H("SMUI:list:nav",!0),H("SMUI:list:item:nav",!0),H("SMUI:list:wrapFocus",!0);let O=n;De(()=>{M=new l(h,{skipInitialFocus:!0}),s(4,u=q()),u&&u.init()}),ke(()=>{u&&u.destroy(),p&&p.removeEventListener("SMUIDrawerScrim:click",U)});function q(){var a,y;p&&p.removeEventListener("SMUIDrawerScrim:click",U),n==="modal"&&(p=(y=(a=h.parentNode)===null||a===void 0?void 0:a.querySelector(".mdc-drawer-scrim"))!==null&&y!==void 0?y:!1,p&&p.addEventListener("SMUIDrawerScrim:click",U));const P=n==="dismissible"?Ie:n==="modal"?Fe:void 0;return P?new P({addClass:oe,removeClass:ce,hasClass:re,elementHasClass:(v,he)=>v.classList.contains(he),saveFocus:()=>E=document.activeElement,restoreFocus:()=>{E&&"focus"in E&&h.contains(document.activeElement)&&E.focus()},focusActiveNavigationItem:()=>{const v=h.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");v&&v.focus()},notifyClose:()=>{s(9,d=!1),L(h,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{s(9,d=!0),L(h,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>M.trapFocus(),releaseFocus:()=>M.releaseFocus()}):void 0}function re(a){return a in c?c[a]:B().classList.contains(a)}function oe(a){c[a]||s(6,c[a]=!0,c)}function ce(a){(!(a in c)||c[a])&&s(6,c[a]=!1,c)}function U(){u&&"handleScrimClick"in u&&u.handleScrimClick()}function ue(a){s(9,d=a)}function de(){return d}function B(){return h}function fe(a){ie[a?"unshift":"push"](()=>{h=a,s(5,h)})}const me=a=>u&&u.handleKeydown(a),_e=a=>u&&u.handleTransitionEnd(a);return t.$$set=a=>{e=w(w({},e),ae(a)),s(8,i=k(e,o)),"use"in a&&s(0,m=a.use),"class"in a&&s(1,_=a.class),"variant"in a&&s(2,n=a.variant),"open"in a&&s(9,d=a.open),"fixed"in a&&s(3,S=a.fixed),"$$scope"in a&&s(14,g=a.$$scope)},t.$$.update=()=>{t.$$.dirty&8212&&O!==n&&(s(13,O=n),u&&u.destroy(),s(6,c={}),s(4,u=q()),u&&u.init()),t.$$.dirty&528&&u&&u.isOpen()!==d&&(d?u.open():u.close())},[m,_,n,S,u,h,c,r,i,d,ue,de,B,O,g,f,fe,me,_e]}class Ve extends W{constructor(e){super();X(this,e,Be,qe,Y,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}var Je=b({class:"mdc-drawer-app-content",component:F}),We=b({class:"mdc-drawer__content",component:F}),Xe=b({class:"mdc-drawer__header",component:F}),Ye=b({class:"mdc-drawer__title",component:Te}),Ze=b({class:"mdc-drawer__subtitle",component:Le});function Pe(t){let e;const s=t[8].default,o=Z(s,t,t[11],null);return{c(){o&&o.c()},l(i){o&&o.l(i)},m(i,f){o&&o.m(i,f),e=!0},p(i,f){o&&o.p&&(!e||f&2048)&&$(o,s,i,i[11],e?se(s,i[11],f,null):ee(i[11]),null)},i(i){e||(C(o,i),e=!0)},o(i){D(o,i),e=!1},d(i){o&&o.d(i)}}}function je(t){let e,s,o;const i=[{use:[t[6],...t[0]]},{class:I({[t[1]]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!t[2]})},t[7]];var f=t[3];function g(l){let r={$$slots:{default:[Pe]},$$scope:{ctx:l}};for(let m=0;m<i.length;m+=1)r=w(r,i[m]);return{props:r}}return f&&(e=new f(g(t)),t[9](e),e.$on("click",t[10])),{c(){e&&Q(e.$$.fragment),s=R()},l(l){e&&Oe(e.$$.fragment,l),s=R()},m(l,r){e&&V(e,l,r),x(l,s,r),o=!0},p(l,[r]){const m=r&199?te(i,[r&65&&{use:[l[6],...l[0]]},r&6&&{class:I({[l[1]]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!l[2]})},r&128&&Ue(l[7])]):{};if(r&2048&&(m.$$scope={dirty:r,ctx:l}),f!==(f=l[3])){if(e){ye();const _=e;D(_.$$.fragment,1,0,()=>{J(_,1)}),Ae()}f?(e=new f(g(l)),l[9](e),e.$on("click",l[10]),Q(e.$$.fragment),C(e.$$.fragment,1),V(e,s.parentNode,s)):e=null}else f&&e.$set(m)},i(l){o||(e&&C(e.$$.fragment,l),o=!0)},o(l){e&&D(e.$$.fragment,l),o=!1},d(l){t[9](null),l&&T(s),e&&J(e,l)}}}function Ke(t,e,s){const o=["use","class","fixed","component","getElement"];let i=k(e,o),{$$slots:f={},$$scope:g}=e;const l=le(ne());let{use:r=[]}=e,{class:m=""}=e,{fixed:_=!0}=e,n,{component:d=F}=e;function S(){return n.getElement()}function h(c){ie[c?"unshift":"push"](()=>{n=c,s(5,n)})}const u=c=>L(S(),"SMUIDrawerScrim:click",c);return t.$$set=c=>{e=w(w({},e),ae(c)),s(7,i=k(e,o)),"use"in c&&s(0,r=c.use),"class"in c&&s(1,m=c.class),"fixed"in c&&s(2,_=c.fixed),"component"in c&&s(3,d=c.component),"$$scope"in c&&s(11,g=c.$$scope)},[r,m,_,d,S,n,l,i,f,h,u,g]}class ze extends W{constructor(e){super();X(this,e,Ke,je,Y,{use:0,class:1,fixed:2,component:3,getElement:4})}get getElement(){return this.$$.ctx[4]}}const xe=ze;export{Je as A,We as C,Ve as D,Xe as H,xe as S,Ye as T,Ze as a};
