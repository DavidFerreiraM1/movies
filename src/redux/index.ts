import {createStore, Store, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {AppStore} from './interface';
import rootReducer from './root-reducer';
import rootSagas from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const store: Store<AppStore> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSagas);

export default store;
