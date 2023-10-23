import { defineComponent, resolveComponent, useSSRContext } from "vue";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const Redirect_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  props: ["data", "redirect"],
  data() {
    return {
      data: this.data.data,
      redirect: this.redirect
    };
  },
  components: {
    Link,
    Head
  },
  methods: {
    toRedirect() {
      setTimeout(() => {
        window.location.assign(this.redirect);
      }, 5e3);
    }
  },
  mounted() {
    if (this.redirect) {
      this.toRedirect();
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.data.headTitle
  }, null, _parent));
  _push(`<section class="vh-100"><div class="container-fluid h-100" style="${ssrRenderStyle({ "background-image": "url(/assets/images/redirect/bg.png)" })}"><div class="row d-flex justify-content-around align-items-center h-100"><div class="col-md-9 col-lg-6 col-xl-5"><img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image"></div><div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1"><div class="text-white text-center"><div id="circle"><div class="loader"><div class="loader"><div class="loader"><div class="loader"><div class="loader"></div></div></div></div></div></div>`);
  if (_ctx.data.success) {
    _push(`<h2 class="mb-4 text-white">Redirecting...</h2>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h1 class="mb-4 text-white">${ssrInterpolate(_ctx.data.title)}</h1><p class="mb-0 fs-4">${ssrInterpolate(_ctx.data.message)}</p></div></div></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Survey/Redirect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Redirect = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Redirect as default
};
