import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import AppA from './AppA';
import AppB from './AppB';
import AppC from './AppC';
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
    onlineFetch: PropTypes.func.isRequired,
    onlineSubscribe: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    const { onlineFetch: acOnlineFetch, onlineSubscribe: acOnlineSubscribe } = this.props;
    await acOnlineFetch();
    acOnlineSubscribe();
  }

  render() {
    return <AppContainerNavigation />;
  }
}

// CONNECTED APP CONTAINER
const mapStateToProps = () => ({});
const mapDispatchToProps = {
  onlineFetch,
  onlineSubscribe,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
