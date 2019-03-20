import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles';

export default class AppB extends PureComponent {
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
        <Text>B</Text>
        <Button title="C" onPress={this.handleCPress} />
      </View>
    );
  }
}
