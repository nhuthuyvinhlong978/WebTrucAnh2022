import { useState } from "react";
import "./categoryNews.css";
export default function CategoryNews(props) {
  const [category, setCategory] = useState([
    { name: "Quỹ hổ trợ người nuôi trồng", type: 1 },
    { name: "Tin tức công ty", type: 2 },
    { name: "Tin tức thủy sản", type: 3 },
    { name: "An sinh xã hội", type: 4 },
  ]);

  const [active, setActive] = useState("Quỹ hổ trợ người nuôi trồng");
  const showCategory = category.map((e, index) => {
    if (e.name === active) {
      return (
        <div
          className="category-item active"
          onClick={() => handleClick(e.name, e.type)}
        >
          <span>{e.name}</span>
        </div>
      );
    } else {
      return (
        <div
          className="category-item "
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
  return <div className="category-news">{showCategory}</div>;
}
