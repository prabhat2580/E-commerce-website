import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage initially
const storedCart = localStorage.getItem("cart");
const initialState = {
  cartItems: storedCart ? JSON.parse(storedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //  Add item (if exists, increase quantity)
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },

    //  Increase quantity
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    //  Decrease quantity (remove if 0)
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
        }
      }
    },

    //  Remove item directly
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },

    //  Replace entire cart (like setCartItems in Context)
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

//  Export actions
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  setCartItems,
} = cartSlice.actions;

//  Selector for total price
export const selectTotalPrice = (state) =>
  state.cart.cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

// Export reducer
export default cartSlice.reducer;
