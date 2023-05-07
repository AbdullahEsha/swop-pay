import CommonBtn from "@/components/CommonBtn";
import ProductCard from "@/components/ProductCard";
import React from "react";

const Index = () => {
  return (
    <>
      <div className="product-container">
        <div className="grid-6">
          {[...Array(15)].map((x, i) => (
            <ProductCard
              key={i}
              id="624cd765a5d835001615a6d3"
              imageUrl="/image/product/product-1.png"
              name="Swop NFC Band"
              description="Good sound quality and perfect bass provide to you and long lasting."
              price={`$${29}`}
              quantity={`${23}`}
            />
          ))}
        </div>
        <CommonBtn url="/product/add-product" btnlabel="Add Product" />
      </div>
    </>
  );
};

export default Index;
