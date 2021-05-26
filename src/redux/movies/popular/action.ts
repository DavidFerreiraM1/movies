import {action} from 'typesafe-actions';
import {PopularMovies} from '../../../interfaces/movies';
import {PopularMovieTypes} from './types';

export const popularMovieRequestAction = () => {
  return action(PopularMovieTypes.LOAD_REQUEST);
};

export const popularMovieSuccessAction = (data: PopularMovies) => {
  return action(PopularMovieTypes.SUCCESS_REQUEST, data);
};

export const popularMovieFailedAction = (err: any) => {
  return action(PopularMovieTypes.FAILED_REQUEST, err);
};
