import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './Cards.css'; // Importing CSS styles

const Cards = () => (
  <div className="card-container">
    <a href="/quotes/" className="card">
      <div className="card-image">
        <StaticImage src="../images/vietnam-field.png" alt="Card 1" />
        <div className="card-title windsong">Inspiration</div>
      </div>
    </a>
    <a href="/bucket-list/" className="card">
      <div className="card-image">
        <StaticImage src="../images/new-york.png" alt="Card 2" />
        <div className="card-title windsong">Bucket Lists</div>
      </div>
    </a>
    <a href="/365-days/" className="card">
      <div className="card-image">
        <StaticImage src="../images/pool.png" alt="Card 3" />
        <div className="card-title windsong">A year of travel</div>
      </div>
    </a>
  </div>
);

export default Cards;
