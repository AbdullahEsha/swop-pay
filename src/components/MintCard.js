import Image from "next/image";
import Link from "next/link";
import React from "react";

const MintCard = (props) => {
  return (
    <>
      <div className="mint-card">
        <Link href={`/mints/mint?_id=${props.id}`}>
          <Image
            src={`${props.imageUrl}`}
            alt="mint-image"
            height={252}
            width={250}
          />
          <h3>{props.name}</h3>
          <h5>{props.price}</h5>
          <p>1 day ago</p>
          <span>Buy</span>
        </Link>
      </div>
    </>
  );
};

export default MintCard;
