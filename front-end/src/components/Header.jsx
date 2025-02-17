import React from "react";
import logoStreamix from "../assets/logo/logoStreamix.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoStreamix} alt="Logo do Streamix" />
      </Link>

      <Link to="/" className="header__link">
        <h1>Streamix</h1>
      </Link>
    </div>
  );
};

export default Header;
