import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, withModifiers, Fragment, renderList, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import Header from "./Header-def1044b.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import "@vueform/multiselect";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import useVuelidate from "@vuelidate/core";
import { required, url } from "@vuelidate/validators";
import { toast } from "vue3-toastify";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  props: ["supplier", "redirect"],
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      form: {
        complete_url: {
          required,
          url
        },
        terminate_url: {
          required,
          url
        },
        quotafull_url: {
          required,
          url
        },
        security_terminate_url: {
          required,
          url
        }
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    return {
      isEdit: false,
      processing: false,
      title: "Supplier Redirect",
      form: this.$inertia.form({
        id: ((_b = (_a = this.redirect) == null ? void 0 : _a.data) == null ? void 0 : _b.id) || "",
        supplier_id: ((_d = (_c = this.supplier) == null ? void 0 : _c.data) == null ? void 0 : _d.id) || "",
        complete_url: ((_f = (_e = this.redirect) == null ? void 0 : _e.data) == null ? void 0 : _f.complete_url) || "",
        terminate_url: ((_h = (_g = this.redirect) == null ? void 0 : _g.data) == null ? void 0 : _h.terminate_url) || "",
        quotafull_url: ((_j = (_i = this.redirect) == null ? void 0 : _i.data) == null ? void 0 : _j.quotafull_url) || "",
        security_terminate_url: ((_l = (_k = this.redirect) == null ? void 0 : _k.data) == null ? void 0 : _l.security_terminate_url) || "",
        action: "supplier.redirect"
      })
    };
  },
  components: {
    AppLayout,
    Header,
    Link,
    Head,
    JetInput,
    JetLabel,
    InputError,
    JetValidationErrors
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.processing = true, this.form.transform((data) => ({
          ...data
        })).post(
          this.route("supplier.redirect.update", this.form.id),
          {
            onSuccess: (data) => {
              toast.success(this.$page.props.jetstream.flash.message);
              this.processing = false, this.isEdit = false;
            },
            onError: (data) => {
              toast.error(data.message);
            }
          }
        );
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_Link = resolveComponent("Link");
  const _component_Header = resolveComponent("Header");
  const _component_JetValidationErrors = resolveComponent("JetValidationErrors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_input_error = resolveComponent("input-error");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_AppLayout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/suppliers",
          class: "text-muted text-hover-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Suppliers`);
            } else {
              return [
                createTextVNode("Suppliers")
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
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode(_component_Link, {
              href: "/suppliers",
              class: "text-muted text-hover-primary"
            }, {
              default: withCtx(() => [
                createTextVNode("Suppliers")
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      if (_push2) {
        _push2(ssrRenderComponent(_component_Header, {
          supplier: (_a = _ctx.supplier) == null ? void 0 : _a.data
        }, null, _parent2, _scopeId));
        _push2(`<div class="card mb-5 mb-xl-10"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title m-0"${_scopeId}><h3 class="fw-bold m-0"${_scopeId}>Supplier Redirect </h3></div><button class="btn btn-primary btn-sm align-self-center"${_scopeId}><i class="bi bi-pencil me-2"${_scopeId}></i>Edit </button></div><div class="card-body"${_scopeId}>`);
        if (_ctx.isEdit) {
          _push2(`<div class="row"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
          _push2(`<form class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10"${_scopeId}><div class="row g-5"${_scopeId}><div class="col-md-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "complete_url",
            value: "Complete URL"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "complete_url",
            type: "text",
            modelValue: _ctx.v$.form.complete_url.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.complete_url.$model = $event,
            class: _ctx.v$.form.complete_url.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Enter supplier Complete URL"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.complete_url.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div><div class="col-md-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "terminate_url",
            value: "Terminate URL"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "terminate_url",
            type: "text",
            modelValue: _ctx.v$.form.terminate_url.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.terminate_url.$model = $event,
            class: _ctx.v$.form.terminate_url.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Terminate URL"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.terminate_url.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div><div class="col-md-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "quotafull_url",
            value: "Quotafull URL"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "quotafull_url",
            type: "text",
            modelValue: _ctx.v$.form.quotafull_url.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.quotafull_url.$model = $event,
            class: _ctx.v$.form.quotafull_url.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Quotafull URL"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.quotafull_url.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div><div class="col-md-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "security_terminate_url",
            value: "Security Terminate URL"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "security_terminate_url",
            type: "text",
            modelValue: _ctx.v$.form.security_terminate_url.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.security_terminate_url.$model = $event,
            class: _ctx.v$.form.security_terminate_url.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Security Terminate URL"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.security_terminate_url.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row text-align-center p-3"${_scopeId}><div class="col-12"${_scopeId}><div class="d-flex justify-content-end gap-5"${_scopeId}><button type="button" class="btn btn-secondary me-5"${_scopeId}>Discard</button><button type="submit" class="btn btn-primary align-items-center justify-content-center"${ssrRenderAttr("data-kt-indicator", _ctx.processing ? "on" : "off")}${_scopeId}><span class="indicator-label"${_scopeId}><span${_scopeId}>Save Changes</span></span><span class="indicator-progress"${_scopeId}> Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"${_scopeId}></span></span></button></div></div></div></form></div>`);
        } else {
          _push2(`<div${_scopeId}><div class="row mb-7"${_scopeId}><label class="col-lg-6 fw-bold fs-5 text-gray-800"${_scopeId}>Complete Url</label><div class="col-lg-6 fv-row"${_scopeId}><span class="fw-bold fs-6 text-gray-700 text-capitalize"${_scopeId}>${ssrInterpolate((_c = (_b = this.redirect) == null ? void 0 : _b.data) == null ? void 0 : _c.complete_url)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-lg-6 fw-bold fs-5 text-gray-800"${_scopeId}>Terminate Url </label><div class="col-lg-6 d-flex align-items-center"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_e = (_d = this.redirect) == null ? void 0 : _d.data) == null ? void 0 : _e.terminate_url)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-lg-6 fw-bold fs-5 text-gray-800"${_scopeId}>Quotafull Url</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_g = (_f = this.redirect) == null ? void 0 : _f.data) == null ? void 0 : _g.quotafull_url)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-lg-6 fw-bold fs-5 text-gray-800"${_scopeId}>Security Terminate Url</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_i = (_h = this.redirect) == null ? void 0 : _h.data) == null ? void 0 : _i.security_terminate_url)}</span></div></div></div>`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode(_component_Header, {
            supplier: (_j = _ctx.supplier) == null ? void 0 : _j.data
          }, null, 8, ["supplier"]),
          createVNode("div", { class: "card mb-5 mb-xl-10" }, [
            createVNode("div", { class: "card-header" }, [
              createVNode("div", { class: "card-title m-0" }, [
                createVNode("h3", { class: "fw-bold m-0" }, "Supplier Redirect ")
              ]),
              createVNode("button", {
                class: "btn btn-primary btn-sm align-self-center",
                onClick: ($event) => this.isEdit = this.isEdit ? false : true
              }, [
                createVNode("i", { class: "bi bi-pencil me-2" }),
                createTextVNode("Edit ")
              ], 8, ["onClick"])
            ]),
            createVNode("div", { class: "card-body" }, [
              _ctx.isEdit ? (openBlock(), createBlock("div", {
                key: 0,
                class: "row"
              }, [
                createVNode(_component_JetValidationErrors),
                createVNode("form", {
                  onSubmit: withModifiers(($event) => _ctx.submit(), ["prevent"]),
                  class: "d-flex flex-column flex-row-fluid gap-7 gap-lg-10"
                }, [
                  createVNode("div", { class: "row g-5" }, [
                    createVNode("div", { class: "col-md-6" }, [
                      createVNode(_component_jet_label, {
                        for: "complete_url",
                        value: "Complete URL"
                      }),
                      createVNode(_component_jet_input, {
                        id: "complete_url",
                        type: "text",
                        modelValue: _ctx.v$.form.complete_url.$model,
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.complete_url.$model = $event,
                        class: _ctx.v$.form.complete_url.$errors.length > 0 ? "is-invalid" : "",
                        placeholder: "Enter supplier Complete URL"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.complete_url.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "col-md-6" }, [
                      createVNode(_component_jet_label, {
                        for: "terminate_url",
                        value: "Terminate URL"
                      }),
                      createVNode(_component_jet_input, {
                        id: "terminate_url",
                        type: "text",
                        modelValue: _ctx.v$.form.terminate_url.$model,
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.terminate_url.$model = $event,
                        class: _ctx.v$.form.terminate_url.$errors.length > 0 ? "is-invalid" : "",
                        placeholder: "Terminate URL"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.terminate_url.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "col-md-6" }, [
                      createVNode(_component_jet_label, {
                        for: "quotafull_url",
                        value: "Quotafull URL"
                      }),
                      createVNode(_component_jet_input, {
                        id: "quotafull_url",
                        type: "text",
                        modelValue: _ctx.v$.form.quotafull_url.$model,
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.quotafull_url.$model = $event,
                        class: _ctx.v$.form.quotafull_url.$errors.length > 0 ? "is-invalid" : "",
                        placeholder: "Quotafull URL"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.quotafull_url.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "col-md-6" }, [
                      createVNode(_component_jet_label, {
                        for: "security_terminate_url",
                        value: "Security Terminate URL"
                      }),
                      createVNode(_component_jet_input, {
                        id: "security_terminate_url",
                        type: "text",
                        modelValue: _ctx.v$.form.security_terminate_url.$model,
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.security_terminate_url.$model = $event,
                        class: _ctx.v$.form.security_terminate_url.$errors.length > 0 ? "is-invalid" : "",
                        placeholder: "Security Terminate URL"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.security_terminate_url.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "row text-align-center p-3" }, [
                    createVNode("div", { class: "col-12" }, [
                      createVNode("div", { class: "d-flex justify-content-end gap-5" }, [
                        createVNode("button", {
                          type: "button",
                          class: "btn btn-secondary me-5",
                          onClick: ($event) => this.isEdit = false
                        }, "Discard", 8, ["onClick"]),
                        createVNode("button", {
                          type: "submit",
                          class: "btn btn-primary align-items-center justify-content-center",
                          "data-kt-indicator": _ctx.processing ? "on" : "off"
                        }, [
                          createVNode("span", { class: "indicator-label" }, [
                            createVNode("span", null, "Save Changes")
                          ]),
                          createVNode("span", { class: "indicator-progress" }, [
                            createTextVNode(" Please wait... "),
                            createVNode("span", { class: "spinner-border spinner-border-sm align-middle ms-2" })
                          ])
                        ], 8, ["data-kt-indicator"])
                      ])
                    ])
                  ])
                ], 40, ["onSubmit"])
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-lg-6 fw-bold fs-5 text-gray-800" }, "Complete Url"),
                  createVNode("div", { class: "col-lg-6 fv-row" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700 text-capitalize" }, toDisplayString((_l = (_k = this.redirect) == null ? void 0 : _k.data) == null ? void 0 : _l.complete_url), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-lg-6 fw-bold fs-5 text-gray-800" }, "Terminate Url "),
                  createVNode("div", { class: "col-lg-6 d-flex align-items-center" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_n = (_m = this.redirect) == null ? void 0 : _m.data) == null ? void 0 : _n.terminate_url), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-lg-6 fw-bold fs-5 text-gray-800" }, "Quotafull Url"),
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_p = (_o = this.redirect) == null ? void 0 : _o.data) == null ? void 0 : _p.quotafull_url), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-lg-6 fw-bold fs-5 text-gray-800" }, "Security Terminate Url"),
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_r = (_q = this.redirect) == null ? void 0 : _q.data) == null ? void 0 : _r.security_terminate_url), 1)
                  ])
                ])
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Supplier/Redirect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Redirect = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Redirect as default
};
