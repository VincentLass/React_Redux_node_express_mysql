import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editAttraction, deleteAttraction, getAttractions } from "../actions/attraction-action";

const EditAttractionCard = ({ attraction }) => {
  const admin = useSelector((state) => state.connexionReducer);
  //   console.log(admin.admin[0].id);
  const [editToggle, setEditToggle] = useState(false);

  const [editNom, setEditNom] = useState(attraction.nom);
  const [editImage, setEditImage] = useState(attraction.image);
  const [editDescription, setEditDescription] = useState(
    attraction.description
  );
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    const data = {
      id: attraction.id,
      nom: editNom,
      image: editImage,
      description: editDescription,
      id_admin: admin.admin[0].id,
    };
    console.log(data);
    dispatch(editAttraction(data));
    setEditToggle(false);
  };

  return (
    // <div className="card-container">
    <div>
      {editToggle ? (
        <form action="" method="post" onSubmit={(e) => handleEdit(e)}>
          <div className="admin-form-positioning">
            <div className="admin-icons">
              <h1>Attraction numéro : {attraction.id}</h1>
              <div className="icons">
                <img
                  src="../icons/edit.svg"
                  alt="bouton-edit"
                  className="edit-button"
                  onClick={() => setEditToggle(!editToggle)}
                />
                <img
                  src="../icons/delete.svg"
                  alt="bouton-delete"
                  className="delete-button"
                  onClick={() => dispatch(deleteAttraction(attraction.id))}
                />
              </div>
            </div>
            <div className="admin-card-informations">
              <input type="hidden" value={attraction.id} name="id" />
              <div className="champ">
                <label htmlFor="nom">Nom</label>
                <input
                  type="text"
                  defaultValue={attraction.nom}
                  name="nom"
                  onChange={(e) => setEditNom(e.target.value)}
                />
              </div>
              <div className="champ">
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  defaultValue={attraction.image}
                  name="image"
                  onChange={(e) => setEditImage(e.target.value)}
                />
              </div>
              <div className="champ">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  defaultValue={attraction.description}
                  name="description"
                  onChange={(e) => setEditDescription(e.target.value)}
                />
              </div>
              <button type="submit">Modifier</button>
            </div>
          </div>
        </form>
      ) : (
        <form>
          <div className="admin-form-positioning">
            <div className="admin-icons">
              <h1>Attraction numéro : {attraction.id}</h1>
              <div className="icons">
                <img
                  src="../icons/edit.svg"
                  alt="bouton-edit"
                  className="edit-button"
                  onClick={() => setEditToggle(!editToggle)}
                />
                <img
                  src="../icons/delete.svg"
                  alt="bouton-delete"
                  className="delete-button"
                  onClick={() => dispatch(deleteAttraction(attraction.id))}
                />
              </div>
            </div>
            <input type="hidden" value={attraction.id} name="id" />
            <div className="admin-card-informations">
              <div className="champ">
                <label htmlFor="nom">Nom</label>
                <p>{attraction.nom}</p>
              </div>
              <div className="champ">
                <label htmlFor="image">Image</label>
                <p>{attraction.image}</p>
              </div>
              <div className="champ">
                <label htmlFor="description">Description</label>
                <p>{attraction.description}</p>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditAttractionCard;
