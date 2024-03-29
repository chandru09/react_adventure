import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Cart from "./components/pages/Cart";
import SignUp from "./components/pages/SignUp";
import { Modal } from "./components/Modal";
import Product_1 from "./components/PDP Pages/Product_1";
import Product_2 from "./components/PDP Pages/Product_2";
import Product_3 from "./components/PDP Pages/Product_3";
import Quiz from "./components/pages/Quiz";

function App() {
  let [cart, setCartItem] = useState([]);
  function addCart(image, label, text) {
    setCartItem([
      ...cart,
      {
        img: image,
        label: label,
        text: text,
      },
    ]);
  }

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Router>
        <Navbar openModal={openModal} cart={cart} setCartItem={setCartItem} />
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCartItem={setCartItem} />}
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/product_1" element={<Product_1 addCart={addCart} />} />
          <Route path="/product_2" element={<Product_2 addCart={addCart} />} />
          <Route path="/product_3" element={<Product_3 addCart={addCart} />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
