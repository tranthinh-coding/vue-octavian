<template>
  <router-link :to="to">
    <h3 v-bind="$attrs" class="text-lg cursor-pointer font-semibold capitalize flex items-center">
      <span>{{ text }}</span>
      <slot></slot>
    </h3>
  </router-link>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  inheritAttrs: false,

  props: {
    text: {
      type: String,
      require: true,
    },
    to: {
      type: Object,
    },
  },
});
</script>