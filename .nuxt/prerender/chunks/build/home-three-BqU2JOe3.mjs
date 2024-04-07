import { _ as __nuxt_component_0$1, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8$1 } from './TheFooter-DuWgzPvK.mjs';
import { f as funFacts } from './funfacts-BrNIhufR.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_4 } from './FeatureOne-lR-1gFQM.mjs';
import { _ as __nuxt_component_7$1, a as __nuxt_component_6$1 } from './BrandLogoCarousel-CYUUsYAg.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-P6SDANQl.mjs';
import { _ as __nuxt_component_8 } from './TestimonialSectionOne-Dln3wNGe.mjs';
import { _ as __nuxt_component_5 } from './CallToActionTwo-D0AmQG_q.mjs';
import __nuxt_component_0$3 from './SectionTitle-dTGhT3J2.mjs';
import __nuxt_component_1$1 from './BlogGridItem-B1iyPgHc.mjs';
import { b as blogData } from './blog-Zc0eEkLF.mjs';
import { _ as __nuxt_component_11 } from './CallToActionOne-D4APYSW0.mjs';
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
import './ShapeWithAnimation-BvbK3V22.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/parallax-js/dist/parallax.js';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/swiper/vue/swiper-vue.js';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/swiper/swiper.esm.js';
import './virtual_public-fIznlp9c.mjs';

