import React, { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Login";
import Footer from "./Footer";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    
   <Router>
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;