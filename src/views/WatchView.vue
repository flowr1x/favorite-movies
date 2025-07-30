<script setup lang="ts">
import MoviesList from '@/components/MoviesList.vue'
import { useMovieStore } from '@/stores'
import { storeToRefs } from 'pinia'

const movieStore = useMovieStore()
const { moviesWatched } = storeToRefs(movieStore)
</script>

<template>
  <h1>List Watched Movies</h1>
  <div v-if="!moviesWatched.length">List Empty</div>
  <MoviesList :movies="moviesWatched" />
</template>

<style scoped lang="scss"></style>
