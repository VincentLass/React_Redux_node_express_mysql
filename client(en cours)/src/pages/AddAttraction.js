import React, { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
// import { useState } from "react/cjs/react.production.min";
import { addAttraction } from "../actions/attraction-action";
import Header from "../components/Header";

const AddAttraction = () => {
    const admin = useSelector((state) => state.connexionReducer);
  const [nom, setNom] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleForm = async (e) => {
      e.preventDefault();

      if(nom && image && description) {
          const data = {
              nom,
              image,
              description,
              id_admin: admin.admin[0].id,
          };
          console.log(admin.admin[0].id);
          console.log(admin);
          await dispatch(addAttraction(data));
          setNom("");
          setImage("");
          setDescription("");
      }
  }

  return (
    <div>
      <Header />

      <form
        action=""
        method="post"
        onSubmit={(e) => {
          handleForm(e);
        }}
      >
        <div className="admin-form-positioning">
          <h1>Ajouter attraction</h1>
          {/* </div> */}
          <div className="admin-card-informations">
            <input type="hidden" value="" name="id" />
            <div className="champ">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                value={nom}
                name="nom"
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="champ">
              <label htmlFor="image">Image</label>
              <input
                type="text"
                value={image}
                name="image"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="champ">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
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
