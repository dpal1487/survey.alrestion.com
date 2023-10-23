import { defineComponent, resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, withModifiers, Fragment, renderList, withDirectives, vModelRadio, vShow, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import Header from "./Header-eadc1c76.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { toast } from "vue3-toastify";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import Datepicker from "vue3-datepicker";
import useVuelidate from "@vuelidate/core";
import Multiselect from "@vueform/multiselect";
import { I as ImageInput } from "./ImageInput-cd82c300.mjs";
import { required } from "@vuelidate/validators";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  setup() {
    return { v$: useVuelidate() };
  },
  props: ["role", "user", "reports"],
  components: {
    AppLayout,
    Header,
    Link,
    Head,
    JetInput,
    JetLabel,
    JetValidationErrors,
    InputError,
    Multiselect,
    ImageInput,
    Datepicker
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
        email: {},
        password: {
          required
        },
        role: {},
        status: {},
        date_of_birth: {
          required
        },
        gender: {
          required
        }
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    return {
      isEdit: false,
      form: this.$inertia.form({
        id: ((_a = this.user) == null ? void 0 : _a.id) || "",
        image: ((_b = this.user) == null ? void 0 : _b.full_path) || "",
        image_id: "",
        first_name: ((_c = this.user) == null ? void 0 : _c.first_name) || "",
        last_name: ((_d = this.user) == null ? void 0 : _d.last_name) || "",
        password: ((_e = this.user) == null ? void 0 : _e.password) || "",
        role: ((_g = (_f = this.user) == null ? void 0 : _f.role) == null ? void 0 : _g.id) || "",
        status: ((_h = this.user) == null ? void 0 : _h.status) || "",
        date_of_birth: new Date((_i = this.user) == null ? void 0 : _i.date_of_birth) || "",
        gender: ((_j = this.user) == null ? void 0 : _j.gender) || ""
      }),
      title: "Account Overview"
    };
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.form.transform((data) => ({
          ...data
        })).post(this.route("account.update"), {
          onSuccess: (data) => {
            toast.success(
              this.$page.props.jetstream.flash.message
            );
            this.isEdit = false;
          },
          onError: (data) => {
            console.log(data);
            toast.error(data.message);
          }
        });
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_Header = resolveComponent("Header");
  const _component_JetValidationErrors = resolveComponent("JetValidationErrors");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_input_error = resolveComponent("input-error");
  const _component_Datepicker = resolveComponent("Datepicker");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_AppLayout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>${ssrInterpolate(_ctx.title)}</li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, toDisplayString(_ctx.title), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      if (_push2) {
        _push2(ssrRenderComponent(_component_Header, { reports: _ctx.reports }, null, _parent2, _scopeId));
        _push2(`<div class="card mb-5"${_scopeId}><div class="card-header cursor-pointer"${_scopeId}><div class="card-title m-0"${_scopeId}><h3 class="fw-bold m-0"${_scopeId}>User Overview</h3></div><button class="btn btn-primary btn-sm align-self-center"${_scopeId}><i class="bi bi-pencil me-2"${_scopeId}></i>Edit </button></div><div class="card-body p-0"${_scopeId}>`);
        if (_ctx.isEdit) {
          _push2(`<div class="row"${_scopeId}><div class="col-12"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
          _push2(`<form class="form fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate"${_scopeId}><div class="card-body border-top p-9"${_scopeId}><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-semibold fs-6"${_scopeId}>Full Name</label><div class="col-lg-6"${_scopeId}><div class="row g-3"${_scopeId}><div class="col-lg-6 fv-plugins-icon-container"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "first_name",
            type: "text",
            modelValue: _ctx.v$.form.first_name.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.first_name.$model = $event,
            class: _ctx.v$.form.first_name.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "First name"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.first_name.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div><div class="col-lg-6 fv-plugins-icon-container"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "last_name",
            type: "text",
            modelValue: _ctx.v$.form.last_name.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.last_name.$model = $event,
            class: _ctx.v$.form.last_name.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Last name"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.last_name.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-semibold fs-6"${_scopeId}>Password</label><div class="col-lg-6"${_scopeId}><div class="fv-plugins-icon-container"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "password",
            type: "text",
            modelValue: _ctx.v$.form.password.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.password.$model = $event,
            class: _ctx.v$.form.password.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "*******"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.password.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label required fw-semibold fs-6"${_scopeId}>Gender</label><div class="col-lg-8 fv-row fv-plugins-icon-container"${_scopeId}><div class="d-flex align-items-center mt-3"${_scopeId}><label class="form-check form-check-custom form-check-inline form-check-solid me-5"${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(
            _ctx.v$.form.gender.$model,
            "male"
          )) ? " checked" : ""} class="${ssrRenderClass([
            _ctx.v$.form.gender.$errors.length > 0 ? "is-invalid" : "",
            "form-check-input"
          ])}" value="male"${_scopeId}><span class="fw-semibold ps-2 fs-6"${_scopeId}> Male </span></label><label class="form-check form-check-custom form-check-inline form-check-solid"${_scopeId}><input name="gender" type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(
            _ctx.v$.form.gender.$model,
            "female"
          )) ? " checked" : ""} class="${ssrRenderClass([
            _ctx.v$.form.gender.$errors.length > 0 ? "is-invalid" : "",
            "form-check-input"
          ])}" value="female"${_scopeId}><span class="fw-semibold ps-2 fs-6"${_scopeId}> Female </span></label></div><div class="fv-plugins-message-container invalid-feedback"${_scopeId}></div></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-semibold fs-6"${_scopeId}>Date Of Birth</label><div class="col-lg-6"${_scopeId}><div class="fv-plugins-icon-container"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Datepicker, {
            modelValue: _ctx.v$.form.date_of_birth.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.date_of_birth.$model = $event,
            id: "project-start",
            type: "text",
            class: [
              "form-control form-control-lg form-control-solid",
              _ctx.v$.form.date_of_birth.$errors.length > 0 ? "is-invalid" : ""
            ],
            placeholder: "Enter date of Birth"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.date_of_birth.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div></div></div><div class="card-footer d-flex justify-content-end py-6 px-9"${_scopeId}><div class="col-12"${_scopeId}><div class="d-flex justify-content-end mt-4"${_scopeId}><button type="button" class="btn btn-secondary me-5"${_scopeId}> Discard </button><button type="submit" class="${ssrRenderClass([{
            "text-white-50": _ctx.form.processing
          }, "btn btn-primary"])}"${_scopeId}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"${_scopeId}><span class="visually-hidden"${_scopeId}>Loading...</span></div> Save Changes </button></div></div></div></form></div></div>`);
        } else {
          _push2(`<div${_scopeId}><div class="card-body p-9"${_scopeId}><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Full Name</label><div class="col-lg-6"${_scopeId}><span class="fw-semibold fs-6 text-gray-800"${_scopeId}>${ssrInterpolate((_a = _ctx.$page.props.user) == null ? void 0 : _a.first_name)} ${ssrInterpolate((_b = _ctx.$page.props.user) == null ? void 0 : _b.last_name)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Email</label><div class="col-lg-6 fv-row"${_scopeId}><span class="fw-semibold text-gray-800 fs-6"${_scopeId}>${ssrInterpolate((_c = _ctx.$page.props.user) == null ? void 0 : _c.email)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>DOB</label><div class="col-lg-6 fv-row"${_scopeId}><span class="fw-semibold text-gray-800 fs-6"${_scopeId}>${ssrInterpolate((_d = _ctx.$page.props.user) == null ? void 0 : _d.date_of_birth)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Gender</label><div class="col-lg-6 fv-row"${_scopeId}><span class="fw-semibold text-gray-800 fs-6"${_scopeId}>${ssrInterpolate((_e = _ctx.$page.props.user) == null ? void 0 : _e.gender)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Role</label><div class="col-lg-6 fv-row"${_scopeId}><span class="fw-semibold text-gray-800 fs-6"${_scopeId}>${ssrInterpolate((_f = _ctx.$page.props.user) == null ? void 0 : _f.role.role.name)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Status</label><div class="col-lg-6 fv-row"${_scopeId}><span class="${ssrRenderClass(`badge bg-${((_g = _ctx.$page.props.user) == null ? void 0 : _g.status) == 1 ? "success" : "danger"}`)}"${_scopeId}>${ssrInterpolate(((_h = _ctx.$page.props.user) == null ? void 0 : _h.status) ? "Active" : "Inactive")}</span></div></div></div></div>`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode(_component_Header, { reports: _ctx.reports }, null, 8, ["reports"]),
          createVNode("div", { class: "card mb-5" }, [
            createVNode("div", { class: "card-header cursor-pointer" }, [
              createVNode("div", { class: "card-title m-0" }, [
                createVNode("h3", { class: "fw-bold m-0" }, "User Overview")
              ]),
              createVNode("button", {
                class: "btn btn-primary btn-sm align-self-center",
                onClick: ($event) => this.isEdit = this.isEdit ? false : true
              }, [
                createVNode("i", { class: "bi bi-pencil me-2" }),
                createTextVNode("Edit ")
              ], 8, ["onClick"])
            ]),
            createVNode("div", { class: "card-body p-0" }, [
              _ctx.isEdit ? (openBlock(), createBlock("div", {
                key: 0,
                class: "row"
              }, [
                createVNode("div", { class: "col-12" }, [
                  createVNode(_component_JetValidationErrors),
                  createVNode("form", {
                    onSubmit: withModifiers(($event) => _ctx.submit(), ["prevent"]),
                    class: "form fv-plugins-bootstrap5 fv-plugins-framework",
                    novalidate: "novalidate"
                  }, [
                    createVNode("div", { class: "card-body border-top p-9" }, [
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode("label", { class: "col-lg-4 col-form-label fw-semibold fs-6" }, "Full Name"),
                        createVNode("div", { class: "col-lg-6" }, [
                          createVNode("div", { class: "row g-3" }, [
                            createVNode("div", { class: "col-lg-6 fv-plugins-icon-container" }, [
                              createVNode(_component_jet_input, {
                                id: "first_name",
                                type: "text",
                                modelValue: _ctx.v$.form.first_name.$model,
                                "onUpdate:modelValue": ($event) => _ctx.v$.form.first_name.$model = $event,
                                class: _ctx.v$.form.first_name.$errors.length > 0 ? "is-invalid" : "",
                                placeholder: "First name"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.first_name.$errors, (error, index) => {
                                return openBlock(), createBlock("div", { key: index }, [
                                  createVNode(_component_input_error, {
                                    message: error.$message
                                  }, null, 8, ["message"])
                                ]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "col-lg-6 fv-plugins-icon-container" }, [
                              createVNode(_component_jet_input, {
                                id: "last_name",
                                type: "text",
                                modelValue: _ctx.v$.form.last_name.$model,
                                "onUpdate:modelValue": ($event) => _ctx.v$.form.last_name.$model = $event,
                                class: _ctx.v$.form.last_name.$errors.length > 0 ? "is-invalid" : "",
                                placeholder: "Last name"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.last_name.$errors, (error, index) => {
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
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode("label", { class: "col-lg-4 col-form-label fw-semibold fs-6" }, "Password"),
                        createVNode("div", { class: "col-lg-6" }, [
                          createVNode("div", { class: "fv-plugins-icon-container" }, [
                            createVNode(_component_jet_input, {
                              id: "password",
                              type: "text",
                              modelValue: _ctx.v$.form.password.$model,
                              "onUpdate:modelValue": ($event) => _ctx.v$.form.password.$model = $event,
                              class: _ctx.v$.form.password.$errors.length > 0 ? "is-invalid" : "",
                              placeholder: "*******"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.password.$errors, (error, index) => {
                              return openBlock(), createBlock("div", { key: index }, [
                                createVNode(_component_input_error, {
                                  message: error.$message
                                }, null, 8, ["message"])
                              ]);
                            }), 128))
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode("label", { class: "col-lg-4 col-form-label required fw-semibold fs-6" }, "Gender"),
                        createVNode("div", { class: "col-lg-8 fv-row fv-plugins-icon-container" }, [
                          createVNode("div", { class: "d-flex align-items-center mt-3" }, [
                            createVNode("label", { class: "form-check form-check-custom form-check-inline form-check-solid me-5" }, [
                              withDirectives(createVNode("input", {
                                class: [
                                  "form-check-input",
                                  _ctx.v$.form.gender.$errors.length > 0 ? "is-invalid" : ""
                                ],
                                type: "radio",
                                "onUpdate:modelValue": ($event) => _ctx.v$.form.gender.$model = $event,
                                value: "male"
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [
                                  vModelRadio,
                                  _ctx.v$.form.gender.$model
                                ]
                              ]),
                              createVNode("span", { class: "fw-semibold ps-2 fs-6" }, " Male ")
                            ]),
                            createVNode("label", { class: "form-check form-check-custom form-check-inline form-check-solid" }, [
                              withDirectives(createVNode("input", {
                                class: [
                                  "form-check-input",
                                  _ctx.v$.form.gender.$errors.length > 0 ? "is-invalid" : ""
                                ],
                                name: "gender",
                                type: "radio",
                                "onUpdate:modelValue": ($event) => _ctx.v$.form.gender.$model = $event,
                                value: "female"
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [
                                  vModelRadio,
                                  _ctx.v$.form.gender.$model
                                ]
                              ]),
                              createVNode("span", { class: "fw-semibold ps-2 fs-6" }, " Female ")
                            ])
                          ]),
                          createVNode("div", { class: "fv-plugins-message-container invalid-feedback" })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode("label", { class: "col-lg-4 col-form-label fw-semibold fs-6" }, "Date Of Birth"),
                        createVNode("div", { class: "col-lg-6" }, [
                          createVNode("div", { class: "fv-plugins-icon-container" }, [
                            createVNode(_component_Datepicker, {
                              modelValue: _ctx.v$.form.date_of_birth.$model,
                              "onUpdate:modelValue": ($event) => _ctx.v$.form.date_of_birth.$model = $event,
                              id: "project-start",
                              type: "text",
                              class: [
                                "form-control form-control-lg form-control-solid",
                                _ctx.v$.form.date_of_birth.$errors.length > 0 ? "is-invalid" : ""
                              ],
                              placeholder: "Enter date of Birth"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.date_of_birth.$errors, (error, index) => {
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
                    createVNode("div", { class: "card-footer d-flex justify-content-end py-6 px-9" }, [
                      createVNode("div", { class: "col-12" }, [
                        createVNode("div", { class: "d-flex justify-content-end mt-4" }, [
                          createVNode("button", {
                            type: "button",
                            class: "btn btn-secondary me-5",
                            onClick: ($event) => this.isEdit = false
                          }, " Discard ", 8, ["onClick"]),
                          createVNode("button", {
                            type: "submit",
                            class: ["btn btn-primary", {
                              "text-white-50": _ctx.form.processing
                            }]
                          }, [
                            withDirectives(createVNode("div", { class: "spinner-border spinner-border-sm" }, [
                              createVNode("span", { class: "visually-hidden" }, "Loading...")
                            ], 512), [
                              [vShow, _ctx.form.processing]
                            ]),
                            createTextVNode(" Save Changes ")
                          ], 2)
                        ])
                      ])
                    ])
                  ], 40, ["onSubmit"])
                ])
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "card-body p-9" }, [
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Full Name"),
                    createVNode("div", { class: "col-lg-6" }, [
                      createVNode("span", { class: "fw-semibold fs-6 text-gray-800" }, toDisplayString((_i = _ctx.$page.props.user) == null ? void 0 : _i.first_name) + " " + toDisplayString((_j = _ctx.$page.props.user) == null ? void 0 : _j.last_name), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Email"),
                    createVNode("div", { class: "col-lg-6 fv-row" }, [
                      createVNode("span", { class: "fw-semibold text-gray-800 fs-6" }, toDisplayString((_k = _ctx.$page.props.user) == null ? void 0 : _k.email), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "DOB"),
                    createVNode("div", { class: "col-lg-6 fv-row" }, [
                      createVNode("span", { class: "fw-semibold text-gray-800 fs-6" }, toDisplayString((_l = _ctx.$page.props.user) == null ? void 0 : _l.date_of_birth), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Gender"),
                    createVNode("div", { class: "col-lg-6 fv-row" }, [
                      createVNode("span", { class: "fw-semibold text-gray-800 fs-6" }, toDisplayString((_m = _ctx.$page.props.user) == null ? void 0 : _m.gender), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Role"),
                    createVNode("div", { class: "col-lg-6 fv-row" }, [
                      createVNode("span", { class: "fw-semibold text-gray-800 fs-6" }, toDisplayString((_n = _ctx.$page.props.user) == null ? void 0 : _n.role.role.name), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Status"),
                    createVNode("div", { class: "col-lg-6 fv-row" }, [
                      createVNode("span", {
                        class: `badge bg-${((_o = _ctx.$page.props.user) == null ? void 0 : _o.status) == 1 ? "success" : "danger"}`
                      }, toDisplayString(((_p = _ctx.$page.props.user) == null ? void 0 : _p.status) ? "Active" : "Inactive"), 3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Account/Overview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Overview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Overview as default
};
