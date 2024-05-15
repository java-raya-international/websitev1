import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import 'vue-router';

const _sfc_main = {
  props: ["blog"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog" }, _attrs))}><div class="thumbnail">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: `/blog/${$props.blog.slug}`,
    class: "image"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", $props.blog.imgSrc)}${ssrRenderAttr("alt", $props.blog.title)}${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: $props.blog.imgSrc,
            alt: $props.blog.title
          }, null, 8, ["src", "alt"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="info"><ul class="meta"><li><i class="far fa-calendar"></i>${ssrInterpolate($props.blog.date)}</li><li><i class="far fa-eye"></i>${ssrInterpolate($props.blog.view)} Views</li></ul><h3 class="title">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: `/blog/${$props.blog.slug}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.blog.title)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.blog.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: `/blog/${$props.blog.slug}`,
    class: "link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<mark${_scopeId}>Read More</mark>`);
      } else {
        return [
          createVNode("mark", null, "Read More")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogGridItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=BlogGridItem-DZCk99LJ.mjs.map
