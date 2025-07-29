<script setup lang="ts">
import BaseButton from '@/components/UI/BaseButton.vue'
import { useMovieStore } from '@/stores'

const movieStore = useMovieStore()
</script>

<template>
  <ol class="movies-list">
    <li class="movies-item" v-for="i in 5" :key="i">
      <div class="movies-item__content">
        <div class="movies-item__poster">
          <img
            src="https://image.tmdb.org/t/p/w500//fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
            alt="Movie Poster"
          />
        </div>
        <div class="movies-item__info">
          <h3 class="movies-item__title">Интерстеллар</h3>
          <div class="movies-item__original-title">Intouchables, 2011</div>
          <div class="movies-item__meta">Action, Animation, Drama</div>
          <div class="movies-item__overview">
            With the price on his head ever increasing, John Wick uncovers a path to defeating The
            High Table. But before he can earn his freedom, Wick must face off against a new enemy
            with powerful alliances across the globe and forces that turn old friends into foes.
          </div>
        </div>
      </div>
    </li>
  </ol>
</template>

<style scoped lang="scss">
@mixin bold-text {
  font-size: 24px;
  font-weight: 600;
}

.movies-list {
  counter-reset: list-item-counter;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
