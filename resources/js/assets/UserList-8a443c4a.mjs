import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, withDirectives, vModelText, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-b4759e43.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import Multiselect from "@vueform/multiselect";
import { P as Pagination } from "./Pagination-aec868ee.mjs";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
import { toast } from "vue3-toastify";
/* empty css                 */import axios from "axios";
import AddUser from "./AddUser-3c89ee45.mjs";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./Modal-813c1851.mjs";
import "./Input-3696eefa.mjs";
import "./Label-ee7576bd.mjs";
import "./InputError-c62476a0.mjs";
import "@vuelidate/core";
import "@vuelidate/validators";
import "./ImageInput-cd82c300.mjs";
import "@vuepic/vue-datepicker";
/* empty css                */const _sfc_main = defineComponent({
  props: ["users", "roles"],
  data() {
    return {
      str: "",
      q: "",
      isEdit: false,
      showModal: false,
      user: [],
      tbody: [
        "User",
        "Role",
        "Join Date",
        "Action"
      ],
      statusOptions: [
        { value: "all", label: "All" },
        { value: 1, label: "Active" },
        { value: 0, label: "Inactive" }
      ],
      filteredStatus: []
    };
  },
  components: {
    AppLayout,
    Link,
    Head,
    Pagination,
    Multiselect,
    AddUser
  },
  methods: {
    confirmDelete(id, index) {
      this.isLoading = true;
      const first_name = this.employees.data[index].user.first_name;
      const last_name = this.employees.data[index].user.last_name;
      Swal.fire({
        title: "Are you sure you want to delete " + first_name + " " + last_name + "?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc3545",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete("/employee/" + id).then((response) => {
            toast.success(response.data.message);
            if (response.data.success) {
              this.employees.data.splice(index, 1);
              return;
            }
          }).catch((error) => {
            if (error.response.status == 400) {
              toastr.error(error.response.data.message);
            }
          });
        } else if (result.dismiss === "cancel") {
          Swal.fire({
            text: first_name + " " + last_name + " was not deleted.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn fw-bold btn-primary"
            }
          });
        }
      });
    },
    search() {
      Inertia.get(
        "/users",
        { q: this.q, status: this.s }
      );
    },
    toggleModal(value, user) {
      if (user) {
        this.isEdit = true;
        this.showModal = true;
        this.user = user;
      } else if (value) {
        this.showModal = true;
      } else {
        this.showModal = false;
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Head = resolveComponent("Head");
  const _component_AddUser = resolveComponent("AddUser");
  const _component_Link = resolveComponent("Link");
  const _component_Pagination = resolveComponent("Pagination");
  _push(ssrRenderComponent(_component_app_layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(ssrRenderComponent(_component_Head, { title: "Employees" }, null, _parent2, _scopeId));
        if (_ctx.showModal) {
          _push2(ssrRenderComponent(_component_AddUser, {
            show: _ctx.showModal,
            isEdit: _ctx.isEdit,
            onHidemodal: ($event) => _ctx.toggleModal(false),
            roles: _ctx.roles.data
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="card card-flush"${_scopeId}><div${_scopeId}><div class="card-header border-0 pt-6"${_scopeId}><div class="card-title"${_scopeId}><div${_scopeId}><form class="d-flex align-items-center position-relative my-1 gap-4"${_scopeId}><div class="d-flex align-items-center position-relative"${_scopeId}><span class="svg-icon svg-icon-1 position-absolute ms-4"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"${_scopeId}></rect><path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"${_scopeId}></path></svg></span><input type="text"${ssrRenderAttr("value", _ctx.q)} class="form-control form-control-solid w-250px ps-14" placeholder="Search "${_scopeId}></div><button type="submit" class="btn btn-primary"${_scopeId}> Search </button></form></div></div><div class="card-toolbar"${_scopeId}><div class="d-flex justify-content-end" data-kt-user-table-toolbar="base"${_scopeId}><button type="button" class="btn btn-primary"${_scopeId}><span class="svg-icon svg-icon-2"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor"${_scopeId}></rect><rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor"${_scopeId}></rect></svg></span>Add User</button></div></div></div></div><div class="card-body py-4"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table align-middle table-row-dashed fs-6 gy-5 text-center"${_scopeId}><thead${_scopeId}><tr class="text-gray-400 fw-bold fs-7 text-uppercase"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.tbody, (th, index) => {
          _push2(`<th${_scopeId}>${ssrInterpolate(th)}</th>`);
        });
        _push2(`<!--]--></tr></thead><tbody class="text-gray-600 fw-semibold"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.users.data, (user, index) => {
          _push2(`<tr${_scopeId}><td class="d-flex align-items-center"${_scopeId}><div class="symbol symbol-circle symbol-50px overflow-hidden me-3"${_scopeId}>`);
          if (user.full_path) {
            _push2(`<a href="#"${_scopeId}><div class="symbol-label"${_scopeId}><img${ssrRenderAttr("src", user.full_path)} alt="Emma Smith" class="w-100"${_scopeId}></div></a>`);
          } else {
            _push2(`<a href="#"${_scopeId}><div class="symbol-label fs-3 bg-light-danger text-danger"${_scopeId}> A </div></a>`);
          }
          _push2(`</div><div class="d-flex flex-column"${_scopeId}><a href="#" class="text-gray-800 text-hover-primary mb-1"${_scopeId}>${ssrInterpolate(user.first_name + " " + user.last_name)}</a><span${_scopeId}>${ssrInterpolate(user.email)}</span></div></td><td${_scopeId}>Analyst </td><td${_scopeId}><div class="badge badge-light fw-bold"${_scopeId}>20 mins ago</div></td><td${_scopeId}><div class="dropdown"${_scopeId}><a href="#" class="btn btn-sm btn-light btn-active-light-primary"${ssrRenderAttr("id", `dropdown-${user == null ? void 0 : user.id}`)} data-bs-toggle="dropdown" aria-expanded="false"${_scopeId}>Actions <span class="svg-icon svg-icon-5 m-0"${_scopeId}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"${_scopeId}></path></svg></span></a><ul class="dropdown-menu text-small menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"${ssrRenderAttr("aria-labelled:by", `dropdown-${user == null ? void 0 : user.id}`)}${_scopeId}><li class="menu-item px-3"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            class: "btn btn-sm dropdown-item align-items-center justify-content-center",
            href: `/users/${user == null ? void 0 : user.id}/edit`
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Edit `);
              } else {
                return [
                  createTextVNode("Edit ")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</li><li class="menu-item px-3"${_scopeId}><button class="btn btn-sm dropdown-item align-items-center justify-content-center"${_scopeId}> Delete </button></li></ul></div></td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div>`);
        if ((_a = _ctx.users) == null ? void 0 : _a.meta) {
          _push2(`<div class="d-flex align-items-center justify-content-center justify-content-md-end"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Pagination, {
            links: _ctx.users.meta.links
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode(_component_Head, { title: "Employees" }),
          _ctx.showModal ? (openBlock(), createBlock(_component_AddUser, {
            key: 0,
            show: _ctx.showModal,
            isEdit: _ctx.isEdit,
            onHidemodal: ($event) => _ctx.toggleModal(false),
            roles: _ctx.roles.data
          }, null, 8, ["show", "isEdit", "onHidemodal", "roles"])) : createCommentVNode("", true),
          createVNode("div", { class: "card card-flush" }, [
            createVNode("div", null, [
              createVNode("div", { class: "card-header border-0 pt-6" }, [
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
                  createVNode("div", {
                    class: "d-flex justify-content-end",
                    "data-kt-user-table-toolbar": "base"
                  }, [
                    createVNode("button", {
                      type: "button",
                      class: "btn btn-primary",
                      onClick: ($event) => _ctx.toggleModal(true)
                    }, [
                      createVNode("span", { class: "svg-icon svg-icon-2" }, [
                        (openBlock(), createBlock("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("rect", {
                            opacity: "0.5",
                            x: "11.364",
                            y: "20.364",
                            width: "16",
                            height: "2",
                            rx: "1",
                            transform: "rotate(-90 11.364 20.364)",
                            fill: "currentColor"
                          }),
                          createVNode("rect", {
                            x: "4.36396",
                            y: "11.364",
                            width: "16",
                            height: "2",
                            rx: "1",
                            fill: "currentColor"
                          })
                        ]))
                      ]),
                      createTextVNode("Add User")
                    ], 8, ["onClick"])
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "card-body py-4" }, [
              createVNode("div", { class: "table-responsive" }, [
                createVNode("table", { class: "table align-middle table-row-dashed fs-6 gy-5 text-center" }, [
                  createVNode("thead", null, [
                    createVNode("tr", { class: "text-gray-400 fw-bold fs-7 text-uppercase" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tbody, (th, index) => {
                        return openBlock(), createBlock("th", { key: index }, toDisplayString(th), 1);
                      }), 128))
                    ])
                  ]),
                  createVNode("tbody", { class: "text-gray-600 fw-semibold" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.users.data, (user, index) => {
                      return openBlock(), createBlock("tr", { key: index }, [
                        createVNode("td", { class: "d-flex align-items-center" }, [
                          createVNode("div", { class: "symbol symbol-circle symbol-50px overflow-hidden me-3" }, [
                            user.full_path ? (openBlock(), createBlock("a", {
                              key: 0,
                              href: "#"
                            }, [
                              createVNode("div", { class: "symbol-label" }, [
                                createVNode("img", {
                                  src: user.full_path,
                                  alt: "Emma Smith",
                                  class: "w-100"
                                }, null, 8, ["src"])
                              ])
                            ])) : (openBlock(), createBlock("a", {
                              key: 1,
                              href: "#"
                            }, [
                              createVNode("div", { class: "symbol-label fs-3 bg-light-danger text-danger" }, " A ")
                            ]))
                          ]),
                          createVNode("div", { class: "d-flex flex-column" }, [
                            createVNode("a", {
                              href: "#",
                              class: "text-gray-800 text-hover-primary mb-1"
                            }, toDisplayString(user.first_name + " " + user.last_name), 1),
                            createVNode("span", null, toDisplayString(user.email), 1)
                          ])
                        ]),
                        createVNode("td", null, "Analyst "),
                        createVNode("td", null, [
                          createVNode("div", { class: "badge badge-light fw-bold" }, "20 mins ago")
                        ]),
                        createVNode("td", null, [
                          createVNode("div", { class: "dropdown" }, [
                            createVNode("a", {
                              href: "#",
                              class: "btn btn-sm btn-light btn-active-light-primary",
                              id: `dropdown-${user == null ? void 0 : user.id}`,
                              "data-bs-toggle": "dropdown",
                              "aria-expanded": "false"
                            }, [
                              createTextVNode("Actions "),
                              createVNode("span", { class: "svg-icon svg-icon-5 m-0" }, [
                                (openBlock(), createBlock("svg", {
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  createVNode("path", {
                                    d: "M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z",
                                    fill: "currentColor"
                                  })
                                ]))
                              ])
                            ], 8, ["id"]),
                            createVNode("ul", {
                              class: "dropdown-menu text-small menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4",
                              "aria-labelled:by": `dropdown-${user == null ? void 0 : user.id}`
                            }, [
                              createVNode("li", { class: "menu-item px-3" }, [
                                createVNode(_component_Link, {
                                  class: "btn btn-sm dropdown-item align-items-center justify-content-center",
                                  href: `/users/${user == null ? void 0 : user.id}/edit`
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Edit ")
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ]),
                              createVNode("li", { class: "menu-item px-3" }, [
                                createVNode("button", {
                                  onClick: ($event) => _ctx.confirmDelete(
                                    user == null ? void 0 : user.id,
                                    index
                                  ),
                                  class: "btn btn-sm dropdown-item align-items-center justify-content-center"
                                }, " Delete ", 8, ["onClick"])
                              ])
                            ], 8, ["aria-labelled:by"])
                          ])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]),
              ((_b = _ctx.users) == null ? void 0 : _b.meta) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "d-flex align-items-center justify-content-center justify-content-md-end"
              }, [
                createVNode(_component_Pagination, {
                  links: _ctx.users.meta.links
                }, null, 8, ["links"])
              ])) : createCommentVNode("", true)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UserManagement/Users/UserList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  UserList as default
};
