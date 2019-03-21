import { ImagePicker, Permissions } from 'expo';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import AppCView from './AppCView';

export default class AppC extends PureComponent {
  static propTypes = {
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
    const { name } = this.state;
    console.log(name);
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
    const { hasCameraPermission, name, uri } = this.state;
    return (
      <AppCView
        hasCameraPermission={hasCameraPermission}
        name={name}
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
