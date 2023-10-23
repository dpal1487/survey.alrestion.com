import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, withDirectives, vShow, createTextVNode, useSSRContext } from "vue";
import { toast } from "vue3-toastify";
import { _ as _sfc_main$1 } from "./Modal-813c1851.mjs";
import MappingForm from "./MappingForm-08457801.mjs";
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@inertiajs/inertia-vue3";
import "@vueform/multiselect";
import "@vuelidate/core";
import "@vuelidate/validators";
import "./Button-2d51159e.mjs";
import "./Input-3696eefa.mjs";
import "./Label-ee7576bd.mjs";
import "./InputError-c62476a0.mjs";
import "./ValidationErrors-8afe2acd.mjs";
const _sfc_main = defineComponent({
  props: ["project", "isEdit", "show", "countries"],
  emits: ["hidemodal"],
  data() {
    return {
      form: {}
    };
  },
  components: {
    MappingForm,
    Modal: _sfc_main$1
  },
  methods: {
    submit(form) {
      this.form = form;
      this.form.transform((data) => ({
        ...data
      })).post(this.isEdit ? this.route("mapping.update", this.project.id) : this.route("mapping.store"), {
        onSuccess: (data) => {
          this.$emit("hidemodal");
          toast.success(this.$page.props.jetstream.flash.message);
        },
        onError: (data) => {
        }
      });
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  const _component_mapping_form = resolveComponent("mapping-form");
  _push(ssrRenderComponent(_component_Modal, mergeProps({
    show: _ctx.show,
    title: _ctx.isEdit ? "Edit Link" : "Add Link",
    onOnhide: ($event) => _ctx.$emit("hidemodal")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_mapping_form, {
          onSubmitted: _ctx.submit,
          project: _ctx.project,
          countries: _ctx.countries
        }, {
          action: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="d-flex align-items-center justify-content-end"${_scopeId2}><button type="button" class="btn btn-secondary me-5"${_scopeId2}> Discard </button><button type="submit" class="${ssrRenderClass([{
                "text-white-50": _ctx.form.processing
              }, "btn btn-primary"])}"${_scopeId2}><div style="${ssrRenderStyle(_ctx.form.processing ? null : { display: "none" })}" class="spinner-border spinner-border-sm"${_scopeId2}><span class="visually-hidden"${_scopeId2}>Loading...</span></div> Save Change </button></div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex align-items-center justify-content-end" }, [
                  createVNode("button", {
                    onClick: ($event) => _ctx.$emit("hidemodal"),
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_mapping_form, {
            onSubmitted: _ctx.submit,
            project: _ctx.project,
            countries: _ctx.countries
          }, {
            action: withCtx(() => [
              createVNode("div", { class: "d-flex align-items-center justify-content-end" }, [
                createVNode("button", {
                  onClick: ($event) => _ctx.$emit("hidemodal"),
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
            ]),
            _: 1
          }, 8, ["onSubmitted", "project", "countries"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Mapping/Components/LinkFormModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LinkFormModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LinkFormModal as default
};
