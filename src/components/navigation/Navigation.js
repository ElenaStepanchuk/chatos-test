import { NavLink } from 'react-router-dom';
import css from './navigation.css';

const Navigation = () => {
  return (
    <nav className="nav_container">
      <NavLink className="nav_link" to="prices">
        Prices
      </NavLink>
      <NavLink className="nav_link" to="table">
        Table
      </NavLink>
    </nav>
  );
};
export default Navigation;
