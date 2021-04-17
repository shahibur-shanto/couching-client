import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const BookingList = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [bookings,setBookings] = useState([]);
    // const [course,setCourse] = useState([])

    useEffect(()=>{
        fetch(`https://fierce-retreat-33154.herokuapp.com/bookingList?email=`+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data)
        })
    },[loggedInUser.email])
    

    return (
        <div className="d-flex justify-content-center">
            
            <div className="w-50 row">
            <div className="w-100"><h1  className="text-center">{loggedInUser.name}'s Booking: </h1></div>
            {bookings.map(booking=> {
                
                return (
                    <div className="m-3 col-md-3 bg-light w-25">
                    <img className="mb-3 service-img" src={`data:image/png;base64,${booking.image}`} alt=""/>
                    <span className="pl-3">{booking.status}</span>
                    <h3 className="mt-3">{booking.course}</h3>
                        
                        
                    </div>
                    )
            })}
            </div>
        
        </div>
    );
};

export default BookingList;