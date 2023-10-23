import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, withModifiers, Fragment, renderList, withDirectives, vShow, toDisplayString, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import Header from "./Header-eae7d838.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { toast } from "vue3-toastify";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Multiselect from "@vueform/multiselect";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  setup() {
    return { v$: useVuelidate() };
  },
  props: ["company", "address", "corporationtypes"],
  components: {
    AppLayout,
    Header,
    Link,
    Head,
    JetInput,
    JetLabel,
    InputError,
    Multiselect,
    JetValidationErrors
  },
  validations() {
    return {
      form: {
        company_name: {
          required
        },
        tax_number: {
          required
        },
        description: {
          required
        }
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f;
    return {
      processing: false,
      form: this.$inertia.form({
        company_name: ((_b = (_a = this.company) == null ? void 0 : _a.data) == null ? void 0 : _b.company_name) || "",
        tax_number: ((_d = (_c = this.company) == null ? void 0 : _c.data) == null ? void 0 : _d.tax_number) || "",
        description: ((_f = (_e = this.company) == null ? void 0 : _e.data) == null ? void 0 : _f.description) || ""
      }),
      isEdit: false,
      title: "Company Overview"
    };
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.form.transform((data) => ({
          ...data
        })).post(
          this.route("company.update"),
          {
            onSuccess: (data) => {
              toast.success(this.$page.props.jetstream.flash.message);
              this.isEdit = false;
            },
            onError: (data) => {
              console.log(data);
            }
          }
        );
      }
    },
    changeStatus() {
    }
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_Header = resolveComponent("Header");
  const _component_JetValidationErrors = resolveComponent("JetValidationErrors");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_input_error = resolveComponent("input-error");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/company",
          class: "text-muted text-hover-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Company`);
            } else {
              return [
                createTextVNode("Company")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode(_component_Link, {
              href: "/company",
              class: "text-muted text-hover-primary"
            }, {
              default: withCtx(() => [
                createTextVNode("Company")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      if (_push2) {
        _push2(ssrRenderComponent(_component_Header, {
          company: _ctx.company.data,
          address: _ctx.address.data
        }, null, _parent2, _scopeId));
        _push2(`<div class="card mb-5 mb-xl-10"${_scopeId}><div class="card-header cursor-pointer"${_scopeId}><div class="card-title m-0"${_scopeId}><h3 class="fw-bold m-0"${_scopeId}>Company Details </h3></div><button class="btn btn-primary align-self-center btn-sm"${_scopeId}><i class="bi bi-pencil me-2"${_scopeId}></i>Edit </button></div>`);
        if (_ctx.isEdit) {
          _push2(`<div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
          _push2(`<form${_scopeId}><div class="row mb-6"${_scopeId}><label for="company-name" class="col-lg-4 col-form-label required fw-bold fs-6"${_scopeId}>Company Name</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "company-name",
            type: "text",
            modelValue: _ctx.v$.form.company_name.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.company_name.$model = $event,
            class: _ctx.v$.form.company_name.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Company Type"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.company_name.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-bold fs-6"${_scopeId}>Tax Number</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "tax_number",
            type: "text",
            modelValue: _ctx.v$.form.tax_number.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.tax_number.$model = $event,
            class: _ctx.v$.form.tax_number.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Tax Number"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.tax_number.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-bold fs-6"${_scopeId}>Description</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "description",
            type: "text",
            modelValue: _ctx.v$.form.description.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.description.$model = $event,
            class: _ctx.v$.form.description.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Description"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.description.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="d-flex justify-content-end mt-4"${_scopeId}><button type="button" class="btn btn-secondary me-5"${_scopeId}>Discard</button><button type="submit" class="${ssrRenderClass([{ "text-white-50": _ctx.form.processing }, "btn btn-primary"])}"${_scopeId}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"${_scopeId}><span class="visually-hidden"${_scopeId}>Loading...</span></div> Save Changes </button></div></form></div></div></div>`);
        } else {
          _push2(`<div class="card-body"${_scopeId}><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Company Name</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_b = (_a = _ctx.company) == null ? void 0 : _a.data) == null ? void 0 : _b.company_name)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Tax Number</label><div class="col-lg-6 d-flex align-items-center"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_d = (_c = this.company) == null ? void 0 : _c.data) == null ? void 0 : _d.tax_number)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Description</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_f = (_e = this.company) == null ? void 0 : _e.data) == null ? void 0 : _f.description)}</span></div></div></div>`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_Header, {
            company: _ctx.company.data,
            address: _ctx.address.data
          }, null, 8, ["company", "address"]),
          createVNode("div", { class: "card mb-5 mb-xl-10" }, [
            createVNode("div", { class: "card-header cursor-pointer" }, [
              createVNode("div", { class: "card-title m-0" }, [
                createVNode("h3", { class: "fw-bold m-0" }, "Company Details ")
              ]),
              createVNode("button", {
                class: "btn btn-primary align-self-center btn-sm",
                onClick: ($event) => this.isEdit = this.isEdit ? false : true
              }, [
                createVNode("i", { class: "bi bi-pencil me-2" }),
                createTextVNode("Edit ")
              ], 8, ["onClick"])
            ]),
            _ctx.isEdit ? (openBlock(), createBlock("div", {
              key: 0,
              class: "card-body"
            }, [
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-12" }, [
                  createVNode(_component_JetValidationErrors),
                  createVNode("form", {
                    onSubmit: withModifiers(_ctx.submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "row mb-6" }, [
                      createVNode("label", {
                        for: "company-name",
                        class: "col-lg-4 col-form-label required fw-bold fs-6"
                      }, "Company Name"),
                      createVNode("div", { class: "col-lg-8" }, [
                        createVNode(_component_jet_input, {
                          id: "company-name",
                          type: "text",
                          modelValue: _ctx.v$.form.company_name.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.company_name.$model = $event,
                          class: _ctx.v$.form.company_name.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Company Type"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.company_name.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "row mb-6" }, [
                      createVNode("label", { class: "col-lg-4 col-form-label fw-bold fs-6" }, "Tax Number"),
                      createVNode("div", { class: "col-lg-8" }, [
                        createVNode(_component_jet_input, {
                          id: "tax_number",
                          type: "text",
                          modelValue: _ctx.v$.form.tax_number.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.tax_number.$model = $event,
                          class: _ctx.v$.form.tax_number.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Tax Number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.tax_number.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "row mb-6" }, [
                      createVNode("label", { class: "col-lg-4 col-form-label fw-bold fs-6" }, "Description"),
                      createVNode("div", { class: "col-lg-8" }, [
                        createVNode(_component_jet_input, {
                          id: "description",
                          type: "text",
                          modelValue: _ctx.v$.form.description.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.description.$model = $event,
                          class: _ctx.v$.form.description.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Description"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.description.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "d-flex justify-content-end mt-4" }, [
                      createVNode("button", {
                        type: "button",
                        class: "btn btn-secondary me-5",
                        onClick: ($event) => this.isEdit = false
                      }, "Discard", 8, ["onClick"]),
                      createVNode("button", {
                        type: "submit",
                        class: ["btn btn-primary", { "text-white-50": _ctx.form.processing }]
                      }, [
                        withDirectives(createVNode("div", { class: "spinner-border spinner-border-sm" }, [
                          createVNode("span", { class: "visually-hidden" }, "Loading...")
                        ], 512), [
                          [vShow, _ctx.form.processing]
                        ]),
                        createTextVNode(" Save Changes ")
                      ], 2)
                    ])
                  ], 40, ["onSubmit"])
                ])
              ])
            ])) : (openBlock(), createBlock("div", {
              key: 1,
              class: "card-body"
            }, [
              createVNode("div", { class: "row mb-7" }, [
                createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Company Name"),
                createVNode("div", { class: "col-lg-6" }, [
                  createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_h = (_g = _ctx.company) == null ? void 0 : _g.data) == null ? void 0 : _h.company_name), 1)
                ])
              ]),
              createVNode("div", { class: "row mb-7" }, [
                createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Tax Number"),
                createVNode("div", { class: "col-lg-6 d-flex align-items-center" }, [
                  createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_j = (_i = this.company) == null ? void 0 : _i.data) == null ? void 0 : _j.tax_number), 1)
                ])
              ]),
              createVNode("div", { class: "row mb-7" }, [
                createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Description"),
                createVNode("div", { class: "col-lg-6" }, [
                  createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_l = (_k = this.company) == null ? void 0 : _k.data) == null ? void 0 : _l.description), 1)
                ])
              ])
            ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Company/Overview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Overview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Overview as default
};
