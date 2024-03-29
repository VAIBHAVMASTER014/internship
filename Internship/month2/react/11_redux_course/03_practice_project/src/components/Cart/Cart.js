import {useSelector} from 'react-redux';

// imported files
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state)=>state.item.item)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
