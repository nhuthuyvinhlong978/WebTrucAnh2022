import ProductComponent from "./Product.component";

export default function HighLightComponent(props) {
  const showListsHighLight = props.product.map((e, index) => {
    if (e.highlight) {
      return <ProductComponent image={e.image} name={e.name} />;
    }
  });
  return (
    <div className="mt-5">
      <div>
        <div>
          <span>San pham noi bat</span>
        </div>
        {showListsHighLight}
      </div>
    </div>
  );
}
