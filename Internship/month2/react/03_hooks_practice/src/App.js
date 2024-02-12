import React, { useState } from "react";

import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  const showCart = () => {
    setCartVisibility(true);
  };
  const hideCart = () => {
    setCartVisibility(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCart} />
      {cartVisibility && <Cart onHideCart={hideCart} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
