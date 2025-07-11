// src/hooks/use-cart.tsx
'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { Product } from '@/lib/products';
import { CartSheet } from '@/components/cart-sheet';
import { useIsomorphicLayoutEffect } from '@/hooks/use-isomorphic-layout-effect';

export interface CartItem extends Product {
  quantity: number;
  size: string;
}

interface CartContextType {
  cart: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (productId: string, size: string) => void;
  updateItemQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  isSheetOpen: boolean;
  setSheetOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isSheetOpen, setSheetOpen] = useState(false);

  // Load cart from localStorage on mount
  useIsomorphicLayoutEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (itemToAdd: Omit<CartItem, 'quantity'>) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === itemToAdd.id && item.size === itemToAdd.size
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === itemToAdd.id && item.size === itemToAdd.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...itemToAdd, quantity: 1 }];
    });
  };

  const removeItem = (productId: string, size: string) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === productId && item.size === size)));
  };

  const updateItemQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, size);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.size === size ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateItemQuantity, clearCart, isSheetOpen, setSheetOpen }}
    >
      {children}
      <CartSheet />
    </CartContext.Provider>
  );
}
