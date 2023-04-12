import React from "react";
import { MdEmail, MdOutlineCall } from "react-icons/md";
import "./Contact.scss";
function Contact() {
  return (
    <main className="contact">
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
              Contact us
            </text>
          </svg>
        </div>
      </section>

      <section className="deets col-12 d-flex flex-column justify-content-center align-items-center">
        <h3 className="col-8 ">
          {" "}
          If you need to reach us for any details PRIOR to the wedding
          ceremonies please use the contact details below:
        </h3>
        <aside className="d-flex flex-column flex-md-row col-8 mt-5 flex-row justify-content-between">
          <div className="main-btn col-12 col-md-5 mb-3 mb-md-0 d-flex justify-content-center align-items-center">
            <a
              className="d-flex justify-content-between align-items-center"
              href="tel:215-921-1463 "
            >
              {" "}
              <MdOutlineCall
                className="me-2"
                size={30}
                color="var(--sec-color)"
              />
              <h3> Aroun </h3>
            </a>
          </div>
          <div className="main-btn col-12 col-md-5 d-flex justify-content-center align-items-center">
            <a
              className="d-flex justify-content-between align-items-center"
              href="tel:610-551-8230  "
            >
              {" "}
              <MdOutlineCall
                className="me-2"
                size={30}
                color="var(--sec-color)"
              />
              <h3>Tiffany </h3>
            </a>
          </div>
        </aside>
        <hr />
        <h3 className="col-8 mt-5">
          {" "}
          If you need to reach us for any details DURING the wedding ceremonies
          please use the contact details below:
        </h3>
        <aside className="d-flex flex-column flex-md-row maids col-8 mt-5 flex-row justify-content-between">
          <div className="main-btn d-flex flex-column mb-3 mb-md-0 col-12 col-md-5 d-flex justify-content-center align-items-center">
            <h4> Lead Bridesmaid:</h4>
            <h3> Farah Khan </h3>{" "}
            <div>
              <a className="call" href="tel:2672549967 ">
                <MdOutlineCall
                  className="me-2"
                  size={30}
                  color="var(--sec-color)"
                />
              </a>
              <a className="call" href="mailto:tfarah0607@gmail.com ">
                {" "}
                <MdEmail className="me-2" size={30} color="var(--sec-color)" />
              </a>
            </div>
          </div>
          <div className="main-btn d-flex flex-column col-12 col-md-5 d-flex justify-content-center align-items-center ">
            <h4> Lead Groomsmen:</h4>
            <h3> Destin Adeniran </h3>{" "}
            <div>
              <a className="call" href="tel:4848686377 ">
                <MdOutlineCall
                  className="me-2"
                  size={30}
                  color="var(--sec-color)"
                />
              </a>
              <a className="call" href="mailto:destinadeniran@aol.com ">
                {" "}
                <MdEmail className="me-2" size={30} color="var(--sec-color)" />
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Contact;
