<template>
  <div class="col-span-3 row-span-fill-1 flex flex-col">
    <search-bar />
    <knows />
    <trending />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/Atoms/SearchBar.vue";
import Knows from "@/components/Molecules/Knows.vue";
import Trending from "@/components/Molecules/Trending.vue";

export default defineComponent({
  name: "RightBar",
  props: {},
  components: {
    SearchBar,
    Knows,
    Trending,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
