import {combineReducers} from 'redux';

import {popularMovieReducer} from './movies/popular';
import {recommendedMovieReducer} from './movies/recommended';
import {trendingMovieReducer} from './movies/trending';

import {authTokenReducer} from './auth';

export default combineReducers({
  popularMovieReducer,
  recommendedMovieReducer,
  trendingMovieReducer,
  authTokenReducer,
});
