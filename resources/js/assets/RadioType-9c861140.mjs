import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="col-10"><input type="text" class="form-control form-control-solid mb-2" name="name[]" placeholder="Item name"></div><div class="col-2"><button type="button" class="btn btn-sm btn-icon btn-active-color-primary"><svg viewPort="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"></line><line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"></line></svg></button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/Components/QuestionTypes/RadioType.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RadioType = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  RadioType as default
};
