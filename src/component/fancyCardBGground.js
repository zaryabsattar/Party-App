import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const FancyCardBackground = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* Transparent overlay */}
      <View style={styles.overlay} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 1,           // 90% of screen width
    height: height *0.90,
    borderTopRightRadius: width * 0.15, // radius proportional to screen size
    borderTopLeftRadius: width * 0.15,
    overflow: 'hidden',
    alignSelf: 'center',          // center on screen
    marginTop: height * 0.01,
    backgroundColor: '#00000050', // optional faint background for visibility
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.14)', // Light transparent overlay
  },
});

export default FancyCardBackground;
