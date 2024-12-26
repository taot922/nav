import{a as G}from"./chunk-CVKO2HU7.js";import{a as R,b as j}from"./chunk-FN66WJRC.js";import{a as J}from"./chunk-XHFNFOFH.js";import{a as $,b as D}from"./chunk-QC4XKIWE.js";import"./chunk-3TVAYHGL.js";import{Lb as W,Mb as F,Tb as H,cb as T,fb as O,pb as L,zb as q}from"./chunk-OFAYNRN3.js";import{Dd as P,Hb as u,Jb as d,Lb as S,Vd as B,Xb as m,Yb as c,Yd as A,Zb as _,ec as y,f as I,g as f,gc as k,gd as z,lb as s,mb as g,od as M,pc as p,qc as x,rc as h,tb as v,tc as C,vc as E,wc as w,xc as N}from"./chunk-E4T4OV4D.js";var U=I(G());var V=I(q());function K(a,n){a&1&&_(0,"nz-spin",10)}function Q(a,n){if(a&1&&(m(0,"p",11),p(1),c()),a&2){let o=k();s(),h("\u8017\u65F6 ",o.seconds," \u79D2")}}function X(a,n){if(a&1&&(m(0,"p",11),p(1),c()),a&2){let o=k();s(),C(" ",o.$t("_processing")," ",o.currentNumber," / ",o.countAll," ")}}var b=class a{constructor(n,o){this.message=n;this.notification=o}$t=A;submitting=!1;websiteList=B;isExportIcon=!1;seconds=0;currentNumber=0;countAll=0;ngOnInit(){}loadImage(n){return new Promise(o=>{if(!n)return o(null);let e=new Image;e.crossOrigin="Anonymous",e.onload=function(){o(e)},e.onerror=function(){o(null)},e.src=n})}imageToBase64(n,o=!0){return f(this,null,function*(){let e=yield this.loadImage(n.icon);if(e)try{let i=document.createElement("canvas");i.width=32,i.height=32,i.getContext("2d").drawImage(e,0,0,32,32);let t=i.toDataURL();return n.icon=t,t}catch{}else{if(!o)return;try{if(!n.icon)return;let r=yield F({url:n.icon});r.data.base64&&(n.icon=r.data.base64,yield this.imageToBase64(n,!1))}catch(r){let i=document.getElementById("error-msg");if(i){let l=`
          <a href="${n.icon}" target="_blank">${n.name} ${n.icon}</a>
          <div>${r.response?.data?.message||r.message}</div>
        `;i.innerHTML=l+i.innerHTML}}}})}bookmarksExport(){return f(this,null,function*(){if(!P())return this.notification.error("Error","\u8BF7\u6388\u6743");if(this.submitting)return;let n=this;this.seconds=0,this.countAll=0,this.currentNumber=0,this.submitting=!0;let o=setInterval(()=>{this.seconds+=1},1e3),e=JSON.parse(JSON.stringify(this.websiteList)),r=[];function i(l){Array.isArray(l)&&l.forEach(t=>{delete t.id,delete t.createdAt,delete t.rate,delete t.top,delete t.topTypes,delete t.index,delete t.ownVisible,delete t.breadcrumb,delete t.ok,delete t.__name__,delete t.__desc__,delete t.collapsed,delete t.tags,Array.isArray(t.nav)&&i(t.nav),t.url&&r.push(n.imageToBase64(t).finally(()=>{n.currentNumber+=1}))})}this.isExportIcon&&(i(e),this.countAll=r.length,yield Promise.allSettled(r)),W({data:V.default.compress(JSON.stringify(e))}).then(l=>{let t="\u53D1\u73B0\u5BFC\u822A\u4E66\u7B7E.html",Z=new Blob([l.data.data],{type:"text/html;charset=utf-8"});(0,U.saveAs)(Z,t),this.notification.success("\u5BFC\u51FA\u6210\u529F",t,{nzDuration:0})}).finally(()=>{this.submitting=!1,clearInterval(o)})})}static \u0275fac=function(o){return new(o||a)(g(H),g(J))};static \u0275cmp=v({type:a,selectors:[["system-bookmark-export"]],decls:16,vars:9,consts:[["nzSimple","","nzSize","large","class","text-center",4,"ngIf"],[1,"text-center"],[3,"ngModelChange","ngModel"],[1,"ml-2.5"],["class","mt-2.5",4,"ngIf"],[1,"book-wrapper","mt-2.5"],["src","assets/img/bookmark.svg","draggable","false",1,"logo",3,"click"],[1,"whitespace-nowrap","mt-2.5",3,"click"],[1,"err"],["id","error-msg"],["nzSimple","","nzSize","large",1,"text-center"],[1,"mt-2.5"]],template:function(o,e){o&1&&(u(0,K,1,0,"nz-spin",0),m(1,"div",1)(2,"nz-switch",2),N("ngModelChange",function(i){return w(e.isExportIcon,i)||(e.isExportIcon=i),i}),c(),m(3,"span",3),p(4),c(),u(5,Q,2,1,"p",4)(6,X,2,3,"p",4),c(),m(7,"div",5)(8,"div")(9,"img",6),y("click",function(){return e.bookmarksExport()}),c(),m(10,"p",7),y("click",function(){return e.bookmarksExport()}),p(11),c()()(),m(12,"div",8)(13,"h2"),p(14),c(),_(15,"pre",9),c()),o&2&&(d("ngIf",e.submitting),s(2),E("ngModel",e.isExportIcon),s(2),x(e.$t("_exportIcons")),s(),d("ngIf",e.seconds>0),s(),d("ngIf",e.countAll>0),s(5),h(" ",e.$t("_clickExport")," "),s(),S("noopacity",e.countAll>0),s(2),x(e.$t("_errorIcons")))},dependencies:[M,z,j,R,D,$,L,T,O],styles:[".book-wrapper[_ngcontent-%COMP%]{text-align:center}.book-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%], .book-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{cursor:pointer}#error-msg[_ngcontent-%COMP%]{white-space:pre-line;background-color:#f2f2f2;border-radius:8px;padding:0 12px}.err[_ngcontent-%COMP%]{opacity:0}.err.noopacity[_ngcontent-%COMP%]{opacity:1}"]})};export{b as default};
