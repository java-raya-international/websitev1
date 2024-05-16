import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from "./TheFooter-DF5NQnro.js";
import { _ as __nuxt_component_3 } from "./BreadcrumbOne-CcR3NFKv.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-P6SDANQl.js";
import "ufo";
import "#internal/nuxt/paths";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "devalue";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}><section class="service-details-wrapper section-padding pb-125"><div class="container"><div class="row"><div class="col-lg-4 mtn-40 order-2 order-lg-1"><div class="service-details-widget"><div class="service-single-widget mt-40" style="${ssrRenderStyle({ backgroundColor: "#f8faff" })}"><h4 class="service-widget-title">Technology Stack</h4><ul class="service-list"><li><a href="#">LLM based on LLAMA2 </a></li><li><a href="#">Dotnet 8.0 (LTS) and latest version (STS and LTS)</a></li><li><a href="#">NodeJS 21 and latest</a></li><li><a href="#">Golang 1.22</a></li><li><a href="#">Linux Centos 9 </a></li><li><a href="#">Container</a></li><li><a href="#">Cloud or Bare metal VM with GPU </a></li><li><a href="#">MySQL</a></li><li><a href="#">PosgresSQL</a></li><li><a href="#">LanceDB</a></li></ul></div><div class="service-single-widget mt-40" style="${ssrRenderStyle({ backgroundColor: "#f8faff" })}"><h4 class="service-widget-title">Download Docs</h4><ul class="service-list"><li>No release yet on github</li></ul></div></div></div><div class="col-lg-8 order-1 order-lg-2"><div class="service-details"><div class="service-details-thumb"></div><h3 class="mt-4 mb-3">Artificial Intelligence</h3><p>Unlock the power of artificial intelligence in your cross-border marketplace with AI Borderless Commerce. Our innovative AI-driven features streamline operations, enhance user experience, and maximize profitability for businesses operating across borders. Explore our cutting-edge solutions tailored to meet the unique challenges of international e-commerce.</p><p class="mb-0">Below is our plan the use of AI in our APP</p><div class="row"><div class="col-sm-6"><div class="service-details-content mt-30"><h4>Personalized Recommendation</h4><p>Enhance user engagement and drive conversions with personalized product recommendations tailored to each customer&#39;s preferences</p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>Logistic Optimization</h4><p>Streamline international shipping and logistics operations with AI-driven optimization tools. From route planning to inventory management, our solution minimizes costs, reduces delivery times, and ensures seamless supply chain management across borders.</p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>Step by Step Personalization</h4><p>Our AI based chat will go step by step so you make sure you can get what you want</p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>AI Fraud Detection</h4><p>Protect your business and customers from fraudulent activities with our intelligent fraud detection system. Powered by machine learning algorithms, our solution identifies suspicious transactions and mitigates risks proactively, safeguarding the integrity of your marketplace.</p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>AI Scoring</h4><p>Our AI will give score on vendors and customers and provide better services and optimizing dynamic pricing</p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>Market Analyze and Trends</h4><p>Our system will consume TB of data from ours and competitors, provide trends and personalized recommendation for our customers</p></div></div></div></div></div></div></div></section></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureDetailAI.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_FeatureDetailAI = __nuxt_component_4;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: "Artificial Intelligence",
    title: "Artificial Intelligence",
    backgroundUrl: "/images/bg/breadcrumb-bg-darkgray.png"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureDetailAI, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/features/ai/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-Cpq5jYwZ.js.map
