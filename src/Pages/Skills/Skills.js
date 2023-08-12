import React from "react";
import "./Skills.css";
import Skills_data from "./Skills_data";
import SkillsCard from "./Card";
import { Container } from "react-bootstrap";

const Skills = () => {
  return (
    <section id="skills">
      <Container className="skill_container">
        <h3 className="text-center">Skills</h3>
        <div className="wrapper">
          {Skills_data.map((value, id) => {
            return (
              <SkillsCard
                key={id}
                image={value.image}
                description={value.desc}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
