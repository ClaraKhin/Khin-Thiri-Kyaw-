import React from "react";
import "./Home.css";
import hero from "../pic/k.png";
import Khin from "../pic/khin Thiri Kyaw.pdf";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero text-center">
      <div className="hero-content">
        <h3>HELLO!</h3>
        <h1>
          Welcome to my world{" "}
          <i className="fa-solid fa-heart" style={{ color: "#FF0000" }}></i>
        </h1>
        <h2>
          I'm a{" "}
          <span>
            <Typewriter
              words={["Front-end Developer from Yangon."]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <div className="btn_section">
          <Link to="/contact" className="link-contact">
            <button className="btn-contact">Contact</button>
          </Link>
          <a
            href={Khin}
            download="Khin Thiri Kyaw"
            className="btn btn-branding p-3"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="photo">
        <img src={hero} alt="khin" />
      </div>
    </div>
  );
};

export default Home;
