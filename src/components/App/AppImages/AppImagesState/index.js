import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { NetInfo } from 'react-native';
import AppImagesStateView from './AppImagesStateView';

export default class AppImagesState extends PureComponent {
  static propTypes = {
    onlineFetch: PropTypes.func.isRequired,
    onlineOff: PropTypes.func.isRequired,
    onlineOn: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onlineFetch } = this.props;
    onlineFetch();
    NetInfo.addEventListener('connectionChange', this.handleConnectionChange);
  }

  handleConnectionChange = ({ type }) => {
    const { onlineOff, onlineOn } = this.props;
    if (type === 'none') {
      onlineOff();
      return;
    }
    onlineOn();
  };

  render() {
    return <AppImagesStateView />;
  }
}
