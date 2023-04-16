import CommonBtn2 from "@/components/CommonBtn2";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";

const Index = () => {
  return (
    <>
      <div className="card">
        <div className="order-top-panel">
          <CommonBtn2 btnlabel="Download Spreadheet" />
          <div className="filter">
            <p>Filter</p>
            <select>
              <option>Date</option>
            </select>
            <select>
              <option>Name</option>
            </select>
          </div>
        </div>
        <div className="table">
          <div className="table-head">
            <p className="order-orderNo">Order No</p>
            <p className="order-name">Customer Name</p>
            <p className="order-product">Product</p>
            <p className="order-price">Price</p>
            <p className="order-date">Delivery Date</p>
            <p className="order-status">Delivery Status</p>
          </div>
          {[...Array(10)].map((x, i) => (
            <Link href="/orders/624cd765a5d835001615a6d3" key={i}>
              <div className="table-body">
                <p className="order-orderNo">1009701</p>
                <p className="order-name">Hamid Hasan</p>
                <p className="order-product">Black NFC Card</p>
                <p className="order-price">$24.99</p>
                <p className="order-date">7/11/2022</p>
                <p className="order-status">
                  {i === 3 || i === 5 || i === 8 ? (
                    <span style={{ backgroundColor: "#FFD27A" }}>
                      Processing
                    </span>
                  ) : (
                    <span style={{ backgroundColor: "#2AC53A" }}>Complete</span>
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
