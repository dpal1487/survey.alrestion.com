import { defineComponent, resolveComponent, useSSRContext } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import useVuelidate from "@vuelidate/core";
import { required, url, numeric } from "@vuelidate/validators";
import { P as PrimaryButton } from "./Button-2d51159e.mjs";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import { toast } from "vue3-toastify";
import Loading from "vue-loading-overlay";
/* empty css                 */import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  props: ["suppliers", "project", "supplier_project", "countries", "action"],
  emits: ["submitted"],
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    Link,
    Multiselect,
    JetInput,
    JetLabel,
    InputError,
    JetValidationErrors,
    PrimaryButton,
    Loading
  },
  validations() {
    return {
      form: {
        project_cpi: {
          required
        },
        complete_url: {
          required,
          url
        },
        terminate_url: {
          required,
          url
        },
        quotafull_url: {
          required,
          url
        },
        security_terminate_url: {
          required,
          url
        },
        sample_size: {
          required,
          numeric
        },
        supplier: {
          required
        },
        notes: {
          required
        },
        project_status: {
          required
        }
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    return {
      isLoading: false,
      fullPage: true,
      form: this.$inertia.form({
        id: (_a = this.supplier_project) == null ? void 0 : _a.id,
        project_link_id: (_b = this.project) == null ? void 0 : _b.id,
        project_id: (_c = this.project) == null ? void 0 : _c.project_id,
        project_name: (_d = this.supplier_project) == null ? void 0 : _d.project_name,
        project_cpi: (_e = this.supplier_project) == null ? void 0 : _e.cpi,
        complete_url: (_f = this.supplier_project) == null ? void 0 : _f.complete_url,
        terminate_url: (_g = this.supplier_project) == null ? void 0 : _g.terminate_url,
        quotafull_url: (_h = this.supplier_project) == null ? void 0 : _h.quotafull_url,
        security_terminate_url: (_i = this.supplier_project) == null ? void 0 : _i.security_terminate_url,
        sample_size: (_j = this.supplier_project) == null ? void 0 : _j.sample_size,
        supplier: (_l = (_k = this.supplier_project) == null ? void 0 : _k.supplier) == null ? void 0 : _l.id,
        project_status: ((_m = this.supplier_project) == null ? void 0 : _m.status) || 1,
        add_more: false,
        notes: ((_n = this.supplier_project) == null ? void 0 : _n.notes) || ""
      })
    };
  },
  methods: {
    getRedirect(event) {
      this.form.complete_url = "";
      this.form.terminate_url = "";
      this.form.quotafull_url = "";
      this.form.security_terminate_url = "";
      if (event) {
        this.isLoading = true;
        axios.get(this.route("sampling.redirect", event)).then((response) => {
          if (response.data.success) {
            let data = response.data.data;
            this.form.complete_url = data.complete_url;
            this.form.terminate_url = data.terminate_url;
            this.form.quotafull_url = data.quotafull_url;
            this.form.security_terminate_url = data.security_terminate_url;
            return;
          }
          toast.error(response.data.message);
        }).finally(() => this.isLoading = false);
      }
    },
    submit() {
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
  const _component_loading = resolveComponent("loading");
  const _component_JetValidationErrors = resolveComponent("JetValidationErrors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _component_input_error = resolveComponent("input-error");
  const _component_jet_input = resolveComponent("jet-input");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_loading, {
    active: _ctx.isLoading,
    "onUpdate:active": ($event) => _ctx.isLoading = $event,
    "can-cancel": false,
    "is-full-page": _ctx.fullPage
  }, null, _parent));
  _push(ssrRenderComponent(_component_JetValidationErrors, null, null, _parent));
  _push(`<form autocomplete="off"><div class="row g-5"><div class="fv-row col-6">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "suppliers",
    value: "Suppliers"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Multiselect, {
    canClear: false,
    options: _ctx.suppliers,
    label: "label",
    valueProp: "id",
    class: [
      "form-control form-control-solid",
      _ctx.v$.form.supplier.$errors.length > 0 ? "is-invalid" : ""
    ],
    placeholder: "Select supplier",
    searchable: true,
    modelValue: _ctx.form.supplier,
    "onUpdate:modelValue": ($event) => _ctx.form.supplier = $event,
    onInput: ($event) => _ctx.getRedirect($event)
  }, null, _parent));
  _push(`</div><div class="fv-row col-6">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "project-link",
    value: "Project CPC/CPI"
  }, null, _parent));
  _push(`<div class="input-group has-validation"><span class="input-group-text">$</span><input type="number" id="project-cpi" step="any" placeholder="Enter project CPI/CPC"${ssrRenderAttr("value", _ctx.v$.form.project_cpi.$model)} class="${ssrRenderClass([
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
  _push(`<!--]--></div><div class="fv-row col-6">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "complete-url",
    value: "Complete Url"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "complete-url",
    type: "text",
    modelValue: _ctx.v$.form.complete_url.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.complete_url.$model = $event,
    class: _ctx.v$.form.complete_url.$errors.length > 0 ? "is-invalid" : "",
    placeholder: "Enter complete url"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.complete_url.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="fv-row col-6">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "terminate-url",
    value: "Terminate Url"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "terminate-url",
    type: "text",
    modelValue: _ctx.v$.form.terminate_url.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.terminate_url.$model = $event,
    class: _ctx.v$.form.terminate_url.$errors.length > 0 ? "is-invalid" : "",
    placeholder: "Enter terminate url"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.terminate_url.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="fv-row col-6">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "quotafull-url",
    value: "Quotafull Url"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "quotafull-url",
    type: "text",
    modelValue: _ctx.v$.form.quotafull_url.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.quotafull_url.$model = $event,
    class: _ctx.v$.form.quotafull_url.$errors.length > 0 ? "is-invalid" : "",
    placeholder: "Enter quotafull url"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.quotafull_url.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="fv-row col-6">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "security-url",
    value: "Security Terminate Url"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "security-url",
    type: "text",
    modelValue: _ctx.v$.form.security_terminate_url.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.security_terminate_url.$model = $event,
    class: _ctx.v$.form.security_terminate_url.$errors.length > 0 ? "is-invalid" : "",
    placeholder: "Enter security terminate url"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.security_terminate_url.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="fv-row col-6"><div class="fv-row">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "project-status",
    value: "Project Status"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Multiselect, {
    "can-clear": false,
    options: [
      { label: "Active", value: 1 },
      { label: "Inctive", value: 0 }
    ],
    label: "label",
    valueProp: "value",
    class: [
      "form-control form-control-solid",
      _ctx.v$.form.project_status.$errors.length > 0 ? "is-invalid" : ""
    ],
    placeholder: "Select Status",
    modelValue: _ctx.form.project_status,
    "onUpdate:modelValue": ($event) => _ctx.form.project_status = $event
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.project_status.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="fv-row col-12"><div class="fv-row">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "notes",
    value: "Project Notes"
  }, null, _parent));
  _push(`<textarea id="notes" class="${ssrRenderClass([
    _ctx.v$.form.notes.$errors.length > 0 ? "is-invalid" : "",
    "form-control form-control-solid"
  ])}">${ssrInterpolate(_ctx.form.notes)}</textarea><!--[-->`);
  ssrRenderList(_ctx.v$.form.notes.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="fv-row col-12"><div class="form-check"><input class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(_ctx.form.add_more) ? ssrLooseContain(_ctx.form.add_more, "") : _ctx.form.add_more) ? " checked" : ""} type="checkbox" value="" id="addMore"><label class="form-check-label" for="addMore"> Add More Supplier </label></div></div>`);
  ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
  _push(`</div></form><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Sampling/Components/SamplingForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SamplingForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SamplingForm as default
};
