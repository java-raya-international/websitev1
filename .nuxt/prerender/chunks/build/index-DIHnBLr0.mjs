import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from './TheFooter-DuWgzPvK.mjs';
import { useSSRContext, mergeProps } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_4 } from './FeatureOne-lR-1gFQM.mjs';
import './nuxt-link-P6SDANQl.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/ufo/dist/index.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/ofetch/dist/node.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/hookable/dist/index.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/unctx/dist/index.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/h3/dist/index.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/unhead/dist/index.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/@unhead/shared/dist/index.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/radix3/dist/index.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/defu/dist/defu.mjs';
import '../runtime.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/destr/dist/index.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/klona/dist/index.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/scule/dist/index.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/ohash/dist/index.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/unstorage/dist/index.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/Projects/JavaRayaInternational/website/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/pathe/dist/index.mjs';
import './SectionTitle-dTGhT3J2.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "intro-slider" }, _attrs))}><div class="intro-section overlay bg-cover" style="${ssrRenderStyle({ backgroundImage: `url('/images/hero-image/javaraya-hero.png')` })}"><div class="container"><div class="row row-cols-lg-1 row-cols-1"><div class="col align-self-center"><div class="intro-content m-auto text-center"><h2 class="title">Cross Border AI Marketplace</h2><div class="desc"><p>Providing cross border marketplace with the power of AI and Blockchain</p></div></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroFixedBanner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  head() {
    return {
      title: "Java Raya International"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_HeroFixedBanner = __nuxt_component_3;
  const _component_FeatureOne = __nuxt_component_4;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroFixedBanner, null, null, _parent));
  _push(ssrRenderComponent(_component_FeatureOne, { style: { backgroundColor: "#f8faff" } }, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DIHnBLr0.mjs.map
