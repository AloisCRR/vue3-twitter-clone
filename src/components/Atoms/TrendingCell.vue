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
    <More w="20" h="20" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import More from 'vue-ionicons/dist/ios-more.vue';

export default defineComponent({
  name: 'TrendingCell',
  components: {
    More
  },
  props: {}
});
</script>

<style scoped></style>
