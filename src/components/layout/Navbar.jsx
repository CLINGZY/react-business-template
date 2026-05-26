import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { BusinessContext } from "../../context/BusinessContext";
import "../../styles/components/navbar.css";

export default function Navbar() {
  const business = useContext(BusinessContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <h2 className="logo">{business.name}</h2>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>

      </div>

      <div className={`nav-panel ${open ? "active" : ""}`}>

        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

      </div>

    </nav>
  );
}