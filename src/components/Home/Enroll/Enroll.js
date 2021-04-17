import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../../App";
import Payment from "../Payment/Payment";


const Enroll = () => {
  const history = useHistory();
  const {  handleSubmit } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [course, setCourse] = useState([]);
  const date = new Date();
  const { title } = useParams();
  const [enrollData, setEnrollData] = useState(null);

  
  useEffect(() => {
    fetch(`https://fierce-retreat-33154.herokuapp.com/bookings/${title}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data[0]);
      });
  }, [title]);
  //   console.log(course.title,course.price);
 

  const onSubmit = () => {
    const eventData = {
          name: loggedInUser.name,
          price: course.price,
          course: course.title,
          email: loggedInUser.email,
          date: date,
          status: "Pending",
          image:course.image.img,
        };
    setEnrollData(eventData);
    
  };
  
  
  const handlePaymentSuccess = paymentId => {
    
    const orderDetails = { 
      name: loggedInUser.name,
      price: course.price,
      course: course.title,
      email: loggedInUser.email,
      date: date,
      status: "Pending",
      image:course.image.img,
      paymentId:paymentId,
    };
    console.log(orderDetails)
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert('your order placed successfully');
        history.push('/')
      })
  
  
  }

return (
    <div className="row d-flex justify-content-center text-center">
    <div style={{display: enrollData ? 'none': 'block'}} className="mt-5 ml-5 col-md-4 w-100">
    <h1>Please Book Now</h1>
    <div className="">
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        <input
            className="form-control text-center"
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
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
      
    </div>
      <div className="mt-5 col-md-6 w-100">
      <div style={{display: enrollData ? 'block': 'none'}} className="col-md-6">
        <h2 className="mb-5">Please Pay</h2>
        <Payment handlePayment={handlePaymentSuccess}></Payment>
      </div>
      </div>
    </div>
  );
};

export default Enroll;
