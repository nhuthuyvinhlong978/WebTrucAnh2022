import "./news.css";

import imgNew1 from "../../assets/image/img-new1.png";

export default function NewsComponent(props) {
  return (
    <div className="news">
      <div className="card">
        <div className="img-news">
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
