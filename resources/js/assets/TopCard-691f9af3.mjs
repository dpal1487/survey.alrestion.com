import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Datepicker from "vue3-datepicker";
import { toast } from "vue3-toastify";
import axios from "axios";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  props: ["clients", "status", "project"],
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    Link,
    Multiselect,
    JetInput,
    JetLabel,
    JetValidationErrors,
    InputError,
    Datepicker
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
        start_date: {},
        end_date: {},
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
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return {
      form: this.$inertia.form({
        project_name: (_a = this.project) == null ? void 0 : _a.project_name,
        client: (_b = this.project) == null ? void 0 : _b.client.id,
        start_date: (_c = this.project) == null ? void 0 : _c.start_date,
        end_date: (_d = this.project) == null ? void 0 : _d.end_date,
        project_status: (_e = this.project) == null ? void 0 : _e.status,
        target: (_f = this.project) == null ? void 0 : _f.target,
        device_type: this.project.device_type ? JSON.parse((_g = this.project) == null ? void 0 : _g.device_type) : this.device_type,
        project_type: (_h = this.project) == null ? void 0 : _h.project_type
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
      isEdit: false
    };
  },
  methods: {
    onFileChange(e) {
      console.log(e.target.files[0]);
      this.file = e.target.files[0];
    },
    formSubmit(e) {
      const file = e.currentTarget.files[0];
      this.$data.form.image = file;
      this.selectedFilename = file == null ? void 0 : file.name;
      this.url = URL.createObjectURL(file);
      const config = {
        headers: { "content-type": "multipart/form-data" }
      };
      const formData = new FormData();
      formData.append("file", file);
      console.log(formData);
      axios.post(`/project/${this.project.id}/import`, formData, config).then(function(response) {
      }).catch(function(error) {
      });
    },
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.form.transform((data) => ({
          ...data
        })).post(this.route("project.update", this.project.id), {
          onSuccess: (data) => {
            this.isEdit = false;
            toast.success(
              this.$page.props.jetstream.flash.message
            );
          },
          onError: (data) => {
            toast.error(this.$page.props.errors.message);
          }
        });
      }
    }
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_input_error = resolveComponent("input-error");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-5" }, _attrs))}><div class="card"><div class="card-header align-items-center"><div class="card-title"><h2> #${ssrInterpolate(_ctx.project.project_id)} (${ssrInterpolate(_ctx.project.project_name)}) </h2></div>`);
  if (_ctx.$page.props.user.role.role.slug != "user") {
    _push(`<div class="flex-shrink-0"><label class="btn btn-primary m-1 btn-sm w-10" for="importId"><span class="d-flex align-items-center"><i class="bi bi-file-earmark-arrow-down"></i><span>Import ID&#39;s</span><input type="file" name="avatar" id="importId" class="d-none"></span></label><a target="_blank" class="btn btn-primary m-1 btn-sm"${ssrRenderAttr("href", `/project/${_ctx.project.id}/export`)}><i class="bi bi-file-earmark-arrow-up"></i>Export ID&#39;s</a><a target="_blank"${ssrRenderAttr("href", `/project/${_ctx.project.id}/report`)} class="btn btn-primary m-1 btn-sm"><i class="bi bi-graph-down-arrow"></i>Export Data</a><button class="btn btn-primary m-1 btn-sm"><i class="bi bi-pencil me-2"></i>Edit </button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="card-body p-0"><div class="row">`);
  if (_ctx.isEdit) {
    _push(`<div class="col-6"><form autocomplete="off" class="ps-5 pt-5"><div class="row g-5"><div class="fv-row col-12">`);
    _push(ssrRenderComponent(_component_jet_label, {
      for: "project-name",
      value: "Project Name"
    }, null, _parent));
    _push(ssrRenderComponent(_component_jet_input, {
      id: "project-name",
      type: "text",
      placeholder: "Enter project Name / ID",
      modelValue: _ctx.v$.form.project_name.$model,
      "onUpdate:modelValue": ($event) => _ctx.v$.form.project_name.$model = $event,
      class: _ctx.v$.form.project_name.$errors.length > 0 ? "is-invalid" : ""
    }, null, _parent));
    _push(`<!--[-->`);
    ssrRenderList(_ctx.v$.form.project_name.$errors, (error, index) => {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_input_error, {
        message: error.$message
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div><div class="fv-row col-6">`);
    _push(ssrRenderComponent(_component_jet_label, {
      for: "project-client",
      value: "Project Client"
    }, null, _parent));
    _push(ssrRenderComponent(_component_Multiselect, {
      canClear: false,
      id: "project-client",
      options: _ctx.clients,
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
    }, null, _parent));
    _push(`<!--[-->`);
    ssrRenderList(_ctx.v$.form.client.$errors, (error, index) => {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_input_error, {
        message: error.$message
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div><div class="fv-row col-6">`);
    _push(ssrRenderComponent(_component_jet_label, {
      for: "link-type",
      value: "Project Link Type"
    }, null, _parent));
    _push(ssrRenderComponent(_component_Multiselect, {
      id: "link-type",
      canClear: false,
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
      placeholder: "Select link type",
      modelValue: _ctx.v$.form.project_type.$model,
      "onUpdate:modelValue": ($event) => _ctx.v$.form.project_type.$model = $event
    }, null, _parent));
    _push(`<!--[-->`);
    ssrRenderList(_ctx.v$.form.project_type.$errors, (error, index) => {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_input_error, {
        message: error.$message
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div><div class="fv-row col-6 fs-5">`);
    _push(ssrRenderComponent(_component_jet_label, {
      for: "project-start",
      value: "Project Start Date"
    }, null, _parent));
    _push(`<input type="date"${ssrRenderAttr("value", _ctx.v$.form.start_date.$model)} placeholder="Enter project start date" class="${ssrRenderClass([
      _ctx.v$.form.start_date.$errors.length > 0 ? "is-invalid" : "",
      "form-control form-control-lg form-control-solid"
    ])}"><!--[-->`);
    ssrRenderList(_ctx.v$.form.start_date.$errors, (error, index) => {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_input_error, {
        message: error.$message
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div><div class="fv-row col-6 fs-5">`);
    _push(ssrRenderComponent(_component_jet_label, {
      for: "project-end",
      value: "Project End Date"
    }, null, _parent));
    _push(`<input type="date"${ssrRenderAttr("value", _ctx.v$.form.end_date.$model)} placeholder="Enter project start date" class="${ssrRenderClass([
      _ctx.v$.form.end_date.$errors.length > 0 ? "is-invalid" : "",
      "form-control form-control-lg form-control-solid"
    ])}"><!--[-->`);
    ssrRenderList(_ctx.v$.form.end_date.$errors, (error, index) => {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_input_error, {
        message: error.$message
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div><div class="fv-row col-6">`);
    _push(ssrRenderComponent(_component_jet_label, {
      for: "device-type",
      value: "Project Device"
    }, null, _parent));
    _push(ssrRenderComponent(_component_Multiselect, {
      "can-clear": false,
      id: "project-status",
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
    }, null, _parent));
    _push(`<!--[-->`);
    ssrRenderList(_ctx.v$.form.device_type.$errors, (error, index) => {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_input_error, {
        message: error.$message
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div><div class="fv-row col-6">`);
    _push(ssrRenderComponent(_component_jet_label, {
      for: "project-status",
      value: "Project Status"
    }, null, _parent));
    _push(ssrRenderComponent(_component_Multiselect, {
      canClear: false,
      id: "project-status",
      options: _ctx.status,
      label: "label",
      valueProp: "value",
      class: [
        "form-control form-control-solid",
        _ctx.v$.form.project_status.$errors.length > 0 ? "is-invalid" : ""
      ],
      placeholder: "Select status",
      modelValue: _ctx.v$.form.project_status.$model,
      "onUpdate:modelValue": ($event) => _ctx.v$.form.project_status.$model = $event
    }, null, _parent));
    _push(`<!--[-->`);
    ssrRenderList(_ctx.v$.form.project_status.$errors, (error, index) => {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_input_error, {
        message: error.$message
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div><div class="fv-row col-12">`);
    _push(ssrRenderComponent(_component_jet_label, {
      for: "project-target",
      value: "Project Target"
    }, null, _parent));
    _push(`<textarea rows="5" class="form-control form-control-solid" id="project-target" placeholder="Type important message here...">${ssrInterpolate(_ctx.form.target)}</textarea></div><div class="d-flex justify-content-end mt-3 mb-3"><button type="button" class="btn btn-secondary me-5"> Discard </button><button type="submit" class="${ssrRenderClass([{
      "text-white-50": _ctx.form.processing
    }, "btn btn-primary"])}"><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"><span class="visually-hidden">Loading...</span></div> Save Changes </button></div></div></form></div>`);
  } else {
    _push(`<div class="col-6"><table class="table table-striped table-bordered text-center align-middle"><tbody><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Survey ID </th><td class="fs-6 fw-bold text-gray-800">${ssrInterpolate(_ctx.project.project_id)}</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Survey Name </th><td class="fs-6 fw-bold text-gray-800">${ssrInterpolate(_ctx.project.project_name)}</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Client </th><td class="fs-6 fw-bold text-gray-800">`);
    if (_ctx.$page.props.user.role.role.slug != "user") {
      _push(ssrRenderComponent(_component_Link, {
        href: `/client/${_ctx.project.client.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.project.client.display_name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.project.client.display_name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<span>${ssrInterpolate(_ctx.project.client.display_name)}</span>`);
    }
    _push(`</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Project Type </th><td class="fs-6 fw-bold text-gray-800 text-capitalize">${ssrInterpolate(_ctx.project.project_type)}</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Device Type </th><td class="fs-6 fw-bold text-gray-800">`);
    if (_ctx.project.device_type) {
      _push(`<!--[-->`);
      ssrRenderList(JSON.parse(
        _ctx.project.device_type
      ), (type, index) => {
        _push(`<span class="badge badge-success mx-1 text-capitalize">${ssrInterpolate(type)}</span>`);
      });
      _push(`<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(`</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Start Date </th><td class="fs-6 fw-bold text-gray-800">${ssrInterpolate(_ctx.project.start_date)}</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> End Date </th><td class="fs-6 fw-bold text-gray-800">${ssrInterpolate(_ctx.project.end_date)}</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Target </th><td class="fs-6 fw-bold text-gray-800 whitespace-break">${ssrInterpolate(_ctx.project.target)}</td></tr></tbody></table></div>`);
  }
  _push(`</div><ul class="nav nav-stretch nav-line-tabs border-top fs-5 fw-bold px-5"><li class="nav-item">`);
  if (_ctx.$page.props.user.role.role.slug == "user" || _ctx.$page.props.user.role.role.slug == "pm" || _ctx.$page.props.user.role.role.slug == "admin") {
    _push(ssrRenderComponent(_component_Link, {
      class: [
        "nav-link text-active-primary ms-0 me-10 py-5",
        _ctx.route().current() == "project.show" ? "active" : ""
      ],
      href: `/project/${_ctx.project.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Project Overview`);
        } else {
          return [
            createTextVNode(" Project Overview")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</li><li class="nav-item">`);
  if (_ctx.$page.props.user.role.role.slug == "pm" || _ctx.$page.props.user.role.role.slug == "admin") {
    _push(ssrRenderComponent(_component_Link, {
      class: [
        "nav-link text-active-primary ms-0 me-10 py-5",
        _ctx.route().current() == "project.suppliers" ? "active" : ""
      ],
      href: `/project/${_ctx.project.id}/suppliers`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Suppliers`);
        } else {
          return [
            createTextVNode(" Suppliers")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</li></ul></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/Components/TopCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TopCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TopCard as default
};
