import {PopularMovieState} from './movies/popular/types';
import {RecommendedMovieState} from './movies/recommended/types';
import {TrendingMovieState} from './movies/trending/types';

export interface AppStore {
  popularMovieReducer: PopularMovieState;
  recommendedMovieReducer: RecommendedMovieState;
  trendingMovieReducer: TrendingMovieState;
}
