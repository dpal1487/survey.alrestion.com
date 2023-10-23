import { defineComponent, resolveComponent, withCtx, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, withDirectives, vModelRadio, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { I as ImageInput } from "./ImageInput-cd82c300.mjs";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import VueDatePicker from "@vuepic/vue-datepicker";
/* empty css                */import axios from "axios";
import { toast } from "vue3-toastify";
import { ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  props: ["user", "isEdit", "show", "roles"],
  emits: ["hidemodal"],
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
        email: {
          required
        },
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    return {
      showModal: false,
      isUploading: false,
      url: null,
      processing: false,
      form: this.$inertia.form({
        id: ((_b = (_a = this.user) == null ? void 0 : _a.data) == null ? void 0 : _b.id) || "",
        user_role: "",
        image: ((_d = (_c = this.user) == null ? void 0 : _c.data) == null ? void 0 : _d.full_path) || "",
        first_name: ((_f = (_e = this.user) == null ? void 0 : _e.data) == null ? void 0 : _f.first_name) || "",
        last_name: ((_h = (_g = this.user) == null ? void 0 : _g.data) == null ? void 0 : _h.last_name) || "",
        email: ((_j = (_i = this.user) == null ? void 0 : _i.data) == null ? void 0 : _j.email) || "",
        date_of_birth: ((_l = (_k = this.user) == null ? void 0 : _k.data) == null ? void 0 : _l.date_of_birth) || "",
        gender: ((_n = (_m = this.user) == null ? void 0 : _m.data) == null ? void 0 : _n.gender) || ""
      })
    };
  },
  components: {
    JetInput,
    JetLabel,
    InputError,
    VueDatePicker,
    ImageInput,
    Link,
    AppLayout
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.processing = true;
        this.form.transform((data) => ({
          ...data
        })).post(this.route("users.update", this.form.id), {
          onSuccess: (data) => {
            toast.success(this.$page.props.jetstream.flash.message);
            this.processing = false;
          },
          onError: (data) => {
            if (data.message) {
              toast.error(data.message);
            }
          }
        });
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.$data.form.image = file;
      this.selectedFilename = file == null ? void 0 : file.name;
      this.url = URL.createObjectURL(file);
      const formdata = new FormData();
      formdata.append("image", file);
      formdata.append("id", this.user.data.id);
      this.isUploading = true;
      axios.post("/users/avatar-upload", formdata, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then((response) => {
        if (response.data.success) {
          this.form.image_id = response.data.data.id;
        } else {
          toast.error(response.data.message);
        }
      }).finally(() => {
        this.isUploading = false;
      });
    },
    removeSelectedAvatar() {
      this.url = null;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_ImageInput = resolveComponent("ImageInput");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_input_error = resolveComponent("input-error");
  const _component_VueDatePicker = resolveComponent("VueDatePicker");
  _push(ssrRenderComponent(_component_AppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        _push2(`<div class="modal-body scroll-y mx-5 mx-xl-15 my-7"${_scopeId}><form class="form"${_scopeId}><div class="mb-7"${_scopeId}><label class="d-block fw-semibold fs-6 mb-5"${_scopeId}>Avatar</label>`);
        _push2(ssrRenderComponent(_component_ImageInput, {
          image: (_b = (_a = this.user) == null ? void 0 : _a.data) == null ? void 0 : _b.full_path,
          onchange: _ctx.onFileChange,
          remove: _ctx.removeSelectedAvatar,
          selectedImage: _ctx.url,
          isUploading: _ctx.isUploading
        }, null, _parent2, _scopeId));
        _push2(`<div class="form-text"${_scopeId}>Allowed file types: png, jpg, jpeg. </div></div><div class="row"${_scopeId}><div class="mb-7 col-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "first_name",
          value: "First Name"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "first_name",
          type: "text",
          modelValue: _ctx.v$.form.first_name.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.first_name.$model = $event,
          class: _ctx.v$.form.first_name.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "First Name"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.first_name.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="mb-7 col-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "last_name",
          value: "Last Name"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "last_name",
          type: "text",
          modelValue: _ctx.v$.form.last_name.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.last_name.$model = $event,
          class: _ctx.v$.form.last_name.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "Last Name"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.last_name.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div><div class="row"${_scopeId}><div class="mb-7 col-6"${_scopeId}>`);
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
        _push2(`<!--]--></div><div class="col-6 mb-7"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, { value: "Date Of Birth" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_VueDatePicker, {
          modelValue: _ctx.v$.form.date_of_birth.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.date_of_birth.$model = $event,
          "enable-time-picker": false,
          "auto-apply": "",
          "input-class-name": "form-control form-control-lg form-control-solid fw-normal",
          class: _ctx.v$.form.date_of_birth.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "Date Of Joining"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.date_of_birth.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div><div class="row mb-6"${_scopeId}><label class="col-lg-4 col-form-label fw-semibold fs-6"${_scopeId}>Gender</label><div class="col-lg-6 fv-row fv-plugins-icon-container"${_scopeId}><div class="d-flex align-items-center mt-3"${_scopeId}><label class="form-check form-check-custom form-check-inline form-check-solid me-5"${_scopeId}><input class="form-check-input" type="radio" value="male" name="gender"${ssrIncludeBooleanAttr(ssrLooseEqual(_ctx.form.gender, "male")) ? " checked" : ""}${_scopeId}><div class="form-check-label"${_scopeId}> Male </div></label><label class="form-check form-check-custom form-check-inline form-check-solid"${_scopeId}><input class="form-check-input" type="radio" value="female" name="gender"${ssrIncludeBooleanAttr(ssrLooseEqual(_ctx.form.gender, "female")) ? " checked" : ""}${_scopeId}><div class="form-check-label"${_scopeId}> Female </div></label></div><div class="fv-plugins-message-container invalid-feedback"${_scopeId}></div></div></div><div class="mb-7"${_scopeId}><label class="required fw-semibold fs-6 mb-5"${_scopeId}>Role</label><!--[-->`);
        ssrRenderList(_ctx.roles.data, (role, index) => {
          _push2(`<div${_scopeId}><div class="d-flex fv-row"${_scopeId}><div class="form-check form-check-custom form-check-solid"${_scopeId}><input class="form-check-input me-3"${ssrIncludeBooleanAttr(ssrLooseEqual(_ctx.form.user_role, null)) ? " checked" : ""} type="radio" name="user_role" id="kt_modal_update_role_option_0"${_scopeId}><label class="form-check-label" for="kt_modal_update_role_option_0"${_scopeId}><div class="fw-bold text-gray-800 text-capitalize"${_scopeId}>${ssrInterpolate(role.name)}</div><div class="text-gray-600"${_scopeId}>Best for business owners and company administrators</div></label></div></div><div class="separator separator-dashed my-5"${_scopeId}></div></div>`);
        });
        _push2(`<!--]--></div><div class="text-center pt-15 gap-5"${_scopeId}><button type="reset" class="btn btn-light me-3" data-kt-users-modal-action="cancel"${_scopeId}>Discard</button><button type="submit" class="btn btn-primary"${ssrRenderAttr("data-kt-indicator", _ctx.form.processing ? "on" : "off")}${_scopeId}><span class="indicator-label"${_scopeId}>Submit</span><span class="indicator-progress"${_scopeId}>Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"${_scopeId}></span></span></button></div></form></div>`);
      } else {
        return [
          createVNode("div", { class: "modal-body scroll-y mx-5 mx-xl-15 my-7" }, [
            createVNode("form", {
              onSubmit: withModifiers(($event) => _ctx.submit(), ["prevent"]),
              class: "form"
            }, [
              createVNode("div", { class: "mb-7" }, [
                createVNode("label", { class: "d-block fw-semibold fs-6 mb-5" }, "Avatar"),
                createVNode(_component_ImageInput, {
                  image: (_d = (_c = this.user) == null ? void 0 : _c.data) == null ? void 0 : _d.full_path,
                  onchange: _ctx.onFileChange,
                  remove: _ctx.removeSelectedAvatar,
                  selectedImage: _ctx.url,
                  isUploading: _ctx.isUploading
                }, null, 8, ["image", "onchange", "remove", "selectedImage", "isUploading"]),
                createVNode("div", { class: "form-text" }, "Allowed file types: png, jpg, jpeg. ")
              ]),
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "mb-7 col-6" }, [
                  createVNode(_component_jet_label, {
                    for: "first_name",
                    value: "First Name"
                  }),
                  createVNode(_component_jet_input, {
                    id: "first_name",
                    type: "text",
                    modelValue: _ctx.v$.form.first_name.$model,
                    "onUpdate:modelValue": ($event) => _ctx.v$.form.first_name.$model = $event,
                    class: _ctx.v$.form.first_name.$errors.length > 0 ? "is-invalid" : "",
                    placeholder: "First Name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.first_name.$errors, (error, index) => {
                    return openBlock(), createBlock("div", { key: index }, [
                      createVNode(_component_input_error, {
                        message: error.$message
                      }, null, 8, ["message"])
                    ]);
                  }), 128))
                ]),
                createVNode("div", { class: "mb-7 col-6" }, [
                  createVNode(_component_jet_label, {
                    for: "last_name",
                    value: "Last Name"
                  }),
                  createVNode(_component_jet_input, {
                    id: "last_name",
                    type: "text",
                    modelValue: _ctx.v$.form.last_name.$model,
                    "onUpdate:modelValue": ($event) => _ctx.v$.form.last_name.$model = $event,
                    class: _ctx.v$.form.last_name.$errors.length > 0 ? "is-invalid" : "",
                    placeholder: "Last Name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.last_name.$errors, (error, index) => {
                    return openBlock(), createBlock("div", { key: index }, [
                      createVNode(_component_input_error, {
                        message: error.$message
                      }, null, 8, ["message"])
                    ]);
                  }), 128))
                ])
              ]),
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "mb-7 col-6" }, [
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
                    placeholder: "Email"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.email.$errors, (error, index) => {
                    return openBlock(), createBlock("div", { key: index }, [
                      createVNode(_component_input_error, {
                        message: error.$message
                      }, null, 8, ["message"])
                    ]);
                  }), 128))
                ]),
                createVNode("div", { class: "col-6 mb-7" }, [
                  createVNode(_component_jet_label, { value: "Date Of Birth" }),
                  createVNode(_component_VueDatePicker, {
                    modelValue: _ctx.v$.form.date_of_birth.$model,
                    "onUpdate:modelValue": ($event) => _ctx.v$.form.date_of_birth.$model = $event,
                    "enable-time-picker": false,
                    "auto-apply": "",
                    "input-class-name": "form-control form-control-lg form-control-solid fw-normal",
                    class: _ctx.v$.form.date_of_birth.$errors.length > 0 ? "is-invalid" : "",
                    placeholder: "Date Of Joining"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.date_of_birth.$errors, (error, index) => {
                    return openBlock(), createBlock("div", { key: index }, [
                      createVNode(_component_input_error, {
                        message: error.$message
                      }, null, 8, ["message"])
                    ]);
                  }), 128))
                ])
              ]),
              createVNode("div", { class: "row mb-6" }, [
                createVNode("label", { class: "col-lg-4 col-form-label fw-semibold fs-6" }, "Gender"),
                createVNode("div", { class: "col-lg-6 fv-row fv-plugins-icon-container" }, [
                  createVNode("div", { class: "d-flex align-items-center mt-3" }, [
                    createVNode("label", { class: "form-check form-check-custom form-check-inline form-check-solid me-5" }, [
                      withDirectives(createVNode("input", {
                        class: "form-check-input",
                        type: "radio",
                        value: "male",
                        name: "gender",
                        "onUpdate:modelValue": ($event) => _ctx.form.gender = $event
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, _ctx.form.gender]
                      ]),
                      createVNode("div", { class: "form-check-label" }, " Male ")
                    ]),
                    createVNode("label", { class: "form-check form-check-custom form-check-inline form-check-solid" }, [
                      withDirectives(createVNode("input", {
                        class: "form-check-input",
                        type: "radio",
                        value: "female",
                        name: "gender",
                        "onUpdate:modelValue": ($event) => _ctx.form.gender = $event
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelRadio, _ctx.form.gender]
                      ]),
                      createVNode("div", { class: "form-check-label" }, " Female ")
                    ])
                  ]),
                  createVNode("div", { class: "fv-plugins-message-container invalid-feedback" })
                ])
              ]),
              createVNode("div", { class: "mb-7" }, [
                createVNode("label", { class: "required fw-semibold fs-6 mb-5" }, "Role"),
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.roles.data, (role, index) => {
                  return openBlock(), createBlock("div", { key: index }, [
                    createVNode("div", { class: "d-flex fv-row" }, [
                      createVNode("div", { class: "form-check form-check-custom form-check-solid" }, [
                        withDirectives(createVNode("input", {
                          class: "form-check-input me-3",
                          "onUpdate:modelValue": ($event) => _ctx.form.user_role = $event,
                          type: "radio",
                          name: "user_role",
                          id: "kt_modal_update_role_option_0"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelRadio, _ctx.form.user_role]
                        ]),
                        createVNode("label", {
                          class: "form-check-label",
                          for: "kt_modal_update_role_option_0"
                        }, [
                          createVNode("div", { class: "fw-bold text-gray-800 text-capitalize" }, toDisplayString(role.name), 1),
                          createVNode("div", { class: "text-gray-600" }, "Best for business owners and company administrators")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "separator separator-dashed my-5" })
                  ]);
                }), 128))
              ]),
              createVNode("div", { class: "text-center pt-15 gap-5" }, [
                createVNode("button", {
                  type: "reset",
                  class: "btn btn-light me-3",
                  "data-kt-users-modal-action": "cancel"
                }, "Discard"),
                createVNode("button", {
                  type: "submit",
                  class: "btn btn-primary",
                  "data-kt-indicator": _ctx.form.processing ? "on" : "off"
                }, [
                  createVNode("span", { class: "indicator-label" }, "Submit"),
                  createVNode("span", { class: "indicator-progress" }, [
                    createTextVNode("Please wait... "),
                    createVNode("span", { class: "spinner-border spinner-border-sm align-middle ms-2" })
                  ])
                ], 8, ["data-kt-indicator"])
              ])
            ], 40, ["onSubmit"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UserManagement/Users/UserEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserEdit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  UserEdit as default
};
