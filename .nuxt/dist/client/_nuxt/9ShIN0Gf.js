function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./CDCxQ1Kt.js","./f-CWrbGl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as v,o as g,c as b,A as P,B as S,u as x,a as e,b as m,d as T,v as O,w as y,F as q,y as V,C as A}from"./f-CWrbGl.js";import M from"./CDCxQ1Kt.js";import{_ as B}from"./C_k0Qpn3.js";import{g as h,n as F,S as N,a as W,b as j}from"./BmUN1mjs.js";function D({swiper:a,extendParams:f,on:d,emit:n}){let o;a.autoplay={running:!1,paused:!1},f({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function l(){if(!a.size){a.autoplay.running=!1,a.autoplay.paused=!1;return}const t=a.slides.eq(a.activeIndex);let r=a.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(r=t.attr("data-swiper-autoplay")||a.params.autoplay.delay),clearTimeout(o),o=F(()=>{let i;a.params.autoplay.reverseDirection?a.params.loop?(a.loopFix(),i=a.slidePrev(a.params.speed,!0,!0),n("autoplay")):a.isBeginning?a.params.autoplay.stopOnLastSlide?s():(i=a.slideTo(a.slides.length-1,a.params.speed,!0,!0),n("autoplay")):(i=a.slidePrev(a.params.speed,!0,!0),n("autoplay")):a.params.loop?(a.loopFix(),i=a.slideNext(a.params.speed,!0,!0),n("autoplay")):a.isEnd?a.params.autoplay.stopOnLastSlide?s():(i=a.slideTo(0,a.params.speed,!0,!0),n("autoplay")):(i=a.slideNext(a.params.speed,!0,!0),n("autoplay")),(a.params.cssMode&&a.autoplay.running||i===!1)&&l()},r)}function c(){return typeof o<"u"||a.autoplay.running?!1:(a.autoplay.running=!0,n("autoplayStart"),l(),!0)}function s(){return!a.autoplay.running||typeof o>"u"?!1:(o&&(clearTimeout(o),o=void 0),a.autoplay.running=!1,n("autoplayStop"),!0)}function u(t){a.autoplay.running&&(a.autoplay.paused||(o&&clearTimeout(o),a.autoplay.paused=!0,t===0||!a.params.autoplay.waitForTransition?(a.autoplay.paused=!1,l()):["transitionend","webkitTransitionEnd"].forEach(r=>{a.$wrapperEl[0].addEventListener(r,p)})))}function _(){const t=h();t.visibilityState==="hidden"&&a.autoplay.running&&u(),t.visibilityState==="visible"&&a.autoplay.paused&&(l(),a.autoplay.paused=!1)}function p(t){!a||a.destroyed||!a.$wrapperEl||t.target===a.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(r=>{a.$wrapperEl[0].removeEventListener(r,p)}),a.autoplay.paused=!1,a.autoplay.running?l():s())}function E(){a.params.autoplay.disableOnInteraction?s():(n("autoplayPause"),u()),["transitionend","webkitTransitionEnd"].forEach(t=>{a.$wrapperEl[0].removeEventListener(t,p)})}function $(){a.params.autoplay.disableOnInteraction||(a.autoplay.paused=!1,n("autoplayResume"),l())}function L(){a.params.autoplay.pauseOnMouseEnter&&(a.$el.on("mouseenter",E),a.$el.on("mouseleave",$))}function I(){a.$el.off("mouseenter",E),a.$el.off("mouseleave",$)}d("init",()=>{a.params.autoplay.enabled&&(c(),h().addEventListener("visibilitychange",_),L())}),d("beforeTransitionStart",(t,r,i)=>{a.autoplay.running&&(i||!a.params.autoplay.disableOnInteraction?a.autoplay.pause(r):s())}),d("sliderFirstMove",()=>{a.autoplay.running&&(a.params.autoplay.disableOnInteraction?s():u())}),d("touchEnd",()=>{a.params.cssMode&&a.autoplay.paused&&!a.params.autoplay.disableOnInteraction&&l()}),d("destroy",()=>{I(),a.autoplay.running&&s(),h().removeEventListener("visibilitychange",_)}),Object.assign(a.autoplay,{pause:u,run:l,start:c,stop:s})}const C={},R={class:"agency-accordion"},Y=P('<div class="accordion" id="accordionExample"><div class="accordion-item card"><h2 class="card-header" id="headingOne"><button class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> What exactly is branding? </button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body"> Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It’s your message and your values. When that happens, remarkable things occur. </div></div></div><div class="accordion-item card"><h2 class="card-header" id="headingTwo"><button class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What’s the branding process like? </button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body"> Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It’s your message and your values. When that happens, remarkable things occur. </div></div></div><div class="accordion-item card"><h2 class="card-header" id="headingThree"><button class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> What type of creative services do you offer? </button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body"> Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It’s your message and your values. When that happens, remarkable things occur. </div></div></div></div>',1),z=[Y];function U(a,f){return g(),b("div",R,z)}const k=v(C,[["render",U]]),G=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),H=S("/images/faq/faq-2.jpg"),J=S("/images/faq/faq-1.jpg"),K={components:{AccordionStyleOne:()=>x(()=>Promise.resolve().then(()=>G),void 0,import.meta.url),ShapeWithAnimation:()=>x(()=>import("./CDCxQ1Kt.js"),__vite__mapDeps([0,1]),import.meta.url)}},Q={class:"faq-section section-padding-top overflow-hidden",style:{backgroundColor:"#f8faff"}},X={class:"container"},Z={class:"row row-cols-lg-2 row-cols-1"},w={class:"col mb-30"},aa={class:"faq-content"},ea=e("div",{class:"section-title-two"},[e("span",{class:"sub-title"},"Frequently asked questions"),e("h3",{class:"title"},[T("You’ve got questions and "),e("br"),T(" we’ve got answers")])],-1),ta={class:"col pl-xl-12"},oa={class:"about-image-area faq-image-area"},na=e("div",{class:"about-image right-n50 js-tilt"},[e("img",{src:H,alt:"image"})],-1),sa=e("div",{class:"about-image js-tilt"},[e("img",{src:J,alt:"image"})],-1);function la(a,f,d,n,o,l){const c=k,s=M;return g(),b("div",Q,[e("div",X,[e("div",Z,[e("div",w,[e("div",aa,[ea,m(c)])]),e("div",ta,[e("div",oa,[na,sa,m(s,{addClassName:"shape-1","data-depth":"4",imgSrc:"/images/shape-animation/video-shape-1.png"})])])])])])}const Ea=v(K,[["render",la]]),ia=[{id:1,logo:"/images/brand/client-logo-01.png",alt:"brand logo"},{id:2,logo:"/images/brand/client-logo-02.png",alt:"brand logo"},{id:3,logo:"/images/brand/client-logo-03.png",alt:"brand logo"},{id:4,logo:"/images/brand/client-logo-04.png",alt:"brand logo"},{id:5,logo:"/images/brand/client-logo-05.png",alt:"brand logo"},{id:6,logo:"/images/brand/client-logo-06.png",alt:"brand logo"},{id:7,logo:"/images/brand/client-logo-06.png",alt:"brand logo"}];N.use([D]);const ra={components:{Swiper:W,SwiperSlide:j},data(){return{brandData:ia,swiperOptions:{breakpoints:{992:{slidesPerView:6},768:{slidesPerView:4},576:{slidesPerView:3},320:{slidesPerView:2}}}}}},da={class:"brand-section section-padding"},ca={class:"container"},ua={class:"row"},pa={class:"col-lg-12"},ga={class:"brand-wrapper"},fa={class:"brand-list"},_a=["src"];function ba(a,f,d,n,o,l){const c=B,s=O("swiper-slide"),u=O("swiper");return g(),b("div",da,[e("div",ca,[e("div",ua,[e("div",pa,[e("div",ga,[e("div",fa,[m(u,{"space-between":30,speed:1e3,loop:!1,autoplay:{delay:3e3},breakpoints:o.swiperOptions.breakpoints},{default:y(()=>[(g(!0),b(q,null,V(o.brandData,(_,p)=>(g(),A(s,{class:"brand",key:p},{default:y(()=>[m(c,{to:""},{default:y(()=>[e("img",{src:_.logo,alt:"brand.alt"},null,8,_a)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["breakpoints"])])])])])])])}const $a=v(ra,[["render",ba]]);export{Ea as _,$a as a};
