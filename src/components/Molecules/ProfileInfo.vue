<template>
  <div class="flex flex-col">
    <NoFillButton :text="'Editar perfil'" class="mr-3 mt-3" />
    <ProfileDescription />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NoFillButton from "@/components/Atoms/NoFillButton.vue";
import ProfileDescription from "@/components/Atoms/ProfileDescription.vue";

export default defineComponent({
  name: "ProfileInfo",
  props: {},
  components: {
    NoFillButton,
    ProfileDescription,
  },
});
</script>

<style scoped lang="scss"></style>
