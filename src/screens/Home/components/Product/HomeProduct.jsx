import React, { useState } from "react";
import "./homeproduct.css";
import productsJSON from "./products.json";

import ProductComponent from "../../../../components/Product/Products";
import Slider from "react-slick";

export default function HomeProduct() {
  const [data, setData] = useState(productsJSON);
  const showListsProducts = data.map((e, index) => {
    return (
      <div className="col-3 mt-4">
        <ProductComponent image={e.image} type={e.type} name={e.name} />
        <div className="space-homeproduct"></div>
      </div>
    );
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    rows: 2,
    slidesToScroll: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="HomeProduct mt-5">
      <div className="wrap-body">
        <h2>Sản phẩm</h2>
        <div className="row">
          <Slider {...settings}>{showListsProducts}</Slider>
        </div>
        {/* <div className="row">{showListsProducts}</div> */}
      </div>
    </div>
  );
}
