import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchOrders } from '../api';
import { Redirect } from 'expo-router';
import { useAuthContext } from '../context/Auth';
import DataTable from '../components/datatable';

export default function Orders() {
  const { accessToken } = useAuthContext();
  const { data, error } = useQuery({
    queryKey: ['order_list'],
    queryFn: () => fetchOrders(accessToken),
  });

  if (error) {
    return <Redirect href='/error' />;
  }

  if (data) {
    return <DataTable items={data} />;
  }

  return <View />;
}

const styles = StyleSheet.create({});
