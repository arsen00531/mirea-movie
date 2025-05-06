import { useState } from "react"
import { isMovieType, type TMovieTypes } from "../../types/movie"

type Props = {
  searchMovies: (search: string, type?: TMovieTypes) => Promise<void>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function Search({ searchMovies, setLoading }: Props) {
  const [search, setSearch] = useState("")
  const [filterType, setFilterType] = useState<TMovieTypes>("all")

  const handleKeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setLoading(true)
      searchMovies(search, filterType)
    }
  }

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.dataset.type
    if (type && isMovieType(type)) {
      setLoading(true)
      setFilterType(type)
      searchMovies(search, type)
    }
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            className="validate"
            placeholder="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeys}
          />
          <button
            className="btn search-btn deep-purple accent-1"
            onClick={() => { setLoading(true); searchMovies(search, filterType) }}
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="type"
              className="with-gap"
              data-type="all"
              onChange={handleFilter}
              checked={filterType === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              type="radio"
              name="type"
              className="with-gap"
              data-type="movie"
              onChange={handleFilter}
              checked={filterType === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              type="radio"
              name="type"
              className="with-gap"
              data-type="series"
              onChange={handleFilter}
              checked={filterType === "series"}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Search