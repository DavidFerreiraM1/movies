import React from 'react';
import {Provider} from 'react-redux';
import {RootRouter} from './src/features/routes';
import store from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
}
