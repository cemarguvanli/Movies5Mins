import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

const LoadingView = ({ loading, children }) => {
  const renderLoadingView = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return loading ? renderLoadingView() : children;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default LoadingView;
