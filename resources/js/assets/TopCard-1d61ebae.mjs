import { defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, withDirectives, vShow, toDisplayString, useSSRContext } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { J as JetValidationErrors } from "./ValidationErrors-8afe2acd.mjs";
import { J as JetInput } from "./Input-3696eefa.mjs";
import { J as JetLabel } from "./Label-ee7576bd.mjs";
import Loading from "vue-loading-overlay";
/* empty css                 */import MappingForm from "./MappingForm-08457801.mjs";
import { toast } from "vue3-toastify";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@vuelidate/core";
import "@vuelidate/validators";
import "./Button-2d51159e.mjs";
const _sfc_main = defineComponent({
  props: ["countries", "project"],
  components: {
    Link,
    Multiselect,
    JetInput,
    JetLabel,
    JetValidationErrors,
    InputError,
    Loading,
    MappingForm
  },
  validations() {
    return {};
  },
  data() {
    return {
      isLoading: false,
      isEdit: false,
      form: {}
    };
  },
  methods: {
    submit(form) {
      this.form = form;
      this.form.transform((data) => ({
        ...data
      })).post(this.route("mapping.update", this.project.id), {
        onSuccess: (data) => {
          toast.success(this.$page.props.jetstream.flash.message);
          this.isEdit = false;
        },
        onError: (data) => {
        }
      });
    }
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loading = resolveComponent("loading");
  const _component_Link = resolveComponent("Link");
  const _component_mapping_form = resolveComponent("mapping-form");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_loading, {
    active: _ctx.isLoading,
    "onUpdate:active": ($event) => _ctx.isLoading = $event,
    "can-cancel": false,
    "is-full-page": true
  }, null, _parent));
  _push(`<div class="mb-5"><div class="card"><div class="card-header align-items-center"><div class="card-title"><h2>#${ssrInterpolate(_ctx.project.project_uid)} (${ssrInterpolate(_ctx.project.project_name)})</h2></div><div class="flex-shrink-0">`);
  if (!_ctx.isEdit) {
    _push(`<button class="btn btn-sm btn-primary me-2"><i class="bi bi-pencil me-2"></i>Edit </button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_Link, {
    href: `/sampling/${_ctx.project.id}/create`,
    class: "btn btn-sm btn-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="bi bi-plus-circle me-2"${_scopeId}></i>Add Supplier `);
      } else {
        return [
          createVNode("i", { class: "bi bi-plus-circle me-2" }),
          createTextVNode("Add Supplier ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="card-body p-0"><div class="row g-0"><div class="col-6">`);
  if (_ctx.isEdit) {
    _push(`<div class="p-5">`);
    _push(ssrRenderComponent(_component_mapping_form, {
      onSubmitted: _ctx.submit,
      project: _ctx.project,
      countries: _ctx.countries
    }, {
      action: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="d-flex align-items-center justify-content-end"${_scopeId}><button type="button" class="btn btn-secondary me-5"${_scopeId}> Discard </button><button type="submit" class="${ssrRenderClass([{
            "text-white-50": _ctx.form.processing
          }, "btn btn-primary"])}"${_scopeId}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"${_scopeId}><span class="visually-hidden"${_scopeId}>Loading...</span></div> Save Change </button></div>`);
        } else {
          return [
            createVNode("div", { class: "d-flex align-items-center justify-content-end" }, [
              createVNode("button", {
                onClick: ($event) => _ctx.isEdit = false,
                type: "button",
                class: "btn btn-secondary me-5"
              }, " Discard ", 8, ["onClick"]),
              createVNode("button", {
                type: "submit",
                class: ["btn btn-primary", {
                  "text-white-50": _ctx.form.processing
                }]
              }, [
                withDirectives(createVNode("div", { class: "spinner-border spinner-border-sm" }, [
                  createVNode("span", { class: "visually-hidden" }, "Loading...")
                ], 512), [
                  [vShow, _ctx.form.processing]
                ]),
                createTextVNode(" Save Change ")
              ], 2)
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<table class="table table-striped table-bordered text-center align-middle"><tbody><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Project ID </th><td class="fs-6 fw-bold text-gray-800">${ssrInterpolate(_ctx.project.project_uid)}</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Project Name </th><td class="fs-6 fw-bold text-gray-800">${ssrInterpolate(_ctx.project.project_name)}</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Project Link </th><td class="fs-6 fw-bold text-gray-800">${ssrInterpolate(_ctx.project.project_link)}</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Client Name </th><td class="fs-6 fw-bold text-gray-800">`);
    _push(ssrRenderComponent(_component_Link, {
      href: `/client/${_ctx.project.client.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.project.client.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.project.client.name), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Project Country </th><td class="fs-6 fw-bold text-gray-800">${ssrInterpolate(_ctx.project.country.display_name)}</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Sample Size </th><td class="fs-6 fw-bold text-gray-800">${ssrInterpolate(_ctx.project.sample_size)}N </td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Project CPI </th><td class="fs-6 fw-bold text-gray-800"> $${ssrInterpolate(_ctx.project.cpi)}</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Project LOI </th><td class="fs-6 fw-bold text-gray-800">${ssrInterpolate(_ctx.project.loi)} Min </td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Incidence Ratio </th><td class="fs-6 fw-bold text-gray-800">${ssrInterpolate(_ctx.project.ir)}% </td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Project Status </th><td class="fs-6 fw-bold text-gray-800">`);
    if (_ctx.project.status) {
      _push(`<span class="badge badge-success">Active</span>`);
    } else {
      _push(`<span class="badge badge-danger">Inactive</span>`);
    }
    _push(`</td></tr><tr><th style="${ssrRenderStyle({ "white-space": "nowrap", "min-width": "150px" })}"> Target </th><td class="fs-6 fw-bold text-gray-800">${ssrInterpolate(_ctx.project.target)}</td></tr></tbody></table>`);
  }
  _push(`</div><div class="col-6"><div class="h-100 d-flex justify-content-center align-items-center bg-gray-100"><div class="text-center">`);
  if (_ctx.project.status) {
    _push(`<div class="badge badge-success"> Active </div>`);
  } else {
    _push(`<div class="badge badge-danger"> Inactive </div>`);
  }
  _push(`<div class="d-flex justify-content-center align-items-center"><h1>${ssrInterpolate(_ctx.project.reports.complete)}  </h1><span>Out Of</span><h1> ${ssrInterpolate(_ctx.project.sample_size)}</h1></div><div class="d-flex justify-content-center align-items-center"><span>Actula IR </span><h1>${ssrInterpolate(_ctx.project.reports.total_ir)}%</h1></div></div></div></div></div><ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold px-5"><li class="nav-item">`);
  _push(ssrRenderComponent(_component_Link, {
    class: [
      "nav-link text-active-primary ms-0 me-10 py-5",
      _ctx.route().current() == `mapping.show` ? "active" : ""
    ],
    href: `/mapping/${_ctx.project.id}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Link Overview `);
      } else {
        return [
          createTextVNode(" Link Overview ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: [
      "nav-link text-active-primary ms-0 me-10 py-5",
      _ctx.route().current() == `mapping.suppliers` ? "active" : ""
    ],
    href: `/mapping/${_ctx.project.id}/suppliers`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Suppliers (${ssrInterpolate(_ctx.project.supplier_count)}) `);
      } else {
        return [
          createTextVNode(" Suppliers (" + toDisplayString(_ctx.project.supplier_count) + ") ", 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Mapping/Components/TopCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TopCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TopCard as default
};
