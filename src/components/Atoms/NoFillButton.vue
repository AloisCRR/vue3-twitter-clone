<template>
  <button
    type="button"
    class="hover:bg-twitter-hover font-bold text-twitter-primary transition duration-300 ease-in-out p-2 px-3 border border-twitter-primary rounded-full focus:outline-none self-end"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "NoFillButton",
  props: {
    text: {
      type: String as PropType<string>,
      required: true,
      default: "Default",
    },
  },
});
</script>

<style scoped lang="scss"></style>
