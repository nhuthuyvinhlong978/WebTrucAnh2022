import React, { useEffect, useState } from "react";
import "./detailsScreens.css";
import queryString from "query-string";
import listsProduct from "../../../resources/products.json";
export default function DetailsScreens(props) {
  const search = queryString.parse(props.location.search);
  const id = search.id;
  const [details, setDetails] = useState();

  useEffect(() => {
    const details = listsProduct.filter((e) => {
      return e.id == id;
    });
    setDetails(details[0]);
  }, [id]);

  const showListsIngredient = details?.ingredient.map((e, index) => {
    return (
      <div>
        <span>{e}</span>
      </div>
    );
  });
  const showListAmount = details?.amount.map((e, index) => {
    return (
      <div>
        <span>{e}</span>
      </div>
    );
  });

  const handleClick = () => {
    alert("Xin goi den so 090998989");
  };

  return (
    <div>
      <div className="wrap-body">
        <div className="title-detail-product">
          <h2>Chi tiet san pham</h2>
        </div>
        <div className="image-detail-products">
          <img src={details?.image} alt="" width="20%" />
        </div>
        <div className="name-detail-products">
          <span> {details?.name}</span>
        </div>
        <div className="ingredient-detail-products">
          <span>Thanh phan:</span>
          <div className="ingredient-detail-products-item">
            {showListsIngredient}
          </div>
        </div>

        <div className="uses-detail-products">
          <span>Cong dung: </span>
          <div className="uses-detail-products-item">
            <span>{details?.uses}</span>
          </div>
        </div>
        <div className="amount-detail-products">
          <span>Lieu luong:</span>
          <div className="amount-detail-products-items">{showListAmount}</div>
        </div>
        <div className="wrap-button-order">
          <div className="button-order" onClick={handleClick}>
            <a href="tel:0999898890">
              <i class="fa-solid fa-phone"></i>
              <span>Dang ki mua hang</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
