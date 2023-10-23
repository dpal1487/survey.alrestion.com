import { defineComponent, resolveComponent, withCtx, withDirectives, createVNode, vShow, createTextVNode, withModifiers, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { J as JetAuthenticationCard, a as JetAuthenticationCardLogo } from "./AuthenticationCardLogo-ee909027.mjs";
import { P as PrimaryButton } from "./Button-2d51159e.mjs";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetCheckbox } from "./Checkbox-d9801863.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    PrimaryButton,
    JetInput,
    JetCheckbox,
    JetLabel,
    JetValidationErrors,
    InputError,
    Link
  },
  validations() {
    return {
      form: {
        email: {
          required,
          email
        },
        password: {
          required,
          min: minLength(6)
        }
      }
    };
  },
  data() {
    return {
      form: this.$inertia.form({
        email: "",
        password: "",
        remember: false
      })
    };
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.form.transform((data) => ({
          ...data,
          remember: this.form.remember ? "on" : ""
        })).post(this.route("login"), {
          onFinish: () => this.form.reset("password")
        });
      }
    },
    authProvider(provider) {
      let self = this;
      this.$auth.authenticate(provider).then((response) => {
        self.socialLogin(provider, response);
      }).catch((err) => {
        console.log({ err });
      });
    },
    socialLogin(provider, response) {
      this.$http.post("/social/" + provider, response).then((response2) => {
        return response2.data.token;
      }).catch((err) => {
        console.log({ err });
      });
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_authentication_card = resolveComponent("jet-authentication-card");
  const _component_JetValidationErrors = resolveComponent("JetValidationErrors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_input_error = resolveComponent("input-error");
  const _component_primary_button = resolveComponent("primary-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Log in" }, null, _parent));
  _push(ssrRenderComponent(_component_jet_authentication_card, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<form class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"${_scopeId}><div class="text-center mb-11"${_scopeId}><h1 class="text-dark fw-bolder mb-3"${_scopeId}> Sign In </h1></div>`);
        _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
        _push2(`<div class="fv-row mb-8 fv-plugins-icon-container"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Email"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "email",
          type: "email",
          modelValue: _ctx.v$.form.email.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.email.$model = $event,
          autofocus: "",
          class: _ctx.v$.form.email.$errors.length > 0 ? "is-invalid" : ""
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.email.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="fv-row mb-8 fv-plugins-icon-container"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "password",
          value: "Password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "password",
          type: "password",
          modelValue: _ctx.v$.form.password.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.password.$model = $event,
          class: _ctx.v$.form.password.$errors.length > 0 ? "is-invalid" : ""
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.password.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="d-grid mb-10"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_primary_button, {
          disabled: _ctx.form.processing,
          class: { "text-white-50": _ctx.form.processing }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm" role="status"${_scopeId2}><span class="visually-hidden"${_scopeId2}>Loading...</span></div> Log in `);
            } else {
              return [
                withDirectives(createVNode("div", {
                  class: "spinner-border spinner-border-sm",
                  role: "status"
                }, [
                  createVNode("span", { class: "visually-hidden" }, "Loading...")
                ], 512), [
                  [vShow, _ctx.form.processing]
                ]),
                createTextVNode(" Log in ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          createVNode("form", {
            onSubmit: withModifiers(_ctx.submit, ["prevent"]),
            class: "form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
          }, [
            createVNode("div", { class: "text-center mb-11" }, [
              createVNode("h1", { class: "text-dark fw-bolder mb-3" }, " Sign In ")
            ]),
            createVNode(_component_JetValidationErrors),
            createVNode("div", { class: "fv-row mb-8 fv-plugins-icon-container" }, [
              createVNode(_component_jet_label, {
                for: "email",
                value: "Email"
              }),
              createVNode(_component_jet_input, {
                id: "email",
                type: "email",
                modelValue: _ctx.v$.form.email.$model,
                "onUpdate:modelValue": ($event) => _ctx.v$.form.email.$model = $event,
                autofocus: "",
                class: _ctx.v$.form.email.$errors.length > 0 ? "is-invalid" : ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.email.$errors, (error, index) => {
                return openBlock(), createBlock("div", { key: index }, [
                  createVNode(_component_input_error, {
                    message: error.$message
                  }, null, 8, ["message"])
                ]);
              }), 128))
            ]),
            createVNode("div", { class: "fv-row mb-8 fv-plugins-icon-container" }, [
              createVNode(_component_jet_label, {
                for: "password",
                value: "Password"
              }),
              createVNode(_component_jet_input, {
                id: "password",
                type: "password",
                modelValue: _ctx.v$.form.password.$model,
                "onUpdate:modelValue": ($event) => _ctx.v$.form.password.$model = $event,
                class: _ctx.v$.form.password.$errors.length > 0 ? "is-invalid" : ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.password.$errors, (error, index) => {
                return openBlock(), createBlock("div", { key: index }, [
                  createVNode(_component_input_error, {
                    message: error.$message
                  }, null, 8, ["message"])
                ]);
              }), 128))
            ]),
            createVNode("div", { class: "d-grid mb-10" }, [
              createVNode(_component_primary_button, {
                disabled: _ctx.form.processing,
                class: { "text-white-50": _ctx.form.processing }
              }, {
                default: withCtx(() => [
                  withDirectives(createVNode("div", {
                    class: "spinner-border spinner-border-sm",
                    role: "status"
                  }, [
                    createVNode("span", { class: "visually-hidden" }, "Loading...")
                  ], 512), [
                    [vShow, _ctx.form.processing]
                  ]),
                  createTextVNode(" Log in ")
                ]),
                _: 1
              }, 8, ["disabled", "class"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Login as default
};
