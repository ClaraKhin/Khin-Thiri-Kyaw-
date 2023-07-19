import React from "react";
import "./About.css";
import Card from "react-bootstrap/Card";
import { Typewriter } from "react-simple-typewriter";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="m-3">
      <Container className="about_container">
        <Card className="card">
          <Card.Title className="title">
            <h2>About me 💬</h2>
          </Card.Title>
          <Card.Text className="content">
            <h3>
              {" "}
              My name is Khin Thiri Kyaw.
              <br /> I'm absolutely delighted you made it to my little corner of
              the web! Welcome to my paradise! <br />
            </h3>

            <span>
              {" "}
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
            </span>
          </Card.Text>
        </Card>
      </Container>
    </section>
  );
};

export default About;
