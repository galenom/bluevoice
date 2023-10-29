import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { router } from 'expo-router';
import { signIn } from '../api';
import { useAuthContext } from '../context/Auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const { setAccessToken } = useAuthContext();

  const login = async () => {
    setError(false);
    try {
      const data = await signIn(email, password);
      setAccessToken(data.accessToken);
      router.replace('/menu');
    } catch (e) {
      setError(true);
    }
  };

  return (
    <View style={styles.fillAndCenter}>
      <TextInput
        label='Email'
        value={email}
        onChangeText={setEmail}
        style={styles.spacing}
        error={error}
      />
      <TextInput
        label='Password'
        value={password}
        onChangeText={setPassword}
        style={styles.spacing}
        secureTextEntry
        error={error}
      />
      <Button mode='contained' onPress={login} style={styles.spacing}>
        Log in
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  spacing: { width: '40%', marginTop: 25 },
  fillAndCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
