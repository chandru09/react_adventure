import React, { useState } from "react";
import CartItems from "../CartItems";

//Products added in this page

export default function Cart({ cart }) {
  return (
    <div>
      <CartItems cart={cart} />
    </div>
  );
}
