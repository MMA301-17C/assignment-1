import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FeastNestHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Feast Nest</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
  },
  headerText: {
    padding: 20,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
