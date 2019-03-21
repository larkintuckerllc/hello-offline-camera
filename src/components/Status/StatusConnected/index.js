import { FileSystem } from 'expo';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import StatusConnectedView from './StatusConnectedView';

const IMAGE_DIRECTORY = `${FileSystem.documentDirectory}images`;

export default class StatusConnected extends PureComponent {
  static propTypes = {
    dirty: PropTypes.bool.isRequired,
    dirtyOff: PropTypes.func.isRequired,
    notification: PropTypes.bool.isRequired,
    notificationOff: PropTypes.func.isRequired,
  };

  state = {
    error: false,
    uploaded: false,
    uploading: false,
  };

  handleUpload = async name => {
    const imageFile = `${IMAGE_DIRECTORY}/${name}`;
    try {
      // SOME ONLINE ASYNC
      // throw new Error(); // SAMPLE ERROR
      await FileSystem.deleteAsync(imageFile, {});
    } catch (error) {
      this.setState({ error: true });
    }
  };

  checkErrors = () => {
    const { dirtyOff } = this.props;
    const { error } = this.state;
    this.setState({ uploaded: true, uploading: false });
    if (error) {
      return;
    }
    dirtyOff();
  };

  handleClosePress = () => {
    const { notificationOff } = this.props;
    notificationOff();
  };

  handleUploadPress = async () => {
    const uploads = [];
    const names = await FileSystem.readDirectoryAsync(IMAGE_DIRECTORY);
    this.setState({ uploading: true });
    for (let i = 0; i < names.length; i += 1) {
      const name = names[i];
      const upload = this.handleUpload(name);
      uploads.push(upload);
    }
    await Promise.all(uploads);
    this.checkErrors();
  };

  render() {
    const { dirty, notification } = this.props;
    const { uploaded, uploading } = this.state;
    return (
      <StatusConnectedView
        onClosePress={this.handleClosePress}
        onUploadPress={this.handleUploadPress}
        uploaded={uploaded}
        uploading={uploading}
        visible={dirty && notification}
      />
    );
  }
}