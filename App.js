/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import RootNavigator from '@routes/RootNavigator';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '@store/reducers';

import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
  )
)

const App: () => React$Node = () => {
  return (
    <StoreProvider store={store}>
      <RootNavigator />
    </StoreProvider>
  );
};

export default App;