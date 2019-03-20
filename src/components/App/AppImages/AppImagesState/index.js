import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import AppImagesStateView from './AppImagesStateView';

export default class AppImagesState extends PureComponent {
  static propTypes = {
    onlineFetch: PropTypes.func.isRequired,
    onlineSubscribe: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onlineFetch, onlineSubscribe } = this.props;
    onlineFetch();
    onlineSubscribe();
  }

  render() {
    return <AppImagesStateView />;
  }
}
