import React from "react";
import "./Card.css";
function Card({ title, image, price }) {
  return (
    <div className="container">
      <img src={image} alt="" />
      <p>{title}</p>
      <p>{price}</p>
      <button>Shop</button>
    </div>
  );
}

export default Card;
