import { defineComponent, useSSRContext, resolveComponent, mergeProps } from "vue";
import { I as InputError } from "./InputError-c62476a0.mjs";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  props: ["image", "selectedImage", "errors", "isUploading"],
  components: {
    InputError
  },
  methods: {
    handleRemoveClick() {
      this.$emit("remove");
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_input_error = resolveComponent("input-error");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex align-items-center justify-content-center" }, _attrs))}><div class="text-center"><div class="image-input image-input-outline mx-auto" data-kt-image-input="true" style="${ssrRenderStyle({ "background-image": "url('/assets/media/svg/avatars/blank.svg')" })}">`);
  if (_ctx.isUploading) {
    _push(`<div class="w-125px h-125px d-flex align-items-center justify-content-center rounded-1 bg-secondary"><div class="spinner-border spinner-border-sm w-50px h-50px"></div></div>`);
  } else {
    _push(`<div>`);
    if (_ctx.image && !_ctx.selectedImage) {
      _push(`<img class="image-input-wrapper w-125px h-125px"${ssrRenderAttr("src", _ctx.image)}>`);
    } else if (!_ctx.selectedImage) {
      _push(`<img class="image-input-wrapper w-125px h-125px" src="/assets/media/svg/avatars/blank.svg">`);
    } else {
      _push(`<img class="image-input-wrapper w-125px h-125px"${ssrRenderAttr("src", _ctx.selectedImage)}>`);
    }
    _push(`</div>`);
  }
  _push(`<label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar"><i class="bi bi-pencil-fill fs-7"></i><input type="file" name="avatar" accept=".png, .jpg, .jpeg"></label><!--[-->`);
  ssrRenderList(_ctx.errors, (error, index) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_input_error, {
      message: error.$message
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="form-text mt-5">Allowed file types: png, jpg, jpeg.</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ImageInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImageInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ImageInput as I
};
