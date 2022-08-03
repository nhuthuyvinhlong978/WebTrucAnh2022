import "./product.css";

// import imgNew1 from "../../assets/image/img-new1.png"

export default function ProductsComponents(props) {
  return (
    <div className="products ">
      <div className="card">
        <img src={props.image} alt="..." width="80%" />
      </div>
      <div className="bg-product">
        <div className="content-product">
          <div className="type-product">
            <span>{props.type}</span>
          </div>
          <div className="name-product">
            <span>{props.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
