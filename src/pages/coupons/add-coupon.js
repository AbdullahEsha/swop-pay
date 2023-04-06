import CommonBtn2 from "@/components/CommonBtn2";
import Image from "next/image";
import React from "react";

const Coupon = () => {
  return (
    <>
      <div className="promocode-card">
        <div className="promocode-background">
          <Image
            src="/image/promo-code.png"
            alt="promo-code"
            height={262}
            width={434}
          />
        </div>
        <div className="promocode-bottom">
          <div className="promocode-inside">
            <p>Name:</p>
            <input type="text" placeholder="Enter your name." />
            <p>Contact or Promocode:</p>
            <input type="text" placeholder="0x628js784489" />
            <p>Expires:</p>
            <input type="date" />
            <p>Discount Type:</p>
            <input type="radio" name="discount-type" /> {" "}
            <label>Percent (%)</label> 
            <input type="radio" name="discount-type" />  <label>Amount $</label>
            <p>Description:</p>
            <textarea
              rows="9"
              placeholder="Write your description....."
            ></textarea>
          </div>
          <div className="promocode-inside">
            <p>Amount Off:</p>
            <input type="text" placeholder="Enter your name." />
            <p>Coupon:</p>
            <input type="text" placeholder="0x628js784489" />
            <p>Token Link:</p>
            <input type="text" placeholder="0x628js784489" />
            <p>Spent minimum amount:</p>
            <input type="text" placeholder="0x628js784489" />
            <p>Free shipping:</p>
            <input type="radio" name="shiping-type" />  <label>Yes</label> 
            <input type="radio" name="shiping-type" />  <label>No</label>
            <p>Image:</p>
            <input type="file" />
          </div>
          <CommonBtn2 btnlabel="Save" />
          <CommonBtn2 btnlabel="Delete" />
        </div>
      </div>
    </>
  );
};

export default Coupon;
