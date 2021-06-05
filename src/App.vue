<template>
  <main class="md:container md:mx-auto flex min-h-screen">
    <navigation />
    <profile />
    <right-bar />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from './components/Molecules/Navigation.vue';
import RightBar from './components/Molecules/RightBar.vue';
import Profile from './components/Molecules/Profile.vue';

export default defineComponent({
  name: 'App',
  props: {},
  components: { Navigation, RightBar, Profile }
});
</script>

<style scope>
#app {
  background-color: #15202b;
}
</style>
