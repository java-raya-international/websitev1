import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from './TheFooter-DuWgzPvK.mjs';
import { _ as __nuxt_component_3 } from './BreadcrumbOne-CcR3NFKv.mjs';
import __nuxt_component_1$1 from './BlogGridItem-B1iyPgHc.mjs';
import { _ as __nuxt_component_5 } from './CallToActionTwo-D0AmQG_q.mjs';
import { b as blogData } from './blog-Zc0eEkLF.mjs';
import { mergeProps, useSSRContext } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-P6SDANQl.mjs';
import 'file://E:/Projects/JavaRayaInternational/website/node_modules/ufo/dist/index.mjs';
import './SectionTitle-dTGhT3J2.mjs';
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

const _sfc_main = {
  data() {
    return {
      blogData,
      slug: this.$route.params.slug
    };
  },
  computed: {
    tagsBlog() {
      return this.blogData.filter((item) => item.tags.includes(this.slug));
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
    title: "Find all our latest news by tag",
    backgroundUrl: "/images/bg/breadcrumb-bg-four.jpg"
  }, null, _parent));
  _push(`<div class="section-padding fix"><div class="container"><div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"><!--[-->`);
  ssrRenderList($options.tagsBlog, (blog, index) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/tags/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-BRkuilPX.mjs.map
