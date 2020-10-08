<template>
  <button
    type="button"
    class="self-start mb-2 transition duration-150 ease-in-out p-3 px-4 text-lg font-bold text-white rounded-full hover:bg-twitter-hover hover:text-twitter-normal focus:outline-none"
    :class="{ 'text-twitter-normal': idx == active }"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "NavButton",
  props: {
    text: {
      type: String as PropType<string>,
      required: true,
    },
    active: {
      type: Number as PropType<number>,
    },
    idx: {
      type: Number as PropType<number>,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
