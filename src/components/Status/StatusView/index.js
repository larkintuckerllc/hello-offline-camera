import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

const StatusView = ({ online }) => (
  <View>
    <Text>{online ? 'ONLNE' : 'OFFLINE'}</Text>
  </View>
);

StatusView.propTypes = {
  online: PropTypes.bool.isRequired,
};

export default StatusView;
