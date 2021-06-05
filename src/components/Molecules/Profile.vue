<template>
  <div
    class="flex flex-col flex-main-content border-l border-r border-gray-800 mx-4 overflow-y-auto"
  >
    <SectionName />
    <ProfileBanner />
    <ProfileInfo />
    <TabList />
    <Tweet />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SectionName from '@/components/Atoms/SectionName.vue';
import TabList from '@/components/Molecules/TabList.vue';
import ProfileBanner from '@/components/Atoms/ProfileBanner.vue';
import ProfileInfo from '@/components/Molecules/ProfileInfo.vue';
import Tweet from '@/components/Atoms/Tweet.vue';

export default defineComponent({
  name: 'Profile',
  props: {},
  components: {
    SectionName,
    ProfileBanner,
    ProfileInfo,
    TabList,
    Tweet
  }
});
</script>

<style scoped></style>
