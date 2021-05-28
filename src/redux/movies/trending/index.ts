import {Reducer} from 'redux';
import {TrendingMovieState, TrendingMovieTypes} from './types';

const INITAL_STATE: TrendingMovieState = {
  list: [],
  loading: false,
  success: false,
  error: null,
};

export const trendingMovieReducer: Reducer<TrendingMovieState> = (
  state = INITAL_STATE,
  action,
): TrendingMovieState => {
  switch (action.type) {
    case TrendingMovieTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TrendingMovieTypes.SUCCESS_REQUEST:
      return {
        list: action.payload,
        loading: false,
        success: true,
        error: null,
      };

    case TrendingMovieTypes.FAILED_REQUEST:
      return {
        list: [],
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
