import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
// import AttractionCard from "../components/AttractionCard";
import EditAttractionCard from "../components/EditAttractionCard";

const EditAttraction = ({ listeAttractions }) => {
  // const listeAttractions = useSelector((state) => state.attractionReducer);
  // const [editAttraction, setEditAttraction] = useState(false);
  // const [editToggle, setEditToggle] = useState(false);
  // console.log(listeAttractions);

  return (
    <div>
      <Header />
      {/* <div >
        <div > */}
          {listeAttractions.length > 0 ? (
            listeAttractions.map((attraction) => (
              <EditAttractionCard
                key={attraction.id}
                attraction={attraction}
                // className={
                //   attraction.id % 2 === 0 ? "result-left" : "result-right"
                // }
              />
            ))
          ) : (
            <h1>Ajouter attraction</h1>
          )}
        {/* </div>
      </div> */}
    </div>
  );
};

export default EditAttraction;
