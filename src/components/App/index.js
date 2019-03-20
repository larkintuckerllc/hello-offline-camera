import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import styles from './styles';
import store from '../../store';
import Status from '../Status';

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Status />
    </View>
  </Provider>
);

export default App;
