import { createAction, handleActions } from 'redux-actions';
import initialGenreSelectState from '../InitialStates/genrePageState';

// create constants
export const GET_GENRE_PAGE = 'GET_GENRE_PAGE';

// create actions
export const getGenrePage = createAction(GET_GENRE_PAGE);

export const actions = {
  getGenrePage
};

// create reducers
export default handleActions({
  [GET_GENRE_PAGE]: (state, { payload }) => Object.assign({}, state, payload)
}, initialGenreSelectState);
