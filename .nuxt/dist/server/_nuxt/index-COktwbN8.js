import { _ as __nuxt_component_0$3, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from "./TheFooter-BZsX5IPS.js";
import { _ as __nuxt_component_3 } from "./BreadcrumbOne-CcR3NFKv.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-P6SDANQl.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import __nuxt_component_0$2 from "./ShapeWithAnimation-DeiqOjdO.js";
import { s as serviceData } from "./service-BNn5Gqwr.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { f as funFacts } from "./funfacts-BrNIhufR.js";
import "ufo";
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
const _sfc_main$5 = {
  props: ["service", "addClassName"]
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["icon-box text-center", $props.addClassName]
  }, _attrs))}><div class="icon"><img class="svgInject"${ssrRenderAttr("src", $props.service.iconSrc)}${ssrRenderAttr("alt", $props.service.title)}></div><div class="content"><h3 class="title">${ssrInterpolate($props.service.title)}</h3><div class="desc"><p>${ssrInterpolate($props.service.text)}</p></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: `/service/${$props.service.slug}`,
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`View Details`);
      } else {
        return [
          createTextVNode("View Details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const ServiceItem = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
const _sfc_main$4 = {
  components: {
    ServiceItem: () => Promise.resolve().then(function() {
      return ServiceItem;
    }),
    ShapeWithAnimation: () => import("./ShapeWithAnimation-DeiqOjdO.js")
  },
  data() {
    return {
      serviceData
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ServiceItem = __nuxt_component_0;
  const _component_ShapeWithAnimation = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-t90 section-padding-bottom overflow-hidden" }, _attrs))}><div class="container"><div class="section-title text-center" data-aos="fade-up"><h2 class="title fz-32">Services that create identities, build brands, and get results</h2><p class="sub-title">We produce beautifully crafted creative solutions that transcend business goals. We provide the exceptional service we’d want to experience ourselves!</p></div><div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 icon-box-shape-animation mtn-30"><!--[-->`);
  ssrRenderList($data.serviceData, (service, index2) => {
    _push(`<div class="col mt-30" data-aos="fade-up">`);
    _push(ssrRenderComponent(_component_ServiceItem, {
      service,
      addClassName: "box-border"
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]-->`);
  _push(ssrRenderComponent(_component_ShapeWithAnimation, {
    addClassName: "shape-1",
    "data-depth": "1",
    imgSrc: "/images/shape-animation/video-shape-1.png"
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceWrapper.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$1 = publicAssetsURL("/images/skill/skill-1.jpg");
const _imports_1$1 = publicAssetsURL("/images/skill/skill-2.jpg");
const _sfc_main$3 = {
  components: {
    ShapeWithAnimation: () => import("./ShapeWithAnimation-DeiqOjdO.js")
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ShapeWithAnimation = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-top success-section-padding-bottom-180 overflow-hidden" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6"><div class="about-image-area right-0 skill-image-area"><div class="about-image js-tilt"><img${ssrRenderAttr("src", _imports_0$1)} alt="image"></div><div class="about-image js-tilt"><img${ssrRenderAttr("src", _imports_1$1)} alt="image"></div>`);
  _push(ssrRenderComponent(_component_ShapeWithAnimation, {
    addClassName: "shape-1",
    dataDepth: "1",
    imgSrc: "/images/shape-animation/video-shape-1.png"
  }, null, _parent));
  _push(`</div></div><div class="offset-lg-1 col-lg-5" data-aos="fade-up"><div class="success-content"><div class="section-title-two"><span class="sub-title">Your success is our success</span><h3 class="title">Web design, marketing &amp; SEO solutions that get results</h3></div><div class="progress-bar--one"><div class="progress-charts"><h6 class="heading">UX Design</h6><div class="progress"><div class="progress-bar gradient-1" role="progressbar" style="${ssrRenderStyle({ "width": "81%", "visibility": "visible" })}" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span class="percent-label">81%</span></div></div></div><div class="progress-charts"><h6 class="heading">Marketing</h6><div class="progress"><div class="progress-bar gradient-2" role="progressbar" style="${ssrRenderStyle({ "width": "72%", "visibility": "visible" })}" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span class="percent-label">72%</span></div></div></div><div class="progress-charts"><h6 class="heading">Web Design</h6><div class="progress"><div class="progress-bar gradient-3" role="progressbar" style="${ssrRenderStyle({ "width": "80%", "visibility": "visible" })}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><span class="percent-label">80%</span></div></div></div><div class="progress-charts"><h6 class="heading">Development</h6><div class="progress"><div class="progress-bar gradient-4" role="progressbar" style="${ssrRenderStyle({ "width": "57%", "visibility": "visible" })}" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><span class="percent-label">57%</span></div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SuccessStory.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  data() {
    return {
      funFacts
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "section-padding-t90 section-padding-bottom",
    style: { backgroundColor: "#f8faff" }
  }, _attrs))}><div class="container"><div class="section-title text-center" data-aos="fade-up"><h2 class="title fz-32">We help our clients solve business problems, increase <br> visibility, and achieve unexpected results</h2></div><div class="row"><div class="col-lg-12 mx-auto"><div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30"><!--[-->`);
  ssrRenderList($data.funFacts, (item, i) => {
    _push(`<div class="col mt-30" data-aos="fade-up"><div class="funfact"><div class="number"><span class="counter">${ssrInterpolate(item.count)}</span></div><h6 class="text">${ssrInterpolate(item.text)}</h6></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FunfactWithTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = publicAssetsURL("/images/svg/linea/linea-basic-map-white.svg");
const _imports_1 = publicAssetsURL("/images/svg/linea/linea-basic-message-txt-white.svg");
const _imports_2 = publicAssetsURL("/images/svg/linea/linea-basic-mail-open-text-white.svg");
const _sfc_main$1 = {
  components: {
    ShapeWithAnimation: () => import("./ShapeWithAnimation-DeiqOjdO.js")
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ShapeWithAnimation = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "section-padding contact-section fix bg-cover overflow-hidden",
    "data-overlay": "0.7",
    style: { backgroundImage: `url('/images/bg/contact-bg.jpg')` }
  }, _attrs))}><div class="container"><div class="row row-cols-lg-2 row-cols-1 align-items-center"><div class="col"><div class="contact-Information mr-xl-7"><div class="section-title-two color-light"><span class="sub-title">Innovative &amp; cutting-edge technology</span><h3 class="title">We use latest technologies that are proven and practical</h3></div><div class="contact-info info-light" data-vivus-hover><div class="icon"><img class="svgInject"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="info"><h4 class="title">Our Locations</h4><span class="info-text"> 110 W 34th St, NYC. / 67 Madison Avenue.</span></div></div><div class="contact-info info-light" data-vivus-hover><div class="icon"><img class="svgInject"${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="info"><h4 class="title">Give Us A Call</h4><span class="info-text"><a href="callto:0123456789">0123456789</a></span></div></div><div class="contact-info info-light" data-vivus-hover><div class="icon"><img class="svgInject"${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="info"><h4 class="title"> Help Desk</h4><span class="info-text"><a href="mailto:demo@example.com">demo@example.com</a></span></div></div></div></div><div class="col"><div class="contact-form-area box-shadow"><div class="section-title text-center mb-7"><h2 class="title fz-28">Let’s talk about your project</h2><p class="sub-title">We have made it easy for clients to reach us and get their solutions weaved</p></div><form><div class="row mb-n4"><div class="col-md-12 col-12 mb-4"><input type="text" placeholder="Your Name *" name="name"></div><div class="col-md-12 col-12 mb-4"><input type="email" placeholder="Email *" name="email"></div><div class="col-12 mb-30"><textarea name="message" placeholder="Message"></textarea></div><div class="col-12 text-center mb-4"><button class="btn btn-primary btn-hover-secondary">Get a free consultation</button></div></div></form>`);
  _push(ssrRenderComponent(_component_ShapeWithAnimation, {
    addClassName: "shape-1",
    "data-depth": "1",
    imgSrc: "/images/shape-animation/contact-shape.png"
  }, null, _parent));
  _push(`</div></div></div></div>`);
  _push(ssrRenderComponent(_component_ShapeWithAnimation, {
    addClassName: "shape-1",
    "data-depth": "1",
    imgSrc: "/images/shape-animation/newsletter-shape.png"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSectionTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0$3;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_ServiceWrapper = __nuxt_component_4;
  const _component_SuccessStory = __nuxt_component_5;
  const _component_AboutFour = resolveComponent("AboutFour");
  const _component_FunfactWithTitle = __nuxt_component_6;
  const _component_ContactSectionTwo = __nuxt_component_7;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: "Service",
    title: "We work with bold brands that we believe in",
    backgroundUrl: "/images/bg/breadcrumb-bg-three.jpg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_ServiceWrapper, null, null, _parent));
  _push(ssrRenderComponent(_component_SuccessStory, { style: { backgroundColor: "#f8faff" } }, null, _parent));
  _push(ssrRenderComponent(_component_AboutFour, null, null, _parent));
  _push(ssrRenderComponent(_component_FunfactWithTitle, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactSectionTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-COktwbN8.js.map
