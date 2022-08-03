import React from "react";
import "./imagevideo.css";

export default function ImageVideo(props) {
  return (
    <div className="ImageVideo">
      <div className="card">
        <div className="img-video">
          <img
            src={props.image}
            className="card-img-top"
            alt="..."
            width="100%"
            height="100%"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
        </div>
        <div className="card-date">
          <span>{props.created}</span>
        </div>
      </div>
    </div>
  );
}
