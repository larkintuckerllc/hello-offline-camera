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
    names: [],
    uploading: false,
  };

  async componentDidMount() {
    const names = await FileSystem.readDirectoryAsync(IMAGE_DIRECTORY);
    this.setState({ names });
  }

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
    const { dirtyOff, notificationOff } = this.props;
    const { error } = this.state;
    this.setState({ uploading: false });
    if (error) {
      return;
    }
    dirtyOff();
    notificationOff();
  };

  handleClosePress = () => {
    const { notificationOff } = this.props;
    notificationOff();
  };

  handleUploadPress = async () => {
    const { names } = this.state;
    const uploads = [];
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
    const { error, names, uploading } = this.state;
    return (
      <StatusConnectedView
        error={error}
        names={names}
        onClosePress={this.handleClosePress}
        onUploadPress={this.handleUploadPress}
        uploading={uploading}
        visible={dirty && notification}
      />
    );
  }
}
