<template>
  <div class="h-screen grid grid-cols-10 grid-rows-3 gap-3">
    <Navigation />
    <Profile />
    <RightBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/Molecules/Navigation.vue";
import Profile from "@/components/Molecules/Profile.vue";
import RightBar from "@/components/Molecules/RightBar.vue";

export default defineComponent({
  name: "BaseGrid",
  props: {},
  components: {
    Navigation,
    Profile,
    RightBar,
  },
});
</script>

<style scoped lang="scss"></style>
