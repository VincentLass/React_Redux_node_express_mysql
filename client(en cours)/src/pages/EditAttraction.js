import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
// import AttractionCard from "../components/AttractionCard";
import EditAttractionCard from "../components/EditAttractionCard";
import { getAttractions } from "../actions/attraction-action";

const EditAttraction = ({ listeAttractions }) => {
  // const listeAttraction = useSelector((state) => state.attractionReducer);
  // const [editAttraction, setEditAttraction] = useState(false);
  // const [editToggle, setEditToggle] = useState(false);
  // console.log(listeAttractions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAttractions());
  
  });
  

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
            <h1>Merci d'ajouter des attractions</h1>
          )}
        {/* </div>
      </div> */}
    </div>
  );
};

export default EditAttraction;
