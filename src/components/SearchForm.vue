<script setup lang="ts">
import BaseFormWrapper from '@/components/UI/BaseFormWrapper.vue'
import BaseInputModel from '@/components/UI/BaseInput.vue'
import BaseLabel from '@/components/UI/BaseLabel.vue'
import { useSearchStore } from '@/stores/searchStore.ts'

const searchStore = useSearchStore()
</script>

<template>
  <form
    action="#"
    class="form form__search"
  >
    <BaseFormWrapper>
      <BaseInputModel
        id="text"
        v-model="searchStore.search"
        @input="searchStore.getMovies($event.target.value)"
      />
      <BaseLabel>Search</BaseLabel>
    </BaseFormWrapper>
  </form>
</template>

<style scoped lang="scss">
.form__search {
  margin-bottom: 24px;
}
</style>
