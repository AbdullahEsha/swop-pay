import Image from "next/image";
import Link from "next/link";
import { FaChartPie } from "react-icons/fa";
import { BsPeopleFill, BsBoxSeam } from "react-icons/bs";
import { MdOutlineEventNote, MdSupportAgent } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import { IoTicketOutline, IoIdCardOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
// import useWindowDimensions from "./useWindowDimensions";
import { useRouter } from "next/router";

const SideBar = () => {
  // const { width } = useWindowDimensions();
  const router = useRouter();

  return (
    <>
      <div className="side-bar">
        <div className="side-bar-top">
          <Link
            href="https://swop-pay.netlify.app"
            target="_blank"
            className="swop-pay-logo"
          >
            <Image
              src="/image/swop-pay-logo.png"
              alt="swop-pay-logo"
              height={32}
              width={200}
              id="dashboard-logo-size"
            />
          </Link>
          <ul>
            <li
              id={`${
                router.pathname.split("/")[1] === "dashboard" && "active-menu"
              }`}
            >
              <Link href="/dashboard">
                <FaChartPie size={20} />
                Dashboard
              </Link>
            </li>
            <li
              id={`${
                router.pathname.split("/")[1] === "profile" && "active-menu"
              }`}
            >
              <Link href="/profile">
                <BsPeopleFill size={20} /> Profile
              </Link>
            </li>
            <li
              id={`${
                router.pathname.split("/")[1] === "invoice" && "active-menu"
              }`}
            >
              <Link href="/invoice">
                <MdOutlineEventNote size={20} /> Invoice
              </Link>
            </li>
            <li
              id={`${
                router.pathname.split("/")[1] === "orders" && "active-menu"
              }`}
            >
              <Link href="/orders">
                <RxDragHandleDots2 size={20} /> Orders
              </Link>
            </li>
            <li
              id={`${
                router.pathname.split("/")[1] === "products" && "active-menu"
              }`}
            >
              <Link href="/products">
                <BsBoxSeam size={20} /> Products
              </Link>
            </li>
            <li
              id={`${
                router.pathname.split("/")[1] === "mints" && "active-menu"
              }`}
            >
              <Link href="/mints">
                <IoIdCardOutline size={20} /> Mints
              </Link>
            </li>
            <li
              id={`${
                router.pathname.split("/")[1] === "coupons" && "active-menu"
              }`}
            >
              <Link href="/coupons">
                <IoTicketOutline size={20} /> Coupons
              </Link>
            </li>
            <li
              id={`${
                router.pathname.split("/")[1] === "about" && "active-menu"
              }`}
            >
              <Link href="/about">
                <RiErrorWarningLine size={20} /> About
              </Link>
            </li>
            <li
              id={`${
                router.pathname.split("/")[1] === "contact" && "active-menu"
              }`}
            >
              <Link href="/contact">
                <MdSupportAgent size={20} /> Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-side-bar">
          <div className="footer-side-bar-bottom">
            <Image
              src="/image/travis.png"
              alt="travis"
              height={66}
              width={66}
              className="travis"
            />
            <div className="footer-side-bar-travis">
              <h4>Travis Herron</h4>
              <label>$travis_herron</label>
            </div>
          </div>
          <Image
            src="/image/footer-qrcode.png"
            alt="qrcode"
            height={122}
            width={122}
            className="footer-qrcode"
          />
        </div>
      </div>
    </>
  );
};

export default SideBar;

// <div className="mobilenav-menu-hidden">
//   <Link href="/dapp-store">
//     <FaChartPie size={20} />
//     DApp Store
//   </Link>
//   <Link href="/">
//     <BsPeopleFill size={20} /> Profile
//   </Link>
//   <Link href="/">
//     <MdOutlineEventNote size={20} /> Prices
//   </Link>
//   <Link href="/">
//     <RxDragHandleDots2 size={20} /> Accounting
//   </Link>
//   <Link href="/">
//     <BsBoxSeam size={20} /> Swop Pay
//   </Link>
//   <Link href="/">
//     <BsBoxSeam size={20} /> Mint Machine
//   </Link>
//   <Link href="/">
//     <RiErrorWarningLine size={20} /> Purchase
//   </Link>
// </div>
