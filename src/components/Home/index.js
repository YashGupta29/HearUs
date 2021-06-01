import React from "react";
import { Link } from "react-scroll";
import "./style.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container home-content">
        <h1 className="home-heading mb-3">Welcome To Hear Us</h1>
        <h1 className="home-subheading mb-5">Here To Hear You</h1>
        <div className="cta">
          <Link to="about" className="btn">
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
