import "./Footer.scss";
import { Link } from "react-router-dom";
import wallet from "../../assets/images/icons/wallet.png"
import bolt from "../../assets/images/icons/Vector.svg";
import octupus from "../../assets/images/icons/Octopus.svg";

const Footer = () => {
  return (
    <footer>
      <div className="icons__container">
        <div className="icons__wrapper">
        <Link className="icons__link" to={"/"}>
          <img src={octupus} className="icons__image"/>
          <p>Home</p>
        </Link></div>

        <div className="icons__wrapper">
        <Link className="icons__link" to={"/"}>
        <img src={bolt} className="icons__image" />
        <p>Usage</p>
        </Link>
        </div>

        <div className="icons__wrapper">
        <Link className="icons__link" to={"/"}>
          <img src={wallet} className="icons__image"/>
          <p>Bills</p>
        </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
