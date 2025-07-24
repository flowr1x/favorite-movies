import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { MovieDetails } from '@/types/index.ts'

export const useMovieStore = defineStore('movieStore', () => {
  const state = ref(2)
  const movies = ref<MovieDetails[]>([
    {
      Title: 'Blade Runner 2049',
      Year: '2017',
      Rated: 'R',
      Released: '06 Oct 2017',
      Runtime: '164 min',
      Genre: 'Action, Drama, Mystery',
      Director: 'Denis Villeneuve',
      Writer: 'Hampton Fancher, Michael Green, Philip K. Dick',
      Actors: 'Harrison Ford, Ryan Gosling, Ana de Armas',
      Plot: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
      Language: 'English',
      Country: 'United States, Canada, Spain',
      Awards: 'Won 2 Oscars. 100 wins & 164 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg',
      Ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '8.0/10',
        },
        {
          Source: 'Rotten Tomatoes',
          Value: '88%',
        },
        {
          Source: 'Metacritic',
          Value: '81/100',
        },
      ],
      Metascore: '81',
      imdbRating: '8.0',
      imdbVotes: '720,813',
      imdbID: 'tt1856101',
      Type: 'movie',
      DVD: 'N/A',
      BoxOffice: '$92,071,675',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Crime',
      Year: '2021–',
      Rated: 'TV-MA',
      Released: '24 Nov 2021',
      Runtime: '1 min',
      Genre: 'Crime, Drama, Mystery',
      Director: 'N/A',
      Writer: 'Irvine Welsh, Dean Cavanagh',
      Actors: 'Dougray Scott, Joanna Vanderham, Ken Stott',
      Plot: 'When an Edinburgh schoolgirl is abducted, DI Ray Lennox investigates her disappearance whilst confronting his own past trauma.',
      Language: 'English',
      Country: 'United Kingdom',
      Awards: '2 wins total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYzcyN2U2NzAtMGU5NS00ZDI0LTlkNmUtNmY4MGMwNWQxNTI2XkEyXkFqcGc@._V1_SX300.jpg',
      Ratings: [{ Source: 'Internet Movie Database', Value: '7.2/10' }],
      Metascore: 'N/A',
      imdbRating: '7.2',
      imdbVotes: '7,208',
      imdbID: 'tt12759778',
      Type: 'series',
      totalSeasons: '2',
      Response: 'True',
    },
  ])
  return { state }
})
