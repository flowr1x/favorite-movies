<script setup lang="ts">
import BaseFormWrapper from '@/components/UI/BaseFormWrapper.vue'
import BaseInputModel from '@/components/UI/BaseInput.vue'
import BaseLabel from '@/components/UI/BaseLabel.vue'
import { useMovieStore } from '@/stores'

const movieStore = useMovieStore()
</script>

<template>
  <form action="#" class="form form__search">
    <BaseFormWrapper>
      <BaseInputModel id="text" v-model="movieStore.search" />
      <BaseLabel>Search</BaseLabel>
    </BaseFormWrapper>
  </form>
</template>

<style scoped lang="scss">
.form__search {
  margin-bottom: 24px;
}
</style>
