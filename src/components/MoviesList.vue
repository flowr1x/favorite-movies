<script setup lang="ts">
import { defineProps } from 'vue'
import type { Movie } from '@/types'
import MovieItem from './MovieItem.vue'

interface MoviesListProps {
  movies: Movie[]
}
const props = defineProps<MoviesListProps>()
</script>

<template>
  <ol class="movies-list">
    <MovieItem v-for="movie in props.movies" :key="movie.id" :movie />
  </ol>
</template>

<style scoped lang="scss">
.movies-list {
  counter-reset: list-item-counter;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
