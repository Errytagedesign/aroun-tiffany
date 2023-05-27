import React from "react";
import "./OurStory.scss";
import Slider from "react-slick";

import logo from "../../assets/aroun-tiffany-logo.png";
import Gallery from "../../components/Gallery/Gallery";

import pic1 from "../../assets/webp/2togetheras1.webp";
// import pic2 from "../../assets/webp/2togetheras2.webp";
import pic3 from "../../assets/webp/2togetheras3.webp";
import pic4 from "../../assets/webp/2togetheras4.webp";
import pic5 from "../../assets/webp/2togetheras5.webp";
import pic6 from "../../assets/webp/2togetheras6.webp";
import pic7 from "../../assets/webp/2togetheras7.webp";
import pic8 from "../../assets/webp/2togetheras18.webp";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       infinite: true,
  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       initialSlide: 1,
  //     },
  //   },
  // ],
};

const nftCardsImages = [
  { imageUrl: pic1 },
  // { imageUrl: pic2 },
  { imageUrl: pic3 },
  { imageUrl: pic4 },
  { imageUrl: pic5 },
  { imageUrl: pic6 },
  { imageUrl: pic7 },
  { imageUrl: pic8 },
];
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
          <h3 data-aos="fade-left"> 11 - 10- 2023 </h3>

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
            Are getting married{" "}
          </h3>
        </article>
      </section>

      {/* Start Web slider section  */}
      <section className="slider home-containers">
        <Slider className="col-12" {...settings}>
          {nftCardsImages.map(({ imageUrl }) => (
            <img
              className="col-12"
              src={imageUrl}
              alt="wolfpackherd nft cards"
            />
          ))}
        </Slider>
      </section>

      <section className="story-time ">
        <div className="story d-flex justify-content-center align-items-center">
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
            <mark
              className="title"
              style={{ background: "transparent", color: "var(--sec-color)" }}
            >
              What God has joined together let no man put asunder
            </mark>
            <br /> <br />
            It was not an accident… it was destined to be. We thank Allah for a
            union full of love, life, laughter and never ending happiness.
            <br /> <br />
            The Beginning: <br />
            We worked at Nursing facility for a while without ever crossing
            paths on our shifts.
            <br /> <br />
            On the afternoon of a beautiful day her hair color was my favorite
            color, blue. I could not for once resist her beautiful signature
            smile. When I attempted to talk to her “Uncle Alfred” our mutual
            co-worker stopped me and told me she was busy. Out of respect for
            her and what she was doing I continued to walk to my floor. A year
            went by I had not seen her due to switching from 2nd shift to third
            shift. <br /> <br />
            Aroun worked on a floor that I heavily avoided. November 8, 2018 I
            moved into my first apartment… and two days later my car went into
            the shop. I had to pick up extra hours to make sure that I have the
            money to move my car out of the shop quickly. My regular day shift
            that I was scheduled to work on November 16 got canceled. The only
            opening the organization had was for third shift on the floor I
            normally would avoid, but I decided I would take it try something
            that I don’t think I would like for a change. <br /> <br />
            I couldn’t believe there she was again. By this time, I had assumed
            perhaps she left working at the facility. Busy and focused in her
            position on NOVEMBER 16, 2018 I approached the love of my life,
            Tiffany thought that was our first encounter not remembering when I
            approached her over a year ago. I knew she was the one.
            <br /> <br />
            When Aroun approached me, I felt his aura, his gentleness, his love,
            his power, his protection …. I knew he was a King, I knew he was the
            one. <br /> <br />
            The rest is history… Mashallah
          </p>
        </div>
      </section>
      <section className="best d-flex flex-column justify-content-center align-items-center">
        <div className="text">
          <h2 data-aos="fade-in" className="title ">
            Best Friend
          </h2>
        </div>
      </section>

      <aside>
        <Gallery />
      </aside>

      <section className="propose d-flex flex-column justify-content-center align-items-center">
        <div>
          <h2 className="title ">He Proposed</h2>
        </div>
      </section>
      <section className="yes d-flex flex-column justify-content-center align-items-center">
        <div>
          <h2 className="title ">She Said Yes</h2>
        </div>
      </section>
    </main>
  );
}

export default OurStory;
