<template>
  <button
    v-bind="$attrs"
    class="transition-all base-button block overflow-hidden rounded-lg font-semibold"
    @click="$emit('click', $event)"
    :disabled="!!disabled"
  >
    <template v-if="text">
      <h1 class="px-12 py-3">{{ text }}</h1>
    </template>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  emits: ["click"],
  props: {
    text: {
      type: String,
    },
    disabled: {
      type: [Boolean, String],
      default: false,
    },
  },
};
</script>

<style scoped>
.base-button[disabled] {
  opacity: 0.72;
  cursor: default;
}
.base-button:not([disabled]):active {
  transform: scale(0.94);
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
