

function Posters ({movies}) {

  let moviePosters = movies.map((item, index) => {
    return (
      <img src={item.poster}/>
    )
  })

  return (
    <>
      {moviePosters}
    </>
  )
}

export default Posters;