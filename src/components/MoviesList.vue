<script setup lang="ts">
import BaseButton from '@/components/UI/BaseButton.vue'
import { useMovieStore } from '@/stores'

const movieStore = useMovieStore()
</script>

<template>
  <ul class="movies">
    <li></li>
  </ul>
</template>

<style scoped lang="scss"></style>
