import {TokenData} from '../../interfaces/token';

export enum AuthTokenypes {
  LOAD_REQUEST = 'authToken/LOAD_REQUEST',
  SUCCESS_REQUEST = 'authToken/SUCCESS_REQUEST',
  FAILED_REQUEST = 'authToken/FAILED_REQUEST',
}

export interface AuthTokenState {
  readonly token: TokenData | null;
  readonly loading: boolean;
  readonly success: boolean;
  readonly error: any;
}
