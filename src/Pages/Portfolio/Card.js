import React from "react";
import "./Portfolio.css";
import { Card, Col, Row } from "react-bootstrap";

const PortfolioCard = (props) => {
  return (
    <Row>
      <Col key={props.index}>
        <Card className="card">
          <Card.Img variant="top" src={props.image} className="img" />
          <Card.Body className="card_body">
            <Card.Title className="title">{props.title}</Card.Title>
            <Card.Text className="desc">{props.description}</Card.Text>
            <a
              href={props.link}
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              Learn More <i className="fas fa-chevron-right"></i>
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default PortfolioCard;
