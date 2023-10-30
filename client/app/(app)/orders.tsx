import React from 'react';
import { View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchOrders } from '../../api';
import { Redirect } from 'expo-router';
import { useAuthContext } from '../../context/Auth';
import DataTable from '../../components/datatable';
import { useGlobalContext } from '../../context/Globals';

export default function Orders() {
  const { getAccessToken } = useAuthContext();
  const { setError } = useGlobalContext();

  const { data, error } = useQuery({
    queryKey: ['order_list'],
    queryFn: () => fetchOrders(getAccessToken()),
  });

  if (error) {
    setError(true);
  }

  if (data) {
    return <DataTable items={data} />;
  }

  return <View />;
}
