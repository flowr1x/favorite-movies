import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Movie } from '@/types/index.ts'

export const useMovieStore = defineStore('movieStore', () => {
  const state = ref(2)
  const movies = ref<Movie[]>([
    {
      adult: false,
      backdrop_path: '/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg',
      genre_ids: [14, 10751, 28],
      id: 1087192,
      original_language: 'en',
      original_title: 'How to Train Your Dragon',
      overview:
        'On the rugged isle of Berk, where Vikings and dragons have been bitter enemies for generations, Hiccup stands apart, defying centuries of tradition when he befriends Toothless, a feared Night Fury dragon. Their unlikely bond reveals the true nature of dragons, challenging the very foundations of Viking society.',
      popularity: 904.7178,
      poster_path: '/41dfWUWtg1kUZcJYe6Zk6ewxzMu.jpg',
      release_date: '2025-06-06',
      title: 'How to Train Your Dragon',
      video: false,
      vote_average: 8.091,
      vote_count: 1196,
    },
    {
      adult: false,
      backdrop_path: '/cEQMqB3ahd4mfeUN6VGC0ouVnZZ.jpg',
      genre_ids: [28, 878, 53],
      id: 1071585,
      original_language: 'en',
      original_title: 'M3GAN 2.0',
      overview:
        "After the underlying tech for M3GAN is stolen and misused by a powerful defense contractor to create a military-grade weapon known as Amelia, M3GAN's creator Gemma realizes that the only option is to resurrect M3GAN and give her a few upgrades, making her faster, stronger, and more lethal.",
      popularity: 608.4451,
      poster_path: '/oekamLQrwlJjRNmfaBE4llIvkir.jpg',
      release_date: '2025-06-25',
      title: 'M3GAN 2.0',
      video: false,
      vote_average: 7.66,
      vote_count: 462,
    },
  ])
  return { state }
})
