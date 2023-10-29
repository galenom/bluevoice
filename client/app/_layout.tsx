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
import { CartContext } from '../context/Cart';
import { Navbar } from '../components/navbar';
import { AuthContext } from '../context/Auth';

const queryClient = new QueryClient();

export default function Layout() {
  const error = useState<Error | null>(null);

  // Menu
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  const menu = { visible: menuVisible, open: openMenu, close: closeMenu };

  // Cart
  const [cart, setCartItems] = useState<Array<any>>([]);
  const [total, setTotal] = useState(0);
  const addToCart = (item: any) => setCartItems([...cart, item]);

  // Auth
  const [accessToken, setAccessToken] = useState<string | null>(null);

  return (
    <GlobalContext.Provider value={{ error, menu }}>
      <AuthContext.Provider value={{ accessToken, setAccessToken }}>
        <CartContext.Provider value={{ cart, total, addToCart, setTotal }}>
          <QueryClientProvider client={queryClient}>
            <PaperProvider theme={DefaultTheme}>
              <Navbar />
              <Pages />
            </PaperProvider>
          </QueryClientProvider>
        </CartContext.Provider>
      </AuthContext.Provider>
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
