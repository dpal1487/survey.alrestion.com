import { defineComponent, resolveComponent, useSSRContext } from "vue";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  emits: ["submitted"],
  props: ["countries", "address", "client"],
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      form: {
        address: {
          required
        },
        country: {
          required
        },
        state: {
          required
        },
        city: {
          required
        },
        pincode: {
          required
        },
        is_primary: {}
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f, _g;
    return {
      form: this.$inertia.form({
        id: (_a = this.address) == null ? void 0 : _a.id,
        address: ((_b = this.address) == null ? void 0 : _b.address) || "",
        country: ((_d = (_c = this.address) == null ? void 0 : _c.country) == null ? void 0 : _d.id) || "",
        state: ((_e = this.address) == null ? void 0 : _e.state) || "",
        city: ((_f = this.address) == null ? void 0 : _f.city) || " ",
        pincode: ((_g = this.address) == null ? void 0 : _g.pincode) || "",
        is_primary: this.address.is_primary || ""
      })
    };
  },
  components: {
    Link,
    Head,
    Multiselect,
    JetInput,
    JetLabel,
    InputError,
    JetValidationErrors
  },
  methods: {
    submit() {
      this.v$.$touch();
      if (!this.v$.form.$invalid) {
        this.$emit("submitted", this.form);
      }
    }
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
  _push(`<form class="my-auto pb-5"><div class="current"><div class="w-100"><div class="fv-row mb-3">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "address-line-1",
    value: "Address Line 1"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "address-line-1",
    type: "text",
    modelValue: _ctx.v$.form.address.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.address.$model = $event,
    class: _ctx.v$.form.address.$errors.length > 0 ? "is-invalid" : ""
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.address.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="fv-row mb-3">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "address-line-2",
    value: "Address Line 2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "address-line-2",
    type: "text",
    modelValue: _ctx.form.address,
    "onUpdate:modelValue": ($event) => _ctx.form.address = $event
  }, null, _parent));
  _push(`</div><div class="row g-9 mb-5"><div class="col-md-6 fv-row"><div class="fv-row mb-3">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "country",
    value: "Country"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Multiselect, {
    id: "supplier-country",
    searchable: true,
    options: _ctx.countries,
    label: "label",
    valueProp: "id",
    class: [
      "form-control form-control-solid",
      _ctx.v$.form.country.$errors.length > 0 ? "is-invalid" : ""
    ],
    placeholder: "Select country",
    "close-on-select": false,
    modelValue: _ctx.v$.form.country.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.country.$model = $event
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.country.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="col-md-6 fv-row"><div class="fv-row mb-3">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "state",
    value: "State / Province"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "state",
    type: "text",
    modelValue: _ctx.v$.form.state.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.state.$model = $event,
    class: _ctx.v$.form.state.$errors.length > 0 ? "is-invalid" : ""
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.state.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div><div class="row g-9 mb-5"><div class="col-md-6 fv-row"><div class="fv-row mb-3">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "city",
    value: "City"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "city",
    type: "text",
    modelValue: _ctx.v$.form.city.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.city.$model = $event,
    class: _ctx.v$.form.city.$errors.length > 0 ? "is-invalid" : ""
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.city.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="col-md-6 fv-row"><div class="fv-row mb-3">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "post-code",
    value: "Post Code"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "post-code",
    type: "text",
    modelValue: _ctx.v$.form.pincode.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.pincode.$model = $event,
    class: _ctx.v$.form.pincode.$errors.length > 0 ? "is-invalid" : ""
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.pincode.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="fv-row mt-5"><div class="d-flex flex-stack"><div class="me-5"><label class="fs-5 fw-semibold">Use as a billing address?</label></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(_ctx.v$.form.is_primary.$model) ? ssrLooseContain(_ctx.v$.form.is_primary.$model, null) : _ctx.v$.form.is_primary.$model) ? " checked" : ""} type="checkbox"><span class="form-check-label fw-semibold text-muted"> Yes </span></label></div></div></div></div></div>`);
  ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
  _push(`</form><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Client/Components/AddressForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AddressForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AddressForm as default
};
