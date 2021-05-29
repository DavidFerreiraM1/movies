import {Reducer} from 'redux';
import {AuthTokenState, AuthTokenypes} from './types';

const INITAL_STATE: AuthTokenState = {
  token: null,
  loading: false,
  success: false,
  error: null,
};

export const authTokenReducer: Reducer<AuthTokenState> = (
  state = INITAL_STATE,
  action,
): AuthTokenState => {
  switch (action.type) {
    case AuthTokenypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case AuthTokenypes.SUCCESS_REQUEST:
      return {
        token: action.payload,
        loading: false,
        success: true,
        error: null,
      };

    case AuthTokenypes.FAILED_REQUEST:
      return {
        token: null,
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
