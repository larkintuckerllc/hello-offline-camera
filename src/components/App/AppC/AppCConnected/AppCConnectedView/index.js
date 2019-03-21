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
  onUploadPress,
  uploading,
  uri,
}) => {
  if (hasCameraPermission === null) {
    return null;
  }
  const invalid = uri === null || name.trim() === '';
  return (
    <View style={styles.container}>
      {online ? <Text>ONLINE</Text> : <Text>OFFLINE</Text>}
      <Button disabled={uploading} title="A" onPress={onAPress} />
      <Button disabled={uploading} title="B" onPress={onBPress} />
      <Text>C</Text>
      {hasCameraPermission ? (
        <Button disabled={uploading} title="Take Photo" onPress={onTakePhotoPress} />
      ) : (
        <Text>No access to camera</Text>
      )}
      <TextInput
        editable={!uploading}
        style={styles.containerTextInput}
        onChangeText={onChangeText}
        value={name}
      />
      {error && <Text>Error Uploading</Text>}
      <Button disabled={invalid || uploading} title="Upload" onPress={onUploadPress} />
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
  onUploadPress: PropTypes.func.isRequired,
  uploading: PropTypes.bool.isRequired,
  uri: PropTypes.string,
};

AppCConnectedView.defaultProps = {
  hasCameraPermission: null,
  uri: null,
};

export default AppCConnectedView;
