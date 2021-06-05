<template>
  <button
    type="button"
    class="hover:bg-twitter-hover border-t border-gray-800 p-4 flex items-center w-full text-left justify-between focus:outline-none transition duration-300 ease-in-out"
  >
    <div class="flex">
      <rounded-image
        :source="
          'https://pbs.twimg.com/profile_images/975748260689338368/L9oiNv4I_400x400.jpg'
        "
        :width="49"
        :height="49"
      />
      <div>
        <span class="font-semibold ml-3 block hover:underline"
          >Alois Carrera</span
        >
        <span class="ml-3 mr-2 text-twitter-gray">@AloisCRR</span>
        <span
          v-if="following"
          class="px-2 bg-twitter-light text-twitter-gray rounded-md text-sm"
          >Te sigue</span
        >
      </div>
    </div>
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import RoundedImage from '@/components/Atoms/RoundedImage.vue';

export default defineComponent({
  name: 'UserCell',
  props: {
    following: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  components: {
    RoundedImage
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
