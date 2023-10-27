import React, { useState } from 'react';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  ActivityIndicator,
} from 'react-native-paper';
import { Slot } from 'expo-router';
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from '@tanstack/react-query';
import { View } from 'react-native';
import { GlobalContext } from '../context/Globals';

const queryClient = new QueryClient();

export default function Layout() {
  const error = useState<Error | null>(null);
  const isLoading = queryClient.isFetching();

  return (
    <GlobalContext.Provider value={{ error }}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={DefaultTheme}>
          {isLoading ? (
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
          )}
        </PaperProvider>
      </QueryClientProvider>
    </GlobalContext.Provider>
  );
}
