import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import AppImagesStateView from './AppImagesStateView';

export default class AppImagesState extends PureComponent {
  static propTypes = {
    onlineFetch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onlineFetch } = this.props;
    onlineFetch();
  }

  render() {
    return <AppImagesStateView />;
  }
}
