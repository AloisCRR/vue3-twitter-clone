<template>
  <button
    type="button"
    class="flex items-center self-start mb-2 transition duration-150 ease-in-out p-3 px-4 text-xl font-bold text-white rounded-full hover:bg-twitter-hover hover:text-twitter-primary focus:outline-none"
    :class="{ 'text-twitter-primary': idx == active }"
  >
    <Search class="inline-block" />
    <span class="sx:hidden xl:inline-block ml-5">{{ text }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Search from "@/components/Icons/Search.vue";

export default defineComponent({
  name: "NavButton",
  components: {
    Search,
  },
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
