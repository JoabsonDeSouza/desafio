import React from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

console.disableYellowBox = true;
const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" />
    <Routes />
  </Provider>
);

export default App;
