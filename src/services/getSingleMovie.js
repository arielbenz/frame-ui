import { API_KEY, API_URL } from './settings'

const fromApiResponseToMovie = apiResponse => {
    const { data } = apiResponse
    const { id, original_title, poster_path } = data
    const { poster } = `https://www.themoviedb.org/t/p/w1280${poster_path}`
    return { id, original_title, poster }
  }
  
export default function getSingleGif ({ id }) {
    const apiURL = `${API_URL}/movie/${id}?api_key=${API_KEY}`
  
    return fetch(apiURL)
      .then(res => res.json())
      .then(fromApiResponseToMovie)
  }