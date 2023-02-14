import { defineComponent } from "vue-demi";
import { resolveComponent, openBlock, createBlock, withCtx, renderSlot, createElementBlock } from "vue";
import _export_sfc from "../_virtual/plugin-vue_export-helper.mjs";
const _sfc_main = defineComponent({
  name: "MyRouterLink",
  props: {
    to: {
      type: [Object, String],
      required: false,
      default: null
    },
    isNuxt: {
      type: Boolean,
      required: false,
      default: false
    },
    isVueRouter: {
      type: Boolean,
      required: false,
      default: false
    },
    wrapInLink: {
      type: Boolean,
      required: false,
      default: true
    }
  }
});
const _hoisted_1 = ["href"];
const _hoisted_2 = {
  key: 3,
  "data-testid": "jum-router-link"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_nuxt_link = resolveComponent("nuxt-link");
  const _component_router_link = resolveComponent("router-link");
  return _ctx.isNuxt ? (openBlock(), createBlock(_component_nuxt_link, {
    key: 0,
    to: _ctx.to,
    "data-testid": "jum-router-link"
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", { href: _ctx.to })
    ]),
    _: 3
  }, 8, ["to"])) : _ctx.isVueRouter ? (openBlock(), createBlock(_component_router_link, {
    key: 1,
    to: _ctx.to,
    "data-testid": "jum-router-link"
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", { href: _ctx.to })
    ]),
    _: 3
  }, 8, ["to"])) : _ctx.wrapInLink ? (openBlock(), createElementBlock("a", {
    key: 2,
    href: _ctx.to,
    "data-testid": "jum-router-link"
  }, [
    renderSlot(_ctx.$slots, "default", { href: _ctx.to })
  ], 8, _hoisted_1)) : (openBlock(), createElementBlock("span", _hoisted_2, [
    renderSlot(_ctx.$slots, "default", { href: _ctx.to })
  ]));
}
var MyRouterLink = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { MyRouterLink as default };
//# sourceMappingURL=MyRouterLink.mjs.map
