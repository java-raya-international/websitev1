import { mergeProps, useSSRContext } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL, _ as _export_sfc } from './server.mjs';
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

const _imports_0 = publicAssetsURL("/images/others/page-404-image.png");
const _sfc_main = {
  props: ["error"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "error404" }, _attrs))} data-v-aec0da7f><div class="container" data-v-aec0da7f><div class="row" data-v-aec0da7f><div class="col-md-12 text-center" data-v-aec0da7f><div class="error-image" data-v-aec0da7f><img class="img-fluid"${ssrRenderAttr("src", _imports_0)} alt="Not Found Image" data-v-aec0da7f></div>`);
  if ($props.error.statusCode === 404) {
    _push(`<h1 class="error-404-title text-white" data-v-aec0da7f>Oops! Page not found!</h1>`);
  } else {
    _push(`<h1 class="error-404-title text-white" data-v-aec0da7f>An error occurred</h1>`);
  }
  _push(`<div class="error-buttons" data-v-aec0da7f><button class="btn btn-primary btn-hover-secondary" data-v-aec0da7f><span class="button-text" data-v-aec0da7f>Go back previous page</span></button></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-aec0da7f"]]);

export { error as default };
//# sourceMappingURL=error-D3f_nLNl.mjs.map
