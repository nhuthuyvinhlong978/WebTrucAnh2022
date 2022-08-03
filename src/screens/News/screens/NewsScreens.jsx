import React, { useState } from "react";
import BannerComponent from "../../../components/Banner/Banner.component";
import bannerNews from "../../../assets/image/bannerNews.png";
import CategoryNews from "../components/Category/CategoryNews";
import news from "./news.json";
import NewsComponent from "../../../components/News/News";

export default function NewsScreens() {
  const [data, setData] = useState(news);
  const [type, setType] = useState(1);

  const showListsNews = data.map((e, index) => {
    if (e.type == type) {
      return (
        <div className="col-3">
          <NewsComponent name={e.name} created={e.created} image={e.image} />
        </div>
      );
    }
  });
  const handleClickType = (typeCagtegory) => {
    setType(typeCagtegory);
  };

  return (
    <div>
      <BannerComponent image={bannerNews} title="Tin tuc" />
      <div className="wrap-body">
        <CategoryNews handleClickType={handleClickType} />
        <div className="row mt-5">{showListsNews}</div>
      </div>
    </div>
  );
}
