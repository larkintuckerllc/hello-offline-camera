import { FileSystem } from 'expo';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import StatusConnectedView from './StatusConnectedView';

const IMAGE_DIRECTORY = `${FileSystem.documentDirectory}images`;

const delay = () =>
  new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

export default class StatusConnected extends PureComponent {
  static propTypes = {
    dirty: PropTypes.bool.isRequired,
    dirtyOff: PropTypes.func.isRequired,
    notification: PropTypes.bool.isRequired,
    notificationOff: PropTypes.func.isRequired,
  };

  state = {
    error: false,
    errored: {},
    names: [],
    uploaded: {},
    uploading: false,
  };

  componentDidMount() {
    this.reset();
  }

  componentDidUpdate({ notification: prevNotification }) {
    const { dirty, notification } = this.props;
    if (dirty && notification && !prevNotification) {
      this.reset();
    }
  }

  reset = async () => {
    const names = await FileSystem.readDirectoryAsync(IMAGE_DIRECTORY);
    this.setState({
      error: false,
      errored: {},
      names,
      uploaded: {},
    });
  };

  uploadFile = async name => {
    const { errored, uploaded } = this.state;
    const imageFile = `${IMAGE_DIRECTORY}/${name}`;
    try {
      await delay(); // SAMPLE UPLOAD
      if (name === 'second') {
        throw new Error(); // SAMPLE ERROR
      }
      await FileSystem.deleteAsync(imageFile, {});
      this.setState({ uploaded: { ...uploaded, [name]: true } });
    } catch (error) {
      this.setState({ error: true, errored: { ...errored, [name]: true } });
    }
  };

  checkErrors = async () => {
    const { dirtyOff } = this.props;
    const { error } = this.state;
    this.setState({ uploading: false });
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
    const { names, uploaded } = this.state;
    const uploads = [];
    this.setState({ uploading: true });
    const uploadNames = names.filter(name => uploaded[name] === undefined);
    for (let i = 0; i < uploadNames.length; i += 1) {
      const name = names[i];
      const upload = this.uploadFile(name);
      uploads.push(upload);
    }
    await Promise.all(uploads);
    this.checkErrors();
  };

  render() {
    const { dirty, notification } = this.props;
    const { error, errored, names, uploaded, uploading } = this.state;
    return (
      <StatusConnectedView
        dirty={dirty}
        error={error}
        errored={errored}
        names={names}
        notification={notification}
        onClosePress={this.handleClosePress}
        onUploadPress={this.handleUploadPress}
        uploaded={uploaded}
        uploading={uploading}
      />
    );
  }
}
