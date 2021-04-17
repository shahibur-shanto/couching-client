import React, { useEffect, useState } from "react";
import "./Testomonials.css";

const Testomonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://fierce-retreat-33154.herokuapp.com/reviews`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, [0]);
  console.log(reviews);
  return (
    <div className="text-center mt-5 review-container">
      <small className="mt-5">Testimonials</small>
      <h3 className="mt-3">Listen to What Parents Have to Say</h3>
      <div className="row d-flex justify-content-center">
        {reviews.map((review) => {
          return (
            <div className="col-md-3 offset-md-1 review-card">
              <img src={review.image} alt="" />
              <p>{review.review}</p>
              <p>{review.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testomonials;
