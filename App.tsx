import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import FeastNestHeader from './components/FeastNestHeader';
import FeastNestFooter from './components/FeastNestFooter';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <FeastNestHeader />
        <MenuItems />
      </View>
      <View style={styles.footerContainer}>
        <FeastNestFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
