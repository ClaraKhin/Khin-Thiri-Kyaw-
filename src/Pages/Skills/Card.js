import React from "react";
import "./Skills.css";
import { Row, Col } from "react-bootstrap";

const SkillsCard = (props) => {
  return (
    <Row className="row">
      <Col key={props.key} className="col">
        <img src={props.image} alt="html" className="image" />
        <p className="description">{props.description}</p>
      </Col>
    </Row>
  );
};

export default SkillsCard;
