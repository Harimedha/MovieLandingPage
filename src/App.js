import './App.css';
import React, {useState, useMemo, useEffect} from 'react';
import Moviecarousel from './components/Moviecarousel';
import MainHeading from './components/MainHeading';
import Adventures from './components/AdventureMovies.json';
import Actions from './components/ActionMovies.json';
import Dramas from './components/DramaMovies.json';
import Crimes from './components/Crime.json';
import Trending from './components/Trending.json';
import MovieGenreHeading from './components/MovieGenreHeading';
// import Genres from '../src/genre.json';




function App() {

//const [genreState, setGenreState] = useState();
  return (
    <div className="App">

      <MainHeading></MainHeading>
      <MovieGenreHeading></MovieGenreHeading>    

      <Moviecarousel title= "Trending movies" moviedb={Trending}></Moviecarousel>          
      <Moviecarousel title= "Adventure movies" moviedb={Adventures}></Moviecarousel>       
      <Moviecarousel title="Drama Movies" moviedb={Dramas}></Moviecarousel>
      <Moviecarousel title="Action Movies" moviedb={Actions}></Moviecarousel>
      <Moviecarousel title= "Crime movies" moviedb={Crimes}></Moviecarousel> 

    </div>
  )
}

export default App;
