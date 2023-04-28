import React from "react";
import { Button } from "react-bootstrap";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
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
              November 10th, 2023
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
      <section className="hotel ">
        <section className="container col-12 col-md-10 col-lg-8 d-flex flex-column flex-md-row justify-content-between  ">
          <article className="festives col-12 col-md-5 d-flex flex-column justify-content-between ">
            <h3 className=""> Traditonal Engagement </h3>
            <h6>
              {" "}
              <BsFillCalendarDateFill className="icon" /> Thusday, 9th of
              November 2023
            </h6>
            <h6>
              {" "}
              <BiTimeFive className="icon" />
              4:30 PM - 9:30 PM
            </h6>
            <h6>
              {" "}
              <MdLocationPin className="icon" /> 1086 W King rd Malvern PA 19355
            </h6>

            <div className="col-12 mt-3">
              {" "}
              <a
                href="https://www.google.com/maps/dir/6.6849685,3.2885466/1086+W+King+Rd,+Malvern,+PA+19355,+USA/@18.7235912,-74.4227962,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c6f37d1193f7e1:0xa41be004e8c62b59!2m2!1d-75.557756!2d40.0267089"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="main-btn col-12">View Map</Button>
              </a>
            </div>
          </article>
          <article className="festives col-12 col-md-5 ">
            <h3 className=""> White Wedding </h3>
            <h6>
              {" "}
              <BsFillCalendarDateFill className="icon" /> Friday, 10th of
              November 2023
            </h6>
            <h6>
              {" "}
              <BiTimeFive className="icon" />
              8:00 AM - 10:00 PM
            </h6>
            <h6>
              {" "}
              <MdLocationPin className="icon" /> LIVE at the Casino,
              Philadelphia, 900 Packer Ave., Philadelphia, PA 19148
            </h6>

            <div className="col-12 mt-3">
              {" "}
              <a
                href="https://www.google.com/maps/dir//Live!+Casino+%26+Hotel+Philadelphia,+900+Packer+Ave,+Philadelphia,+PA+19148,+United+States/@39.9092938,-75.2470632,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c6c596eda7892d:0x402eadd798a74b6!2m2!1d-75.1646617!2d39.9091913?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="main-btn col-12">View Map</Button>
              </a>
            </div>
          </article>
        </section>
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
            <a
              href="https://philadelphia-reservations.livecasinohotel.com/ibe/details.aspx?propertyid=16611&nights=1&checkin=11/9/2023&group=5552390&lang=en-us"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Button className="main-btn col-12 mt-2">View </Button>{" "}
            </a>{" "}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Venue;
