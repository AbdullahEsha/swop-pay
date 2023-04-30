import Image from "next/image";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import useWindowDimensions from "./useWindowDimensions";

const MainNav = () => {
  const { width } = useWindowDimensions();
  const [show, handleShow] = useState(false);
  const [navitems, setNavitems] = useState(true);

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
      <div
        className={`${show && "nav-panel-scroll"} nav-panel-scroll-bar ${
          width < 992 && "nav-panel-scroll"
        }`}
      >
        <div className="nav-panel container">
          {navitems ? (
            <CgMenuRight
              size={30}
              color="#fff"
              id="sidebar-menu-top"
              onClick={() => setNavitems(false)}
            />
          ) : (
            <CgClose
              id="sidebar-menu-top"
              size={30}
              color="#fff"
              onClick={() => setNavitems(true)}
            />
          )}
          <Link href="/" id="logo-swop">
            <Image
              src="/image/swop-pay-logo-white.png"
              alt="swop-pay-logo-white"
              height={35}
              width={219}
            />
          </Link>
          {width < 992 && navitems ? (
            ""
          ) : (
            <ul>
              <li>
                <Link href="/dashboard" target="_blank">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/invoice">Invoice</Link>
              </li>
              <li>
                <Link href="/orders">Orders</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/coupon">Coupon</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li id="profile-list-icon">
                <Link href="/#">
                  <BsPersonCircle size="25" />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default MainNav;
