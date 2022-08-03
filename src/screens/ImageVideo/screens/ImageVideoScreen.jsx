import React, { useState } from "react";
import BannerComponent from "../../../components/Banner/Banner.component";
import bannerNews from "../../../assets/image/bannerNews.png";

// import ImageVideo from "../../ImageVideo/components/Category";
import ImageVideoConponents from "../../../components/ImageVideo/ImageVideo";
import imagevideo from "./imagevideo.json";
import CategoryImageVideo from "../components/Category/CategoryImageVideo";
export default function ImageVideoScreen() {
  const [data, setData] = useState(imagevideo);
  const [type, setType] = useState(1);
  const showListsImageVideo = data.map((e, index) => {
    if (e.type == type) {
      return (
        <div className="col-3">
          <ImageVideoConponents
            name={e.name}
            created={e.created}
            image={e.image}
          />
        </div>
      );
    }
  });
  const handleClickType = (typeCagtegory) => {
    setType(typeCagtegory);
  };

  return (
    <div>
      <BannerComponent image={bannerNews} title="Hình ảnh" />

      <div className="wrap-body">
        <CategoryImageVideo handleClickType={handleClickType} />
        <div className="row mt-5">{showListsImageVideo}</div>
      </div>
    </div>
  );
}
