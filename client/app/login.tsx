import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');

  const signIn = () => {
    router.replace('/menu');
  };

  return (
    <View style={styles.fillAndCenter}>
      <TextInput
        label='Email'
        value={email}
        onChangeText={setEmail}
        style={styles.spacing}
      />
      <TextInput
        label='Password'
        value={email}
        onChangeText={setEmail}
        style={styles.spacing}
        secureTextEntry
      />
      <Button mode='contained' onPress={signIn} style={styles.spacing}>
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
