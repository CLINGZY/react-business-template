import "../../styles/components/cta-section.css";

import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <section className="cta-section">
      <h2 className="cta-title">Ready to relax and recharge?</h2>

      <p className="cta-text">
        Book your wellness session today and experience complete relaxation.
      </p>

      <button className="cta-button" onClick={handleContact}>
        Contact Us
      </button>
    </section>
  );
}