function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./CDCxQ1Kt.js","./f-CWrbGl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as v,a as x,b as y,c as w}from"./HzeniwNZ.js";import{_ as S}from"./CJH0iyTE.js";import{n as k,r as $,q as N,s as T,c as _,_ as g,u as A,v as d,o as m,a as n,b as e,w as u,x as C,d as O,F as B,y as F,z as V}from"./f-CWrbGl.js";import z from"./CDCxQ1Kt.js";import{_ as L}from"./CTfhs85d.js";import{_ as P}from"./C_k0Qpn3.js";import"./BmUN1mjs.js";const j=Symbol.for("nuxt:client-only"),D=k({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(p,{slots:t,attrs:l}){const i=$(!1);return N(()=>{i.value=!0}),T(j,!0),o=>{var c;if(i.value)return(c=t.default)==null?void 0:c.call(t);const r=t.fallback||t.placeholder;if(r)return r();const s=o.fallback||o.placeholder||"",a=o.fallbackTag||o.placeholderTag||"span";return _(a,l,s)}}}),E={components:{ShapeWithAnimation:()=>A(()=>import("./CDCxQ1Kt.js"),__vite__mapDeps([0,1]),import.meta.url)},data(){return{videos:[{src:"https://www.youtube.com/watch?v=eS9Qm4AOOBY"}]}}},M={class:"container text-center"},U=n("div",{class:"section-title color-light text-center","data-aos":"fade-up"},[n("h2",{class:"title"},"A full-service creative agency since 2007")],-1),W=n("div",{class:"play-btn icon video-popup"},[n("i",{class:"fas fa-play"})],-1);function I(p,t,l,i,o,r){const s=d("silent-box"),a=D,c=z;return m(),_("div",{class:"video-section section-padding overflow-hidden",style:C({backgroundImage:"url('/images/bg/video-bg.jpg')"})},[n("div",M,[U,e(a,null,{default:u(()=>[e(s,{image:o.videos[0]},{"silentbox-item":u(()=>[W]),_:1},8,["image"])]),_:1})]),e(c,{addClassName:"shape-1","data-depth":"1",imgSrc:"/images/shape-animation/newsletter-shape.png"})],4)}const Y=g(E,[["render",I]]),q={data(){return{shapeData:[{imgSrc:"/images/icon-animation/icon-1.png",className:"shape-1"},{imgSrc:"/images/icon-animation/icon-2.png",className:"shape-2"},{imgSrc:"/images/icon-animation/icon-3.png",className:"shape-3"},{imgSrc:"/images/icon-animation/icon-4.png",className:"shape-4"},{imgSrc:"/images/icon-animation/icon-5.png",className:"shape-5"},{imgSrc:"/images/icon-animation/icon-6.png",className:"shape-6"},{imgSrc:"/images/icon-animation/icon-7.png",className:"shape-7"},{imgSrc:"/images/icon-animation/icon-8.png",className:"shape-8"},{imgSrc:"/images/icon-animation/icon-9.png",className:"shape-9"}]}}},H={class:"cta-section section-padding-250 overflow-hidden"},Q={class:"container text-center icon-up-down-animation"},R=n("div",{class:"section-title text-center","data-aos":"fade-up"},[n("h2",{class:"title fz-34"},"Let's talk about your project and see how we can work together"),n("p",{class:"sub-title"},"Our team of designers, developers and creatives are perfectionists who love what they do and love where they work")],-1),G=["src"];function J(p,t,l,i,o,r){const s=P;return m(),_("div",H,[n("div",Q,[R,e(s,{to:"/contact-us",class:"btn btn-primary btn-hover-secondary"},{default:u(()=>[O("Contact Us")]),_:1}),(m(!0),_(B,null,F(o.shapeData,(a,c)=>(m(),_("div",{class:V(["shape",a.className]),key:c},[n("span",null,[n("img",{src:a.imgSrc,alt:"icon"},null,8,G)])],2))),128))])])}const K=g(q,[["render",J]]),X={},Z={class:"main-container"};function ee(p,t){const l=v,i=x,o=y,r=S,s=d("AboutTwo"),a=Y,c=d("AboutFour"),h=L,f=K,b=w;return m(),_("div",Z,[e(l),e(i),e(o),e(r,{activePageName:"About Us",title:"We are an agency located in New York",backgroundUrl:"/images/bg/breadcrumb-bg.jpg"}),e(s,{class:"section-padding-top about-section-padding-bottom-200"}),e(a),e(c),e(h,{style:{backgroundColor:"#f8faff"}}),e(f),e(b)])}const re=g(X,[["render",ee]]);export{re as default};
