import classes from './CartButton.module.css';
import {useDispatch,useSelector} from 'react-redux';

// imported files
import { cartActions } from '../../store';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const badge = useSelector((state)=>state.item.totalQuantity);
  const cartClickHandler =()=>{
    dispatch(cartActions.cartVisibility());
  }
  return (
    <button  onClick={cartClickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
