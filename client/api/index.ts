import axios from 'axios';
import Constants from 'expo-constants';

// Use if running locally via web or ios sim
const uri = 'http://127.0.0.1:8000';

// Otherwise, open up localhost api via ngrok and enter ngrok url here
// Also add to allowed hosts on API settings
// const uri = 'https://b5e4-2607-fb91-1764-8589-71fb-6ee5-13c-97a.ngrok-free.app';

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

export const postOrder = async (accessToken: string | null, orders: any) => {
  const { data } = await axios.post(`${uri}/api/order/`, orders, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  return data;
};
