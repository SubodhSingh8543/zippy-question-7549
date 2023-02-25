import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
// import Home from "../Pages/home";
import HomePage from "../Pages/HomePage";
import MyOrders from "../Pages/Myorders";
import Payment from "../Pages/Payment";
import ProductPage from "../Pages/ProductPage";
import SingleProductPage from "../Pages/SingleProductPage";
import Login from "./Login";
import PhoneSignUp from "./PhoneSignUp";
import Signup from "./Signup";

const AllRoutes = () => {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/phonesignup" element={<PhoneSignUp />} />
      </Routes>
    </UserAuthContextProvider>
  );
};

export default AllRoutes;
