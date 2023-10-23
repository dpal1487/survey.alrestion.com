import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import ApiTokenManager from "./ApiTokenManager-0ade98d3.mjs";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Button-2d51159e.mjs";
import "./Input-3696eefa.mjs";
import "./Checkbox-d9801863.mjs";
import "./Label-ee7576bd.mjs";
import "@inertiajs/inertia-vue3";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  props: ["tokens", "availablePermissions", "defaultPermissions"],
  components: {
    ApiTokenManager,
    AppLayout
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_api_token_manager = resolveComponent("api-token-manager");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "API Tokens" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="h4 font-weight-bold"${_scopeId}> API Tokens </h2>`);
      } else {
        return [
          createVNode("h2", { class: "h4 font-weight-bold" }, " API Tokens ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_api_token_manager, {
          tokens: _ctx.tokens,
          "available-permissions": _ctx.availablePermissions,
          "default-permissions": _ctx.defaultPermissions
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_api_token_manager, {
            tokens: _ctx.tokens,
            "available-permissions": _ctx.availablePermissions,
            "default-permissions": _ctx.defaultPermissions
          }, null, 8, ["tokens", "available-permissions", "default-permissions"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
