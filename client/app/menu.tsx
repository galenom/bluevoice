import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchMenu } from '../api';
import { Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Card, Text, Button } from 'react-native-paper';

const DUMMY_IMG = 'https://picsum.photos/700';
const LeftContent = (props: any) => <Avatar.Icon {...props} icon='food' />;

const MenuItem = ({ item }: any) => {
  const { dish, description, price } = item;
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return (
    <Card>
      <Card.Title
        title={dish}
        subtitle={currencyFormatter.format(price)}
        left={LeftContent}
      ></Card.Title>
      <Card.Content>
        <Text variant='titleLarge'>{dish}</Text>
        <Text variant='bodyMedium'>{description}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: DUMMY_IMG }} />
      <Card.Actions>
        <Button>Add to cart</Button>
      </Card.Actions>
    </Card>
  );
};

export default function Menu() {
  const { data, error } = useQuery({
    queryKey: ['menu_list'],
    queryFn: fetchMenu,
  });

  if (error) {
    return <Redirect href='/error' />;
  }

  if (data) {
    return (
      <SafeAreaView>
        <FlatList data={data} renderItem={MenuItem} style={styles.flatList} />
      </SafeAreaView>
    );
  }

  return <View />;
}

const styles = StyleSheet.create({
  flatList: { flex: 1, padding: 20 },
  spacing: { width: '40%', marginTop: 25 },
  fillAndCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
