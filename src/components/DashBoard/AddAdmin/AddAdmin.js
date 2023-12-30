import React from 'react';

const AddAdmin = () => {
    const handleAdmin =()=>{
        const admin = document.getElementById('admin').value;
        const url = `https://fierce-retreat-33154.herokuapp.com/addAdmin`;

        fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({admin}),
          }).then((res) => {
              console.log("server side response", res)
              window.alert("Admin Added successfully");
            });
          
          
    }
    return (
        <div className="d-flex justify-content-center">
        <div className="row ">
            <div className="w-75"><h1>Add Admin</h1></div>
            <div className="w-75">
            <span>Email: <input id="admin" className="form-control" type="email" /></span>
            <br/>
            <button onClick={handleAdmin} className="btn btn-primary">Add Admin</button>
            </div>
        </div>
        </div>
    );
};

export default AddAdmin;