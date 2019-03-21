import { FileSystem, ImagePicker, Permissions } from 'expo';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import AppCConnectedView from './AppCConnectedView';

const NAME_REGEX = /^[a-z,A-Z,0-9]+$/;

export default class AppC extends PureComponent {
  static propTypes = {
    online: PropTypes.bool.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    error: false,
    hasCameraPermission: null,
    name: '',
    saving: false,
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

  handleSavePress = async () => {
    const { online } = this.props;
    const { name, uri } = this.state;
    this.setState({ error: false, saving: true });
    try {
      const validName = NAME_REGEX.test(name);
      if (!validName) {
        throw new Error();
      }
      // TODO: FIX
      if (!online) {
        // SOME ONLINE ASYNC
        // throw new Error(); // SAMPLE ERROR
      } else {
        // CREATE IMAGES DIRECTORY
        const imageDirectory = `${FileSystem.documentDirectory}images`;
        const { exists: dirExists } = await FileSystem.getInfoAsync(imageDirectory, {});
        if (!dirExists) {
          await FileSystem.makeDirectoryAsync(imageDirectory, {});
        }
        // VALIDATE NO DUPLICATE NAME
        const imageFile = `${imageDirectory}/${name}`;
        const { exists: fileExists } = await FileSystem.getInfoAsync(imageFile, {});
        if (fileExists) {
          throw new Error();
        }
        /*
        // SAVE FILE
        const options = {
          from: uri,
          to: imageFile,
        };
        await FileSystem.copyAsync(options);
        */
        // SET FLAG
      }
      this.setState({ name: '', saving: false, uri: null });
    } catch (error) {
      console.log(error);
      this.setState({ error: true, saving: false });
    }
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
    const { error, hasCameraPermission, name, saving, uri } = this.state;
    return (
      <AppCConnectedView
        error={error}
        hasCameraPermission={hasCameraPermission}
        name={name}
        online={online}
        onAPress={this.handleAPress}
        onBPress={this.handleBPress}
        onTakePhotoPress={this.handleTakePhotoPress}
        onChangeText={this.handleChangeText}
        onSavePress={this.handleSavePress}
        saving={saving}
        uri={uri}
      />
    );
  }
}
