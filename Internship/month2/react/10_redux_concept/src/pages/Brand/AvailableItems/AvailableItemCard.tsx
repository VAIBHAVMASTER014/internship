// imported files
import { useAppDispatch, useAppSelector } from "../../../redux/foodSlice";
import { removeFromCart, addToCart } from "../../../redux/cartSlice";
import { toastFuncWarn } from "../../../util/ToastFunc";

interface itemType {
  id: number;
  image: string;
  title: string;
  description: string;
  time: string;
  price: string;
  quantity: number;
  category: string;
}

const AvailableItemCard:React.FC = () => {
  const veriFiedUser = useAppSelector((state) => state.cart.valid);
  const availableTotaldata = useAppSelector(
    (state) => state.brand.filteredState?.data
  );
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cart) || [];

  const addItemToCartHandler = (item: itemType) => {
    if (veriFiedUser) {
      dispatch(addToCart(item));
    } else {
      toastFuncWarn("Please login first!");
    }
  };
  const removeFromCartaHandler = (item: itemType) => {
    dispatch(removeFromCart(item));
  };
  let content = availableTotaldata?.map((available, index) => (
    <div className="avail-item" key={index}>
      <img src={`/apiImages/${available.image}`} alt="foodImage" />
      <div className="item-content">
        <div className="content">
          <span>{available.title}</span>
          <p>{available.description}</p>
          <span>&#8377; {available.price}</span>
        </div>

        {cartItems.find((item) => item.id === available.id) ? (
          <div className="cart-btns">
            <button
              type="button"
              onClick={() => removeFromCartaHandler(available)}
            >
              -
            </button>
            <span>
              {cartItems.find((item) => item.id === available.id)?.quantity}
            </span>
            <button
              type="button"
              onClick={() => addItemToCartHandler(available)}
            >
              +
            </button>
          </div>
        ) : (
          <div className="item-card">
            <button
              type="button"
              onClick={() => {
                addItemToCartHandler(available);
              }}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  ));
  return <div className="item-cards">{content}</div>;
};

export default AvailableItemCard;
