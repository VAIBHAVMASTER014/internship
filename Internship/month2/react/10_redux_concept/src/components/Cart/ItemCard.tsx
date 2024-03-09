import React from "react";

// imported files
import { useAppDispatch } from "../../redux/foodSlice";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

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

const ItemCard: React.FC<{ addItem: CartItem }> = ({ addItem }) => {
  const totalItemPrice = addItem.quantity * Number(addItem.price);
  const imgPath = `/apiImages/${addItem.image}`;

  const dispatch = useAppDispatch();
  const addItemToCartHandler = (item: CartItem) => {
    dispatch(addToCart(item));
  };
  const removeFromCartaHandler = (item: CartItem) => {
    dispatch(removeFromCart(item));
  };
  return (
    <>
      <div className="item">
        <img src={imgPath} alt="" />
        <div className="name-price">
          <span>{addItem.title}</span>
          <p>₹ {addItem.price}</p>
        </div>
        <p>A classic Cheesy Margharita. Can't Go Wrong.</p>
        <div className="cart-btns">
          <button type="button" onClick={() => removeFromCartaHandler(addItem)}>
            -
          </button>
          <span>{addItem.quantity}</span>
          <button type="button" onClick={() => addItemToCartHandler(addItem)}>
            +
          </button>
        </div>
        <div className="total">
          <hr />
          <div className="total-price">
            <p>Sub Total :</p>
            <span>₹ {totalItemPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
