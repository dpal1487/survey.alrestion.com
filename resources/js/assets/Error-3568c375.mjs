import { defineComponent, mergeProps, useSSRContext } from "vue";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  props: ["data"],
  components: {
    Link,
    Head
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "d-flex flex-column flex-root",
    id: "kt_app_root"
  }, _attrs))}><div class="d-flex flex-column flex-center flex-column-fluid"><div class="d-flex flex-column flex-center text-center p-10"><div class="card card-flush w-lg-650px py-5"><div class="card-body py-15 py-lg-20"><h1 class="fw-bolder fs-2qx text-gray-900 mb-4">${ssrInterpolate(_ctx.data.title)}</h1><div class="fw-semibold text-gray-500 mb-7">${ssrInterpolate(_ctx.data.message)}</div><div class="mb-11"><img src="/assets/images/error500.png" class="mw-100 mh-400px theme-light-show" alt=""></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Survey/Error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Error as default
};
