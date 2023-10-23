import { defineComponent, useSSRContext, mergeProps, resolveComponent, withCtx, openBlock, createBlock, createVNode } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main$1 = defineComponent({
  components: {
    Link
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    var body = document.getElementById("app_body");
    body.style.justifyContent = "center";
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex flex-column flex-root justify-content-center flex h-md-100" }, _attrs))}><div class="d-flex flex-column flex-lg-row flex-column-fluid"><div class="d-flex flex-lg-row-fluid"><div class="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100"><img class="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src="/assets/media/auth/agency.png" alt=""><img class="theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src="/assets/media/auth/agency-dark.png" alt=""><h1 class="text-gray-800 fs-2qx fw-bold text-center mb-7"> All Research Solution </h1></div></div><div class="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12"><div class="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10"><div class="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px w-300px"><div class="d-flex flex-center flex-column-fluid pb-15 pb-lg-20">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/AuthenticationCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const JetAuthenticationCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  components: {
    Link
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_Link, mergeProps({
    href: "/",
    class: "d-flex justify-content-center mb-4"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg width="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" fill="#6875F5"${_scopeId}></path><path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" fill="#6875F5"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            width: "64",
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",
              fill: "#6875F5"
            }),
            createVNode("path", {
              d: "M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",
              fill: "#6875F5"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/AuthenticationCardLogo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JetAuthenticationCardLogo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  JetAuthenticationCard as J,
  JetAuthenticationCardLogo as a
};
