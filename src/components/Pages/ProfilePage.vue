<template>
  <div class="container mx-auto h-screen">
    <BaseGrid />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseGrid from "@/components/Organisms/BaseGrid.vue";

export default defineComponent({
  name: "ProfilePage",
  props: {},
  components: {
    BaseGrid,
  },
});
</script>

<style scoped lang="scss"></style>
