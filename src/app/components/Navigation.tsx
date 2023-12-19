import React from "react";
import Link from "next/link";
import getPages from "../api/getPages";
import next from "../img/Shopping Cart.png";
import Image from "next/image";

const Navigation = async () => {
  const nodeTree = await getPages();

  return (
    <>
      <nav className="navbar navbar-expand-lg mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Construction
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center mx-auto ">
              {nodeTree.nodes.map((node) => (
                <li className="nav-item" key={node.link}>
                  <Link className="nav-link" href={node.link}>
                    {node.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Link className="" href={"/Cart"}>
                <Image
                  src={next}
                  alt="cart"
                  width={30}
                  height={30}
                  className="align-bottom"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
