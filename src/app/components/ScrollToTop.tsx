import { useEffect } from "react";
import Image from "next/image";
import arrow from "../img/arrow.png";

export default function ScrollToTop() {
  useEffect(() => {
    let mybutton = document.getElementById("btn-back-to-top");

    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    return () => {
      window.onscroll = null;
    };
  }, []);

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      <Image
        id="btn-back-to-top"
        onClick={backToTop}
        width={50}
        src={arrow}
        alt="arrow"
      />
    </div>
  );
}
