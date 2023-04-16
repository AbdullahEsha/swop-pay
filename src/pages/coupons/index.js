import { BiDownload } from "react-icons/bi";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <div className="card">
        <div className="coupon-top-panel">
          <div className="filter">
            <p>Filter</p>
            <select>
              <option>Date</option>
            </select>
            <select>
              <option>Name</option>
            </select>
            <button type="submit">
              Export <BiDownload size={20} />
            </button>
          </div>
        </div>
        <div className="table">
          <div className="table-head">
            <p className="coupon-date">Date</p>
            <p className="coupon-orderNo">Order No</p>
            <p className="coupon-name">Customer Name</p>
            <p className="coupon-address">Customer Address</p>
            <p className="coupon-url">Swop URL</p>
            <p className="coupon-total">Total</p>
          </div>
          {[...Array(10)].map((x, i) => (
            <Link href="/coupons/624cd765a5d835001615a6d3" key={i}>
              <div className="table-body">
                <p className="coupon-date">1-2-2023</p>
                <p className="coupon-orderNo">1009701</p>
                <p className="coupon-name">Hamid Hasan</p>
                <p className="coupon-address">Hamid Hasan</p>
                <p className="coupon-url">Http//swopme.co-jdudy/sksk</p>
                <p className="coupon-total">$24.34</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
