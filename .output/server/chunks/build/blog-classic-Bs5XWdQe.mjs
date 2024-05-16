import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from './TheFooter-DF5NQnro.mjs';
import { _ as __nuxt_component_3 } from './BreadcrumbOne-CcR3NFKv.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import { _ as __nuxt_component_4 } from './BlogSidebar-DCnUYyCk.mjs';
import { _ as __nuxt_component_5 } from './CallToActionTwo-CWH3wVWI.mjs';
import { b as blogData } from './blog-Zc0eEkLF.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
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
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_BlogSidebar = __nuxt_component_4;
  const _component_CallToActionTwo = __nuxt_component_5;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: "Blog Classic",
    title: "Find all our latest news, insights, and events",
    backgroundUrl: "/images/bg/breadcrumb-bg-four.jpg"
  }, null, _parent));
  _push(`<div class="section-padding fix"><div class="container"><div class="row mtn-50"><div class="col-lg-8 col-12 order-lg-1 mt-50"><div class="row row-cols-1 no-gutters"><!--[-->`);
  ssrRenderList($data.blogData.slice(0, 3), (blog, index) => {
    _push(`<div class="blog-3 col" data-aos="fade-up"><div class="thumbnail">`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/blog/${blog.slug}`,
      class: "image"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", blog.imgSrc)}${ssrRenderAttr("alt", blog.title)}${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: blog.imgSrc,
              alt: blog.title
            }, null, 8, ["src", "alt"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><div class="info"><ul class="meta"><li><i class="fal fa-pencil-alt"></i> Written by Admin, 10 Oct 2020 </li><li><i class="fas fa-tags"></i> Marketing, UX Design </li><li><i class="fas fa-comments"></i> ${ssrInterpolate(blog.comment)} Comments </li></ul><h3 class="title">`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/blog/${blog.slug}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(blog.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(blog.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h3><div class="desc mb-30"><p>We&#39;ve always known the power of digital, and we&#39;ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.</p></div>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/blog/${blog.slug}`,
      class: "btn btn-primary btn-hover-secondary"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Read More`);
        } else {
          return [
            createTextVNode("Read More")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div><div class="row"><div class="col"><ul class="pagination center"><li class="page-item"><a href="#"><i class="fa fa-angle-left"></i></a></li><li class="page-item active"><a href="#">1</a></li><li class="page-item"><a href="#">2</a></li><li class="page-item"><a href="#">3</a></li><li class="page-item"><a href="#"><i class="fa fa-angle-right"></i></a></li></ul></div></div></div><div class="col-lg-4 col-12 order-lg-2 mt-50">`);
  _push(ssrRenderComponent(_component_BlogSidebar, null, null, _parent));
  _push(`</div></div></div></div>`);
  _push(ssrRenderComponent(_component_CallToActionTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/blog-classic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blogClassic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { blogClassic as default };
//# sourceMappingURL=blog-classic-Bs5XWdQe.mjs.map
