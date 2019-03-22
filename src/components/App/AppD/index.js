import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles';

export default class AppD extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleAPress = () => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate('AppA');
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
      <View style={styles.container}>
        <Button title="A" onPress={this.handleAPress} />
        <Button title="B" onPress={this.handleBPress} />
        <Button title="C" onPress={this.handleCPress} />
        <Text>D</Text>
      </View>
    );
  }
}
