import { useState } from "react";
import Image from "next/image";
import useWindowDimensions from "../components/useWindowDimensions";
import { BsPlusLg } from "react-icons/bs";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Dashboard = () => {
  const { width } = useWindowDimensions();
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

  return (
    <div className="dashboard-container">
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
              <BsPlusLg size={20} />
            </div>
            <div className="dashboard-home-card1-list even">
              <p>Invoice</p>
              <BsPlusLg size={20} />
            </div>
            <div className="dashboard-home-card1-list odd">
              <p>Product</p>
              <BsPlusLg size={20} />
            </div>
            <div className="dashboard-home-card1-list even">
              <p>Mint</p>
              <BsPlusLg size={20} />
            </div>
            <div className="dashboard-home-card1-list odd last">
              <p>Discount Code</p>
              <BsPlusLg size={20} />
            </div>
          </div>
        </div>
        <div className="dashboard-home-card2">
          <ReactApexChart
            options={option.options}
            series={option.series}
            type="area"
            width={
              width < 1549
                ? width < 1249
                  ? width < 992
                    ? width < 768
                      ? width < 550
                        ? 300
                        : 500
                      : 700
                    : 750
                  : 575
                : 450
            }
            height={260}
          />
        </div>
        <div className="dashboard-home-card3"></div>
        <div className="dashboard-home-card4"></div>
        <div className="dashboard-home-card5"></div>
      </div>
    </div>
  );
};

export default Dashboard;
