import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {basket.length} items ) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={"₹"}
      />
      {basket.length == 0 ? (
        <button className="emptyBasket" disabled>
          Basket is empty
        </button>
      ) : (
        <button
          className="checkoutButton"
          onClick={(e) => history.push("/payment")}
          disabled={basket.length === 0}
        >
          Proceed to checkout
        </button>
      )}
    </div>
  );
}

export default Subtotal;
