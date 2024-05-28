import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from './TheFooter-DOCpy3rk.mjs';
import { _ as __nuxt_component_3 } from './BreadcrumbOne-CcR3NFKv.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-P6SDANQl.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}><section class="service-details-wrapper section-padding pb-125"><div class="container"><div class="row"><div class="col-lg-4 mtn-40 order-2 order-lg-1"><div class="service-details-widget"><div class="service-single-widget mt-40" style="${ssrRenderStyle({ backgroundColor: "#f8faff" })}"><h4 class="service-widget-title">Technology Stack</h4><ul class="service-list"><li><a href="#">Dotnet 8 (LTS) or latest</a></li></ul></div><div class="service-single-widget mt-40" style="${ssrRenderStyle({ backgroundColor: "#f8faff" })}"><h4 class="service-widget-title">Download Docs</h4><ul class="service-list"><li>No release yet on github</li></ul></div></div></div><div class="col-lg-8 order-1 order-lg-2"><div class="service-details"><div class="service-details-thumb"></div><h3 class="mt-4 mb-3">Business</h3><p>In today&#39;s interconnected world, businesses of all sizes have unprecedented opportunities to tap into global markets. However, navigating the complexities of cross-border trade can be daunting, especially for SMBs with limited resources. This website aims to provide valuable insights and practical solutions tailored specifically to SMBs looking to expand their reach across borders.</p><p class="mb-0">Below is our plan the use of SMB in our APP</p><div class="row"><div class="col-sm-6"><div class="service-details-content mt-30"><h4>International Logistic</h4><p>App will integrate back to back </p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>International Payment</h4><p>We will conduct KYC and KYB for our selected customer and supplier.</p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>Real time multi currency support</h4><p>Our app will get real time currency from UK and EU central bank directly. </p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>Cloud based cross border compliance</h4><p>Our app will use cloud based SAAS compliance to optimize cost and deliverables </p></div></div></div></div></div></div></div></section></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureDetailSmallMedium.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_FeatureDetailSmallMedium = __nuxt_component_4;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: "Business Focus",
    title: "Business Focus",
    backgroundUrl: "/images/bg/breadcrumb-bg-darkgray.png"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureDetailSmallMedium, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/features/msmb/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CT62zJGP.mjs.map
