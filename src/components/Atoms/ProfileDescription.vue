<template>
  <div class="px-3 pb-3 text-twitter-gray">
    <div>
      <div class="font-bold text-white text-xl">Alois</div>
      <div>@AloisCRR</div>
    </div>
    <div class="my-2 text-white">Emoji</div>
    <div>
      <div class="flex">
        <div class="mr-3">
          <Location w="18" h="18" />
          Panama
        </div>
        <div>
          <Birthday w="18" h="18" />
          Fecha de nacimiento: 10 de junio de 1999
        </div>
      </div>
      <div>
        <Calendar w="18" h="18" />
        Se unió en febrero de 2013
      </div>
      <div class="flex mt-2">
        <div class="mr-4">
          <strong class="mr-1 text-white">148</strong>
          <span>Siguiendo</span>
        </div>
        <div>
          <strong class="mr-1 text-white">68</strong>
          <span>Seguidores</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Location from 'vue-ionicons/dist/md-pin.vue';
import Calendar from 'vue-ionicons/dist/md-calendar.vue';
import Birthday from 'vue-ionicons/dist/ios-gift.vue';

export default defineComponent({
  name: 'ProfileDescription',
  props: {},
  components: {
    Location,
    Calendar,
    Birthday
  }
});
</script>

<style scoped></style>
