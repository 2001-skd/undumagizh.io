import { useSelector } from "react-redux";
import "../../src/index.css";
import "../css/header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const bookMarkItems = useSelector((store) => store.bookmark.items);
  console.log("booked", bookMarkItems);
  return (
    <header>
      <div className="logo_container">
        <img
          src="../../src/assets/images/logo/logo_1.png"
          className="logo_img"
        />
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
        <span className={menuOpen ? "bar open" : "bar"}></span>
      </div>

      <div className={`nav_items ${menuOpen ? "show_menu" : ""}`}>
        <ul>
          <Link to="/">
            <li className="nav_item">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav_item">About Us</li>
          </Link>
          <Link to="/bookmark">
            <li className="nav_item">BookMark🔖 - ({bookMarkItems.length})</li>
          </Link>
          <li className="nav_item">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
