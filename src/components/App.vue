<template>
  <ProfilePage />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfilePage from "@/components/Pages/ProfilePage.vue";

export default defineComponent({
  name: "App",
  props: {},
  components: {
    ProfilePage,
  },
});
</script>

<style lang="scss">
#app {
  background-color: #192734;
}
</style>
