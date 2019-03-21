import PropTypes from 'prop-types';
import React from 'react';
import { Button, Modal, Text, View } from 'react-native';
import styles from './styles';

const StatusConnectedView = ({ error, names, onClosePress, onUploadPress, uploading, visible }) => (
  <Modal visible={visible}>
    <View style={styles.container}>
      {names.map(name => (
        <Text key={name}>{name}</Text>
      ))}
      {error && <Text>Error Uploading</Text>}
      <Button disabled={uploading} onPress={onUploadPress} title="Upload" />
      <Button disabled={uploading} onPress={onClosePress} title="Close" />
    </View>
  </Modal>
);

StatusConnectedView.propTypes = {
  error: PropTypes.bool.isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClosePress: PropTypes.func.isRequired,
  onUploadPress: PropTypes.func.isRequired,
  uploading: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default StatusConnectedView;
