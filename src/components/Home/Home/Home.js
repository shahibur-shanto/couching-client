import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import News from "../News/News";
import Services from "../Services/Services";
import Testomonials from "../Testomonials/Testomonials";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-div">
      <NavBar></NavBar>
      <Header></Header>
      <Services></Services>
      <AboutMe></AboutMe>
      <Testomonials></Testomonials>
      <News></News>
      <Footer></Footer>
    </div>
  );
};

export default Home;
