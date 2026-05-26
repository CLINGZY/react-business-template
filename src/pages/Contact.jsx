import { useContext } from "react";
import { BusinessContext } from "../context/BusinessContext";

export default function Contact() {
  const business = useContext(BusinessContext);

  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Let’s connect with {business.name}</h1>
        <p>
          Whether it’s a quick question or a full booking, we’re only one tap away.
        </p>
      </div>

      <div className="contact-grid">

        <a className="contact-card call" href={`tel:${business.phone}`}>
          <span>📞</span>
          <h3>Call Us</h3>
          <p>Speak directly with our team</p>
        </a>

        <a
          className="contact-card whatsapp"
          href={`https://wa.me/${business.whatsapp}`}
          target="_blank"
        >
          <span>💬</span>
          <h3>WhatsApp</h3>
          <p>Fast replies & booking support</p>
        </a>

        <a className="contact-card email" href={`mailto:${business.email}`}>
          <span>📧</span>
          <h3>Email</h3>
          <p>Send detailed inquiries anytime</p>
        </a>

        <a
          className="contact-card instagram"
          href={business.instagram}
          target="_blank"
        >
          <span>📷</span>
          <h3>Instagram</h3>
          <p>See our latest treatments</p>
        </a>

        <a
          className="contact-card facebook"
          href={business.facebook}
          target="_blank"
        >
          <span>📘</span>
          <h3>Facebook</h3>
          <p>Updates & community posts</p>
        </a>

      </div>

    </div>
  );
}