import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import AppA from './AppA';
import AppB from './AppB';
import AppC from './AppC';
import { dirtyInitialize } from '../../ducks/dirty';
import { onlineFetch, onlineSubscribe } from '../../ducks/online';

// APP CONTAINER NAVIGATION
const AppNavigator = createSwitchNavigator(
  {
    AppA,
    AppB,
    AppC,
  },
  {
    initialRouteName: 'AppA',
  }
);
const AppContainerNavigation = createAppContainer(AppNavigator);

// APP CONTAINER
class AppContainer extends PureComponent {
  static propTypes = {
    dirtyInitialize: PropTypes.func.isRequired,
    onlineFetch: PropTypes.func.isRequired,
    onlineSubscribe: PropTypes.func.isRequired,
  };

  state = {
    loading: true,
  };

  async componentDidMount() {
    const {
      dirtyInitialize: acDirtyInitialize,
      onlineFetch: acOnlineFetch,
      onlineSubscribe: acOnlineSubscribe,
    } = this.props;
    await acOnlineFetch();
    await acOnlineSubscribe();
    await acDirtyInitialize();
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return null;
    }
    return <AppContainerNavigation />;
  }
}

// CONNECTED APP CONTAINER
const mapStateToProps = () => ({});
const mapDispatchToProps = {
  dirtyInitialize,
  onlineFetch,
  onlineSubscribe,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
