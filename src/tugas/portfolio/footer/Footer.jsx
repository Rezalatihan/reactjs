import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="kiri">Reza Catria Akbar</div>
      <div className="kanan">
        <a href="https://www.instagram.com/reza.c.a/">
          <img src="iig.png" alt="instagram" />
        </a>
        <a href="https://github.com/Rezalatihan">
          <img src="gitt.png" alt="gitHub" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
