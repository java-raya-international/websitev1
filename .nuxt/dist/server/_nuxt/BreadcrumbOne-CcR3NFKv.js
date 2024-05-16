import { _ as __nuxt_component_0 } from "./nuxt-link-P6SDANQl.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  props: ["activePageName", "title", "backgroundUrl"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "page-title-section section-padding-top bg-cover",
    "data-overlay": "0.7",
    style: { backgroundImage: `url(${$props.backgroundUrl})` }
  }, _attrs))}><div class="page-title"><div class="container"><h1 class="title">${ssrInterpolate($props.title)}</h1></div></div><div class="page-breadcrumb position-static"><div class="container"><ul class="breadcrumb page-breadcrumb"><li class="breadcrumb-item">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
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
  _push(`</li><li class="breadcrumb-item"><span>${ssrInterpolate($props.activePageName)}</span></li></ul></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BreadcrumbOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_3 as _
};
//# sourceMappingURL=BreadcrumbOne-CcR3NFKv.js.map
