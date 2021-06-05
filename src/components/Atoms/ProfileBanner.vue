<template>
  <div class="banner bg-gray-700"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProfileBanner',
  props: {},
  components: {}
});
</script>

<style scoped>
.banner {
  min-height: 12rem;
}
</style>
