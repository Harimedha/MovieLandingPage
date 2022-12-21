import './App.css';
import React, {useState, useMemo, useEffect} from 'react';
import Moviecarousel from './components/Moviecarousel';
import MainHeading from './components/MainHeading';
import Adventure from './components/AdventureMovies.json';
import Action from './components/ActionMovies.json';
import Drama from './components/DramaMovies.json';
import Crime from './components/Crime.json';
import Trending from './components/Trending.json';
import MovieGenreHeading from './components/MovieGenreHeading';

// import Genres from '../src/genre.json';

function App() {

const [genreValue, setGenreValue] = useState("All Genres");

  return (
    <div className="App">

      <MainHeading></MainHeading>
      <MovieGenreHeading setGenreValue={setGenreValue}> </MovieGenreHeading>  
      {/* <h2 style={{color:"white"}}>Selected Genre : {genreValue}</h2> */}
        
      <Moviecarousel title="Trending movies" moviedb={Trending}></Moviecarousel>
      <Moviecarousel title= "Adventure movies" moviedb={Adventure}></Moviecarousel>       
      <Moviecarousel title="Drama Movies" moviedb={Drama}></Moviecarousel>
      <Moviecarousel title="Action Movies" moviedb={Action}></Moviecarousel>
      <Moviecarousel title= "Crime movies" moviedb={Crime}></Moviecarousel> 
    </div>
  )
}

export default App;
