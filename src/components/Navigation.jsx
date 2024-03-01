import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ navItems }) => {
  return (
    <nav id="nav">
      <div className="site-title">Shop Random Products</div>
      <ul className="nav-items">
        {navItems.map((link, index) => {
          return (
            <li key={`${link.title}-${index}`}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  navItems: PropTypes.array,
};

export default Navigation;
