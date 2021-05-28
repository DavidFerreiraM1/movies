import {Reducer} from 'redux';
import {RecommendedMovieState, RecommendedMovieTypes} from './types';

const INITAL_STATE: RecommendedMovieState = {
  list: [],
  loading: false,
  success: false,
  error: null,
};

export const recommendedMovieReducer: Reducer<RecommendedMovieState> = (
  state = INITAL_STATE,
  action,
): RecommendedMovieState => {
  switch (action.type) {
    case RecommendedMovieTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case RecommendedMovieTypes.SUCCESS_REQUEST:
      return {
        list: action.payload,
        loading: false,
        success: true,
        error: null,
      };

    case RecommendedMovieTypes.FAILED_REQUEST:
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
