import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

// imported files
import { useAppSelector, useAppDispatch } from "../../../redux/foodSlice";
import { addToCart, clearFromCart } from "../../../redux/cartSlice";
import { toastFuncWarn } from "../../../util/ToastFunc";

interface foodItemType {
  id: number;
  image: string;
  title: string;
  description: string;
  time: string;
  price: string;
  quantity: number;
  category: string;
}

const RecipieCard: React.FC<{ foodItem: foodItemType }> = ({ foodItem }) => {
  const imgPath = `/apiImages/${foodItem.image}`;
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) => state.cart.cart);
  const verifiedUser = useAppSelector((state) => state.cart.valid);

  const itemIndex = cartItem.findIndex((item) => item.id === foodItem.id);

  const CartItemHandler = (foodItem: foodItemType) => {
    if (itemIndex === -1) {
      verifiedUser
        ? dispatch(addToCart(foodItem))
        : toastFuncWarn("please login first");
    } else {
      dispatch(clearFromCart(foodItem));
      console.log("remove from cart called with item:", foodItem);
    }
  };

  return (
    <>
      <div className="recipie-card">
        <img src={imgPath} alt="" />
        <div className="card-content">
          <div className="recipie-card-title">
            <span>{foodItem.title}</span>
            <p>32 mins</p>
          </div>
          <p className="recipie-card-description">{foodItem.description}</p>
          <div className="ngn">
            <p>{foodItem.price} Rs</p>
          </div>
        </div>
        <div className="card-btn">
          <button
            className={itemIndex !== -1 ? "cart-added-btn" : "cart-remove-btn"}
            type="button"
            onClick={() => CartItemHandler(foodItem)}
          >
            {" "}
            <FontAwesomeIcon icon={faLock} />
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipieCard;
