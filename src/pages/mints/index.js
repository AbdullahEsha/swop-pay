import CommonBtn from "@/components/CommonBtn";
import MintCard from "@/components/MintCard";
import React from "react";

const Index = () => {
  return (
    <>
      <div className="mint-container">
        <div className="grid-4">
          {[...Array(8)].map((x, i) => (
            <MintCard
              key={i}
              id="624cd765a5d835001615a6d3"
              imageUrl="/image/mint/mint-1.png"
              name="Lorem ipsum dol..."
              price="0.022 ETH"
            />
          ))}
        </div>
        <CommonBtn url="/mints/create-mint" btnlabel="Mint" />
      </div>
    </>
  );
};

export default Index;
