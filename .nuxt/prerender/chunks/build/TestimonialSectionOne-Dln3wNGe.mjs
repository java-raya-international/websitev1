import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import SwiperCore, { Pagination } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/swiper/swiper.esm.js';
import { Swiper, SwiperSlide } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/swiper/vue/swiper-vue.js';

const _sfc_main$1 = {
  props: ["testimonial"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "static-testimonial mb-30" }, _attrs))}><div class="testimonial-image"><img${ssrRenderAttr("src", $props.testimonial.imgSrc)}${ssrRenderAttr("alt", $props.testimonial.name)}></div><div class="testimonial-content"><p>${ssrInterpolate($props.testimonial.text)}</p></div><div class="author-info"><div class="cite"><h6 class="name">${ssrInterpolate($props.testimonial.name)}</h6><span class="position">${ssrInterpolate($props.testimonial.position)}</span></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const TestimonialItem = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
SwiperCore.use([Pagination]);
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide,
    TestimonialItem: () => Promise.resolve().then(function() {
      return TestimonialItem;
    })
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        }
      },
      testimonialData: [
        {
          id: 1,
          text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
          imgSrc: "/images/testimonial/author-1.png",
          name: "Uzzal Hossain",
          position: "Frontend Developer"
        },
        {
          id: 2,
          text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
          imgSrc: "/images/testimonial/author-2.png",
          name: "Tasnim Akter",
          position: "Marketing Manager"
        },
        {
          id: 3,
          text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
          imgSrc: "/images/testimonial/author-3.png",
          name: "Yeasin Hossain",
          position: "Team Leader"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_TestimonialItem = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "testimonial-section section-padding-t90 section-padding-bottom" }, _attrs))}><div class="container-fluid"><div class="section-title text-center" data-aos="fade-up"><h2 class="title fz-32">What our customers are saying about our services</h2><p class="sub-title">Get your company heading in the right direction with our digital marketing strategist</p></div><div class="testimonial-slider" data-aos="fade-up">`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 3,
    "space-between": 30,
    speed: 1e3,
    loop: true,
    "centered-slides": true,
    pagination: $data.swiperOptions.pagination
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.testimonialData, (testimonial, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_TestimonialItem, { testimonial }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_TestimonialItem, { testimonial }, null, 8, ["testimonial"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.testimonialData, (testimonial, index) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
              default: withCtx(() => [
                createVNode(_component_TestimonialItem, { testimonial }, null, 8, ["testimonial"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="swiper-pagination text-center"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialSectionOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_8 as _ };
//# sourceMappingURL=TestimonialSectionOne-Dln3wNGe.mjs.map
