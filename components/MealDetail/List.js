import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function List({ dataList }) {
  return dataList.map((list) => (
    <View key={list} style={styles.listItem}>
      <Text style={styles.itemText}>{list}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#e2b487',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
