import { FileSystem } from 'expo';
import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import { Button, Text, View } from 'react-native';
import Status from '../../../Status';
import styles from './styles';

const IMAGE_DIRECTORY = `${FileSystem.documentDirectory}images`;

export default class AppAConnected extends PureComponent {
  static propTypes = {
    dirty: PropTypes.bool.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    notification: PropTypes.bool.isRequired,
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

  handleDPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('AppD');
  };

  handleShowPress = () => {
    const { notificationOn } = this.props;
    notificationOn();
  };

  handleFixPress = async () => {
    const imageFile = `${IMAGE_DIRECTORY}/Error`;
    const { exists } = await FileSystem.getInfoAsync(imageFile, {});
    if (!exists) {
      return;
    }
    const fixedImageFile = `${IMAGE_DIRECTORY}/Fixed`;
    const options = {
      from: imageFile,
      to: fixedImageFile,
    };
    FileSystem.moveAsync(options);
  };

  render() {
    const { dirty, notification, online } = this.props;
    return (
      <Fragment>
        <Status />
        <View style={styles.container}>
          {online ? <Text>ONLINE</Text> : <Text>OFFLINE</Text>}
          {dirty ? <Text>DIRTY</Text> : <Text>CLEAN</Text>}
          {notification ? <Text>NOTIFY</Text> : <Text>NO NOTIFY</Text>}
          <Button
            disabled={!(online && dirty)}
            title="Show Notification"
            onPress={this.handleShowPress}
          />
          <Button title="Fix" onPress={this.handleFixPress} />
          <Text>A</Text>
          <Button title="B" onPress={this.handleBPress} />
          <Button title="C" onPress={this.handleCPress} />
          <Button title="D" onPress={this.handleDPress} />
        </View>
      </Fragment>
    );
  }
}
