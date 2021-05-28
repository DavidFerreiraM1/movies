import {TrendingMovies} from '../../../interfaces/movies';

export enum TrendingMovieTypes {
  LOAD_REQUEST = 'trendingMovie/LOAD_REQUEST',
  SUCCESS_REQUEST = 'trendingMovie/SUCCESS_REQUEST',
  FAILED_REQUEST = 'trendingMovie/FAILED_REQUEST',
}

export interface TrendingMovieState {
  readonly list: TrendingMovies[];
  readonly loading: boolean;
  readonly success: boolean;
  readonly error: any;
}
