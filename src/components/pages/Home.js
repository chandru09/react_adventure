import { useState } from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";

function Home() {
  let [cartItem, setCartItem] = useState("");
  function addCart(item) {
    setCartItem(item);
  }
  return (
    <>
      <HeroSection />
      <Cards addCart={addCart} />
      <aside>{cartItem}</aside>
    </>
  );
}

export default Home;
