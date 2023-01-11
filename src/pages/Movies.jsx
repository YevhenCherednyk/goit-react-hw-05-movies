import API from 'services/movieDatabaseAPI';
import { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function getSearhMovie() {
      try {
        const { results } = await API.searchMovies(query);
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
    getSearhMovie();
  }, [query]);

  const handleFormSubmit = query => {
    setQuery(query);
  };

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
