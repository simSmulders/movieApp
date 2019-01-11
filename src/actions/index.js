import axios from 'axios';

const API_KEY = 'ea3a5d28';
const ROOT_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

export const FETCH_MOVIE = 'FETCH_MOVIE';

export function fetchMovie(movie) {
  const URL = `${ROOT_URL}&t=${movie}&plot=full`
  const request = axios.get(URL)

  return {
    type: FETCH_MOVIE,
    payload: request
  }
}

export const FETCH_SHORT = 'FETCH_SHORT';

export function fetchShort(movie) {
  const URL = `${ROOT_URL}&t=${movie}`
  const request = axios.get(URL)

  return {
    type: FETCH_SHORT,
    payload: request
  }
}