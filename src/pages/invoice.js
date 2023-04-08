import { BiDownload } from "react-icons/bi";

const Invoice = () => {
  return (
    <>
      <div className="card">
        <div className="invoice-top-panel">
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
            <p className="invoice-date">Date</p>
            <p className="invoice-orderNo">Order No</p>
            <p className="invoice-name">Customer Name</p>
            <p className="invoice-address">Customer Address</p>
            <p className="invoice-url">Swop URL</p>
            <p className="invoice-total">Total</p>
          </div>
          {[...Array(10)].map((x, i) => (
            <div className="table-body" key={i}>
              <p className="invoice-date">1-2-2023</p>
              <p className="invoice-orderNo">1009701</p>
              <p className="invoice-name">Hamid Hasan</p>
              <p className="invoice-address">Hamid Hasan</p>
              <p className="invoice-url">Http//swopme.co-jdudy/sksk</p>
              <p className="invoice-total">$24.99</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Invoice;
