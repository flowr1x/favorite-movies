<script setup lang="ts">
import MoviesList from '@/components/MoviesList.vue'
import { useMovieStore } from '@/stores'
import { storeToRefs } from 'pinia'

const movieStore = useMovieStore()
const { moviesWatched } = storeToRefs(movieStore)
</script>

<template>
  <h1>List Movies</h1>
  <h2>List Movies Watched</h2>
  <div
    v-if="!moviesWatched.length"
    class="empty"
  >
    List Empty
  </div>
  <MoviesList :movies="moviesWatched" />
  <h2>All List Movies</h2>
  <MoviesList :movies="movieStore.movies" />
  <div
    v-if="!movieStore.movies.length"
    class="empty"
  >
    List Empty
  </div>
</template>

<style scoped lang="scss">
.empty {
  color: var(--primary);
  font-size: 24px;
  font-weight: 600;
}
</style>
