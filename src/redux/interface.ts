import {PopularMovieState} from './movies/popular/types';
import {RecommendedMovieState} from './movies/recommended/types';
import {TrendingMovieState} from './movies/trending/types';
import {AuthTokenState} from './auth/types';

export interface AppStore {
  popularMovieReducer: PopularMovieState;
  recommendedMovieReducer: RecommendedMovieState;
  trendingMovieReducer: TrendingMovieState;
  authTokenReducer: AuthTokenState;
}
