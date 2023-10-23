import { defineComponent, resolveComponent, useSSRContext } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import useVuelidate from "@vuelidate/core";
import { required, numeric, url } from "@vuelidate/validators";
import { P as PrimaryButton } from "./Button-2d51159e.mjs";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  setup() {
    return { v$: useVuelidate() };
  },
  props: ["countries", "project"],
  emits: ["submitted"],
  components: {
    Link,
    Multiselect,
    JetInput,
    JetLabel,
    InputError,
    JetValidationErrors,
    PrimaryButton
  },
  validations() {
    return {
      form: {
        project_name: {
          required
        },
        project_cpi: {
          required
        },
        project_length: {
          required,
          numeric
        },
        project_ir: {
          required,
          numeric
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
        }
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    return {
      form: this.$inertia.form({
        id: (_a = this.project) == null ? void 0 : _a.id,
        project_id: (_b = this.project) == null ? void 0 : _b.project_id,
        project_name: (_c = this.project) == null ? void 0 : _c.project_name,
        project_cpi: (_d = this.project) == null ? void 0 : _d.cpi,
        project_length: (_e = this.project) == null ? void 0 : _e.loi,
        project_ir: (_f = this.project) == null ? void 0 : _f.ir,
        sample_size: (_g = this.project) == null ? void 0 : _g.sample_size,
        project_link: (_h = this.project) == null ? void 0 : _h.project_link,
        project_country: (_j = (_i = this.project) == null ? void 0 : _i.country) == null ? void 0 : _j.id,
        target: (_k = this.project) == null ? void 0 : _k.target,
        status: ((_l = this.project) == null ? void 0 : _l.status) || 1,
        add_more: false
      })
    };
  },
  methods: {
    submit(action) {
      this.form.action = action;
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.$emit("submitted", this.form);
      }
    }
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_JetValidationErrors = resolveComponent("JetValidationErrors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_input_error = resolveComponent("input-error");
  const _component_Multiselect = resolveComponent("Multiselect");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent));
  _push(`<form autocomplete="off"><div class="row g-5"><div class="fv-row col-6">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "project-name",
    value: "Project Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "project-name",
    type: "text",
    modelValue: _ctx.v$.form.project_name.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.project_name.$model = $event,
    class: _ctx.v$.form.project_name.$errors.length > 0 ? "is-invalid" : "",
    placeholder: "Enter project name"
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
    for: "project-name",
    value: "Project Country"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Multiselect, {
    canClear: false,
    options: _ctx.countries,
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
  }, null, _parent));
  _push(`</div><div class="fv-row col-12">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "project-link",
    value: "Project Link"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "project-link",
    type: "text",
    modelValue: _ctx.v$.form.project_link.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.project_link.$model = $event,
    class: _ctx.v$.form.project_link.$errors.length > 0 ? "is-invalid" : "",
    placeholder: "Enter project link"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.project_link.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--><div class="form-text"> Capture unique user id as a (<b>RespondentID</b>) </div></div><div class="fv-row col-6">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "project-link",
    value: "Project CPC/CPI"
  }, null, _parent));
  _push(`<div class="input-group has-validation"><span class="input-group-text">$</span><input type="number" step="any" id="project-cpi" placeholder="Enter project CPI/CPC"${ssrRenderAttr("value", _ctx.v$.form.project_cpi.$model)} class="${ssrRenderClass([
    _ctx.v$.form.project_cpi.$errors.length > 0 ? "is-invalid" : "",
    "form-control form-control-solid"
  ])}"></div><!--[-->`);
  ssrRenderList(_ctx.v$.form.project_cpi.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="fv-row col-6">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "project-loi",
    value: "Project LOI"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "project-loi",
    type: "number",
    modelValue: _ctx.v$.form.project_length.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.project_length.$model = $event,
    class: _ctx.v$.form.project_length.$errors.length > 0 ? "is-invalid" : "",
    placeholder: "Enter project LOI"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.project_length.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="fv-row col-6">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "project-ir",
    value: "Project Incidence Rate (IR)"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "project-ir",
    type: "number",
    modelValue: _ctx.v$.form.project_ir.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.project_ir.$model = $event,
    class: _ctx.v$.form.project_ir.$errors.length > 0 ? "is-invalid" : "",
    placeholder: "Enter incidence rate"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.project_ir.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="fv-row col-6">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "sample-size",
    value: "Sample Size"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "sample-size",
    type: "number",
    placeholder: "Enter sample size",
    modelValue: _ctx.v$.form.sample_size.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.sample_size.$model = $event,
    class: _ctx.v$.form.sample_size.$errors.length > 0 ? "is-invalid" : ""
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.sample_size.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="fv-row col-12">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "project-notes",
    value: "Project Notes"
  }, null, _parent));
  _push(`<textarea rows="5" class="form-control form-control-solid" id="project-notes" placeholder="Type important message here...">${ssrInterpolate(_ctx.form.target)}</textarea></div><div class="fv-row col-12"><div class="d-flex justify-content-between"><div class="d-flex"><div class="form-check form-check-custom form-check-solid me-3"><input class="form-check-input" type="radio" value="1" id="active"${ssrIncludeBooleanAttr(ssrLooseEqual(_ctx.form.status, "1")) ? " checked" : ""}><label class="form-check-label" for="active"> Active </label></div><div class="form-check form-check-custom form-check-solid"><input class="form-check-input" type="radio" value="0" id="inactive"${ssrIncludeBooleanAttr(ssrLooseEqual(_ctx.form.status, "0")) ? " checked" : ""}><label class="form-check-label" for="inactive"> Inactive </label></div></div>`);
  if (_ctx.route().current() == "mapping.create") {
    _push(`<div class="form-check"><input class="form-check-input" type="checkbox" id="new-link"${ssrIncludeBooleanAttr(Array.isArray(_ctx.form.add_more) ? ssrLooseContain(_ctx.form.add_more, null) : _ctx.form.add_more) ? " checked" : ""}><label class="form-check-label" for="new-link"> Add More Project Link </label></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
  _push(`</div></form><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Mapping/Components/MappingForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MappingForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  MappingForm as default
};
