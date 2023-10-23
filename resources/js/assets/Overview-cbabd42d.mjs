import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, withModifiers, Fragment, renderList, withDirectives, vModelText, vShow, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import Header from "./Header-0e5b2cdf.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { toast } from "vue3-toastify";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Multiselect from "@vueform/multiselect";
import axios from "axios";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  setup() {
    return { v$: useVuelidate() };
  },
  props: ["client", "countries", "addresses"],
  components: {
    AppLayout,
    Header,
    Link,
    Head,
    JetInput,
    JetLabel,
    JetValidationErrors,
    InputError,
    Multiselect
  },
  validations() {
    return {
      form: {
        client_name: {
          required
        },
        display_name: {
          required
        },
        email_address: {
          required
        },
        account_email: {
          required
        },
        mobile: {
          required
        },
        tax_number: {
          required
        },
        description: {
          required
        },
        status: {
          required
        },
        processing: false
      }
    };
  },
  data() {
    return {
      form: this.$inertia.form({
        id: this.client.data.id,
        client_name: this.client.data.name,
        display_name: this.client.data.display_name,
        email_address: this.client.data.email_address,
        account_email: this.client.data.account_email,
        mobile: this.client.data.contact_number,
        tax_number: this.client.data.tax_number,
        description: this.client.data.description,
        status: this.client.data.status,
        action: "overview"
      }),
      isEdit: false,
      title: "Client Overview"
    };
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.form.transform((data) => ({
          ...data
        })).post(
          this.route("client.update", this.form.id),
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
    changeStatus(e, id) {
      this.isLoading = true;
      axios.post("/client/status", { id, status: e }).then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          return;
        }
        toast.error(response.data.message);
      }).finally(() => this.isLoading = false);
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
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_input_error = resolveComponent("input-error");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/clients",
          class: "text-muted text-hover-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Clients`);
            } else {
              return [
                createTextVNode("Clients")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>${ssrInterpolate(_ctx.client.data.name)}</li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode(_component_Link, {
              href: "/clients",
              class: "text-muted text-hover-primary"
            }, {
              default: withCtx(() => [
                createTextVNode("Clients")
              ]),
              _: 1
            })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, toDisplayString(_ctx.client.data.name), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Header, {
          client: _ctx.client.data,
          address: _ctx.addresses.data
        }, null, _parent2, _scopeId));
        _push2(`<div class="card mb-5 mb-xl-10"${_scopeId}><div class="card-header cursor-pointer"${_scopeId}><div class="card-title m-0"${_scopeId}><h3 class="fw-bold m-0"${_scopeId}>Client Details </h3></div><button class="btn btn-primary btn-sm align-self-center"${_scopeId}><i class="bi bi-pencil me-2"${_scopeId}></i>Edit Client </button></div><div class="card-body p-9"${_scopeId}>`);
        if (_ctx.isEdit) {
          _push2(`<div class="row"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
          _push2(`<form${_scopeId}><div class="row g-5"${_scopeId}><div class="col-12"${_scopeId}><div class="row mb-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "client-name",
            class: "col-4 required",
            value: "Client Name"
          }, null, _parent2, _scopeId));
          _push2(`<div class="col-lg-8 fv-row fv-plugins-icon-container"${_scopeId}>`);
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
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "display-name",
            class: "col-4 required",
            value: "Display Name"
          }, null, _parent2, _scopeId));
          _push2(`<div class="col-lg-8 fv-row fv-plugins-icon-container"${_scopeId}>`);
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
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "email-address",
            class: "col-4 required",
            value: "Email Address"
          }, null, _parent2, _scopeId));
          _push2(`<div class="col-lg-8 fv-row fv-plugins-icon-container"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "email-address",
            type: "text",
            modelValue: _ctx.v$.form.email_address.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.email_address.$model = $event,
            class: _ctx.v$.form.email_address.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Enter Email Address"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.email_address.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "account-email",
            class: "col-4 required",
            value: "Account Email"
          }, null, _parent2, _scopeId));
          _push2(`<div class="col-lg-8 fv-row fv-plugins-icon-container"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "account-email",
            type: "text",
            modelValue: _ctx.v$.form.account_email.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.account_email.$model = $event,
            class: _ctx.v$.form.account_email.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Enter Account Email"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.account_email.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "contact-number",
            class: "col-4 required",
            value: "Contact Number"
          }, null, _parent2, _scopeId));
          _push2(`<div class="col-lg-8 fv-row fv-plugins-icon-container"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "contact-number",
            type: "text",
            modelValue: _ctx.v$.form.mobile.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.mobile.$model = $event,
            class: _ctx.v$.form.mobile.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Enter Contact Number"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.mobile.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "tax-number",
            class: "col-4 required",
            value: "Tax Number"
          }, null, _parent2, _scopeId));
          _push2(`<div class="col-lg-8 fv-row fv-plugins-icon-container"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "tax-number",
            type: "text",
            modelValue: _ctx.v$.form.tax_number.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.tax_number.$model = $event,
            class: _ctx.v$.form.tax_number.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Enter Tax Number"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.tax_number.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "description",
            class: "col-4 required",
            value: "Description"
          }, null, _parent2, _scopeId));
          _push2(`<div class="col-lg-8 fv-row fv-plugins-icon-container"${_scopeId}><textarea id="notes" type="text" class="${ssrRenderClass([
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
          _push2(`<!--]--></div></div></div></div><div class="d-flex justify-content-end mt-4"${_scopeId}><button type="button" class="btn btn-outline-secondary me-5"${_scopeId}>Discard</button><button type="submit" class="${ssrRenderClass([{ "text-white-50": _ctx.form.processing }, "btn btn-primary"])}"${_scopeId}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"${_scopeId}><span class="visually-hidden"${_scopeId}>Loading...</span></div> Save Changes </button></div></form></div>`);
        } else {
          _push2(`<div${_scopeId}><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Client Name</label><div class="col-6 fv-row"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.client.data.name)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Display Name</label><div class="col-6 fv-row"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.client.data.display_name)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Email Address</label><div class="col-6 fv-row"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.client.data.email_address)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Account Email</label><div class="col-6 fv-row"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.client.data.account_email)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Contact Number</label><div class="col-6 fv-row"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.client.data.contact_number)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Tax Number</label><div class="col-6 fv-row"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.client.data.tax_number)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Description</label><div class="col-6 fv-row"${_scopeId}><span class="fw-bold fs-6 text-gray-700"${_scopeId}>${ssrInterpolate(_ctx.client.data.description)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Status</label><div class="col-6"${_scopeId}><div class="form-switch form-check-solid d-block form-check-custom form-check-success"${_scopeId}><input class="form-check-input h-20px w-30px" type="checkbox"${ssrIncludeBooleanAttr(_ctx.client.data.status == 1 ? true : false) ? " checked" : ""}${_scopeId}></div></div></div></div>`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode(_component_Header, {
            client: _ctx.client.data,
            address: _ctx.addresses.data
          }, null, 8, ["client", "address"]),
          createVNode("div", { class: "card mb-5 mb-xl-10" }, [
            createVNode("div", { class: "card-header cursor-pointer" }, [
              createVNode("div", { class: "card-title m-0" }, [
                createVNode("h3", { class: "fw-bold m-0" }, "Client Details ")
              ]),
              createVNode("button", {
                class: "btn btn-primary btn-sm align-self-center",
                onClick: ($event) => this.isEdit = this.isEdit ? false : true
              }, [
                createVNode("i", { class: "bi bi-pencil me-2" }),
                createTextVNode("Edit Client ")
              ], 8, ["onClick"])
            ]),
            createVNode("div", { class: "card-body p-9" }, [
              _ctx.isEdit ? (openBlock(), createBlock("div", {
                key: 0,
                class: "row"
              }, [
                createVNode(_component_JetValidationErrors),
                createVNode("form", {
                  onSubmit: withModifiers(_ctx.submit, ["prevent"])
                }, [
                  createVNode("div", { class: "row g-5" }, [
                    createVNode("div", { class: "col-12" }, [
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode(_component_jet_label, {
                          for: "client-name",
                          class: "col-4 required",
                          value: "Client Name"
                        }),
                        createVNode("div", { class: "col-lg-8 fv-row fv-plugins-icon-container" }, [
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
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode(_component_jet_label, {
                          for: "display-name",
                          class: "col-4 required",
                          value: "Display Name"
                        }),
                        createVNode("div", { class: "col-lg-8 fv-row fv-plugins-icon-container" }, [
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
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode(_component_jet_label, {
                          for: "email-address",
                          class: "col-4 required",
                          value: "Email Address"
                        }),
                        createVNode("div", { class: "col-lg-8 fv-row fv-plugins-icon-container" }, [
                          createVNode(_component_jet_input, {
                            id: "email-address",
                            type: "text",
                            modelValue: _ctx.v$.form.email_address.$model,
                            "onUpdate:modelValue": ($event) => _ctx.v$.form.email_address.$model = $event,
                            class: _ctx.v$.form.email_address.$errors.length > 0 ? "is-invalid" : "",
                            placeholder: "Enter Email Address"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.email_address.$errors, (error, index) => {
                            return openBlock(), createBlock("div", { key: index }, [
                              createVNode(_component_input_error, {
                                message: error.$message
                              }, null, 8, ["message"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode(_component_jet_label, {
                          for: "account-email",
                          class: "col-4 required",
                          value: "Account Email"
                        }),
                        createVNode("div", { class: "col-lg-8 fv-row fv-plugins-icon-container" }, [
                          createVNode(_component_jet_input, {
                            id: "account-email",
                            type: "text",
                            modelValue: _ctx.v$.form.account_email.$model,
                            "onUpdate:modelValue": ($event) => _ctx.v$.form.account_email.$model = $event,
                            class: _ctx.v$.form.account_email.$errors.length > 0 ? "is-invalid" : "",
                            placeholder: "Enter Account Email"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.account_email.$errors, (error, index) => {
                            return openBlock(), createBlock("div", { key: index }, [
                              createVNode(_component_input_error, {
                                message: error.$message
                              }, null, 8, ["message"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode(_component_jet_label, {
                          for: "contact-number",
                          class: "col-4 required",
                          value: "Contact Number"
                        }),
                        createVNode("div", { class: "col-lg-8 fv-row fv-plugins-icon-container" }, [
                          createVNode(_component_jet_input, {
                            id: "contact-number",
                            type: "text",
                            modelValue: _ctx.v$.form.mobile.$model,
                            "onUpdate:modelValue": ($event) => _ctx.v$.form.mobile.$model = $event,
                            class: _ctx.v$.form.mobile.$errors.length > 0 ? "is-invalid" : "",
                            placeholder: "Enter Contact Number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.mobile.$errors, (error, index) => {
                            return openBlock(), createBlock("div", { key: index }, [
                              createVNode(_component_input_error, {
                                message: error.$message
                              }, null, 8, ["message"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode(_component_jet_label, {
                          for: "tax-number",
                          class: "col-4 required",
                          value: "Tax Number"
                        }),
                        createVNode("div", { class: "col-lg-8 fv-row fv-plugins-icon-container" }, [
                          createVNode(_component_jet_input, {
                            id: "tax-number",
                            type: "text",
                            modelValue: _ctx.v$.form.tax_number.$model,
                            "onUpdate:modelValue": ($event) => _ctx.v$.form.tax_number.$model = $event,
                            class: _ctx.v$.form.tax_number.$errors.length > 0 ? "is-invalid" : "",
                            placeholder: "Enter Tax Number"
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
                        createVNode(_component_jet_label, {
                          for: "description",
                          class: "col-4 required",
                          value: "Description"
                        }),
                        createVNode("div", { class: "col-lg-8 fv-row fv-plugins-icon-container" }, [
                          withDirectives(createVNode("textarea", {
                            class: [
                              "form-control form-control-lg form-control-solid",
                              _ctx.v$.form.description.$errors.length > 0 ? "is-invalid" : ""
                            ],
                            id: "notes",
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
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Client Name"),
                  createVNode("div", { class: "col-6 fv-row" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString(_ctx.client.data.name), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Display Name"),
                  createVNode("div", { class: "col-6 fv-row" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString(_ctx.client.data.display_name), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Email Address"),
                  createVNode("div", { class: "col-6 fv-row" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString(_ctx.client.data.email_address), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Account Email"),
                  createVNode("div", { class: "col-6 fv-row" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString(_ctx.client.data.account_email), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Contact Number"),
                  createVNode("div", { class: "col-6 fv-row" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString(_ctx.client.data.contact_number), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Tax Number"),
                  createVNode("div", { class: "col-6 fv-row" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString(_ctx.client.data.tax_number), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Description"),
                  createVNode("div", { class: "col-6 fv-row" }, [
                    createVNode("span", { class: "fw-bold fs-6 text-gray-700" }, toDisplayString(_ctx.client.data.description), 1)
                  ])
                ]),
                createVNode("div", { class: "row mb-7" }, [
                  createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Status"),
                  createVNode("div", { class: "col-6" }, [
                    createVNode("div", { class: "form-switch form-check-solid d-block form-check-custom form-check-success" }, [
                      createVNode("input", {
                        class: "form-check-input h-20px w-30px",
                        type: "checkbox",
                        onInput: ($event) => _ctx.changeStatus($event.target.checked, _ctx.client.data.id),
                        checked: _ctx.client.data.status == 1 ? true : false
                      }, null, 40, ["onInput", "checked"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Client/Overview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Overview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Overview as default
};
