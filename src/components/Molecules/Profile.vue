<template>
  <div
    class="border-l border-r border-gray-800 flex flex-col row-span-3 col-span-2"
  >
    <SectionName />
    <ProfileBanner />
    <ProfileInfo />
    <TabList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionName from "@/components/Atoms/SectionName.vue";
import TabList from "@/components/Molecules/TabList.vue";
import ProfileBanner from "@/components/Atoms/ProfileBanner.vue";
import ProfileInfo from "@/components/Molecules/ProfileInfo.vue";

export default defineComponent({
  name: "Profile",
  props: {},
  components: {
    SectionName,
    ProfileBanner,
    ProfileInfo,
    TabList,
  },
});
</script>

<style scoped lang="scss"></style>
