// import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PhoneSignUp from "./Components/PhoneSignUp";
import ProtectedRoute from "./Components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Checkout from "./Pages/Checkout";
import AdminNavbar from './Admin/Components/adminNavbar';
import AllRoutes from './Components/AllRoutes';

import Footer from './Components/Footer';

import Cart from './Pages/Cart';
import ProductPage from './Pages/ProductPage';
import Payment from './Pages/Payment';


function App() {
  const [athenticated,setAuth] = useState(true);

  return (
    <div className="App">

     
    

      {athenticated? <AdminNavbar/> : <AllRoutes/>}

      {/* <AllRoutes/> */}
      {/* <ProductPage/> */}
      {/* <Cart/> */}


      {/* <Checkout />/ */}
      {/* <Payment /> */}
      {/* <UserAuthContextProvider>

            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/phonesignup" element={<PhoneSignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>

          </UserAuthContextProvider> */}


    </div>
  );
}

export default App;
