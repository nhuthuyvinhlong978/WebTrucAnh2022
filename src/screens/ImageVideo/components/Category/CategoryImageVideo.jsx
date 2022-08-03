import { useState } from "react";
import "./categoryImageVideo.css";

export default function CategoryImageVideo(props) {
  const [category, setCategory] = useState([
    { name: "Quỹ hổ trợ người nuôi trồng", type: 1 },
    { name: "Tin tức công ty", type: 2 },
  ]);

  const [active, setActive] = useState("Quỹ hổ trợ người nuôi trồng");
  const showCategory = category.map((e, index) => {
    if (e.name === active) {
      return (
        <div
          className="category-item-image active"
          onClick={() => handleClick(e.name, e.type)}
        >
          <span>{e.name}</span>
        </div>
      );
    } else {
      return (
        <div
          className="category-item-image "
          onClick={() => handleClick(e.name, e.type)}
        >
          <span>{e.name}</span>
        </div>
      );
    }
  });

  const handleClick = (value, type) => {
    setActive(value, type);
    props.handleClickType(type);
  };

  console.log(active);
  return <div className="category-image-video">{showCategory}</div>;
}
