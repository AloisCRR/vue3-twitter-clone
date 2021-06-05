<template>
  <button
    type="button"
    class="bg-twitter-primary hover:bg-twitter-buttonHover transition duration-300 ease-in-out rounded-full text-white font-bold p-4 mt-4 focus:outline-none xl:mx-5"
  >
    <span class="sx:hidden xl:inline-block">Twittear</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TweetButton',
  props: {}
});
</script>

<style scoped></style>
