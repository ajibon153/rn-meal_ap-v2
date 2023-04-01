import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b487',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 12,
    borderBottomColor: '#e2b487',
    borderBottomWidth: 2,
  },
});
