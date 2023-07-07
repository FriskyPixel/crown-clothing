import { createContext, useState } from 'react';

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (!existingCartItem) return;

  if (existingCartItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartProduct = (cartItems, productToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearProductFromCart: () => {},
  totalCartItems: 0,
  totalCartPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const totalCartItems = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
  const totalCartPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );

  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  const clearProductFromCart = (productToRemove) => {
    setCartItems(clearCartProduct(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearProductFromCart,
    totalCartItems,
    totalCartPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
