import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Badge, IconButton } from 'react-native-paper';
import { useCartContext } from '../context/Cart';
import { useRouter } from 'expo-router';

export const Cart = () => {
  const { cart } = useCartContext();
  const { push } = useRouter();
  return (
    <View style={styles.item}>
      <IconButton mode='contained' icon='cart' onPress={() => push('/cart')} />
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
