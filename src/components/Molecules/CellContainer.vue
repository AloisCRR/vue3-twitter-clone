<template>
  <div class="rounded-xl p-1 text-white mb-4 bg-twitter-background">
    <div class="font-extrabold text-xl p-3 border-b border-gray-700">
      {{ text }}
    </div>
    <slot />
    <button
      type="button"
      class="w-full text-left p-4 border-t border-gray-700 text-twitter-primary transition duration-300 ease-in-out hover:bg-twitter-light rounded-b-xl focus:outline-none"
    >
      Mostrar más
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'CellContainer',
  props: {
    text: {
      type: String as PropType<string>,
      default: 'Default'
    }
  },
  components: {}
});
</script>

<style scoped></style>
