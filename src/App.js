import { useEffect, useState } from 'react';
import './App.css';
import Posters from'./Components/Posters'

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    async function fetchMovies() {
      await fetch('http://localhost:3001/movies')
      .then((response) => response.json())
      .then((data) => {setMovies(data) })
    }
    fetchMovies();
  }, []);

  return (
    <div className="App">
        {/* Header */} <header className="container-fluid"><h1>GMDB</h1></header>
        {/* Navbar */} <div className="navbar"></div>

            {/* Body */} <div className="container-fluid body">
                  {/* Main content*/} <div className = "main-content">
                    <Posters movies={movies}/>
                  </div>
            </div>

        {/* Footer */} <footer className="container-fluid">footer</footer>
  </div>
  );
}

export default App;
