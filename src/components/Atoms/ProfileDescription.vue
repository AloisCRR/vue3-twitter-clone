<template>
  <div class="px-3 pb-3 text-twitter-textGray">
    <div>
      <div class="font-bold text-white">Usuario</div>
      <div>@AloisCRR</div>
    </div>
    <div class="my-1 text-white">Emoji</div>
    <div>
      <div class="flex">
        <div class="mr-3">Panama</div>
        <div>Fecha de nacimiento: 10 de junio de 1999</div>
      </div>
      <div>Se unió en febrero de 2013</div>
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileDescription",
  props: {},
  components: {},
});
</script>

<style scoped lang="scss"></style>
