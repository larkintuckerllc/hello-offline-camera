import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import store from '../../store';
import AppA from './AppA';
import AppB from './AppB';
import AppC from './AppC';

const AppNavigator = createSwitchNavigator(
  {
    AppA,
    AppB,
    AppC,
  },
  {
    initialRouteName: 'AppA',
  }
);
const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
