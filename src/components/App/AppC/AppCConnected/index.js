import { ImagePicker, Permissions } from 'expo';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import AppCConnectedView from './AppCConnectedView';

export default class AppC extends PureComponent {
  static propTypes = {
    online: PropTypes.bool.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    hasCameraPermission: null,
    name: '',
    uri: null,
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

  handleChangeText = text => {
    this.setState({ name: text });
  };

  handleSavePress = () => {
    const { online } = this.props;
    const { name } = this.state;
    console.log(name);
    console.log(online);
    //
  };

  handleTakePhotoPress = async () => {
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({});
    if (cancelled) {
      return;
    }
    this.setState({ uri });
  };

  render() {
    const { online } = this.props;
    const { hasCameraPermission, name, uri } = this.state;
    return (
      <AppCConnectedView
        hasCameraPermission={hasCameraPermission}
        name={name}
        online={online}
        onAPress={this.handleAPress}
        onBPress={this.handleBPress}
        onTakePhotoPress={this.handleTakePhotoPress}
        onChangeText={this.handleChangeText}
        onSavePress={this.handleSavePress}
        uri={uri}
      />
    );
  }
}
