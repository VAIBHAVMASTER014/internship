import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

interface CartItem {
  id: number;
  price: string;
  image: string;
  title: string;
  description: string;
  time: string;
  quantity: number;
  category: string;
}

interface CartState {
  cart: CartItem[];
  totalItem: number;
  totalPrice: number;
  valid: boolean;
}

const initialState: CartState = {
  cart: [],
  totalItem: 0,
  totalPrice: 0,
  valid: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    validate: (state, action) => {
      state.valid = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const addedItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (addedItem === -1) {
        const itemToAdd = {
          ...action.payload,
          quantity: action.payload.quantity + 1,
        };
        state.cart.push(itemToAdd);
        state.totalItem++;
        state.totalPrice += Number(action.payload.price);
      } else {
        state.cart[addedItem].quantity += 1;
        state.totalItem++;
        state.totalPrice += Number(action.payload.price);
      }
    },

    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        state.totalItem--;
        state.totalPrice -= Number(action.payload.price);
      } else {
        state.cart[itemIndex].quantity -= 1;
        state.totalItem--;
        state.totalPrice -= Number(action.payload.price);
      }
    },

    clearFromCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.totalItem = state.totalItem - state.cart[itemIndex].quantity;
      state.totalPrice -= Number(state.cart[itemIndex].price);
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalItem = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartItem = (state: RootState) => state.cart;
export const { addToCart, removeFromCart, clearCart, clearFromCart, validate } =
  cartSlice.actions;
export default cartSlice.reducer;
