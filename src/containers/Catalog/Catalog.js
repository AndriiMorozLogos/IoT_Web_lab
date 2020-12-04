import React from "react";
import Header from "../containers/Header/Header";
import Body from "../containers/Body/Body";
import Footer from "../containers/Footer/Footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./MyApp.css";

function Catalog() {
  return (
    <Router>
 <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
    </Router>
   
  );
}

export default Catalog;