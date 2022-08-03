import React from "react";
import bannerIntroduce from "../../../assets/image/bannerIntroduce.png";
import BannerComponent from "../../../components/Banner/Banner.component";

export default function ShrimpScreens() {
  return (
    <div>
      <BannerComponent image={bannerIntroduce} title="Tôm giống" />
      {/* <h2>Tom giong</h2> */}
    </div>
  );
}
