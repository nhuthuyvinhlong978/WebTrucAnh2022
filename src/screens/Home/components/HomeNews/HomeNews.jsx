import React, { useState } from "react";
import NewsComponent from "../../../../components/News/News";
import "./homenews.css";
import newsJSON from "./news.json";
export default function HomeNews() {
  const [data, setData] = useState(newsJSON);
  const showListsNews = data.map((e, index) => {
    return (
      <div className="col-3 ">
        <NewsComponent image={e.image} name={e.name} created={e.created} />
        <div className="space-homenews"></div>
      </div>
    );
  });
  return (
    <div className="HomeNew">
      <div className="wrap-body">
        <h2>TIN TỨC</h2>
        <div className="row">{showListsNews}</div>
      </div>
    </div>
  );
}
