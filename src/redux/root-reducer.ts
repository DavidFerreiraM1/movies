import {combineReducers} from 'redux';
import {popularMovieReducer} from './movies/popular';
import {recommendedMovieReducer} from './movies/recommended';
import {trendingMovieReducer} from './movies/trending';

export default combineReducers({
  popularMovieReducer,
  recommendedMovieReducer,
  trendingMovieReducer,
});
