import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, withModifiers, Fragment, renderList, withDirectives, vShow, useSSRContext } from "vue";
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
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  setup() {
    return { v$: useVuelidate() };
  },
  props: ["company", "address", "account"],
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
        bank_name: {
          required
        },
        bank_address: {
          required
        },
        beneficiary_name: {
          required
        },
        account_number: {
          required
        },
        routing_number: {
          required
        },
        swift_code: {
          required
        },
        ifsc_code: {
          required
        },
        sort_code: {
          required
        }
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
    return {
      form: this.$inertia.form({
        id: ((_a = this.account) == null ? void 0 : _a.data.id) || "",
        company_id: ((_b = this.company) == null ? void 0 : _b.data.id) || "",
        bank_name: ((_d = (_c = this.account) == null ? void 0 : _c.data) == null ? void 0 : _d.bank_name) || "",
        bank_address: ((_f = (_e = this.account) == null ? void 0 : _e.data) == null ? void 0 : _f.bank_address) || "",
        beneficiary_name: ((_h = (_g = this.account) == null ? void 0 : _g.data) == null ? void 0 : _h.beneficiary_name) || "",
        account_number: ((_j = (_i = this.account) == null ? void 0 : _i.data) == null ? void 0 : _j.account_number) || "",
        routing_number: ((_l = (_k = this.account) == null ? void 0 : _k.data) == null ? void 0 : _l.routing_number) || "",
        swift_code: ((_n = (_m = this.account) == null ? void 0 : _m.data) == null ? void 0 : _n.swift_code) || "",
        ifsc_code: ((_p = (_o = this.account) == null ? void 0 : _o.data) == null ? void 0 : _p.ifsc_code) || "",
        sort_code: ((_r = (_q = this.account) == null ? void 0 : _q.data) == null ? void 0 : _r.sort_code) || ""
      }),
      isEdit: false,
      title: "Company Account"
    };
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.form.transform((data) => ({
          ...data
        })).post(
          this.route("company.account"),
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
    }
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
                createTextVNode("Company")
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
      if (_push2) {
        _push2(ssrRenderComponent(_component_Header, {
          company: _ctx.company.data,
          address: _ctx.address.data
        }, null, _parent2, _scopeId));
        _push2(`<div class="card mb-5 mb-xl-10"${_scopeId}><div class="card-header cursor-pointer"${_scopeId}><div class="card-title m-0"${_scopeId}><h3 class="fw-bold m-0"${_scopeId}>Company Bank Details </h3></div><button class="btn btn-primary align-self-center btn-sm"${_scopeId}><i class="bi bi-pencil me-2"${_scopeId}></i>Edit Account </button></div><div class="card-body p-4"${_scopeId}>`);
        if (_ctx.isEdit) {
          _push2(`<div class="row"${_scopeId}><div class="col-12"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
          _push2(`<form${_scopeId}><div class="card-body border-top p-9"${_scopeId}><div class="row mb-6"${_scopeId}><label for="bank-name" class="col-lg-4 col-form-label required fw-bold fs-6"${_scopeId}>Bank Name</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "bank-name",
            type: "text",
            modelValue: _ctx.v$.form.bank_name.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.bank_name.$model = $event,
            class: _ctx.v$.form.bank_name.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Bank Name"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.bank_name.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label required fw-bold fs-6"${_scopeId}>Bank Address</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "bank_address",
            type: "text",
            modelValue: _ctx.v$.form.bank_address.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.bank_address.$model = $event,
            class: _ctx.v$.form.bank_address.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Bank Address"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.bank_address.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label required fw-bold fs-6"${_scopeId}>Beneficiary Name</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "beneficiary_name",
            type: "text",
            modelValue: _ctx.v$.form.beneficiary_name.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.beneficiary_name.$model = $event,
            class: _ctx.v$.form.beneficiary_name.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Beneficiary Name"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.beneficiary_name.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-bold fs-6"${_scopeId}>Account Number</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "account_number",
            type: "text",
            modelValue: _ctx.v$.form.account_number.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.account_number.$model = $event,
            class: _ctx.v$.form.account_number.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Account Number"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.account_number.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-bold fs-6"${_scopeId}>Routing Number</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "routing_number",
            type: "text",
            modelValue: _ctx.v$.form.routing_number.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.routing_number.$model = $event,
            class: _ctx.v$.form.routing_number.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Routing Number"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.routing_number.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-bold fs-6"${_scopeId}>Swift Code</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "swift_code",
            type: "text",
            modelValue: _ctx.v$.form.swift_code.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.swift_code.$model = $event,
            class: _ctx.v$.form.swift_code.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Swift Code"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.swift_code.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-bold fs-6"${_scopeId}>IFSC Code</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "ifsc_code",
            type: "text",
            modelValue: _ctx.v$.form.ifsc_code.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.ifsc_code.$model = $event,
            class: _ctx.v$.form.ifsc_code.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "IFSC Code"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.ifsc_code.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-bold fs-6"${_scopeId}>Sort Code</label><div class="col-lg-8"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "sort_code",
            type: "text",
            modelValue: _ctx.v$.form.sort_code.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.sort_code.$model = $event,
            class: _ctx.v$.form.sort_code.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Sort Code"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.sort_code.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div></div><div class="d-flex justify-content-end mt-4"${_scopeId}><button type="button" class="btn btn-outline-secondary me-5"${_scopeId}>Discard</button><button type="submit" class="${ssrRenderClass([{ "text-white-50": _ctx.form.processing }, "btn btn-primary"])}"${_scopeId}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"${_scopeId}><span class="visually-hidden"${_scopeId}>Loading...</span></div> Save Changes </button></div></form></div></div>`);
        } else {
          _push2(`<div${_scopeId}><div class="card-body p-9"${_scopeId}><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Bank Name</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_b = (_a = _ctx.account) == null ? void 0 : _a.data) == null ? void 0 : _b.bank_name)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Bank Account</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_d = (_c = _ctx.account) == null ? void 0 : _c.data) == null ? void 0 : _d.bank_address)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Beneficiary Name</label><div class="col-lg-6 fv-row"${_scopeId}><span class="fw-bold text-gray-700 fs-6"${_scopeId}>${ssrInterpolate((_f = (_e = _ctx.account) == null ? void 0 : _e.data) == null ? void 0 : _f.beneficiary_name)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Account Number</label><div class="col-lg-6 d-flex align-items-center"${_scopeId}><span class="fw-bold fs-6 text-gray-700 me-2"${_scopeId}>${ssrInterpolate((_h = (_g = _ctx.account) == null ? void 0 : _g.data) == null ? void 0 : _h.account_number)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Routing Number</label><div class="col-lg-6 d-flex align-items-center"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_j = (_i = _ctx.account) == null ? void 0 : _i.data) == null ? void 0 : _j.routing_number)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Swift Code</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_l = (_k = _ctx.account) == null ? void 0 : _k.data) == null ? void 0 : _l.swift_code)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>IFSC Code</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_n = (_m = _ctx.account) == null ? void 0 : _m.data) == null ? void 0 : _n.ifsc_code)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Sort Code</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_p = (_o = _ctx.account) == null ? void 0 : _o.data) == null ? void 0 : _p.sort_code)}</span></div></div></div></div>`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode(_component_Header, {
            company: _ctx.company.data,
            address: _ctx.address.data
          }, null, 8, ["company", "address"]),
          createVNode("div", { class: "card mb-5 mb-xl-10" }, [
            createVNode("div", { class: "card-header cursor-pointer" }, [
              createVNode("div", { class: "card-title m-0" }, [
                createVNode("h3", { class: "fw-bold m-0" }, "Company Bank Details ")
              ]),
              createVNode("button", {
                class: "btn btn-primary align-self-center btn-sm",
                onClick: ($event) => this.isEdit = this.isEdit ? false : true
              }, [
                createVNode("i", { class: "bi bi-pencil me-2" }),
                createTextVNode("Edit Account ")
              ], 8, ["onClick"])
            ]),
            createVNode("div", { class: "card-body p-4" }, [
              _ctx.isEdit ? (openBlock(), createBlock("div", {
                key: 0,
                class: "row"
              }, [
                createVNode("div", { class: "col-12" }, [
                  createVNode(_component_JetValidationErrors),
                  createVNode("form", {
                    onSubmit: withModifiers(_ctx.submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "card-body border-top p-9" }, [
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode("label", {
                          for: "bank-name",
                          class: "col-lg-4 col-form-label required fw-bold fs-6"
                        }, "Bank Name"),
                        createVNode("div", { class: "col-lg-8" }, [
                          createVNode(_component_jet_input, {
                            id: "bank-name",
                            type: "text",
                            modelValue: _ctx.v$.form.bank_name.$model,
                            "onUpdate:modelValue": ($event) => _ctx.v$.form.bank_name.$model = $event,
                            class: _ctx.v$.form.bank_name.$errors.length > 0 ? "is-invalid" : "",
                            placeholder: "Bank Name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.bank_name.$errors, (error, index) => {
                            return openBlock(), createBlock("div", { key: index }, [
                              createVNode(_component_input_error, {
                                message: error.$message
                              }, null, 8, ["message"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode("label", { class: "col-lg-4 col-form-label required fw-bold fs-6" }, "Bank Address"),
                        createVNode("div", { class: "col-lg-8" }, [
                          createVNode(_component_jet_input, {
                            id: "bank_address",
                            type: "text",
                            modelValue: _ctx.v$.form.bank_address.$model,
                            "onUpdate:modelValue": ($event) => _ctx.v$.form.bank_address.$model = $event,
                            class: _ctx.v$.form.bank_address.$errors.length > 0 ? "is-invalid" : "",
                            placeholder: "Bank Address"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.bank_address.$errors, (error, index) => {
                            return openBlock(), createBlock("div", { key: index }, [
                              createVNode(_component_input_error, {
                                message: error.$message
                              }, null, 8, ["message"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode("label", { class: "col-lg-4 col-form-label required fw-bold fs-6" }, "Beneficiary Name"),
                        createVNode("div", { class: "col-lg-8" }, [
                          createVNode(_component_jet_input, {
                            id: "beneficiary_name",
                            type: "text",
                            modelValue: _ctx.v$.form.beneficiary_name.$model,
                            "onUpdate:modelValue": ($event) => _ctx.v$.form.beneficiary_name.$model = $event,
                            class: _ctx.v$.form.beneficiary_name.$errors.length > 0 ? "is-invalid" : "",
                            placeholder: "Beneficiary Name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.beneficiary_name.$errors, (error, index) => {
                            return openBlock(), createBlock("div", { key: index }, [
                              createVNode(_component_input_error, {
                                message: error.$message
                              }, null, 8, ["message"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode("label", { class: "col-lg-4 col-form-label fw-bold fs-6" }, "Account Number"),
                        createVNode("div", { class: "col-lg-8" }, [
                          createVNode(_component_jet_input, {
                            id: "account_number",
                            type: "text",
                            modelValue: _ctx.v$.form.account_number.$model,
                            "onUpdate:modelValue": ($event) => _ctx.v$.form.account_number.$model = $event,
                            class: _ctx.v$.form.account_number.$errors.length > 0 ? "is-invalid" : "",
                            placeholder: "Account Number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.account_number.$errors, (error, index) => {
                            return openBlock(), createBlock("div", { key: index }, [
                              createVNode(_component_input_error, {
                                message: error.$message
                              }, null, 8, ["message"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode("label", { class: "col-lg-4 col-form-label fw-bold fs-6" }, "Routing Number"),
                        createVNode("div", { class: "col-lg-8" }, [
                          createVNode(_component_jet_input, {
                            id: "routing_number",
                            type: "text",
                            modelValue: _ctx.v$.form.routing_number.$model,
                            "onUpdate:modelValue": ($event) => _ctx.v$.form.routing_number.$model = $event,
                            class: _ctx.v$.form.routing_number.$errors.length > 0 ? "is-invalid" : "",
                            placeholder: "Routing Number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.routing_number.$errors, (error, index) => {
                            return openBlock(), createBlock("div", { key: index }, [
                              createVNode(_component_input_error, {
                                message: error.$message
                              }, null, 8, ["message"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode("label", { class: "col-lg-4 col-form-label fw-bold fs-6" }, "Swift Code"),
                        createVNode("div", { class: "col-lg-8" }, [
                          createVNode(_component_jet_input, {
                            id: "swift_code",
                            type: "text",
                            modelValue: _ctx.v$.form.swift_code.$model,
                            "onUpdate:modelValue": ($event) => _ctx.v$.form.swift_code.$model = $event,
                            class: _ctx.v$.form.swift_code.$errors.length > 0 ? "is-invalid" : "",
                            placeholder: "Swift Code"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.swift_code.$errors, (error, index) => {
                            return openBlock(), createBlock("div", { key: index }, [
                              createVNode(_component_input_error, {
                                message: error.$message
                              }, null, 8, ["message"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode("label", { class: "col-lg-4 col-form-label fw-bold fs-6" }, "IFSC Code"),
                        createVNode("div", { class: "col-lg-8" }, [
                          createVNode(_component_jet_input, {
                            id: "ifsc_code",
                            type: "text",
                            modelValue: _ctx.v$.form.ifsc_code.$model,
                            "onUpdate:modelValue": ($event) => _ctx.v$.form.ifsc_code.$model = $event,
                            class: _ctx.v$.form.ifsc_code.$errors.length > 0 ? "is-invalid" : "",
                            placeholder: "IFSC Code"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.ifsc_code.$errors, (error, index) => {
                            return openBlock(), createBlock("div", { key: index }, [
                              createVNode(_component_input_error, {
                                message: error.$message
                              }, null, 8, ["message"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode("label", { class: "col-lg-4 col-form-label fw-bold fs-6" }, "Sort Code"),
                        createVNode("div", { class: "col-lg-8" }, [
                          createVNode(_component_jet_input, {
                            id: "sort_code",
                            type: "text",
                            modelValue: _ctx.v$.form.sort_code.$model,
                            "onUpdate:modelValue": ($event) => _ctx.v$.form.sort_code.$model = $event,
                            class: _ctx.v$.form.sort_code.$errors.length > 0 ? "is-invalid" : "",
                            placeholder: "Sort Code"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.sort_code.$errors, (error, index) => {
                            return openBlock(), createBlock("div", { key: index }, [
                              createVNode(_component_input_error, {
                                message: error.$message
                              }, null, 8, ["message"])
                            ]);
                          }), 128))
                        ])
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
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "card-body p-9" }, [
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Bank Name"),
                    createVNode("div", { class: "col-lg-6" }, [
                      createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_r = (_q = _ctx.account) == null ? void 0 : _q.data) == null ? void 0 : _r.bank_name), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Bank Account"),
                    createVNode("div", { class: "col-lg-6" }, [
                      createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_t = (_s = _ctx.account) == null ? void 0 : _s.data) == null ? void 0 : _t.bank_address), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Beneficiary Name"),
                    createVNode("div", { class: "col-lg-6 fv-row" }, [
                      createVNode("span", { class: "fw-bold text-gray-700 fs-6" }, toDisplayString((_v = (_u = _ctx.account) == null ? void 0 : _u.data) == null ? void 0 : _v.beneficiary_name), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Account Number"),
                    createVNode("div", { class: "col-lg-6 d-flex align-items-center" }, [
                      createVNode("span", { class: "fw-bold fs-6 text-gray-700 me-2" }, toDisplayString((_x = (_w = _ctx.account) == null ? void 0 : _w.data) == null ? void 0 : _x.account_number), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Routing Number"),
                    createVNode("div", { class: "col-lg-6 d-flex align-items-center" }, [
                      createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_z = (_y = _ctx.account) == null ? void 0 : _y.data) == null ? void 0 : _z.routing_number), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Swift Code"),
                    createVNode("div", { class: "col-lg-6" }, [
                      createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_B = (_A = _ctx.account) == null ? void 0 : _A.data) == null ? void 0 : _B.swift_code), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "IFSC Code"),
                    createVNode("div", { class: "col-lg-6" }, [
                      createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_D = (_C = _ctx.account) == null ? void 0 : _C.data) == null ? void 0 : _D.ifsc_code), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Sort Code"),
                    createVNode("div", { class: "col-lg-6" }, [
                      createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_F = (_E = _ctx.account) == null ? void 0 : _E.data) == null ? void 0 : _F.sort_code), 1)
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Company/Account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Account = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Account as default
};
