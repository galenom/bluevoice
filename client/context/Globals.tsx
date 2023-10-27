import { createContext, useContext } from 'react';
export type GlobalContext = {
  error: [Error | null, React.Dispatch<React.SetStateAction<Error | null>>];
};

export const GlobalContext = createContext<GlobalContext | null>({
  error: [null, () => {}],
});

export const useGlobalContext = () => useContext(GlobalContext);
