import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, withModifiers, Fragment, renderList, withDirectives, vModelText, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import Header from "./Header-b1968f10.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { toast } from "vue3-toastify";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  props: ["supplier", "address", "countries"],
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      form: {
        country: {
          required
        },
        supplier_name: {
          required
        },
        display_name: {
          required
        },
        email_address: {
          required,
          email
        },
        website: {},
        skype_profile: {},
        linkedin_profile: {},
        description: {
          required
        },
        status: {
          required
        }
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
    return {
      isEdit: false,
      processing: false,
      title: "Supplier Overview",
      form: this.$inertia.form({
        id: ((_b = (_a = this.supplier) == null ? void 0 : _a.data) == null ? void 0 : _b.id) || "",
        supplier_name: ((_d = (_c = this.supplier) == null ? void 0 : _c.data) == null ? void 0 : _d.supplier_name) || "",
        display_name: ((_f = (_e = this.supplier) == null ? void 0 : _e.data) == null ? void 0 : _f.display_name) || "",
        email_address: ((_h = (_g = this.supplier) == null ? void 0 : _g.data) == null ? void 0 : _h.email_address) || "",
        website: ((_j = (_i = this.supplier) == null ? void 0 : _i.data) == null ? void 0 : _j.website) || "",
        skype_profile: ((_l = (_k = this.supplier) == null ? void 0 : _k.data) == null ? void 0 : _l.skype_profile) || "",
        linkedin_profile: ((_n = (_m = this.supplier) == null ? void 0 : _m.data) == null ? void 0 : _n.linkedin_profile) || "",
        description: ((_p = (_o = this.supplier) == null ? void 0 : _o.data) == null ? void 0 : _p.description) || "",
        country: ((_s = (_r = (_q = this.supplier) == null ? void 0 : _q.data) == null ? void 0 : _r.country) == null ? void 0 : _s.id) || "",
        status: ((_u = (_t = this.supplier) == null ? void 0 : _t.data) == null ? void 0 : _u.status) || "",
        action: "supplier.overview"
      }),
      status: [
        { name: "Active", id: "1" },
        { name: "Inactive", id: "0" }
      ]
    };
  },
  components: {
    AppLayout,
    Header,
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
        this.processing = true, this.form.transform((data) => ({
          ...data
        })).post(
          this.route("supplier.update", this.form.id),
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
  const _component_Multiselect = resolveComponent("Multiselect");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_AppLayout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/supplier",
          class: "text-muted text-hover-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Supplier`);
            } else {
              return [
                createTextVNode("Supplier")
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
              href: "/supplier",
              class: "text-muted text-hover-primary"
            }, {
              default: withCtx(() => [
                createTextVNode("Supplier")
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T;
      if (_push2) {
        _push2(ssrRenderComponent(_component_Header, {
          supplier: (_a = _ctx.supplier) == null ? void 0 : _a.data,
          address: (_b = _ctx.address) == null ? void 0 : _b.data
        }, null, _parent2, _scopeId));
        _push2(`<div class="card mb-5 mb-xl-10"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title m-0"${_scopeId}><h3 class="fw-bold m-0"${_scopeId}>Manage Supplier </h3></div><button class="btn btn-primary btn-sm align-self-center"${_scopeId}><i class="bi bi-pencil me-2"${_scopeId}></i>Edit </button></div><div class="card-body"${_scopeId}>`);
        if (_ctx.isEdit) {
          _push2(`<div class="row"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
          _push2(`<form class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10"${_scopeId}><div class="row g-5"${_scopeId}><div class="col-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "supplier_name",
            value: "Supplier Name"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "supplier_name",
            type: "supplier_name",
            modelValue: _ctx.v$.form.supplier_name.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.supplier_name.$model = $event,
            class: _ctx.v$.form.supplier_name.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Supplier Name"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.supplier_name.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div><div class="col-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "display_name",
            value: "Display Name"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "display_name",
            type: "text",
            modelValue: _ctx.v$.form.display_name.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.display_name.$model = $event,
            class: _ctx.v$.form.display_name.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Enter supplier Display Name"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.display_name.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div><div class="fv-row col-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "email_address",
            value: "Email Address"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "email_address",
            type: "text",
            modelValue: _ctx.v$.form.email_address.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.email_address.$model = $event,
            class: _ctx.v$.form.email_address.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Email Address"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.email_address.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div><div class="col-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "website",
            value: "Website"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "website",
            type: "text",
            modelValue: _ctx.v$.form.website.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.website.$model = $event,
            class: _ctx.v$.form.website.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Website"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.website.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div><div class="col-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "skype_profile",
            value: "Skype Profile"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "skype_profile",
            type: "text",
            modelValue: _ctx.v$.form.skype_profile.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.skype_profile.$model = $event,
            class: _ctx.v$.form.skype_profile.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Skype Profile"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.skype_profile.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div><div class="col-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "linkedin_profile",
            value: "LinkedIn Profile"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "linkedin_profile",
            type: "text",
            modelValue: _ctx.v$.form.linkedin_profile.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.linkedin_profile.$model = $event,
            class: _ctx.v$.form.linkedin_profile.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "LinkedIn Profile"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.linkedin_profile.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div><div class="fv-row col-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "country",
            value: "Country"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_Multiselect, {
            "can-clear": false,
            options: _ctx.countries.data,
            label: "display_name",
            valueProp: "id",
            class: [
              "form-control form-control-lg form-control-solid",
              _ctx.v$.form.country.$errors.length > 0 ? "is-invalid" : ""
            ],
            placeholder: "Select Country",
            modelValue: _ctx.form.country,
            "onUpdate:modelValue": ($event) => _ctx.form.country = $event,
            "track-by": "display_name",
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
          _push2(`<!--]--></div><div class="col-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "status",
            value: "Status"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_Multiselect, {
            "can-clear": false,
            options: _ctx.status,
            label: "name",
            valueProp: "id",
            class: [
              "form-control form-control-lg form-control-solid",
              _ctx.v$.form.status.$errors.length > 0 ? "is-invalid" : ""
            ],
            placeholder: "Select One",
            modelValue: _ctx.form.status,
            "onUpdate:modelValue": ($event) => _ctx.form.status = $event,
            "track-by": "name"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.status.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div><div class="fv-row col-12"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "description",
            value: "Description"
          }, null, _parent2, _scopeId));
          _push2(`<textarea id="description" type="text" class="${ssrRenderClass([
            _ctx.v$.form.description.$errors.length > 0 ? "is-invalid" : "",
            "form-control form-control-lg form-control-solid"
          ])}" placeholder="Type description here..."${_scopeId}>${ssrInterpolate(_ctx.v$.form.description.$model)}</textarea><!--[-->`);
          ssrRenderList(_ctx.v$.form.description.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row text-align-center p-3"${_scopeId}><div class="col-12"${_scopeId}><div class="d-flex justify-content-end gap-5"${_scopeId}><button type="button" class="btn btn-secondary me-5"${_scopeId}>Discard</button><button type="submit" class="btn btn-primary align-items-center justify-content-center"${ssrRenderAttr("data-kt-indicator", _ctx.processing ? "on" : "off")}${_scopeId}><span class="indicator-label"${_scopeId}><span${_scopeId}>Save Changes</span></span><span class="indicator-progress"${_scopeId}> Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"${_scopeId}></span></span></button></div></div></div></form></div>`);
        } else {
          _push2(`<div${_scopeId}><div class="row mb-7"${_scopeId}><label class="col-lg-6 fw-bold fs-5 text-gray-800"${_scopeId}>Supplier Name</label><div class="col-lg-6 fv-row"${_scopeId}><span class="fw-bold fs-6 text-gray-700 text-capitalize"${_scopeId}>${ssrInterpolate((_d = (_c = this.supplier) == null ? void 0 : _c.data) == null ? void 0 : _d.supplier_name)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-lg-6 fw-bold fs-5 text-gray-800"${_scopeId}>Display Name</label><div class="col-lg-6 fv-row"${_scopeId}><span class="fw-bold fs-6 text-gray-700 text-capitalize"${_scopeId}>${ssrInterpolate((_f = (_e = this.supplier) == null ? void 0 : _e.data) == null ? void 0 : _f.display_name)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-lg-6 fw-bold fs-5 text-gray-800"${_scopeId}>Email Address</label><div class="col-lg-6 fv-row"${_scopeId}><span class="fw-bold fs-6 text-gray-700 text-capitalize"${_scopeId}>${ssrInterpolate((_h = (_g = this.supplier) == null ? void 0 : _g.data) == null ? void 0 : _h.email_address)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-lg-6 fw-bold fs-5 text-gray-800"${_scopeId}>Website </label><div class="col-lg-6 d-flex align-items-center"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_j = (_i = this.supplier) == null ? void 0 : _i.data) == null ? void 0 : _j.website)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-lg-6 fw-bold fs-5 text-gray-800"${_scopeId}>Skype ID</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_l = (_k = this.supplier) == null ? void 0 : _k.data) == null ? void 0 : _l.skype_profile)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-lg-6 fw-bold fs-5 text-gray-800"${_scopeId}>Linked Profile ID</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_n = (_m = this.supplier) == null ? void 0 : _m.data) == null ? void 0 : _n.linkedin_profile)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-lg-6 fw-bold fs-5 text-gray-800"${_scopeId}>Country</label><div class="col-lg-6 fv-row"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_q = (_p = (_o = this.supplier) == null ? void 0 : _o.data) == null ? void 0 : _p.country) == null ? void 0 : _q.display_name)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-lg-6 fw-bold fs-5 text-gray-800"${_scopeId}>Status</label><div class="col-lg-6"${_scopeId}>`);
          if (((_s = (_r = this.supplier) == null ? void 0 : _r.data) == null ? void 0 : _s.status) == 1) {
            _push2(`<span class="badge badge-success"${_scopeId}>Active</span>`);
          } else {
            _push2(`<!---->`);
          }
          if (((_u = (_t = this.supplier) == null ? void 0 : _t.data) == null ? void 0 : _u.status) == 0) {
            _push2(`<span class="badge badge-danger"${_scopeId}>Inactive</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div><div class="row mb-7"${_scopeId}><label class="col-lg-6 fw-bold fs-5 text-gray-800"${_scopeId}>Description</label><div class="col-lg-6"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate((_w = (_v = this.supplier) == null ? void 0 : _v.data) == null ? void 0 : _w.description)}</span></div></div></div>`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode(_component_Header, {
            supplier: (_x = _ctx.supplier) == null ? void 0 : _x.data,
            address: (_y = _ctx.address) == null ? void 0 : _y.data
          }, null, 8, ["supplier", "address"]),
          createVNode("div", { class: "card mb-5 mb-xl-10" }, [
            createVNode("div", { class: "card-header" }, [
              createVNode("div", { class: "card-title m-0" }, [
                createVNode("h3", { class: "fw-bold m-0" }, "Manage Supplier ")
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
                    createVNode("div", { class: "col-6" }, [
                      createVNode(_component_jet_label, {
                        for: "supplier_name",
                        value: "Supplier Name"
                      }),
                      createVNode(_component_jet_input, {
                        id: "supplier_name",
                        type: "supplier_name",
                        modelValue: _ctx.v$.form.supplier_name.$model,
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.supplier_name.$model = $event,
                        class: _ctx.v$.form.supplier_name.$errors.length > 0 ? "is-invalid" : "",
                        placeholder: "Supplier Name"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.supplier_name.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "col-6" }, [
                      createVNode(_component_jet_label, {
                        for: "display_name",
                        value: "Display Name"
                      }),
                      createVNode(_component_jet_input, {
                        id: "display_name",
                        type: "text",
                        modelValue: _ctx.v$.form.display_name.$model,
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.display_name.$model = $event,
                        class: _ctx.v$.form.display_name.$errors.length > 0 ? "is-invalid" : "",
                        placeholder: "Enter supplier Display Name"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.display_name.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "fv-row col-6" }, [
                      createVNode(_component_jet_label, {
                        for: "email_address",
                        value: "Email Address"
                      }),
                      createVNode(_component_jet_input, {
                        id: "email_address",
                        type: "text",
                        modelValue: _ctx.v$.form.email_address.$model,
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.email_address.$model = $event,
                        class: _ctx.v$.form.email_address.$errors.length > 0 ? "is-invalid" : "",
                        placeholder: "Email Address"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.email_address.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "col-6" }, [
                      createVNode(_component_jet_label, {
                        for: "website",
                        value: "Website"
                      }),
                      createVNode(_component_jet_input, {
                        id: "website",
                        type: "text",
                        modelValue: _ctx.v$.form.website.$model,
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.website.$model = $event,
                        class: _ctx.v$.form.website.$errors.length > 0 ? "is-invalid" : "",
                        placeholder: "Website"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.website.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "col-6" }, [
                      createVNode(_component_jet_label, {
                        for: "skype_profile",
                        value: "Skype Profile"
                      }),
                      createVNode(_component_jet_input, {
                        id: "skype_profile",
                        type: "text",
                        modelValue: _ctx.v$.form.skype_profile.$model,
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.skype_profile.$model = $event,
                        class: _ctx.v$.form.skype_profile.$errors.length > 0 ? "is-invalid" : "",
                        placeholder: "Skype Profile"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.skype_profile.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "col-6" }, [
                      createVNode(_component_jet_label, {
                        for: "linkedin_profile",
                        value: "LinkedIn Profile"
                      }),
                      createVNode(_component_jet_input, {
                        id: "linkedin_profile",
                        type: "text",
                        modelValue: _ctx.v$.form.linkedin_profile.$model,
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.linkedin_profile.$model = $event,
                        class: _ctx.v$.form.linkedin_profile.$errors.length > 0 ? "is-invalid" : "",
                        placeholder: "LinkedIn Profile"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.linkedin_profile.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "fv-row col-6" }, [
                      createVNode(_component_jet_label, {
                        for: "country",
                        value: "Country"
                      }),
                      createVNode(_component_Multiselect, {
                        "can-clear": false,
                        options: _ctx.countries.data,
                        label: "display_name",
                        valueProp: "id",
                        class: [
                          "form-control form-control-lg form-control-solid",
                          _ctx.v$.form.country.$errors.length > 0 ? "is-invalid" : ""
                        ],
                        placeholder: "Select Country",
                        modelValue: _ctx.form.country,
                        "onUpdate:modelValue": ($event) => _ctx.form.country = $event,
                        "track-by": "display_name",
                        searchable: true
                      }, null, 8, ["options", "modelValue", "onUpdate:modelValue", "class"]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.country.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "col-6" }, [
                      createVNode(_component_jet_label, {
                        for: "status",
                        value: "Status"
                      }),
                      createVNode(_component_Multiselect, {
                        "can-clear": false,
                        options: _ctx.status,
                        label: "name",
                        valueProp: "id",
                        class: [
                          "form-control form-control-lg form-control-solid",
                          _ctx.v$.form.status.$errors.length > 0 ? "is-invalid" : ""
                        ],
                        placeholder: "Select One",
                        modelValue: _ctx.form.status,
                        "onUpdate:modelValue": ($event) => _ctx.form.status = $event,
                        "track-by": "name"
                      }, null, 8, ["options", "modelValue", "onUpdate:modelValue", "class"]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.status.$errors, (error, index) => {
                        return openBlock(), createBlock("div", { key: index }, [
                          createVNode(_component_input_error, {
                            message: error.$message
                          }, null, 8, ["message"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "fv-row col-12" }, [
                      createVNode(_component_jet_label, {
                        for: "description",
                        value: "Description"
                      }),
                      withDirectives(createVNode("textarea", {
                        id: "description",
                        class: [
                          "form-control form-control-lg form-control-solid",
                          _ctx.v$.form.description.$errors.length > 0 ? "is-invalid" : ""
                        ],
                        type: "text",
                        "onUpdate:modelValue": ($event) => _ctx.v$.form.description.$model = $event,
                        placeholder: "Type description here..."
                      }, null, 10, ["onUpdate:modelValue"]), [
                        [vModelText, _ctx.v$.form.description.$model]
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.description.$errors, (error, index) => {
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
                  createVNode("label", { class: "col-lg-6 fw-bold fs-5 text-gray-800" }, "Supplier Name"),
                  createVNode("div", { class: "col-lg-6 fv-row" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700 text-capitalize" }, toDisplayString((_A = (_z = this.supplier) == null ? void 0 : _z.data) == null ? void 0 : _A.supplier_name), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-lg-6 fw-bold fs-5 text-gray-800" }, "Display Name"),
                  createVNode("div", { class: "col-lg-6 fv-row" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700 text-capitalize" }, toDisplayString((_C = (_B = this.supplier) == null ? void 0 : _B.data) == null ? void 0 : _C.display_name), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-lg-6 fw-bold fs-5 text-gray-800" }, "Email Address"),
                  createVNode("div", { class: "col-lg-6 fv-row" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700 text-capitalize" }, toDisplayString((_E = (_D = this.supplier) == null ? void 0 : _D.data) == null ? void 0 : _E.email_address), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-lg-6 fw-bold fs-5 text-gray-800" }, "Website "),
                  createVNode("div", { class: "col-lg-6 d-flex align-items-center" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_G = (_F = this.supplier) == null ? void 0 : _F.data) == null ? void 0 : _G.website), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-lg-6 fw-bold fs-5 text-gray-800" }, "Skype ID"),
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_I = (_H = this.supplier) == null ? void 0 : _H.data) == null ? void 0 : _I.skype_profile), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-lg-6 fw-bold fs-5 text-gray-800" }, "Linked Profile ID"),
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_K = (_J = this.supplier) == null ? void 0 : _J.data) == null ? void 0 : _K.linkedin_profile), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-lg-6 fw-bold fs-5 text-gray-800" }, "Country"),
                  createVNode("div", { class: "col-lg-6 fv-row" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_N = (_M = (_L = this.supplier) == null ? void 0 : _L.data) == null ? void 0 : _M.country) == null ? void 0 : _N.display_name), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-lg-6 fw-bold fs-5 text-gray-800" }, "Status"),
                  createVNode("div", { class: "col-lg-6" }, [
                    ((_P = (_O = this.supplier) == null ? void 0 : _O.data) == null ? void 0 : _P.status) == 1 ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "badge badge-success"
                    }, "Active")) : createCommentVNode("", true),
                    ((_R = (_Q = this.supplier) == null ? void 0 : _Q.data) == null ? void 0 : _R.status) == 0 ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "badge badge-danger"
                    }, "Inactive")) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-lg-6 fw-bold fs-5 text-gray-800" }, "Description"),
                  createVNode("div", { class: "col-lg-6" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString((_T = (_S = this.supplier) == null ? void 0 : _S.data) == null ? void 0 : _T.description), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Supplier/Overview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Overview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Overview as default
};
