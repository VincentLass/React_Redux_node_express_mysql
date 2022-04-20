import React from "react";
import Header from "../components/Header";

const AddAttraction = () => {
  return (
    <div>
    <Header />

    <form action="" method="post">
    
        <div className="admin-form-positioning">
        <h1>Ajouter attraction</h1>
            {/* </div> */}
            <div className="admin-card-informations">
                <input type="hidden" value="" name="id" />
                <div className="champ">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" value="" name="nom" />
                </div>
                <div className="champ">
                    <label htmlFor="image">Image</label>
                    <input type="text" value="" name="image" />
                </div>
                <div className="champ">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        value=""
                        name="description"
                    />
                </div>
                <button type="submit">Envoyer</button>
            </div>
        </div>
    </form>
    </div>  
  );
};

export default AddAttraction;
