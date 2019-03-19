import React, { PureComponent } from 'react';
import { NetInfo, Text, View } from 'react-native';
import styles from './styles';

export default class App extends PureComponent {
  state = {
    online: false,
  };

  async componentDidMount() {
    const { type } = await NetInfo.getConnectionInfo();
    this.setState({
      online: type !== 'none',
    });
  }

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

/*
NetInfo.getConnectionInfo().then((connectionInfo) => {
  console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
});
function handleFirstConnectivityChange(connectionInfo) {
  console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
  NetInfo.removeEventListener(
    'connectionChange',
    handleFirstConnectivityChange
  );
}
NetInfo.addEventListener(
  'connectionChange',
  handleFirstConnectivityChange
);
*/
