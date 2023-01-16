import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import API from 'services/movieDatabaseAPI';
import picturePathPlace from 'helpers/placeholder';
import genresList from 'helpers/genresList';
import GoBackBtn from 'components/GoBackBtn';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieDetails = await API.getMovieDetails(Number(movieId));

        if (!movieDetails) {
          return;
        }
        setMovieDetails({ ...movieDetails });
      } catch (error) {
        console.log(error.message);
      } finally {
        // setStatus('resolved');
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
  } = movieDetails;

  const releaseYear = new Date(release_date).getFullYear();
  const userScore = Math.round(vote_average * 10);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <GoBackBtn to={backLinkHref}>Go back</GoBackBtn>
      <div>
        <div>
          <img src={picturePathPlace(poster_path)} alt={original_title} />
        </div>
        <div>
          <h2>
            {original_title} ({releaseYear})
          </h2>
          <p>User Score: {userScore} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresList(genres)}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
