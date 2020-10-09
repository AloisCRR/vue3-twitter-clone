<template>
  <button
    type="button"
    class="bg-twitter-normal hover:bg-twitter-buttonhover transition duration-300 ease-in-out rounded-full mx-3 text-white font-bold p-4 mt-4 focus:outline-none"
  >
    Twittear
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TweetButton",
  props: {},
});
</script>

<style scoped lang="scss"></style>
