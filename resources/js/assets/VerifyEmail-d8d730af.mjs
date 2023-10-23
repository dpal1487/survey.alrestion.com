import { defineComponent, resolveComponent, withCtx, createVNode, withDirectives, vShow, createTextVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { J as JetAuthenticationCard, a as JetAuthenticationCardLogo } from "./AuthenticationCardLogo-ee909027.mjs";
import { P as PrimaryButton } from "./Button-2d51159e.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  components: {
    Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton: PrimaryButton,
    Link
  },
  props: {
    status: String
  },
  data() {
    return {
      form: this.$inertia.form()
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("verification.send"));
    }
  },
  computed: {
    verificationLinkSent() {
      return this.status === "verification-link-sent";
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_authentication_card = resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = resolveComponent("jet-authentication-card-logo");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Email Verification" }, null, _parent));
  _push(ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="card-body"${_scopeId}><div class="mb-0"${_scopeId}><img src="/assets/media/auth/please-verify-your-email.png" class="mw-100 mh-300px theme-light-show" alt=""${_scopeId}><img src="/assets/media/auth/please-verify-your-email-dark.png" class="mw-100 mh-300px theme-dark-show" alt=""${_scopeId}></div><div class="mb-3 small text-muted"${_scopeId}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
        if (_ctx.verificationLinkSent) {
          _push2(`<div class="alert alert-success" role="alert"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<form${_scopeId}><div class="mt-4 d-flex justify-content-between"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: { "text-white-50": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm" role="status"${_scopeId2}><span class="visually-hidden"${_scopeId2}>Loading...</span></div> Resend Verification Email `);
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
                createTextVNode(" Resend Verification Email ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("logout"),
          method: "post",
          as: "button",
          class: "btn btn-link"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Log out`);
            } else {
              return [
                createTextVNode("Log out")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form></div>`);
      } else {
        return [
          createVNode("div", { class: "card-body" }, [
            createVNode("div", { class: "mb-0" }, [
              createVNode("img", {
                src: "/assets/media/auth/please-verify-your-email.png",
                class: "mw-100 mh-300px theme-light-show",
                alt: ""
              }),
              createVNode("img", {
                src: "/assets/media/auth/please-verify-your-email-dark.png",
                class: "mw-100 mh-300px theme-dark-show",
                alt: ""
              })
            ]),
            createVNode("div", { class: "mb-3 small text-muted" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
            _ctx.verificationLinkSent ? (openBlock(), createBlock("div", {
              key: 0,
              class: "alert alert-success",
              role: "alert"
            }, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
            createVNode("form", {
              onSubmit: withModifiers(_ctx.submit, ["prevent"])
            }, [
              createVNode("div", { class: "mt-4 d-flex justify-content-between" }, [
                createVNode(_component_jet_button, {
                  class: { "text-white-50": _ctx.form.processing },
                  disabled: _ctx.form.processing
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
                    createTextVNode(" Resend Verification Email ")
                  ]),
                  _: 1
                }, 8, ["class", "disabled"]),
                createVNode(_component_Link, {
                  href: _ctx.route("logout"),
                  method: "post",
                  as: "button",
                  class: "btn btn-link"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Log out")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ], 40, ["onSubmit"])
          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VerifyEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  VerifyEmail as default
};
