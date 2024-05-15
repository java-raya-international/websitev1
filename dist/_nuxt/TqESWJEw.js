function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DivJRLfC.js","./kZ-ytLh4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as p,u as k,o as c,c as r,a as t,b as i,w as d,d as g,F as h,y as b,t as v,B as x,z as T,A as S}from"./kZ-ytLh4.js";import{_ as f}from"./BVZKJFdF.js";const w=[{id:1,title:"Metal ingots ",slug:"metal-ingots",text:"Marketplace for metal ingots. ",iconSrc:"/images/svg/frontpage/frontpage-ai.svg",imgSrc:"/images/project/work-details-1.jpg"},{id:2,title:"Premium Rice",slug:"premium-rice",text:"Marketplace for premium rice",iconSrc:"/images/svg/frontpage/frontpage-decentralized.svg",imgSrc:"/images/project/work-details-3.jpg"},{id:3,title:"Carbon Activated",slug:"carbon-active",text:"marketplace for Carbon Activated",iconSrc:"/images/svg/frontpage/frontpage-multidevices.svg",imgSrc:"/images/project/work-details-4.jpg"},{id:4,title:"Indonesia Craft",slug:"indonesia-craft",text:"Marketplace for Indonesia originating hand-made craft.",iconSrc:"/images/svg/frontpage/frontpage-greenproduct.svg",imgSrc:"/images/project/work-details-1.jpg"}],C={props:["addClassName"],components:{SectionTitle:()=>k(()=>import("./DivJRLfC.js"),__vite__mapDeps([0,1]),import.meta.url)},data(){return{productData:w}}},j={class:"site-main-menu"},A={class:"has-children"},D={class:"sub-menu"};function U(a,o,n,m,l,_){const s=f;return c(),r("nav",j,[t("ul",null,[t("li",null,[i(s,{to:"/"},{default:d(()=>[g("Home")]),_:1})]),t("li",A,[i(s,{to:"#"},{default:d(()=>[g("Products")]),_:1}),t("ul",D,[(c(!0),r(h,null,b(l.productData.slice(0,6),(e,u)=>(c(),r("li",{key:u},[i(s,{to:`/products/${e.slug}`,class:"link"},{default:d(()=>[g(v(e.title),1)]),_:2},1032,["to"])]))),128))])]),t("li",null,[i(s,{to:"/about/company"},{default:d(()=>[g("About")]),_:1})])])])}const L=p(C,[["render",U]]),M=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),$=x("/images/logo/logo.png"),E={components:{Navigation:()=>k(()=>Promise.resolve().then(()=>M),void 0,import.meta.url)},data(){return{isSticky:!1}},mounted(){window.addEventListener("scroll",()=>{window.scrollY>=200?this.isSticky=!0:this.isSticky=!1})},methods:{mobiletoggleClass(a,o){const n=document.querySelector("#offcanvas-menu");a==="addClass"?n.classList.add(o):n.classList.remove(o)},toggleClass(a,o){const n=document.querySelector("#search-popup");a==="addClass"?n.classList.add(o):n.classList.remove(o)}}},P={class:"header-inner"},N={class:"container position-relative"},O={class:"row justify-content-between align-items-center"},R={class:"col-xl-2 col-auto order-0"},z={class:"header-logo"},V=t("img",{style:{opacity:"0.5"},class:"dark-logo",src:$,alt:"Agency Logo"},null,-1),q=t("img",{style:{opacity:"0.5"},class:"light-logo",src:$,alt:"Agency Logo"},null,-1),F={class:"col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1"},I={class:"menu-column-area d-none d-xl-block position-static"},B=t("div",{class:"header-search-area"},null,-1),H={class:"header-mobile-menu-toggle d-xl-none ml-sm-2"},W=t("i",{class:"icon-top"},null,-1),G=t("i",{class:"icon-middle"},null,-1),J=t("i",{class:"icon-bottom"},null,-1),Q=[W,G,J],Y=t("div",{class:"col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2"},[t("a",{href:"https://shop.javaraya.co.uk",class:"btn btn-light btn-hover-primary",target:"_blank"},"Shop Now")],-1),K={class:"col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2"};function X(a,o,n,m,l,_){const s=f,e=L;return c(),r("div",{class:T(["header-section header-transparent",{"is-sticky":l.isSticky}])},[t("div",P,[t("div",N,[t("div",O,[t("div",R,[t("div",z,[i(s,{to:"/"},{default:d(()=>[V,q]),_:1})])]),t("div",F,[t("div",I,[i(e)]),B,t("div",H,[t("button",{class:"toggle",onClick:o[0]||(o[0]=u=>_.mobiletoggleClass("addClass","show-mobile-menu"))},Q)])]),Y,t("div",K,[i(s,{to:"/download",class:"btn btn-light btn-hover-primary"},{default:d(()=>[g("Download App")]),_:1})])])])])],2)}const Xt=p(E,[["render",X]]),Z=[{id:1,title:"Artificial Intelligence ",slug:"ai",text:"LLM and SLM optimize for local and cross-border marketplace. ",iconSrc:"/images/svg/frontpage/frontpage-ai.svg",imgSrc:"/images/project/work-details-1.jpg"},{id:2,title:"Blockchain",slug:"blockchain",text:"Transparent data can be leveraged by utilizing Level 1 and Level 2 blockchain technology.",iconSrc:"/images/svg/frontpage/frontpage-blockchain.svg",imgSrc:"/images/project/work-details-2.jpg"},{id:3,title:"Decentralized ID",slug:"decentralized",text:"Seriously handle privacy for our customers",iconSrc:"/images/svg/frontpage/frontpage-decentralized.svg",imgSrc:"/images/project/work-details-3.jpg"},{id:4,title:"Run on any devices",slug:"multidevice",text:"Run on Web, Mobile, TV, and VR",iconSrc:"/images/svg/frontpage/frontpage-multidevices.svg",imgSrc:"/images/project/work-details-4.jpg"},{id:5,title:"Selected product",slug:"product",text:"Marketplace focus with selected product ",iconSrc:"/images/svg/frontpage/frontpage-greenproduct.svg",imgSrc:"/images/project/work-details-1.jpg"},{id:6,title:"SME Business",slug:"msmb",text:"Helping micro, small and medium business to grow together",iconSrc:"/images/svg/frontpage/frontpage-sme.svg",imgSrc:"/images/project/work-details-2.jpg"}],tt={mounted(){const a=document.querySelector("#offcanvas-navigation"),o=a.querySelectorAll(".sub-menu"),n=a.querySelectorAll("a");for(let e=0;e<o.length;e++)o[e].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");const m=a.querySelectorAll(".menu-expand"),l=m.length;for(let e=0;e<l;e++)m[e].addEventListener("click",u=>{_(u)});for(let e=0;e<n.length;e++)n[e].addEventListener("click",()=>{s()});const _=e=>{e.currentTarget.parentElement.classList.toggle("active")},s=()=>{const e=document.querySelector("#offcanvas-mobile-menu");e==null||e.classList.remove("active")}},props:["addClassName"],components:{SectionTitle:()=>k(()=>import("./DivJRLfC.js"),__vite__mapDeps([0,1]),import.meta.url)},data(){return{featureData:Z}}},et={class:"mobile-navigation"},ot={class:"offcanvas-navigation",id:"offcanvas-navigation"},st={class:"menu-item-has-children"},nt={class:"has-children"};function at(a,o,n,m,l,_){const s=f;return c(),r("div",et,[t("nav",ot,[t("ul",null,[t("li",st,[i(s,{to:"/"},{default:d(()=>[g("Home")]),_:1})]),t("li",nt,[i(s,{to:"/#"},{default:d(()=>[g("Features")]),_:1}),(c(!0),r(h,null,b(l.featureData.slice(0,6),(e,u)=>(c(),r("ul",{class:"sub-menu",key:u},[t("li",null,[i(s,{to:`/features/${e.slug}`,class:"link"},{default:d(()=>[g("${feature.title}")]),_:2},1032,["to"])])]))),128))]),t("li",null,[i(s,{to:"/about/company"},{default:d(()=>[g("About")]),_:1})])])])])}const y=p(tt,[["render",at]]),it=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),lt={components:{MobileNavigation:()=>k(()=>Promise.resolve().then(()=>it),void 0,import.meta.url)},methods:{mobiletoggleClass(a,o){const n=document.querySelector("#offcanvas-menu");a==="addClass"?n.classList.add(o):n.classList.remove(o)}}},ct={class:"popup-mobile-menu popup-mobile-visiable",id:"offcanvas-menu"},rt={class:"inner custom-scrollbar"},dt={class:"mobile-header"},ut={class:"logo"},_t=t("img",{src:$,alt:"site logo"},null,-1),gt={class:"menu-content"};function mt(a,o,n,m,l,_){const s=f,e=y;return c(),r("div",ct,[t("div",{class:"mobile-menu-overlay",onClick:o[0]||(o[0]=u=>_.mobiletoggleClass("removeClass","show-mobile-menu"))}),t("div",rt,[t("div",dt,[t("div",ut,[i(s,{to:"/"},{default:d(()=>[_t]),_:1})]),t("button",{class:"mobile-close-btn",onClick:o[1]||(o[1]=u=>_.mobiletoggleClass("removeClass","show-mobile-menu"))})]),t("div",gt,[i(e)])])])}const Zt=p(lt,[["render",mt]]),pt={methods:{toggleClass(a,o){const n=document.querySelector("#search-popup");a==="addClass"?n.classList.add(o):n.classList.remove(o)}}},vt={class:"main-search-active",id:"search-popup"},ft={class:"sidebar-search-icon"},ht=t("i",{class:"fa fa-times"},null,-1),bt=[ht],kt=S('<div class="sidebar-search-input"><form><div class="form-search"><input id="search" class="input-text" value="" placeholder="" type="search"><button><i class="fa fa-search"></i></button></div></form><p class="form-description">Hit enter to search</p></div>',1);function $t(a,o,n,m,l,_){return c(),r("div",vt,[t("div",ft,[t("button",{class:"search-close",onClick:o[0]||(o[0]=s=>_.toggleClass("removeClass","search-popup-open"))},bt)]),kt])}const te=p(pt,[["render",$t]]),Lt={logoSrc:"/images/logo/footer-logo.png",telephone:"0123456789",email:"demo@example.com",fbUrl:"https://www.facebook.com/",twitterUrl:"https://twitter.com/",instagramUrl:"https://www.instagram.com/"},yt="Our Store",xt=[{navTitle:"Retail",navUrl:"https://shop.javaraya.co.uk",target:"_blank"},{navTitle:"Materials and Metals",navUrl:"/business/material",target:""}],Tt="Products",St=[{navTitle:"Elementor Guru",navUrl:"/"},{navTitle:"WooLentor Pro",navUrl:"/"},{navTitle:"Plugins",navUrl:"/"},{navTitle:"Page Builder",navUrl:"/"}],wt="About",Ct=[{navTitle:"Company",navUrl:"/about/company",target:""},{navTitle:"Privacy",navUrl:"/about/privacy",target:""},{navTitle:"Contact Form",navUrl:"https://form.jotform.com/240958272825162",target:"_blank"},{navTitle:"Refund",navUrl:"/about/refund",target:"_blank"},{navTitle:"Term and Condition",navUrl:"/about/tandc",target:"_blank"}],jt="Contact",At=[{navTitle:"Support Ticket",navUrl:"/"},{navTitle:"Help Desk",navUrl:"/"},{navTitle:"Live Chat",navUrl:"/"},{navTitle:"FAQs",navUrl:"/"}],Dt={footerAboutWidget:Lt,footerLinkTitleOne:yt,navListOne:xt,footerLinkTitleTwo:Tt,navListTwo:St,footerLinkTitleThree:wt,navListThree:Ct,footerLinkTitleFour:jt,navListFour:At},Ut={data(){return{footerData:Dt}}},Mt={class:"footer-section",style:{backgroundColor:"#030e22"}},Et={class:"container"},Pt={class:"row section-padding pt-0 mtn-30"},Nt={class:"col-md-4 col-sm-6 col-12 mt-30"},Ot={class:"footer-widget"},Rt={class:"footer-logo"},zt=["src"],Vt={class:"col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30"},qt={class:"footer-widget"},Ft={class:"footer-widget-title"},It={class:"footer-widget-content"},Bt={class:"col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"},Ht={class:"footer-widget"},Wt={class:"footer-widget-title"},Gt={class:"footer-widget-content"},Jt=t("div",{class:"row"},[t("div",{class:"col"},[t("p",{class:"copyright"},"© 2024 Java Raya International LTD.")])],-1);function Qt(a,o,n,m,l,_){const s=f;return c(),r("div",Mt,[t("div",Et,[t("div",Pt,[t("div",Nt,[t("div",Ot,[t("div",Rt,[i(s,{to:"/"},{default:d(()=>[t("img",{src:l.footerData.footerAboutWidget.logoSrc,alt:"Logo"},null,8,zt)]),_:1})])])]),t("div",Vt,[t("div",qt,[t("h4",Ft,v(l.footerData.footerLinkTitleOne),1),t("div",It,[t("ul",null,[(c(!0),r(h,null,b(l.footerData.navListOne,(e,u)=>(c(),r("li",{key:u},[i(s,{to:e.navUrl,target:e.target},{default:d(()=>[g(v(e.navTitle),1)]),_:2},1032,["to","target"])]))),128))])])])]),t("div",Bt,[t("div",Ht,[t("h4",Wt,v(l.footerData.footerLinkTitleThree),1),t("div",Gt,[t("ul",null,[(c(!0),r(h,null,b(l.footerData.navListThree,(e,u)=>(c(),r("li",{key:u},[i(s,{to:e.navUrl,target:e.target},{default:d(()=>[g(v(e.navTitle),1)]),_:2},1032,["to","target"])]))),128))])])])])]),Jt])])}const ee=p(Ut,[["render",Qt]]);export{Xt as _,Zt as a,te as b,ee as c,w as f};
