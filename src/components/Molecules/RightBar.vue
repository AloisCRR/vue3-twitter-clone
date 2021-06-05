<template>
  <div class="sx:hidden flex flex-col flex-right-bar">
    <search-bar />
    <cell-container :text="'Tal vez te guste'">
      <user-cell :following="true" class="hover:bg-twitter-light">
        <no-fill-button class="my-auto" :text="'Seguir'" />
      </user-cell>
    </cell-container>
    <cell-container :text="'Tendencias para ti'">
      <trending-cell />
    </cell-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/Atoms/SearchBar.vue';
import CellContainer from '@/components/Molecules/CellContainer.vue';
import UserCell from '@/components/Atoms/UserCell.vue';
import TrendingCell from '@/components/Atoms/TrendingCell.vue';
import NoFillButton from '@/components/Atoms/NoFillButton.vue';

export default defineComponent({
  name: 'RightBar',
  props: {},
  components: {
    SearchBar,
    CellContainer,
    UserCell,
    NoFillButton,
    TrendingCell
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
