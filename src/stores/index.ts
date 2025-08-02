import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Movie } from '@/types/index.ts'

export const useMovieStore = defineStore('movieStore', () => {
  const baseURL = 'https://image.tmdb.org/t/p/w500'
  const search = ref('')
  const isLoader = ref(false)
  const movies = ref<Movie[]>([])
  const moviesWatched = computed(() => {
    return movies.value.filter((movie) => movie.is_watched)
  })
  const moviesSearchSort = computed(() => {
    return movies.value.filter((movie) => movie.title.toLowerCase().includes(search.value.toLowerCase()))
  })

  function changeStateWatched(currentMovie: Movie) {
    const index = movies.value.findIndex((movie) => movie.id === currentMovie.id)
    movies.value[index].is_watched = !movies.value[index].is_watched
  }
  function removeMovie(currentMovie: Movie) {
    const newMovies = movies.value.filter((movie) => movie.id != currentMovie.id)
    movies.value = newMovies
  }
  return {
    movies,
    baseURL,
    moviesWatched,
    changeStateWatched,
    search,
    moviesSearchSort,
    isLoader,
    removeMovie,
  }
})
