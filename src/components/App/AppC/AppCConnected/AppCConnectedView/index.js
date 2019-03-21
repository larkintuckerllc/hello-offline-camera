import PropTypes from 'prop-types';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './styles';

const AppCConnectedView = ({
  error,
  hasCameraPermission,
  name,
  online,
  onAPress,
  onBPress,
  onTakePhotoPress,
  onChangeText,
  onSavePress,
  saving,
  uri,
}) => {
  if (hasCameraPermission === null) {
    return null;
  }
  // const disabled = uri === null || name.trim() === '';
  const saveDisabled = saving || name.trim() === '';
  return (
    <View style={styles.container}>
      {online ? <Text>ONLINE</Text> : <Text>OFFLINE</Text>}
      <Button disabled={saving} title="A" onPress={onAPress} />
      <Button disabled={saving} title="B" onPress={onBPress} />
      <Text>C</Text>
      {hasCameraPermission ? (
        <Button disabled={saving} title="Take Photo" onPress={onTakePhotoPress} />
      ) : (
        <Text>No access to camera</Text>
      )}
      <TextInput
        editable={!saving}
        style={styles.containerTextInput}
        onChangeText={onChangeText}
        value={name}
      />
      {error && <Text>Error Saving</Text>}
      <Button disabled={saveDisabled} title="Save" onPress={onSavePress} />
    </View>
  );
};

AppCConnectedView.propTypes = {
  error: PropTypes.bool.isRequired,
  hasCameraPermission: PropTypes.bool,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  onAPress: PropTypes.func.isRequired,
  onBPress: PropTypes.func.isRequired,
  onTakePhotoPress: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSavePress: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  uri: PropTypes.string,
};

AppCConnectedView.defaultProps = {
  hasCameraPermission: null,
  uri: null,
};

export default AppCConnectedView;
