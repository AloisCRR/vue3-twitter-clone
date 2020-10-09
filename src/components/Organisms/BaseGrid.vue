<template>
  <div class="h-screen grid grid-cols-10 grid-rows-3 gap-3">
    <Navigation />
    <Profile />
    <Knows />
    <Trending />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/Molecules/Navigation.vue";
import Profile from "@/components/Molecules/Profile.vue";
import Knows from "@/components/Molecules/Knows.vue";
import Trending from "@/components/Molecules/Trending.vue";

export default defineComponent({
  name: "BaseGrid",
  props: {},
  components: {
    Navigation,
    Profile,
    Knows,
    Trending,
  },
});
</script>

<style scoped lang="scss"></style>
