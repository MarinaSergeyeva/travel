import React from "react";
import CardItem from "components/CardItem";
import "./styles.css";
import cardPic from "assets/images/img-8.jpg";
import cardPic2 from "assets/images/img-2.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h2>Check out these EPIC Dectinations!</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={cardPic}
              text="Explore the hidden waterfall"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={cardPic2}
              text="Explore the hidden waterfall"
              label="Luxury"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={cardPic}
              text="Explore the hidden waterfall"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={cardPic2}
              text="Explore the hidden waterfall"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={cardPic}
              text="Explore the hidden waterfall"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
