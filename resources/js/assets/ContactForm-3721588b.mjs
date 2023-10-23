import { defineComponent, resolveComponent, useSSRContext } from "vue";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  emits: ["submitted"],
  props: ["countries", "contact"],
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      form: {
        name: {
          required
        },
        email: {
          required,
          email
        },
        phone: {
          required
        },
        country: {
          required
        },
        is_primary: {
          required
        }
      }
    };
  },
  data() {
    var _a, _b, _c, _d, _e, _f;
    return {
      form: this.$inertia.form({
        id: (_a = this.contact) == null ? void 0 : _a.id,
        name: (_b = this.contact) == null ? void 0 : _b.name,
        email: (_c = this.contact) == null ? void 0 : _c.email,
        country: (_e = (_d = this.contact) == null ? void 0 : _d.country) == null ? void 0 : _e.id,
        phone: (_f = this.contact) == null ? void 0 : _f.phone,
        is_primary: this.contact.is_primary
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
  _push(`<form class="my-auto pb-5"><div class="row g-5"><div class="fv-row col-md-6">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "contact-name",
    value: "Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "contact-name",
    type: "text",
    modelValue: _ctx.v$.form.name.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.name.$model = $event,
    class: _ctx.v$.form.name.$errors.length > 0 ? "is-invalid" : "",
    placeholder: "Enter contact person name"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.name.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="col-md-6 fv-row">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "contact-email",
    value: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "contact-email",
    type: "text",
    modelValue: _ctx.v$.form.email.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.email.$model = $event,
    class: _ctx.v$.form.email.$errors.length > 0 ? "is-invalid" : "",
    placeholder: "Enter email address"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.email.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="col-md-6 fv-row">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "contact-phone",
    value: "Mobile"
  }, null, _parent));
  _push(ssrRenderComponent(_component_jet_input, {
    id: "contact-phone",
    type: "text",
    modelValue: _ctx.v$.form.phone.$model,
    "onUpdate:modelValue": ($event) => _ctx.v$.form.phone.$model = $event,
    class: _ctx.v$.form.phone.$errors.length > 0 ? "is-invalid" : "",
    placeholder: "Enter mobile number"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.v$.form.phone.$errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="col-md-6 fv-row">`);
  _push(ssrRenderComponent(_component_jet_label, {
    for: "contact-country",
    value: "Country"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Multiselect, {
    options: _ctx.countries,
    label: "label",
    valueProp: "id",
    class: [
      "form-control form-control-solid",
      _ctx.v$.form.country.$errors.length > 0 ? "is-invalid" : ""
    ],
    placeholder: "Select country",
    searchable: true,
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
  _push(`<!--]--></div><div class="fv-row col-md-12 mb-5"><div class="d-flex flex-stack"><div class="me-5"><label class="fs-5 fw-semibold">Use as a primary contact?</label></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input"${ssrIncludeBooleanAttr(Array.isArray(_ctx.v$.form.is_primary.$model) ? ssrLooseContain(_ctx.v$.form.is_primary.$model, null) : _ctx.v$.form.is_primary.$model) ? " checked" : ""}${ssrIncludeBooleanAttr(_ctx.v$.form.is_primary.$model == 1 ? "checked" : "") ? " checked" : ""} type="checkbox"><span class="form-check-label fw-semibold text-muted"> Yes </span></label></div></div></div>`);
  ssrRenderSlot(_ctx.$slots, "action", {}, null, _push, _parent);
  _push(`</form><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Client/Components/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ContactForm as default
};
