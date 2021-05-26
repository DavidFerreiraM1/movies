import {Reducer} from 'redux';
import {PopularMovieState, PopularMovieTypes} from './types';

const INITAL_STATE: PopularMovieState = {
  list: [],
  loading: false,
  success: false,
  error: null,
};

export const popularMovieReducer: Reducer<PopularMovieState> = (
  state = INITAL_STATE,
  action,
): PopularMovieState => {
  switch (action.type) {
    case PopularMovieTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case PopularMovieTypes.SUCCESS_REQUEST:
      return {
        list: action.payload,
        loading: false,
        success: true,
        error: null,
      };

    case PopularMovieTypes.FAILED_REQUEST:
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
