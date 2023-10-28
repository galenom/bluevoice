import React, { useState } from 'react';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  ActivityIndicator,
} from 'react-native-paper';
import { Slot } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { View } from 'react-native';
import { GlobalContext } from '../context/Globals';
import { Navbar } from '../components/navbar';

const queryClient = new QueryClient();

export default function Layout() {
  const error = useState<Error | null>(null);

  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  const menu = { visible: menuVisible, open: openMenu, close: closeMenu };

  return (
    <GlobalContext.Provider value={{ error, menu }}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={DefaultTheme}>
          <Navbar />
          <Pages />
        </PaperProvider>
      </QueryClientProvider>
    </GlobalContext.Provider>
  );
}

const Pages = () => {
  const isLoading = queryClient.isFetching();

  return isLoading ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator size='large' />
    </View>
  ) : (
    <Slot />
  );
};
