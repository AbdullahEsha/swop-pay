import Image from "next/image";
import Link from "next/link";
import { FaChartPie } from "react-icons/fa";
import { BsPeopleFill, BsBoxSeam } from "react-icons/bs";
import { MdOutlineEventNote, MdSupportAgent } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import { IoTicketOutline, IoIdCardOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import { CgMenuRight, CgClose } from "react-icons/cg";
// import useWindowDimensions from "./useWindowDimensions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SideBar = () => {
  // const { width } = useWindowDimensions();
  const [navitems, setNavitems] = useState(true);
  const router = useRouter();

  const [show, handleShow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <>
      <div className={`${show && "navM-panel-scroll"} side-bar`}>
        <div className="side-bar-top">
          <Image
            src="/image/travis.png"
            alt="travis"
            height={66}
            width={66}
            className="travis"
            id="sidebar-menu-top"
          />

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

          {navitems ? (
            <CgMenuRight
              size={30}
              id="sidebar-menu-top"
              onClick={() => setNavitems(false)}
            />
          ) : (
            <CgClose
              id="sidebar-menu-top"
              size={30}
              onClick={() => setNavitems(true)}
            />
          )}
          <ul className={`${navitems && "navitemhide"}`}>
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
