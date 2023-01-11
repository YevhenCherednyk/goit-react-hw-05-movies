import MoviesList from 'components/MoviesList';
import { useState, useEffect } from 'react';
import API from 'services/movieDatabaseAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrendMovies() {
      try {
        const { results } = await API.getTrendMovies();
        const trendingMovies = results.map(({ id, title }) => {
          return { id, title };
        });

        if (!results.length) {
          return;
        }
        setMovies([...trendingMovies]);
      } catch (error) {
        console.log(error.message);
      } finally {
        // setStatus('resolved');
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
