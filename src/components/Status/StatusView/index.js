import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

const StatusView = ({ notification, online, onlineRequested }) => (
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
  </View>
);

StatusView.propTypes = {
  notification: PropTypes.bool.isRequired,
  online: PropTypes.bool.isRequired,
  onlineRequested: PropTypes.bool.isRequired,
};

export default StatusView;
