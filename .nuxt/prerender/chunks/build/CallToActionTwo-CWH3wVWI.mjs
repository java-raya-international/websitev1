import __nuxt_component_0 from './SectionTitle-CNa8w8ti.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  components: {
    SectionTitle: () => import('./SectionTitle-CNa8w8ti.mjs'),
    ShapeWithAnimation: () => import('./ShapeWithAnimation-DeiqOjdO.mjs')
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "section-padding-t110-b120 newsletter-section bg-cover overflow-hidden",
    "data-overlay": "0.7",
    style: { backgroundImage: `url('/images/bg/newsletter.jpg')` }
  }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-lg-12"><div class="cta-content text-center">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    title: "Let\u2019s find out how to work together",
    "sub-title": "Ready to start your project? The contact information collected through this form will only be used to send a response to your inquiry.",
    "add-class-name": "color-light"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact-us",
    class: "btn btn-primary btn-hover-secondary mt-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Get Started`);
      } else {
        return [
          createTextVNode("Get Started")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToActionTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_5 as _ };
//# sourceMappingURL=CallToActionTwo-CWH3wVWI.mjs.map
