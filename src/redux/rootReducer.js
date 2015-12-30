
import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import pageReducers from './modules/getPageActions';

export default combineReducers({
  router,
  pageReducers
});
