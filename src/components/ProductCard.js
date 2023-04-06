import Image from "next/image";
import Link from "next/link";

const ProductCard = (props) => {
  return (
    <>
      <div className="product-card">
        <Link href={`/products/product?_id=${props.id}`}>
          <Image
            src={`${props.imageUrl}`}
            alt="product-image"
            height={384}
            width={384}
          />
          <h5>{props.name}</h5>
          <p>{props.description}</p>
          <div className="product-price">
            <label className="left">{props.price}</label>
            <label className="right">QTY: {props.quantity}</label>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
