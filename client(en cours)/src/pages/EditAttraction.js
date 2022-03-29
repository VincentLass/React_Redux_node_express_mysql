import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import AttractionCard from "../components/AttractionCard";

const EditAttraction = ({listeAttractions}) => {
  // const listeAttractions = useSelector((state) => state.attractionReducer);
  // const [editAttraction, setEditAttraction] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  console.log(listeAttractions);

  return (
    <div>
      <Header />

      {/* <form>
        <div className="form-container">
        <h1>Attraction numéro :</h1>
          <div className="form-positioning">
            
            <input type="hidden" value="" name="id" />
            <div className="champ">
              <label htmlFor="nom">Nom</label>
              <input type="text" value=" " name="nom" />
            </div>
            <div className="champ">
              <label htmlFor="image">Image</label>
              <input type="text" value="" name="image" />
            </div>
            <div className="champ">
              <label htmlFor="description">Description</label>
              <input type="text" value="" name="description" />
            </div>
            <button type="submit">Modifier</button>
          </div>
        </div>
      </form>
      <form>
        <input type="hidden" value="" name="id" />
        <button type="submit">Supprimer</button>
      </form> */}
      {listeAttractions.length > 0 ? (
        listeAttractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} className={ attraction.id%2 === 0 ? "result-left" : "result-right"} />
          ))
      ) : <h1>Ajouter attraction</h1>
      }
    </div>
  );
};

export default EditAttraction;
