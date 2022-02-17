import { React, useState } from "react";
import "../../App.css";
import CardItem from "../CardItem";
import HeroSection from "../HeroSection";
import List from "../List_cardItem";
import { BsFillGridFill, BsListTask } from "react-icons/bs";
import { cartData } from "../../data/data";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

function Home() {
  let [display, setDisplay] = useState(false);
  function disfunc() {
    setDisplay(!display);
  }
  let [show, setShow] = useState([]);
  function sortAsec() {
    let x = cartData.sort((a, b) => (a.label > b.label ? 1 : -1));

    setShow(x);
  }
  /*  let [dshow, setDShow] = useState([]);
  function sortDsec() {
    let x = cartData.sort((a, b) => (a.label > b.label ? -1 : 1));
    setDShow(x);
  } */
  return (
    <>
      <HeroSection />
      <div className="cards">
        <h1 id="get">Check out these EPIC Destinations!</h1>

        <div style={{ float: "right" }} onClick={disfunc}>
          {display ? <BsFillGridFill size={30} /> : <BsListTask size={30} />}
        </div>
        <div style={{ float: "right" }} onClick={sortAsec}>
          {show ? (
            <AiOutlineSortAscending size={30} />
          ) : (
            <AiOutlineSortDescending size={30} />
          )}
        </div>

        {/*  <div style={{ float: "right" }} onClick={sortDsec}>
          {dshow ? (
            <AiOutlineSortDescending size={30} />
          ) : (
            <AiOutlineSortAscending size={30} />
          )}
        </div> */}
        {display ? <List /> : <CardItem />}
      </div>
    </>
  );
}

export default Home;
