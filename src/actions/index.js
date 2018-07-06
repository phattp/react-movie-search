import axios from 'axios';

const API_KEY = 'thewdb';
const ROOT_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const FETCH_MOVIES = 'FETCH_MOVIES';

export function fetchMovies(movie) {
  const url = `${ROOT_URL}&s=${movie}`;
  const request = axios.get(url);

  // console.log('Request:', request);

  return {
    type: FETCH_MOVIES,
    payload: request
  }
}
