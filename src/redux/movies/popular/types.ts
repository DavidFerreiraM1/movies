import {PopularMovies} from '../../../interfaces/movies';

export enum PopularMovieTypes {
  LOAD_REQUEST = 'popularMovie/LOAD_REQUEST',
  SUCCESS_REQUEST = 'popularMovie/SUCCESS_REQUEST',
  FAILED_REQUEST = 'popularMovie/FAILED_REQUEST',
}

export interface PopularMovieState {
  readonly list: PopularMovies[];
  readonly loading: boolean;
  readonly success: boolean;
  readonly error: any;
}
