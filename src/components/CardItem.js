import React, { useState } from "react";

function CardItem(props) {
  //console.log("This add to cart item", cartItem);
  function cartHandler(image, label, text) {
    //console.log(image, label, text);
    props.addCart(label);
    //setCartItem(label);
  }

  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          {/* this props is used to get the path from Cards.js file */}
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Travel Image"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <div className="btn_align">
              <button
                className="btn-add"
                onClick={() => cartHandler(props.src, props.label, props.text)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
