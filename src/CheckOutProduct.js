import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckOutProduct({ id, title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkOutProduct">
      <img src={image} alt={title} className="checkOutProduct__image" />
      <div className="checkOutProduct__info">
        <p className="checkOutProduct__title">{title}</p>
        <p className="checkOutProduct__price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>
        <div className="checkOutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckOutProduct;
