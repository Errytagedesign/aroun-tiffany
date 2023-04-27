import React from "react";
import "./ThankYou.scss";

function ThankYou() {
  return (
    <main className="thankYou">
      <section className="hero d-flex flex-column  justify-content-center ">
        <div className="col-12 col-md-8 mx-auto">
          <h4>
            {" "}
            To the Bridesmaids and Groomsmen.
            <br /> <br /> From the bottom of my heart. <br /> <br /> Thank you
            for all you do/did to make this day very special. <br /> <br />
            Thank you for all the love and support over the years. <br /> <br />
            We will always be connected.
            <br /> <br />
            Each one of you hold a special place in our hearts.
          </h4>
        </div>
        <div className="title-container mt-4">
          {/* <h2 className="title"> August 1st, 2023</h2> */}

          <svg width="100%" height="100%">
            <text x="50%" y="70%" text-anchor="middle" className="title">
              Thank you
            </text>
          </svg>
        </div>
      </section>
    </main>
  );
}

export default ThankYou;
