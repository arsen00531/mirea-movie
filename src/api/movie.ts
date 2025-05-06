import axios from "axios"
import type { TMovieResponse, TMovieTypes } from "../types/movie"

class Movie {
  private apiKey: string = import.meta.env.VITE_API_KEY
  private basicPath: string = "https://www.omdbapi.com"

  async searchMatrix() {
    const response = await axios.get<TMovieResponse>(
      this.basicPath, {
      params: {
        apikey: this.apiKey,
        s: "matrix",
        type: ""
      }
    })
    console.log(response)

    return response.data.Search
  }

  async searchMovies(search: string, type: TMovieTypes = "all") {
    const response = await axios.get<TMovieResponse>(
      this.basicPath, {
      params: {
        apikey: this.apiKey,
        s: search,
        type: type !== "all" ? type : ""
      }
    })
    console.log(response)

    return response.data.Search
  }
}

const movieAPI = new Movie()
export default movieAPI