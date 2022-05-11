import React from "react";
import { FiMenu } from "react-icons/fi";

function Header({ onMobileClick }) {
  return (
    <header className="header">
      <FiMenu className="btn-menu" onClick={onMobileClick} />

      <div className="header__label">IPHunt</div>
    </header>
  );
}

export default Header;
