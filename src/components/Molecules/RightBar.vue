<template>
  <div class="col-span-3 row-span-fill-1 flex flex-col">
    <search-bar />
    <Follow />
    <trending />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/Atoms/SearchBar.vue";
import Follow from "@/components/Molecules/Follow.vue";
import Trending from "@/components/Molecules/Trending.vue";

export default defineComponent({
  name: "RightBar",
  props: {},
  components: {
    SearchBar,
    Follow,
    Trending,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
