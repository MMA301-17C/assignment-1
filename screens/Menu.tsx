import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import { menuItems } from '../data/DataMenu';

const MenuScreen = () => {
  return (
    <SectionList
      sections={menuItems}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#333333',
  },
  itemText: {
    fontSize: 16,
    color: '#F4CE14',
  },
  itemPrice: {
    fontSize: 16,
    color: '#F4CE14',
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#F4CE14',
    padding: 3,
  },
});

export default MenuScreen;