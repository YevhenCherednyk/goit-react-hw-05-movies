import MoviesList from 'components/MoviesList';
import { useState, useEffect } from 'react';
import API from 'services/movieDatabaseAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const trendingMovies = await API.getTrendMovies();
        if (!trendingMovies) {
          return;
        }
        setMovies([...trendingMovies]);
      } catch (error) {
        console.log(error.message);
      } finally {
        // setStatus('resolved');
      }
    }
    fetchTrendMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;
