import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class App extends PureComponent {
  state = {
    online: false,
  };

  render() {
    const { online } = this.state;
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{online ? 'ONLINE' : 'OFFLINE'}</Text>
      </View>
    );
  }
}
