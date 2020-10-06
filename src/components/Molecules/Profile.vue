<template>
  <div class="bg-yellow-700 flex flex-col row-span-3 col-span-2">
    <SectionName />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionName from "@/components/Atoms/SectionName.vue";

export default defineComponent({
  name: "Profile",
  props: {},
  components: {
    SectionName,
  },
});
</script>

<style scoped lang="scss"></style>
