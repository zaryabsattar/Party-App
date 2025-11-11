import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const SimpleBackground = ({ children }) => {
  return (
    <View style={[styles.container, { width, height }]}>
      {/* Main gradient background */}
      <LinearGradient
        colors={['#ff00cc88', '#000000', '#00f0ff88']}
        locations={[0, 0.5, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradient, { width, height }]}
      />

      {/* Existing blackish gradient on top right and bottom left */}
      <LinearGradient
        colors={['#000000cc', 'transparent', 'transparent', '#000000cc']}
        locations={[0, 0.3, 0.7, 1]}
        start={{ x: 1, y: 0 }}     // top right
        end={{ x: 0, y: 1 }}       // bottom left
        style={[styles.gradient, { width, height }]}
      />

      {/* New blackish gradient only on bottom right */}
      <LinearGradient
        colors={['transparent', '#000000cc']}
        locations={[0, 1]}
        start={{ x: 0.7, y: 0.7 }}   // start near bottom right
        end={{ x: 1, y: 1 }}         // bottom right corner
        style={[styles.gradient, { width, height }]}
      />

      {/* Content area */}
      <View style={[styles.content, { width, height }]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SimpleBackground;
