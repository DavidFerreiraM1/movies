import {put} from 'redux-saga/effects';
import {fanArtKey} from '../../../constants/api-access';
import {FarnatApi, TraktApi} from '../../../http-client';
import {TrendingMovies} from '../../../interfaces/movies';
import {trendingMovieFailedAction, trendingMovieSuccessAction} from './action';

export function* trendingMovieRequestSaga() {
  try {
    const {data} = yield TraktApi.get('movies/trending?extended=full');

    const resultMovies: TrendingMovies[] = [];

    yield Promise.all(
      data.map(async (movie: TrendingMovies) => {
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

    yield put(trendingMovieSuccessAction(resultMovies));
  } catch (err) {
    yield put(trendingMovieFailedAction(err));
  }
}
