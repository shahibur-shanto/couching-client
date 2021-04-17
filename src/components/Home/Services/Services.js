import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
// import { useHistory } from "react-router";
// import Tutor from "../../../images/service-1.png";
// import Lectures from "../../../images/service-2.png";
// import Online from "../../../images/service-3.png";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      });
  }, [0]);

  return (
    <section className="service-section">
      <div className="text-center">
        <small>My Services</small>
        <h1>What I Do?</h1>
        <hr></hr>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row w-75 d-flex justify-content-center">
          {services.map((service) => (
            <Service service={service}></Service>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
