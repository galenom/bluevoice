import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useCartContext } from '../../context/Cart';
import { Button, List } from 'react-native-paper';
import { currencyFormatter } from '../../utils/currency';
import { useMutation } from '@tanstack/react-query';
import { postOrder } from '../../api';
import { useAuthContext } from '../../context/Auth';
import { router } from 'expo-router';

export default function Cart() {
  const [cartExpanded, setCartExpanded] = useState(true);
  const { cart } = useCartContext();
  const { getAccessToken } = useAuthContext();
  const { mutate } = useMutation({
    mutationFn: (cart) => postOrder(getAccessToken(), cart),
    mutationKey: ['post_order'],
    retry: 0,
  });
  return (
    <View
      style={{
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
    >
      <List.Item
        title={currencyFormatter.format(
          cart.reduce((total, { price }) => total + price, 0)
        )}
        description='Total'
        style={styles.margins}
      />
      <List.Accordion
        title='Items in cart'
        expanded={cartExpanded}
        onPress={() => setCartExpanded(!cartExpanded)}
      >
        {cart.map((item) => (
          <List.Item
            key={Math.random()}
            title={`${item.dish} - ${currencyFormatter.format(item.price)}`}
            description={item.description}
            style={styles.margins}
          />
        ))}
      </List.Accordion>
      <Button
        mode='contained'
        onPress={() => {
          mutate(
            // @ts-ignore
            { cart },
            {
              onSettled() {
                router.push('/orders');
              },
            }
          );
        }}
      >
        Place order
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  margins: { marginTop: 25 },
});
