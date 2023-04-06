import React from "react";
import "./Registry.scss";
import { AiOutlineAmazon } from "react-icons/ai";
import { FaEbay } from "react-icons/fa";
import { SiWalmart, SiAliexpress } from "react-icons/si";

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
            href="https://www.amazon.com/s?k=wedding+gifts&crid=2YN08HPQXEPHT&sprefix=wedding+%2Caps%2C388&ref=nb_sb_ss_ts-doa-p_2_8"
            target="_blank"
            className="col-12 col-md-2 shopping"
            rel="noreferrer"
          >
            <AiOutlineAmazon className="icons" />
          </a>
          <a
            href="https://www.ebay.com/b/Home-Garden/11700/bn_1853126"
            target="_blank"
            className="col-12 col-md-2 shopping"
            rel="noreferrer"
          >
            <FaEbay className="icons" />
          </a>
          <a
            href="https://www.walmart.com/"
            target="_blank"
            className="col-12 col-md-2 shopping"
            rel="noreferrer"
          >
            <SiWalmart className="icons" />
          </a>
          <a
            href="https://www.aliexpress.com/category/1511/watches.html?spm=a2g0o.home.106.2.650c2145dMqL7I&isCates=y"
            target="_blank"
            className="col-12 col-md-2 shopping"
            rel="noreferrer"
          >
            <SiAliexpress className="icons" />
          </a>
        </div>

        <small>
          {" "}
          Please send any gifts to our home in Chicago, as we will not be able
          to bring them with us from San Diego.
        </small>
      </section>
    </div>
  );
}

export default Registry;