const _sfc_main$5 = {
  data() {
    return {
      funFacts
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12 mx-auto"><div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30"><!--[-->`);
  ssrRenderList($data.funFacts, (item, i) => {
    _push(`<div class="col mt-30" data-aos="fade-up"><div class="funfact"><div class="number"><span class="counter">${ssrInterpolate(item.count)}</span></div><h6 class="text">${ssrInterpolate(item.text)}</h6></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FunFact.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const portfolios = [
  {
    id: 1,
    imgSrc: "/images/portfolio/portfolio-1.jpg",
    title: "Digital marketing",
    category: "development"
  },
  {
    id: 2,
    imgSrc: "/images/portfolio/portfolio-2.jpg",
    title: "App Development",
    category: "design"
  },
  {
    id: 3,
    imgSrc: "/images/portfolio/portfolio-3.jpg",
    title: "Graphics Design",
    category: "marketing"
  },
  {
    id: 4,
    imgSrc: "/images/portfolio/portfolio-4.jpg",
    title: "Web Development",
    category: "development"
  },
  {
    id: 5,
    imgSrc: "/images/portfolio/portfolio-5.jpg",
    title: "Construction Project",
    category: "design"
  },
  {
    id: 6,
    imgSrc: "/images/portfolio/portfolio-6.jpg",
    title: "Illustration Design",
    category: "marketing"
  }
];
const _sfc_main$4 = {
  data() {
    return {
      portfolios,
      categories: [],
      selectedCat: "all"
    };
  },
  methods: {
    filterHandler(selection) {
      this.selectedCat = selection;
    },
    shuffle() {
      this.portfolios = this.portfolios.groupBy("category");
    },
    filterCategories() {
      this.categories = [...new Set(this.portfolios.map((item) => item.category))];
    }
  },
  mounted() {
    this.filterCategories();
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding" }, _attrs))}><div class="container-fluid px-0"><div class="section-title text-center" data-aos="fade-up"><h2 class="title">Great even greater creative works</h2><p class="sub-title">Get your company heading in the right direction with our digital marketing strategist</p></div><div class="messonry-button text-center mb-60"><button class="${ssrRenderClass({ "mixitup-control-active": $data.selectedCat === "all" })}"><span class="filter-text">All</span></button><!--[-->`);
  ssrRenderList($data.categories, (filter, index) => {
    _push(`<button class="${ssrRenderClass({ "mixitup-control-active": $data.selectedCat === filter })}"><span class="filter-text">${ssrInterpolate(filter)}</span></button>`);
  });
  _push(`<!--]--></div><div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-0 box"><!--[-->`);
  ssrRenderList($data.portfolios, (portfolio, index) => {
    _push(`<div class="${ssrRenderClass([portfolio.category, "col portfolio-item"])}">`);
    if ($data.selectedCat === portfolio.category || $data.selectedCat === "all") {
      _push(`<div class="single-portfolio"><div class="thumbnail"><img class="img-fluid"${ssrRenderAttr("src", portfolio.imgSrc)}${ssrRenderAttr("alt", portfolio.title)}></div><div class="content"><h5 class="title">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/project/project-details" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(portfolio.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(portfolio.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</h5></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PortfolioGalleryTwo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  props: ["team"]
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "team" }, _attrs))}><div class="thumb"><img${ssrRenderAttr("src", $props.team.imgSrc)}${ssrRenderAttr("alt", $props.team.name)}><div class="overlay"></div><ul class="social-icon text-center"><!--[-->`);
  ssrRenderList($props.team.socialList, (social, index) => {
    _push(`<li><a${ssrRenderAttr("href", social.url)} class="link"><i class="${ssrRenderClass(social.iconName)}"></i></a></li>`);
  });
  _push(`<!--]--></ul></div><div class="team-info text-center"><div class="info"><h5>${ssrInterpolate($props.team.name)}</h5><span>${ssrInterpolate($props.team.position)}</span></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamMember.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const TeamMember = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
const teamData = [
  {
    imgSrc: "/images/team/team-1.jpg",
    name: "Merrie Lewis",
    position: "General Director",
    role: "admin",
    socialList: [
      {
        name: "Facebook",
        iconName: "fab fa-facebook-f",
        url: "#"
      },
      {
        name: "Twitter",
        iconName: "fab fa-twitter",
        url: "#"
      },
      {
        name: "Instagram",
        iconName: "fab fa-instagram",
        url: "#"
      }
    ]
  },
  {
    imgSrc: "/images/team/team-2.jpg",
    name: "Mariana Buenos",
    position: "CEO & Chief Manager",
    role: "admin",
    socialList: [
      {
        name: "Facebook",
        iconName: "fab fa-facebook-f",
        url: "#"
      },
      {
        name: "Twitter",
        iconName: "fab fa-twitter",
        url: "#"
      },
      {
        name: "Instagram",
        iconName: "fab fa-instagram",
        url: "#"
      }
    ]
  },
  {
    imgSrc: "/images/team/team-3.jpg",
    name: "Maya",
    position: "Project Manager",
    role: "admin",
    socialList: [
      {
        name: "Facebook",
        iconName: "fab fa-facebook-f",
        url: "#"
      },
      {
        name: "Twitter",
        iconName: "fab fa-twitter",
        url: "#"
      },
      {
        name: "Instagram",
        iconName: "fab fa-instagram",
        url: "#"
      }
    ]
  },
  {
    imgSrc: "/images/team/team-4.jpg",
    name: "Parks Missie",
    position: "Marketing Manager",
    role: "employee",
    socialList: [
      {
        name: "Facebook",
        iconName: "fab fa-facebook-f",
        url: "#"
      },
      {
        name: "Twitter",
        iconName: "fab fa-twitter",
        url: "#"
      },
      {
        name: "Instagram",
        iconName: "fab fa-instagram",
        url: "#"
      }
    ]
  }
];
const _sfc_main$2 = {
  components: {
    TeamMember: () => Promise.resolve().then(function() {
      return TeamMember;
    })
  },
  data() {
    return {
      teamData
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TeamMember = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "section-padding",
    "data-bg-color": "#f8faff"
  }, _attrs))}><div class="container"><div class="section-title text-center mb-60" data-aos="fade-up"><h2 class="title">People behind the screen</h2><p class="sub-title">Get your company heading in the right direction with our digital marketing strategist</p></div><div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30"><!--[-->`);
  ssrRenderList($data.teamData.slice(0, 4), (team, index) => {
    _push(`<div class="col mt-30">`);
    _push(ssrRenderComponent(_component_TeamMember, { team }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TeamOne.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      blogData
    };
  },
  components: {
    BlogGridItem: () => import('./BlogGridItem-B1iyPgHc.mjs'),
    SectionTitle: () => import('./SectionTitle-dTGhT3J2.mjs')
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0$3;
  const _component_BlogGridItem = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-t90-b100" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    title: "We are a full-service creative agency",
    "sub-title": "Our team of designers, developers and creatives are perfectionists who love what they do and love"
  }, null, _parent));
  _push(`<div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-60"><!--[-->`);
  ssrRenderList($data.blogData.slice(0, 3), (blog, index) => {
    _push(`<div class="col mt-30">`);
    _push(ssrRenderComponent(_component_BlogGridItem, { blog }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogSectionOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_HeroSliderTwo = resolveComponent("HeroSliderTwo");
  const _component_AboutThree = resolveComponent("AboutThree");
  const _component_FunFact = __nuxt_component_3;
  const _component_FeatureOne = __nuxt_component_4;
  const _component_FaqOne = __nuxt_component_7$1;
  const _component_PortfolioGalleryTwo = __nuxt_component_6;
  const _component_TeamOne = __nuxt_component_7;
  const _component_TestimonialSectionOne = __nuxt_component_8;
  const _component_CallToActionTwo = __nuxt_component_5;
  const _component_BlogSectionOne = __nuxt_component_10;
  const _component_CallToActionOne = __nuxt_component_11;
  const _component_BrandLogoCarousel = __nuxt_component_6$1;
  const _component_TheFooter = __nuxt_component_8$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroSliderTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_AboutThree, null, null, _parent));
  _push(ssrRenderComponent(_component_FunFact, { style: { backgroundColor: "#f8faff" } }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureOne, { addClassName: "box-border" }, null, _parent));
  _push(ssrRenderComponent(_component_FaqOne, null, null, _parent));
  _push(ssrRenderComponent(_component_PortfolioGalleryTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_TeamOne, { style: { backgroundColor: "#f8faff" } }, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialSectionOne, null, null, _parent));
  _push(ssrRenderComponent(_component_CallToActionTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_BlogSectionOne, null, null, _parent));
  _push(ssrRenderComponent(_component_CallToActionOne, { style: { backgroundColor: "#f8faff" } }, null, _parent));
  _push(ssrRenderComponent(_component_BrandLogoCarousel, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-three.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homeThree = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { homeThree as default };
//# sourceMappingURL=home-three-BqU2JOe3.mjs.map
