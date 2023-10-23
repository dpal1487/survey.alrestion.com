import { defineComponent, useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  components: {
    Link
  },
  props: {
    links: Array
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  if (_ctx.links.length > 3) {
    _push(`<ul${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))}><!--[-->`);
    ssrRenderList(_ctx.links, (link, key) => {
      _push(`<!--[-->`);
      if (link.url === null) {
        _push(`<li class="page-item disabled"><span class="page-link" aria-hidden="true">${link.label}</span></li>`);
      } else {
        _push(ssrRenderComponent(_component_Link, {
          class: ["page-item", { "active": link.active }],
          href: link.url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="page-link" aria-hidden="true"${_scopeId}>${link.label}</span>`);
            } else {
              return [
                createVNode("span", {
                  class: "page-link",
                  "aria-hidden": "true",
                  innerHTML: link.label
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 2
        }, _parent));
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Pagination as P
};
