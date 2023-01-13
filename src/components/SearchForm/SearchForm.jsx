import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit, query }) => {
  const [serchQuery, setSerchQuery] = useState(query);

  const handleChange = evt => {
    const { value } = evt.target;
    setSerchQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(serchQuery);

    reset();
  };

  const reset = () => {
    setSerchQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={serchQuery}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Search movie"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchForm;