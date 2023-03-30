import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Icons
import { BsXLg } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

// Styles
import "./Navbar.scss";
// Images
import BrandLogo from "../../assets/aroun-tiffany-main-logo.png";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const ShowNavbar = () => {
    setNavbar(!navbar);
    console.log("clicked");
  };

  return (
    <main className="navbar">
      <nav className="container content">
        <section className="d-flex col-8 col-lg-3 align-items-start">
          <Link to="/" className="col-3 ">
            <img
              className="col-6"
              src={BrandLogo}
              alt="Aroun and Tiffany logo"
            />
          </Link>
        </section>
        <NavLink
          className={
            navbar
              ? "navIn NavBars col-12 col-lg-7 "
              : "navOut NavBars col-12 col-lg-7"
          }
        >
          {/* Mobile Logo and Close menu icon */}

          {/* Nav Items */}
          <section className="d-flex nav-items flex-column flex-lg-row justify-content-between col-12  p-2 ">
            <Link to="#">
              <h3 className="navItems ">Our Story</h3>
            </Link>
            <Link to="#">
              <h3 className="navItems ">When and Where</h3>
            </Link>
            <Link to="#">
              <h3 className="navItems ">Registry </h3>
            </Link>
            <Link to="#">
              <h3 className="navItems ">RSVP </h3>
            </Link>
          </section>
        </NavLink>
        <div className="menuIcon">
          {!navbar ? (
            <BiMenu
              color={`${!navbar ? "var(--main-color)" : "var(--sec-color)"} `}
              onClick={ShowNavbar}
            />
          ) : (
            <BsXLg color="var(--sec-color)" onClick={ShowNavbar} />
          )}
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
