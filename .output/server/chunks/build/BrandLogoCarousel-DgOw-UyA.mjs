import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import __nuxt_component_0$1 from './ShapeWithAnimation-DeiqOjdO.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-P6SDANQl.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay } from 'swiper/core';

const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "agency-accordion" }, _attrs))}><div class="accordion" id="accordionExample"><div class="accordion-item card"><h2 class="card-header" id="headingOne"><button class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> What exactly is branding? </button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body"> Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It\u2019s your message and your values. When that happens, remarkable things occur. </div></div></div><div class="accordion-item card"><h2 class="card-header" id="headingTwo"><button class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What\u2019s the branding process like? </button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body"> Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It\u2019s your message and your values. When that happens, remarkable things occur. </div></div></div><div class="accordion-item card"><h2 class="card-header" id="headingThree"><button class="accordion-button btn acc-btn border-0 text-start btn-secondary btn-block collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> What type of creative services do you offer? </button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body"> Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It\u2019s your message and your values. When that happens, remarkable things occur. </div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AccordionStyleOne.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const AccordionStyleOne = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
const _imports_0 = publicAssetsURL("/images/faq/faq-2.jpg");
const _imports_1 = publicAssetsURL("/images/faq/faq-1.jpg");
const _sfc_main$1 = {
  components: {
    AccordionStyleOne: () => Promise.resolve().then(function() {
      return AccordionStyleOne;
    }),
    ShapeWithAnimation: () => import('./ShapeWithAnimation-DeiqOjdO.mjs')
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AccordionStyleOne = __nuxt_component_0;
  const _component_ShapeWithAnimation = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "faq-section section-padding-top overflow-hidden",
    style: { backgroundColor: "#f8faff" }
  }, _attrs))}><div class="container"><div class="row row-cols-lg-2 row-cols-1"><div class="col mb-30"><div class="faq-content"><div class="section-title-two"><span class="sub-title">Frequently asked questions</span><h3 class="title">You\u2019ve got questions and <br> we\u2019ve got answers</h3></div>`);
  _push(ssrRenderComponent(_component_AccordionStyleOne, null, null, _parent));
  _push(`</div></div><div class="col pl-xl-12"><div class="about-image-area faq-image-area"><div class="about-image right-n50 js-tilt"><img${ssrRenderAttr("src", _imports_0)} alt="image"></div><div class="about-image js-tilt"><img${ssrRenderAttr("src", _imports_1)} alt="image"></div>`);
  _push(ssrRenderComponent(_component_ShapeWithAnimation, {
    addClassName: "shape-1",
    "data-depth": "4",
    imgSrc: "/images/shape-animation/video-shape-1.png"
  }, null, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const brandData = [
  {
    id: 1,
    logo: "/images/brand/client-logo-01.png",
    alt: "brand logo"
  },
  {
    id: 2,
    logo: "/images/brand/client-logo-02.png",
    alt: "brand logo"
  },
  {
    id: 3,
    logo: "/images/brand/client-logo-03.png",
    alt: "brand logo"
  },
  {
    id: 4,
    logo: "/images/brand/client-logo-04.png",
    alt: "brand logo"
  },
  {
    id: 5,
    logo: "/images/brand/client-logo-05.png",
    alt: "brand logo"
  },
  {
    id: 6,
    logo: "/images/brand/client-logo-06.png",
    alt: "brand logo"
  },
  {
    id: 7,
    logo: "/images/brand/client-logo-06.png",
    alt: "brand logo"
  }
];
SwiperCore.use([Autoplay]);
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      brandData,
      swiperOptions: {
        breakpoints: {
          992: {
            slidesPerView: 6
          },
          768: {
            slidesPerView: 4
          },
          576: {
            slidesPerView: 3
          },
          320: {
            slidesPerView: 2
          }
        }
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "brand-section section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="brand-wrapper"><div class="brand-list">`);
  _push(ssrRenderComponent(_component_swiper, {
    "space-between": 30,
    speed: 1e3,
    loop: false,
    autoplay: { "delay": 3e3 },
    breakpoints: $data.swiperOptions.breakpoints
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.brandData, (brand, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            class: "brand",
            key: index
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<img${ssrRenderAttr("src", brand.logo)} alt="brand.alt"${_scopeId3}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: brand.logo,
                          alt: "brand.alt"
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_NuxtLink, { to: "" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: brand.logo,
                        alt: "brand.alt"
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.brandData, (brand, index) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              class: "brand",
              key: index
            }, {
              default: withCtx(() => [
                createVNode(_component_NuxtLink, { to: "" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: brand.logo,
                      alt: "brand.alt"
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BrandLogoCarousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_7 as _, __nuxt_component_6 as a };
//# sourceMappingURL=BrandLogoCarousel-DgOw-UyA.mjs.map
