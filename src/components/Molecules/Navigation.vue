<template>
  <div id="navigation" class="flex flex-col">
    <NavButton
      v-for="(options, index) in state.nav"
      :key="index"
      @click="selected(index)"
      :text="options"
      :active="state.selected"
      :idx="index"
    />
    <TweetButton />
    <user-cell
      class="mt-auto border-none text-white rounded-full py-2 mb-3 hover:bg-twitter-hover"
    >
      <search />
    </user-cell>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import NavButton from "@/components/Atoms/NavButton.vue";
import TweetButton from "@/components/Atoms/TweetButton.vue";
import UserCell from "@/components/Atoms/UserCell.vue";
import Search from "@/components/Icons/Search.vue";

export default defineComponent({
  name: "Navigation",
  props: {},
  components: {
    NavButton,
    TweetButton,
    UserCell,
    Search,
  },
  setup() {
    const state = reactive({
      nav: [
        "Inicio",
        "Explorar",
        "Notificaciones",
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

<style scoped lang="scss">
#navigation {
  flex: 2;
  min-width: 255px;
}

@media (max-width: 1280px) {
  #navigation {
    padding: 0 0.5rem;
    flex: none;
  }
}
</style>
