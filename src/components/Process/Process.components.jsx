import React from "react";
import "./process.css";
export default function ProcessComponent(props) {
  return (
    <div className="wrap-process">
      <div className="img-process">
        <img src={props.img} alt="" width="100%" height="100%"></img>
      </div>
      <div className="content">
        <div className="span-top">
          <span>{props.name}</span>
        </div>
        <div className="span-bottom">
          <span>{props.description} </span>
        </div>

        <div className="span-last">
          <div className="icon-radius">
            <i class="fa-solid fa-arrow-right" style={{ color: "white" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
