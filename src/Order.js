import React from "react";
import "./Order.css";
import moment from "moment";
import CheckOutProduct from "./CheckOutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Ordered On:</h2>
      <p>{order.data.created}</p>

      <p className="order__id">
        <strong>Order Id: </strong>
        <small> {order.id}</small>
      </p>
      {order.data.basket.map((item) => (
        <CheckOutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton={true}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order total: {value}</h3>
        )}
        decimalScale={2}
        value={getBasketTotal(order.data.basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
