import PropTypes from 'prop-types';
import React from 'react';
import { Button, Modal, View } from 'react-native';
import styles from './styles';

const StatusConnectedView = ({ onClosePress, onUploadPress, uploaded, uploading, visible }) => (
  <Modal visible={visible}>
    <View style={styles.container}>
      <Button disabled={uploading || uploaded} onPress={onUploadPress} title="Upload" />
      <Button disabled={uploading} onPress={onClosePress} title="Close" />
    </View>
  </Modal>
);

StatusConnectedView.propTypes = {
  onClosePress: PropTypes.func.isRequired,
  onUploadPress: PropTypes.func.isRequired,
  uploaded: PropTypes.bool.isRequired,
  uploading: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default StatusConnectedView;
