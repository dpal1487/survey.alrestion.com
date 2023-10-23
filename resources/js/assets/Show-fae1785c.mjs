import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout-c769c24f.mjs";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "axios";
import "@inertiajs/inertia";
const _sfc_main = defineComponent({
  props: ["invoice"],
  data() {
    return {
      title: `${this.invoice.data.invoice_number}`
    };
  },
  components: {
    AppLayout,
    Link,
    Head
  },
  methods: {
    printDiv(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    }
  },
  created() {
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_AppLayout = resolveComponent("AppLayout");
  const _component_loading = resolveComponent("loading");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, null, _parent));
  _push(ssrRenderComponent(_component_AppLayout, { title: _ctx.title }, {
    breadcrumb: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "/invoices",
          class: "text-muted text-hover-primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Invoices`);
            } else {
              return [
                createTextVNode("Invoices")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</li><li class="breadcrumb-item"${_scopeId}><span class="bullet bg-gray-400 w-5px h-2px"${_scopeId}></span></li><li class="breadcrumb-item"${_scopeId}><span class="text-muted text-hover-primary"${_scopeId}>Overview</span></li>`);
      } else {
        return [
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode(_component_Link, {
              href: "/invoices",
              class: "text-muted text-hover-primary"
            }, {
              default: withCtx(() => [
                createTextVNode("Invoices")
              ]),
              _: 1
            })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "bullet bg-gray-400 w-5px h-2px" })
          ]),
          createVNode("li", { class: "breadcrumb-item" }, [
            createVNode("span", { class: "text-muted text-hover-primary" }, "Overview")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_loading, {
          active: _ctx.isLoading,
          "onUpdate:active": ($event) => _ctx.isLoading = $event,
          "can-cancel": false,
          "is-full-page": true
        }, null, _parent2, _scopeId));
        _push2(`<div class="app-content flex-column-fluid"${_scopeId}><div class="card" id="printableArea"${_scopeId}><div class="card-body p-lg-20"${_scopeId}><div class="d-flex flex-column flex-xl-row"${_scopeId}><div class="flex-lg-row-fluid me-xl-18 mb-10 mb-xl-0"${_scopeId}><div class="mt-n1"${_scopeId}><div class="d-flex flex-stack pb-10"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, { href: "/" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img alt="Logo" src="/assets/images/logo-light.png" style="${ssrRenderStyle({ "height": "100px" })}"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  alt: "Logo",
                  src: "/assets/images/logo-light.png",
                  style: { "height": "100px" }
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="m-0"${_scopeId}><div class="fw-bold fs-3 text-gray-800 mb-8"${_scopeId}>Invoice #${ssrInterpolate(_ctx.invoice.data.invoice_number)}</div><div class="row g-5 mb-11"${_scopeId}><div class="col-sm-6"${_scopeId}><div class="fw-semibold fs-4 text-gray-600 mb-1"${_scopeId}>Issue Date:</div><div class="fw-bold fs-4 text-gray-800"${_scopeId}>${ssrInterpolate(_ctx.invoice.data.issue_date)}</div></div><div class="col-sm-6"${_scopeId}><div class="fw-semibold fs-4 text-gray-600 mb-1"${_scopeId}>Due Date:</div><div class="fw-bold fs-4 text-gray-800 d-flex align-items-center flex-wrap"${_scopeId}><span class="pe-2"${_scopeId}>${ssrInterpolate(_ctx.invoice.data.due_date)}</span></div></div></div><div class="row g-5 mb-12"${_scopeId}><div class="col-sm-6"${_scopeId}><div class="fw-semibold text-gray-600 mb-1"${_scopeId}>From:</div><div class="fw-bold fs-4 text-gray-800 mb-5"${_scopeId}>A.R Solution</div><div class="fw-semibold fs-4 text-gray-600 mb-5"${_scopeId}>${ssrInterpolate(_ctx.invoice.data.from_address)}</div><div class="fw-semibold fs-4 text-gray-600"${_scopeId}> GSTIN : 07CAYPR9267G1ZN </div></div><div class="col-sm-6"${_scopeId}><div class="fw-semibold fs-4 text-gray-600 mb-1"${_scopeId}>To:</div><div class="fw-bold fs-4 text-gray-800 mb-5"${_scopeId}>${ssrInterpolate(_ctx.invoice.data.client.name)}</div><div class="fw-semiboldtext-gray-600 fs-4 mb-5"${_scopeId}>${ssrInterpolate(_ctx.invoice.data.to_address)}</div>`);
        if (_ctx.tax_number) {
          _push2(`<div class="fw-semibold fs-4 text-gray-600"${_scopeId}> GSTIN : ${ssrInterpolate(_ctx.invoice.data.client.tax_number)}</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="flex-grow-1"${_scopeId}><div class="table-responsive mb-0"${_scopeId}><table class="table table-bordered bordered border"${_scopeId}><thead class="text-center"${_scopeId}><tr class="bg-gray-300 fs-6 fw-bold text-gray-800"${_scopeId}><th class="col-3 text-start ps-5"${_scopeId}>Project Name</th><th class="col-3"${_scopeId}>CPI</th><th class="col-3"${_scopeId}>Quantity</th><th class="col-3 text-end pe-5"${_scopeId}>Amount</th></tr></thead><tbody class="text-center"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.invoice.data.items, (item, index) => {
          _push2(`<tr class="fw-bold text-gray-700 fs-5"${_scopeId}><td class="text-start ps-5"${_scopeId}>${ssrInterpolate(item.project_name)}</td><td${_scopeId}>${ssrInterpolate(_ctx.invoice.data.currency.symbol)}${ssrInterpolate(item.cpi)}</td><td${_scopeId}>${ssrInterpolate(item.quantity)}</td><td class="text-end text-dark fw-bolder pe-5"${_scopeId}>${ssrInterpolate(_ctx.invoice.data.currency.symbol)}${ssrInterpolate(item.cpi * item.quantity)}</td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div></div></div><div class="d-flex pt-10 pb-10"${_scopeId}><div class="col-4"${_scopeId}><div class="table-responsive mb-0"${_scopeId}><table class="table"${_scopeId}><tr class="fw-bold text-gray-700 fs-5"${_scopeId}><td class="col-6"${_scopeId}><div class="fw-semibold pe-10 text-gray-600 fs-4"${_scopeId}>Account Holder </div></td><td class="col-6"${_scopeId}><div class="fw-bold fs-4 text-gray-800"${_scopeId}> A.R Solution </div></td></tr><tr class="fw-bold text-gray-700 fs-5"${_scopeId}><td class="col-6"${_scopeId}><div class="fw-semibold pe-10 text-gray-600 fs-4"${_scopeId}>Account Number </div></td><td class="col-6"${_scopeId}><div class="fw-bold fs-4 text-gray-800"${_scopeId}> 097863300000931 </div></td></tr><tr class="fw-bold text-gray-700 fs-5"${_scopeId}><td class="col-6"${_scopeId}><div class="fw-semibold pe-10 text-gray-600 fs-4"${_scopeId}>IFSC </div></td><td class="col-6"${_scopeId}><div class="fw-bold fs-4 text-gray-800"${_scopeId}> YESB0000978 </div></td></tr><tr class="fw-bold text-gray-700 fs-5"${_scopeId}><td class="col-6"${_scopeId}><div class="fw-semibold pe-10 text-gray-600 fs-4"${_scopeId}>Account Type </div></td><td class="col-6"${_scopeId}><div class="fw-bold fs-4 text-gray-800"${_scopeId}> Current </div></td></tr></table></div></div><div class="col-2"${_scopeId}></div><div class="col-6"${_scopeId}><div class="table-responsive mb-0"${_scopeId}><table class="table"${_scopeId}><tr class="fw-bold text-gray-700 fs-5"${_scopeId}><td class="col-6 text-end"${_scopeId}><div class="fw-semibold pe-10 text-gray-600 fs-4"${_scopeId}>Subtotal</div></td><td class="col-6 text-end border-bottom"${_scopeId}><div class="text-dark fw-bolder"${_scopeId}>${ssrInterpolate(_ctx.invoice.data.currency.symbol)}${ssrInterpolate(_ctx.invoice.data.total_amount)}</div></td></tr><tr class="fw-bold text-gray-700 fs-5"${_scopeId}><td class="col-6 text-end"${_scopeId}><div class="fw-semibold pe-10 text-gray-600 fs-4"${_scopeId}>GSTIN ${ssrInterpolate(_ctx.invoice.data.tax_rate)}%</div></td><td class="col-6 text-end border-bottom"${_scopeId}><div class="text-dark fw-bolder"${_scopeId}>INR ${ssrInterpolate(parseFloat(_ctx.invoice.data.total_amount / 118 * _ctx.invoice.data.tax_rate).toFixed(2))}</div></td></tr><tr class="fw-bold text-gray-700 fs-5"${_scopeId}><td class="col-6 text-end"${_scopeId}><div class="fw-semibold pe-10 text-gray-600 fs-4"${_scopeId}>Applied Exchange Rate</div></td><td class="col-6 text-end border-bottom"${_scopeId}><div class="text-dark fw-bolder"${_scopeId}> 1 ${ssrInterpolate(_ctx.invoice.data.currency.code)} = ${ssrInterpolate(_ctx.invoice.data.conversion_rate)} INR</div></td></tr><tr class="fw-bold text-gray-700 fs-5"${_scopeId}><td class="col-6 text-end"${_scopeId}><div class="fw-semibold pe-10 text-gray-600 fs-4"${_scopeId}>Total</div></td><td class="col-6 text-end border-bottom"${_scopeId}><div class="text-dark fw-bolder"${_scopeId}>${ssrInterpolate(_ctx.invoice.data.currency.symbol)}${ssrInterpolate(_ctx.invoice.data.total_amount)} X INR ${ssrInterpolate(_ctx.invoice.data.conversion_rate)} = ${ssrInterpolate(_ctx.invoice.data.currency.code)} ${ssrInterpolate(_ctx.invoice.data.total_amount * _ctx.invoice.data.conversion_rate)}</div></td></tr></table></div></div></div><div class="d-flex justify-content-between align-items-center border-top pt-10"${_scopeId}><div class="mw-400px"${_scopeId}><div class="d-flex flex-stack mb-3"${_scopeId}><div class="text-end fw-bold fs-4 text-gray-800"${_scopeId}> Contact Details </div></div><div class="d-flex flex-stack mb-3"${_scopeId}><div class="fw-semibold pe-10 text-gray-600 fs-4"${_scopeId}>Contact Number : </div><div class="text-end fw-bold fs-4 text-gray-800"${_scopeId}>+91 75038-76258</div></div><div class="d-flex flex-stack mb-3"${_scopeId}><div class="fw-semibold pe-10 text-gray-600 fs-4"${_scopeId}>Contact Email : </div><div class="text-end fw-bold fs-4 text-gray-800"${_scopeId}>rahul.kumar@alrestion.com</div></div></div><div class="mw-400px"${_scopeId}><div class="d-flex flex-stack"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, { href: "/" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img alt="Logo" src="/assets/images/logo-light.png" style="${ssrRenderStyle({ "height": "100px" })}"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  alt: "Logo",
                  src: "/assets/images/logo-light.png",
                  style: { "height": "100px" }
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div></div></div></div></div></div><div class="d-flex justify-content-end mt-5"${_scopeId}><button class="btn btn-success"${_scopeId}><i class="bi bi-filetype-pdf"${_scopeId}></i>Save PDF</button></div></div>`);
      } else {
        return [
          createVNode(_component_loading, {
            active: _ctx.isLoading,
            "onUpdate:active": ($event) => _ctx.isLoading = $event,
            "can-cancel": false,
            "is-full-page": true
          }, null, 8, ["active", "onUpdate:active"]),
          createVNode("div", { class: "app-content flex-column-fluid" }, [
            createVNode("div", {
              class: "card",
              id: "printableArea"
            }, [
              createVNode("div", { class: "card-body p-lg-20" }, [
                createVNode("div", { class: "d-flex flex-column flex-xl-row" }, [
                  createVNode("div", { class: "flex-lg-row-fluid me-xl-18 mb-10 mb-xl-0" }, [
                    createVNode("div", { class: "mt-n1" }, [
                      createVNode("div", { class: "d-flex flex-stack pb-10" }, [
                        createVNode(_component_Link, { href: "/" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              alt: "Logo",
                              src: "/assets/images/logo-light.png",
                              style: { "height": "100px" }
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "m-0" }, [
                        createVNode("div", { class: "fw-bold fs-3 text-gray-800 mb-8" }, "Invoice #" + toDisplayString(_ctx.invoice.data.invoice_number), 1),
                        createVNode("div", { class: "row g-5 mb-11" }, [
                          createVNode("div", { class: "col-sm-6" }, [
                            createVNode("div", { class: "fw-semibold fs-4 text-gray-600 mb-1" }, "Issue Date:"),
                            createVNode("div", { class: "fw-bold fs-4 text-gray-800" }, toDisplayString(_ctx.invoice.data.issue_date), 1)
                          ]),
                          createVNode("div", { class: "col-sm-6" }, [
                            createVNode("div", { class: "fw-semibold fs-4 text-gray-600 mb-1" }, "Due Date:"),
                            createVNode("div", { class: "fw-bold fs-4 text-gray-800 d-flex align-items-center flex-wrap" }, [
                              createVNode("span", { class: "pe-2" }, toDisplayString(_ctx.invoice.data.due_date), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row g-5 mb-12" }, [
                          createVNode("div", { class: "col-sm-6" }, [
                            createVNode("div", { class: "fw-semibold text-gray-600 mb-1" }, "From:"),
                            createVNode("div", { class: "fw-bold fs-4 text-gray-800 mb-5" }, "A.R Solution"),
                            createVNode("div", { class: "fw-semibold fs-4 text-gray-600 mb-5" }, toDisplayString(_ctx.invoice.data.from_address), 1),
                            createVNode("div", { class: "fw-semibold fs-4 text-gray-600" }, " GSTIN : 07CAYPR9267G1ZN ")
                          ]),
                          createVNode("div", { class: "col-sm-6" }, [
                            createVNode("div", { class: "fw-semibold fs-4 text-gray-600 mb-1" }, "To:"),
                            createVNode("div", { class: "fw-bold fs-4 text-gray-800 mb-5" }, toDisplayString(_ctx.invoice.data.client.name), 1),
                            createVNode("div", { class: "fw-semiboldtext-gray-600 fs-4 mb-5" }, toDisplayString(_ctx.invoice.data.to_address), 1),
                            _ctx.tax_number ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "fw-semibold fs-4 text-gray-600"
                            }, " GSTIN : " + toDisplayString(_ctx.invoice.data.client.tax_number), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "flex-grow-1" }, [
                          createVNode("div", { class: "table-responsive mb-0" }, [
                            createVNode("table", { class: "table table-bordered bordered border" }, [
                              createVNode("thead", { class: "text-center" }, [
                                createVNode("tr", { class: "bg-gray-300 fs-6 fw-bold text-gray-800" }, [
                                  createVNode("th", { class: "col-3 text-start ps-5" }, "Project Name"),
                                  createVNode("th", { class: "col-3" }, "CPI"),
                                  createVNode("th", { class: "col-3" }, "Quantity"),
                                  createVNode("th", { class: "col-3 text-end pe-5" }, "Amount")
                                ])
                              ]),
                              createVNode("tbody", { class: "text-center" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.invoice.data.items, (item, index) => {
                                  return openBlock(), createBlock("tr", {
                                    class: "fw-bold text-gray-700 fs-5",
                                    key: index
                                  }, [
                                    createVNode("td", { class: "text-start ps-5" }, toDisplayString(item.project_name), 1),
                                    createVNode("td", null, toDisplayString(_ctx.invoice.data.currency.symbol) + toDisplayString(item.cpi), 1),
                                    createVNode("td", null, toDisplayString(item.quantity), 1),
                                    createVNode("td", { class: "text-end text-dark fw-bolder pe-5" }, toDisplayString(_ctx.invoice.data.currency.symbol) + toDisplayString(item.cpi * item.quantity), 1)
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "d-flex pt-10 pb-10" }, [
                        createVNode("div", { class: "col-4" }, [
                          createVNode("div", { class: "table-responsive mb-0" }, [
                            createVNode("table", { class: "table" }, [
                              createVNode("tr", { class: "fw-bold text-gray-700 fs-5" }, [
                                createVNode("td", { class: "col-6" }, [
                                  createVNode("div", { class: "fw-semibold pe-10 text-gray-600 fs-4" }, "Account Holder ")
                                ]),
                                createVNode("td", { class: "col-6" }, [
                                  createVNode("div", { class: "fw-bold fs-4 text-gray-800" }, " A.R Solution ")
                                ])
                              ]),
                              createVNode("tr", { class: "fw-bold text-gray-700 fs-5" }, [
                                createVNode("td", { class: "col-6" }, [
                                  createVNode("div", { class: "fw-semibold pe-10 text-gray-600 fs-4" }, "Account Number ")
                                ]),
                                createVNode("td", { class: "col-6" }, [
                                  createVNode("div", { class: "fw-bold fs-4 text-gray-800" }, " 097863300000931 ")
                                ])
                              ]),
                              createVNode("tr", { class: "fw-bold text-gray-700 fs-5" }, [
                                createVNode("td", { class: "col-6" }, [
                                  createVNode("div", { class: "fw-semibold pe-10 text-gray-600 fs-4" }, "IFSC ")
                                ]),
                                createVNode("td", { class: "col-6" }, [
                                  createVNode("div", { class: "fw-bold fs-4 text-gray-800" }, " YESB0000978 ")
                                ])
                              ]),
                              createVNode("tr", { class: "fw-bold text-gray-700 fs-5" }, [
                                createVNode("td", { class: "col-6" }, [
                                  createVNode("div", { class: "fw-semibold pe-10 text-gray-600 fs-4" }, "Account Type ")
                                ]),
                                createVNode("td", { class: "col-6" }, [
                                  createVNode("div", { class: "fw-bold fs-4 text-gray-800" }, " Current ")
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-2" }),
                        createVNode("div", { class: "col-6" }, [
                          createVNode("div", { class: "table-responsive mb-0" }, [
                            createVNode("table", { class: "table" }, [
                              createVNode("tr", { class: "fw-bold text-gray-700 fs-5" }, [
                                createVNode("td", { class: "col-6 text-end" }, [
                                  createVNode("div", { class: "fw-semibold pe-10 text-gray-600 fs-4" }, "Subtotal")
                                ]),
                                createVNode("td", { class: "col-6 text-end border-bottom" }, [
                                  createVNode("div", { class: "text-dark fw-bolder" }, toDisplayString(_ctx.invoice.data.currency.symbol) + toDisplayString(_ctx.invoice.data.total_amount), 1)
                                ])
                              ]),
                              createVNode("tr", { class: "fw-bold text-gray-700 fs-5" }, [
                                createVNode("td", { class: "col-6 text-end" }, [
                                  createVNode("div", { class: "fw-semibold pe-10 text-gray-600 fs-4" }, "GSTIN " + toDisplayString(_ctx.invoice.data.tax_rate) + "%", 1)
                                ]),
                                createVNode("td", { class: "col-6 text-end border-bottom" }, [
                                  createVNode("div", { class: "text-dark fw-bolder" }, "INR " + toDisplayString(parseFloat(_ctx.invoice.data.total_amount / 118 * _ctx.invoice.data.tax_rate).toFixed(2)), 1)
                                ])
                              ]),
                              createVNode("tr", { class: "fw-bold text-gray-700 fs-5" }, [
                                createVNode("td", { class: "col-6 text-end" }, [
                                  createVNode("div", { class: "fw-semibold pe-10 text-gray-600 fs-4" }, "Applied Exchange Rate")
                                ]),
                                createVNode("td", { class: "col-6 text-end border-bottom" }, [
                                  createVNode("div", { class: "text-dark fw-bolder" }, " 1 " + toDisplayString(_ctx.invoice.data.currency.code) + " = " + toDisplayString(_ctx.invoice.data.conversion_rate) + " INR", 1)
                                ])
                              ]),
                              createVNode("tr", { class: "fw-bold text-gray-700 fs-5" }, [
                                createVNode("td", { class: "col-6 text-end" }, [
                                  createVNode("div", { class: "fw-semibold pe-10 text-gray-600 fs-4" }, "Total")
                                ]),
                                createVNode("td", { class: "col-6 text-end border-bottom" }, [
                                  createVNode("div", { class: "text-dark fw-bolder" }, toDisplayString(_ctx.invoice.data.currency.symbol) + toDisplayString(_ctx.invoice.data.total_amount) + " X INR " + toDisplayString(_ctx.invoice.data.conversion_rate) + " = " + toDisplayString(_ctx.invoice.data.currency.code) + " " + toDisplayString(_ctx.invoice.data.total_amount * _ctx.invoice.data.conversion_rate), 1)
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "d-flex justify-content-between align-items-center border-top pt-10" }, [
                        createVNode("div", { class: "mw-400px" }, [
                          createVNode("div", { class: "d-flex flex-stack mb-3" }, [
                            createVNode("div", { class: "text-end fw-bold fs-4 text-gray-800" }, " Contact Details ")
                          ]),
                          createVNode("div", { class: "d-flex flex-stack mb-3" }, [
                            createVNode("div", { class: "fw-semibold pe-10 text-gray-600 fs-4" }, "Contact Number : "),
                            createVNode("div", { class: "text-end fw-bold fs-4 text-gray-800" }, "+91 75038-76258")
                          ]),
                          createVNode("div", { class: "d-flex flex-stack mb-3" }, [
                            createVNode("div", { class: "fw-semibold pe-10 text-gray-600 fs-4" }, "Contact Email : "),
                            createVNode("div", { class: "text-end fw-bold fs-4 text-gray-800" }, "rahul.kumar@alrestion.com")
                          ])
                        ]),
                        createVNode("div", { class: "mw-400px" }, [
                          createVNode("div", { class: "d-flex flex-stack" }, [
                            createVNode(_component_Link, { href: "/" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  alt: "Logo",
                                  src: "/assets/images/logo-light.png",
                                  style: { "height": "100px" }
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "d-flex justify-content-end mt-5" }, [
              createVNode("button", {
                class: "btn btn-success",
                onClick: ($event) => _ctx.printDiv("printableArea")
              }, [
                createVNode("i", { class: "bi bi-filetype-pdf" }),
                createTextVNode("Save PDF")
              ], 8, ["onClick"])
            ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Invoice/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};
