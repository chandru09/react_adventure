import React from "react";
import "../../App.css";
import CardItem from "../CardItem";
import HeroSection from "../HeroSection";

function Home({ addCart }) {
  return (
    <>
      <HeroSection />
      <CardItem addCart={addCart} />
    </>
  );
}

export default Home;
