<template>
  <button
    type="button"
    class="flex items-center self-start mb-2 transition duration-150 ease-in-out p-3 px-4 text-xl font-bold text-white rounded-full hover:bg-twitter-hover hover:text-twitter-primary focus:outline-none"
    :class="{ 'text-twitter-primary': idx == active }"
  >
    <Home v-if="text == 'Inicio'" w="30" h="30" />
    <Explore v-if="text == 'Explorar'" w="30" h="30" />
    <Notifications v-if="text == 'Notificaciones'" w="30" h="30" />
    <Messages v-if="text == 'Mensajes'" w="30" h="30" />
    <Saved v-if="text == 'Guardados'" w="30" h="30" />
    <List v-if="text == 'Listas'" w="30" h="30" />
    <Profile v-if="text == 'Perfil'" w="30" h="30" />
    <MoreOptions v-if="text == 'Más opciones'" w="30" h="30" />
    <span class="sx:hidden xl:inline-block ml-5">{{ text }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Home from 'vue-ionicons/dist/md-home.vue';
import Explore from 'vue-ionicons/dist/md-grid.vue';
import Notifications from 'vue-ionicons/dist/md-notifications-outline.vue';
import Messages from 'vue-ionicons/dist/md-mail.vue';
import Saved from 'vue-ionicons/dist/md-bookmark.vue';
import List from 'vue-ionicons/dist/md-list.vue';
import Profile from 'vue-ionicons/dist/md-person.vue';
import MoreOptions from 'vue-ionicons/dist/md-settings.vue';

export default defineComponent({
  name: 'NavButton',
  components: {
    Home,
    Explore,
    Notifications,
    Messages,
    Saved,
    List,
    Profile,
    MoreOptions
  },
  props: {
    text: {
      type: String as PropType<string>,
      required: true
    },
    active: {
      type: Number as PropType<number>
    },
    idx: {
      type: Number as PropType<number>
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
