<template>
  <div id="rightbar" class="sx:hidden lg:flex flex flex-col">
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

<style scoped lang="scss">
#rightbar {
  flex: 3;
  min-width: 350px;
}
</style>
