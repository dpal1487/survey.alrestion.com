import { defineComponent, resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = defineComponent({
  props: ["projects", "status", "action"],
  data() {
    return {
      isLoading: false,
      fullPage: true
    };
  },
  components: {
    Link,
    Head
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  ssrRenderList(_ctx.projects, (project, index) => {
    var _a, _b, _c, _d, _e, _f;
    _push(`<tr><td>`);
    _push(ssrRenderComponent(_component_Link, {
      href: `/project/${project.id}`,
      class: "text-gray-800 text-hover-primary fs-5 fw-bold mb-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(project.project_id)}`);
        } else {
          return [
            createTextVNode(toDisplayString(project.project_id), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td>${ssrInterpolate(project.project_name)}</td>`);
    if (!_ctx.route().current("client.projects")) {
      _push(`<td>${ssrInterpolate(project.client.display_name)}</td>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<td>${ssrInterpolate(project.project_type)}</td><td>${ssrInterpolate((_a = project == null ? void 0 : project.report) == null ? void 0 : _a.total_click)}</td><td>${ssrInterpolate((_b = project == null ? void 0 : project.report) == null ? void 0 : _b.total_complete)}</td><td>${ssrInterpolate((_c = project == null ? void 0 : project.report) == null ? void 0 : _c.total_quotafull)}</td><td>${ssrInterpolate((_d = project == null ? void 0 : project.report) == null ? void 0 : _d.total_terminate)}</td><td>${ssrInterpolate((_e = project == null ? void 0 : project.report) == null ? void 0 : _e.total_incomplete)}</td><td>${ssrInterpolate((_f = project == null ? void 0 : project.report) == null ? void 0 : _f.total_ir)}</td><td>${ssrInterpolate(project == null ? void 0 : project.created_at)}</td><td><span class="badge bg-success">${ssrInterpolate(project.status)}</span></td></tr>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Account/Components/ProjectList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ProjectList as default
};
