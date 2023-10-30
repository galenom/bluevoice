import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Index() {
  const { replace } = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button mode='outlined' onPress={() => replace('/login')}>
        Enter
      </Button>
    </View>
  );
}
