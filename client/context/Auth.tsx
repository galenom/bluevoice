import { createContext, useContext } from 'react';

export type AuthContext = {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
};

export const AuthContext = createContext<AuthContext>({
  accessToken: null,
  setAccessToken: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
