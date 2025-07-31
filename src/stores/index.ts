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
    return movies.value.filter((movie) =>
      movie.title.toLowerCase().includes(search.value.toLowerCase()),
    )
  })

  function changeStateWatched(currentMovie: Movie) {
    const index = movies.value.findIndex((movie) => movie.id === currentMovie.id)
    movies.value[index].is_watched = !movies.value[index].is_watched
  }

  async function getMovies() {
    const url =
      'https://api.themoviedb.org/3/search/movie?query=%20Hate&include_adult=false&language=en-US&page=1'
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY_TMDB}`,
      },
    }

    try {
      const response = await fetch(url, options)
      const json = await response.json()
      console.log(json)
      movies.value = json
    } catch (e) {
      console.error(e)
    }
  }

  return {
    movies,
    baseURL,
    moviesWatched,
    changeStateWatched,
    search,
    moviesSearchSort,
    isLoader,
    getMovies,
  }
})
