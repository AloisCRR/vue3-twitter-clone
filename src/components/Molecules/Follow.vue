<template>
  <div
    class="bg-twitter-background row-span-2 col-span-3 rounded-xl text-white"
  >
    <div class="font-extrabold text-xl p-3">Tal vez te guste</div>
    <user-cell />
    <user-cell />
    <user-cell />
    <button
      type="button"
      class="w-full text-left p-4 border-t border-gray-800 text-twitter-primary transition duration-300 ease-in-out hover:bg-twitter-light rounded-b-xl focus:outline-none"
    >
      Mostrar más
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserCell from "@/components/Atoms/UserCell.vue";

export default defineComponent({
  name: "Follow",
  props: {},
  components: {
    UserCell,
  },
});
</script>

<style scoped lang="scss"></style>
