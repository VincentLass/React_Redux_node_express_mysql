import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addReservation } from "../actions/reservation-action";
import Header from "../components/Header";

const Reservations = () => {
  const [nom, setNom] = useState("");
  const [mail, setMail] = useState("");
  const [date, setDate] = useState("");
  const [places, setPlaces] = useState(0);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleAddReservation = async (e) => {
    e.preventDefault();

    if (nom && mail && date && places && message) {
      const data = {
        nom,
        mail,
        date,
        places,
        message,
      };
      console.log(data);
      await dispatch(addReservation(data));

      setNom("");
      setMail("");
      setDate("");
      setPlaces(0);
      setMessage("");
    }
  };

  const handleReset = () => {
    setNom("");
    setMail("");
    setDate("");
    setPlaces(0);
    setMessage("");
  }

  return (
    <div className="reservation-page">
      <Header />

      <form onSubmit={ handleAddReservation}>
        <div className="form-container">
          <h1>Réservation</h1>
          <div className="form-positioning">
            <div className="champ">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                id="name"
                value={nom}
                // pattern="[a-zA-Z]{2,}"
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>
            <div className="champ">
              <label htmlFor="mail">Email</label>
              <input
                type="email"
                name="mail"
                value={mail}
                placeholder="Email"
                id="mail"
                onChange={(e) => setMail(e.target.value)}
                required
              />
            </div>
            <div className="champ">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="champ">
              <label htmlFor="places">Places</label>
              <input
                type="number"
                name="places"
                placeholder="Places"
                id="places"
                value={places}
                onChange={(e) => setPlaces(e.target.value)}
                required
              />
            </div>
            <div className="champ-text">
              <label htmlFor="message">Laissez un message</label>
              <textarea
                type="text"
                name="message"
                placeholder="Laissez un message si besoin"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
              ></textarea>
            </div>
          </div>
          <div className="btn">
            <button type="submit">Envoyer</button>
            <button type="reset" onClick={handleReset}>Réinitialiser</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reservations;
