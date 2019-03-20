import PropTypes from 'prop-types';
import React from 'react';
import { Button, Modal, Text, View } from 'react-native';
import styles from './styles';

const StatusView = ({ notification, notificationOff, online, onlineRequested }) => (
  <Modal visible={notification}>
    <View style={styles.container}>
      <Text>
        Notification:
        {notification ? 'TRUE' : 'FALSE'}
      </Text>
      <Text>
        Online:
        {online ? 'TRUE' : 'FALSE'}
      </Text>
      <Text>
        Online Requested:
        {onlineRequested ? 'TRUE' : 'FALSE'}
      </Text>
      <Button onPress={notificationOff} title="Acknowledge" />
    </View>
  </Modal>
);

StatusView.propTypes = {
  notification: PropTypes.bool.isRequired,
  notificationOff: PropTypes.func.isRequired,
  online: PropTypes.bool.isRequired,
  onlineRequested: PropTypes.bool.isRequired,
};

export default StatusView;
