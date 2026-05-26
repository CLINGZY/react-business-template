import { useContext } from "react";
import { BusinessContext } from "../context/BusinessContext";
import "../styles/pages/contact.css";

export default function Contact() {
  const business = useContext(BusinessContext);

  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Let’s connect with {business.name}</h1>
        <p>
          Choose the fastest way to reach us. We respond quickly across all channels.
        </p>
      </div>

      {/* MAIN ACTION BLOCK */}
      <div className="contact-main">

        <a className="contact-primary call" href={`tel:${business.phone}`}>
          📞 Call Now
        </a>

        <a
          className="contact-primary whatsapp"
          href={`https://wa.me/${business.phone?.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
        >
          💬 WhatsApp Chat
        </a>

        <a className="contact-primary email" href={`mailto:${business.email}`}>
          📧 Send Email
        </a>

      </div>

      {/* SECONDARY SOCIAL STRIP */}
      <div className="contact-socials">

        <a className="social-link instagram" href={business.instagram} target="_blank" rel="noreferrer">
          <span>📷</span>
          Instagram
        </a>

        <a className="social-link facebook" href={business.facebook} target="_blank" rel="noreferrer">
          <span>📘</span>
          Facebook
        </a>
      </div>

    </div>
  );
}