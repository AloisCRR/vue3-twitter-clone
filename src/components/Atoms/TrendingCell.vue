<template>
  <button
    type="button"
    class="flex px-4 py-2 border-t border-gray-800 text-twitter-gray w-full text-left focus:outline-none hover:bg-twitter-light transition duration-300 ease-in-out"
  >
    <div class="flex-1">
      <span class="block text-sm">Tendencia en Panamá</span>
      <span class="block text-white font-semibold my-1">Spotify</span>
      <span class="block text-sm">619 mil tweets</span>
    </div>
    <div>i</div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TrendingCell",
  props: {},
});
</script>

<style scoped lang="scss"></style>
