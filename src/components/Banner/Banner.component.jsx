import "./banner.css";
import logo from "../../assets/image/logobanner.png";
export default function BannerComponent(props) {
  return (
    <div className="wrap-banner">
      <img src={props.image} alt="" />
      <div className="content-banner-2">
        <div className="logo-banner-news">
          <img src={logo} alt="" width="10%" />
        </div>
        <div className="title-banner-news">
          <span>{props.title} </span>
        </div>
      </div>
    </div>
  );
}
