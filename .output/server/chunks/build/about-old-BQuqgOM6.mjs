import { _ as __nuxt_component_0$1, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8$1 } from './TheFooter-LpdXcdqE.mjs';
import { _ as __nuxt_component_3 } from './BreadcrumbOne-CcR3NFKv.mjs';
import { defineComponent, ref, provide, createElementBlock, useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode } from 'vue';
import __nuxt_component_0$2 from './ShapeWithAnimation-DeiqOjdO.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_8 } from './TestimonialSectionOne-Dln3wNGe.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-P6SDANQl.mjs';
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
import 'parallax-js';
import 'vue-router';
import 'swiper/core';
import 'swiper/vue';

const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$2 = {
  components: {
    ShapeWithAnimation: () => import('./ShapeWithAnimation-DeiqOjdO.mjs')
  },
  data() {
    return {
      videos: [
        {
          src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY"
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0;
  const _component_ShapeWithAnimation = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "video-section section-padding overflow-hidden",
    style: { backgroundImage: `url('/images/bg/video-bg.jpg')` }
  }, _attrs))}><div class="container text-center"><div class="section-title color-light text-center" data-aos="fade-up"><h2 class="title">A full-service creative agency since 2007</h2></div>`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ShapeWithAnimation, {
    addClassName: "shape-1",
    "data-depth": "1",
    imgSrc: "/images/shape-animation/newsletter-shape.png"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToActionVideo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      shapeData: [
        {
          imgSrc: "/images/icon-animation/icon-1.png",
          className: "shape-1"
        },
        {
          imgSrc: "/images/icon-animation/icon-2.png",
          className: "shape-2"
        },
        {
          imgSrc: "/images/icon-animation/icon-3.png",
          className: "shape-3"
        },
        {
          imgSrc: "/images/icon-animation/icon-4.png",
          className: "shape-4"
        },
        {
          imgSrc: "/images/icon-animation/icon-5.png",
          className: "shape-5"
        },
        {
          imgSrc: "/images/icon-animation/icon-6.png",
          className: "shape-6"
        },
        {
          imgSrc: "/images/icon-animation/icon-7.png",
          className: "shape-7"
        },
        {
          imgSrc: "/images/icon-animation/icon-8.png",
          className: "shape-8"
        },
        {
          imgSrc: "/images/icon-animation/icon-9.png",
          className: "shape-9"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "cta-section section-padding-250 overflow-hidden" }, _attrs))}><div class="container text-center icon-up-down-animation"><div class="section-title text-center" data-aos="fade-up"><h2 class="title fz-34">Let&#39;s talk about your project and see how we can work together</h2><p class="sub-title">Our team of designers, developers and creatives are perfectionists who love what they do and love where they work</p></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact-us",
    class: "btn btn-primary btn-hover-secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Us`);
      } else {
        return [
          createTextVNode("Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--[-->`);
  ssrRenderList($data.shapeData, (shape, index) => {
    _push(`<div class="${ssrRenderClass([shape.className, "shape"])}"><span><img${ssrRenderAttr("src", shape.imgSrc)} alt="icon"></span></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToActionThree.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_AboutTwo = resolveComponent("AboutTwo");
  const _component_CallToActionVideo = __nuxt_component_4;
  const _component_AboutFour = resolveComponent("AboutFour");
  const _component_TestimonialSectionOne = __nuxt_component_8;
  const _component_CallToActionThree = __nuxt_component_6;
  const _component_TheFooter = __nuxt_component_8$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: "About Us",
    title: "We are an agency located in New York",
    backgroundUrl: "/images/bg/breadcrumb-bg.jpg"
  }, null, _parent));
  _push(ssrRenderComponent(_component_AboutTwo, { class: "section-padding-top about-section-padding-bottom-200" }, null, _parent));
  _push(ssrRenderComponent(_component_CallToActionVideo, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutFour, null, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialSectionOne, { style: { backgroundColor: "#f8faff" } }, null, _parent));
  _push(ssrRenderComponent(_component_CallToActionThree, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-old.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutOld = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { aboutOld as default };
//# sourceMappingURL=about-old-BQuqgOM6.mjs.map
