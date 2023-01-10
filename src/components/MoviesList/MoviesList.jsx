import { Box } from 'components/Layout/Box';
import { NavLink } from 'react-router-dom';

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

export default MoviesList;
