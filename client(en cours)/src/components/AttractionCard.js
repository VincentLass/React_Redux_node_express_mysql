import React from "react";

const AttractionCard = ({ attraction, className }) => {
  return (
    <div className="card-container">
      {/* <div className="card"> */}
      <div className={className}>
        {/* <img src={attraction.image} alt="image attraction" /> */}
        <img
          src={attraction.image ? attraction.image : "./icons/chateau.webp"}
          alt="image-attraction"
        />
        <div className="card-informations">
          <h2>{attraction.nom}</h2>
          {attraction.description ? <h3>Description</h3> : "Pas de description pour cette attraction"}
          <p>{attraction.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;
