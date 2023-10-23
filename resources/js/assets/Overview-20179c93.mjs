import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, withModifiers, Fragment, renderList, withDirectives, vShow, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import Header from "./Header-b9a9733a.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { toast } from "vue3-toastify";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import VueDatePicker from "@vuepic/vue-datepicker";
/* empty css                */import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Multiselect from "@vueform/multiselect";
import { I as ImageInput } from "./ImageInput-cd82c300.mjs";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  setup() {
    return { v$: useVuelidate() };
  },
  props: ["user", "role"],
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
    VueDatePicker
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
        email: {
          required
        },
        role: {
          required
        },
        status: {
          required
        },
        password: {}
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    return {
      isEdit: false,
      isUploading: false,
      processing: false,
      url: null,
      id: route().params.id,
      form: this.$inertia.form({
        id: ((_b = (_a = this.user) == null ? void 0 : _a.data) == null ? void 0 : _b.id) || "",
        image: ((_d = (_c = this.user) == null ? void 0 : _c.data) == null ? void 0 : _d.full_path) || "",
        image_id: "",
        first_name: ((_f = (_e = this.user) == null ? void 0 : _e.data) == null ? void 0 : _f.first_name) || "",
        last_name: ((_h = (_g = this.user) == null ? void 0 : _g.data) == null ? void 0 : _h.last_name) || "",
        email: ((_j = (_i = this.user) == null ? void 0 : _i.data) == null ? void 0 : _j.email) || "",
        role: ((_m = (_l = (_k = this.user) == null ? void 0 : _k.data) == null ? void 0 : _l.role) == null ? void 0 : _m.id) || "",
        status: ((_o = (_n = this.user) == null ? void 0 : _n.data) == null ? void 0 : _o.status) || "",
        password: ""
      }),
      status: [
        { name: "Active", id: "1" },
        { name: "Inactive", id: "0" }
      ],
      title: "User Overview"
    };
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.form.transform((data) => ({
          ...data
        })).post(
          this.route("user.update", this.form.id),
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
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_Link = resolveComponent("Link");
  const _component_Header = resolveComponent("Header");
  const _component_JetValidationErrors = resolveComponent("JetValidationErrors");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_input_error = resolveComponent("input-error");
  const _component_Multiselect = resolveComponent("Multiselect");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_AppLayout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/account",
          class: "text-muted text-hover-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`User`);
            } else {
              return [
                createTextVNode("User")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>${ssrInterpolate(_ctx.title)}</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>${ssrInterpolate((_b = (_a = _ctx.user) == null ? void 0 : _a.data) == null ? void 0 : _b.first_name)}</li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode(_component_Link, {
              href: "/account",
              class: "text-muted text-hover-primary"
            }, {
              default: withCtx(() => [
                createTextVNode("User")
              ]),
              _: 1
            })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, toDisplayString(_ctx.title), 1),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, toDisplayString((_d = (_c = _ctx.user) == null ? void 0 : _c.data) == null ? void 0 : _d.first_name), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
      if (_push2) {
        _push2(ssrRenderComponent(_component_Header, {
          user: _ctx.user.data
        }, null, _parent2, _scopeId));
        _push2(`<div class="card mb-5"${_scopeId}><div class="card-header cursor-pointer"${_scopeId}><div class="card-title m-0"${_scopeId}><h3 class="fw-bold m-0"${_scopeId}> User Overview</h3></div><button class="btn btn-primary btn-sm align-self-center"${_scopeId}><i class="bi bi-pencil me-2"${_scopeId}></i>Edit </button></div><div class="card-body p-0"${_scopeId}>`);
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
          _push2(`<!--]--></div></div></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-semibold fs-6"${_scopeId}>Email</label><div class="col-lg-6"${_scopeId}><div class="fv-plugins-icon-container"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "email",
            type: "text",
            modelValue: _ctx.v$.form.email.$model,
            "onUpdate:modelValue": ($event) => _ctx.v$.form.email.$model = $event,
            class: _ctx.v$.form.email.$errors.length > 0 ? "is-invalid" : "",
            placeholder: "Email"
          }, null, _parent2, _scopeId));
          _push2(`<!--[-->`);
          ssrRenderList(_ctx.v$.form.email.$errors, (error, index) => {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_input_error, {
              message: error.$message
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-semibold fs-6"${_scopeId}>Role</label><div class="col-lg-6"${_scopeId}><div class="fv-plugins-icon-container"${_scopeId}>`);
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
          _push2(`<!--]--></div></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-semibold fs-6"${_scopeId}>Status</label><div class="col-lg-6"${_scopeId}><div class="fv-plugins-icon-container"${_scopeId}>`);
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
          _push2(`<!--]--></div></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-semibold fs-6"${_scopeId}>Password</label><div class="col-lg-6"${_scopeId}><div class="fv-plugins-icon-container"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_input, {
            id: "password",
            type: "text",
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
          _push2(`<!--]--></div></div></div></div><div class="card-footer d-flex justify-content-end py-6 px-9"${_scopeId}><div class="col-12"${_scopeId}><div class="d-flex justify-content-end mt-4"${_scopeId}><button type="button" class="btn btn-secondary me-5"${_scopeId}>Discard</button><button type="submit" class="${ssrRenderClass([{ "text-white-50": _ctx.form.processing }, "btn btn-primary"])}"${_scopeId}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"${_scopeId}><span class="visually-hidden"${_scopeId}>Loading...</span></div> Save Changes </button></div></div></div></form></div></div>`);
        } else {
          _push2(`<div${_scopeId}><div class="card-body p-9"${_scopeId}><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Full Name</label><div class="col-lg-6"${_scopeId}><span class="fw-semibold fs-6 text-gray-800"${_scopeId}>${ssrInterpolate((_b = (_a = this.user) == null ? void 0 : _a.data) == null ? void 0 : _b.first_name)} ${ssrInterpolate((_d = (_c = this.user) == null ? void 0 : _c.data) == null ? void 0 : _d.last_name)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Email</label><div class="col-lg-6 fv-row"${_scopeId}><span class="fw-semibold text-gray-800 fs-6"${_scopeId}>${ssrInterpolate((_f = (_e = this.user) == null ? void 0 : _e.data) == null ? void 0 : _f.email)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Role</label><div class="col-lg-6 fv-row"${_scopeId}><span class="fw-semibold text-gray-800 fs-6"${_scopeId}>${ssrInterpolate((_i = (_h = (_g = this.user) == null ? void 0 : _g.data) == null ? void 0 : _h.role) == null ? void 0 : _i.name)}</span></div></div><div class="row mb-7"${_scopeId}><label class="col-6 fw-bold fs-5 text-gray-800"${_scopeId}>Status</label><div class="col-lg-6 fv-row"${_scopeId}><span class="${ssrRenderClass(`badge bg-${((_k = (_j = _ctx.user) == null ? void 0 : _j.data) == null ? void 0 : _k.status) == 1 ? "success" : "danger"}`)}"${_scopeId}>${ssrInterpolate(((_m = (_l = _ctx.user) == null ? void 0 : _l.data) == null ? void 0 : _m.status) ? "Active" : "Inactive")}</span></div></div></div></div>`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode(_component_Header, {
            user: _ctx.user.data
          }, null, 8, ["user"]),
          createVNode("div", { class: "card mb-5" }, [
            createVNode("div", { class: "card-header cursor-pointer" }, [
              createVNode("div", { class: "card-title m-0" }, [
                createVNode("h3", { class: "fw-bold m-0" }, " User Overview")
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
                        createVNode("label", { class: "col-lg-4 col-form-label fw-semibold fs-6" }, "Email"),
                        createVNode("div", { class: "col-lg-6" }, [
                          createVNode("div", { class: "fv-plugins-icon-container" }, [
                            createVNode(_component_jet_input, {
                              id: "email",
                              type: "text",
                              modelValue: _ctx.v$.form.email.$model,
                              "onUpdate:modelValue": ($event) => _ctx.v$.form.email.$model = $event,
                              class: _ctx.v$.form.email.$errors.length > 0 ? "is-invalid" : "",
                              placeholder: "Email"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.email.$errors, (error, index) => {
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
                        createVNode("label", { class: "col-lg-4 col-form-label fw-semibold fs-6" }, "Role"),
                        createVNode("div", { class: "col-lg-6" }, [
                          createVNode("div", { class: "fv-plugins-icon-container" }, [
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
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row mb-6" }, [
                        createVNode("label", { class: "col-lg-4 col-form-label fw-semibold fs-6" }, "Status"),
                        createVNode("div", { class: "col-lg-6" }, [
                          createVNode("div", { class: "fv-plugins-icon-container" }, [
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
                              placeholder: "Enter password"
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
                      ])
                    ]),
                    createVNode("div", { class: "card-footer d-flex justify-content-end py-6 px-9" }, [
                      createVNode("div", { class: "col-12" }, [
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
                      ])
                    ])
                  ], 40, ["onSubmit"])
                ])
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", { class: "card-body p-9" }, [
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Full Name"),
                    createVNode("div", { class: "col-lg-6" }, [
                      createVNode("span", { class: "fw-semibold fs-6 text-gray-800" }, toDisplayString((_o = (_n = this.user) == null ? void 0 : _n.data) == null ? void 0 : _o.first_name) + " " + toDisplayString((_q = (_p = this.user) == null ? void 0 : _p.data) == null ? void 0 : _q.last_name), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Email"),
                    createVNode("div", { class: "col-lg-6 fv-row" }, [
                      createVNode("span", { class: "fw-semibold text-gray-800 fs-6" }, toDisplayString((_s = (_r = this.user) == null ? void 0 : _r.data) == null ? void 0 : _s.email), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Role"),
                    createVNode("div", { class: "col-lg-6 fv-row" }, [
                      createVNode("span", { class: "fw-semibold text-gray-800 fs-6" }, toDisplayString((_v = (_u = (_t = this.user) == null ? void 0 : _t.data) == null ? void 0 : _u.role) == null ? void 0 : _v.name), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-7" }, [
                    createVNode("label", { class: "col-6 fw-bold fs-5 text-gray-800" }, "Status"),
                    createVNode("div", { class: "col-lg-6 fv-row" }, [
                      createVNode("span", {
                        class: `badge bg-${((_x = (_w = _ctx.user) == null ? void 0 : _w.data) == null ? void 0 : _x.status) == 1 ? "success" : "danger"}`
                      }, toDisplayString(((_z = (_y = _ctx.user) == null ? void 0 : _y.data) == null ? void 0 : _z.status) ? "Active" : "Inactive"), 3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Overview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Overview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Overview as default
};
