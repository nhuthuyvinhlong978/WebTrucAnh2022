import React, { useState } from "react";
import BannerComponent from "../../../components/Banner/Banner.component";
import CategoryProcess from "../components/Category/CategoryProcess";
import bannerNews from "../../../assets/image/bannerNews.png";
import process from "./process.json";
import NewsComponent from "../../../components/News/News";

export default function ProcessScreens() {
  const [data, setData] = useState(process);
  const [type, setType] = useState(1);

  const showListsProcess = data.map((e, index) => {
    if (e.type == type) {
      return (
        <div className="col-3">
          <NewsComponent image={e.image} created={e.created} name={e.name} />
        </div>
      );
    }
  });

  console.log(type);

  const handleClickType = (typeProcess) => {
    setType(typeProcess);
  };
  return (
    <div>
      <BannerComponent image={bannerNews} title="Quy trình" />
      <div className="wrap-body">
        <CategoryProcess handleClickType={handleClickType} />
        <div className="row mt-5">{showListsProcess}</div>
      </div>
    </div>
  );
}
