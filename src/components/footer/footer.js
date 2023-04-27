import React from "react";

// Styles
import "./footer.scss";

function Footer() {
  return (
    <footer>
      <section className="p-4 col-12 mx-auto d-flex flex-column flex-md-row justify-content-between">
        <small className="footerItems "> Made with 💜</small>
        <small className="footerItems ">
          {" "}
          @2023 EMG LLC. Contact us at{" "}
          <a href="mailto: info@myendpoint.com"> info@myendpoint.com</a> for
          services.
        </small>
      </section>
    </footer>
  );
}

export default Footer;
