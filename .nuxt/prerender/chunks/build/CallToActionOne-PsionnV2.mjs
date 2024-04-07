import __nuxt_component_0 from './SectionTitle-CNa8w8ti.mjs';
import __nuxt_component_0$1 from './ShapeWithAnimation-DeiqOjdO.mjs';
import { mergeProps, useSSRContext } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file://E:/Projects/JavaRayaInternational/website/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0, a as _imports_2 } from './virtual_public-CilrpQp_.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_1 = publicAssetsURL("/images/svg/linea/linea-basic-message-txt.svg");
const _sfc_main = {
  components: {
    SectionTitle: () => import('./SectionTitle-CNa8w8ti.mjs'),
    ShapeWithAnimation: () => import('./ShapeWithAnimation-DeiqOjdO.mjs')
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0;
  const _component_shape_with_animation = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-t90-b100 overflow-hidden" }, _attrs))}><div class="container shape-animate">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    title: "We are a full-service creative agency",
    "sub-title": "Our team of designers, developers and creatives are perfectionists who love what they do and love where they work",
    "add-class-name": "mb-30"
  }, null, _parent));
  _push(`<div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"><div class="col mt-30" data-aos="fade-up"><div class="contact-info"><div class="icon"><img class="svgInject"${ssrRenderAttr("src", _imports_0)} alt="Icon"></div><div class="info"><h4 class="title">Our Locations</h4><span class="info-text"> 110 W 34th St, NYC. <br> 67 Madison Avenue.</span></div></div></div><div class="col mt-30" data-aos="fade-up"><div class="contact-info"><div class="icon"><img class="svgInject"${ssrRenderAttr("src", _imports_1)} alt="Icon"></div><div class="info"><h4 class="title">Give Us A Call</h4><span class="info-text"> 0123456789 <br> 0123456789</span></div></div></div><div class="col mt-30" data-aos="fade-up"><div class="contact-info"><div class="icon"><img class="svgInject"${ssrRenderAttr("src", _imports_2)} alt="Icon"></div><div class="info"><h4 class="title">Help Desk</h4><span class="info-text"><a href="mailto:demo@example.com">demo@example.com</a><br><a href="mailto:demo@example.com">demo@example.com</a></span></div></div></div></div>`);
  _push(ssrRenderComponent(_component_shape_with_animation, {
    "add-class-name": "shape-1",
    "data-depth": "4",
    "img-src": "/images/shape-animation/video-shape-1.png"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CallToActionOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_11 as _ };
//# sourceMappingURL=CallToActionOne-PsionnV2.mjs.map
