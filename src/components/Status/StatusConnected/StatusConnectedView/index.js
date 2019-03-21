import PropTypes from 'prop-types';
import React from 'react';
import { Button, Modal, View } from 'react-native';
import styles from './styles';

const StatusConnectedView = ({ onClosePress, onUploadPress, saved, saving, visible }) => (
  <Modal visible={visible}>
    <View style={styles.container}>
      <Button disabled={saving || saved} onPress={onUploadPress} title="Upload" />
      <Button disabled={saving} onPress={onClosePress} title="Close" />
    </View>
  </Modal>
);

StatusConnectedView.propTypes = {
  onClosePress: PropTypes.func.isRequired,
  onUploadPress: PropTypes.func.isRequired,
  saved: PropTypes.bool.isRequired,
  saving: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default StatusConnectedView;
