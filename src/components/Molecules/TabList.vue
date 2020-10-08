<template>
  <div class="flex">
    <SectionButton
      v-for="(section, index) in state.sec"
      :key="index"
      @click="selected(index)"
      :text="section"
      :idx="index"
      :active="state.selected"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import SectionButton from "@/components/Atoms/TabButton.vue";

export default defineComponent({
  name: "TabList",
  props: {},
  components: {
    SectionButton,
  },
  setup() {
    const state = reactive({
      sec: ["Tweets", "Tweets y respuestas", "Fotos y videos", "Me gusta"],
      selected: 0,
    });

    function selected(idx: number) {
      state.selected = idx;
    }

    return {
      state,
      selected,
    };
  },
});
</script>

<style scoped lang="scss"></style>
