import React from "react";
import Header from "../containers/Header/Header";
import Body from "../containers/Body/Body";
import Footer from "../containers/Footer/Footer";
import "./MyApp.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
