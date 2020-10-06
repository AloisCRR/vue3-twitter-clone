<template>
  <div class="flex flex-col row-span-3">
    <NavButton v-for="(options, index) in nav" :key="index" :text="options" />
    <TweetButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavButton from "@/components/Atoms/NavButton.vue";
import TweetButton from "@/components/Atoms/TweetButton.vue";

export default defineComponent({
  name: "Navigation",
  props: {},
  components: {
    NavButton,
    TweetButton,
  },
  setup() {
    const nav = [
      "Inicio",
      "Explorar",
      "Notifiaciones",
      "Mensajes",
      "Guardados",
      "Listas",
      "Perfil",
      "Más opciones",
    ];

    return {
      nav,
    };
  },
});
</script>

<style scoped lang="scss"></style>
