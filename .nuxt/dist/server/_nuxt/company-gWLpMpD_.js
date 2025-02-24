import { _ as __nuxt_component_0$1, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from "./TheFooter-DOCpy3rk.js";
import { _ as __nuxt_component_3 } from "./BreadcrumbOne-CcR3NFKv.js";
import { useSSRContext, mergeProps } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import __nuxt_component_0 from "./ShapeWithAnimation-DeiqOjdO.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_2 } from "./virtual_public-CilrpQp_.js";
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
import "parallax-js";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="main-container"><div><p>Our priority is B2B customer with bulk quantity or B2C customers with bulk quantity</p><p>We will split the stores from B2B customers and B2C customers</p><p>We will add more products such as metals, chemicals or agriculture periodically</p><p>Our supplier with provide details documentations, lab test and certifications upon request.</p></div></div><div></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TimelineDevelopment.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    ShapeWithAnimation: () => import("./ShapeWithAnimation-DeiqOjdO.js")
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ShapeWithAnimation = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding contact-section overflow-hidden" }, _attrs))}><div class="container"><div class="row row-cols-lg-2 row-cols-1 align-items-center"><div class="col"><div class="contact-Information mr-xl-7"><div class="section-title-two"><span class="sub-title">Lets talk</span><h3 class="title">Vendors, Supplier, Investors, Customers are welcome to talk</h3></div><div class="contact-info ct-info-two" data-vivus-hover><div class="icon"><img class="svgInject"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="info"><h4 class="title">Our Locations</h4><span class="info-text">Java Raya International LTD, <br> 2nd Floor College House, 17 King Edwards Road, Ruislip, London, HA4 7AE, United Kingdom</span></div></div><div class="contact-info ct-info-two" data-vivus-hover><div class="icon"><img class="svgInject"${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="info"><h4 class="title">Contact Us</h4><span class="info-text"><a href="https://form.jotform.com/240958272825162" target="_blank">Contact Form</a></span></div></div></div></div><div class="col"></div></div></div>`);
  _push(ssrRenderComponent(_component_ShapeWithAnimation, {
    addClassName: "shape-1",
    "data-depth": "1",
    imgSrc: "/images/shape-animation/contact-shape.png"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSectionThreeCompany.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_TimelineDevelopment = __nuxt_component_4;
  const _component_ContactSectionThreeCompany = __nuxt_component_5;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: "About - Company",
    title: "Company",
    backgroundUrl: "/images/bg/breadcrumb-bg-darkgray.png"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TimelineDevelopment, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactSectionThreeCompany, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const company = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  company as default
};
//# sourceMappingURL=company-gWLpMpD_.js.map
