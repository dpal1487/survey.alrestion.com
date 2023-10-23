import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, withModifiers, openBlock, createBlock, Fragment, renderList, withDirectives, vShow, useSSRContext } from "vue";
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
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  props: ["user", "role"],
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      form: {
        first_name: {
          required
        },
        last_name: {
          required
        },
        role: {
          required
        },
        password: {
          required
        },
        email: {
          required
        },
        status: {
          required
        }
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    return {
      isEdit: false,
      form: this.$inertia.form({
        id: (_b = (_a = this.user) == null ? void 0 : _a.data) == null ? void 0 : _b.id,
        first_name: ((_d = (_c = this.user) == null ? void 0 : _c.data) == null ? void 0 : _d.first_name) || "",
        last_name: ((_f = (_e = this.user) == null ? void 0 : _e.data) == null ? void 0 : _f.last_name) || "",
        email: ((_h = (_g = this.user) == null ? void 0 : _g.data) == null ? void 0 : _h.email) || "",
        role: this.role.roles.id || "",
        password: ((_j = (_i = this.user) == null ? void 0 : _i.data) == null ? void 0 : _j.password) || "",
        status: ((_l = (_k = this.user) == null ? void 0 : _k.data) == null ? void 0 : _l.status) || ""
      }),
      status: [
        { name: "Active", id: "1" },
        { name: "Inactive", id: "0" }
      ]
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
          route().current() == "user.create" ? this.route("user.store") : this.route("user.update", this.form.id),
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
    if (route().current() == "user.edit") {
      this.isEdit = true;
      this.title = "User Edit";
    } else {
      this.title = "Add New User";
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
  const _component_Multiselect = resolveComponent("Multiselect");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.isEdit ? "Edit User" : `Add New User`
  }, null, _parent));
  _push(ssrRenderComponent(_component_AppLayout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: `/users`,
          class: "text-muted text-hover-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Users `);
            } else {
              return [
                createTextVNode(" Users ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>${ssrInterpolate(_ctx.title)}</li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, [
            createVNode(_component_Link, {
              href: `/users`,
              class: "text-muted text-hover-primary"
            }, {
              default: withCtx(() => [
                createTextVNode(" Users ")
              ]),
              _: 1
            })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, toDisplayString(_ctx.title), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="d-flex flex-column flex-lg-row flex-column-fluid justify-content-center"${_scopeId}><div class="col-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
        _push2(`<form autocomplete="off" class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>General</h2></div></div><div class="card-body"${_scopeId}><div class="row g-5"${_scopeId}><div class="fv-row col-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "first-name",
          value: "First Name"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "first-name",
          type: "text",
          modelValue: _ctx.v$.form.first_name.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.first_name.$model = $event,
          class: _ctx.v$.form.first_name.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "Enter First Name"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.first_name.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="fv-row col-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "last-name",
          value: "Last Name"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "last-name",
          type: "text",
          modelValue: _ctx.v$.form.last_name.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.last_name.$model = $event,
          class: _ctx.v$.form.last_name.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "Enter Last name"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.last_name.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="col-md-6 fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Email"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "email",
          type: "text",
          modelValue: _ctx.v$.form.email.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.email.$model = $event,
          class: _ctx.v$.form.email.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "Enter email address"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.email.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="fv-row col-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "role",
          value: "Role"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Multiselect, {
          options: _ctx.role.roles,
          label: "name",
          valueProp: "id",
          class: _ctx.v$.form.role.$errors.length > 0 ? "is-invalid form-control form-control-lg form-control-solid" : "form-control form-control-lg form-control-solid",
          placeholder: "Select Role",
          modelValue: _ctx.form.role,
          "onUpdate:modelValue": ($event) => _ctx.form.role = $event,
          "track-by": "name",
          searchable: true
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.role.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="col-md-6 fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "password",
          value: "Password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "password",
          type: "password",
          modelValue: _ctx.v$.form.password.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.password.$model = $event,
          class: _ctx.v$.form.password.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "Enter password"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.password.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="fv-row col-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "role",
          value: "Status"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Multiselect, {
          options: _ctx.status,
          label: "name",
          valueProp: "id",
          class: _ctx.v$.form.status.$errors.length > 0 ? "is-invalid form-control form-control-lg form-control-solid" : "form-control form-control-lg form-control-solid",
          placeholder: "Select status",
          modelValue: _ctx.form.status,
          "onUpdate:modelValue": ($event) => _ctx.form.status = $event,
          "track-by": "name",
          searchable: true
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.status.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div></div></div><div class="row"${_scopeId}><div class="col-12 gap-5"${_scopeId}><div class="d-flex justify-content-end"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/users",
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
        if (_ctx.route().current() == "user.create") {
          _push2(`<span${_scopeId}> Save </span>`);
        } else {
          _push2(`<span${_scopeId}> Save Changes </span>`);
        }
        _push2(`</button></div></div></div></form></div></div>`);
      } else {
        return [
          createVNode("div", { class: "d-flex flex-column flex-lg-row flex-column-fluid justify-content-center" }, [
            createVNode("div", { class: "col-8" }, [
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
                          for: "first-name",
                          value: "First Name"
                        }),
                        createVNode(_component_jet_input, {
                          id: "first-name",
                          type: "text",
                          modelValue: _ctx.v$.form.first_name.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.first_name.$model = $event,
                          class: _ctx.v$.form.first_name.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Enter First Name"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.first_name.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "fv-row col-6" }, [
                        createVNode(_component_jet_label, {
                          for: "last-name",
                          value: "Last Name"
                        }),
                        createVNode(_component_jet_input, {
                          id: "last-name",
                          type: "text",
                          modelValue: _ctx.v$.form.last_name.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.last_name.$model = $event,
                          class: _ctx.v$.form.last_name.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Enter Last name"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.last_name.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "col-md-6 fv-row" }, [
                        createVNode(_component_jet_label, {
                          for: "email",
                          value: "Email"
                        }),
                        createVNode(_component_jet_input, {
                          id: "email",
                          type: "text",
                          modelValue: _ctx.v$.form.email.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.email.$model = $event,
                          class: _ctx.v$.form.email.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Enter email address"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.email.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "fv-row col-6" }, [
                        createVNode(_component_jet_label, {
                          for: "role",
                          value: "Role"
                        }),
                        createVNode(_component_Multiselect, {
                          options: _ctx.role.roles,
                          label: "name",
                          valueProp: "id",
                          class: _ctx.v$.form.role.$errors.length > 0 ? "is-invalid form-control form-control-lg form-control-solid" : "form-control form-control-lg form-control-solid",
                          placeholder: "Select Role",
                          modelValue: _ctx.form.role,
                          "onUpdate:modelValue": ($event) => _ctx.form.role = $event,
                          "track-by": "name",
                          searchable: true
                        }, null, 8, ["options", "class", "modelValue", "onUpdate:modelValue"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.role.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "col-md-6 fv-row" }, [
                        createVNode(_component_jet_label, {
                          for: "password",
                          value: "Password"
                        }),
                        createVNode(_component_jet_input, {
                          id: "password",
                          type: "password",
                          modelValue: _ctx.v$.form.password.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.password.$model = $event,
                          class: _ctx.v$.form.password.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Enter password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.password.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "fv-row col-6" }, [
                        createVNode(_component_jet_label, {
                          for: "role",
                          value: "Status"
                        }),
                        createVNode(_component_Multiselect, {
                          options: _ctx.status,
                          label: "name",
                          valueProp: "id",
                          class: _ctx.v$.form.status.$errors.length > 0 ? "is-invalid form-control form-control-lg form-control-solid" : "form-control form-control-lg form-control-solid",
                          placeholder: "Select status",
                          modelValue: _ctx.form.status,
                          "onUpdate:modelValue": ($event) => _ctx.form.status = $event,
                          "track-by": "name",
                          searchable: true
                        }, null, 8, ["options", "class", "modelValue", "onUpdate:modelValue"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.status.$errors, (error, index) => {
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
                        href: "/users",
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
                        _ctx.route().current() == "user.create" ? (openBlock(), createBlock("span", { key: 0 }, " Save ")) : (openBlock(), createBlock("span", { key: 1 }, " Save Changes "))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Form as default
};
