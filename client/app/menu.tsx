import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchMenu } from '../api';
import { Redirect } from 'expo-router';

export default function Menu() {
  const { data, error } = useQuery({
    queryKey: ['menu_list'],
    queryFn: fetchMenu,
  });

  if (error) {
    return <Redirect href='/error' />;
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
