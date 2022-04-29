import React from "react";
import GetReservationCard from "../components/GetReservationCard";
import Header from "../components/Header";

const AdminGetReservations = ({ reservationsListe }) => {
    // console.log({reservationsListe});
  return (
    <div>
      <Header />
      <div className="page-title">
        <h1>Liste des réservations</h1>

        <div className="result-reservation">
          {reservationsListe.map((reservation) => (
            <GetReservationCard 
                key={reservation.id}
                reservation = {reservation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminGetReservations;
