import {PopularMovieState} from './movies/popular/types';
import {RecommendedMovieState} from './movies/recommended/types';

export interface AppStore {
  popularMovieReducer: PopularMovieState;
  recommendedMovieReducer: RecommendedMovieState;
}
