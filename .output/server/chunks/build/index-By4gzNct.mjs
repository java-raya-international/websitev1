import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from './TheFooter-DF5NQnro.mjs';
import { _ as __nuxt_component_3 } from './BreadcrumbOne-CcR3NFKv.mjs';
import __nuxt_component_1$1 from './BlogGridItem-DZCk99LJ.mjs';
import { _ as __nuxt_component_5 } from './CallToActionTwo-CWH3wVWI.mjs';
import { b as blogData } from './blog-Zc0eEkLF.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-P6SDANQl.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './SectionTitle-CNa8w8ti.mjs';
import 'vue-router';

const _sfc_main = {
  data() {
    return {
      blogData
    };
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
    activePageName: "Blog Grid",
    title: "Find all our latest news, insights, and events",
    backgroundUrl: "/images/bg/breadcrumb-bg-four.jpg"
  }, null, _parent));
  _push(`<div class="section-padding fix"><div class="container"><div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"><!--[-->`);
  ssrRenderList($data.blogData, (blog, index2) => {
    _push(`<div class="col mt-30">`);
    _push(ssrRenderComponent(_component_BlogGridItem, { blog }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="row mt-50"><div class="col"><ul class="pagination center"><li class="page-item"><a href="#"><i class="fa fa-angle-left"></i></a></li><li class="page-item active"><a href="#">1</a></li><li class="page-item"><a href="#">2</a></li><li class="page-item"><a href="#">3</a></li><li class="page-item"><a href="#"><i class="fa fa-angle-right"></i></a></li></ul></div></div></div></div>`);
  _push(ssrRenderComponent(_component_CallToActionTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-By4gzNct.mjs.map
