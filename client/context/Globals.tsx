import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export type GlobalContext = {
  error: boolean | null;
  setError: Dispatch<SetStateAction<boolean | null>>;
  menu: { visible: boolean; open: () => void; close: () => void };
};

export const GlobalContext = createContext<GlobalContext>({
  error: null,
  setError: () => {},
  menu: { visible: false, open: () => {}, close: () => {} },
});

export const useGlobalContext = () => useContext(GlobalContext);
