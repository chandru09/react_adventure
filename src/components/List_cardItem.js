import { React } from "react";
import { cartData } from "../data/data.js";
import { Link } from "react-router-dom";
import "./Cards.css";

//Destination List Cards component

function List() {
  return (
    <div className="cards__container">
      {cartData.map((item) => (
        <ul className="list_cards__items">
          <li className="cards__item">
            <div className="cards__item__link">
              {/* this props is used to get the path from Cards.js file */}
              <div className="cards__item__pic-wrap" data-category={item.label}>
                <img
                  src={item.src}
                  alt="Travel Image"
                  className="cards__item__img"
                />
              </div>
              <div className="cards__item__info">
                <h5 className="cards__item__text">{item.text}</h5>
                <div className="btn_align">
                  {/*  <button
                      className="btn-add"
                      onClick={() => addCart(item.src, item.label, item.text)}
                    >
                      Add
                    </button> */}
                  <Link to={item.view}>
                    <button className="btn-add">View</button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default List;
