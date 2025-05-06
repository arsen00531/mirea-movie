import { useEffect, useState } from "react"
import movieAPI from "../../api/movie"
import type { TMovie, TMovieTypes } from "../../types/movie"
import Movies from "../../components/Movies/Movies"
import Preloader from "../../components/Preloader/Preloader"
import Search from "../../components/Search/Search"

function Main() {
  const [movies, setMovies] = useState<TMovie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    searchMatrix()
  }, [])

  const searchMatrix = async () => {
    const moviesResponse = await movieAPI.searchMatrix()
    setMovies(moviesResponse ?? [])
    setLoading(false)
  }

  const searchMovies = async (search: string, type?: TMovieTypes) => {
    const moviesResponse = await movieAPI.searchMovies(search || "matrix", type)
    setMovies(moviesResponse ?? [])
    setLoading(false)
  }

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} setLoading={setLoading} />
      {
        loading ? <Preloader /> : <Movies movies={movies} />
      }
    </main>
  )
}

export default Main