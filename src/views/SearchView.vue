<script setup lang="ts">
import MoviesList from '@/components/MoviesList.vue'
import BaseFormWrapper from '@/components/UI/BaseFormWrapper.vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import BaseLabel from '@/components/UI/BaseLabel.vue'
import { useMovieStore } from '@/stores'

const movieStore = useMovieStore()
</script>

<template>
  <form action="#" class="form form__search">
    <BaseFormWrapper>
      <BaseInput id="text" />
      <BaseLabel>Search</BaseLabel>
    </BaseFormWrapper>
  </form>

  <MoviesList />
</template>

<style scoped lang="scss">
.form__search {
  margin-bottom: 24px;
}
</style>
