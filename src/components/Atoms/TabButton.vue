<template>
  <button
    type="button"
    class="flex-grow transition border-twitter-normal duration-150 ease-in-out py-4 text-sm font-semibold hover:bg-twitter-hover hover:text-twitter-normal focus:outline-none"
    :class="[
      idx == active
        ? 'border-b-2 text-twitter-normal'
        : 'text-twitter-textGray',
    ]"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "TabButton",
  props: {
    text: {
      type: String as PropType<string>,
      required: true,
    },
    idx: {
      type: Number as PropType<number>,
      required: true,
    },
    active: {
      type: Number as PropType<number>,
    },
  },
});
</script>

<style scoped lang="scss"></style>
