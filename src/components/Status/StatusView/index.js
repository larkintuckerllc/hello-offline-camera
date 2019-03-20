import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

const StatusView = ({ online, onlineRequested }) => (
  <View>{onlineRequested ? null : <Text>{online ? 'ONLINE' : 'OFFLINE'}</Text>}</View>
);

StatusView.propTypes = {
  online: PropTypes.bool.isRequired,
  onlineRequested: PropTypes.bool.isRequired,
};

export default StatusView;
