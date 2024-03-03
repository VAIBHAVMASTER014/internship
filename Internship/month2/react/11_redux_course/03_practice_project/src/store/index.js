import { configureStore, createSlice } from "@reduxjs/toolkit";
const itemList = [
  { title: "Test Item", quantity: 1, price: 10 },
  { title: "Test Item2", quantity: 1, price: 50 },
  { title: "Test Item3", quantity: 1, price: 70 },
  { title: "Test Item4", quantity: 1, price: 20 },
];
const cartItemSlice = createSlice({
  name: "item",
  initialState: { item: [], totalQuantity: 0 },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const exisitingItem = state.item.find(item => item.id === newItem.id);
      if(!exisitingItem){
        state.item.push({ id: newItem.id, quantity:1, price:newItem.price,totalPrice:newItem.price,name:newItem.title});
      }else{
        exisitingItem.quantity ++;
        exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price;
      }
      state.totalQuantity ++;
    },
    removeFromCart(state, action) {
     const id  = action.payload;
     const existingItem = state.item.find(item => item.id === id);

     if(existingItem.quantity === 1){
      state.item = state.item.filter(item => item.id!== id);
     }else{
      existingItem.quantity --;
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
     }
      // state.item = state.item.map((item) => {
      //   return item.quantity === 1
      //     ? item.title === action.title
      //       ? item.title !== action.title
      //       : { ...item }
      //     : item.title === action.title
      //     ? { ...item, quantity: item.quantity-- }
      //     : { ...item };
      // });
      state.totalQuantity --;
      //   return total + item.quantity;
      // }, 0);
    },
  },
});

const cartVisibilitySlice = createSlice({
  name: "cartVisibility",
  initialState: { cartIsVisible: false },
  reducers: {
    cartVisibility(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

const store = configureStore({
  reducer: {
    item: cartItemSlice.reducer,
    cartVisibility: cartVisibilitySlice.reducer,
  },
});

export const itemActions = cartItemSlice.actions;
export const cartActions = cartVisibilitySlice.actions;
export default store;
