import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, createTextVNode, withDirectives, vModelCheckbox, toDisplayString, useSSRContext } from "vue";
import { required } from "@vuelidate/validators";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { _ as _sfc_main$1 } from "./Modal-813c1851.mjs";
import { toast } from "vue3-toastify";
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  props: ["isEdit", "show", "permissions", "role"],
  emits: ["hidemodal"],
  setup() {
    return {
      v$: useVuelidate()
    };
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
    var _a, _b, _c, _d, _e, _f;
    return {
      showModal: false,
      processing: false,
      form: this.$inertia.form({
        id: ((_a = this.role) == null ? void 0 : _a.id) || "",
        name: ((_b = this.role) == null ? void 0 : _b.name) || "",
        read: ((_c = this.role) == null ? void 0 : _c.read) || "",
        write: ((_d = this.role) == null ? void 0 : _d.write) || "",
        create: ((_e = this.role) == null ? void 0 : _e.create) || "",
        delete: ((_f = this.role) == null ? void 0 : _f.delete) || ""
      })
    };
  },
  components: {
    Modal: _sfc_main$1,
    JetInput,
    InputError
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.processing = true;
        if (!this.isEdit) {
          axios.post(this.route("roles.store"), this.form).then((response) => {
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
          axios.put(this.route("roles.update", this.form.id), this.form).then((response) => {
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
    title: _ctx.isEdit ? "Edit Role" : "Add Role",
    onOnhide: ($event) => _ctx.$emit("hidemodal", false)
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="modal-body scroll-y mx-lg-5"${_scopeId}><form class="form"${_scopeId}><div class="d-flex flex-column scroll-y" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-offset="300px"${_scopeId}><div class="fv-row mb-10"${_scopeId}><label class="fs-5 fw-bold form-label mb-2"${_scopeId}><span class="required"${_scopeId}>Role name</span></label>`);
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "name",
          type: "text",
          modelValue: _ctx.v$.form.name.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.name.$model = $event,
          class: _ctx.v$.form.name.$errors.length > 0 ? "is-invalid" : "",
          placeholder: "Enter a role name"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.name.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="fv-row"${_scopeId}><label class="fs-5 fw-bold form-label mb-2"${_scopeId}>Role Permissions</label><div class="table-responsive"${_scopeId}><table class="table align-middle table-row-dashed fs-6 gy-5"${_scopeId}><tbody class="text-gray-600 fw-semibold"${_scopeId}><tr${_scopeId}><td class="text-gray-800"${_scopeId}>Administrator Access <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Allows a full access to the system"${_scopeId}></i></td><td${_scopeId}><label class="form-check form-check-custom form-check-solid me-9"${_scopeId}><input class="form-check-input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(_ctx.read) ? ssrLooseContain(_ctx.read, null) : _ctx.read) ? " checked" : ""} id="roles_select_all"${_scopeId}><span class="form-check-label" for="roles_select_all"${_scopeId}>Select all</span></label></td></tr><!--[-->`);
        ssrRenderList(_ctx.permissions, (permission, index) => {
          _push2(`<tr${_scopeId}><td class="text-gray-800 text-uppercase"${_scopeId}>${ssrInterpolate(permission.name)}</td><td${_scopeId}><div class="d-flex"${_scopeId}>${ssrInterpolate(_ctx.permissions.read)} <label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-8"${_scopeId}><input class="form-check-input" type="checkbox"${ssrRenderAttr("value", permission.name + "-read")}${ssrRenderAttr("name", permission.name + "-read[]")}${ssrIncludeBooleanAttr(Array.isArray(_ctx.form.read) ? ssrLooseContain(_ctx.form.read, permission.name + "-read") : _ctx.form.read) ? " checked" : ""}${_scopeId}><span class="form-check-label"${_scopeId}>Read</span></label><label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-8"${_scopeId}><input class="form-check-input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(_ctx.form.write) ? ssrLooseContain(_ctx.form.write, null) : _ctx.form.write) ? " checked" : ""} name="write[]"${_scopeId}><span class="form-check-label"${_scopeId}>Write</span></label><label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-8"${_scopeId}><input class="form-check-input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(_ctx.form.create) ? ssrLooseContain(_ctx.form.create, null) : _ctx.form.create) ? " checked" : ""} name="create[]"${_scopeId}><span class="form-check-label"${_scopeId}>Create</span></label><label class="form-check form-check-sm form-check-custom form-check-solid"${_scopeId}><input class="form-check-input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(_ctx.form.delete) ? ssrLooseContain(_ctx.form.delete, null) : _ctx.form.delete) ? " checked" : ""} name="delete[]"${_scopeId}><span class="form-check-label"${_scopeId}>Delete</span></label></div></td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div></div></div><div class="text-center pt-15"${_scopeId}><button type="reset" class="btn btn-light me-3"${_scopeId}>Discard</button><button type="submit" class="btn btn-primary"${ssrRenderAttr("data-kt-indicator", _ctx.processing ? "on" : "off")}${_scopeId}><span class="indicator-label"${_scopeId}>Submit</span><span class="indicator-progress"${_scopeId}>Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"${_scopeId}></span></span></button></div></form></div>`);
      } else {
        return [
          createVNode("div", { class: "modal-body scroll-y mx-lg-5" }, [
            createVNode("form", {
              onSubmit: withModifiers(($event) => _ctx.submit(), ["prevent"]),
              class: "form"
            }, [
              createVNode("div", {
                class: "d-flex flex-column scroll-y",
                "data-kt-scroll": "true",
                "data-kt-scroll-activate": "{default: false, lg: true}",
                "data-kt-scroll-max-height": "auto",
                "data-kt-scroll-offset": "300px"
              }, [
                createVNode("div", { class: "fv-row mb-10" }, [
                  createVNode("label", { class: "fs-5 fw-bold form-label mb-2" }, [
                    createVNode("span", { class: "required" }, "Role name")
                  ]),
                  createVNode(_component_jet_input, {
                    id: "name",
                    type: "text",
                    modelValue: _ctx.v$.form.name.$model,
                    "onUpdate:modelValue": ($event) => _ctx.v$.form.name.$model = $event,
                    class: _ctx.v$.form.name.$errors.length > 0 ? "is-invalid" : "",
                    placeholder: "Enter a role name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.name.$errors, (error, index) => {
                    return openBlock(), createBlock("div", { key: index }, [
                      createVNode(_component_input_error, {
                        message: error.$message
                      }, null, 8, ["message"])
                    ]);
                  }), 128))
                ]),
                createVNode("div", { class: "fv-row" }, [
                  createVNode("label", { class: "fs-5 fw-bold form-label mb-2" }, "Role Permissions"),
                  createVNode("div", { class: "table-responsive" }, [
                    createVNode("table", { class: "table align-middle table-row-dashed fs-6 gy-5" }, [
                      createVNode("tbody", { class: "text-gray-600 fw-semibold" }, [
                        createVNode("tr", null, [
                          createVNode("td", { class: "text-gray-800" }, [
                            createTextVNode("Administrator Access "),
                            createVNode("i", {
                              class: "fas fa-exclamation-circle ms-1 fs-7",
                              "data-bs-toggle": "tooltip",
                              title: "Allows a full access to the system"
                            })
                          ]),
                          createVNode("td", null, [
                            createVNode("label", { class: "form-check form-check-custom form-check-solid me-9" }, [
                              withDirectives(createVNode("input", {
                                class: "form-check-input",
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => _ctx.read = $event,
                                id: "roles_select_all"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, _ctx.read]
                              ]),
                              createVNode("span", {
                                class: "form-check-label",
                                for: "roles_select_all"
                              }, "Select all")
                            ])
                          ])
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.permissions, (permission, index) => {
                          return openBlock(), createBlock("tr", { key: index }, [
                            createVNode("td", { class: "text-gray-800 text-uppercase" }, toDisplayString(permission.name), 1),
                            createVNode("td", null, [
                              createVNode("div", { class: "d-flex" }, [
                                createTextVNode(toDisplayString(_ctx.permissions.read) + " ", 1),
                                createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-8" }, [
                                  withDirectives(createVNode("input", {
                                    class: "form-check-input",
                                    type: "checkbox",
                                    value: permission.name + "-read",
                                    name: permission.name + "-read[]",
                                    "onUpdate:modelValue": ($event) => _ctx.form.read = $event
                                  }, null, 8, ["value", "name", "onUpdate:modelValue"]), [
                                    [vModelCheckbox, _ctx.form.read]
                                  ]),
                                  createVNode("span", { class: "form-check-label" }, "Read")
                                ]),
                                createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-8" }, [
                                  withDirectives(createVNode("input", {
                                    class: "form-check-input",
                                    type: "checkbox",
                                    "onUpdate:modelValue": ($event) => _ctx.form.write = $event,
                                    name: "write[]"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelCheckbox, _ctx.form.write]
                                  ]),
                                  createVNode("span", { class: "form-check-label" }, "Write")
                                ]),
                                createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-8" }, [
                                  withDirectives(createVNode("input", {
                                    class: "form-check-input",
                                    type: "checkbox",
                                    "onUpdate:modelValue": ($event) => _ctx.form.create = $event,
                                    name: "create[]"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelCheckbox, _ctx.form.create]
                                  ]),
                                  createVNode("span", { class: "form-check-label" }, "Create")
                                ]),
                                createVNode("label", { class: "form-check form-check-sm form-check-custom form-check-solid" }, [
                                  withDirectives(createVNode("input", {
                                    class: "form-check-input",
                                    type: "checkbox",
                                    "onUpdate:modelValue": ($event) => _ctx.form.delete = $event,
                                    name: "delete[]"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelCheckbox, _ctx.form.delete]
                                  ]),
                                  createVNode("span", { class: "form-check-label" }, "Delete")
                                ])
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UserManagement/Roles/Components/UserRoleForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserRoleForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  UserRoleForm as default
};
