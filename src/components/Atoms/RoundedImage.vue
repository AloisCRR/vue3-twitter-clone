<template>
  <img
    :src="source"
    alt="Profile photo"
    class="rounded-full"
    :width="width"
    :height="height"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "RoundedImage",
  props: {
    width: {
      type: Number as PropType<number>,
      default: 120,
    },
    height: {
      type: Number as PropType<number>,
      default: 120,
    },
    source: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss"></style>
