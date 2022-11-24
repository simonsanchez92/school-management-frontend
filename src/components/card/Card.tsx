import logo from "../../assets/site-logo.png";

import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-info">
          <h6>Students</h6>
          <span>5054</span>
        </div>
        <div className="card-icon">
          <img src={logo} alt="logo" className="site-logo" />
        </div>
      </div>
    </div>
  );
};

export default Card;
