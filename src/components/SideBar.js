import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChartPie } from "react-icons/fa";
import { BsPeopleFill, BsBoxSeam } from "react-icons/bs";
import { MdOutlineEventNote, MdSupportAgent } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import { IoTicketOutline, IoIdCardOutline } from "react-icons/io5";
import { RiErrorWarningLine } from "react-icons/ri";
import useWindowDimensions from "./useWindowDimensions";

const SideBar = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      {width > 991 ? (
        <div className="side-bar">
          <div className="side-bar-top">
            <Link
              href="https://swopnew.netlify.app"
              target="_blank"
              className="swop-logo"
            >
              <Image
                src="/image/dapp-logo.png"
                alt="dashboard-logo"
                height={32}
                width={200}
                id="dashboard-logo-size"
              />
            </Link>
            <ul>
              <li id="active-menu">
                <Link href="/dapp-store">
                  <FaChartPie size={20} />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BsPeopleFill size={20} /> Profile
                </Link>
              </li>
              <li>
                <Link href="/">
                  <MdOutlineEventNote size={20} /> Invoice
                </Link>
              </li>
              <li>
                <Link href="/">
                  <RxDragHandleDots2 size={20} /> Orders
                </Link>
              </li>
              <li>
                <Link href="/">
                  <BsBoxSeam size={20} /> Products
                </Link>
              </li>
              <li>
                <Link href="/">
                  <IoIdCardOutline size={20} /> Mint
                </Link>
              </li>
              <li>
                <Link href="/">
                  <IoTicketOutline size={20} /> Coupon
                </Link>
              </li>
              <li>
                <Link href="/">
                  <RiErrorWarningLine size={20} /> About
                </Link>
              </li>
              <li>
                <Link href="/">
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
      ) : (
        <div className="mobilenav-menu-hidden">
          <Link href="/dapp-store">
            <FaChartPie size={20} />
            DApp Store
          </Link>
          <Link href="/">
            <BsPeopleFill size={20} /> Profile
          </Link>
          <Link href="/">
            <MdOutlineEventNote size={20} /> Prices
          </Link>
          <Link href="/">
            <RxDragHandleDots2 size={20} /> Accounting
          </Link>
          <Link href="/">
            <BsBoxSeam size={20} /> Swop Pay
          </Link>
          <Link href="/">
            <BsBoxSeam size={20} /> Mint Machine
          </Link>
          <Link href="/">
            <RiErrorWarningLine size={20} /> Purchase
          </Link>
        </div>
      )}
    </>
  );
};

export default SideBar;
