import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, withModifiers, Fragment, renderList, withDirectives, vShow, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import Header from "./Header-eae7d838.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { toast } from "vue3-toastify";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Multiselect from "@vueform/multiselect";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  setup() {
    return { v$: useVuelidate() };
  },
  props: ["company", "address", "countries"],
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
        address_line_1: {
          required
        },
        address_line_2: {
          required
        },
        city: {
          required
        },
        state: {
          required
        },
        pincode: {
          required
        },
        country: {
          required
        }
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
    return {
      processing: false,
      form: this.$inertia.form({
        id: ((_b = (_a = this.address) == null ? void 0 : _a.data) == null ? void 0 : _b.id) || "",
        company_id: ((_d = (_c = this.company) == null ? void 0 : _c.data) == null ? void 0 : _d.id) || "",
        address_line_1: ((_f = (_e = this.address) == null ? void 0 : _e.data) == null ? void 0 : _f.address_line_1) || "",
        address_line_2: ((_h = (_g = this.address) == null ? void 0 : _g.data) == null ? void 0 : _h.address_line_2) || "",
        city: ((_j = (_i = this.address) == null ? void 0 : _i.data) == null ? void 0 : _j.city) || "",
        state: ((_l = (_k = this.address) == null ? void 0 : _k.data) == null ? void 0 : _l.state) || "",
        pincode: ((_n = (_m = this.address) == null ? void 0 : _m.data) == null ? void 0 : _n.pincode) || "",
        country: ((_q = (_p = (_o = this.address) == null ? void 0 : _o.data) == null ? void 0 : _p.country) == null ? void 0 : _q.id) || ""
      }),
      isEdit: false,
      title: "Company Address"
    };
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.form.transform((data) => ({
          ...data
        })).post(
          this.route("company.address"),
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
  const _component_Multiselect = resolveComponent("Multiselect");
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
              _push3(`Compant`);
            } else {
              return [
                createTextVNode("Compant")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>${ssrInterpolate(_ctx.company.data.company_name)}</li>`);
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
                createTextVNode("Compant")
              ]),
              _: 1
            })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, toDisplayString(_ctx.company.data.company_name), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
      if (_push2) {
        _push2(ssrRenderComponent(_component_Header, {
          company: (_a = _ctx.company) == null ? void 0 : _a.data,
          address: (_b = _ctx.address) == null ? void 0 : _b.data
        }, null, _parent2, _scopeId));
        _push2(`<div class="card mb-5 mb-xl-10"${_scopeId}><div class="card-header cursor-pointer"${_scopeId}><div class="card-title m-0"${_scopeId}><h3 class="fw-bold m-0"${_scopeId}>Company Address </h3></div><button class="btn btn-primary align-self-center btn-sm"${_scopeId}><i class="bi bi-pencil me-2"${_scopeId}></i>Edit Address </button></div>`);
        if (_ctx.isEdit) {
          _push2(`<div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
          _push2(`<form${_scopeId}><div class="row mb-6"${_scopeId}><label for="address-line-1" class="col-lg-4 col-form-label required fw-bold fs-6"${_scopeId}>Address Line 1 </label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "address-line-1",
            type: "text",
            modelValue: _ctx.v$.form.address_line_1.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.address_line_1.$model = $event,
            class: _ctx.v$.form.address_line_1.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Address Line 1"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.address_line_1.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label required fw-bold fs-6" for="address_line_2"${_scopeId}>Address Line 2</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "address_line_2",
            type: "text",
            modelValue: _ctx.v$.form.address_line_2.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.address_line_2.$model = $event,
            class: _ctx.v$.form.address_line_2.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Address Line 2"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.address_line_2.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label required fw-bold fs-6"${_scopeId}>City</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "city",
            type: "text",
            modelValue: _ctx.v$.form.city.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.city.$model = $event,
            class: _ctx.v$.form.city.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "City"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.city.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-bold fs-6"${_scopeId}>State</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "state",
            type: "text",
            modelValue: _ctx.v$.form.state.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.state.$model = $event,
            class: _ctx.v$.form.state.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "State"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.state.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-bold fs-6"${_scopeId}><span class="required"${_scopeId}>Country</span></label><div class="col-lg-8 fv-row"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Multiselect, {
            options: _ctx.countries.data,
            label: "label",
            valueProp: "id",
            class: [
              "form-control form-control-lg form-control-solid",
              _ctx.v$.form.country.$errors.length > 0 ? "is-invalid" : ""
            ],
            placeholder: "Select One",
            modelValue: _ctx.v$.form.country.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.country.$model = $event,
            "track-by": "label",
            searchable: true
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.country.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-bold fs-6"${_scopeId}>Pincode</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "pincode",
            type: "text",
            modelValue: _ctx.v$.form.pincode.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.pincode.$model = $event,
            class: _ctx.v$.form.pincode.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Pincode"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.pincode.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="d-flex justify-content-end mt-4"${_scopeId}><button type="button" class="btn btn-outline-secondary me-5"${_scopeId}>Discard</button><button type="submit" class="${ssrRenderClass([{ "text-white-50": _ctx.form.processing }, "btn btn-primary"])}"${_scopeId}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"${_scopeId}><span class="visually-hidden"${_scopeId}>Loading...</span></div> Save Changes </button></div></form></div></div></div>`);
        } else {
          _push2(`<div class="card-body"${_scopeId}><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Address Line 1</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_d = (_c = _ctx.address) == null ? void 0 : _c.data) == null ? void 0 : _d.address_line_1)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Address Line 2</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_f = (_e = _ctx.address) == null ? void 0 : _e.data) == null ? void 0 : _f.address_line_2)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>City</label><div class="col-lg-6 fv-row"${_scopeId}><span class="fw-bold text-gray-700 fs-6"${_scopeId}>${ssrInterpolate((_h = (_g = _ctx.address) == null ? void 0 : _g.data) == null ? void 0 : _h.city)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>State</label><div class="col-lg-6 d-flex align-items-center"${_scopeId}><span class="fw-bold fs-6 text-gray-700 me-2"${_scopeId}>${ssrInterpolate((_j = (_i = _ctx.address) == null ? void 0 : _i.data) == null ? void 0 : _j.state)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Pincode</label><div class="col-lg-6 d-flex align-items-center"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_l = (_k = _ctx.address) == null ? void 0 : _k.data) == null ? void 0 : _l.pincode)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Country</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_o = (_n = (_m = _ctx.address) == null ? void 0 : _m.data) == null ? void 0 : _n.country) == null ? void 0 : _o.name)}</span></div></div></div>`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_Header, {
            company: (_p = _ctx.company) == null ? void 0 : _p.data,
            address: (_q = _ctx.address) == null ? void 0 : _q.data
          }, null, 8, ["company", "address"]),
          createVNode("div", { class: "card mb-5 mb-xl-10" }, [
            createVNode("div", { class: "card-header cursor-pointer" }, [
              createVNode("div", { class: "card-title m-0" }, [
                createVNode("h3", { class: "fw-bold m-0" }, "Company Address ")
              ]),
              createVNode("button", {
                class: "btn btn-primary align-self-center btn-sm",
                onClick: ($event) => this.isEdit = this.isEdit ? false : true
              }, [
                createVNode("i", { class: "bi bi-pencil me-2" }),
                createTextVNode("Edit Address ")
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
                        for: "address-line-1",
                        class: "col-lg-4 col-form-label required fw-bold fs-6"
                      }, "Address Line 1 "),
                      createVNode("div", { class: "col-lg-8" }, [
                        createVNode(_component_jet_input, {
                          id: "address-line-1",
                          type: "text",
                          modelValue: _ctx.v$.form.address_line_1.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.address_line_1.$model = $event,
                          class: _ctx.v$.form.address_line_1.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Address Line 1"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.address_line_1.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "row mb-6" }, [
                      createVNode("label", {
                        class: "col-lg-4 col-form-label required fw-bold fs-6",
                        for: "address_line_2"
                      }, "Address Line 2"),
                      createVNode("div", { class: "col-lg-8" }, [
                        createVNode(_component_jet_input, {
                          id: "address_line_2",
                          type: "text",
                          modelValue: _ctx.v$.form.address_line_2.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.address_line_2.$model = $event,
                          class: _ctx.v$.form.address_line_2.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Address Line 2"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.address_line_2.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "row mb-6" }, [
                      createVNode("label", { class: "col-lg-4 col-form-label required fw-bold fs-6" }, "City"),
                      createVNode("div", { class: "col-lg-8" }, [
                        createVNode(_component_jet_input, {
                          id: "city",
                          type: "text",
                          modelValue: _ctx.v$.form.city.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.city.$model = $event,
                          class: _ctx.v$.form.city.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "City"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.city.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "row mb-6" }, [
                      createVNode("label", { class: "col-lg-4 col-form-label fw-bold fs-6" }, "State"),
                      createVNode("div", { class: "col-lg-8" }, [
                        createVNode(_component_jet_input, {
                          id: "state",
                          type: "text",
                          modelValue: _ctx.v$.form.state.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.state.$model = $event,
                          class: _ctx.v$.form.state.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "State"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.state.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "row mb-6" }, [
                      createVNode("label", { class: "col-lg-4 col-form-label fw-bold fs-6" }, [
                        createVNode("span", { class: "required" }, "Country")
                      ]),
                      createVNode("div", { class: "col-lg-8 fv-row" }, [
                        createVNode(_component_Multiselect, {
                          options: _ctx.countries.data,
                          label: "label",
                          valueProp: "id",
                          class: [
                            "form-control form-control-lg form-control-solid",
                            _ctx.v$.form.country.$errors.length > 0 ? "is-invalid" : ""
                          ],
                          placeholder: "Select One",
                          modelValue: _ctx.v$.form.country.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.country.$model = $event,
                          "track-by": "label",
                          searchable: true
                        }, null, 8, ["options", "modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.country.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "row mb-6" }, [
                      createVNode("label", { class: "col-lg-4 col-form-label fw-bold fs-6" }, "Pincode"),
                      createVNode("div", { class: "col-lg-8" }, [
                        createVNode(_component_jet_input, {
                          id: "pincode",
                          type: "text",
                          modelValue: _ctx.v$.form.pincode.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.pincode.$model = $event,
                          class: _ctx.v$.form.pincode.$errors.length > 0 ? "is-invalid" : "",
                          placeholder: "Pincode"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.pincode.$errors, (error, index) => {
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
                        class: "btn btn-outline-secondary me-5",
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
                createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Address Line 1"),
                createVNode("div", { class: "col-lg-6" }, [
                  createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_s = (_r = _ctx.address) == null ? void 0 : _r.data) == null ? void 0 : _s.address_line_1), 1)
                ])
              ]),
              createVNode("div", { class: "row mb-7" }, [
                createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Address Line 2"),
                createVNode("div", { class: "col-lg-6" }, [
                  createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_u = (_t = _ctx.address) == null ? void 0 : _t.data) == null ? void 0 : _u.address_line_2), 1)
                ])
              ]),
              createVNode("div", { class: "row mb-7" }, [
                createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "City"),
                createVNode("div", { class: "col-lg-6 fv-row" }, [
                  createVNode("span", { class: "fw-bold text-gray-700 fs-6" }, toDisplayString((_w = (_v = _ctx.address) == null ? void 0 : _v.data) == null ? void 0 : _w.city), 1)
                ])
              ]),
              createVNode("div", { class: "row mb-7" }, [
                createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "State"),
                createVNode("div", { class: "col-lg-6 d-flex align-items-center" }, [
                  createVNode("span", { class: "fw-bold fs-6 text-gray-700 me-2" }, toDisplayString((_y = (_x = _ctx.address) == null ? void 0 : _x.data) == null ? void 0 : _y.state), 1)
                ])
              ]),
              createVNode("div", { class: "row mb-7" }, [
                createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Pincode"),
                createVNode("div", { class: "col-lg-6 d-flex align-items-center" }, [
                  createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_A = (_z = _ctx.address) == null ? void 0 : _z.data) == null ? void 0 : _A.pincode), 1)
                ])
              ]),
              createVNode("div", { class: "row mb-7" }, [
                createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Country"),
                createVNode("div", { class: "col-lg-6" }, [
                  createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_D = (_C = (_B = _ctx.address) == null ? void 0 : _B.data) == null ? void 0 : _C.country) == null ? void 0 : _D.name), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Company/Address.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Address = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Address as default
};
