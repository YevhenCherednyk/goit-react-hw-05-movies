import MoviesList from 'components/MoviesList';
import { useState, useEffect } from 'react';
import API from 'services/movieDatabaseAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrendMovies() {
      try {
        const { results } = await API.getTrendMovies();
        if (!results.length) {
          return;
        }
        setMovies([...results]);
      } catch (error) {
        console.log(error.message);
      }
    }
    getTrendMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
