import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { useStorageState } from '../hooks/useStorageState';

export type AuthContext = {
  getAccessToken: () => string | null;
  setAccessToken: (accessToken: string) => void;
  clearAccessToken: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContext>({
  getAccessToken: () => null,
  setAccessToken: () => {},
  clearAccessToken: Promise.resolve,
  isLoading: false,
});

export const useAuthContext = () => useContext(AuthContext);

export const useSession = () => {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
};

export const SessionProvider = (props: PropsWithChildren) => {
  const [[isLoading, accessToken], setAccessToken] = useStorageState('jwt');
  const getAccessToken = () => accessToken;
  const clearAccessToken = () => setAccessToken(null);

  return (
    <AuthContext.Provider
      value={{ getAccessToken, setAccessToken, clearAccessToken, isLoading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
