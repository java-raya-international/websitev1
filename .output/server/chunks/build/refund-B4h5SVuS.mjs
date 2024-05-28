import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from './TheFooter-DOCpy3rk.mjs';
import { _ as __nuxt_component_3 } from './BreadcrumbOne-CcR3NFKv.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: "Refund",
    title: "Refund",
    backgroundUrl: "/images/bg/breadcrumb-bg-darkgray.png"
  }, null, _parent));
  _push(`<h1>No Refund Policy</h1><p>We regret to inform you that we do not offer refunds for any products purchased on this website.</p><p>All sales are final. Please make sure to review your order carefully before completing the purchase.</p><p>If you have any questions or concerns about your order, please contact our customer support team for assistance.</p><p>Thank you for your understanding.</p>`);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/refund.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const refund = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { refund as default };
//# sourceMappingURL=refund-B4h5SVuS.mjs.map
