import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '19011014b9b53c4fd496d37c25f2b619';

async function getTrendMovies(page = 1) {
  const url = `trending/movie/day?api_key=${API_KEY}&page=${page}`;
  const response = await axios.get(url);
  return response.data;
}

async function searchMovies(query) {
  const url = `search/movie?api_key=${API_KEY}&language=en-US&query==${query}`;
  const response = await axios.get(url);

  return response.data;
}

async function moviesDetails(id) {
  const url = `/movie/${id}?api_key=${API_KEY}`;
  const response = await axios.get(url);

  return response.data;
}

const api = {
  getTrendMovies,
  searchMovies,
  moviesDetails,
};

export default api;
