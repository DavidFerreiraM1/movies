import {all, takeLatest} from 'redux-saga/effects';
// movies
import {PopularMovieTypes} from './movies/popular/types';
import {pupularMovieRequestSaga} from './movies/popular/sagas';
import {RecommendedMovieTypes} from './movies/recommended/types';
import {recommendedMovieRequestSaga} from './movies/recommended/sagas';
import {TrendingMovieTypes} from './movies/trending/types';
import {trendingMovieRequestSaga} from './movies/trending/sagas';
// auth
import {AuthTokenypes} from './auth/types';
import {getTokenRequestSaga} from './auth/sagas';

export default function* rootSagas(): any {
  return yield all([
    // MOVIES LIST
    takeLatest(PopularMovieTypes.LOAD_REQUEST, pupularMovieRequestSaga),
    takeLatest(RecommendedMovieTypes.LOAD_REQUEST, recommendedMovieRequestSaga),
    takeLatest(TrendingMovieTypes.LOAD_REQUEST, trendingMovieRequestSaga),
    // AUTH TOKEN
    takeLatest(AuthTokenypes.LOAD_REQUEST, getTokenRequestSaga),
  ]);
}
