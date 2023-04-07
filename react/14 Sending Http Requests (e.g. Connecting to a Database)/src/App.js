import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import MovieList from './components/MoviesList';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  // function fetchMoviesHandler() {
  //   fetch('https://swapi.dev/api/films/').then(response => {
  //     return response.json();
  //   }).then(data => {
    
  const fetchMoviesHandler = useCallback (async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-2075b-default-rtdb.firebaseio.com/movies.json');
    //}
      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      const data = await response.json();

      const loadedMovies = [];

      for( const key in data) {
        loadedMovies.push({
          id: key,
          title:data[key].title,
          openingText : data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

        setMovies(loadedMovies);  
      //});
    }
   catch (error) {
     setError(error.message);
   }
   setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);


  async function addMovieHandler(movie) {
    const response = await fetch('https://react-http-2075b-default-rtdb.firebaseio.com/movies.json', {
      method : 'POST',
      body : JSON.stringify(movie),
       header: {
        'Conten-TYpe ': 'application/json'
       }
    });

    const data = await response.json();
    console.log(data);
  }
  

  let content = <p>Found no movies.</p>;

  if(movies.length > 0) {
    content = <MovieList movies={movies} />;
  }

  if(error){
    content =<p>{error}</p>;
  }

  if (isLoading){
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>  
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */ content}
      </section>
    </React.Fragment>
  );
}

export default App;
