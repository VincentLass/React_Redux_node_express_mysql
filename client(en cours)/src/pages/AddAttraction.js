import React from "react";
import Header from "../components/Header";

const AddAttraction = () => {
  return (
    <div>
    <Header />
      <form className="form-container">
        <div className="form-positioning">
          <input 
              type="text" 
              placeholder="Nom de l'attraction" 
              value=""
              className="champ"
          />
          <input 
              type="text" 
              placeholder="Image de l'attraction" 
              className="champ"
              value=""
          />
          <textarea 
              placeholder="Description de l'attraction" 
              className="champ"
              value=""
          ></textarea>
          <input type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
};

export default AddAttraction;
