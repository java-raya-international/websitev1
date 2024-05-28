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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}><section class="service-details-wrapper section-padding pb-125"><div class="container"><div class="row"><div class="col-lg-4 mtn-40 order-2 order-lg-1"><div class="service-details-widget"><div class="service-single-widget mt-40" style="${ssrRenderStyle({ backgroundColor: "#f8faff" })}"><h4 class="service-widget-title">Technology Stack</h4><ul class="service-list"><li><a href="#">Android</a></li><li><a href="#">IOS</a></li><li><a href="#">Website</a></li><li><a href="#">ReactNative</a></li></ul></div><div class="service-single-widget mt-40" style="${ssrRenderStyle({ backgroundColor: "#f8faff" })}"><h4 class="service-widget-title">Download Docs</h4><ul class="service-list"><li>No release yet on github</li></ul></div></div></div><div class="col-lg-8 order-1 order-lg-2"><div class="service-details"><div class="service-details-thumb"></div><h3 class="mt-4 mb-3">Any Device</h3><p>TBA</p><p class="mb-0">Below is our plan the use of Any Device in our APP</p><div class="row"><div class="col-sm-6"><div class="service-details-content mt-30"><h4>Android</h4><p>Mobile Phone with Android OS and Google Play. Android version is 9++ </p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>IOS</h4><p>Mobile Phone with IOS and AppStore. IOS version is 12++</p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>Website</h4><p>Support and Optimize for support Edge, Chrome, FF, and Safari</p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>TV</h4><p>Android TV with Google Play</p></div></div></div></div></div></div></div></section></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureDetailAnyDevice.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_FeatureDetailAnyDevice = __nuxt_component_4;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: "Any Device",
    title: "Any Device",
    backgroundUrl: "/images/bg/breadcrumb-bg-darkgray.png"
  }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureDetailAnyDevice, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/features/multidevice/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-B6gOFesf.mjs.map
