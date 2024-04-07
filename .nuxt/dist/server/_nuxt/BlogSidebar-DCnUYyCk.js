import { _ as __nuxt_component_0 } from "./nuxt-link-P6SDANQl.js";
import { b as blogData } from "./blog-Zc0eEkLF.js";
import { mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  data() {
    return {
      blogData
    };
  },
  computed: {
    allCategories() {
      return [...new Set(this.blogData.flatMap((item) => item.categories))];
    },
    allTags() {
      return [...new Set(this.blogData.flatMap((item) => item.tags))];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar-widget-wrapper" }, _attrs))}><div class="sidebar-widget"><div class="sidebar-widget-content"><div class="sidebar-widget-search"><form><input type="text" placeholder="Search..."><button><i class="fas fa-search"></i></button></form></div></div></div><div class="sidebar-widget"><h3 class="sidebar-widget-title mb-2">Categories</h3><div class="sidebar-widget-content"><ul class="sidebar-widget-cate-list"><!--[-->`);
  ssrRenderList($options.allCategories, (category, i) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/blog/categories/${category}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="text"${_scopeId}>${ssrInterpolate(category)}</span> <span class="count"${_scopeId}>${ssrInterpolate(`${category.length}`.padStart(2, 0))}</span>`);
        } else {
          return [
            createVNode("span", { class: "text" }, toDisplayString(category), 1),
            createTextVNode(),
            createVNode("span", { class: "count" }, toDisplayString(`${category.length}`.padStart(2, 0)), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div><div class="sidebar-widget"><h3 class="sidebar-widget-title mb-2">Popular Posts</h3><div class="sidebar-widget-content"><ul class="sidebar-widget-list-post"><!--[-->`);
  ssrRenderList($data.blogData, (blog, i) => {
    _push(`<li><span class="cate"><!--[-->`);
    ssrRenderList(blog.categories.slice(0, 1), (cat, i2) => {
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/blog/categories/${cat}`,
        key: i2
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(cat)}`);
          } else {
            return [
              createTextVNode(toDisplayString(cat), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
    });
    _push(`<!--]--></span>`);
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
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div><div class="sidebar-widget"><div class="sidebar-widget-content"><div class="sidebar-widget-banner bg-cover" data-overlay="0.7" style="${ssrRenderStyle({ backgroundImage: `url('/images/bg/breadcrumb-bg.jpg')` })}"><h3 class="title">Subscribe to our newsletter</h3><p>All the latest marketing news, including updates on brand campaigns, and the most interesting insights</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Subscribe Now`);
      } else {
        return [
          createTextVNode("Subscribe Now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="sidebar-widget"><h3 class="sidebar-widget-title">Popular tags</h3><div class="sidebar-widget-content"><div class="tagcloud"><!--[-->`);
  ssrRenderList($options.allTags, (tag, i) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/blog/tags/${tag}`,
      key: i
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(tag)}`);
        } else {
          return [
            createTextVNode(toDisplayString(tag), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogSidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_4 as _
};
//# sourceMappingURL=BlogSidebar-DCnUYyCk.js.map
