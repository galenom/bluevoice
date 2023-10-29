import axios from 'axios';

export const fetchMenu = async (accessToken: string | null) => {
  const { data } = await axios.get('http://127.0.0.1:8000/api/menu/', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export const signIn = async (username: string, password: string) => {
  const { data } = await axios.post('http://127.0.0.1:8000/api/login/', {
    username,
    password,
  });
  return data;
};
