import React from "react";
import "./CardItem.css";

const CardItem = ({ title = "No title.", text, imageSrc, price }) => (
  <li className="card-item">
    <h1>{title}</h1>
    <h1>{text}</h1>
    <h1>${price}</h1>
    <img style={{ borderRadius: "20px",maxWidth: "200px",marginLeft:"70px" }} alt="example" src={imageSrc} />
  </li>
);

export default CardItem;
