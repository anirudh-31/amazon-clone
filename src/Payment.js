import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import { Link } from "react-router-dom";
import {
  useElements,
  useStripe,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  //   const [error, setError] = useState(null);
  //   const [disabled, setDisabled] = useState(true);
  //   const [succeeded, setSucceeded] = useState(false);
  //   const [processing, setProcessing] = useState(false);
  //   const [clientSecret, setClientSecret] = useState(true);

  //   useEffect(() => {
  //     const getClientSecret = async () => {
  //       const response = await axios({
  //         method: "post",
  //         url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
  //       });
  //       setClientSecret(response.data.clientSecret);
  //     };
  //     getClientSecret();
  //   }, [basket]);

  //   console.log("The secret code is>>>", clientSecret);
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setProcessing(true);
    // const payload = await stripe
    //   .confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: elements.getElement(CardElement),
    //     },
    //   })
    //   .then(({ paymentIntent }) => {
    //     setSucceeded(true);
    //     setError(null);
    //     setProcessing(false);
    //     history.replace("/orders");
    //   });
    // db.collection("users")
    //   .doc(user?.id)
    //   .collection("orders")
    //   .doc(randNum)
    //   .set({ basket: basket, amount: getBasketTotal(basket) });
    const randNum = Math.floor(Math.random() * 100000) + 1;
    const docRef = await addDoc(collection(db, "orders"), {
      user: user?.uid,
      basket: basket,
      amount: getBasketTotal(basket),
      id: randNum,
      created: new Date().toLocaleDateString(),
    })
      .then((docRef) => {
        dispatch({
          type: "EMPTY_BASKET",
        });
      })
      .then((docRef) => {
        history.replace("/orders");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  //   const handleChange = (e) => {
  //     setDisabled(e.empty);
  //     setError(e.error ? e.error.message : "");
  //   };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          {" "}
          Checkout (<Link to="/checkout">{basket.length} items</Link>){" "}
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Name</h3>
          </div>
          <div className="payment__address">
            <p>{user ? user.email : "Guest"}</p>
          </div>
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>To be implemented</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3> Order Total: {value} </h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form> */}
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3> Order Total: {value} </h3>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
              />
            </div>
            <button onClick={handleSubmit}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
