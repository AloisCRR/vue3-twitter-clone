<template>
  <div class="flex flex-col flex-left-bar">
    <TwitterLogo w="35" h="35" class="text-white p-3" />
    <nav-button
      v-for="(options, index) in state.nav"
      :key="index"
      @click="selected(index)"
      :text="options"
      :active="state.selected"
      :idx="index"
    />
    <tweet-button />
    <user-cell
      class="mt-auto border-none text-white rounded-full py-2 mb-3 hover:bg-twitter-blue"
    >
      <More w="20" h="20" />
    </user-cell>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import NavButton from '@/components/Atoms/NavButton.vue';
import TweetButton from '@/components/Atoms/TweetButton.vue';
import UserCell from '@/components/Atoms/UserCell.vue';
import TwitterLogo from 'vue-ionicons/dist/logo-twitter.vue';
import More from 'vue-ionicons/dist/ios-more.vue';

export default defineComponent({
  name: 'Navigation',
  props: {},
  components: {
    NavButton,
    TweetButton,
    UserCell,
    TwitterLogo,
    More
  },
  setup() {
    const state = reactive({
      nav: [
        'Inicio',
        'Explorar',
        'Notificaciones',
        'Mensajes',
        'Guardados',
        'Listas',
        'Perfil',
        'Más opciones'
      ],
      selected: 0
    });

    function selected(idx: number) {
      state.selected = idx;
    }

    return {
      state,
      selected
    };
  }
});
</script>

<style scoped></style>
