import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from './TheFooter-LpdXcdqE.mjs';
import { _ as __nuxt_component_3 } from './BreadcrumbOne-CcR3NFKv.mjs';
import __nuxt_component_0$1 from './SectionTitle-CNa8w8ti.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const downloadData = [
  {
    id: 1,
    title: "Android Mobile",
    slug: "mobile-android",
    text: "Android 9 and latest ",
    iconSrc: "/images/svg/download/download-mobile-android.svg",
    imgSrc: "/images/project/work-details-1.jpg"
  },
  {
    id: 2,
    title: "IOS Mobile",
    slug: "mobile-ios",
    text: "IOS 12 and latest",
    iconSrc: "/images/svg/download/download-mobile-ios.svg",
    imgSrc: "/images/project/work-details-2.jpg"
  },
  {
    id: 3,
    title: "Android TV",
    slug: "tv-android",
    text: "Android 9 and latest",
    iconSrc: "/images/svg/download/download-tv-android.svg",
    imgSrc: "/images/project/work-details-3.jpg"
  }
];
const _sfc_main$1 = {
  props: ["addClassName"],
  components: {
    SectionTitle: () => import('./SectionTitle-CNa8w8ti.mjs')
  },
  data() {
    return {
      downloadData
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding-t90-b100" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    title: "Unique Marketplace APP",
    "sub-title": "Shopping with better experiences",
    "add-class-name": "mb-60"
  }, null, _parent));
  _push(`<div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"><!--[-->`);
  ssrRenderList($data.downloadData.slice(0, 3), (download, index2) => {
    _push(`<div class="col mt-30" data-aos="fade-up"><div class="${ssrRenderClass([$props.addClassName, "icon-box text-center"])}" style="${ssrRenderStyle({ "height": "400px" })}"><div class="icon"><img${ssrRenderAttr("src", download.iconSrc)}${ssrRenderAttr("alt", download.title)} style="${ssrRenderStyle({ "height": "50px" })}"></div><div class="content"><h3 class="title">${ssrInterpolate(download.title)}</h3><div class="desc"><p>${ssrInterpolate(download.text)}</p></div><div> Still in development </div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DownloadAppList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_DownloadAppList = __nuxt_component_4;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: "Download",
    title: "",
    backgroundUrl: "/images/bg/breadcrumb-bg-darkgray.png"
  }, null, _parent));
  _push(ssrRenderComponent(_component_DownloadAppList, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/download/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-uTpgw-6Y.mjs.map
