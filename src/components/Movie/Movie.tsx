import type { TMovie } from "../../types/movie"

function Movie({ Title, Year, imdbID, Type, Poster }: TMovie) {
  return (
    <div id={imdbID} className="movie card">
      <div className="card-image waves-effect waves-block waves-light">
        {
          Poster === "N/A" ? (
            <img
              src={`https://via.placeholder.com/300x400?text=${Title}`}
              alt="Poster"
              className="activator"
            />
          ) :
            <img src={Poster} alt="Poster" className="activator" />
        }
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{Title}</span>
        <p>{Year} <span className="right">{Type}</span></p>
      </div>
    </div>
  )
}

export default Movie
