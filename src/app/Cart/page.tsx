"use client";
import Quantity from "../components/Qunatity";
import React, { useState } from "react";
import next from "../img/Delete.png";
import excavator from "../img/jason-jarrach-QN50uuCf6UY-unsplash.jpg";
import Image from "next/image";
import Link from "next/link";
export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };
  return (
    <div className="row d-flex justify-content-center gap-3 mt-5">
      <div className="col-7 bg-body p-3">
        <h3>Shopping cart</h3>
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <Image
              src={excavator}
              alt="cart-image"
              width={200}
              height={200}
              className="align-middle"
            />
          </div>
          <div className=" row row-cols-lg-4 d-flex ms-5 gap-5">
            <div className="col">
              <p>Name</p>
              <p>300.9 D</p>
            </div>
            <div className="col">
              <p>Quantity</p>
              <Quantity quantity={quantity} onChange={handleQuantityChange} />
            </div>
            <div className="col">
              <p>Price</p>
              <p>$ 10000</p>
            </div>
            <div className="col">
              <p>Color</p>
              <div
                className="rounded"
                style={{
                  backgroundColor: "#ED9301",
                  width: "50px",
                  height: "50px"
                }}></div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end ">
          <p>Delete</p>
          <Image src={next} alt="delete" width={30} height={30} className="" />
        </div>
      </div>
      <div className="col-3 bg-body p-3">
        <h3>Order total</h3>
        <div className="">
          <div className="d-flex justify-content-between mx-4">
            <p>Subtotal:</p>
            <p>$ 9.500</p>
          </div>
          <div className="d-flex justify-content-between mx-4">
            <p>Delivery:</p>
            <p>$ 500</p>
          </div>
          <div className="d-flex justify-content-between mx-4">
            <p>Currency:</p>
            <p>US Dollar</p>
          </div>
          <div className="d-flex justify-content-between mx-4">
            <p>VAT:</p>
            <p>$ 2.700</p>
          </div>
          <div className="d-flex justify-content-between mx-4">
            <p className="fw-bold">Total:</p>
            <p className="fw-bold">$ 10.000</p>
          </div>
          <div className="d-flex justify-content-end mx-4">
            <button type="button" className="btn mb-4 mt-4 p-2 cta-button">
              <Link
                className="text-decoration-none button-text-color"
                href={""}>
                Check out
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
