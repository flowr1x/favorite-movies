<script setup lang="ts">
import MoviesList from '@/components/MoviesList.vue'
import SearchForm from '@/components/SearchForm.vue'
import { useMovieStore } from '@/stores'
import BaseLoader from '@/components/UI/BaseLoader.vue'

const movieStore = useMovieStore()
</script>

<template>
  <h1>Search Movies</h1>
  <SearchForm />
  <BaseLoader v-if="movieStore.isLoader" />
  <MoviesList :movies="movieStore.moviesSearchSort" />
</template>

<style scoped lang="scss">
.form__search {
  margin-bottom: 24px;
}
</style>
