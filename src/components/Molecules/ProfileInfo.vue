<template>
  <div class="flex flex-col">
    <EditButton />
    <ProfileDescription />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EditButton from "@/components/Atoms/EditButton.vue";
import ProfileDescription from "@/components/Atoms/ProfileDescription.vue";

export default defineComponent({
  name: "ProfileInfo",
  props: {},
  components: {
    EditButton,
    ProfileDescription,
  },
});
</script>

<style scoped lang="scss"></style>
