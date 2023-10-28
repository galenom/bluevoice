import { createContext, useContext } from 'react';

export type GlobalContext = {
  error: [Error | null, React.Dispatch<React.SetStateAction<Error | null>>];
  menu: { visible: boolean; open: () => void; close: () => void };
};

export const GlobalContext = createContext<GlobalContext>({
  error: [null, () => {}],
  menu: { visible: false, open: () => {}, close: () => {} },
});

export const useGlobalContext = () => useContext(GlobalContext);
