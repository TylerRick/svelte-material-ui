import{S as Z,i as y,s as w,O as R,C as S,e as W,k as x,c as A,a as C,m as $,d as U,a4 as M,g as ee,M as L,a5 as G,G as k,P as q,Q as B,R as D,z as H,a6 as P,q as z,o as K,a7 as le,a8 as N,a9 as te,r as ae,v as ne,aS as se,af as ie,K as O}from"./vendor-b0fbb6dc.js";import{c as Q,u as V,f as ue}from"./useActions-1e96d5fc.js";import{p as j,e as J}from"./prefixFilter-0866cfc5.js";const oe=a=>({}),T=a=>({});function re(a){let l,s,o,m,p,g,r,h,E;const I=a[13].default,i=R(I,a,a[12],null),b=a[13].label,u=R(b,a,a[12],T);let c=[{for:a[4]},j(a[10],"label$")],_={};for(let e=0;e<c.length;e+=1)_=S(_,c[e]);let d=[{class:p=Q({[a[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":a[2]==="end","mdc-form-field--nowrap":a[3]})},J(a[10],["label$"])],f={};for(let e=0;e<d.length;e+=1)f=S(f,d[e]);return{c(){l=W("div"),i&&i.c(),s=x(),o=W("label"),u&&u.c(),this.h()},l(e){l=A(e,"DIV",{class:!0});var n=C(l);i&&i.l(n),s=$(n),o=A(n,"LABEL",{for:!0});var v=C(o);u&&u.l(v),v.forEach(U),n.forEach(U),this.h()},h(){M(o,_),M(l,f)},m(e,n){ee(e,l,n),i&&i.m(l,null),L(l,s),L(l,o),u&&u.m(o,null),a[14](o),a[15](l),r=!0,h||(E=[G(m=V.call(null,o,a[5])),G(g=V.call(null,l,a[0])),G(a[9].call(null,l)),k(l,"SMUIGenericInput:mount",a[16]),k(l,"SMUIGenericInput:unmount",a[17])],h=!0)},p(e,[n]){i&&i.p&&(!r||n&4096)&&q(i,I,e,e[12],r?D(I,e[12],n,null):B(e[12]),null),u&&u.p&&(!r||n&4096)&&q(u,b,e,e[12],r?D(b,e[12],n,oe):B(e[12]),T),M(o,_=H(c,[(!r||n&16)&&{for:e[4]},n&1024&&j(e[10],"label$")])),m&&P(m.update)&&n&32&&m.update.call(null,e[5]),M(l,f=H(d,[(!r||n&14&&p!==(p=Q({[e[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":e[2]==="end","mdc-form-field--nowrap":e[3]})))&&{class:p},n&1024&&J(e[10],["label$"])])),g&&P(g.update)&&n&1&&g.update.call(null,e[0])},i(e){r||(z(i,e),z(u,e),r=!0)},o(e){K(i,e),K(u,e),r=!1},d(e){e&&U(l),i&&i.d(e),u&&u.d(e),a[14](null),a[15](null),h=!1,le(E)}}}let fe=0;function de(a,l,s){const o=["use","class","align","noWrap","inputId","label$use","getElement"];let m=N(l,o),{$$slots:p={},$$scope:g}=l;const r=ue(te());let{use:h=[]}=l,{class:E=""}=l,{align:I="start"}=l,{noWrap:i=!1}=l,{inputId:b="SMUI-form-field-"+fe++}=l,{label$use:u=[]}=l,c,_,d,f;ae("SMUI:generic:input:props",{id:b}),ne(()=>(_=new se({activateInputRipple:()=>{f&&f.activateRipple()},deactivateInputRipple:()=>{f&&f.deactivateRipple()},deregisterInteractionHandler:(t,F)=>{d.removeEventListener(t,F)},registerInteractionHandler:(t,F)=>{d.addEventListener(t,F)}}),_.init(),()=>{_.destroy()}));function e(){return c}function n(t){O[t?"unshift":"push"](()=>{d=t,s(7,d)})}function v(t){O[t?"unshift":"push"](()=>{c=t,s(6,c)})}const X=t=>s(8,f=t.detail),Y=()=>s(8,f=void 0);return a.$$set=t=>{l=S(S({},l),ie(t)),s(10,m=N(l,o)),"use"in t&&s(0,h=t.use),"class"in t&&s(1,E=t.class),"align"in t&&s(2,I=t.align),"noWrap"in t&&s(3,i=t.noWrap),"inputId"in t&&s(4,b=t.inputId),"label$use"in t&&s(5,u=t.label$use),"$$scope"in t&&s(12,g=t.$$scope)},[h,E,I,i,b,u,c,d,f,r,m,e,g,p,n,v,X,Y]}class ge extends Z{constructor(l){super();y(this,l,de,re,w,{use:0,class:1,align:2,noWrap:3,inputId:4,label$use:5,getElement:11})}get getElement(){return this.$$.ctx[11]}}export{ge as F};
