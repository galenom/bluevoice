import { createContext, useContext } from 'react';

export type AuthContext = {
  getAccessToken: () => string | null;
  setAccessToken: (accessToken: string) => void;
  clearAccessToken: () => Promise<void>;
};

export const AuthContext = createContext<AuthContext>({
  getAccessToken: () => null,
  setAccessToken: () => {},
  clearAccessToken: Promise.resolve,
});

export const useAuthContext = () => useContext(AuthContext);
