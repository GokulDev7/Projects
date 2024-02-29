import React, { useEffect } from "react";
import './styles/App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./utils/StateProvider";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, authUser => {
      console.log("The user is ", authUser);
      if (authUser) {
        dispatch({
          type: "Set_User",
          user: authUser
        })
      } else {
        dispatch({
          type: "Set_User",
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route 
          path="/orders"
          element={<><Header/><Orders/></>} />
          <Route 
          path="/register"
          element={<><Register/></>} />
          <Route
            path="/login"
            element={<><h1><Login /></h1></>} />
          <Route
            path="/checkout"
            element={<><Header /><Cart /> <Footer/> </>} />
          <Route
            path="/payment"
            element={<><Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements> 
              <Footer/></>} />
          <Route
            path="/"
            element={<><Header /><Home /><Footer/></>} />

        </Routes>
      </div>
    </Router>



  );
}

export default App;
