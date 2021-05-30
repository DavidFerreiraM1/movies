import {RecommendedMovies} from '../../../interfaces/movies';

export enum RecommendedMovieTypes {
  LOAD_REQUEST = 'recommendedMovie/LOAD_REQUEST',
  SUCCESS_REQUEST = 'recommendedMovie/SUCCESS_REQUEST',
  FAILED_REQUEST = 'recommendedMovie/FAILED_REQUEST',
}

export interface RecommendedMovieState {
  readonly list: RecommendedMovies[];
  readonly loading: boolean;
  readonly success: boolean;
  readonly error: any;
}
