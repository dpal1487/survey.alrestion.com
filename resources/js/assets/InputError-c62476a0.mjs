import { defineComponent, useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  props: ["message"]
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: _ctx.message ? null : { display: "none" },
    class: "invalid-feedback",
    role: "alert"
  }, _attrs))}><strong>${ssrInterpolate(_ctx.message)}</strong></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/jetstream/InputError.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InputError = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  InputError as I
};
