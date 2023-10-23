import { defineComponent, useSSRContext, mergeProps } from "vue";
import "./AppLayout-c769c24f.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  components: {
    Link
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-toolbar py-3 py-lg-6" }, _attrs))}><div class="app-container container-fluid d-flex flex-stack"><div class="page-title d-flex flex-column justify-content-center flex-wrap me-3"><h1 class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0"> Projects</h1><ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1"><li class="breadcrumb-item text-muted"></li><li class="breadcrumb-item"><span class="bullet bg-gray-400 w-5px h-2px"></span></li></ul></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppToolbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppToolbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AppToolbar as A
};
