import { defineStore } from 'pinia'
import type { Movie } from '@/types'
import { ref } from 'vue'
import { useMovieStore } from '.'

export const useSearchStore = defineStore('searchStore', () => {
  const movies = ref<Movie[]>([])
  const posterBaseURL = 'https://image.tmdb.org/t/p/w500/'
  const baseURL = 'https://api.themoviedb.org/3'
  const search = ref('')

  async function getMovies(search: string) {
    const url = `${baseURL}/search/movie?query=%20${search}&include_adult=false&language=en-US&page=1`
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
      movies.value = json.results
    } catch (e) {
      console.error(e)
    }
  }

  function addMovie(movie: Movie) {
    const movieStore = useMovieStore()
    movieStore.movies.push({ ...movie, is_watched: false })
  }
  return { getMovies, posterBaseURL, movies, search, addMovie }
})
