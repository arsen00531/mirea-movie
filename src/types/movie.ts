export type TMovie = {
  Title: string
  Year: number
  imdbID: string
  Type: string
  Poster: string
}

export type TMovieResponse = {
  Search: TMovie[] | undefined
}

export type TMovieTypes = "all" | "movie" | "series"

export const isMovieType = (type: string): type is TMovieTypes => {
  return ["all", "movie", "series"].includes(type);
};