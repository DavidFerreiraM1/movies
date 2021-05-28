import {all, takeLatest} from 'redux-saga/effects';
import {PopularMovieTypes} from './movies/popular/types';
import {pupularMovieRequestSaga} from './movies/popular/sagas';
import {RecommendedMovieTypes} from './movies/recommended/types';
import {recommendedMovieRequestSaga} from './movies/recommended/sagas';

export default function* rootSagas(): any {
  return yield all([
    takeLatest(PopularMovieTypes.LOAD_REQUEST, pupularMovieRequestSaga),
    takeLatest(RecommendedMovieTypes.LOAD_REQUEST, recommendedMovieRequestSaga),
  ]);
}
