import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.reduce(
      (acc, item) => {
        if (item.id === acc[0].id) {
          acc[0].amount = acc[0].amount + item.amount;
          return [...acc];
        }
        const ans = acc.concat(item);
        return ans;
      },
      [{ ...action.item }]
    );

    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const updatedItems = state.items.reduce((acc, item) => {
      if (item.id === action.id) {
        if (item.amount === 1) {
          return acc;
        }
        let uItem = { ...item, amount: item.amount - 1 };
        return acc.concat(uItem);
      }
      return acc.concat(item);
    }, []);

    const index = updatedItems.findIndex((item) => item.id === action.id);
    const updatedTotalAmount = state.totalAmount - updatedItems[index].price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <div>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;

// const updatedTotalAmount =
//       state.totalAmount + action.item.amount * action.item.price;

//   let updatedItem = state.items;

//   const indexOfAvailableItem = state.items.findIndex(
//     (item) => item.id === action.item.id
//   );

//   console.log(indexOfAvailableItem);

//   if (indexOfAvailableItem >= 0) {
//     updatedItem[indexOfAvailableItem] = {
//       ...action.item,
//       amount: updatedItem[indexOfAvailableItem].amount + action.item.amount,
//     };

//     return {
//       items: updatedItem,
//       totalAmount: updatedTotalAmount,
//     };
//   } else {
//     return {
//       items: [...updatedItem, action.item],
//       totalAmount: updatedTotalAmount,
//     };
//   }
// }
