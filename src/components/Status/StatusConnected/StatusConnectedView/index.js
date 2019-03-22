import PropTypes from 'prop-types';
import React from 'react';
import { Button, Modal, Text, View } from 'react-native';
import styles from './styles';

const StatusConnectedView = ({
  completed,
  dirty,
  error,
  errored,
  names,
  notification,
  onClosePress,
  onUploadPress,
  uploaded,
  uploading,
}) => (
  <Modal visible={dirty && notification}>
    <View style={styles.container}>
      {names.map(name => (
        <Text key={name}>
          {name}
          {uploaded[name] !== undefined && ' (uploaded)'}
          {errored[name] !== undefined && ' (errored)'}
        </Text>
      ))}
      {error && <Text>ERROR UPLOADING</Text>}
      <Button
        disabled={(completed && !error) || uploading}
        onPress={onUploadPress}
        title="Upload"
      />
      <Button disabled={uploading} onPress={onClosePress} title="Close" />
    </View>
  </Modal>
);

StatusConnectedView.propTypes = {
  completed: PropTypes.bool.isRequired,
  dirty: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errored: PropTypes.objectOf(PropTypes.bool).isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  notification: PropTypes.bool.isRequired,
  onClosePress: PropTypes.func.isRequired,
  onUploadPress: PropTypes.func.isRequired,
  uploaded: PropTypes.objectOf(PropTypes.bool).isRequired,
  uploading: PropTypes.bool.isRequired,
};

export default StatusConnectedView;
