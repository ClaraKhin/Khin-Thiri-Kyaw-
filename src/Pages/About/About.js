import React from "react";
import "./About.css";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="about_container">
      <div className="about_content">
        <h2>About me 💬</h2>
        <h3>
          My name is <span>Khin Thiri Kyaw.</span>
          <br /> I'm absolutely delighted you made it to my little corner of the
          web! Welcome to my paradise! <br />
        </h3>

        <p>
          <Typewriter
            words={[
              "I'm a Front-end Developer, transforming my experimental expeiences into hands-on experience working on real world projects.",
              "I'm passionate about creating dynamic, user-friendly apps.",
              "I have experiences with HTML, CSS, and JavaScript, have worked with React which is a popular framework.",
              "Additionally, I am a bit familiar with back-end technologies like Node.js, PHP, Laravel, and Database.",
              "I'm excited to learn more from pros and bring my magic to real-world projects.",
              "I'm bursting with excitement to contribute my adorable skills and infectious enthusiasm to your organization! Let's work together and make all your goals a reality! 🎉",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </p>
      </div>
    </div>
  );
};

export default About;
