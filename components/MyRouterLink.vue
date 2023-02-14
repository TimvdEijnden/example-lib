<template>
  <nuxt-link v-if="isNuxt" :to="to" data-testid="jum-router-link">
    <slot :href="to"></slot
    ></nuxt-link>
  <router-link v-else-if="isVueRouter" :to="to" data-testid="jum-router-link">
    <slot :href="to"></slot
    ></router-link>
  <a v-else-if="wrapInLink" :href="to" data-testid="jum-router-link"><slot :href="to"></slot></a>
  <span v-else data-testid="jum-router-link"><slot :href="to"></slot></span>
</template>

<script>
import { defineComponent } from 'vue-demi';

export default defineComponent({
  name: 'MyRouterLink',
  props: {
    to: {
      type: [Object, String],
      required: false,
      default: null,
    },
    isNuxt: {
      type: Boolean,
      required: false,
      default: false,
    },
    isVueRouter: {
      type: Boolean,
      required: false,
      default: false,
    },
    wrapInLink: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

});
</script>
