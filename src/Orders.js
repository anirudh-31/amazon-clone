import { collection, getDoc, getDocs, query, where } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(async () => {
    if (user) {
      const q = query(collection(db, "orders"), where("user", "==", user?.uid));
      const querySnap = await getDocs(q);
      setOrders(
        querySnap.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
