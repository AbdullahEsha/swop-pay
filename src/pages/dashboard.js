import { useState } from "react";
import Image from "next/image";
import useWindowDimensions from "../components/useWindowDimensions";
import { BsPlusLg } from "react-icons/bs";
import dynamic from "next/dynamic";
import CommonBtn from "@/components/CommonBtn";
import Box from "@mui/material/Box";
import { AiFillPlusCircle, AiFillCopy, AiOutlineQrcode } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import ProductCard from "@/components/ProductCard";
import QrCodeScan from "@/components/QrCodeScan";
import Link from "next/link";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Dashboard = () => {
  const [option, setOption] = useState({
    options: {
      chart: {
        id: "data-example",
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#536EEF"],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "iOS",
        data: [31, 40, 28, 51, 42, 109, 100, 111, 90, 80, 75, 50],
      },
    ],
  });

  const columns = [
    {
      field: "trakingNo",
      headerName: "Traking no",
      width: 100,
    },
    {
      field: "productName",
      headerName: "Product Name",
      width: 130,
    },
    {
      field: "price",
      headerName: "Price ($)",
      type: "number",
      width: 70,
    },
    {
      field: "totalOrder",
      headerName: "Total Order",
      type: "number",
      width: 110,
    },
    {
      field: "totalAmount",
      headerName: "Total Amount ($)",
      width: 120,
      type: "number",
      valueGetter: (params) => `${params.row.price * params.row.totalOrder}`,
    },
  ];

  const rows = [
    {
      id: 1,
      trakingNo: "#12209367",
      productName: "Watch JET",
      price: 68,
      totalOrder: 27,
    },
    {
      id: 2,
      trakingNo: "#12209367",
      productName: "Watch JET",
      price: 67,
      totalOrder: 27,
    },
    {
      id: 3,
      trakingNo: "#12209367",
      productName: "Watch JET",
      price: 69,
      totalOrder: 27,
    },
    {
      id: 4,
      trakingNo: "#12209367",
      productName: "Watch JET",
      price: 65,
      totalOrder: 27,
    },
    {
      id: 5,
      trakingNo: "#12209367",
      productName: "Watch JET",
      price: 60,
      totalOrder: 27,
    },
  ];

  return (
    <>
      <div className="dashboard-home">
        <div className="dashboard-home-card1">
          <Image src="/image/travis.png" alt="travis" height={66} width={66} />
          <div className="dashboard-home-card1-inside">
            <h5>Travis Herron</h5>
            <p>$travisherron</p>
            <div className="dashboard-home-card1-button">
              <button>Copy</button>
              <button>QR</button>
            </div>
            <h6>Charolotte, NC</h6>
          </div>
          <div className="dashboard-home-card1-list-container">
            <div className="dashboard-home-card1-list odd first">
              <p>Instant</p>
              <BsPlusLg size={18} />
            </div>
            <div className="dashboard-home-card1-list even">
              <p>Invoice</p>
              <BsPlusLg size={18} />
            </div>
            <div className="dashboard-home-card1-list odd">
              <p>Product</p>
              <BsPlusLg size={18} />
            </div>
            <div className="dashboard-home-card1-list even">
              <p>Mint</p>
              <BsPlusLg size={18} />
            </div>
            <div className="dashboard-home-card1-list odd last">
              <p>Discount Code</p>
              <BsPlusLg size={18} />
            </div>
          </div>
        </div>
        <div className="dashboard-home-card2">
          <h4>$13,8904.09</h4>
          <p>Revenue</p>
          <div className="dashboard-home-card2-right-status">
            <h5>3.87%</h5>
            <p>↑↓ Today</p>
          </div>
          <div className="dashboard-home-card2-chart">
            <ReactApexChart
              options={option.options}
              series={option.series}
              type="area"
              width={"100%"}
              height={260}
            />
          </div>
        </div>
        <div className="dashboard-home-card3">
          <h3>Links</h3>
          <div className="dashboard-home-card3-content">
            <p className="dashboard-home-card3-product-name">Product Name</p>
            <p className="dashboard-home-card3-price">Price</p>
            <p className="dashboard-home-card3-exp">EXP</p>
          </div>
          <div className="dashboard-home-card3-content">
            <p className="dashboard-home-card3-product-name">
              <b>JBL Headphone</b>
            </p>
            <p className="dashboard-home-card3-price">
              <span>$44.56</span>
            </p>
            <div className="dashboard-home-card3-exp">
              <span>7/11/2022</span>
              <div className="dashboard-home-card3-exp-icon">
                <AiOutlineQrcode
                  size={20}
                  onClick={() =>
                    (document.querySelector(
                      ".modal-qr-code-scan-out"
                    ).style.display = "block")
                  }
                />
                <AiFillCopy size={20} />
              </div>
            </div>
          </div>
          <div className="dashboard-home-card3-content">
            <p className="dashboard-home-card3-product-name">
              <b>JBL Headphone</b>
            </p>
            <p className="dashboard-home-card3-price">
              <span>$44.56</span>
            </p>
            <div className="dashboard-home-card3-exp">
              <span>7/11/2022</span>
              <div className="dashboard-home-card3-exp-icon">
                <AiOutlineQrcode
                  size={20}
                  onClick={() =>
                    (document.querySelector(
                      ".modal-qr-code-scan-out"
                    ).style.display = "block")
                  }
                />
                <AiFillCopy size={20} />
              </div>
            </div>
          </div>
          <QrCodeScan qrCode="footerQrCode.png" link="www.swopme.co" />
          <CommonBtn btnlabel={"Add More"} url={"/add-more"} />
        </div>

        <div className="dashboard-home-card4">
          <h3>Recent Orders</h3>
          <div className="dashboard-home-card4-data">
            <Box sx={{ height: 370, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
              />
            </Box>
          </div>
          <CommonBtn btnlabel={"View Orders"} url={"/view-orders"} />
        </div>
        <div className="dashboard-home-card5">
          <div className="dashboard-home-card5-top">
            <div className="grid-3">
              {[...Array(4)].map((x, i) => (
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
              <div className="product-card" style={{ minHeight: "223px" }}>
                <Link href="/products/add-product">
                  <div className="add-product">
                    <h5>Add Product</h5>
                    <AiFillPlusCircle size={30} color="#f2f2f2" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="dashboard-home-card5-bottom">
            <h3>Coupons</h3>
            <div className="coupon-field">
              <Image
                src="/image/coupon.png"
                alt="coupon"
                height={68}
                width={90}
                className="coupon-image"
              />
              <div className="coupon-offer">
                <p>20% OFF</p>
                <label>0x123shsjkadff</label>
              </div>
              <div className="coupon-dateTime">
                <p>EXP 1/6/2022</p>
                <p>Receipt: 1</p>
              </div>
            </div>
            <div className="coupon-field">
              <Image
                src="/image/coupon.png"
                alt="coupon"
                height={68}
                width={90}
                className="coupon-image"
              />
              <div className="coupon-offer">
                <p>20% OFF</p>
                <label>0x123shsjkadff</label>
              </div>
              <div className="coupon-dateTime">
                <p>EXP 1/6/2022</p>
                <p>Receipt: 1</p>
              </div>
            </div>
            <br />
            <CommonBtn
              btnlabel={"Create Coupon"}
              url={"/coupons/create-coupon"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
