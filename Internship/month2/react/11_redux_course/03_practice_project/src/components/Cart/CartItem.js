import { useDispatch } from 'react-redux';

import { itemActions } from '../../store';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispacth = useDispatch();

  const { name, quantity, price } = props.item;
  const total = Number(price)*Number(quantity)

  const increaseItemHandler = () => {
    dispacth(itemActions.addToCart(props.item));
  };
  const decreaseItemHandler = () => {
    dispacth(itemActions.removeFromCart(props.item.id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick = {decreaseItemHandler}>-</button>
          <button onClick = {increaseItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
