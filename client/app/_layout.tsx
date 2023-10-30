import React, { useState } from 'react';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  Portal,
  Dialog,
  Button,
  ActivityIndicator,
} from 'react-native-paper';
import { Slot } from 'expo-router';
import {
  QueryClient,
  QueryClientProvider,
  useIsFetching,
} from '@tanstack/react-query';
import { GlobalContext } from '../context/Globals';
import { CartContext } from '../context/Cart';
import { SessionProvider } from '../context/Auth';

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

  return (
    <GlobalContext.Provider value={{ error, menu }}>
      <SessionProvider>
        <CartContext.Provider value={{ cart, total, addToCart, setTotal }}>
          <QueryClientProvider client={queryClient}>
            <PaperProvider theme={DefaultTheme}>
              <Slot />
              <Loading />
            </PaperProvider>
          </QueryClientProvider>
        </CartContext.Provider>
      </SessionProvider>
    </GlobalContext.Provider>
  );
}

const Loading = () => {
  const isFetching = useIsFetching();
  const isLoading = isFetching > 0;
  return (
    <Portal>
      <Dialog
        visible={isLoading}
        style={{ width: 100, height: 100, alignSelf: 'center' }}
      >
        <Dialog.Content>
          <ActivityIndicator size='large' />
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};
