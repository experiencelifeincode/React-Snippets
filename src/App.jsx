import React from "react";



import Nav from "../src/components/Navbar/navbar";
// import Navbar from 'react-bootstrap/Navbar'
import Home from "../src/pages/Home/home";
import Portfolio from "../src/pages/Portfolio/portfolio";
import "./App.scss";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Navbar /> */}
      <Home />
      <Portfolio />
    </div>
  );
}

export default App;
