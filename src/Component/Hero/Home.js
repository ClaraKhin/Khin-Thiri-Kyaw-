import React from "react";
import "./Home.css";
import hero from "../pic/khin.jpg";
import Khin from "../pic/Khin.pdf";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section id="home" className="">
      <div className="hero text-center">
        <div className="hero-content">
          <h3>HELLO!</h3>
          <h1>
            Welcome to my world{" "}
            <i class="fa-solid fa-heart" style={{ color: "#FF0000" }}></i>
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
          <div className="button">
            <a href="#contact" className="btn btn-branding p-3">
              Contact
            </a>
            <a href={Khin} download="Khin" className="btn btn-branding p-3">
              Resume
            </a>
          </div>
        </div>
        <div className="photo">
          <img src={hero} alt="khin" />
        </div>
      </div>
    </section>
  );
};

export default Home;
