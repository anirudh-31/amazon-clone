import React from "react";
import "./Checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* <img className="checkout__ad" alt="banner" src=""></img> */}
        <div>
          <h5>Hello, {user ? user?.email : "Guest"}</h5>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          <p className="checkout__emptyCart">
            {basket.length === 0 ? "Your shopping cart is empty" : ""}
          </p>
          {/* Cart Items */}
        </div>
        <div className="checkout__products">
          {basket.map((b) => (
            <CheckOutProduct
              id={b.id}
              title={b.title}
              image={b.image}
              price={b.price}
              rating={b.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
