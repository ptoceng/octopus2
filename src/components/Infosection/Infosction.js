import "./Infosection.scss";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/icons/entypo_chevron-left.svg";
import fire from "../../assets/images/icons/fire.svg";
import elip from "../../assets/images/icons/Ellipses.png";

const Infosection = () => {
  return (
    <section className="infosection">
      <div className="infosection__horozontalbox">
        <div className="infosection__horozontalbox-textcontainer">
          <h3 className="infosection__horozontalbox-title"><b>Eco Tips</b></h3>
          <ul className="infosection__vertbox-reclist">
            <li className="infosection__vertbox-reclistitem">
              <img className="infosection__vertbox-reclist--icon" src={fire} />
              <p class="infosection__vertbox-reclist-p">Charge Tesla overnight to save £10</p>
            </li>
            <li className="infosection__vertbox-reclistitem">
              <img className="infosection__vertbox-reclist--icon" src={fire} />
              <p class="infosection__vertbox-reclist-p">
              Hang up clothes to dry to save 1.8kg of CO2
              </p>
            </li>
            <li className="infosection__vertbox-reclistitem">
              <img className="infosection__vertbox-reclist--icon" src={fire} />
              <p class="infosection__vertbox-reclist-p">
                Try out <b>Agile Octopus</b>
              </p>
            </li>
          </ul>
          <div className="infosection__vertbox-reclist-imagecontainer">
          <img className="infosection__vertbox-reclist-icon" src={elip} />
          </div>
        </div>
      </div>
      <div className="infosection__vertbox-container">
        <div className="infosection__vertbox">
          <h3 className="infosection__vertbox-title">My Trends</h3>
          <p className="infosection__vertbox-info">+3%</p>
          <p className="infosection__vertbox-summary">
            increase in renewable energy usage since last month
          </p>
          <div className="infosection__vertbox-reclist-imagecontainer2">
          <img className="infosection__vertbox-reclist-icon2" src={elip} />
          </div>
        </div>
        <div className="infosection__vertbox">
          <h3 className="infosection__vertbox-title">My Rank</h3>
          <p className="infosection__vertbox-info">16th</p>
          <p className="infosection__vertbox-summary">
            out of 100 users in your community
          </p>
          <div className="infosection__vertbox-reclist-imagecontainer2">
          <img className="infosection__vertbox-reclist-icon2" src={elip} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infosection;
