import React from "react";
import CartItems from "../CartItems";

//Products added in this page

export default function Cart({ cart, setCartItem }) {
  return (
    <div>
      <CartItems cart={cart} setCart={setCartItem} />
    </div>
  );
}
