<template>
  <div class="flex flex-col relative">
    <rounded-image
      class="absolute -top-16 left-6 p-1 bg-twitter-background"
      :source="
        'https://pbs.twimg.com/profile_images/975748260689338368/L9oiNv4I_400x400.jpg'
      "
    />
    <NoFillButton :text="'Editar perfil'" class="mr-3 mt-3" />
    <ProfileDescription />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoFillButton from '@/components/Atoms/NoFillButton.vue';
import ProfileDescription from '@/components/Atoms/ProfileDescription.vue';
import RoundedImage from '@/components/Atoms/RoundedImage.vue';

export default defineComponent({
  name: 'ProfileInfo',
  props: {},
  components: {
    NoFillButton,
    ProfileDescription,
    RoundedImage
  }
});
</script>

<style scoped></style>
