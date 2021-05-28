import {combineReducers} from 'redux';
import {popularMovieReducer} from './movies/popular';
import {recommendedMovieReducer} from './movies/recommended';

export default combineReducers({
  popularMovieReducer,
  recommendedMovieReducer,
});
