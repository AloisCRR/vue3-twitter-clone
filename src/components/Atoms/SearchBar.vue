<template>
  <div
    class="rounded-full bg-twitter-light p-3 my-3 flex items-center text-twitter-gray border"
    :class="border"
  >
    <Search class="ml-2 mr-3" :width="15" :height="15" :iconColor="color" />
    <input
      type="text"
      placeholder="Buscar en Twitter"
      class="flex-1 bg-transparent focus:outline-none text-white text-sm"
      @focus="toggleSelected()"
      @blur="toggleSelected()"
      autocomplete="false"
      spellcheck="false"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import Search from "@/components/Icons/Search.vue";

export default defineComponent({
  name: "SearchBar",
  props: {},
  components: {
    Search,
  },
  setup() {
    const state = reactive({
      selected: false,
    });

    const border = computed(() =>
      state.selected ? "border-twitter-primary" : "border-transparent"
    );

    const color = computed(() => (state.selected ? "#1da1f2" : "currentColor"));

    function toggleSelected(): void {
      state.selected = !state.selected;
    }

    return {
      state,
      toggleSelected,
      border,
      color,
    };
  },
});
</script>

<style scoped lang="scss"></style>
