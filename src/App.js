import React from "react";
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Booking from "./components/Booking"; 
import { Route, Routes } from "react-router-dom"; 

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes> 
        <Route path="/" element={<Header />} />
        <Route path="/booking" element={<Booking />} /> 
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
