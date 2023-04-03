import Image from "next/image";

const ProductCard = (props) => {
  return (
    <>
      <div className="product-card">
        <a href={`/products/product?_id=${props.id}`}>
          <Image src={`${props.imageUrl}`} height={384} width={384} />
          <h5>{props.name}</h5>
          <p>{props.description}</p>
          <div className="product-price">
            <label className="left">{props.price}</label>
            <label className="right">QTY: {props.quantity}</label>
          </div>
        </a>
      </div>
    </>
  );
};

export default ProductCard;
