import React from "react";
import { Button } from "react-bootstrap";
import "./Venue.scss";
function Venue() {
  return (
    <main className="venue">
      {/* <section className="hero">
        <div className="title-container">
          <h2 className="title"> August 1st, 2023</h2>
        </div>
      </section> */}
      <section className="hero">
        <div className="title-container">
          {/* <h2 className="title"> August 1st, 2023</h2> */}

          <svg width="100%" height="100%">
            <text x="50%" y="60%" text-anchor="middle" className="title">
              November 11th, 2023
            </text>
          </svg>
        </div>
      </section>
      <section className="tex">
        <div className="title-container">
          {/* <h2 className="title"> August 1st, 2023</h2> */}

          <svg width="100%" height="100%">
            <text x="50%" y="60%" text-anchor="middle" className="title">
              Philadelphia
            </text>
          </svg>
        </div>
      </section>
      <section className="hotel d-flex flex-column justify-content-center align-items-center">
        <h4 className=""> Jupiter Gardens</h4>
        <p>SATURDAY, AUGUST 1st, 2023</p>
        <p>4:00 - 10:00 PM</p>
        <p>
          11325 Pegasus St. <br /> Dallas Texas 75238 TX <br /> United States
        </p>

        <div>
          {" "}
          <Button className="main-btn"> View Map </Button>{" "}
        </div>
      </section>
      <section className="warm">
        <div className="title-container">
          {/* <h2 className="title"> August 1st, 2023</h2> */}

          <svg width="100%" height="100%">
            <text x="50%" y="60%" text-anchor="middle" className="title">
              Stay Warm
            </text>
          </svg>
        </div>
      </section>
      <section className="warm-hotel d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-2"> Accommodations</h3>
        <p>
          Just mention Adeniran Kamara Wedding <br />
          for Booking 2 nights
        </p>{" "}
        <div className="d-flex justify-content-center align-items-center col-12 col-md-8 mt-3">
          <div className="col-8 col-md-12 col-md-6 mt-5 mt-md-0">
            <div className="col-12">
              <h5 className="">Live Casino & Hotel, Philadelphia </h5>{" "}
              <img
                className="col-12 mb-3"
                src="https://cdn.shrglobal.com/CrsMedia//P16611/grp/LCHP.PNG"
                alt=""
              />
            </div>
            <h6>900 Packer Ave., Philadelphia, PA 19148 </h6>{" "}
            <Button className="main-btn col-12 mt-2">
              {" "}
              <a
                href="https://philadelphia-reservations.livecasinohotel.com/ibe/details.aspx?propertyid=16611&nights=1&checkin=11/9/2023&group=5552390&lang=en-us"
                target="_blank"
                rel="noreferrer"
              >
                View{" "}
              </a>{" "}
            </Button>{" "}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Venue;
