import React, { useState } from "react";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../actions/connexion-action";
import { Navigate } from "react-router-dom";

const Connexion = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const admin = useSelector((state) => state.connexionReducer);
  const dispatch = useDispatch();

  const handleAdminConnexion = (e) => {
    e.preventDefault();
    
    if (mail && password) {
      const data = {
        mail,
        password,
      };
      console.log(data);
      dispatch(login(data));
      setMail("");
      setPassword("");
    }
  };

  console.log(admin.loggedIn);

  return (
    <div>
      <Header />
      {!admin.loggedIn ? (
        <form onSubmit={handleAdminConnexion}>
          <div className="form-container">
            <h1>Connexion</h1>
            <div className="form-positioning">
              <div className="champ">
                <label htmlFor="mail">Email</label>
                <input
                  type="email"
                  name="mail"
                  placeholder="Email"
                  id="mail"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
              </div>
              <div className="champ">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="btn">
              <button type="submit">Se connecter</button>
            </div>
          </div>
        </form>
      ) : (
        <Navigate to="/admin/edit-attraction" />
      )}
    </div>
  );
};

export default Connexion;
