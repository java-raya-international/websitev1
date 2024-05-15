import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import 'vue-router';

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
//# sourceMappingURL=error-9gAUjL_l.mjs.map
