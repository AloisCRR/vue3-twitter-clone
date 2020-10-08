<template>
  <div class="flex flex-col row-span-3">
    <NavButton
      v-for="(options, index) in state.nav"
      :key="index"
      @click="selected(index)"
      :text="options"
      :active="state.selected"
      :idx="index"
    />
    <TweetButton />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
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
    const state = reactive({
      nav: [
        "Inicio",
        "Explorar",
        "Notifiaciones",
        "Mensajes",
        "Guardados",
        "Listas",
        "Perfil",
        "Más opciones",
      ],
      selected: 0,
    });

    function selected(idx: number) {
      state.selected = idx;
    }

    return {
      state,
      selected,
    };
  },
});
</script>

<style scoped lang="scss"></style>
