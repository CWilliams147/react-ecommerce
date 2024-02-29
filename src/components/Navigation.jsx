import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ navItems }) => {
  return (
    <nav id="nav">
      <div className="">Shop Random Products</div>
      <ul>
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
