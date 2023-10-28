import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu } from './menu';

export const Navbar = () => {
  return (
    <View style={styles.container}>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 80,
    backgroundColor: 'rgb(103, 80, 164)',
    width: '100%',
  },
});
