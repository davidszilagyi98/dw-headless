"use client";
import React from "react";
import Image from "next/image";
import facebook from "../img/Facebook.png";
import instagram from "../img/Instagram.png";
import linkedin from "../img/LinkedIn.png";
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  return (
    <footer className="bg-black mt-5">
      <ScrollToTop />
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-4 g-3 p-5 ">
          <div className="col">
            <h3 className="white-text">Construction</h3>
            <p className="white-text">
              Bjoernholms Allé 30, 8260 Viby J, Denmark
            </p>
          </div>
          <div className="col">
            <h4 className="white-text">Info</h4>
            <p className="white-text">Excavators</p>
            <p className="white-text">Trucks</p>
            <p className="white-text">Excavators</p>
          </div>
          <div className="col">
            <h4 className="white-text">Info</h4>
            <p className="white-text">Excavators</p>
            <p className="white-text">Trucks</p>
            <p className="white-text">Excavators</p>
          </div>
          <div className="col">
            <h4 className="white-text">Socials</h4>
            <div className="d-flex">
              <Image width={50} src={facebook} alt="facebook" />
              <Image width={50} src={instagram} alt="instagram" />
              <Image width={50} src={linkedin} alt="linkedin" />
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
