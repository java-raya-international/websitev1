import __nuxt_component_0 from './SectionTitle-CNa8w8ti.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import { f as featureData } from './TheFooter-D3TO_vSB.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: ["addClassName"],
  components: {
    SectionTitle: () => import('./SectionTitle-CNa8w8ti.mjs')
  },
  data() {
    return {
      featureData
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-t90-b100" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    title: "Unique Marketplace APP",
    "sub-title": "Shopping with better experiences",
    "add-class-name": "mb-60"
  }, null, _parent));
  _push(`<div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"><!--[-->`);
  ssrRenderList($data.featureData.slice(0, 6), (feature, index) => {
    _push(`<div class="col mt-30" data-aos="fade-up"><div class="${ssrRenderClass([$props.addClassName, "icon-box text-center"])}" style="${ssrRenderStyle({ "height": "400px" })}"><div class="icon"><img${ssrRenderAttr("src", feature.iconSrc)}${ssrRenderAttr("alt", feature.title)} style="${ssrRenderStyle({ "height": "50px" })}"></div><div class="content"><h3 class="title">${ssrInterpolate(feature.title)}</h3><div class="desc"><p>${ssrInterpolate(feature.text)}</p></div>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/features/${feature.slug}`,
      class: "link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`View Details`);
        } else {
          return [
            createTextVNode("View Details")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=FeatureOne-BfkNGv1I.mjs.map
