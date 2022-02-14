import React from "react";
import "./Cards.css";

//Products stored in this component

function CartItems({ cart }) {
  let cartResult = cart.map((item) => {
    return (
      <div className="cards">
        <h1 id="get">Cart Section!</h1>
        <div className="cards__container">
          <ul className="cards__items">
            <li className="cards__item">
              <div className="cards__item__link">
                {/* this props is used to get the path from Cards.js file */}
                <div
                  className="cards__item__pic-wrap"
                  data-category={item.label}
                >
                  <img src={item.img} className="cards__item__img" />
                </div>
                <div className="cards__item__info">
                  <h5 className="cards__item__text">{item.text}</h5>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  });
  return (
    <>
      <div>{cartResult}</div>
    </>
  );
}

export default CartItems;
