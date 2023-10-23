import { defineComponent, mergeProps, useSSRContext } from "vue";
/* empty css                 */import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  props: ["contact"]
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6" }, _attrs))}><div class="d-flex flex-column py-2">`);
  if (_ctx.contact.is_primary == 1) {
    _push(`<div class="d-flex align-items-center fs-5 fw-bold mb-5">`);
    if (((_a = _ctx.contact) == null ? void 0 : _a.is_primary) == 1) {
      _push(`<span class="badge badge-light-success fs-7">Primary</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="fs-6 fw-semibold text-gray-600">${ssrInterpolate((_b = _ctx.contact) == null ? void 0 : _b.name)} <br>${ssrInterpolate((_c = _ctx.contact) == null ? void 0 : _c.email)} <br>${ssrInterpolate((_d = _ctx.contact) == null ? void 0 : _d.phone)} <br>${ssrInterpolate((_f = (_e = _ctx.contact) == null ? void 0 : _e.country) == null ? void 0 : _f.display_name)}</div></div>`);
  ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Client/Components/ContactCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ContactCard as default
};
