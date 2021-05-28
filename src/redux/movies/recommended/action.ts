import {action} from 'typesafe-actions';
import {RecommendedMovies} from '../../../interfaces/movies';
import {RecommendedMovieTypes} from './types';

export const recommendedMovieRequestAction = () => {
  return action(RecommendedMovieTypes.LOAD_REQUEST);
};

export const recommendedMovieSuccessAction = (data: RecommendedMovies[]) => {
  return action(RecommendedMovieTypes.SUCCESS_REQUEST, data);
};

export const recommendedMovieFailedAction = (err: any) => {
  return action(RecommendedMovieTypes.FAILED_REQUEST, err);
};
