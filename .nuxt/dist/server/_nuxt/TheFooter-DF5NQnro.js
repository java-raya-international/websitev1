import { _ as __nuxt_component_0$1 } from "./nuxt-link-P6SDANQl.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
const featureData = [
  {
    id: 1,
    title: "Metal ingots ",
    slug: "metal-ingots",
    text: "Marketplace for metal ingots. ",
    iconSrc: "/images/svg/frontpage/frontpage-ai.svg",
    imgSrc: "/images/project/work-details-1.jpg"
  },
  {
    id: 2,
    title: "Premium Rice",
    slug: "premium-rice",
    text: "Marketplace for premium rice",
    iconSrc: "/images/svg/frontpage/frontpage-decentralized.svg",
    imgSrc: "/images/project/work-details-3.jpg"
  },
  {
    id: 3,
    title: "Carbon Activated",
    slug: "carbon-active",
    text: "marketplace for Carbon Activated",
    iconSrc: "/images/svg/frontpage/frontpage-multidevices.svg",
    imgSrc: "/images/project/work-details-4.jpg"
  },
  {
    id: 4,
    title: "Indonesia Craft",
    slug: "indonesia-craft",
    text: "Marketplace for Indonesia originating hand-made craft.",
    iconSrc: "/images/svg/frontpage/frontpage-greenproduct.svg",
    imgSrc: "/images/project/work-details-1.jpg"
  }
];
const _sfc_main$5 = {
  props: ["addClassName"],
  components: {
    SectionTitle: () => import("./SectionTitle-CNa8w8ti.js")
  },
  data() {
    return {
      productData: featureData
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "site-main-menu" }, _attrs))}><ul><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="has-children">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Products`);
      } else {
        return [
          createTextVNode("Products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="sub-menu"><!--[-->`);
  ssrRenderList($data.productData.slice(0, 6), (product, index) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/products/${product.slug}`,
      class: "link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(product.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(product.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about/company" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const Navigation = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$2
});
const _imports_0 = publicAssetsURL("/images/logo/logo.png");
const _sfc_main$4 = {
  components: {
    Navigation: () => Promise.resolve().then(function() {
      return Navigation;
    })
  },
  data() {
    return {
      isSticky: false
    };
  },
  mounted() {
    (void 0).addEventListener("scroll", () => {
      let scrollPos = (void 0).scrollY;
      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },
  methods: {
    // offcanvas mobile menu
    mobiletoggleClass(addRemoveClass, className) {
      const el = (void 0).querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    //offcanvas search 
    toggleClass(addRemoveClass, className) {
      const el = (void 0).querySelector("#search-popup");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_Navigation = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["header-section header-transparent", { "is-sticky": $data.isSticky }]
  }, _attrs))}><div class="header-inner"><div class="container position-relative"><div class="row justify-content-between align-items-center"><div class="col-xl-2 col-auto order-0"><div class="header-logo">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img style="${ssrRenderStyle({ "opacity": "0.5" })}" class="dark-logo"${ssrRenderAttr("src", _imports_0)} alt="Agency Logo"${_scopeId}><img style="${ssrRenderStyle({ "opacity": "0.5" })}" class="light-logo"${ssrRenderAttr("src", _imports_0)} alt="Agency Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            style: { "opacity": "0.5" },
            class: "dark-logo",
            src: _imports_0,
            alt: "Agency Logo"
          }),
          createVNode("img", {
            style: { "opacity": "0.5" },
            class: "light-logo",
            src: _imports_0,
            alt: "Agency Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1"><div class="menu-column-area d-none d-xl-block position-static">`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  _push(`</div><div class="header-search-area"></div><div class="header-mobile-menu-toggle d-xl-none ml-sm-2"><button class="toggle"><i class="icon-top"></i><i class="icon-middle"></i><i class="icon-bottom"></i></button></div></div><div class="col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2"><a href="https://shop.javaraya.co.uk" class="btn btn-light btn-hover-primary" target="_blank">Shop Now</a></div><div class="col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/download",
    class: "btn btn-light btn-hover-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Download App`);
      } else {
        return [
          createTextVNode("Download App")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  mounted() {
    const offCanvasNav = (void 0).querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");
    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }
    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;
    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }
    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
    const sideMenuExpand = (e) => {
      e.currentTarget.parentElement.classList.toggle("active");
    };
    const closeMobileMenu = () => {
      const offcanvasMobileMenu = (void 0).querySelector("#offcanvas-mobile-menu");
      offcanvasMobileMenu == null ? void 0 : offcanvasMobileMenu.classList.remove("active");
    };
  },
  props: ["addClassName"],
  components: {
    SectionTitle: () => import("./SectionTitle-CNa8w8ti.js")
  },
  data() {
    return {
      productData: featureData
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-navigation" }, _attrs))}><nav class="offcanvas-navigation" id="offcanvas-navigation"><ul><li class="menu-item-has-children">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="has-children">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Products`);
      } else {
        return [
          createTextVNode("Products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--[-->`);
  ssrRenderList($data.productData.slice(0, 6), (product, index) => {
    _push(`<ul class="sub-menu"><li>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/products/${product.slug}`,
      class: "link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(product.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(product.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li></ul>`);
  });
  _push(`<!--]--></li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about/company" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileNavigation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const MobileNavigation = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$1
});
const _sfc_main$2 = {
  components: {
    MobileNavigation: () => Promise.resolve().then(function() {
      return MobileNavigation;
    })
  },
  methods: {
    // offcanvas menu close
    mobiletoggleClass(addRemoveClass, className) {
      const el = (void 0).querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_MobileNavigation = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "popup-mobile-menu popup-mobile-visiable",
    id: "offcanvas-menu"
  }, _attrs))}><div class="mobile-menu-overlay"></div><div class="inner custom-scrollbar"><div class="mobile-header"><div class="logo">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="site logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: "site logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><button class="mobile-close-btn"></button></div><div class="menu-content">`);
  _push(ssrRenderComponent(_component_MobileNavigation, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OffCanvasMobileMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  methods: {
    // offcanvas search close
    toggleClass(addRemoveClass, className) {
      const el = (void 0).querySelector("#search-popup");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "main-search-active",
    id: "search-popup"
  }, _attrs))}><div class="sidebar-search-icon"><button class="search-close"><i class="fa fa-times"></i></button></div><div class="sidebar-search-input"><form><div class="form-search"><input id="search" class="input-text" value="" placeholder="" type="search"><button><i class="fa fa-search"></i></button></div></form><p class="form-description">Hit enter to search</p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchPopup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const footerAboutWidget = {
  logoSrc: "/images/logo/footer-logo.png",
  telephone: "0123456789",
  email: "demo@example.com",
  fbUrl: "https://www.facebook.com/",
  twitterUrl: "https://twitter.com/",
  instagramUrl: "https://www.instagram.com/"
};
const footerLinkTitleOne = "Our Store";
const navListOne = [
  {
    navTitle: "Retail",
    navUrl: "https://shop.javaraya.co.uk",
    target: "_blank"
  },
  {
    navTitle: "Materials and Metals",
    navUrl: "/business/material",
    target: ""
  }
];
const footerLinkTitleTwo = "Products";
const navListTwo = [
  {
    navTitle: "Elementor Guru",
    navUrl: "/"
  },
  {
    navTitle: "WooLentor Pro",
    navUrl: "/"
  },
  {
    navTitle: "Plugins",
    navUrl: "/"
  },
  {
    navTitle: "Page Builder",
    navUrl: "/"
  }
];
const footerLinkTitleThree = "About";
const navListThree = [
  {
    navTitle: "Company",
    navUrl: "/about/company",
    target: ""
  },
  {
    navTitle: "Privacy",
    navUrl: "/about/privacy",
    target: ""
  },
  {
    navTitle: "Contact Form",
    navUrl: "https://form.jotform.com/240958272825162",
    target: "_blank"
  },
  {
    navTitle: "Refund",
    navUrl: "/about/refund",
    target: "_blank"
  },
  {
    navTitle: "Term and Condition",
    navUrl: "/about/tandc",
    target: "_blank"
  }
];
const footerLinkTitleFour = "Contact";
const navListFour = [
  {
    navTitle: "Support Ticket",
    navUrl: "/"
  },
  {
    navTitle: "Help Desk",
    navUrl: "/"
  },
  {
    navTitle: "Live Chat",
    navUrl: "/"
  },
  {
    navTitle: "FAQs",
    navUrl: "/"
  }
];
const footerData = {
  footerAboutWidget,
  footerLinkTitleOne,
  navListOne,
  footerLinkTitleTwo,
  navListTwo,
  footerLinkTitleThree,
  navListThree,
  footerLinkTitleFour,
  navListFour
};
const _sfc_main = {
  data() {
    return {
      footerData
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "footer-section",
    style: { backgroundColor: "#030e22" }
  }, _attrs))}><div class="container"><div class="row section-padding pt-0 mtn-30"><div class="col-md-4 col-sm-6 col-12 mt-30"><div class="footer-widget"><div class="footer-logo">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $data.footerData.footerAboutWidget.logoSrc)} alt="Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $data.footerData.footerAboutWidget.logoSrc,
            alt: "Logo"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30"><div class="footer-widget"><h4 class="footer-widget-title">${ssrInterpolate($data.footerData.footerLinkTitleOne)}</h4><div class="footer-widget-content"><ul><!--[-->`);
  ssrRenderList($data.footerData.navListOne, (nav, index) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: nav.navUrl,
      target: nav.target
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(nav.navTitle)}`);
        } else {
          return [
            createTextVNode(toDisplayString(nav.navTitle), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div></div><div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30"><div class="footer-widget"><h4 class="footer-widget-title">${ssrInterpolate($data.footerData.footerLinkTitleThree)}</h4><div class="footer-widget-content"><ul><!--[-->`);
  ssrRenderList($data.footerData.navListThree, (nav, index) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: nav.navUrl,
      target: nav.target
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(nav.navTitle)}`);
        } else {
          return [
            createTextVNode(toDisplayString(nav.navTitle), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div></div></div><div class="row"><div class="col"><p class="copyright">© 2024 Java Raya International LTD.</p></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as _,
  __nuxt_component_1 as a,
  __nuxt_component_2 as b,
  __nuxt_component_8 as c,
  featureData as f
};
//# sourceMappingURL=TheFooter-DF5NQnro.js.map
