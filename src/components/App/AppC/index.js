import { ImagePicker, Permissions } from 'expo';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles';

export default class AppC extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    hasCameraPermission: null,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleAPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('AppA');
  };

  handleBPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('AppB');
  };

  handleTakePhotoPress = async () => {
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({});
    if (cancelled) {
      return;
    }
    console.log(uri);
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return null;
    }
    return (
      <View style={styles.container}>
        <Button title="A" onPress={this.handleAPress} />
        <Button title="B" onPress={this.handleBPress} />
        <Text>C</Text>
        {hasCameraPermission ? (
          <Button title="Take Photo" onPress={this.handleTakePhotoPress} />
        ) : (
          <Text>No access to camera</Text>
        )}
      </View>
    );
  }
}
