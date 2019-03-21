import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import { Button, Text, View } from 'react-native';
import Status from '../../../Status';
import styles from './styles';

export default class AppAConnected extends PureComponent {
  static propTypes = {
    dirty: PropTypes.bool.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    notificationOn: PropTypes.func.isRequired,
    online: PropTypes.bool.isRequired,
  };

  handleBPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('AppB');
  };

  handleCPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('AppC');
  };

  handleShowPress = () => {
    const { notificationOn } = this.props;
    notificationOn();
  };

  render() {
    const { dirty, online } = this.props;
    return (
      <Fragment>
        <Status />
        <View style={styles.container}>
          {online ? <Text>ONLINE</Text> : <Text>OFFLINE</Text>}
          {dirty ? <Text>DIRTY</Text> : <Text>CLEAN</Text>}
          <Button
            disabled={!(online && dirty)}
            title="Show Notification"
            onPress={this.handleShowPress}
          />
          <Text>A</Text>
          <Button title="B" onPress={this.handleBPress} />
          <Button title="C" onPress={this.handleCPress} />
        </View>
      </Fragment>
    );
  }
}
