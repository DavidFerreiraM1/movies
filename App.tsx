import React from 'react';
import {Provider} from 'react-redux';
import {PrincialScreen} from './src/features';
import store from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <PrincialScreen />
    </Provider>
  );
}
