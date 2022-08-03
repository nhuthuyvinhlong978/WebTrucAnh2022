import React from "react";
import "./product.component.css";

export default function ProductComponent(props) {
  return (
    <div className="wrap-product-item ">
      <div className="product-item-img ">
        <img src={props.image} alt="" width="100%" />
      </div>
      <div className="product-item-name">
        <span>{props.name}</span>
      </div>
    </div>
  );
}
