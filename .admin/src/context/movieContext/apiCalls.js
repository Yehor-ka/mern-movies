import axios from 'axios';
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from './MovieActions';

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const { data } = await axios.get('/movies', {
      headers: { token: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}` },
    });
    dispatch(getMoviesSuccess(data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const { data } = await axios.post('/movies', movie, {
      headers: { token: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}` },
    });
    dispatch(createMovieSuccess(data));
  } catch (error) {
    dispatch(createMovieFailure());
  }
};

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete('/movies/' + id, {
      headers: { token: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}` },
    });
    dispatch(deleteMovieSuccess(id));
  } catch (error) {
    dispatch(deleteMovieFailure());
  }
};
