import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import avatar from "../../assets/images/icons/person.svg";

const Navbar = () => {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header__avatar-container">
        <img className="header__avatar-image" src={avatar}></img>
      </div>
      <div className="links__container">
        <Link
        className="links__links" 
        to={"/"}
      >
        <b>My Insights</b>
      </Link>


      </div>
    </header>
  );
};

export default Navbar;