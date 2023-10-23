import { defineComponent, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import Loading from "vue-loading-overlay";
/* empty css                 */import { u as utils } from "./utils-d9e085bf.mjs";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "sweetalert2";
import "vue3-toastify";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  props: ["projects", "status", "action"],
  data() {
    return {
      isLoading: false,
      isFullPage: true
    };
  },
  components: {
    Link,
    Head,
    Multiselect,
    Loading
  },
  methods: {
    async updateStatus(id, e) {
      this.isLoading = true;
      await utils.changeStatus(route("project.status"), { id, status: e });
      this.isLoading = false;
    },
    async confirmDelete(index) {
      await utils.deleteIndexDialog(route("project.destroy", this.projects[index].id), this.projects, index);
    }
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loading = resolveComponent("loading");
  const _component_Link = resolveComponent("Link");
  const _component_Multiselect = resolveComponent("Multiselect");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_loading, {
    active: _ctx.isLoading,
    "can-cancel": true,
    "is-full-page": _ctx.isFullPage
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.projects, (project, index) => {
    _push(`<div class="card mt-5"><div class="card-body"><div class="d-flex align-items-center justify-content-between"><div class="col-2">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "text-gray-800 text-hover-primary fs-6 fw-bold",
      href: `/project/${project.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(project.project_name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(project.project_name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<span class="text-muted fw-semibold d-block fs-7">${ssrInterpolate(project.project_id)}</span></div><div class="col-2 row text-center"><span class="text-gray-800 fs-6 fw-bold">Link Type</span><span class="text-muted">${ssrInterpolate(project.project_type)}</span></div><div class="col-2 row text-center"><span class="text-gray-800 fs-6 fw-bold">Added</span><span class="text-muted">${ssrInterpolate(project.created_at)}</span></div>`);
    if (_ctx.$page.props.user.role.role.slug != "user") {
      _push(`<div class="col-2 fw-bold">`);
      _push(ssrRenderComponent(_component_Link, {
        href: `client/${project.client.id}`,
        title: project.client.name
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}><i class="bi bi-people me-2"${_scopeId}></i>${ssrInterpolate(project.client.display_name)}</span>`);
          } else {
            return [
              createVNode("span", null, [
                createVNode("i", { class: "bi bi-people me-2" }),
                createTextVNode(toDisplayString(project.client.display_name), 1)
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div>`);
    } else {
      _push(`<div class="col-2 fw-bold"><span${ssrRenderAttr("title", project.client.name)}><span><i class="bi bi-people me-2"></i>${ssrInterpolate(project.client.display_name)}</span></span></div>`);
    }
    _push(`<div class="col-2">`);
    if (_ctx.$page.props.user.role.role.slug == "user") {
      _push(`<div class="badge badge-success text-capitalize">${ssrInterpolate(project.status)}</div>`);
    } else {
      _push(ssrRenderComponent(_component_Multiselect, {
        canClear: false,
        value: project.status,
        options: _ctx.status,
        class: "btn btn-sm btn-light px-0 py-0 mw-200px",
        label: "label",
        valueProp: "value",
        onInput: ($event) => _ctx.updateStatus(project.id, $event),
        placeholder: "Select Status"
      }, null, _parent));
    }
    _push(`</div>`);
    if (_ctx.$page.props.user.role.role.slug != "user") {
      _push(`<div><button class="btn btn-icon btn-outline btn-danger" title="Remove"><i class="bi bi-trash3"></i></button></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="separator separator-dashed my-4"></div><ul class="nav d-flex justify-content-between fw-bold text-center"><li class="nav-item row"><span>${ssrInterpolate(project.reports.total_clicks)}</span><span class="text-gray-400">Total Clicks</span></li><li class="nav-item row"><span>${ssrInterpolate(project.reports.completes)}</span><span class="text-gray-400"> Completes</span></li><li class="nav-item row"><span>${ssrInterpolate(project.reports.terminates)}</span><span class="text-gray-400">Terminates</span></li><li class="nav-item row"><span>${ssrInterpolate(project.reports.quotafull)}</span><span class="text-gray-400">Quotafull</span></li><li class="nav-item row"><span>${ssrInterpolate(project.reports.security_terminates)}</span><span class="text-gray-400">Security Terminates</span></li><li class="nav-item row"><span>${ssrInterpolate(project.reports.incompletes)}</span><span class="text-gray-400">Incompletes</span></li><li class="nav-item row"><span>${ssrInterpolate(project.reports.total_ir)}</span><span class="text-gray-400">Incidence Ratio</span></li></ul></div></div>`);
  });
  _push(`<!--]--><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project/Components/ProjectList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ProjectList as default
};
