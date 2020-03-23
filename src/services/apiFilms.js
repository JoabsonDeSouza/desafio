import axios from './api';

const apiKey = 'api_key=6302949d7afd94f9edd948caf36b33c2';
const language = 'language=pt-BR';

export const GetFilmsDiscover = page => {
  const url = `discover/movie?${apiKey}&${language}&page=${page}`;
  return axios.get(url);
};

export const GetFilmsTrending = page => {
  const url = `trending/movie/week?${apiKey}&${language}&page=${page}`;
  return axios.get(url);
};

export const GetGenders = () => {
  const url = `genre/movie/list?${apiKey}&${language}`;
  return axios.get(url);
};
