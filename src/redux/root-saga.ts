import {all, takeLatest} from 'redux-saga/effects';
import {PopularMovieTypes} from './movies/popular/types';
import {pupularMovieRequestSaga} from './movies/popular/sagas';

export default function* rootSagas(): any {
  return yield all([
    takeLatest(PopularMovieTypes.LOAD_REQUEST, pupularMovieRequestSaga),
  ]);
}
