import {action} from 'typesafe-actions';
import {TrendingMovies} from '../../../interfaces/movies';
import {TrendingMovieTypes} from './types';

export const trendingMovieRequestAction = () => {
  return action(TrendingMovieTypes.LOAD_REQUEST);
};

export const trendingMovieSuccessAction = (data: TrendingMovies[]) => {
  return action(TrendingMovieTypes.SUCCESS_REQUEST, data);
};

export const trendingMovieFailedAction = (err: any) => {
  return action(TrendingMovieTypes.FAILED_REQUEST, err);
};
