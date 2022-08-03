import { useState } from "react";
import "./categoryProcess.css";

export default function CategoryProcess(props) {
  const [category, setCategory] = useState([
    { name: "Vùng miền", type: 1 },
    { name: "Thời tiết", type: 2 },
    { name: "Mùa vụ", type: 3 },
    { name: "Kiến thức", type: 4 },
  ]);

  const [active, setActive] = useState("Vùng miền");
  const showCategory = category.map((e, index) => {
    if (e.name === active) {
      return (
        <div
          className="category-item-process active"
          onClick={() => handleClick(e.name, e.type)}
        >
          <span>{e.name}</span>
        </div>
      );
    } else {
      return (
        <div
          className="category-item-process "
          onClick={() => handleClick(e.name, e.type)}
        >
          <span>{e.name}</span>
        </div>
      );
    }
  });

  const handleClick = (name, type) => {
    setActive(name);
    props.handleClickType(type);
  };
  return <div className="category-process">{showCategory}</div>;
}
