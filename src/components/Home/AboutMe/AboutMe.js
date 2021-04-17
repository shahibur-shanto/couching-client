import React from "react";
import about from "../../../images/about.jpg";
import './AboutMe.css';

const AboutMe = () => {
  return (
      <section className="about-section">
    <div className="text-center d-flex justify-content-center mt-5">
      <div className="row w-75 mt-5">
        <div className="col-md-4 offset-md-1 pr-5">
          <small>About Me</small>
          <h1>
            Math Teacher, Private Tutoring & Consulting.
          </h1>
          <p>
            Volutpat odio facilisis mauris sit amet massa. Donec ac odio tempor
            orci dapibus ultrices in. Maecenas sed enim ut sem viverra aliquet
            eget sit. Sit amet consectetur adipiscing elit duis tristique
            sollicitudin nibh sit. Augue ut lectus arcu bibendum at.
          </p>
          <p>
            Neque volutpat ac tincidunt vitae semper quis lectus nulla at.
            Phasellus lorem sed risus ultricies tristique nulla.
          </p>
        </div>
        <div className="col-md-4 offset-md-1 pl-5">
          <img className="img-fluid about-img" src={about} alt="" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutMe;
