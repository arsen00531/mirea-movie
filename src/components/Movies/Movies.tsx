import type { TMovie } from "../../types/movie"
import Movie from "../Movie/Movie"

function Movies({ movies }: { movies: TMovie[] }) {
  return (
    <div className="movies">
      {
        movies.length ? (
          movies.map((movie) => (
            <Movie key={movie.imdbID} {...movie} />
          ))
        ) : (
          <h4>Not found</h4>
        )
      }
    </div>
  )
}

export default Movies
