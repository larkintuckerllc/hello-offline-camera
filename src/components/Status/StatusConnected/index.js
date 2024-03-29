import { FileSystem } from 'expo';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import StatusConnectedView from './StatusConnectedView';

const IMAGE_DIRECTORY = `${FileSystem.documentDirectory}images`;

const delay = () =>
  new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

export default class StatusConnected extends PureComponent {
  static propTypes = {
    dirty: PropTypes.bool.isRequired,
    dirtyOff: PropTypes.func.isRequired,
    notification: PropTypes.bool.isRequired,
    notificationOff: PropTypes.func.isRequired,
  };

  state = {
    completed: false,
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
      completed: false,
      error: false,
      errored: {},
      names,
      uploaded: {},
    });
  };

  uploadFile = async name => {
    const imageFile = `${IMAGE_DIRECTORY}/${name}`;
    try {
      await delay(); // SAMPLE UPLOAD
      if (name === 'Error') {
        throw new Error(); // SAMPLE ERROR
      }
      await FileSystem.deleteAsync(imageFile, {});
      this.setState(({ uploaded }) => ({ uploaded: { ...uploaded, [name]: true } }));
    } catch (error) {
      this.setState(({ errored }) => ({ error: true, errored: { ...errored, [name]: true } }));
    }
  };

  handleClosePress = () => {
    const { dirtyOff, notificationOff } = this.props;
    const { completed, error } = this.state;
    if (completed && !error) {
      dirtyOff();
    }
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
    this.setState({ completed: true, uploading: false });
  };

  render() {
    const { dirty, notification } = this.props;
    const { completed, error, errored, names, uploaded, uploading } = this.state;
    return (
      <StatusConnectedView
        completed={completed}
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
