import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [services,setServices] = useState([]);

    useEffect(() => {
        fetch(`https://fierce-retreat-33154.herokuapp.com/services`)
          .then((res) => res.json())
          .then((data) => {
            setServices(data);
          });
      }, [services]);

      const handleDelete = (title)=>{
        fetch(`https://fierce-retreat-33154.herokuapp.com/service/${title}`,{
        method:'DELETE'})
        .then(res=>res.json())
        .then((result)=>{
            console.log("sucess");
        })
      }
    return (
        <div className="d-flex justify-content-center">
      <div className="w-50 row">
        <div className="w-100">
          <h1 className="text-center">All services: </h1>
        </div>

        <div className="w-100">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => {
                return (
                  <tr>
                    <td>{service.title}</td>
                    <td>{service.price}</td>
                    <td><button onClick={()=>handleDelete(service.title)} className="btn btn-danger">Delete</button></td>
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

export default ManageProducts;