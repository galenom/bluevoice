import axios from 'axios';
import Constants from 'expo-constants';

const uri = Constants?.expoConfig?.hostUri
  ? Constants.expoConfig.hostUri.split(':').shift()?.concat(':8000')
  : 'http://127.0.0.1:8000';

console.log(uri, Constants?.expoConfig?.hostUri);

export const signIn = async (username: string, password: string) => {
  const { data } = await axios.post(`${uri}/api/login/`, {
    username,
    password,
  });
  return data;
};

export const fetchMenu = async (accessToken: string | null) => {
  const { data } = await axios.get(`${uri}/api/menu/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const fetchOrders = async (accessToken: string | null) => {
  const { data } = await axios.get(`${uri}/api/orders/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};
