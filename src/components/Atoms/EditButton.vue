<template>
  <button
    type="button"
    class="hover:bg-twitter-hover font-bold text-twitter-normal transition duration-300 ease-in-out p-2 px-3 border border-twitter-normal rounded-full mr-3 mt-3 focus:outline-none self-end"
  >
    Editar perfil
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EditButton",
  props: {},
});
</script>

<style scoped lang="scss"></style>
