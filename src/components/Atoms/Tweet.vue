<template>
  <button
    type="button"
    class="text-white flex p-3 text-left focus:outline-none hover:bg-twitter-hoverTweet transition duration-300 ease-in-out border-gray-800 border-t-2 last:border-b-8"
  >
    <div class="mr-3">
      <img
        src="https://pbs.twimg.com/profile_images/975748260689338368/L9oiNv4I_400x400.jpg"
        alt="Profile photo"
        class="bg-white rounded-full"
        width="120"
        height="120"
      />
    </div>
    <div>
      <strong>Alois </strong>
      <span class="text-twitter-gray">@AloisCRR · </span>
      <span class="text-twitter-gray">25 dic. 2019</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        corrupti minus voluptatibus, assumenda ex tempora laboriosam consequatur
        dignissimos eos temporibus.
      </p>
      <div class="flex justify-around mt-3">
        <div>c</div>
        <div>r</div>
        <div>f</div>
        <div>s</div>
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tweet",
  props: {},
});
</script>

<style scoped lang="scss"></style>
