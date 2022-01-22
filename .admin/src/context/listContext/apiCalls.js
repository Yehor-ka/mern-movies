import axios from 'axios';
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from './ListActions';

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const { data } = await axios.get('/lists', {
      headers: { token: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}` },
    });
    dispatch(getListsSuccess(data));
  } catch (error) {
    dispatch(getListsFailure());
  }
};

export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const { data } = await axios.post('/lists', list, {
      headers: { token: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}` },
    });
    dispatch(createListSuccess(data));
  } catch (error) {
    dispatch(createListFailure());
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete('/lists/' + id, {
      headers: { token: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}` },
    });
    dispatch(deleteListSuccess(id));
  } catch (error) {
    dispatch(deleteListFailure());
  }
};
