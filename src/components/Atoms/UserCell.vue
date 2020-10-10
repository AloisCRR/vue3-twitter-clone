<template>
  <button
    type="button"
    class="border-t border-gray-800 p-4 flex w-full text-left justify-between focus:outline-none hover:bg-twitter-light transition duration-300 ease-in-out"
  >
    <div class="flex">
      <rounded-image
        :source="'https://pbs.twimg.com/profile_images/975748260689338368/L9oiNv4I_400x400.jpg'"
        :width="49"
        :height="49"
      />
      <div class="">
        <span class="font-semibold ml-3 block hover:underline"
          >Alois Carrera</span
        >
        <span class="ml-3 mr-2 text-twitter-gray">@AloisCRR</span>
        <span class="px-2 bg-twitter-light text-twitter-gray rounded-md text-sm"
          >Te sigue</span
        >
      </div>
    </div>
    <no-fill-button class="my-auto" :text="'Seguir'" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RoundedImage from "@/components/Atoms/RoundedImage.vue";
import NoFillButton from "@/components/Atoms/NoFillButton.vue";

export default defineComponent({
  name: "UserCell",
  props: {},
  components: {
    RoundedImage,
    NoFillButton,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
