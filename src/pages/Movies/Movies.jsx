import API from 'services/movieDatabaseAPI';
import { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [query, setQuery] = useState(searchQuery);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getSearhMovie() {
      try {
        const trendingMovies = await API.searchMovies(query);

        if (!trendingMovies.length) {
          return;
        }

        setMovies([...trendingMovies]);
      } catch (error) {
        console.log(error.message);
      } finally {
        // setIsLoading(false);
      }
    }
    getSearhMovie();
  }, [query]);

  const handleFormSubmit = query => {
    setQuery(query);
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <SearchForm query={query} onSubmit={handleFormSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
