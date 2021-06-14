import { Link } from 'react-router-dom'

function Posters ({movies}) {

  let moviePosters = movies.map((item, index) => {
    return (
      <Link to={`/movies/${index}`}><img src={item.poster} alt={item.title} onClick={showDetails} name={item.title}/></Link>
    )
  })

function showDetails() {

}

  return (
    <>
      {moviePosters}
    </>
  )
}

export default Posters;