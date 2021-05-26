import {put} from 'redux-saga/effects';
import {FarnatApi, farnatKey, TraktApi} from '../../../http-client';
import {PopularMovies} from '../../../interfaces/movies';
import {popularMovieFailedAction, popularMovieSuccessAction} from './action';

export function* pupularMovieRequestSaga() {
  try {
    const {data} = yield TraktApi.get('movies/popular');

    const resultMovies: PopularMovies[] = [];

    yield Promise.all(
      data.map(async (movie: PopularMovies) => {
        await FarnatApi.get(`${movie.ids.tmdb}?api_key=${farnatKey}`)
          .then(res => {
            resultMovies.push({
              ...movie,
              posterUrl: res.data.movieposter[1].url,
            });
          })
          .catch(() => {
            resultMovies.push({
              ...movie,
              posterUrl: '',
            });
          });
      }),
    );
    yield put(popularMovieSuccessAction(resultMovies));
  } catch (err) {
    yield put(popularMovieFailedAction(err));
  }
}
