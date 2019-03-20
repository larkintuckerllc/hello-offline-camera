import PropTypes from 'prop-types';
import React from 'react';
import { Button, Modal, View } from 'react-native';
import styles from './styles';

const StatusView = ({ notification, notificationOff }) => (
  <Modal visible={notification}>
    <View style={styles.container}>
      <Button onPress={notificationOff} title="Acknowledge" />
    </View>
  </Modal>
);

StatusView.propTypes = {
  notification: PropTypes.bool.isRequired,
  notificationOff: PropTypes.func.isRequired,
};

export default StatusView;
