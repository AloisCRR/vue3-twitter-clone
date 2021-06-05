<template>
  <div class="flex p-1 text-twitter-gray">
    <ArrowBack w="25" h="25" class="text-twitter-primary p-3 px-4" />
    <div>
      <span class="block text-white mb-0 font-bold text-xl">Alois</span>
      <small>30 Tweets</small>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArrowBack from 'vue-ionicons/dist/md-arrow-back.vue';

export default defineComponent({
  name: 'SectionName',
  components: {
    ArrowBack
  },
  props: {}
});
</script>

<style scoped></style>
