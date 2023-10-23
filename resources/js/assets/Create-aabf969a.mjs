import { defineComponent, resolveComponent, withCtx, createVNode, toDisplayString, withModifiers, openBlock, createBlock, Fragment, renderList, withDirectives, vModelText, vModelCheckbox, vShow, createTextVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { A as AppToolbar } from "./AppToolbar-ab6db7f6.mjs";
import RadioType from "./RadioType-9c861140.mjs";
import Multiselect from "@vueform/multiselect";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import useVuelidate from "@vuelidate/core";
import { required, numeric, url } from "@vuelidate/validators";
import Datepicker from "vue3-datepicker";
import { toast } from "vue3-toastify";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  props: ["clients", "countries", "status"],
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    AppLayout,
    AppToolbar,
    Link,
    Head,
    Multiselect,
    JetInput,
    JetLabel,
    JetValidationErrors,
    InputError,
    Datepicker,
    RadioType
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
        project_cpi: {
          required,
          numeric
        },
        project_length: {
          required,
          numeric
        },
        project_ir: {
          required,
          numeric
        },
        start_date: {
          required
        },
        end_date: {
          required
        },
        sample_size: {
          required,
          numeric
        },
        project_link: {
          required,
          url
        },
        project_country: {
          required,
          numeric
        },
        project_status: {
          required
        },
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
    return {
      processing: false,
      form: this.$inertia.form({
        project_name: "",
        client: "",
        project_cpi: "",
        project_length: "",
        project_ir: "",
        start_date: "",
        end_date: "",
        sample_size: "",
        project_link: "",
        project_country: "",
        project_status: "",
        target: "",
        device_type: [],
        project_type: "",
        add_more: ""
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
      ],
      title: "Project Create"
    };
  },
  methods: {
    submit() {
      this.v$.$touch();
      this.processing = true;
      if (!this.v$.form.$invalid) {
        this.form.transform((data) => ({
          ...data
        })).post(route().current() == "project.create" ? this.route("project.store") : this.route("project.update", this.project.id), {
          onSuccess: (data) => {
            toast.success(this.$page.props.jetstream.flash.message);
            this.processing = false;
          },
          onError: (data) => {
            if (data.message) {
              toast.error(data.message);
            } else {
              console.log(data);
            }
          }
        });
      }
    },
    getSegment(numberSegment) {
      let path = window.location.pathname;
      let segments = path.split("/");
      return segments[numberSegment];
    }
  },
  created() {
    console.log(
      route().params.client_id
    );
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
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Add New Project" }, null, _parent));
  _push(ssrRenderComponent(_component_app_layout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}><a href="/project/" class="text-muted text-hover-primary"${_scopeId}>Projects</a></li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item text-muted"${_scopeId}>${ssrInterpolate(_ctx.title)}</li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, [
            createVNode("a", {
              href: "/project/",
              class: "text-muted text-hover-primary"
            }, "Projects")
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item text-muted" }, toDisplayString(_ctx.title), 1)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent2, _scopeId));
        _push2(`<form autocomplete="off" class="form d-flex flex-column flex-lg-row fv-plugins-bootstrap5 fv-plugins-framework"${_scopeId}><div class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10"${_scopeId}><div class="card card-flush py-4"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>Status</h2></div></div><div class="card-body pt-0"${_scopeId}><div class="fv-row mb-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Multiselect, {
          id: "project-status",
          "can-clear": false,
          options: _ctx.status.data,
          label: "label",
          valueProp: "value",
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
          id: "project-status",
          "can-clear": false,
          options: _ctx.devices,
          label: "label",
          valueProp: "value",
          class: [
            "form-control form-control-solid",
            _ctx.v$.form.device_type.$errors.length > 0 ? "is-invalid" : ""
          ],
          placeholder: "Select status",
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
          "can-clear": false,
          id: "project-status",
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
        _push2(`<!--]--></div><div class="text-muted fs-7"${_scopeId}> Set the project link type. </div></div></div></div><div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10"${_scopeId}><div class="card card-flush py-4"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>General</h2></div></div><div class="card-body pt-0"${_scopeId}><div class="fv-row mb-3"${_scopeId}>`);
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
        _push2(`<!--]--></div><div class="row mb-3"${_scopeId}><div class="col-6"${_scopeId}><div class="fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "project-client",
          value: "Project Client"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Multiselect, {
          "can-clear": false,
          id: "project-client",
          options: _ctx.clients.data,
          label: "label",
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
        _push2(`<!--]--></div></div><div class="col-6"${_scopeId}><div class="fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "project-country",
          value: "Project Country"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Multiselect, {
          "can-clear": false,
          options: _ctx.countries.data,
          label: "label",
          valueProp: "id",
          class: [
            "form-control form-control-solid",
            _ctx.v$.form.project_country.$errors.length > 0 ? "is-invalid" : ""
          ],
          placeholder: "Select country",
          searchable: true,
          modelValue: _ctx.form.project_country,
          "onUpdate:modelValue": ($event) => _ctx.form.project_country = $event
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.project_country.$errors, (error, index) => {
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
        _push2(`<input type="date"${ssrRenderAttr("value", _ctx.v$.form.start_date.$model)} id="project-start" placeholder="Enter project start date" class="${ssrRenderClass([
          _ctx.v$.form.start_date.$errors.length > 0 ? "is-invalid" : "",
          "form-control form-control-lg form-control-solid"
        ])}"${_scopeId}><!--[-->`);
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
        _push2(`<input type="date"${ssrRenderAttr("value", _ctx.v$.form.end_date.$model)} id="project-end" placeholder="Enter project start date" class="${ssrRenderClass([
          _ctx.v$.form.end_date.$errors.length > 0 ? "is-invalid" : "",
          "form-control form-control-lg form-control-solid"
        ])}"${_scopeId}><!--[-->`);
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
        _push2(`<textarea rows="5" class="form-control form-control-solid" id="project-target" placeholder="Type important message here..."${_scopeId}>${ssrInterpolate(_ctx.form.target)}</textarea></div></div></div></div></div><div class="card card-flush py-4"${_scopeId}><div class="card-header"${_scopeId}><div class="card-title"${_scopeId}><h2${_scopeId}>Pricing</h2></div></div><div class="card-body pt-0"${_scopeId}><div class="row mb-3"${_scopeId}><div class="col-12"${_scopeId}><div class="fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "project-link",
          value: "Project Link"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "project-link",
          type: "text",
          placeholder: "https://www.example.com?id=RespondentID",
          modelValue: _ctx.v$.form.project_link.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.project_link.$model = $event,
          class: _ctx.v$.form.project_link.$errors.length > 0 ? "is-invalid" : ""
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.project_link.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div></div><div class="row mb-3"${_scopeId}><div class="col-6"${_scopeId}><div class="fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "project-cpi",
          value: "Project CPC/CPI"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "project-cpi",
          type: "number",
          placeholder: "Enter project CPI/CPC",
          modelValue: _ctx.v$.form.project_cpi.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.project_cpi.$model = $event,
          class: _ctx.v$.form.project_cpi.$errors.length > 0 ? "is-invalid" : ""
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.project_cpi.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div><div class="col-6"${_scopeId}><div class="fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "sample-size",
          value: "Sample Size"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "sample-size",
          type: "number",
          placeholder: "Enter sample size",
          modelValue: _ctx.v$.form.sample_size.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.sample_size.$model = $event,
          class: _ctx.v$.form.sample_size.$errors.length > 0 ? "is-invalid" : ""
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.sample_size.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div></div><div class="row mb-3"${_scopeId}><div class="col-6"${_scopeId}><div class="fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "project-loi",
          value: "Project Length (LOI)"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "project-loi",
          type: "number",
          placeholder: "Enter project length (LOI)",
          modelValue: _ctx.v$.form.project_length.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.project_length.$model = $event,
          class: _ctx.v$.form.project_length.$errors.length > 0 ? "is-invalid" : ""
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.project_length.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div><div class="col-6"${_scopeId}><div class="fv-row"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "project-ir",
          value: "Incedance Rate (IR)"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "project-ir",
          type: "number",
          placeholder: "Enter incedance rate (IR)",
          modelValue: _ctx.v$.form.project_ir.$model,
          "onUpdate:modelValue": ($event) => _ctx.v$.form.project_ir.$model = $event,
          class: _ctx.v$.form.project_ir.$errors.length > 0 ? "is-invalid" : ""
        }, null, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.v$.form.project_ir.$errors, (error, index) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: error.$message
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div></div></div><div class="fv-row col-12"${_scopeId}><div class="form-check"${_scopeId}><input class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(_ctx.form.add_more) ? ssrLooseContain(_ctx.form.add_more, "") : _ctx.form.add_more) ? " checked" : ""} type="checkbox" value="" id="addMore"${_scopeId}><label class="form-check-label" for="addMore"${_scopeId}> Add More Project </label></div></div></div></div><div class="d-flex justify-content-end"${_scopeId}><a href="/projects" class="btn btn-secondary me-5"${_scopeId}> Discard </a><button type="submit" class="${ssrRenderClass([{ "text-white-50": _ctx.form.processing }, "btn btn-primary"])}"${_scopeId}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"${_scopeId}><span class="visually-hidden"${_scopeId}>Loading...</span></div> Save </button></div></div></form>`);
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
                      id: "project-status",
                      "can-clear": false,
                      options: _ctx.status.data,
                      label: "label",
                      valueProp: "value",
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
                      id: "project-status",
                      "can-clear": false,
                      options: _ctx.devices,
                      label: "label",
                      valueProp: "value",
                      class: [
                        "form-control form-control-solid",
                        _ctx.v$.form.device_type.$errors.length > 0 ? "is-invalid" : ""
                      ],
                      placeholder: "Select status",
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
                      "can-clear": false,
                      id: "project-status",
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
                  ]),
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-6" }, [
                      createVNode("div", { class: "fv-row" }, [
                        createVNode(_component_jet_label, {
                          for: "project-client",
                          value: "Project Client"
                        }),
                        createVNode(_component_Multiselect, {
                          "can-clear": false,
                          id: "project-client",
                          options: _ctx.clients.data,
                          label: "label",
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
                    ]),
                    createVNode("div", { class: "col-6" }, [
                      createVNode("div", { class: "fv-row" }, [
                        createVNode(_component_jet_label, {
                          for: "project-country",
                          value: "Project Country"
                        }),
                        createVNode(_component_Multiselect, {
                          "can-clear": false,
                          options: _ctx.countries.data,
                          label: "label",
                          valueProp: "id",
                          class: [
                            "form-control form-control-solid",
                            _ctx.v$.form.project_country.$errors.length > 0 ? "is-invalid" : ""
                          ],
                          placeholder: "Select country",
                          searchable: true,
                          modelValue: _ctx.form.project_country,
                          "onUpdate:modelValue": ($event) => _ctx.form.project_country = $event
                        }, null, 8, ["options", "modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.project_country.$errors, (error, index) => {
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
                        withDirectives(createVNode("input", {
                          type: "date",
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.start_date.$model = $event,
                          id: "project-start",
                          class: [
                            "form-control form-control-lg form-control-solid",
                            _ctx.v$.form.start_date.$errors.length > 0 ? "is-invalid" : ""
                          ],
                          placeholder: "Enter project start date"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, _ctx.v$.form.start_date.$model]
                        ]),
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
                        withDirectives(createVNode("input", {
                          type: "date",
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.end_date.$model = $event,
                          id: "project-end",
                          class: [
                            "form-control form-control-lg form-control-solid",
                            _ctx.v$.form.end_date.$errors.length > 0 ? "is-invalid" : ""
                          ],
                          placeholder: "Enter project start date"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, _ctx.v$.form.end_date.$model]
                        ]),
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
              createVNode("div", { class: "card card-flush py-4" }, [
                createVNode("div", { class: "card-header" }, [
                  createVNode("div", { class: "card-title" }, [
                    createVNode("h2", null, "Pricing")
                  ])
                ]),
                createVNode("div", { class: "card-body pt-0" }, [
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-12" }, [
                      createVNode("div", { class: "fv-row" }, [
                        createVNode(_component_jet_label, {
                          for: "project-link",
                          value: "Project Link"
                        }),
                        createVNode(_component_jet_input, {
                          id: "project-link",
                          type: "text",
                          placeholder: "https://www.example.com?id=RespondentID",
                          modelValue: _ctx.v$.form.project_link.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.project_link.$model = $event,
                          class: _ctx.v$.form.project_link.$errors.length > 0 ? "is-invalid" : ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.project_link.$errors, (error, index) => {
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
                      createVNode("div", { class: "fv-row" }, [
                        createVNode(_component_jet_label, {
                          for: "project-cpi",
                          value: "Project CPC/CPI"
                        }),
                        createVNode(_component_jet_input, {
                          id: "project-cpi",
                          type: "number",
                          placeholder: "Enter project CPI/CPC",
                          modelValue: _ctx.v$.form.project_cpi.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.project_cpi.$model = $event,
                          class: _ctx.v$.form.project_cpi.$errors.length > 0 ? "is-invalid" : ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.project_cpi.$errors, (error, index) => {
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
                          for: "sample-size",
                          value: "Sample Size"
                        }),
                        createVNode(_component_jet_input, {
                          id: "sample-size",
                          type: "number",
                          placeholder: "Enter sample size",
                          modelValue: _ctx.v$.form.sample_size.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.sample_size.$model = $event,
                          class: _ctx.v$.form.sample_size.$errors.length > 0 ? "is-invalid" : ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.sample_size.$errors, (error, index) => {
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
                      createVNode("div", { class: "fv-row" }, [
                        createVNode(_component_jet_label, {
                          for: "project-loi",
                          value: "Project Length (LOI)"
                        }),
                        createVNode(_component_jet_input, {
                          id: "project-loi",
                          type: "number",
                          placeholder: "Enter project length (LOI)",
                          modelValue: _ctx.v$.form.project_length.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.project_length.$model = $event,
                          class: _ctx.v$.form.project_length.$errors.length > 0 ? "is-invalid" : ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.project_length.$errors, (error, index) => {
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
                          for: "project-ir",
                          value: "Incedance Rate (IR)"
                        }),
                        createVNode(_component_jet_input, {
                          id: "project-ir",
                          type: "number",
                          placeholder: "Enter incedance rate (IR)",
                          modelValue: _ctx.v$.form.project_ir.$model,
                          "onUpdate:modelValue": ($event) => _ctx.v$.form.project_ir.$model = $event,
                          class: _ctx.v$.form.project_ir.$errors.length > 0 ? "is-invalid" : ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.v$.form.project_ir.$errors, (error, index) => {
                          return openBlock(), createBlock("div", { key: index }, [
                            createVNode(_component_input_error, {
                              message: error.$message
                            }, null, 8, ["message"])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "fv-row col-12" }, [
                    createVNode("div", { class: "form-check" }, [
                      withDirectives(createVNode("input", {
                        class: "form-check-input",
                        "onUpdate:modelValue": ($event) => _ctx.form.add_more = $event,
                        type: "checkbox",
                        value: "",
                        id: "addMore"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelCheckbox, _ctx.form.add_more]
                      ]),
                      createVNode("label", {
                        class: "form-check-label",
                        for: "addMore"
                      }, " Add More Project ")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "d-flex justify-content-end" }, [
                createVNode("a", {
                  href: "/projects",
                  class: "btn btn-secondary me-5"
                }, " Discard "),
                createVNode("button", {
                  type: "submit",
                  class: ["btn btn-primary", { "text-white-50": _ctx.form.processing }]
                }, [
                  withDirectives(createVNode("div", { class: "spinner-border spinner-border-sm" }, [
                    createVNode("span", { class: "visually-hidden" }, "Loading...")
                  ], 512), [
                    [vShow, _ctx.form.processing]
                  ]),
                  createTextVNode(" Save ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Create as default
};
