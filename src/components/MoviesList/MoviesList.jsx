import { Box } from 'components/Layout/Box';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Box as="ul">
      {movies.map(({ id, title }) => {
        return (
          <Box as="li" key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </Box>
        );
      })}
    </Box>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
