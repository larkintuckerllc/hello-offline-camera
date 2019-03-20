import PropTypes from 'prop-types';
import React from 'react';
import { Button, Text, View } from 'react-native';

const StatusView = ({ notification, notificationOff, online, onlineRequested }) => (
  <View>
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
);

StatusView.propTypes = {
  notification: PropTypes.bool.isRequired,
  notificationOff: PropTypes.func.isRequired,
  online: PropTypes.bool.isRequired,
  onlineRequested: PropTypes.bool.isRequired,
};

export default StatusView;
