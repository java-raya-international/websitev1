import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from './TheFooter-LpdXcdqE.mjs';
import { _ as __nuxt_component_3 } from './BreadcrumbOne-CcR3NFKv.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3 } from './virtual_public-cGbat4gu.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: "Metal Ingots",
    title: "Our metal ingots",
    backgroundUrl: "/images/bg/breadcrumb-bg-two.jpg"
  }, null, _parent));
  _push(`<div class="section-padding"><div class="container"><div class="row"><div class="col-lg-4 col-md-6 col-12"><div class="work-left work-details" data-aos="fade-up"><div class="portfolio-main-info"><h2 class="title"> Bronze <br> Brass </h2><div class="work-details-list mt-40"><div class="details-list"><label>Date</label><span>28 Sep 2007</span></div><div class="details-list"><label>Client</label><span>HighGrove Partners</span></div><div class="details-list"><label>Categories</label><span>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ingots`);
      } else {
        return [
          createTextVNode("Ingots")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div><div class="details-list"><label>Awards</label><span>2015 Digital World Awards 2016 Finale Awards</span></div></div><div class="work-share"><h6 class="heading heading-h6">SHARE</h6></div></div></div></div><div class="col-lg-7 col-md-6 offset-lg-1 col-12"><div class="work-left work-details mt-30"><div class="work-main-info"><div class="work-content"><h6 class="title" data-aos="fade-up">ABOUT THE PROJECT</h6><div class="desc mt-40"><div class="content mb-20" data-aos="fade-up"><p> Digital marketing encompasses all marketing efforts that use an electronic device or theinternet. Businesses leverage digital channels such as search engines, social media, email, and their websites to connect with current and prospective customers. </p></div><div class="content mb-20" data-aos="fade-up"><p> It is. In fact, \u201Cconstant\u201D internet usage among adults increased by 5% in just the last three years, according to Pew Research. And although we say it a lot, the way people shop and buy really has changed along with it \u2014 meaning offline marketing isn\u2019t as effective as it used to be. </p></div><div class="content mb-40" data-aos="fade-up"><p> Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. (Source: blog.hubspot.com) </p></div><div class="work-btn">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact-us",
    class: "btn btn-primary btn-hover-secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Go to link`);
      } else {
        return [
          createTextVNode("Go to link")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div></div><div class="row"><div class="col-lg-12"><div class="custom-column-thumbnail mt-60" data-aos="fade-up"><img class="w-100"${ssrRenderAttr("src", _imports_0)} alt="Agency"></div></div></div><div class="row mt-60"><div class="col-lg-4 col-md-12 col-12"><div class="digital-marketing" data-aos="fade-up"><h3 class="heading heading-h3">Digital Marketing.</h3></div></div><div class="col-lg-7 col-md-12 col-12 offset-lg-1"><div class="digital-marketing" data-aos="fade-up"><div class="inner"><p> Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. A seasoned inbound marketer might say inbound marketing and digital marketing are virtually the same thing, but there are some minor differences. And conversations with marketers and business owners in the U.S., U.K., Asia, Australia, and New Zealand, I&#39;ve learned a lot about how those small differences are being observed across the world. </p></div></div></div></div><div class="custom-layout-gallery mt-60"><div class="row mtn-30"><div class="col-lg-6 col-md-6 col-12 mt-30"><div class="thumbnail" data-aos="fade-up"><img class="w-100"${ssrRenderAttr("src", _imports_1)} alt="Agency"></div></div><div class="col-lg-6 col-md-6 col-12 mt-30"><div class="thumbnail" data-aos="fade-up"><img class="w-100"${ssrRenderAttr("src", _imports_2)} alt="Agency"></div></div><div class="col-lg-12 mt-30"><div class="thumbnail" data-aos="fade-up"><img class="w-100"${ssrRenderAttr("src", _imports_3)} alt="Agency"></div></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductMaterialMetal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_ProductMaterialMetal = __nuxt_component_4;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: "Metal ingots",
    title: "Metal ingots",
    backgroundUrl: "/images/bg/breadcrumb-bg-darkgray.png"
  }, null, _parent));
  _push(ssrRenderComponent(_component_ProductMaterialMetal, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/metal-ingots/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CJNIVroW.mjs.map
