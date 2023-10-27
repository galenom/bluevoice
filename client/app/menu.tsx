import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchMenu } from '../api';
import { ActivityIndicator, Banner } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Menu() {
  const { push } = useRouter();
  const { data, error } = useQuery({
    queryKey: ['menu_list'],
    queryFn: fetchMenu,
  });

  if (error) {
    push('/error');
  }

  if (data) {
    return <View />;
  }

  return <View />;
}

const styles = StyleSheet.create({
  spacing: { width: '40%', marginTop: 25 },
  fillAndCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
