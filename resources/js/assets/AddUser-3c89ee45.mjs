import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, withDirectives, vModelRadio, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { _ as _sfc_main$1 } from "./Modal-813c1851.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { I as ImageInput } from "./ImageInput-cd82c300.mjs";
import VueDatePicker from "@vuepic/vue-datepicker";
/* empty css                */import axios from "axios";
import { toast } from "vue3-toastify";
import { ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
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
    var _a, _b, _c, _d, _e, _f;
    return {
      showModal: false,
      isUploading: false,
      url: null,
      processing: false,
      form: this.$inertia.form({
        id: "",
        user_role: "",
        image: ((_b = (_a = this.user) == null ? void 0 : _a.image) == null ? void 0 : _b.medium_path) || "",
        first_name: ((_c = this.user) == null ? void 0 : _c.first_name) || "",
        last_name: ((_d = this.user) == null ? void 0 : _d.last_name) || "",
        date_of_birth: ((_e = this.user) == null ? void 0 : _e.date_of_birth) || "",
        gender: ((_f = this.user) == null ? void 0 : _f.gender) || ""
      })
    };
  },
  components: {
    Modal: _sfc_main$1,
    JetInput,
    JetLabel,
    InputError,
    VueDatePicker,
    ImageInput,
    Link
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.processing = true;
        if (!this.isEdit) {
          axios.post(this.route("permission.store"), this.form).then((response) => {
            if (response.data.success == true) {
              this.processing = false, this.$emit("hidemodal", false);
              toast.success(response.data.message);
              return;
            }
            if (response.data.success == false) {
              toast.error(response.data.message);
            }
          });
        }
        axios.put(this.route("permission.update", this.form.id), this.form).then((response) => {
          if (response.data.success == true) {
            this.processing = false, this.$emit("hidemodal", false);
            toast.success(response.data.message);
            return;
          }
          if (response.data.success == false) {
            toast.error(response.data.message);
          }
        }).finally(() => {
          return;
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
      this.isUploading = true;
      axios.post("/avatar-upload", formdata, {
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
  const _component_Modal = resolveComponent("Modal");
  const _component_ImageInput = resolveComponent("ImageInput");
  _push(ssrRenderComponent(_component_Modal, mergeProps({
    show: _ctx.show,
    title: _ctx.isEdit ? "Edit User" : "Add User",
    onOnhide: ($event) => _ctx.$emit("hidemodal", false)
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(`<div class="modal-body scroll-y mx-5 mx-xl-15 my-7"${_scopeId}><form class="form" action="#"${_scopeId}><div class="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_user_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header" data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px"${_scopeId}><div class="fv-row mb-7"${_scopeId}><label class="d-block fw-semibold fs-6 mb-5"${_scopeId}>Avatar</label>`);
        _push2(ssrRenderComponent(_component_ImageInput, {
          image: (_a = this.user) == null ? void 0 : _a.full_path,
          onchange: _ctx.onFileChange,
          remove: _ctx.removeSelectedAvatar,
          selectedImage: _ctx.url,
          isUploading: _ctx.isUploading
        }, null, _parent2, _scopeId));
        _push2(`<div class="form-text"${_scopeId}>Allowed file types: png, jpg, jpeg. </div></div><div class="fv-row mb-7"${_scopeId}><label class="required fw-semibold fs-6 mb-2"${_scopeId}>Full Name</label><input type="text" name="user_name" class="form-control form-control-solid mb-3 mb-lg-0" placeholder="Full name"${_scopeId}></div><div class="fv-row mb-7"${_scopeId}><label class="required fw-semibold fs-6 mb-2"${_scopeId}>Email</label><input type="email" name="user_email" class="form-control form-control-solid mb-3 mb-lg-0" placeholder="example@domain.com"${_scopeId}></div><div class="mb-7"${_scopeId}><label class="required fw-semibold fs-6 mb-5"${_scopeId}>Role</label><!--[-->`);
        ssrRenderList(_ctx.roles, (role, index) => {
          _push2(`<div${_scopeId}><div class="d-flex fv-row"${_scopeId}><div class="form-check form-check-custom form-check-solid"${_scopeId}><input class="form-check-input me-3"${ssrIncludeBooleanAttr(ssrLooseEqual(_ctx.form.user_role, null)) ? " checked" : ""} type="radio" name="user_role" id="kt_modal_update_role_option_0"${_scopeId}><label class="form-check-label" for="kt_modal_update_role_option_0"${_scopeId}><div class="fw-bold text-gray-800 text-capitalize"${_scopeId}>${ssrInterpolate(role.name)}</div><div class="text-gray-600"${_scopeId}>Best for business owners and company administrators</div></label></div></div><div class="separator separator-dashed my-5"${_scopeId}></div></div>`);
        });
        _push2(`<!--]--></div></div><div class="text-center pt-15 gap-5"${_scopeId}><button type="reset" class="btn btn-light me-3" data-kt-users-modal-action="cancel"${_scopeId}>Discard</button><button type="submit" class="btn btn-primary"${ssrRenderAttr("data-kt-indicator", _ctx.form.processing ? "on" : "off")}${_scopeId}><span class="indicator-label"${_scopeId}>Submit</span><span class="indicator-progress"${_scopeId}>Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"${_scopeId}></span></span></button></div></form></div>`);
      } else {
        return [
          createVNode("div", { class: "modal-body scroll-y mx-5 mx-xl-15 my-7" }, [
            createVNode("form", {
              onSubmit: withModifiers(($event) => _ctx.submit(), ["prevent"]),
              class: "form",
              action: "#"
            }, [
              createVNode("div", {
                class: "d-flex flex-column scroll-y me-n7 pe-7",
                id: "kt_modal_add_user_scroll",
                "data-kt-scroll": "true",
                "data-kt-scroll-activate": "{default: false, lg: true}",
                "data-kt-scroll-max-height": "auto",
                "data-kt-scroll-dependencies": "#kt_modal_add_user_header",
                "data-kt-scroll-wrappers": "#kt_modal_add_user_scroll",
                "data-kt-scroll-offset": "300px"
              }, [
                createVNode("div", { class: "fv-row mb-7" }, [
                  createVNode("label", { class: "d-block fw-semibold fs-6 mb-5" }, "Avatar"),
                  createVNode(_component_ImageInput, {
                    image: (_b = this.user) == null ? void 0 : _b.full_path,
                    onchange: _ctx.onFileChange,
                    remove: _ctx.removeSelectedAvatar,
                    selectedImage: _ctx.url,
                    isUploading: _ctx.isUploading
                  }, null, 8, ["image", "onchange", "remove", "selectedImage", "isUploading"]),
                  createVNode("div", { class: "form-text" }, "Allowed file types: png, jpg, jpeg. ")
                ]),
                createVNode("div", { class: "fv-row mb-7" }, [
                  createVNode("label", { class: "required fw-semibold fs-6 mb-2" }, "Full Name"),
                  createVNode("input", {
                    type: "text",
                    name: "user_name",
                    class: "form-control form-control-solid mb-3 mb-lg-0",
                    placeholder: "Full name"
                  })
                ]),
                createVNode("div", { class: "fv-row mb-7" }, [
                  createVNode("label", { class: "required fw-semibold fs-6 mb-2" }, "Email"),
                  createVNode("input", {
                    type: "email",
                    name: "user_email",
                    class: "form-control form-control-solid mb-3 mb-lg-0",
                    placeholder: "example@domain.com"
                  })
                ]),
                createVNode("div", { class: "mb-7" }, [
                  createVNode("label", { class: "required fw-semibold fs-6 mb-5" }, "Role"),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.roles, (role, index) => {
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
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UserManagement/Users/Components/AddUser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddUser = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AddUser as default
};
