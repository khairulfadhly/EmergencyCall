/*! For license information please see 22.184d942c.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkEmergency3=globalThis.webpackChunkEmergency3||[]).push([[22],{5022:(e,t,n)=>{n.r(t),n.d(t,{createSwipeBackGesture:()=>i});var r=n(1811),a=n(9507),c=n(7909);const i=(e,t,n,i,o)=>{const s=e.ownerDocument.defaultView;let l=(0,a.i)(e);const h=e=>l?-e.deltaX:e.deltaX;return(0,c.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:n=>(l=(0,a.i)(e),(e=>{const{startX:t}=e;return l?t>=s.innerWidth-50:t<=50})(n)&&t()),onStart:n,onMove:e=>{const t=h(e)/s.innerWidth;i(t)},onEnd:e=>{const t=h(e),n=s.innerWidth,a=t/n,c=(e=>l?-e.velocityX:e.velocityX)(e),i=c>=0&&(c>.2||t>n/2),u=(i?1-a:a)*n;let d=0;if(u>5){const e=u/Math.abs(c);d=Math.min(e,540)}o(i,a<=0?.01:(0,r.m)(0,a,.9999),d)}})}}}]);
//# sourceMappingURL=22.184d942c.chunk.js.map