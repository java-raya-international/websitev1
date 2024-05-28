import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from './TheFooter-DOCpy3rk.mjs';
import { _ as __nuxt_component_3 } from './BreadcrumbOne-CcR3NFKv.mjs';
import { s as serviceData } from './service-BNn5Gqwr.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import 'vue-router';

const _sfc_main = {
  data() {
    return {
      serviceData,
      slug: this.$route.params.slug
    };
  },
  computed: {
    service() {
      return this.serviceData.find((service) => service.slug === this.slug);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: $data.slug,
    title: $data.slug,
    backgroundUrl: "/images/bg/breadcrumb-bg-two.jpg"
  }, null, _parent));
  _push(`<section class="service-details-wrapper section-padding pb-125"><div class="container"><div class="row"><div class="col-lg-4 mtn-40 order-2 order-lg-1"><div class="service-details-widget"><div class="service-single-widget mt-40" style="${ssrRenderStyle({ backgroundColor: "#f8faff" })}"><h4 class="service-widget-title">Services</h4><ul class="service-list"><li><a href="#">Agency</a></li><li><a href="#">Banking</a></li><li><a href="#">Technology</a></li><li><a href="#">Financial</a></li><li><a href="#">Marketing</a></li><li><a href="#">Construction</a></li></ul></div><div class="service-single-widget mt-40" style="${ssrRenderStyle({ backgroundColor: "#f8faff" })}"><h4 class="service-widget-title">Download Brochure</h4><ul class="service-list"><li><a href="#">Brochures.PDF</a></li><li><a href="#">Brochures.DOC</a></li></ul></div></div></div><div class="col-lg-8 order-1 order-lg-2"><div class="service-details"><div class="service-details-thumb"><img${ssrRenderAttr("src", $options.service.imgSrc)}${ssrRenderAttr("alt", $options.service.title)}></div><h3 class="mt-4 mb-3">${ssrInterpolate($options.service.title)}</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sunt perspiciatis error id ipsa atque unde quis dolore nobis eum aperiam enim blanditiis pariatur inventore eius commodi consectetur ut. Totam, assumenda! Laboriosam possimus, corporis dicta!</p><p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aliquid quod, officiis unde nostrum itaque! Adipisci dolorum, ab dolor, exercitationem praesentium dolorem quo voluptatum itaque dignissimos, sit esse cupiditate. Doloremque rerum similique a nobis placeat in illum, quo quaerat, ut repellat, fuga itaque? Nihil mollitia nisi, nam, accusantium nemo consequuntur reiciendis autem dicta consequatur earum beatae dolor distinctio, debitis repudiandae?</p><div class="row"><div class="col-sm-6"><div class="service-details-content mt-30"><h4>Project Analysis</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>Project Costing</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>Project Planning</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p></div></div><div class="col-sm-6"><div class="service-details-content mt-30"><h4>Project Strategy</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?</p></div></div></div></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-D7pT_Ob3.mjs.map
