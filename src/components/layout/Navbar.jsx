import { Link } from "react-router-dom";
import { useContext } from "react";
import { BusinessContext } from "../../context/BusinessContext";
import "../../styles/components/navbar.css";

export default function Navbar() {
  const business = useContext(BusinessContext)

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <h2 className="logo">
          {business.name}
        </h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>

    </nav>
  );
}