import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import { Button, Text, View } from 'react-native';
import Status from '../../Status';
import styles from './styles';

export default class AppA extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleBPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('AppB');
  };

  handleCPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('AppC');
  };

  render() {
    return (
      <Fragment>
        <Status />
        <View style={styles.container}>
          <Text>A</Text>
          <Button title="B" onPress={this.handleBPress} />
          <Button title="C" onPress={this.handleCPress} />
        </View>
      </Fragment>
    );
  }
}
