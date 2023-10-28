import { createContext, useContext } from 'react';

export type CartContext = {
  cart: Array<any>;
  addToCart: (item: Array<any>) => void;
  total: number;
  setTotal: (total: number) => void;
};

export const CartContext = createContext<CartContext>({
  cart: [],
  addToCart: (_) => {},
  total: 0.0,
  setTotal: (_) => {},
});

export const useCartContext = () => useContext(CartContext);
