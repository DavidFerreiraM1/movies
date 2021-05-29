import {action} from 'typesafe-actions';
import {TokenData} from '../../interfaces/token';
import {AuthTokenypes} from './types';

export const authTokenRequestAction = () => {
  return action(AuthTokenypes.LOAD_REQUEST);
};

export const authTokenSuccessAction = (data: TokenData) => {
  return action(AuthTokenypes.SUCCESS_REQUEST, data);
};

export const authTokenFailedAction = (err: any) => {
  return action(AuthTokenypes.FAILED_REQUEST, err);
};
