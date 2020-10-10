<template>
  <div class="h-screen flex">
    <!-- 250 -->
    <Navigation />
    <!-- 600 -->
    <Profile />
    <!-- 350 -->
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
