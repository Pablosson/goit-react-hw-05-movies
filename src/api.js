import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzBlNDdjNWMzZTI2NjJmYmYzMjQyN2QzMmE2YjY0ZSIsIm5iZiI6MTcyMTgzMzUyNC43MzYwMTQsInN1YiI6IjY2YTExNTZjYWM1NTZiZDRmMDAyMTcwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.os2ayDyJpEqLfKYDu-Gxf-5zMtrPE1qd6ehTklWvY90";

const headers = {
  accept: "application/json",
  Authorization: API_TOKEN,
};

export const fetchTrendingMovies = () => {
  return axios.get(`${BASE_URL}/trending/all/day`, {
    headers,
    params: {
      language: "en-US",
    },
  });
};

export const searchMovies = (query) => {
  return axios.get(`${BASE_URL}/search/movie`, {
    headers,
    params: {
      include_adult: "false",
      language: "en-US",
      page: "1",
      query,
    },
  });
};

export const fetchMovieDetails = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}`, {
    headers,
    params: {
      language: "en-US",
    },
  });
};

export const fetchMovieCast = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    headers,
    params: {
      language: "en-US",
    },
  });
};

export const fetchMovieReviews = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    headers,
    params: {
      language: "en-US",
      page: "1",
    },
  });
};
