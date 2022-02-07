import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import { Modal } from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Router>
        <Navbar openModal={openModal} />
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
