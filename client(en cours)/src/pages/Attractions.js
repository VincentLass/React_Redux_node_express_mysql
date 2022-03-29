import React from "react";
import AttractionCard from "../components/AttractionCard";
import Header from "../components/Header";


const Attractions = ({ listeAttractions }) => {

  return (
    <div className="home-page">
      <Header />
      <div className="attraction-page">
            
        <h1>Attractions</h1>
        
        <div className="result">
          {listeAttractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} className={ attraction.id%2 === 0 ? "result-left" : "result-right"} />
          ))}
        </div>
      </div>
    </div>   
  );
};

export default Attractions;
