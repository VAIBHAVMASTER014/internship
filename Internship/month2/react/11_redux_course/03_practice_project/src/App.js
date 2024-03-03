import {useState} from 'react';
import {useSelector } from 'react-redux'

// imported files
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

const App=()=> {
  const cartIsVisible = useSelector((state)=>state.cartVisibility.cartIsVisible);
  return (
    <Layout >
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
