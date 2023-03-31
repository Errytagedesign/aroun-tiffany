import React from "react";
import "./Registry.scss";
import logo from "../../assets/aroun-tiffany-logo.png";

function Registry() {
  return (
    <div className="container registry ">
      <section className="hero d-flex flex-column justify-content-center align-items-center  ">
        <div
          data-aos="flip-left"
          data-aos-duration="2000"
          className="col-5 col-md-2"
        >
          <img className="col-6" src={logo} alt="Aroun % Tiffnay" />
        </div>

        <article className="mt-5 col-12">
          <h3 data-aos="fade-left"> 08 - 01- 2023 </h3>

          <h2
            data-aos="fade-in"
            data-aos-duration="2000"
            className="title mt-5 mb-5"
          >
            Aroun <br /> & <br />
            Tiffany
          </h2>
          <h3 data-aos="fade-in" className="title">
            {" "}
            Are getting garried{" "}
          </h3>
        </article>
      </section>

      <aside>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, pariatur
        necessitatibus! Eius at numquam laboriosam nam cumque sed, maiores velit
        quasi dolores? Dicta voluptas in modi temporibus deserunt quisquam est.
      </aside>
      <aside>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, pariatur
        necessitatibus! Eius at numquam laboriosam nam cumque sed, maiores velit
        quasi dolores? Dicta voluptas in modi temporibus deserunt quisquam est.
      </aside>
      <aside>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, pariatur
        necessitatibus! Eius at numquam laboriosam nam cumque sed, maiores velit
        quasi dolores? Dicta voluptas in modi temporibus deserunt quisquam est.
      </aside>
      <aside>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, pariatur
        necessitatibus! Eius at numquam laboriosam nam cumque sed, maiores velit
        quasi dolores? Dicta voluptas in modi temporibus deserunt quisquam est.
      </aside>
      <aside>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, pariatur
        necessitatibus! Eius at numquam laboriosam nam cumque sed, maiores velit
        quasi dolores? Dicta voluptas in modi temporibus deserunt quisquam est.
      </aside>
    </div>
  );
}

export default Registry;
