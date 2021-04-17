import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../../App";

const AllBookings = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [allBookings, setAllBookings] = useState([]);
  // const [status,setStatus] = useState();
  let history = useHistory();
  
  useEffect(() => {
    fetch(`https://fierce-retreat-33154.herokuapp.com/allBookingsList`)
      .then((res) => res.json())
      .then((data) => {
        setAllBookings(data);
      });
  }, [loggedInUser]);

  const handleStatusChange =(e)=>{
    const status = e.target.value;
    const id = e.target.id;
    // setStatus(newStatus);
    const product = {id,status}
    console.log(product);
    fetch(`https://fierce-retreat-33154.herokuapp.com/update/${id}`,{
      method:'PATCH',
      headers:{'Content-type':'application/json'},
      body: JSON.stringify(product)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
    })
    history.push('/allBookingList')
    
  }
  

  return (
    <div className="d-flex justify-content-center">
      <div className="w-50 row">
        <div className="w-100">
          <h1 className="text-center">All Booking: </h1>
        </div>

        <div className="w-100">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email ID</th>
                <th scope="col">Course</th>
                <th scope="col">Pay With</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {allBookings.map((book) => {
                return (
                  <tr>
                    <td>{book.name}</td>
                    <td>{book.email}</td>
                    <td>{book.course}</td>
                    <td>{"credit card"}</td>
                    <td>
                   <select onChange={handleStatusChange} name="status" id={book._id} value={book.status}>
                        <option value="Pending">Pending</option>
                        <option value="On Going">On Going</option>
                        <option value="Done">Done</option>
                        
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBookings;
