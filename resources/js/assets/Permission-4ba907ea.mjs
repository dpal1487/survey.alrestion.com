import { defineComponent, resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, createVNode, withModifiers, withDirectives, vModelText, createTextVNode, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import PermissionForm from "./PermissionForm-d8158a10.mjs";
import { P as Pagination } from "./Pagination-aec868ee.mjs";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "vue3-toastify";
import "@inertiajs/inertia";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@vuelidate/core";
import "@vuelidate/validators";
import "./Input-3696eefa.mjs";
import "./InputError-c62476a0.mjs";
import "./Modal-813c1851.mjs";
const _sfc_main = defineComponent({
  props: ["permissions"],
  data() {
    return {
      isEdit: false,
      permission: [],
      showModal: false,
      tbody: [
        "Name",
        "Created Date",
        "Action"
      ],
      q: ""
    };
  },
  components: {
    Head,
    AppLayout,
    PermissionForm,
    Pagination
  },
  methods: {
    toggleModal(value, permission) {
      if (permission) {
        this.isEdit = true;
        this.showModal = true;
        this.permission = permission;
      } else if (value) {
        this.showModal = true;
      } else {
        this.showModal = false;
      }
    },
    confirmDelete(id, index) {
      this.isLoading = true;
      const name = this.permissions.data[index].name;
      Swal.fire({
        title: "Are you sure you want to delete " + name + " ?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc3545",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(id);
          axios.delete("/permission/" + id).then((response) => {
            if (response.data.success) {
              toast.success(response.data.message);
              this.permissions.data.splice(index, 1);
              return;
            }
          }).catch((error) => {
            if (error.response.status == 400) {
              toast.error(error.response.data.message);
            }
          });
        } else if (result.dismiss === "cancel") {
          Swal.fire({
            text: name + " was not deleted.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn fw-bold btn-primary"
            }
          });
        }
      });
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_PermissionForm = resolveComponent("PermissionForm");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, null, _parent));
  _push(ssrRenderComponent(_component_AppLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        if (_ctx.showModal) {
          _push2(ssrRenderComponent(_component_PermissionForm, {
            show: _ctx.showModal,
            isEdit: _ctx.isEdit,
            onHidemodal: ($event) => _ctx.toggleModal(false),
            permission: _ctx.permission
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="card card-flush"${_scopeId}><div class="card-header mt-6"${_scopeId}><div class="card-title"${_scopeId}><div${_scopeId}><form class="d-flex align-items-center position-relative my-1 gap-4"${_scopeId}><div class="d-flex align-items-center position-relative"${_scopeId}><span class="svg-icon svg-icon-1 position-absolute ms-4"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"${_scopeId}></rect><path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", _ctx.q)} class="form-control form-control-solid w-250px ps-14" placeholder="Search "${_scopeId}></div><button type="submit" class="btn btn-primary"${_scopeId}> Search </button></form></div></div><div class="card-toolbar"${_scopeId}><button type="button" class="btn btn-light-primary"${_scopeId}><span class="svg-icon svg-icon-3"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="currentColor"${_scopeId}></rect><rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="currentColor"${_scopeId}></rect><rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="currentColor"${_scopeId}></rect></svg></span>Add Permission</button></div></div><div class="card-body pt-0"${_scopeId}><table class="table align-middle table-row-dashed fs-6 gy-5 mb-0" id="kt_permissions_table"${_scopeId}><thead${_scopeId}><tr class="text-gray-400 text-center fw-bold fs-7 min-w-100px text-uppercase"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.tbody, (th, index) => {
          _push2(`<th class="min-w-100px"${_scopeId}>${ssrInterpolate(th)}</th>`);
        });
        _push2(`<!--]--></tr></thead><tbody class="fw-semibold text-gray-600"${_scopeId}><!--[-->`);
        ssrRenderList((_a = _ctx.permissions) == null ? void 0 : _a.data, (permission, index) => {
          _push2(`<tr class="text-center"${_scopeId}><td${_scopeId}>${ssrInterpolate(permission.name)}</td><td${_scopeId}>${ssrInterpolate(permission.created_at)}</td><td${_scopeId}><button class="btn btn-icon btn-active-light-primary w-30px h-30px me-3"${_scopeId}><span class="svg-icon svg-icon-3"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor"${_scopeId}></path><path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor"${_scopeId}></path></svg></span></button><button class="btn btn-icon btn-active-light-primary w-30px h-30px"${_scopeId}><span class="svg-icon svg-icon-3"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor"${_scopeId}></path><path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor"${_scopeId}></path><path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor"${_scopeId}></path></svg></span></button></td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div>`);
        if (_ctx.permissions.meta) {
          _push2(`<div class="d-flex align-items-center justify-content-center justify-content-md-end"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Pagination, {
            links: _ctx.permissions.meta.links
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          _ctx.showModal ? (openBlock(), createBlock(_component_PermissionForm, {
            key: 0,
            show: _ctx.showModal,
            isEdit: _ctx.isEdit,
            onHidemodal: ($event) => _ctx.toggleModal(false),
            permission: _ctx.permission
          }, null, 8, ["show", "isEdit", "onHidemodal", "permission"])) : createCommentVNode("", true),
          createVNode("div", { class: "card card-flush" }, [
            createVNode("div", { class: "card-header mt-6" }, [
              createVNode("div", { class: "card-title" }, [
                createVNode("div", null, [
                  createVNode("form", {
                    class: "d-flex align-items-center position-relative my-1 gap-4",
                    onSubmit: withModifiers(($event) => _ctx.search(), ["prevent"])
                  }, [
                    createVNode("div", { class: "d-flex align-items-center position-relative" }, [
                      createVNode("span", { class: "svg-icon svg-icon-1 position-absolute ms-4" }, [
                        (openBlock(), createBlock("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("rect", {
                            opacity: "0.5",
                            x: "17.0365",
                            y: "15.1223",
                            width: "8.15546",
                            height: "2",
                            rx: "1",
                            transform: "rotate(45 17.0365 15.1223)",
                            fill: "currentColor"
                          }),
                          createVNode("path", {
                            d: "M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z",
                            fill: "currentColor"
                          })
                        ]))
                      ]),
                      withDirectives(createVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": ($event) => _ctx.q = $event,
                        class: "form-control form-control-solid w-250px ps-14",
                        placeholder: "Search "
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, _ctx.q]
                      ])
                    ]),
                    createVNode("button", {
                      type: "submit",
                      class: "btn btn-primary"
                    }, " Search ")
                  ], 40, ["onSubmit"])
                ])
              ]),
              createVNode("div", { class: "card-toolbar" }, [
                createVNode("button", {
                  type: "button",
                  class: "btn btn-light-primary",
                  onClick: ($event) => _ctx.toggleModal(true)
                }, [
                  createVNode("span", { class: "svg-icon svg-icon-3" }, [
                    (openBlock(), createBlock("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("rect", {
                        opacity: "0.3",
                        x: "2",
                        y: "2",
                        width: "20",
                        height: "20",
                        rx: "5",
                        fill: "currentColor"
                      }),
                      createVNode("rect", {
                        x: "10.8891",
                        y: "17.8033",
                        width: "12",
                        height: "2",
                        rx: "1",
                        transform: "rotate(-90 10.8891 17.8033)",
                        fill: "currentColor"
                      }),
                      createVNode("rect", {
                        x: "6.01041",
                        y: "10.9247",
                        width: "12",
                        height: "2",
                        rx: "1",
                        fill: "currentColor"
                      })
                    ]))
                  ]),
                  createTextVNode("Add Permission")
                ], 8, ["onClick"])
              ])
            ]),
            createVNode("div", { class: "card-body pt-0" }, [
              createVNode("table", {
                class: "table align-middle table-row-dashed fs-6 gy-5 mb-0",
                id: "kt_permissions_table"
              }, [
                createVNode("thead", null, [
                  createVNode("tr", { class: "text-gray-400 text-center fw-bold fs-7 min-w-100px text-uppercase" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tbody, (th, index) => {
                      return openBlock(), createBlock("th", {
                        class: "min-w-100px",
                        key: index
                      }, toDisplayString(th), 1);
                    }), 128))
                  ])
                ]),
                createVNode("tbody", { class: "fw-semibold text-gray-600" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList((_b = _ctx.permissions) == null ? void 0 : _b.data, (permission, index) => {
                    return openBlock(), createBlock("tr", {
                      class: "text-center",
                      key: index
                    }, [
                      createVNode("td", null, toDisplayString(permission.name), 1),
                      createVNode("td", null, toDisplayString(permission.created_at), 1),
                      createVNode("td", null, [
                        createVNode("button", {
                          class: "btn btn-icon btn-active-light-primary w-30px h-30px me-3",
                          onClick: ($event) => _ctx.toggleModal(true, permission)
                        }, [
                          createVNode("span", { class: "svg-icon svg-icon-3" }, [
                            (openBlock(), createBlock("svg", {
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                d: "M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z",
                                fill: "currentColor"
                              }),
                              createVNode("path", {
                                opacity: "0.3",
                                d: "M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z",
                                fill: "currentColor"
                              })
                            ]))
                          ])
                        ], 8, ["onClick"]),
                        createVNode("button", {
                          class: "btn btn-icon btn-active-light-primary w-30px h-30px",
                          onClick: ($event) => _ctx.confirmDelete(
                            permission.id,
                            index
                          )
                        }, [
                          createVNode("span", { class: "svg-icon svg-icon-3" }, [
                            (openBlock(), createBlock("svg", {
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("path", {
                                d: "M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z",
                                fill: "currentColor"
                              }),
                              createVNode("path", {
                                opacity: "0.5",
                                d: "M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z",
                                fill: "currentColor"
                              }),
                              createVNode("path", {
                                opacity: "0.5",
                                d: "M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z",
                                fill: "currentColor"
                              })
                            ]))
                          ])
                        ], 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ]),
            _ctx.permissions.meta ? (openBlock(), createBlock("div", {
              key: 0,
              class: "d-flex align-items-center justify-content-center justify-content-md-end"
            }, [
              createVNode(_component_Pagination, {
                links: _ctx.permissions.meta.links
              }, null, 8, ["links"])
            ])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UserManagement/Permission.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Permission = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Permission as default
};
