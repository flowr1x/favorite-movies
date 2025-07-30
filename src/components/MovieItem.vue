<script setup lang="ts">
import { defineProps } from 'vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import { useMovieStore } from '@/stores'
import type { Movie } from '@/types'

interface MovieItemProps {
  movie: Movie
}
const props = defineProps<MovieItemProps>()
const { movie } = props
const movieStore = useMovieStore()
</script>

<template>
  <li class="movies-item">
    <div class="movies-item__content">
      <div class="movies-item__poster">
        <img :src="movieStore.baseURL + movie.poster_path" alt="Movie Poster" />
      </div>
      <div class="movies-item__info">
        <h3 class="movies-item__title">{{ movie.title }}</h3>
        <div class="movies-item__original-title">
          {{ movie.original_title }}, {{ movie.release_date }}
        </div>
        <div class="movies-item__meta">Action, Animation, Drama</div>
        <div class="movies-item__overview">{{ movie.overview }}</div>
      </div>
    </div>
    <BaseButton v-if="movie.is_watched" @click="movieStore.changeStateWatched(movie)"
      >Unwatch</BaseButton
    >
    <BaseButton v-else @click="movieStore.changeStateWatched(movie)">Watch</BaseButton>
  </li>
</template>

<style scoped lang="scss">
@mixin bold-text {
  font-size: 24px;
  font-weight: 600;
}
.movies-item {
  display: flex;
  align-items: start;
  gap: 24px;
  padding: 16px;
  background-color: var(--content-bg-clr);
  border-radius: var(--content-border-radius);

  &::before {
    content: counter(list-item-counter) '.';
    counter-increment: list-item-counter;
    @include bold-text;
  }

  &__title {
    @include bold-text;
    margin-bottom: 12px;
  }
  &__content {
    display: flex;
    gap: 16px;
  }
  &__poster {
    flex: 0 0 100px;
    width: 100px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &__overview {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    line-height: 1.5em;
  }
}
</style>
