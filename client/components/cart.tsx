import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Badge, IconButton } from 'react-native-paper';
import { useCartContext } from '../context/Cart';

export const Cart = () => {
  const { cart } = useCartContext();
  return (
    <View style={styles.item}>
      <IconButton mode='contained' icon='cart' onPress={() => {}} />
      <Badge style={styles.badge}>{cart.length}</Badge>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {},
  badge: {
    position: 'absolute',
    top: 4,
    right: 0,
  },
});
