import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Icons
import { BsXLg } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

// Styles
import "./Navbar.scss";
// Images
import BrandLogo from "../../assets/aroun-tiffany-logo.png";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const ShowNavbar = () => {
    setNavbar(!navbar);
    console.log("clicked");
  };

  const NavLinks = [
    { id: 1, name: "Our Story", url: "/" },
    { id: 2, name: "When and Where", url: "/venue" },
    { id: 3, name: "Registry", url: "registry" },
    { id: 4, name: "RSVP", url: "/rsvp" },
    { id: 4, name: "Contact us", url: "/contact" },
  ];

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
            {NavLinks.map(({ id, name, url }) => (
              <section className="d-flex justify-content-between p-2 " key={id}>
                <NavLink
                  className={({ isActive }) => (isActive ? "NavActive" : "")}
                  onClick={ShowNavbar}
                  to={url}
                >
                  <h3 className="navItems ">{name}</h3>
                </NavLink>
              </section>
            ))}
          </section>
        </NavLink>
        <div className="menuIcon">
          {!navbar ? (
            <BiMenu color="var(--sec-color)" onClick={ShowNavbar} />
          ) : (
            <BsXLg color="var(--sec-color)" onClick={ShowNavbar} />
          )}
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
