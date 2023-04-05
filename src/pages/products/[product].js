import React from "react";
import { RiFolderUploadFill } from "react-icons/ri";
import { BiMessageSquareEdit } from "react-icons/bi";
import { BsQrCode } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import QrCodeScan from "@/components/QrCodeScan";

const Product = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="product-upload-container">
          <div className="product-image-upload">
            <div className="product-image-upload-top">
              <button type="submit">
                <RiFolderUploadFill size={15} /> Export
              </button>
              <Image
                src="/image/product/product1.png"
                alt="product_image"
                height={200}
                width={200}
              />
              <Link href="/">
                <BiMessageSquareEdit size={35} color="#fff" />
              </Link>
            </div>
            <div className="product-image-upload-bottom">
              <Image
                src="/image/product/product1.png"
                alt="product_image"
                height={200}
                width={200}
              />
              <Image
                src="/image/product/product2.png"
                alt="product_image"
                height={200}
                width={200}
              />
              <Image
                src="/image/product/product1.png"
                alt="product_image"
                height={200}
                width={200}
              />
            </div>
          </div>
          <div className="product-view">
            <div className="grid-5">
              {[...Array(6)].map((x, i) => (
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
            </div>
          </div>
        </div>
        <div className="product-upload-container-2">
          <div className="product-name">
            <h3>Product Name:</h3>
            <input type="text" className="product-upload-input" />
            <div className="product-description-card">
              <h5>Description</h5>
              <textarea rows="7" className="product-name-textarea" />
            </div>
          </div>
          <div className="product-unit-price">
            <h3>Price:</h3>
            <input type="number" className="product-upload-input" />
            <div className="product-description-card">
              <h5>Variants</h5>
              <div className="product-name-textarea">
                <div className="variant-title-text">
                  <label>*Variant Title:</label>{" "}
                  <input type="text" placeholder="Input text here" />
                </div>
                <div className="variant-title-text">
                  <label>*Color:</label> <div className="color-red" />
                  <div className="color-green" />
                  <button>Delete Variant</button>
                </div>
                <div className="variant-title-text">
                  <label>*Size:</label>
                  <div className="size">M</div>
                  <div className="size">L</div>
                  <div className="size">XL</div>
                  <button>Delete Variant</button>
                </div>
                <button className="add-variant">Add Variant</button>
              </div>
            </div>
          </div>
          <div className="product-quantity">
            <h3>Quantity available:</h3>
            <input type="number" className="product-upload-input" />
            <div className="product-description-card">
              <h5>Info</h5>
              <div className="product-name-textarea">
                <div className="product-info">
                  <h4 className="product-info-subject">*Contact Info </h4>
                  <div className="product-info-decision">
                    : <input type="checkbox" /> <label>YES</label>{" "}
                    <input type="checkbox" /> <label>No</label>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-info-subject">*SWOP Profile </h4>
                  <div className="product-info-decision">
                    : <input type="checkbox" /> <label>YES</label>{" "}
                    <input type="checkbox" /> <label>No</label>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-info-subject">*Website </h4>
                  <div className="product-info-decision">
                    : <input type="checkbox" /> <label>YES</label>{" "}
                    <input type="checkbox" /> <label>No</label>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-info-subject">*App Taxes </h4>
                  <div className="product-info-decision">
                    : <input type="checkbox" /> <label>YES</label>{" "}
                    <input type="checkbox" /> <label>No</label>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-info-subject">*Shipping </h4>
                  <div className="product-info-decision">
                    : <input type="checkbox" /> <label>YES</label>{" "}
                    <input type="checkbox" /> <label>No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-upload-container-3">
          <div className="product-upload-container-left">
            <input type="button" value="Save" />
            <input type="button" value="Preview" />
            <input type="button" value="Delete" />
          </div>
          <QrCodeScan qrCode="footerQrCode.png" link="www.swopme.co" />
          <div className="product-upload-container-right">
            <button
              onClick={() =>
                (document.querySelector(
                  ".modal-qr-code-scan-out"
                ).style.display = "block")
              }
            >
              <BsQrCode size={20} />
            </button>

            <input type="button" value="Copy URL" />
            <input type="button" value="Export" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
