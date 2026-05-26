import "../../styles/components/hero-section.css";

import { useContext } from "react";
import { BusinessContext } from "../../context/BusinessContext";

export default function HeroSection() {
  const business = useContext(BusinessContext);

  return (
    <section className="hero">
      <div className="hero-content container">

        <h1 className="hero-title">
          {business.name}
        </h1>

        <h2 className="hero-subtitle">
          Relax. Refresh. Rejuvenate.
        </h2>

        <p className="hero-text">
          Experience premium wellness and spa treatments designed to restore your body and mind.
        </p>

        <button className="hero-button">
          Book Your Session
        </button>

      </div>
    </section>
  );
}