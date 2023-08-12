import React from "react";
import Portfolio_data from "./Portfolio_data";
import PortfolioCard from "./Card";
import { Container } from "react-bootstrap";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container className="container-fluid">
        <div className="heading text-center">
          <h3>My Portfolio</h3>
        </div>
        <div className="card_wrapper">
          {Portfolio_data.map((value, index) => {
            return (
              <PortfolioCard
                key={index}
                image={value.image}
                title={value.title}
                description={value.desc}
                link={value.link}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
