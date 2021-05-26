import {put} from 'redux-saga/effects';
import {TraktApi} from '../../../http-client';
import {popularMovieFailedAction, popularMovieSuccessAction} from './action';

export function* pupularMovieRequestSaga() {
  try {
    const {data} = yield TraktApi.get('movies/popular');
    yield put(popularMovieSuccessAction(data));
  } catch (err) {
    yield put(popularMovieFailedAction(err));
  }
}
