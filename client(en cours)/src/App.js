import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import Attractions from "./pages/Attractions";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import Connexion from "./pages/Connexion";
import EditAttraction from "./pages/EditAttraction";
import { useSelector } from "react-redux";
import Admin from "./pages/Admin";
import AddAttraction from "./pages/AddAttraction";
import AdminGetReservations from "./pages/AdminGetReservations";

const App = () => {
  const listeAttractions = useSelector((state) => state.attractionReducer);
  const reservationsListe = useSelector((state) => state.reservationReducer);
  console.log(reservationsListe);

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home listeAttractions={listeAttractions} />}
          ></Route>
          <Route
            path="/attractions"
            element={<Attractions listeAttractions={listeAttractions} />}
          ></Route>
          <Route path="/reservations" element={<Reservations />}></Route>
          <Route path="/connexion" element={<Connexion />}></Route>
          <Route
            path="/admin/edit-attraction"
            element={<EditAttraction listeAttractions={listeAttractions} />}
          ></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route
            path="/admin/add-attraction"
            element={<AddAttraction />}
          ></Route>
          <Route
            path="/admin/reservations"
            element={
              <AdminGetReservations reservationsListe={reservationsListe} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
