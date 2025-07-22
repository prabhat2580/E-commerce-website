import React, { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();



export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const removeFromCart = (id) => {
  setCartItems(prev => prev.filter(item => item.id !== id));
};

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeFromCart, addToCart, getTotalPrice }}>
      {children}
      
    </CartContext.Provider>
    
  );
}
