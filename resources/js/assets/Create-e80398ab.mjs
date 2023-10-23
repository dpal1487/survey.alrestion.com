import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, withDirectives, vModelText, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import useVuelidate from "@vuelidate/core";
import { required, email, url } from "@vuelidate/validators";
import { toast } from "vue3-toastify";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  props: ["supplier", "countries"],
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
        },
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G;
    return {
      isEdit: false,
      processing: false,
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
        complete_url: ((_x = (_w = (_v = this.supplier) == null ? void 0 : _v.data) == null ? void 0 : _w.supplier_redirect) == null ? void 0 : _x.complete_url) || "",
        terminate_url: ((_A = (_z = (_y = this.supplier) == null ? void 0 : _y.data) == null ? void 0 : _z.supplier_redirect) == null ? void 0 : _A.terminate_url) || "",
        quotafull_url: ((_D = (_C = (_B = this.supplier) == null ? void 0 : _B.data) == null ? void 0 : _C.supplier_redirect) == null ? void 0 : _D.quotafull_url) || "",
        security_terminate_url: ((_G = (_F = (_E = this.supplier) == null ? void 0 : _E.data) == null ? void 0 : _F.supplier_redirect) == null ? void 0 : _G.security_terminate_url) || ""
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
        })).post(route().current() == "supplier.create" ? this.route("supplier.store") : this.route("supplier.update", this.form.id), {
          onSuccess: (data) => {
            toast.success(this.$page.props.jetstream.flash.message);
            this.isEdit = false;
          },
          onError: (data) => {
            if (data.message) {
              toast.error(data.message);
            }
          }
        });
      }
    }
  },
  created() {
    if (route().current() == "supplier.edit") {
      this.isEdit = true;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_Link = resolveComponent("Link");
  const _component_JetValidationErrors = resolveComponent("JetValidationErrors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _component_input_error = resolveComponent("input-error");
  const _component_jet_input = resolveComponent("jet-input");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, {
    title: _ctx.isEdit ? "Edit Supplier" : `Add New supplier`
  }, null, _parent));
  _push(ssrRenderComponent(_component_AppLayout, {
    title: _ctx.isEdit ? "Edit supplier" : `Add New supplier`
  }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/suppliers",
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
        _push2(`</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}> Supplier Form </li>`);
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
                createTextVNode("Supplier")
              ]),
              _: 1
            })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, " Supplier Form ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="d-flex flex-column flex-lg-row flex-column-fluid justify-content-center"${_scopeId}><div class="col-12"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
        _push2(`<form class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10"${_scopeId}><div class="card"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>General</h2></div></div><div class="card-body"${_scopeId}><div class="row g-5 col-md-12"${_scopeId}><div class="fv-row col-md-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "country",
          value: "Country"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Multiselect, {
          options: _ctx.countries.data,
          "can-clear": false,
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
        _push2(`<!--]--></div><div class="fv-row col-md-6"${_scopeId}>`);
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
        _push2(`<!--]--></div><div class="fv-row col-md-6"${_scopeId}>`);
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
        _push2(`<!--]--></div><div class="fv-row col-md-6"${_scopeId}>`);
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
        _push2(`<!--]--></div><div class="fv-row col-md-6"${_scopeId}>`);
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
        _push2(`<!--]--></div><div class="fv-row col-md-6"${_scopeId}>`);
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
        _push2(`<!--]--></div><div class="fv-row col-md-6"${_scopeId}>`);
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
        _push2(`<!--]--></div><div class="fv-row col-md-6"${_scopeId}>`);
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
        _push2(`<textarea rows="2" class="${ssrRenderClass([
          _ctx.v$.form.description.$errors.length > 0 ? "is-invalid" : "",
          "form-control form-control-solid"
        ])}" id="project-description" placeholder="Type important message here..."${_scopeId}>${ssrInterpolate(_ctx.v$.form.description.$model)}</textarea><!--[-->`);
        ssrRenderList(_ctx.v$.form.description.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div></div></div><div class="card"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>Supplier Redirects</h2></div></div><div class="card-body"${_scopeId}><div class="row g-5 col-md-12"${_scopeId}><div class="fv-row col-md-6"${_scopeId}>`);
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
        _push2(`<!--]--></div><div class="fv-row col-md-6"${_scopeId}>`);
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
        _push2(`<!--]--></div><div class="fv-row col-md-6"${_scopeId}>`);
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
        _push2(`<!--]--></div><div class="fv-row col-md-6"${_scopeId}>`);
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
        _push2(`<!--]--></div></div></div></div><div class="row text-align-center"${_scopeId}><div class="col-12 gap-5"${_scopeId}><div class="d-flex justify-content-end gap-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/suppliers",
          class: "btn btn-outline-secondary align-items-center justify-content-center"
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
        _push2(`<button type="submit" class="btn btn-primary align-items-center justify-content-center"${ssrRenderAttr("data-kt-indicator", _ctx.form.processing ? "on" : "off")}${_scopeId}><span class="indicator-label"${_scopeId}>`);
        if (_ctx.route().current() == "supplier.edit") {
          _push2(`<span${_scopeId}>Update</span>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.route().current() == "supplier.create") {
          _push2(`<span${_scopeId}>Save</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</span><span class="indicator-progress"${_scopeId}> Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"${_scopeId}></span></span></button></div></div></div></form></div></div>`);
      } else {
        return [
          createVNode("div", { class: "d-flex flex-column flex-lg-row flex-column-fluid justify-content-center" }, [
            createVNode("div", { class: "col-12" }, [
              createVNode(_component_JetValidationErrors),
              createVNode("form", {
                onSubmit: withModifiers(($event) => _ctx.submit(), ["prevent"]),
                class: "d-flex flex-column flex-row-fluid gap-7 gap-lg-10"
              }, [
                createVNode("div", { class: "card" }, [
                  createVNode("div", { class: "card-header" }, [
                    createVNode("div", { class: "card-title" }, [
                      createVNode("h2", null, "General")
                    ])
                  ]),
                  createVNode("div", { class: "card-body" }, [
                    createVNode("div", { class: "row g-5 col-md-12" }, [
                      createVNode("div", { class: "fv-row col-md-6" }, [
                        createVNode(_component_jet_label, {
                          for: "country",
                          value: "Country"
                        }),
                        createVNode(_component_Multiselect, {
                          options: _ctx.countries.data,
                          "can-clear": false,
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
                      createVNode("div", { class: "fv-row col-md-6" }, [
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
                      createVNode("div", { class: "fv-row col-md-6" }, [
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
                      createVNode("div", { class: "fv-row col-md-6" }, [
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
                      createVNode("div", { class: "fv-row col-md-6" }, [
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
                      createVNode("div", { class: "fv-row col-md-6" }, [
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
                      createVNode("div", { class: "fv-row col-md-6" }, [
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
                      createVNode("div", { class: "fv-row col-md-6" }, [
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
                          rows: "2",
                          class: [
                            "form-control form-control-solid",
                            _ctx.v$.form.description.$errors.length > 0 ? "is-invalid" : ""
                          ],
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.description.$model = $event,
                          id: "project-description",
                          placeholder: "Type important message here..."
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
                    ])
                  ])
                ]),
                createVNode("div", { class: "card" }, [
                  createVNode("div", { class: "card-header" }, [
                    createVNode("div", { class: "card-title" }, [
                      createVNode("h2", null, "Supplier Redirects")
                    ])
                  ]),
                  createVNode("div", { class: "card-body" }, [
                    createVNode("div", { class: "row g-5 col-md-12" }, [
                      createVNode("div", { class: "fv-row col-md-6" }, [
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
                      createVNode("div", { class: "fv-row col-md-6" }, [
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
                      createVNode("div", { class: "fv-row col-md-6" }, [
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
                      createVNode("div", { class: "fv-row col-md-6" }, [
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
                    ])
                  ])
                ]),
                createVNode("div", { class: "row text-align-center" }, [
                  createVNode("div", { class: "col-12 gap-5" }, [
                    createVNode("div", { class: "d-flex justify-content-end gap-2" }, [
                      createVNode(_component_Link, {
                        href: "/suppliers",
                        class: "btn btn-outline-secondary align-items-center justify-content-center"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Discard ")
                        ]),
                        _: 1
                      }),
                      createVNode("button", {
                        type: "submit",
                        class: "btn btn-primary align-items-center justify-content-center",
                        "data-kt-indicator": _ctx.form.processing ? "on" : "off"
                      }, [
                        createVNode("span", { class: "indicator-label" }, [
                          _ctx.route().current() == "supplier.edit" ? (openBlock(), createBlock("span", { key: 0 }, "Update")) : createCommentVNode("", true),
                          _ctx.route().current() == "supplier.create" ? (openBlock(), createBlock("span", { key: 1 }, "Save")) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Supplier/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Create as default
};
