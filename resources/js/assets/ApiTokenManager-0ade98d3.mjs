import { defineComponent, useSSRContext, mergeProps, resolveComponent, withCtx, renderSlot, createVNode, openBlock, createBlock, createTextVNode, Fragment, renderList, toDisplayString, createCommentVNode, withDirectives, vShow } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent, ssrRenderTeleport, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import { P as PrimaryButton } from "./Button-2d51159e.mjs";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetCheckbox } from "./Checkbox-d9801863.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
const _sfc_main$b = defineComponent({
  props: ["on"]
});
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(_ctx.on ? null : { display: "none" })}" class="alert alert-success" role="alert"><div class="alert-body">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ActionMessage.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const JetActionMessage = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 px-sm-0" }, _attrs))}><div class="d-flex justify-content-between"><div><h3 class="h5">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</h3><p class="mt-1 text-muted">`);
  ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
  _push(`</p></div><div>`);
  ssrRenderSlot(_ctx.$slots, "aside", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/SectionTitle.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const JetSectionTitle = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = defineComponent({
  components: {
    JetSectionTitle
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_section_title = resolveComponent("jet-section-title");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="col-md-4">`);
  _push(ssrRenderComponent(_component_jet_section_title, null, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "title")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "description")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div><div class="col-md-8"><div class="card shadow-sm"><div class="card-body">`);
  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</div></div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ActionSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const JetActionSection = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    maxWidth: {
      default: "md"
    }
  },
  computed: {
    maxWidthClass() {
      return {
        "sm": "modal-sm",
        "md": null,
        "lg": "modal-lg",
        "xl": "modal-xl"
      }[this.maxWidth];
    }
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderTeleport(_push, (_push2) => {
    _push2(`<div class="modal fade" tabindex="-1"${ssrRenderAttr("id", _ctx.id)}${ssrRenderAttr("aria-labelledby", _ctx.id)} aria-hidden="true"><div class="${ssrRenderClass([_ctx.maxWidthClass, "modal-dialog"])}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
    _push2(`</div></div>`);
  }, "body", false, _parent);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Modal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = defineComponent({
  components: {
    Modal
  },
  props: {
    id: {
      type: String,
      required: true
    },
    maxWidth: {
      default: "2xl"
    }
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_modal = resolveComponent("modal");
  _push(ssrRenderComponent(_component_modal, mergeProps({
    id: _ctx.id,
    "max-width": _ctx.maxWidth
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="modal-content"${_scopeId}><div class="modal-body"${_scopeId}><div class="d-flex justify-content-start"${_scopeId}><div class="me-3"${_scopeId}><div class="bg-warning p-2 rounded-circle"${_scopeId}><svg stroke="currentColor" fill="none" viewBox="0 0 24 24" width="24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"${_scopeId}></path></svg></div></div><div${_scopeId}><h5 class="font-weight-bold"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
        _push2(`</h5>`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div></div></div><div class="modal-footer bg-light"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "modal-content" }, [
            createVNode("div", { class: "modal-body" }, [
              createVNode("div", { class: "d-flex justify-content-start" }, [
                createVNode("div", { class: "me-3" }, [
                  createVNode("div", { class: "bg-warning p-2 rounded-circle" }, [
                    (openBlock(), createBlock("svg", {
                      stroke: "currentColor",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      width: "24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      })
                    ]))
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("h5", { class: "font-weight-bold" }, [
                    renderSlot(_ctx.$slots, "title")
                  ]),
                  renderSlot(_ctx.$slots, "content")
                ])
              ])
            ]),
            createVNode("div", { class: "modal-footer bg-light" }, [
              renderSlot(_ctx.$slots, "footer")
            ])
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ConfirmationModal.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const JetConfirmationModal = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = defineComponent({
  props: {
    type: {
      type: String,
      default: "button"
    }
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: _ctx.type,
    class: "btn btn-danger text-white text-uppercase"
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/DangerButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const JetDangerButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = defineComponent({
  components: {
    Modal
  },
  props: {
    id: {
      type: String,
      required: true
    },
    maxWidth: {
      default: "2xl"
    }
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_modal = resolveComponent("modal");
  _push(ssrRenderComponent(_component_modal, mergeProps({
    id: _ctx.id,
    "max-width": _ctx.maxWidth
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="modal-content"${_scopeId}><div class="modal-header"${_scopeId}><h5 class="modal-title"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
        _push2(`</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"${_scopeId}></button></div><div class="modal-body"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div><div class="modal-footer bg-light"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "modal-content" }, [
            createVNode("div", { class: "modal-header" }, [
              createVNode("h5", { class: "modal-title" }, [
                renderSlot(_ctx.$slots, "title")
              ]),
              createVNode("button", {
                type: "button",
                class: "btn-close",
                "data-bs-dismiss": "modal",
                "aria-label": "Close"
              })
            ]),
            createVNode("div", { class: "modal-body" }, [
              renderSlot(_ctx.$slots, "content")
            ]),
            createVNode("div", { class: "modal-footer bg-light" }, [
              renderSlot(_ctx.$slots, "footer")
            ])
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/DialogModal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const JetDialogModal = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = defineComponent({
  components: {
    JetSectionTitle
  },
  emits: ["submitted"],
  computed: {
    hasActions() {
      return !!this.$slots.actions;
    }
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)}><div class="card shadow-sm"><div class="card-body">`);
  ssrRenderSlot(_ctx.$slots, "form", {}, null, _push, _parent);
  _push(`</div>`);
  if (_ctx.hasActions) {
    _push(`<div class="card-footer d-flex justify-content-end">`);
    ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></form>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/FormSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const JetFormSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = defineComponent({
  props: ["message"]
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    style: _ctx.message ? null : { display: "none" },
    class: "invalid-feedback",
    role: "alert"
  }, _attrs))}><strong>${ssrInterpolate(_ctx.message)}</strong></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/InputError.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const JetInputError = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({
  props: {
    type: {
      type: String,
      default: "button"
    }
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    type: _ctx.type,
    class: "btn btn-outline-secondary text-uppercase"
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/SecondaryButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const JetSecondaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-3" }, _attrs))}><hr></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/SectionBorder.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const JetSectionBorder = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  components: {
    JetActionMessage,
    JetActionSection,
    JetButton: PrimaryButton,
    JetConfirmationModal,
    JetDangerButton,
    JetDialogModal,
    JetFormSection,
    JetInput,
    JetCheckbox,
    JetInputError,
    JetLabel,
    JetSecondaryButton,
    JetSectionBorder
  },
  props: [
    "tokens",
    "availablePermissions",
    "defaultPermissions"
  ],
  data() {
    return {
      createApiTokenForm: this.$inertia.form({
        name: "",
        permissions: this.defaultPermissions
      }),
      updateApiTokenForm: this.$inertia.form({
        permissions: []
      }),
      deleteApiTokenForm: this.$inertia.form(),
      managingPermissionsFor: null,
      apiTokenBeingDeleted: null,
      bootstrap: null
    };
  },
  methods: {
    createApiToken() {
      this.createApiTokenForm.post(route("api-tokens.store"), {
        preserveScroll: true,
        onSuccess: () => {
          this.createApiTokenForm.reset();
          this.bootstrap = $("#displayingTokenModal");
          this.bootstrap.modal("toggle");
        }
      });
    },
    manageApiTokenPermissions(token) {
      this.updateApiTokenForm.permissions = token.abilities;
      this.managingPermissionsFor = token;
      this.bootstrap = $("#managingPermissionsForModal");
      this.bootstrap.modal("toggle");
    },
    updateApiToken() {
      this.updateApiTokenForm.put(route("api-tokens.update", this.managingPermissionsFor), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => this.managingPermissionsFor = null
      });
    },
    confirmApiTokenDeletion(token) {
      this.apiTokenBeingDeleted = token;
      this.bootstrap = $("#apiTokenBeingDeletedModal");
      this.bootstrap.modal("toggle");
    },
    deleteApiToken() {
      this.deleteApiTokenForm.delete(route("api-tokens.destroy", this.apiTokenBeingDeleted), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          this.apiTokenBeingDeleted = null;
          this.bootstrap.modal("toggle");
        }
      });
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form_section = resolveComponent("jet-form-section");
  const _component_jet_action_message = resolveComponent("jet-action-message");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_checkbox = resolveComponent("jet-checkbox");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_jet_section_border = resolveComponent("jet-section-border");
  const _component_jet_action_section = resolveComponent("jet-action-section");
  const _component_jet_dialog_modal = resolveComponent("jet-dialog-modal");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_jet_confirmation_modal = resolveComponent("jet-confirmation-modal");
  const _component_jet_danger_button = resolveComponent("jet-danger-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_jet_form_section, { onSubmitted: _ctx.createApiToken }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create API Token `);
      } else {
        return [
          createTextVNode(" Create API Token ")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` API tokens allow third-party services to authenticate with our application on your behalf. `);
      } else {
        return [
          createTextVNode(" API tokens allow third-party services to authenticate with our application on your behalf. ")
        ];
      }
    }),
    form: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_action_message, {
          on: _ctx.createApiTokenForm.recentlySuccessful
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Created. `);
            } else {
              return [
                createTextVNode(" Created. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="w-75"${_scopeId}><div class="mb-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "name",
          value: "Name"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "name",
          type: "text",
          modelValue: _ctx.createApiTokenForm.name,
          "onUpdate:modelValue": ($event) => _ctx.createApiTokenForm.name = $event,
          autofocus: "",
          class: { "is-invalid": _ctx.createApiTokenForm.errors.name }
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.createApiTokenForm.errors.name
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        if (_ctx.availablePermissions.length > 0) {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "permissions",
            value: "Permissions"
          }, null, _parent2, _scopeId));
          _push2(`<div class="mt-2 row"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.availablePermissions, (permission) => {
            _push2(`<div class="col-6"${_scopeId}><div class="mb-3"${_scopeId}><div class="form-check"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_jet_checkbox, {
              value: permission,
              checked: _ctx.createApiTokenForm.permissions,
              "onUpdate:checked": ($event) => _ctx.createApiTokenForm.permissions = $event,
              id: `create-${permission}`
            }, null, _parent2, _scopeId));
            _push2(`<label class="form-check-label"${ssrRenderAttr("for", `create-${permission}`)}${_scopeId}>${ssrInterpolate(permission)}</label></div></div></div>`);
          });
          _push2(`<!--]--></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_jet_action_message, {
            on: _ctx.createApiTokenForm.recentlySuccessful
          }, {
            default: withCtx(() => [
              createTextVNode(" Created. ")
            ]),
            _: 1
          }, 8, ["on"]),
          createVNode("div", { class: "w-75" }, [
            createVNode("div", { class: "mb-3" }, [
              createVNode(_component_jet_label, {
                for: "name",
                value: "Name"
              }),
              createVNode(_component_jet_input, {
                id: "name",
                type: "text",
                modelValue: _ctx.createApiTokenForm.name,
                "onUpdate:modelValue": ($event) => _ctx.createApiTokenForm.name = $event,
                autofocus: "",
                class: { "is-invalid": _ctx.createApiTokenForm.errors.name }
              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
              createVNode(_component_jet_input_error, {
                message: _ctx.createApiTokenForm.errors.name
              }, null, 8, ["message"])
            ]),
            _ctx.availablePermissions.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
              createVNode(_component_jet_label, {
                for: "permissions",
                value: "Permissions"
              }),
              createVNode("div", { class: "mt-2 row" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.availablePermissions, (permission) => {
                  return openBlock(), createBlock("div", {
                    class: "col-6",
                    key: permission
                  }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("div", { class: "form-check" }, [
                        createVNode(_component_jet_checkbox, {
                          value: permission,
                          checked: _ctx.createApiTokenForm.permissions,
                          "onUpdate:checked": ($event) => _ctx.createApiTokenForm.permissions = $event,
                          id: `create-${permission}`
                        }, null, 8, ["value", "checked", "onUpdate:checked", "id"]),
                        createVNode("label", {
                          class: "form-check-label",
                          for: `create-${permission}`
                        }, toDisplayString(permission), 9, ["for"])
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_button, {
          class: { "text-white-50": _ctx.createApiTokenForm.processing },
          disabled: _ctx.createApiTokenForm.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div style="${ssrRenderStyle(_ctx.createApiTokenForm.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm" role="status"${_scopeId2}><span class="visually-hidden"${_scopeId2}>Loading...</span></div> Create `);
            } else {
              return [
                withDirectives(createVNode("div", {
                  class: "spinner-border spinner-border-sm",
                  role: "status"
                }, [
                  createVNode("span", { class: "visually-hidden" }, "Loading...")
                ], 512), [
                  [vShow, _ctx.createApiTokenForm.processing]
                ]),
                createTextVNode(" Create ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_button, {
            class: { "text-white-50": _ctx.createApiTokenForm.processing },
            disabled: _ctx.createApiTokenForm.processing
          }, {
            default: withCtx(() => [
              withDirectives(createVNode("div", {
                class: "spinner-border spinner-border-sm",
                role: "status"
              }, [
                createVNode("span", { class: "visually-hidden" }, "Loading...")
              ], 512), [
                [vShow, _ctx.createApiTokenForm.processing]
              ]),
              createTextVNode(" Create ")
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.tokens.length > 0) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_jet_section_border, null, null, _parent));
    _push(`<div>`);
    _push(ssrRenderComponent(_component_jet_action_section, null, {
      title: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Manage API Tokens `);
        } else {
          return [
            createTextVNode(" Manage API Tokens ")
          ];
        }
      }),
      description: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` You may delete any of your existing tokens if they are no longer needed. `);
        } else {
          return [
            createTextVNode(" You may delete any of your existing tokens if they are no longer needed. ")
          ];
        }
      }),
      content: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.tokens, (token) => {
            _push2(`<div class="d-flex justify-content-between"${_scopeId}><div${_scopeId}>${ssrInterpolate(token.name)}</div><div class="d-flex"${_scopeId}>`);
            if (token.last_used_ago) {
              _push2(`<div class="text-sm text-muted"${_scopeId}> Last used ${ssrInterpolate(token.last_used_ago)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.availablePermissions.length > 0) {
              _push2(`<button class="btn btn-link text-secondary"${_scopeId}> Permissions </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button class="btn btn-link text-danger text-decoration-none"${_scopeId}> Delete </button></div></div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          return [
            createVNode("div", null, [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tokens, (token) => {
                return openBlock(), createBlock("div", {
                  class: "d-flex justify-content-between",
                  key: token.id
                }, [
                  createVNode("div", null, toDisplayString(token.name), 1),
                  createVNode("div", { class: "d-flex" }, [
                    token.last_used_ago ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-sm text-muted"
                    }, " Last used " + toDisplayString(token.last_used_ago), 1)) : createCommentVNode("", true),
                    _ctx.availablePermissions.length > 0 ? (openBlock(), createBlock("button", {
                      key: 1,
                      class: "btn btn-link text-secondary",
                      onClick: ($event) => _ctx.manageApiTokenPermissions(token)
                    }, " Permissions ", 8, ["onClick"])) : createCommentVNode("", true),
                    createVNode("button", {
                      class: "btn btn-link text-danger text-decoration-none",
                      onClick: ($event) => _ctx.confirmApiTokenDeletion(token)
                    }, " Delete ", 8, ["onClick"])
                  ])
                ]);
              }), 128))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_jet_dialog_modal, { id: "displayingTokenModal" }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` API Token `);
      } else {
        return [
          createTextVNode(" API Token ")
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}> Please copy your new API token. For your security, it won&#39;t be shown again. </div>`);
        if (_ctx.$page.props.jetstream.flash.token) {
          _push2(`<div class="bg-light rounded p-3 user-select-all"${_scopeId}>${ssrInterpolate(_ctx.$page.props.jetstream.flash.token)}</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("div", null, " Please copy your new API token. For your security, it won't be shown again. "),
          _ctx.$page.props.jetstream.flash.token ? (openBlock(), createBlock("div", {
            key: 0,
            class: "bg-light rounded p-3 user-select-all"
          }, toDisplayString(_ctx.$page.props.jetstream.flash.token), 1)) : createCommentVNode("", true)
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_secondary_button, {
          onClick: ($event) => _ctx.displayingToken = false,
          "data-dismiss": "modal"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Close `);
            } else {
              return [
                createTextVNode(" Close ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_secondary_button, {
            onClick: ($event) => _ctx.displayingToken = false,
            "data-dismiss": "modal"
          }, {
            default: withCtx(() => [
              createTextVNode(" Close ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_jet_dialog_modal, { id: "managingPermissionsForModal" }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` API Token Permissions `);
      } else {
        return [
          createTextVNode(" API Token Permissions ")
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 row"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.availablePermissions, (permission) => {
          _push2(`<div class="col-6"${_scopeId}><div class="mb-3"${_scopeId}><div class="form-check"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_checkbox, {
            value: permission,
            checked: _ctx.updateApiTokenForm.permissions,
            "onUpdate:checked": ($event) => _ctx.updateApiTokenForm.permissions = $event,
            id: `update-${permission}`
          }, null, _parent2, _scopeId));
          _push2(`<label class="form-check-label"${ssrRenderAttr("for", `update-${permission}`)}${_scopeId}>${ssrInterpolate(permission)}</label></div></div></div>`);
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "mt-2 row" }, [
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.availablePermissions, (permission) => {
              return openBlock(), createBlock("div", {
                class: "col-6",
                key: permission
              }, [
                createVNode("div", { class: "mb-3" }, [
                  createVNode("div", { class: "form-check" }, [
                    createVNode(_component_jet_checkbox, {
                      value: permission,
                      checked: _ctx.updateApiTokenForm.permissions,
                      "onUpdate:checked": ($event) => _ctx.updateApiTokenForm.permissions = $event,
                      id: `update-${permission}`
                    }, null, 8, ["value", "checked", "onUpdate:checked", "id"]),
                    createVNode("label", {
                      class: "form-check-label",
                      for: `update-${permission}`
                    }, toDisplayString(permission), 9, ["for"])
                  ])
                ])
              ]);
            }), 128))
          ])
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_secondary_button, {
          "data-dismiss": "modal",
          onClick: ($event) => _ctx.managingPermissionsFor = null
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cancel `);
            } else {
              return [
                createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_button, {
          class: ["ms-2", { "text-black-50": _ctx.updateApiTokenForm.processing }],
          onClick: _ctx.updateApiToken,
          disabled: _ctx.updateApiTokenForm.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Save `);
            } else {
              return [
                createTextVNode(" Save ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_secondary_button, {
            "data-dismiss": "modal",
            onClick: ($event) => _ctx.managingPermissionsFor = null
          }, {
            default: withCtx(() => [
              createTextVNode(" Cancel ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_jet_button, {
            class: ["ms-2", { "text-black-50": _ctx.updateApiTokenForm.processing }],
            onClick: _ctx.updateApiToken,
            disabled: _ctx.updateApiTokenForm.processing
          }, {
            default: withCtx(() => [
              createTextVNode(" Save ")
            ]),
            _: 1
          }, 8, ["onClick", "class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_jet_confirmation_modal, { id: "apiTokenBeingDeletedModal" }, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Delete API Token `);
      } else {
        return [
          createTextVNode(" Delete API Token ")
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Are you sure you would like to delete this API token? `);
      } else {
        return [
          createTextVNode(" Are you sure you would like to delete this API token? ")
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_secondary_button, {
          onClick: ($event) => _ctx.apiTokenBeingDeleted = null,
          "data-dismiss": "modal"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cancel `);
            } else {
              return [
                createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_danger_button, {
          class: ["ms-2", { "text-white-50": _ctx.deleteApiTokenForm.processing }],
          onClick: _ctx.deleteApiToken,
          disabled: _ctx.deleteApiTokenForm.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Delete `);
            } else {
              return [
                createTextVNode(" Delete ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_secondary_button, {
            onClick: ($event) => _ctx.apiTokenBeingDeleted = null,
            "data-dismiss": "modal"
          }, {
            default: withCtx(() => [
              createTextVNode(" Cancel ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          createVNode(_component_jet_danger_button, {
            class: ["ms-2", { "text-white-50": _ctx.deleteApiTokenForm.processing }],
            onClick: _ctx.deleteApiToken,
            disabled: _ctx.deleteApiTokenForm.processing
          }, {
            default: withCtx(() => [
              createTextVNode(" Delete ")
            ]),
            _: 1
          }, 8, ["onClick", "class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Partials/ApiTokenManager.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ApiTokenManager = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ApiTokenManager as default
};
