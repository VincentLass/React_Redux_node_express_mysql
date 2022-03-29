import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/connexion-action";

const Header = () => {
  const admin = useSelector((state) => state.connexionReducer);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
    <Navigate to="/"/>
  };
  console.log(admin.loggedIn);

  return (
    <div className="header">
      {admin.loggedIn === true ? (
        <nav>
          <ul>
            <li>
              <NavLink to="/admin/edit-attraction">
                <h1>Edition</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/add-attraction">
                <h1>Ajout attraction</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/reservation">
                <h1>Réservations</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/connexion" onClick={logOut}>
                <h1>Déconnexion</h1>
                {/* <Navigate to="/" /> */}
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <h1>Accueil</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/attractions">
                <h1>Attractions</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/reservations">
                <h1>Réservations</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/connexion">
                <h1>Connexion</h1>
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
