import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SimpleBackground = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* Main gradient background */}
      <LinearGradient
        colors={['#ff00cc88', '#000000', '#00f0ff88']}
        locations={[0, 0.5, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      />

      {/* Blackish gradient on top right and bottom left */}
      <LinearGradient
        colors={['#000000cc', 'transparent', 'transparent', '#000000cc']}
        locations={[0, 0.3, 0.7, 1]}
        start={{ x: 1, y: 0 }}  // top right
        end={{ x: 0, y: 1 }}    // bottom left
        style={styles.gradient}
      />

      {/* Blackish gradient on bottom right */}
      <LinearGradient
        colors={['transparent', '#000000cc']}
        locations={[0, 1]}
        start={{ x: 0.7, y: 0.7 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      />

      {/* Content container */}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,             // Flexible container allows ScrollView to work
    backgroundColor: '#000',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,  // fills parent
  },
  content: {
    flex: 1,              // flexible content for children
  },
});

export default SimpleBackground;
