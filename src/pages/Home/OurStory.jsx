import React from "react";
import "./OurStory.scss";

import logo from "../../assets/aroun-tiffany-logo.png";
import Gallery from "../../components/Gallery/Gallery";

function OurStory() {
  return (
    <main className="our-story ">
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
            className="title mt-5 mb-5 name"
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

      <section className="story-time ">
        <div className="story">
          <h2
            data-aos="fade-in"
            data-aos-duration="2000"
            className="title mt-5 mb-5"
          >
            Our Story
          </h2>
        </div>
        <div data-aos="zoom-in" className="container storyInfo">
          <p data-aos="fade-in" data-aos-duration="2000">
            Aroun and I worked at the same place for a long time without even
            crossing paths. <br /> <br />
            He saw me and attempted to talk to me but as focused as I was that
            day I didn’t even remember meeting or speaking with him.
            <br /> <br />
            Aroun later switched from working day shifts hours to Night shift
            hours working on a floor that I HEAVILY avoided being pulled to. So
            we never really crossed paths.
            <br /> <br />
            I got my first Apartment NOVEMBER 8, 2018. And decided I could use
            extra hours on night shift after paying 1st last and security
            deposit.
            <br /> <br />
            my regular day shift had got cancelled and the only opening they had
            was for night shift on the floor I normally avoided.
            <br /> <br />I decided I would pick that shift up anyway. And on
            that same day NOVEMBER 16, 2018 I met the love of my life, my
            husband, Aroun.
          </p>
        </div>
      </section>
      <section className="best d-flex flex-column justify-content-between align-content-center">
        <div className="text">
          <h2 data-aos="fade-in" className="title ">
            Best Friend
          </h2>
        </div>
      </section>

      <aside data-aos="fade-in col-12">
        <Gallery />
      </aside>
    </main>
  );
}

export default OurStory;
