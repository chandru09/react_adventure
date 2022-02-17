import React from "react";
import "./Cards.css";

//Products stored in this component

function CartItems({ cart, setCartItem }) {
  console.log(cart);
  const removeBtn = (id) => {
    const arr = cart.filter((item) => item.id === id);
    setCartItem(arr);
  };

  let cartResult = cart.map((item) => {
    return (
      <li className="cards__item">
        <div className="cards__item__link">
          <div
            className="cards__item__pic-wrap"
            data-category={item.label}
            key={item.id}
          >
            <img src={item.img} className="cards__item__img" />
          </div>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{item.text}</h5>
          </div>
          <div>
            <button onClick={() => removeBtn}>Remove</button>
          </div>
        </div>
      </li>
    );
  });
  return (
    <>
      <div className="cards__container">
        <ul className="cards__items">
          {cart.length === 0 ? <h1>Cart is Empty</h1> : cartResult}
        </ul>
      </div>
    </>
  );
}

export default CartItems;
