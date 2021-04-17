import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';

const Reviews = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleReview = ()=>{
        const review = document.getElementById('review').value;
        const eventData = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            image: loggedInUser.photoURL,
            review: review,
            
          };
          const url = `http://localhost:5000/reviews`;
    // console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
    window.alert("your order placed successfully");
    history.push("/")
    }
    return (
        <div className="d-flex justify-content-center">
        <div className="w-50">
            <h1>Please Share Your Experience</h1>
            <div className="w-50">
                <span>Name: <input className="form-control" disabled value={loggedInUser.name} type="text" /></span>
                <span>Email: <input className="form-control" disabled value={loggedInUser.email}type="text" /></span>
                <span>Review: <textarea className="form-control" id="review"></textarea></span>
                <br/>
                <button onClick={handleReview} className="btn btn-primary">review</button>
                {/* <img src={loggedInUser.photoURL} alt=""/> */}
                
                
                
            </div>
            </div>
        </div>
    );
};

export default Reviews;