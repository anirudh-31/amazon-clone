import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          id="3902064"
          className="home__image"
          src="https://m.media-amazon.com/images/I/71sDeh-y85L._SX1500_.jpg"
          alt="Home-Background"
        />
      </div>
      <div className="home__row">
        <Product
          id="2316282"
          title="Ram - Scion of Ikshvaku"
          price={280}
          image="https://images-na.ssl-images-amazon.com/images/I/51c5sbKdBGL._SX321_BO1,204,203,200_.jpg"
          rating={4}
        />
        <Product
          id="214454"
          title="2020 Apple MacBook Air (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB SSD) - Gold "
          price={87900}
          image="https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="952932"
          title="OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)"
          price={24999}
          rating={4}
          image="https://m.media-amazon.com/images/I/61iy2Ru9KdS._SL1500_.jpg"
        />
        <Product
          id="323947"
          title="Apple Watch Series 7 (GPS, 41mm) - Blue Aluminium Case with Abyss Blue Sport Band - Regular"
          image="https://m.media-amazon.com/images/I/71GIYSZpW+L._SL1500_.jpg"
          price={41900}
          rating={5}
        />
        <Product
          id="185686"
          title="Samsung 138 cm (55 inches) Crystal 4K Series Ultra HD Smart LED TV UA55AUE60AKLXL (Black) (2021 Model)"
          image="https://m.media-amazon.com/images/I/61GwJAhftvS._SL1500_.jpg"
          price={51990}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="185686"
          title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 256GB) - Space Grey (5th Generation)"
          image="https://m.media-amazon.com/images/I/81+N4PFF7jS._SL1500_.jpg"
          rating={5}
          price={103900}
        />
      </div>
    </div>
  );
}

export default Home;
