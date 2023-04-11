import React from "react";
import "./Card.css"; // import CSS file for styling

const Card = ({ title, image, description, url }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={url} className="card-link">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
