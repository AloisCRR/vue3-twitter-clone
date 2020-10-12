<template>
  <div
    id="profile"
    class="flex flex-col border-l border-r border-gray-800 mr-8 overflow-y-auto"
  >
    <SectionName />
    <ProfileBanner />
    <ProfileInfo />
    <TabList />
    <Tweet />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionName from "@/components/Atoms/SectionName.vue";
import TabList from "@/components/Molecules/TabList.vue";
import ProfileBanner from "@/components/Atoms/ProfileBanner.vue";
import ProfileInfo from "@/components/Molecules/ProfileInfo.vue";
import Tweet from "@/components/Atoms/Tweet.vue";

export default defineComponent({
  name: "Profile",
  props: {},
  components: {
    SectionName,
    ProfileBanner,
    ProfileInfo,
    TabList,
    Tweet,
  },
});
</script>

<style scoped lang="scss">
div::-webkit-scrollbar {
  display: none;
}

div {
  scrollbar-width: none;
}

#profile {
  flex: 5;
  min-width: 600px;
}

@media (max-width: 1024px) {
  #profile {
    margin: 0;
  }
}
</style>
