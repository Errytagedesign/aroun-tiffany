import React from "react";
import "./Registry.scss";
import { AiOutlineAmazon } from "react-icons/ai";
// import { FaEbay } from "react-icons/fa";
// import { SiWalmart, SiAliexpress } from "react-icons/si";

function Registry() {
  return (
    <div className="registry d-flex flex-column justify-content-center align-items-center ">
      <section className="hero d-flex justify-content-center align-items-center col-12">
        <div className="title-container col-12 ">
          {/* <h2 className="title"> August 1st, 2023</h2> */}

          <svg width="100%" height="100%">
            <text x="50%" y="60%" text-anchor="middle" className="title">
              Registry
            </text>
          </svg>
        </div>
      </section>
      <section className="gifts col-8">
        <h4>
          {" "}
          What we want most for our wedding is to have all of our friends and
          family there to celebrate the occasion with us, and so, more than
          anything we would simply enjoy your presence. (We mean it!) That said,
          we also enjoy dishware and shiny new four-slice toasters too, so if
          you really would like to get us something, you can find some
          suggestions here:
        </h4>

        <div className="d-flex flex-wrap justify-content-around mt-5 mb-5">
          <a
            href="https://www.amazon.com/wedding/tiffany-kamara-aroun-kamara--november-2023/registry/AF8AINR7CB2T"
            target="_blank"
            className="col-12 col-md-7 shopping"
            rel="noreferrer"
          >
            <AiOutlineAmazon className="icons" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Registry;
