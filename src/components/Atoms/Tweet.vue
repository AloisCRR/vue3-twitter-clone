<template>
  <button
    type="button"
    class="text-white flex p-3 text-left focus:outline-none hover:bg-twitter-hoverTweet transition duration-300 ease-in-out border-gray-800 border-t-2 last:border-b-8"
  >
    <div class="mr-3">
      <rounded-image
        :width="93"
        :height="93"
        :source="
          'https://pbs.twimg.com/profile_images/975748260689338368/L9oiNv4I_400x400.jpg'
        "
      />
    </div>
    <div>
      <strong>Alois </strong>
      <span class="text-twitter-gray">@AloisCRR · </span>
      <span class="text-twitter-gray">25 dic. 2019</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        corrupti minus voluptatibus, assumenda ex tempora laboriosam consequatur
        dignissimos eos temporibus.
      </p>
      <div class="flex justify-around mt-3">
        <ChatBubble w="20" h="20" class="p-0" />
        <Retweet w="20" h="20" class="p-0" />
        <Like w="20" h="20" class="p-0" />
        <Share w="20" h="20" class="p-0" />
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RoundedImage from '@/components/Atoms/RoundedImage.vue';
import ChatBubble from 'vue-ionicons/dist/md-chatbubbles.vue';
import Retweet from 'vue-ionicons/dist/md-repeat.vue';
import Like from 'vue-ionicons/dist/md-heart-empty.vue';
import Share from 'vue-ionicons/dist/md-share.vue';

export default defineComponent({
  name: 'Tweet',
  props: {},
  components: {
    RoundedImage,
    ChatBubble,
    Retweet,
    Like,
    Share
  }
});
</script>

<style scoped></style>
