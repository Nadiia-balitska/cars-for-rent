import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <h2>Car Rental</h2>
        <ul>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>

          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};
