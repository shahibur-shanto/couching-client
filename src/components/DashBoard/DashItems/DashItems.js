import { faCalendar, faCog, faFileAlt, faGripHorizontal, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './DashItems.css';

const DashItems = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin,setIsAdmin] = useState(false);

    useEffect(()=>{
        fetch('https://fierce-retreat-33154.herokuapp.com/isAdmin',{
            method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({email:loggedInUser.email}),
        })
    .then(res=>res.json())
    .then(data=>{setIsAdmin(data)
        
    }) 
    },[])
    console.log(loggedInUser.email);
    console.log(isAdmin);
    
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                 {<div>
                    <li>
                    <Link to="/bookings" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/allBookingList" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Booking List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                    </Link>
                </li>
                </div>}
                {isAdmin && <div>
                <li>
                    <Link to="/addServices" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addAdmin" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageProducts" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Manage Service</span>
                    </Link>
                </li>
                </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default DashItems;