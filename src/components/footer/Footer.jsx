import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer-container main-container">
        <div className="listItems">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
