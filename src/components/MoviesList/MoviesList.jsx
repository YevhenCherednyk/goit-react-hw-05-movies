import { Box } from 'components/Layout/Box';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <Box as="ul">
      {movies.map(({ id, title }) => {
        return (
          <Box as="li" key={id}>
            <NavLink to={`/movies/${id}`}>{title}</NavLink>
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
