import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Posters from'./Components/Posters'
import Navbar from'./Components/Navbar'
import Details from'./Components/Details'



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
    <Router>
      <Switch>
          <div className="App">
              {/* Navbar */} <div className="navbar"><Navbar/></div>

                  {/* Body */} <div className="container-fluid body">
                        {/* Main content*/} <div className = "main-content">
                          {/* <Route exact path="/" render={(movies) => (<Posters movies={movies}/>)}/> */}

                          <Route exact path="/"><Posters movies={movies}/></Route>
                          <Route exact path="/movies/:id"><Details movies={movies}/></Route>


                          {/* <Route exact path="/movies/:id" component={Details movies={movies}}/> */}
                        </div>
                  </div>

              {/* Footer */} <footer className="container-fluid">footer</footer>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
