<script setup lang="ts">
import MoviesList from '@/components/MoviesList.vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import { useMovieStore } from '@/stores'

const movieStore = useMovieStore()
</script>

<template>
  <div class="control-btns">
    <BaseButton>Watched</BaseButton>
    <BaseButton>Search</BaseButton>
  </div>
  <MoviesList />
</template>

<style scoped lang="scss">
.control-btns {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
}
</style>
