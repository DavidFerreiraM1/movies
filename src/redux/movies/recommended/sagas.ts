import {put} from 'redux-saga/effects';
import {fanArtKey} from '../../../constants/api-access';
import {FarnatApi, TraktApi} from '../../../http-client';
import {RecommendedMovies} from '../../../interfaces/movies';
import {
  recommendedMovieSuccessAction,
  recommendedMovieFailedAction,
} from './action';

export function* recommendedMovieRequestSaga() {
  try {
    const {data} = yield TraktApi.get('movies/recommended?extended=full');

    const resultMovies: RecommendedMovies[] = [];

    yield Promise.all(
      data.map(async (movie: RecommendedMovies) => {
        await FarnatApi.get(`${movie.movie.ids.tmdb}?api_key=${fanArtKey}`)
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
    yield put(recommendedMovieSuccessAction(resultMovies));
  } catch (err) {
    yield put(recommendedMovieFailedAction(err));
  }
}
