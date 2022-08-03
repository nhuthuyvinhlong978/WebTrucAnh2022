import React, { useState, useEffect } from "react";
import "./product.css";
import ListProduct from "../../../resources/products.json";
import ProductComponent from "../components/Product.component";
import slug from "../../../resources/slug";
import { useHistory } from "react-router-dom";
import HighLightComponent from "../components/Highlight.component";

export default function ProductsScreen() {
  const history = useHistory();
  const [product, setProduct] = useState(ListProduct);
  const [allProduct, setAllProduct] = useState(ListProduct);
  const [type, setType] = useState(0);

  useEffect(() => {
    const arrProduct = [];
    if (type == 0) {
      setProduct(ListProduct);
    } else {
      setProduct(
        ListProduct.filter((e) => {
          return e.type == type;
        })
      );
    }
  }, [type]);

  const showListsProduct = product.map((e, index) => {
    return (
      <div
        className="col-4 mt-4"
        onClick={() => {
          handleClickDetails(e.id);
        }}
      >
        <ProductComponent image={e.image} name={e.name} />
      </div>
    );
  });
  const handleClick = (type) => {
    setType(type);
  };
  const handleClickDetails = (id) => {
    history.push({
      pathname: slug.details,
      search: `?id=${id}`,
    });
  };
  return (
    <div className="wrap-body">
      <div className="main-product">
        <h2>Sản phẩm</h2>
        <div className="row">
          <div className="col-3">
            <div className="category-product">
              <div
                className={
                  "category-product-item " + (type == 0 ? "item-active" : "")
                }
                onClick={() => {
                  handleClick(0);
                }}
              >
                <span>Tất cả</span>
              </div>
              <div
                className={
                  "category-product-item " + (type == 1 ? "item-active" : "")
                }
                onClick={() => {
                  handleClick(1);
                }}
              >
                <span>Thức ăn bổ sung</span>
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div
                className={
                  "category-product-item " + (type == 2 ? "item-active" : "")
                }
                onClick={() => {
                  handleClick(2);
                }}
              >
                <span>Khoáng chất, dinh dưỡng</span>
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div
                className={
                  "category-product-item " + (type == 3 ? "item-active" : "")
                }
                onClick={() => {
                  handleClick(3);
                }}
              >
                <span>Xử lý môi trường</span>
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <HighLightComponent product={allProduct} />
          </div>
          <div
            className="col-9"
            onClick={() => {
              handleClick(3);
            }}
          >
            <div className="row">{showListsProduct}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
