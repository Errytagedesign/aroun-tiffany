import React from "react";
import "./Spinner.scss";
import logo from "../../assets/aroun-tiffany-logo.png";

function Spinner() {
  return (
    <div className="spinCon">
      <main className="spinit">
        <img src={logo} alt="logo" />
      </main>
    </div>
  );
}

export default Spinner;
