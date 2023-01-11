import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    const { value } = evt.target;
    setQuery(value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (!query.trim()) {
      return;
    }

    onSubmit(query.trim());

    reset();
  };

  const reset = () => {
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        value={query}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Search movie"
      ></input>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
