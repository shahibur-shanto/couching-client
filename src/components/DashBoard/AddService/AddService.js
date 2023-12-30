import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    console.log(file);
  };
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const onSubmit = () => {
    // console.log(data)
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", info.title);
    formData.append("description", info.description);
    formData.append("price", info.price);
    fetch("https://fierce-retreat-33154.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Services Added")
      })
      .catch((error) => {
        console.error(error);
      });

  };

  return (
    <div className="d-flex justify-content-center form-container">
      <div className="w-25 row">
        <div className="w-100 text-center">
          <h1>Add Service:</h1>
        </div>
        <div className="w-100 form-div">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Course Title</label>
            <input onBlur={handleBlur} className="form-control" name="title" />
            <br />
            <label>Course Description</label>
            <input
              onBlur={handleBlur}
              className="form-control"
              name="description"
            />
            <br />
            <label>Course Price</label>
            <input onBlur={handleBlur} className="form-control" name="price" />
            <br />
            <input
              onChange={handleChange}
              className="form-control"
              name="file"
              type="file"
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
