import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, withDirectives, vModelText, vShow, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { toast } from "vue3-toastify";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  props: ["client"],
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      states: [],
      form: {
        client_name: {
          required
        },
        display_name: {
          required
        },
        tax_number: {
          required
        },
        notes: {
          required
        },
        email_address: {
          required
        },
        account_email: {},
        mobile: {
          required
        }
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
    return {
      isEdit: false,
      title: "",
      form: this.$inertia.form({
        id: (_b = (_a = this.client) == null ? void 0 : _a.data) == null ? void 0 : _b.id,
        client_name: ((_d = (_c = this.client) == null ? void 0 : _c.data) == null ? void 0 : _d.name) || "",
        display_name: ((_f = (_e = this.client) == null ? void 0 : _e.data) == null ? void 0 : _f.display_name) || "",
        tax_number: ((_h = (_g = this.client) == null ? void 0 : _g.data) == null ? void 0 : _h.tax_number) || "",
        email_address: ((_j = (_i = this.client) == null ? void 0 : _i.data) == null ? void 0 : _j.email_address) || "",
        account_email: ((_l = (_k = this.client) == null ? void 0 : _k.data) == null ? void 0 : _l.account_email) || "",
        mobile: ((_n = (_m = this.client) == null ? void 0 : _m.data) == null ? void 0 : _n.contact_number) || "",
        notes: ((_p = (_o = this.client) == null ? void 0 : _o.data) == null ? void 0 : _p.notes) || ""
      })
    };
  },
  components: {
    AppLayout,
    Link,
    Head,
    Multiselect,
    JetInput,
    JetLabel,
    InputError,
    JetValidationErrors
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.form.transform((data) => ({
          ...data
        })).post(
          route().current() == "client.create" ? this.route("client.store") : this.route("client.update", this.form.id),
          {
            onSuccess: (data) => {
              toast.success(this.$page.props.jetstream.flash.message);
            },
            onError: (data) => {
              toast.error(data.message);
            }
          }
        );
      }
    }
  },
  created() {
    if (route().current() == "client.edit") {
      this.isEdit = true;
      this.title = "Client Edit";
    } else {
      this.title = "Add new Client";
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_Link = resolveComponent("Link");
  const _component_JetValidationErrors = resolveComponent("JetValidationErrors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_input_error = resolveComponent("input-error");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.isEdit ? "Edit Client" : `Add New Client`
  }, null, _parent));
  _push(ssrRenderComponent(_component_AppLayout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: `/clients`,
          class: "text-muted text-hover-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Client `);
            } else {
              return [
                createTextVNode(" Client ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}> Client Form </li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, [
            createVNode(_component_Link, {
              href: `/clients`,
              class: "text-muted text-hover-primary"
            }, {
              default: withCtx(() => [
                createTextVNode(" Client ")
              ]),
              _: 1
            })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, " Client Form ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="d-flex flex-column flex-lg-row flex-column-fluid justify-content-center"${_scopeId}><div class="col-12"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
        _push2(`<form autocomplete="off" class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>General</h2></div></div><div class="card-body"${_scopeId}><div class="row g-5"${_scopeId}><div class="fv-row col-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "client-name",
          value: "Client Name"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "client-name",
          type: "text",
          modelValue: _ctx.v$.form.client_name.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.client_name.$model = $event,
          class: _ctx.v$.form.client_name.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "Enter client full name"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.client_name.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="fv-row col-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "display-name",
          value: "Display Name"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "display-name",
          type: "text",
          modelValue: _ctx.v$.form.display_name.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.display_name.$model = $event,
          class: _ctx.v$.form.display_name.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "Enter display name"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.display_name.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="col-md-6 fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "email-address",
          value: "Email Address"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "email-address",
          type: "text",
          modelValue: _ctx.v$.form.email_address.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.email_address.$model = $event,
          class: _ctx.v$.form.email_address.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "Enter email address"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.email_address.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="col-md-6 fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "account-email",
          value: "Account Email"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "account-email",
          type: "text",
          modelValue: _ctx.v$.form.account_email.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.account_email.$model = $event,
          class: _ctx.v$.form.account_email.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "Enter account email"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.account_email.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="col-md-6 fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "mobile",
          value: "Mobile"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "mobile",
          type: "text",
          modelValue: _ctx.v$.form.mobile.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.mobile.$model = $event,
          class: _ctx.v$.form.mobile.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "Enter mobile number"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.mobile.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="fv-row col-12"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "display-name",
          value: "Tax number"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "display-name",
          type: "text",
          modelValue: _ctx.v$.form.tax_number.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.tax_number.$model = $event,
          class: _ctx.v$.form.tax_number.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "Enter Tax number"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.tax_number.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="fv-row mb-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "notes",
          value: "Notes"
        }, null, _parent2, _scopeId));
        _push2(`<textarea id="notes" type="text" class="${ssrRenderClass([
          _ctx.v$.form.notes.$errors.length > 0 ? "is-invalid" : "",
          "form-control form-control-lg form-control-solid"
        ])}" placeholder="Enter notes"${_scopeId}>${ssrInterpolate(_ctx.v$.form.notes.$model)}</textarea><!--[-->`);
        ssrRenderList(_ctx.v$.form.notes.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div></div></div><div class="row"${_scopeId}><div class="col-12 gap-5"${_scopeId}><div class="d-flex justify-content-end"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/clients",
          class: "btn btn-outline-secondary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Discard `);
            } else {
              return [
                createTextVNode(" Discard ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<button type="submit" class="${ssrRenderClass([{ "text-white-50": _ctx.form.processing }, "btn btn-primary"])}"${_scopeId}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"${_scopeId}><span class="visually-hidden"${_scopeId}>Loading...</span></div>`);
        if (_ctx.route().current() == "client.create") {
          _push2(`<span${_scopeId}> Save </span>`);
        } else {
          _push2(`<span${_scopeId}> Save Changes </span>`);
        }
        _push2(`</button></div></div></div></form></div></div>`);
      } else {
        return [
          createVNode("div", { class: "d-flex flex-column flex-lg-row flex-column-fluid justify-content-center" }, [
            createVNode("div", { class: "col-12" }, [
              createVNode(_component_JetValidationErrors),
              createVNode("form", {
                onSubmit: withModifiers(($event) => _ctx.submit(), ["prevent"]),
                autocomplete: "off",
                class: "d-flex flex-column flex-row-fluid gap-7 gap-lg-10"
              }, [
                createVNode("div", { class: "card" }, [
                  createVNode("div", { class: "card-header" }, [
                    createVNode("div", { class: "card-title" }, [
                      createVNode("h2", null, "General")
                    ])
                  ]),
                  createVNode("div", { class: "card-body" }, [
                    createVNode("div", { class: "row g-5" }, [
                      createVNode("div", { class: "fv-row col-6" }, [
                        createVNode(_component_jet_label, {
                          for: "client-name",
                          value: "Client Name"
                        }),
                        createVNode(_component_jet_input, {
                          id: "client-name",
                          type: "text",
                          modelValue: _ctx.v$.form.client_name.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.client_name.$model = $event,
                          class: _ctx.v$.form.client_name.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Enter client full name"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.client_name.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "fv-row col-6" }, [
                        createVNode(_component_jet_label, {
                          for: "display-name",
                          value: "Display Name"
                        }),
                        createVNode(_component_jet_input, {
                          id: "display-name",
                          type: "text",
                          modelValue: _ctx.v$.form.display_name.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.display_name.$model = $event,
                          class: _ctx.v$.form.display_name.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Enter display name"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.display_name.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "col-md-6 fv-row" }, [
                        createVNode(_component_jet_label, {
                          for: "email-address",
                          value: "Email Address"
                        }),
                        createVNode(_component_jet_input, {
                          id: "email-address",
                          type: "text",
                          modelValue: _ctx.v$.form.email_address.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.email_address.$model = $event,
                          class: _ctx.v$.form.email_address.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Enter email address"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.email_address.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "col-md-6 fv-row" }, [
                        createVNode(_component_jet_label, {
                          for: "account-email",
                          value: "Account Email"
                        }),
                        createVNode(_component_jet_input, {
                          id: "account-email",
                          type: "text",
                          modelValue: _ctx.v$.form.account_email.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.account_email.$model = $event,
                          class: _ctx.v$.form.account_email.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Enter account email"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.account_email.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "col-md-6 fv-row" }, [
                        createVNode(_component_jet_label, {
                          for: "mobile",
                          value: "Mobile"
                        }),
                        createVNode(_component_jet_input, {
                          id: "mobile",
                          type: "text",
                          modelValue: _ctx.v$.form.mobile.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.mobile.$model = $event,
                          class: _ctx.v$.form.mobile.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Enter mobile number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.mobile.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "fv-row col-12" }, [
                        createVNode(_component_jet_label, {
                          for: "display-name",
                          value: "Tax number"
                        }),
                        createVNode(_component_jet_input, {
                          id: "display-name",
                          type: "text",
                          modelValue: _ctx.v$.form.tax_number.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.tax_number.$model = $event,
                          class: _ctx.v$.form.tax_number.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Enter Tax number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.tax_number.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "fv-row mb-3" }, [
                        createVNode(_component_jet_label, {
                          for: "notes",
                          value: "Notes"
                        }),
                        withDirectives(createVNode("textarea", {
                          class: [
                            "form-control form-control-lg form-control-solid",
                            _ctx.v$.form.notes.$errors.length > 0 ? "is-invalid" : ""
                          ],
                          id: "notes",
                          type: "text",
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.notes.$model = $event,
                          placeholder: "Enter notes"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, _ctx.v$.form.notes.$model]
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.notes.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-12 gap-5" }, [
                    createVNode("div", { class: "d-flex justify-content-end" }, [
                      createVNode(_component_Link, {
                        href: "/clients",
                        class: "btn btn-outline-secondary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Discard ")
                        ]),
                        _: 1
                      }),
                      createVNode("button", {
                        type: "submit",
                        class: ["btn btn-primary", { "text-white-50": _ctx.form.processing }]
                      }, [
                        withDirectives(createVNode("div", { class: "spinner-border spinner-border-sm" }, [
                          createVNode("span", { class: "visually-hidden" }, "Loading...")
                        ], 512), [
                          [vShow, _ctx.form.processing]
                        ]),
                        _ctx.route().current() == "client.create" ? (openBlock(), createBlock("span", { key: 0 }, " Save ")) : (openBlock(), createBlock("span", { key: 1 }, " Save Changes "))
                      ], 2)
                    ])
                  ])
                ])
              ], 40, ["onSubmit"])
            ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Client/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Create as default
};
