import React from 'react';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <Slot />
    </PaperProvider>
  );
}
