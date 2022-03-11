import { API_KEY, API_URL, ENDPOINTS } from './settings'
import axios from 'axios';
  
export default function getMovies ({ page = 1 } = {}) {
    const apiURL = `${API_URL}${ENDPOINTS.top_rated}?api_key=${API_KEY}&language=en-US&page=${page}`

    /**
     * Parse results from the API response
     * @param {*} apiResponse 
     * @returns 
     */
    const fromApiResponseToMovies = apiResponse => {
        const {results = []} = apiResponse

        if (Array.isArray(results)) {
            const movies = results.map(movie => {
                const { id, title, poster_path, vote_average } = movie
                const posterUrl = `https://image.tmdb.org/t/p/w300${poster_path}`
                return { id, title, posterUrl, vote_average }
            })
            
            return movies
        }
        return []
    }

    return axios.get(apiURL, {
            params: {
                api_key: API_KEY,
            },
        }).then((res) => res.data)
        .then(fromApiResponseToMovies)
}