import { useParams } from 'react-router-dom'

function Details ({movies}) {
  let { id } = useParams();
  // let movieIndex = movies.indexOf(movies.movieId)
  let movie = movies[id]

  return (
    <>
      <div>Title: {movie.title}</div>
      <div>{movie.released}</div>
      <div>{movie.genre}</div>
      <div>{movie.plot}</div>
    </>
  )
}

export default Details;