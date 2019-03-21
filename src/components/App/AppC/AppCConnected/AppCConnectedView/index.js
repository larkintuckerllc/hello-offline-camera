import PropTypes from 'prop-types';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './styles';

const AppCConnectedView = ({
  hasCameraPermission,
  name,
  online,
  onAPress,
  onBPress,
  onTakePhotoPress,
  onChangeText,
  onSavePress,
  uri,
}) => {
  if (hasCameraPermission === null) {
    return null;
  }
  // const disabled = uri === null || name.trim() === '';
  const disabled = name.trim() === '';
  return (
    <View style={styles.container}>
      {online ? <Text>ONLINE</Text> : <Text>OFFLINE</Text>}
      <Button title="A" onPress={onAPress} />
      <Button title="B" onPress={onBPress} />
      <Text>C</Text>
      {hasCameraPermission ? (
        <Button title="Take Photo" onPress={onTakePhotoPress} />
      ) : (
        <Text>No access to camera</Text>
      )}
      <TextInput style={styles.containerTextInput} onChangeText={onChangeText} value={name} />
      <Button disabled={disabled} title="Save" onPress={onSavePress} />
    </View>
  );
};

AppCConnectedView.propTypes = {
  hasCameraPermission: PropTypes.bool,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  onAPress: PropTypes.func.isRequired,
  onBPress: PropTypes.func.isRequired,
  onTakePhotoPress: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSavePress: PropTypes.func.isRequired,
  uri: PropTypes.string,
};

AppCConnectedView.defaultProps = {
  hasCameraPermission: null,
  uri: null,
};

export default AppCConnectedView;
