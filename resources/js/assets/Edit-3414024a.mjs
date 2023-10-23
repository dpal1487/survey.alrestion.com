import { defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, withModifiers, openBlock, createBlock, Fragment, renderList, withDirectives, vModelText, vShow, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import { A as AppToolbar } from "./AppToolbar-ab6db7f6.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Datepicker from "vue3-datepicker";
import { toast } from "vue3-toastify";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  props: ["clients", "countries", "status", "project"],
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    AppLayout,
    Link,
    Head,
    Multiselect,
    JetInput,
    JetLabel,
    JetValidationErrors,
    InputError,
    Datepicker,
    AppToolbar
  },
  validations() {
    return {
      form: {
        project_name: {
          required
        },
        client: {
          required
        },
        start_date: {
          required
        },
        end_date: {
          required
        },
        project_status: {
          required
        },
        target: {},
        device_type: {
          required
        },
        project_type: {
          required
        }
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return {
      processing: false,
      form: this.$inertia.form({
        project_name: (_a = this.project) == null ? void 0 : _a.project_name,
        client: (_b = this.project) == null ? void 0 : _b.client_id,
        start_date: new Date((_c = this.project) == null ? void 0 : _c.start_date) || "",
        end_date: new Date((_d = this.project) == null ? void 0 : _d.end_date) || "",
        project_status: (_e = this.project) == null ? void 0 : _e.status,
        target: (_f = this.project) == null ? void 0 : _f.target,
        device_type: JSON.parse((_g = this.project) == null ? void 0 : _g.device_type) || [],
        project_type: (_h = this.project) == null ? void 0 : _h.project_type,
        page: "project-edit",
        action: this.getSegment(4)
      }),
      devices: [
        {
          label: "Desktop/Laptop",
          value: "desktop"
        },
        {
          label: "Mobile",
          value: "mobile"
        },
        {
          label: "Tablet",
          value: "tablet"
        }
      ]
    };
  },
  methods: {
    submit() {
      this.v$.$touch();
      this.processing = true;
      if (!this.v$.form.$invalid) {
        this.form.transform((data) => ({
          ...data
        })).post(this.route("project.update", this.project.id), {
          onSuccess: (data) => {
            toast.success(this.$page.props.jetstream.flash.message);
            this.processing = false;
          },
          onError: (data) => {
            toast.error(data.message);
          }
        });
      }
    },
    getSegment(numberSegment) {
      let path = window.location.pathname;
      let segments = path.split("/");
      return segments[numberSegment];
    },
    customFormatter(date) {
      return moment(date).format("YYYY-MM-DD");
    }
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_app_layout = resolveComponent("app-layout");
  const _component_JetValidationErrors = resolveComponent("JetValidationErrors");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _component_input_error = resolveComponent("input-error");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_Datepicker = resolveComponent("Datepicker");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Edit Project" }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: "Edit Project" }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}><a href="/projects/" class="text-muted text-hover-primary"${_scopeId}>Projects</a></li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}> Edit Project Form </li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, [
            createVNode("a", {
              href: "/projects/",
              class: "text-muted text-hover-primary"
            }, "Projects")
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, " Edit Project Form ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
        _push2(`<form autocomplete="off" class="form d-flex flex-column flex-lg-row fv-plugins-bootstrap5 fv-plugins-framework"${_scopeId}><div class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10"${_scopeId}><div class="card card-flush py-4"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>Status</h2></div></div><div class="card-body pt-0"${_scopeId}><div class="fv-row mb-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Multiselect, {
          options: _ctx.status.data,
          label: "label",
          valueProp: "id",
          class: [
            "form-control form-control-solid",
            _ctx.v$.form.project_status.$errors.length > 0 ? "is-invalid" : ""
          ],
          placeholder: "Select status",
          modelValue: _ctx.v$.form.project_status.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.project_status.$model = $event
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.project_status.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="text-muted fs-7"${_scopeId}>Set the project status.</div></div></div><div class="card card-flush py-4"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>Device Type</h2></div></div><div class="card-body pt-0"${_scopeId}><div class="fv-row mb-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Multiselect, {
          canClear: false,
          id: "device-type",
          options: _ctx.devices,
          label: "label",
          valueProp: "value",
          class: [
            "form-control form-control-solid",
            _ctx.v$.form.device_type.$errors.length > 0 ? "is-invalid" : ""
          ],
          placeholder: "Select device",
          mode: "tags",
          "close-on-select": false,
          "create-option": true,
          modelValue: _ctx.v$.form.device_type.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.device_type.$model = $event
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.device_type.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="text-muted fs-7"${_scopeId}> Set the project device type. </div></div></div><div class="card card-flush py-4"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>Project Link Type</h2></div></div><div class="card-body pt-0"${_scopeId}><div class="fv-row mb-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Multiselect, {
          options: [
            {
              label: "Single Link",
              value: "single"
            },
            {
              label: "Multi Link",
              value: "multi"
            }
          ],
          label: "label",
          valueProp: "value",
          class: [
            "form-control form-control-solid",
            _ctx.v$.form.project_type.$errors.length > 0 ? "is-invalid" : ""
          ],
          placeholder: "Select status",
          modelValue: _ctx.v$.form.project_type.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.project_type.$model = $event
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.project_type.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="text-muted fs-7"${_scopeId}> Set the project link type. </div></div></div></div><div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10"${_scopeId}><div class="card card-flush py-4"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>General</h2></div></div><div class="card-body pt-0"${_scopeId}><div class="row mb-3"${_scopeId}><div class="col-6"${_scopeId}><div class="fv-row mb-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "project-name",
          value: "Project Name"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "project-name",
          type: "text",
          placeholder: "Enter project Name / ID",
          modelValue: _ctx.v$.form.project_name.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.project_name.$model = $event,
          class: _ctx.v$.form.project_name.$errors.length > 0 ? "is-invalid" : ""
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.project_name.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div><div class="col-6"${_scopeId}><div class="fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "project-client",
          value: "Project Client"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Multiselect, {
          id: "project-client",
          options: _ctx.clients.data,
          label: "display_name",
          valueProp: "id",
          class: [
            "form-control form-control-solid",
            _ctx.v$.form.client.$errors.length > 0 ? "is-invalid" : ""
          ],
          placeholder: "Select client",
          searchable: true,
          modelValue: _ctx.form.client,
          "onUpdate:modelValue": ($event) => _ctx.form.client = $event
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.client.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div></div><div class="row mb-3"${_scopeId}><div class="col-6"${_scopeId}><div class="fv-row fs-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "project-start",
          value: "Project Start Date"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Datepicker, {
          modelValue: _ctx.v$.form.start_date.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.start_date.$model = $event,
          id: "project-start",
          format: _ctx.customFormatter,
          class: [
            "form-control form-control-lg form-control-solid",
            _ctx.v$.form.start_date.$errors.length > 0 ? "is-invalid" : ""
          ],
          placeholder: "Enter project start date"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.start_date.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div><div class="col-6"${_scopeId}><div class="fv-row fs-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "project-end",
          value: "Project End Date"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Datepicker, {
          modelValue: _ctx.v$.form.end_date.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.end_date.$model = $event,
          id: "project-end",
          type: "text",
          class: [
            "form-control form-control-lg form-control-solid",
            _ctx.v$.form.end_date.$errors.length > 0 ? "is-invalid" : ""
          ],
          placeholder: "Enter project start date"
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.end_date.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div></div><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "project-target",
          value: "Project Target"
        }, null, _parent2, _scopeId));
        _push2(`<textarea rows="5" class="form-control form-control-solid" id="project-target" placeholder="Type important message here..."${_scopeId}>${ssrInterpolate(_ctx.form.target)}</textarea></div></div></div></div></div><div class="d-flex justify-content-end"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: `/projects`,
          class: "btn btn-light me-5"
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
        _push2(`<button type="submit" class="${ssrRenderClass([{ "text-white-50": _ctx.form.processing }, "btn btn-primary"])}"${_scopeId}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"${_scopeId}><span class="visually-hidden"${_scopeId}>Loading...</span></div> Save Changes </button></div></div></form>`);
      } else {
        return [
          createVNode(_component_JetValidationErrors),
          createVNode("form", {
            onSubmit: withModifiers(_ctx.submit, ["prevent"]),
            autocomplete: "off",
            class: "form d-flex flex-column flex-lg-row fv-plugins-bootstrap5 fv-plugins-framework"
          }, [
            createVNode("div", { class: "d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10" }, [
              createVNode("div", { class: "card card-flush py-4" }, [
                createVNode("div", { class: "card-header" }, [
                  createVNode("div", { class: "card-title" }, [
                    createVNode("h2", null, "Status")
                  ])
                ]),
                createVNode("div", { class: "card-body pt-0" }, [
                  createVNode("div", { class: "fv-row mb-2" }, [
                    createVNode(_component_Multiselect, {
                      options: _ctx.status.data,
                      label: "label",
                      valueProp: "id",
                      class: [
                        "form-control form-control-solid",
                        _ctx.v$.form.project_status.$errors.length > 0 ? "is-invalid" : ""
                      ],
                      placeholder: "Select status",
                      modelValue: _ctx.v$.form.project_status.$model,
                      "onUpdate:modelValue": ($event) => _ctx.v$.form.project_status.$model = $event
                    }, null, 8, ["options", "class", "modelValue", "onUpdate:modelValue"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.project_status.$errors, (error, index) => {
                      return openBlock(), createBlock("div", { key: index }, [
                        createVNode(_component_input_error, {
                          message: error.$message
                        }, null, 8, ["message"])
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "text-muted fs-7" }, "Set the project status.")
                ])
              ]),
              createVNode("div", { class: "card card-flush py-4" }, [
                createVNode("div", { class: "card-header" }, [
                  createVNode("div", { class: "card-title" }, [
                    createVNode("h2", null, "Device Type")
                  ])
                ]),
                createVNode("div", { class: "card-body pt-0" }, [
                  createVNode("div", { class: "fv-row mb-2" }, [
                    createVNode(_component_Multiselect, {
                      canClear: false,
                      id: "device-type",
                      options: _ctx.devices,
                      label: "label",
                      valueProp: "value",
                      class: [
                        "form-control form-control-solid",
                        _ctx.v$.form.device_type.$errors.length > 0 ? "is-invalid" : ""
                      ],
                      placeholder: "Select device",
                      mode: "tags",
                      "close-on-select": false,
                      "create-option": true,
                      modelValue: _ctx.v$.form.device_type.$model,
                      "onUpdate:modelValue": ($event) => _ctx.v$.form.device_type.$model = $event
                    }, null, 8, ["options", "class", "modelValue", "onUpdate:modelValue"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.device_type.$errors, (error, index) => {
                      return openBlock(), createBlock("div", { key: index }, [
                        createVNode(_component_input_error, {
                          message: error.$message
                        }, null, 8, ["message"])
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "text-muted fs-7" }, " Set the project device type. ")
                ])
              ]),
              createVNode("div", { class: "card card-flush py-4" }, [
                createVNode("div", { class: "card-header" }, [
                  createVNode("div", { class: "card-title" }, [
                    createVNode("h2", null, "Project Link Type")
                  ])
                ]),
                createVNode("div", { class: "card-body pt-0" }, [
                  createVNode("div", { class: "fv-row mb-2" }, [
                    createVNode(_component_Multiselect, {
                      options: [
                        {
                          label: "Single Link",
                          value: "single"
                        },
                        {
                          label: "Multi Link",
                          value: "multi"
                        }
                      ],
                      label: "label",
                      valueProp: "value",
                      class: [
                        "form-control form-control-solid",
                        _ctx.v$.form.project_type.$errors.length > 0 ? "is-invalid" : ""
                      ],
                      placeholder: "Select status",
                      modelValue: _ctx.v$.form.project_type.$model,
                      "onUpdate:modelValue": ($event) => _ctx.v$.form.project_type.$model = $event
                    }, null, 8, ["class", "modelValue", "onUpdate:modelValue"]),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.project_type.$errors, (error, index) => {
                      return openBlock(), createBlock("div", { key: index }, [
                        createVNode(_component_input_error, {
                          message: error.$message
                        }, null, 8, ["message"])
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "text-muted fs-7" }, " Set the project link type. ")
                ])
              ])
            ]),
            createVNode("div", { class: "d-flex flex-column flex-row-fluid gap-7 gap-lg-10" }, [
              createVNode("div", { class: "card card-flush py-4" }, [
                createVNode("div", { class: "card-header" }, [
                  createVNode("div", { class: "card-title" }, [
                    createVNode("h2", null, "General")
                  ])
                ]),
                createVNode("div", { class: "card-body pt-0" }, [
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-6" }, [
                      createVNode("div", { class: "fv-row mb-3" }, [
                        createVNode(_component_jet_label, {
                          for: "project-name",
                          value: "Project Name"
                        }),
                        createVNode(_component_jet_input, {
                          id: "project-name",
                          type: "text",
                          placeholder: "Enter project Name / ID",
                          modelValue: _ctx.v$.form.project_name.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.project_name.$model = $event,
                          class: _ctx.v$.form.project_name.$errors.length > 0 ? "is-invalid" : ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.project_name.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "col-6" }, [
                      createVNode("div", { class: "fv-row" }, [
                        createVNode(_component_jet_label, {
                          for: "project-client",
                          value: "Project Client"
                        }),
                        createVNode(_component_Multiselect, {
                          id: "project-client",
                          options: _ctx.clients.data,
                          label: "display_name",
                          valueProp: "id",
                          class: [
                            "form-control form-control-solid",
                            _ctx.v$.form.client.$errors.length > 0 ? "is-invalid" : ""
                          ],
                          placeholder: "Select client",
                          searchable: true,
                          modelValue: _ctx.form.client,
                          "onUpdate:modelValue": ($event) => _ctx.form.client = $event
                        }, null, 8, ["options", "class", "modelValue", "onUpdate:modelValue"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.client.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-6" }, [
                      createVNode("div", { class: "fv-row fs-5" }, [
                        createVNode(_component_jet_label, {
                          for: "project-start",
                          value: "Project Start Date"
                        }),
                        createVNode(_component_Datepicker, {
                          modelValue: _ctx.v$.form.start_date.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.start_date.$model = $event,
                          id: "project-start",
                          format: _ctx.customFormatter,
                          class: [
                            "form-control form-control-lg form-control-solid",
                            _ctx.v$.form.start_date.$errors.length > 0 ? "is-invalid" : ""
                          ],
                          placeholder: "Enter project start date"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "format", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.start_date.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "col-6" }, [
                      createVNode("div", { class: "fv-row fs-5" }, [
                        createVNode(_component_jet_label, {
                          for: "project-end",
                          value: "Project End Date"
                        }),
                        createVNode(_component_Datepicker, {
                          modelValue: _ctx.v$.form.end_date.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.end_date.$model = $event,
                          id: "project-end",
                          type: "text",
                          class: [
                            "form-control form-control-lg form-control-solid",
                            _ctx.v$.form.end_date.$errors.length > 0 ? "is-invalid" : ""
                          ],
                          placeholder: "Enter project start date"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.end_date.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-12" }, [
                      createVNode("div", { class: "fv-row" }, [
                        createVNode(_component_jet_label, {
                          for: "project-target",
                          value: "Project Target"
                        }),
                        withDirectives(createVNode("textarea", {
                          rows: "5",
                          class: "form-control form-control-solid",
                          "onUpdate:modelValue": ($event) => _ctx.form.target = $event,
                          id: "project-target",
                          placeholder: "Type important message here..."
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, _ctx.form.target]
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "d-flex justify-content-end" }, [
                createVNode(_component_Link, {
                  href: `/projects`,
                  class: "btn btn-light me-5"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Discard ")
                  ]),
                  _: 1
                }),
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
          ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
