import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../../App";
import Payment from "../Payment/Payment";



const Enroll = () => {
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [course, setCourse] = useState([]);
  const date = new Date();
  const { title } = useParams();

  useEffect(() => {
    fetch(`https://fierce-retreat-33154.herokuapp.com/bookings/${title}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data[0]);
      });
  }, [title]);
  //   console.log(course.title,course.price);
  const handleConfirm = () => {
    
    const eventData = {
      name: loggedInUser.name,
      price: course.price,
      course: course.title,
      email: loggedInUser.email,
      date: date,
      status: "Pending",
      image:course.image.img,
    };
    const url = `https://fierce-retreat-33154.herokuapp.com/booking`;
    console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
    window.alert("your order placed successfully");
    history.push("/")
  };

  return (
    <div className="text-center">
      <h1>Book</h1>
      <div className="d-flex justify-content-center">
        <div className="w-25 w-sm-50">
          <span>Name</span>
          <input
            className="form-control  text-center"
            type="text" disabled
            value={loggedInUser.name}
          />
          <br />
          <span>Email</span>
          <input
            className="form-control  text-center"
            type="text" disabled
            value={loggedInUser.email}
          />
          <br />
          <span>Course Enroll</span>
          <input
            className="form-control  text-center"
            type="text" disabled
            value={course.title}
          />
          <br />
          <span>Price $</span>
          <input
            className="form-control  text-center"
            type="text" disabled
            value={course.price}
          />
          <br />
          <div className="">
            <Payment></Payment>
          </div>
          <br />
          <button onClick={handleConfirm} className="btn btn-success">
            Confirm Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
