<script setup lang="ts">
import MoviesList from '@/components/MoviesList.vue'
import SearchForm from '@/components/SearchForm.vue'
import { useSearchStore } from '@/stores/searchStore'
import BaseLoader from '@/components/UI/BaseLoader.vue'

const movieStore = useSearchStore()
</script>

<template>
  <h1>Search Movies</h1>
  <SearchForm />
  <BaseLoader v-if="movieStore.isLoader" />
  <MoviesList
    :movies="movieStore.movies"
    :isSearch="true"
  />
</template>

<style scoped lang="scss">
.form__search {
  margin-bottom: 24px;
}
</style>
