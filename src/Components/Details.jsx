import { useParams } from 'react-router-dom'

function Details ({movies}) {
  let { id } = useParams();

  return (
    <>
      {movies[id].title}
    </>
  )
}

export default Details;