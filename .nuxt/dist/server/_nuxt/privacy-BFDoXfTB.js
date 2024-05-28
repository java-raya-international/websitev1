import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from "./TheFooter-DOCpy3rk.js";
import { _ as __nuxt_component_3 } from "./BreadcrumbOne-CcR3NFKv.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-P6SDANQl.js";
import "ufo";
import "#internal/nuxt/paths";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "devalue";
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
    activePageName: "About - Privacy",
    title: "Privacy Policy",
    backgroundUrl: "/images/bg/breadcrumb-bg-darkgray.png"
  }, null, _parent));
  _push(`<h1>Privacy Policy</h1><p>This privacy policy (&quot;Policy&quot;) describes how [Your Company Name] (&quot;Company&quot;) collects, uses, and shares personal data when using this website (the &quot;Site&quot;). Please read the following information carefully to understand our practices regarding your personal data and how we will treat it.</p><h2>Information We Collect</h2><p>We may collect the following types of personal data:</p><ul><li>Contact Information (such as name, email address, mailing address, and phone number)</li><li>Payment Information (such as credit card details)</li><li>Demographic Information (such as age, gender, and location)</li><li>Other information you provide voluntarily (such as product reviews, surveys, or preferences)</li></ul><h2>How We Use Your Information</h2><p>We may use your personal data for the following purposes:</p><ul><li>To process and fulfill your orders</li><li>To communicate with you about your orders, account, or inquiries</li><li>To personalize your experience on the Site</li><li>To improve our products and services</li><li>To detect and prevent fraud or security breaches</li><li>To comply with legal obligations</li></ul><h2>Information Sharing</h2><p>We may share your personal data with:</p><ul><li>Service providers who assist us in operating the Site, processing orders, or delivering products</li><li>Third-party analytics providers to help us understand how users interact with the Site</li><li>Law enforcement agencies, government bodies, or other third parties when required by law or to protect our legal rights</li></ul><h2>Security</h2><p>We take appropriate measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.</p><h2>Changes to This Policy</h2><p>We may update this Policy from time to time. We will notify you of any changes by posting the new Policy on this page.</p><h2>Contact Us</h2><p>If you have any questions or concerns about this Policy, please contact us at Contact Form.</p>`);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  privacy as default
};
//# sourceMappingURL=privacy-BFDoXfTB.js.map
