import {PopularMovieState} from './movies/popular/types';

export interface AppStore {
  popularMovieReducer: PopularMovieState;
}
