import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_8 } from './TheFooter-D7uzM24D.mjs';
import { _ as __nuxt_component_3 } from './BreadcrumbOne-CcR3NFKv.mjs';
import { _ as __nuxt_component_4 } from './BlogSidebar-DCnUYyCk.mjs';
import { _ as __nuxt_component_5 } from './CallToActionTwo-CWH3wVWI.mjs';
import { b as blogData } from './blog-Zc0eEkLF.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_1, a as _imports_2, b as _imports_3, c as _imports_4 } from './virtual_public-CgO6mv6Q.mjs';
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
import './SectionTitle-CNa8w8ti.mjs';
import 'vue-router';

const _sfc_main = {
  data() {
    return {
      blogData,
      slug: this.$route.params.slug
    };
  },
  computed: {
    blog() {
      return this.blogData.find((el) => el.slug === this.slug);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHeader = __nuxt_component_0;
  const _component_OffCanvasMobileMenu = __nuxt_component_1;
  const _component_SearchPopup = __nuxt_component_2;
  const _component_BreadcrumbOne = __nuxt_component_3;
  const _component_BlogSidebar = __nuxt_component_4;
  const _component_CallToActionTwo = __nuxt_component_5;
  const _component_TheFooter = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchPopup, null, null, _parent));
  _push(ssrRenderComponent(_component_BreadcrumbOne, {
    activePageName: $data.slug,
    title: $options.blog.title,
    backgroundUrl: "/images/bg/breadcrumb-bg-four.jpg"
  }, null, _parent));
  _push(`<div class="section-padding fix"><div class="container"><div class="row mtn-50"><div class="col-lg-8 col-12 order-lg-1 mt-50"><div class="row row-cols-1 no-gutters"><div class="blog-3 blog-details col" data-aos="fade-up"><div class="thumbnail"><img class="w-100"${ssrRenderAttr("src", $options.blog.imgSrc)}${ssrRenderAttr("alt", $options.blog.title)}></div><div class="info"><h3 class="title">${ssrInterpolate($options.blog.title)}</h3><div class="desc"><p><strong>We&#39;ve always known the power of digital, and we&#39;ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p><p>Even if it is a brave new world for everyone else, for marketers it&#39;s another day in the proverbial office.</p><p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p><p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p><p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That wasn&#39;t ever close to the whole truth, of course, but past company structures \u2014 in which Marketing always played second fiddle to Sales \u2014 allowed that falsehood to persist.</p><p>The pandemic has transformed what the marketing team means to an organization: It&#39;s given us agency. It&#39;s upended the customer journey. It&#39;s redefined how sales and marketing teams should interact. And it&#39;s forced businesses to see the value that marketers provide in a digital world.</p></div><ul class="meta mb-0 mt-4"><li><i class="fal fa-pencil-alt"></i>Written by Admin, 10 Oct 2020</li><li><i class="fas fa-tags"></i>Marketing, UX Design</li><li><i class="fas fa-comments"></i>4 Comments</li><li class="media"><a href="#"><i class="fas fa-share-alt"></i>Share this post</a><div class="list"><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-linkedin"></i></a><a href="#"><i class="fab fa-tumblr-square"></i></a></div></li></ul></div></div><div class="entry-author"><div class="author-info"><div class="author-avatar"><img${ssrRenderAttr("src", _imports_1)} alt="image"></div><div class="author-description"><h6 class="author-name">Eloise Smith</h6><span class="designation">CEO at Flow</span><div class="author-biographical-info"> She is a lawyer, podcaster, speaker, and writer. As an educational content director, she helps develop HasThemes&#39; premium training products. </div></div></div></div><div class="blog-nav-links"><h4 class="title">Related Posts </h4><div class="nav-list"><div class="nav-item prev"><div class="inner"><a href="#"><div class="hover-bg has-thumbnail" style="${ssrRenderStyle({ backgroundImage: `url('/images/pagination/blog-pagination.jpg')` })}"></div><span class="cate">Marketing</span><h6>Eleven top tips for developing agile marketing strategies that work</h6></a></div></div><div class="nav-item next"><div class="inner"><a href="#"><div class="hover-bg has-thumbnail" style="${ssrRenderStyle({ backgroundImage: `url('/images/pagination/blog-pagination-2.jpg')` })}"></div><span class="cate">Startup</span><h6>Growing a startup involves balancing out the financial stack</h6></a></div></div></div></div><div class="comment-list-wrapper"><div class="row"><div class="col-lg-12"><h4 class="title">Comments (4) </h4></div><div class="col-lg-12"><ul class="comment-list"><li class="comment"><div class="comment-2"><div class="comment-author vcard"><img alt=""${ssrRenderAttr("src", _imports_2)}></div><div class="comment-content"><div class="meta"><h6 class="fn">Thomas Smith</h6><div class="comment-datetime"> 10 Oct, 2019. 10:00AM </div></div><div class="comment-text"><p>An interesting article\u200B about \u200Bcontent marketing. It has evolved moving from If you are interested in content marketing, have a look at the article&#39;s traditional media into the digital landscape.</p></div><div class="comment-actions"><a class="comment-reply-link" href="javascript:void(0)">Reply</a></div></div></div></li><li class="children comment"><div class="comment-6"><div class="comment-author vcard"><img alt=""${ssrRenderAttr("src", _imports_3)}></div><div class="comment-content"><div class="meta"><h6 class="fn">Eloise Smith</h6><div class="comment-datetime">10 Oct, 2019. 10:00AM</div></div><div class="comment-text"><p>An interesting article\u200B about \u200Bcontent marketing. It has evolved moving from If you are interested in content marketing, have a look at the article&#39;s traditional media into the digital landscape.</p></div><div class="comment-actions"><a class="comment-reply-link" href="javascript:void(0)">Reply</a></div></div></div></li><li class="comment"><div class="comment-2"><div class="comment-author vcard"><img alt=""${ssrRenderAttr("src", _imports_4)}></div><div class="comment-content"><div class="meta"><h6 class="fn">Stella Smith</h6><div class="comment-datetime"> 10 Oct, 2019. 10:00AM </div></div><div class="comment-text"><p>An interesting article\u200B about \u200Bcontent marketing. It has evolved moving from If you are interested in content marketing, have a look at the article&#39;s traditional media into the digital landscape.</p></div><div class="comment-actions"><a class="comment-reply-link" href="javascript:void(0)">Reply</a></div></div></div></li></ul></div></div></div><div class="comment-form-wrap"><div class="comment-respond"><h3 class="title">Leave a Reply</h3><form action="#" method="post"><div class="row"><div class="col-md-6 col-12 mb-3"><input type="text" placeholder="Your Name *" name="name"></div><div class="col-md-6 col-12 mb-3"><input type="email" placeholder="Email *" name="email"></div><div class="col-12 mb-3"><textarea name="message" placeholder="Your Comment"></textarea></div><div class="col-12 text-left"><button class="btn btn-primary btn-hover-secondary">Submit</button></div></div></form></div></div></div></div><div class="col-lg-4 col-12 order-lg-2 mt-50">`);
  _push(ssrRenderComponent(_component_BlogSidebar, null, null, _parent));
  _push(`</div></div></div></div>`);
  _push(ssrRenderComponent(_component_CallToActionTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-AEkDwROZ.mjs.map
