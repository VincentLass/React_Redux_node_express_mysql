import React from 'react';

const GetReservationCard = ({reservation}) => {
    return (
        <div className='reservation-card'>
          <h3>{reservation.id}</h3>
          <div>
            <div className='reservation-infos'>
              <h4>nom: {reservation.nom}</h4>
              <h4>email: {reservation.mail}</h4>
            </div>
            <div className='reservation-infos'>
              <p>date: {reservation.date}</p>
              <p>Nb places: {reservation.places}</p>
            </div>
            <p>{reservation.message}</p>
          </div>
        </div>
    );
};

export default GetReservationCard;