import React from "react";
import news1 from "../../../images/news1.jpg";
import news2 from "../../../images/news2.jpg";
import news3 from "../../../images/news3.jpg";
import "./News.css";

const blogs = [
  {
    title: "Mathematics and Chill",
    content:
      "In eu mi bibendum neque egestas congue quisque. Sem fringilla ut morbi tincidunt. Volutpat maecenas volutpat blandit aliquam etiam erat",
    image: news1,
  },
  {
    title: "Master’s Degree",
    content:
      "Ac turpis egestas maecenas olis pharetra con. Proin fermentum leo, entum odio feugiat pretium an ipsum consequat. Faucibus sit amet",
    image: news2,
  },
  {
    title: "Online Courses",
    content:
      "Laoreet id donec ultrices tincidunt arcu. Cursus risus at ultrices mi tempus imperdiet nulla. Rutrum quisque non tellus orci ac.",
    image: news3,
  },
];

const News = () => {
  return (
    <section>
      <p className="news">New and Articles</p>
      <h3 className="news">Latest from the Blog</h3>
      <div className="d-flex justify-content-center">
      <div className="row w-75">
        {blogs.map((blog) => {
          return (
            <div className="col-md-3 offset-md-1">
              <img className="news-img" src={blog.image} alt="" />
              <h4>{blog.title}</h4>
              <p>{blog.content}</p>
              <a href="#">Read More</a>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default News;
