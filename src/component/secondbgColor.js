import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const PartyBackground = ({ children }) => {
  return (
    <View style={[styles.container, { width, height }]}>
      {/* Gradient Background */}
      <LinearGradient
        colors={['#ff00cc88', '#000000', '#00f0ff88']}
        locations={[0, 0.5, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradient, { width, height }]}
      />

      {/* ✨ Dots (Responsive positions) */}
      <View
        style={[
          styles.dot,
          {
            top: height * 0.35,
            left: width * 0.20,
            backgroundColor: '#3DA6CA',
          },
        ]}
      />
      <View
        style={[
          styles.dot,
          {
            top: height * 0.45,
            right: width * 0.06,
            backgroundColor: '#3DA6CA',
          },
        ]}
      />
      <View
        style={[
          styles.dot,
          {
            top: height * 0.13,
            left: width * 0.6,
            backgroundColor: '#3DA6CA',
          },
        ]}
      />

      {/* 📦 Child content */}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  dot: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default PartyBackground;
