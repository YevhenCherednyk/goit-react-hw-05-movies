import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/movieDatabaseAPI';
import photoPathPlace from 'helpers/photoPlaceholder';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    async function fetchMovieCredits() {
      try {
        const movieCast = await API.getMovieCredits(Number(movieId));

        if (!movieCast) {
          return;
        }
        setMovieCast([...movieCast]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovieCredits();
  }, [movieId]);

  if (!movieCast) {
    return null;
  }

  if (!movieCast.length) {
    return <p>We don't have any cast for this movies.</p>;
  }

  return (
    <ul>
      {movieCast.map(({ profile_path, name, character }) => {
        return (
          <li key={name}>
            <img src={photoPathPlace(profile_path)} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
