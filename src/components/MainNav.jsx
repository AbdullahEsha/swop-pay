import Image from "next/image";
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { useEffect, useState } from "react";

const MainNav = () => {
  const [show, handleShow] = useState(false);

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
      <div className={`${show && "nav-panel-scroll"} nav-panel-scroll-bar`}>
        <div className="nav-panel container">
          <Link href="/" id="logo-swop">
            <Image
              src="/image/swop-pay-logo-white.png"
              alt="swop-pay-logo-white"
              height={35}
              width={219}
            />
          </Link>
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
            <li>
              <Link href="/#">
                <BsPersonCircle size="25" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainNav;
