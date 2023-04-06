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
              August 1st, 2023
            </text>
          </svg>
        </div>
      </section>
      <section className="tex">
        <div className="title-container">
          {/* <h2 className="title"> August 1st, 2023</h2> */}

          <svg width="100%" height="100%">
            <text x="50%" y="60%" text-anchor="middle" className="title">
              Texas
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
        <h4 className="mb-5"> Accommodations</h4>

        <div className="d-flex flex-column flex-md-row justify-content-between col-12 col-md-8">
          <div className="col-12 col-md-6 mt-5 mt-md-0">
            <p>
              Holiday Inn Express & Suites, <br />
              Texas City, <br />
              an IHG Hotel
            </p>{" "}
            <Button className="main-btn"> View Map </Button>{" "}
          </div>
          <div className="col-12 col-md-6  mt-5 mt-md-0">
            <p>
              {" "}
              Fifth Season Inn
              <br />
              6801 I-40 Frontage Rd, Amarillo, <br />
              TX 79106, United States
            </p>{" "}
            <Button className="main-btn"> View Map </Button>{" "}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Venue;
