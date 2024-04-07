import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from "./TheFooter-DuWgzPvK.js";
import { _ as __nuxt_component_3 } from "./BreadcrumbOne-CcR3NFKv.js";
import __nuxt_component_1$1 from "./BlogGridItem-B1iyPgHc.js";
import { _ as __nuxt_component_5 } from "./CallToActionTwo-D0AmQG_q.js";
import { b as blogData } from "./blog-Zc0eEkLF.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-P6SDANQl.js";
import "ufo";
import "./SectionTitle-dTGhT3J2.js";
import "#internal/nitro";
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
const _sfc_main = {
  data() {
    return {
      blogData,
      slug: this.$route.params.slug
    };
  },
  computed: {
    categoriesBlog() {
      return this.blogData.filter((item) => item.categories.includes(this.slug));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_BlogGridItem = __nuxt_component_1$1;
  const _component_CallToActionTwo = __nuxt_component_5;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: $data.slug,
    title: "Find all our latest news by category",
    backgroundUrl: "/images/bg/breadcrumb-bg-four.jpg"
  }, null, _parent));
  _push(`<div class="section-padding fix"><div class="container"><div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"><!--[-->`);
  ssrRenderList($options.categoriesBlog, (blog, index) => {
    _push(`<div class="col mt-30">`);
    _push(ssrRenderComponent(_component_BlogGridItem, { blog }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
  _push(ssrRenderComponent(_component_CallToActionTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/categories/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-Dt4GWqb4.js.map
