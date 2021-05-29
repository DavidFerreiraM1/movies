import {put} from 'redux-saga/effects';
import {TraktApi} from '../../http-client';
import {
  codeApplication,
  clientSecret,
  traktApiKey,
  redirectUri,
} from '../../constants/api-access';
import {authTokenSuccessAction, authTokenFailedAction} from './action';

export function* getTokenRequestSaga() {
  try {
    const requestBody = {
      code: codeApplication,
      client_id: traktApiKey,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authrization_code',
    };

    const {data} = yield TraktApi.post('oauth/token', requestBody);
    yield put(authTokenSuccessAction(data));
  } catch (err) {
    yield put(authTokenFailedAction(err));
  }
}
