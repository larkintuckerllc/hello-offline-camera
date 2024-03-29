import { FileSystem, ImagePicker, Permissions } from 'expo';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import AppCConnectedView from './AppCConnectedView';

const NAME_REGEX = /^[a-z,A-Z,0-9]+$/;
const IMAGE_DIRECTORY = `${FileSystem.documentDirectory}images`;

const delay = () =>
  new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

export default class AppC extends PureComponent {
  static propTypes = {
    dirty: PropTypes.bool.isRequired,
    dirtyOn: PropTypes.func.isRequired,
    online: PropTypes.bool.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    notification: PropTypes.bool.isRequired,
  };

  state = {
    error: false,
    hasCameraPermission: null,
    name: '',
    uploading: false,
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

  handleDPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('AppD');
  };

  handleChangeText = text => {
    this.setState({ name: text });
  };

  handleUploadPress = async () => {
    const { dirty, dirtyOn, online } = this.props;
    const { name, uri } = this.state;
    this.setState({ error: false, uploading: true });
    try {
      const validName = NAME_REGEX.test(name);
      if (!validName) {
        throw new Error();
      }
      if (online && !dirty) {
        await delay(); // SAMPLE UPLOAD
        if (name === 'Error') {
          throw new Error(); // SAMPLE ERROR
        }
      } else {
        // VALIDATE NO DUPLICATE NAME
        const imageFile = `${IMAGE_DIRECTORY}/${name}`;
        const { exists } = await FileSystem.getInfoAsync(imageFile, {});
        if (exists) {
          throw new Error();
        }
        // SAVE FILE
        const options = {
          from: uri,
          to: imageFile,
        };
        await FileSystem.moveAsync(options);
        // SET DIRTY
        dirtyOn();
      }
      this.setState({ name: '', uploading: false, uri: null });
    } catch (error) {
      this.setState({ error: true, uploading: false });
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
    const { dirty, notification, online } = this.props;
    const { error, hasCameraPermission, name, uploading, uri } = this.state;
    return (
      <AppCConnectedView
        dirty={dirty}
        error={error}
        hasCameraPermission={hasCameraPermission}
        name={name}
        notification={notification}
        online={online}
        onAPress={this.handleAPress}
        onBPress={this.handleBPress}
        onDPress={this.handleDPress}
        onTakePhotoPress={this.handleTakePhotoPress}
        onChangeText={this.handleChangeText}
        onUploadPress={this.handleUploadPress}
        uploading={uploading}
        uri={uri}
      />
    );
  }
}
