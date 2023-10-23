import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { _ as _sfc_main$1 } from "./Modal-813c1851.mjs";
import { toast } from "vue3-toastify";
import axios from "axios";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  props: ["permission", "isEdit", "show"],
  emits: ["hidemodal"],
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      form: {
        name: {
          required
        }
      }
    };
  },
  data() {
    var _a, _b;
    return {
      processing: false,
      showModal: false,
      form: this.$inertia.form({
        id: ((_a = this.permission) == null ? void 0 : _a.id) || "",
        name: ((_b = this.permission) == null ? void 0 : _b.name) || ""
      })
    };
  },
  components: {
    JetInput,
    InputError,
    Modal: _sfc_main$1
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
        if (this.isEdit) {
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
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_input_error = resolveComponent("input-error");
  _push(ssrRenderComponent(_component_Modal, mergeProps({
    show: _ctx.show,
    title: _ctx.isEdit ? "Edit Permission" : "Add Permission",
    onOnhide: ($event) => _ctx.$emit("hidemodal", false)
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<form class="form"${_scopeId}><div class="fv-row mb-7"${_scopeId}><label class="fs-6 fw-semibold form-label mb-2"${_scopeId}><span class="required"${_scopeId}>Permission Name</span><i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="Permission names is required to be unique."${_scopeId}></i></label>`);
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "name",
          type: "text",
          modelValue: _ctx.v$.form.name.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.name.$model = $event,
          class: _ctx.v$.form.name.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "First name"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.name.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="text-center pt-15"${_scopeId}><button type="reset" class="btn btn-light me-3"${_scopeId}>Discard</button><button type="submit" class="btn btn-primary"${ssrRenderAttr("data-kt-indicator", _ctx.processing ? "on" : "off")}${_scopeId}><span class="indicator-label"${_scopeId}>Submit</span><span class="indicator-progress"${_scopeId}>Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"${_scopeId}></span></span></button></div></form>`);
      } else {
        return [
          createVNode("form", {
            onSubmit: withModifiers(($event) => _ctx.submit(), ["prevent"]),
            class: "form"
          }, [
            createVNode("div", { class: "fv-row mb-7" }, [
              createVNode("label", { class: "fs-6 fw-semibold form-label mb-2" }, [
                createVNode("span", { class: "required" }, "Permission Name"),
                createVNode("i", {
                  class: "fas fa-exclamation-circle ms-2 fs-7",
                  "data-bs-toggle": "popover",
                  "data-bs-trigger": "hover",
                  "data-bs-html": "true",
                  "data-bs-content": "Permission names is required to be unique."
                })
              ]),
              createVNode(_component_jet_input, {
                id: "name",
                type: "text",
                modelValue: _ctx.v$.form.name.$model,
                "onUpdate:modelValue": ($event) => _ctx.v$.form.name.$model = $event,
                class: _ctx.v$.form.name.$errors.length > 0 ? "is-invalid" : "",
                placeholder: "First name"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.name.$errors, (error, index) => {
                return openBlock(), createBlock("div", { key: index }, [
                  createVNode(_component_input_error, {
                    message: error.$message
                  }, null, 8, ["message"])
                ]);
              }), 128))
            ]),
            createVNode("div", { class: "text-center pt-15" }, [
              createVNode("button", {
                type: "reset",
                class: "btn btn-light me-3",
                onOnhide: ($event) => _ctx.$emit("hidemodal", false)
              }, "Discard", 40, ["onOnhide"]),
              createVNode("button", {
                type: "submit",
                class: "btn btn-primary",
                "data-kt-indicator": _ctx.processing ? "on" : "off"
              }, [
                createVNode("span", { class: "indicator-label" }, "Submit"),
                createVNode("span", { class: "indicator-progress" }, [
                  createTextVNode("Please wait... "),
                  createVNode("span", { class: "spinner-border spinner-border-sm align-middle ms-2" })
                ])
              ], 8, ["data-kt-indicator"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UserManagement/Components/PermissionForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PermissionForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PermissionForm as default
};
